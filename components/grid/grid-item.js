const GridItem = ({ page }) => {
  return (
    <div className="w-1/4" key={page.id}>
      <p className="text-center m-3">{page.title.rendered}</p>
      <img
        src={
          page.better_featured_image
            ? page.better_featured_image.source_url
            : "/images/sthlm-square.jpeg"
        }
        alt={page.title.rendered}
      />
      <p className="text-center m-3">{page.acf.location}</p>
      <ul>
        {page.acf.facilities &&
          page.acf.facilities.map((facility, i) => (
            <li key={i}>{facility.title} </li>
          ))}
      </ul>
    </div>
  );
};
export default GridItem;
