export function getDots(
  data,
  dotCount,
  time,
  scale = 1
) {
  let dotBlob;
  if (typeof data === 'string') {
    const binaryString = atob(data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    dotBlob = bytes;
  } else {
    dotBlob = data.toUint8Array();
  }

  const dots = [];

  const dotSize = dotBlob.length / dotCount; // 16 or 17
  let shiftDot = 0;
  if (!(dotSize === 16 || dotSize === 17)) {
    console.log('invalid dot', dotBlob.length, dotSize);
    return;
  }
  if (dotSize === 17) {
    shiftDot = 1;
  }

  let dotTime = time;
  for (let i = 0; i < dotCount; i++) {
    const st = i * dotSize;
    const end = st + dotSize;
    const d = dotBlob.slice(st, end);

    const deltaTime = d[0];
    const force = toFloat(d, 1 + shiftDot);
    const x = toFloat(d, 5 + shiftDot) * scale;
    const y = toFloat(d, 9 + shiftDot) * scale;

    dotTime += deltaTime;
    const dot = {
      deltaTime,
      time: dotTime,
      f: force,
      x,
      y,
    };
    dots.push(dot);
  }
  
  invalidDotsCheck(dots);
  
  return dots;
}

export function getTransform(
  transformData,
  size,
  rect
) {

  let strokeTransform;
  if (transformData) {
    if (typeof transformData === 'string') {
      const binaryString = atob(transformData);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      strokeTransform = bytes;
    } else {
      strokeTransform = transformData.toUint8Array();
    }
  }

  let transform = [
    1,
    0,
    0,
    1,
    (-rect.x / rect.width) * size.w,
    (-rect.y / rect.height) * size.h,
  ];

  // let transform = [1, 0, 0, 1, 0, 0]
  if (!strokeTransform) {
    return transform;
  }

  if (strokeTransform.length !== 24) {
    console.log('transform size error', strokeTransform.length);
    return transform;
  }

  transform = [];
  for (let i = 0; i < 6; i++) {
    const m = toFloat(strokeTransform, i * 4);
    transform.push(m);
  }

  const m1 = transform[0];
  const m2 = transform[1];
  let m3 = (transform[2] / rect.width) * size.w;
  const m4 = transform[3];
  const m5 = transform[4];
  let m6 = (transform[5] / rect.height) * size.h;

  m3 -= (rect.x / rect.width) * size.w;
  m6 -= (rect.y / rect.height) * size.h;
  transform = [m1, m4, m2, m5, m3, m6];
  
  return transform;
}

function invalidDotsCheck(dots) {
  for (const d of dots) {
    if (d.f < 0 || d.f > 1) {
      console.log('Invalid Dot f', dots);
      return;
    }
    if (d.x < 0 || d.x > 200) {
      console.log('Invalid Dot x', dots);
      return;
    }
    if (d.y < 0 || d.y > 200) {
      console.log('Invalid Dot y', dots);
      return;
    }
  }
}

function toFloat(d, index) {
  const byte = d.slice(index, index + 4);
  const view = new DataView(byte.buffer);
  return view.getFloat32(0, true);
}

export function intToByteArray(input) {
  const arr = new Uint8Array(4);
  const dv = new DataView(arr.buffer);
  dv.setUint32(0, input, true);
  return Array.from(arr);
}
