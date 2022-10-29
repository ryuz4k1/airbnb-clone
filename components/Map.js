import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ryuz4k1/cl9ufqtu3000016ocyopmnp3g"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={viewport}
      style={{}}
      onMove={(evt) => setViewport(evt.viewState)}>
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat} anchor="bottom">
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin">
              📍
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long} >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
