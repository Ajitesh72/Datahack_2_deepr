import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import "../styles/map.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Mapcomponent() {
  const handleClick = (geo) => {
    console.log(geo.properties.name);
  };
  return (
    <>
      <div className="map">
        {/* <p>Please Use 2 Fingers to Zoom in and out</p> */}
        <ComposableMap
          className="custom-home-bg"
          style={{ width: "100%", height: "100%" }}
          // style={{ width: "100%", height: "100%", backgroundColor: "#011035" }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    onClick={() => handleClick(geo)}
                    geography={geo}
                    fill="#FFFFFF"
                    style={{
                      hover: {
                        fill: "blue",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            {/* Australia*/}
            <Marker coordinates={[133.006, -25.7128]}>
              <path
                d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                fill="red"
              />
            </Marker>
            {/*SA*/}
            <Marker coordinates={[-60.006, -10.7128]}>
              <path
                d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                fill="darkblue"
              />
            </Marker>
            {/*South Africa*/}
            <Marker coordinates={[30.006, 10.7128]}>
              <path
                d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                fill="red"
              />
            </Marker>
            {/*India*/}
            <Marker coordinates={[74.006, 23.7128]}>
              <path
                d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                fill="red"
              />
            </Marker>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
}
