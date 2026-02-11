import React, { useState } from "react";
import { VideoSDK } from "@videosdk.live/react-sdk";
import Room from "./Room";
import { TOKEN } from "./config";

export default function App() {
  const [start, setStart] = useState(false);

  return (
    <VideoSDK token={TOKEN}>
      {!start ? (
        <div style={{ padding: 40 }}>
          <button onClick={() => setStart(true)}>Start Demo</button>
        </div>
      ) : (
        <Room />
      )}
    </VideoSDK>
  );
}
