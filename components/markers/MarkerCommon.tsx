import { Marker, Popup } from "react-leaflet";
import { Restaurant } from "../../types";

export default function MarkerCommon(
  restaurant: Restaurant,
  iconObject,
  handleClick: (e: any) => void
) {
  return (
    <Marker
      position={[restaurant.coordinates[1], restaurant.coordinates[0]]}
      icon={iconObject}
    >
      <Popup>
        <h1 className="">{restaurant.name}</h1>
        <br />
        <p>{restaurant.hint}</p>
        <button className="block text-blue-900" onClick={handleClick}>
          OK
        </button>
      </Popup>
    </Marker>
  );
}
