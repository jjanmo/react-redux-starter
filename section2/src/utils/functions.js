export const parseHTML = (string) => {
  const wIndex = string.indexOf('width');
  const hIndex = string.indexOf('height');

  const _width = string.substring(wIndex, wIndex + 12);
  const _height = string.substring(hIndex, hIndex + 13);

  string = string.replace(_width, 'width="1280"');
  string = string.replace(_height, 'height="720"');

  return string;
};
