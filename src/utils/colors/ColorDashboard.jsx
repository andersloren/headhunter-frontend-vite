import { useState } from "react";

export default function ColorDashboard() {
  const [hue, setHue] = useState(0);

  console.log(hue);
  return (
    <div>
      <input
        type="range"
        min="0"
        max="360"
        style={{ width: "400px" }}
        value={hue}
        onChange={(e) => setHue(e.target.value)}
      ></input>
      <label htmlFor="hue" id="hue" name="hue">
        Hue
      </label>
    </div>
  );
}
