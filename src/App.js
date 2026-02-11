import React, { useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import Room from "./Room";
import { TOKEN } from "./config";

export default function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      {!start ? (
        <div style={{ padding: 40 }}>
          <button onClick={() => setStart(true)}>Start Demo</button>
        </div>
      ) : (
        <MeetingProvider
          config={{
            meetingId: "",
            micEnabled: true,
            webcamEnabled: true,
            name: "Guest User"
          }}
          token={TOKEN}
        >
          <Room />
        </MeetingProvider>
      )}
    </>
  );
}
