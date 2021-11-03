export const parseHTML = (string) => {
  string = string.replace('width="1920"', 'width="1280"');
  string = string.replace('height="1080"', 'height="720"');

  return string;
};
