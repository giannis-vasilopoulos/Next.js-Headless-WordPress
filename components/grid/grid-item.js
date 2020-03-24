const GridItem = ({ room }) => {
  return (
    <div className="w-1/4">
      <p className="text-center m-3">{room.title.rendered}</p>
      <img
        src={
          room.better_featured_image
            ? room.better_featured_image.source_url
            : "./images/sthlm-square.jpeg"
        }
        alt={room.title.rendered}
      />
      <p className="text-center m-3">{room.acf.location}</p>
      <ul>
        {room.acf.facilities &&
          room.acf.facilities.map((facility, i) => (
            <li key={i}>{facility.title} </li>
          ))}
      </ul>
    </div>
  );
};
export default GridItem;
