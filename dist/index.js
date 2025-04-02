const NEO_METADATA_FETCH_URL = 'https://neonotes2-d0880.firebaseio.com';

const NEO_AUTH_URL = "https://auth.neolab.net/oauth/v2/token";
const NEO_STORAGE_URL = "https://storage.neolab.net/storage/v2/public/file";

const NEOINK_DATA_FETCH_URL =
  'https://firebasestorage.googleapis.com/v0/b/neonotes2-d0880.appspot.com/o';

const fetchNeoInkItems = async id => {
  try {
    const response = await axios.get(NEOINK_DATA_FETCH_URL, {
      params: {
        prefix: `sharestudio/${id}/`,
        delimiter: '/',
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error', error);
    return [];
  }
};

const authenticateNeo = async () => {
  try {
    const response = await axios.post(NEO_AUTH_URL, '', {
      params: {
        grant_type: "client_credentials",
      },
      headers: {
        Authorization:
          "Basic bmVvbGFiX25lb3N0dWRpb193ZWJfc2VydmljZTpKdXMwODhiQzZmQjQ4REJ5YWYwWGtJVk4zUkFobEl1cQ==",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

const fetchNeoStorageDataLocationUrl = async (id, token) => {
  try {
    const response = await axios.get(NEO_STORAGE_URL, {
      params: {
        fileNameWithPath: `public/sharestudio/${id}`,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.requestUri;
  } catch (error) {
    console.error('Error', error);
    return null;
  }
};

const fetchNeoInkItemDataFromStorage = async (url) => {
  try {
    const response = await axios.get(`${url}`);

    for (const stroke of response.data.strokes) {
      stroke.dots = getDots(stroke.data, stroke.dotCount, stroke.startTime);
    }

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
  return null;
};

const fetchNeoInkItemData = async item => {
  try {
    const response = await axios.get(
      `${NEOINK_DATA_FETCH_URL}/${encodeURIComponent(item.name)}`,
      {
        params: {
          alt: 'media',
        },
      }
    );

    for (const stroke of response.data.strokes) {
      stroke.dots = getDots(stroke.data, stroke.dotCount, stroke.startTime);
    }

    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
  return null;
};

const fetchNeoNoteSize = async itemData => {
  const url = `page/${itemData.section}/${itemData.owner}/${itemData.bookCode}/0.json`;
  const defaultRect = {
    height: 118,
    width: 91,
    x: 5,
    y: 5,
  };
  try {
    const response = await axios.get(`${NEO_METADATA_FETCH_URL}/${url}`);
    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
  return defaultRect;
};

const fetchNeoPages = async id => {
  const token = await authenticateNeo();

  if (!token) {
    window.alert('Failed to authenticate');
    return [];
  }

  const dataUrl = await fetchNeoStorageDataLocationUrl(id, token);

  if (!dataUrl) {
    window.alert('Failed to get storage data location');
    return [];
  }

  const data = await fetchNeoInkItemDataFromStorage(dataUrl);

  if (!data) {
    window.alert("Failed to get data");
    return [];
  }

  const size = await fetchNeoNoteSize(data);
  const page = {
    width: size.width,
    height: size.height,
    metadata: {
      section: data.section,
      owner: data.owner,
      bookCode: data.bookCode,
      pageNumber: data.pageNumber,
    },
    strokes: [],
  };

  for (const stroke of data.strokes) {
    page.strokes.push({
      startTime: stroke.startTime,
      endTime: stroke.dots.sort((a, b) => a.time - b.time)[
        stroke.dots.length - 1
      ].time,
      dots: stroke.dots.map(dot => ({
        timestamp: dot.time,
        pressure: dot.f,
        x: dot.x,
        y: dot.y,
      })),
    });
  }

  return [page];
};
