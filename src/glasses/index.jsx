import { useState } from "react";
import data from "./data.json";

export default function Glasses() {
  const [glasses, setGlasses] = useState(data);
  const [imgPath, setImgPath] = useState(glasses[0].url);
  const [namePath, setNamePath] = useState(glasses[0].name);
  const [decsPath, setDecsPath] = useState(glasses[0].desc);

  const handleColorGlassees = (path) => {
    setImgPath(path.url);
    setNamePath(path.name);
    setDecsPath(path.desc);
  };

  const renderListGlasses = () => {
    const newListGlasses = glasses.map((glass) => {
      return (
        <div>
          <button
            key={glass.id}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              marginLeft: "20px",
              marginTop: "20px",
            }}
            onClick={() => handleColorGlassees(glass)}
          >
            <img src={glass.url} style={{ width: "100%" }} />
          </button>
        </div>
      );
    });
    return newListGlasses;
  };

  return (
    <div>
      <h1>TRY GLASSES APP ONLINE</h1>
      <div style={{ display: "flex", position: "relative" }}>
        <img
          src="./glassesImage/model.jpg"
          width={"300px"}
          style={{ marginRight: "200px" }}
        />
        <img src="./glassesImage/model.jpg" width={"300px"} />

        <div
          style={{
            position: "absolute",
            width: "180px",
            left: "60px",
            top: "90px",
          }}
        >
          <img src={imgPath} style={{ width: "180px", opacity: "0.7" }} />
          <h5 style={{ fontSize: "20px", marginTop: "70px", color: "blue" }}>
            {namePath}
          </h5>
          <p style={{ fontSize: "16px" }}>{decsPath}</p>
        </div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {renderListGlasses()}
      </div>
    </div>
  );
}
