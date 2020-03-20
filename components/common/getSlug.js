const getSlug = url => {
  const parts = url.split("/");
  return parts.length > 2 ? parts[parts.length - 2] : "";
};

export default getSlug;
