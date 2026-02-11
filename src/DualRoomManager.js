import React, { useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import { TOKEN, ROOM_A, ROOM_B } from "./config";
import ParticipantView from "./ParticipantView";

export default function DualRoomManager() {
  const [mode, setMode] = useState("A");

  return (
    <div>
      <button onClick={() => setMode("A")}>Join Room A</button>
      <button onClick={() => setMode("B")}>Switch to Room B</button>
      <button onClick={() => setMode("relay")}>Enable Relay</button>

      <hr />

      {(mode === "A" || mode === "relay") && (
        <MeetingProvider
          token={TOKEN}
          config={{
            meetingId: ROOM_A,
            micEnabled: true,
            webcamEnabled: true,
            name: "User"
          }}
        >
          <h2>Room A</h2>
          <ParticipantView />
        </MeetingProvider>
      )}

      {(mode === "B" || mode === "relay") && (
        <MeetingProvider
          token={TOKEN}
          config={{
            meetingId: ROOM_B,
            micEnabled: true,
            webcamEnabled: true,
            name: "Relay User"
          }}
        >
          <h2>Room B</h2>
          <ParticipantView />
        </MeetingProvider>
      )}
    </div>
  );
}
