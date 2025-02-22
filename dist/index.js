const fetchNeoInkItems = async (id) => {
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

const fetchNeoInkItemData = async (
  item
) => {
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

const fetchNeoNoteSize = async (
  itemData
) => {
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

const fetchNeoPages = async (id) => {
  const items = await fetchNeoInkItems(id);

  const pages = [];
  for (const item of items) {
    const data = await fetchNeoInkItemData(item);
    if (!data) {
      continue;
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
    pages.push(page);
  }

  return pages;
};
