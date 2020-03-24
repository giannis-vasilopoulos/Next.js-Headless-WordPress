export default lang => {
  const endpoint = `${process.env.CMS_URL}${
    lang !== process.env.DEFAULT_LANG ? "/".concat(lang) : ""
  }/wp-json`;
  return endpoint;
};
