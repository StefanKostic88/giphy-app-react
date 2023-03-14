export const generateData = ({
  id,
  images: {
    original: { url: gifUrl },
  },
  title,
  url,
}) => ({
  id,
  gifUrl,
  title,
  url,
});
