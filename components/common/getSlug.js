const getSlug = url => {
  const path = url.replace(process.env.CMS_URL, "");
  return path;
};

export default getSlug;
