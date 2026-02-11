import React, { useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import { TOKEN, ROOM_A, ROOM_B } from "./config";
import ParticipantView from "./ParticipantView";

export default function DualRoomManager() {
  const [mode, setMode] = useState("idle");

  return (
    <>
      <button onClick={() => setMode("normal")}>Normal Switch</button>
      <button onClick={() => setMode("relay")}>Enable Relay</button>

      {/* ROOM A */}
      <MeetingProvider
        token={TOKEN}
        config={{
          meetingId: ROOM_A,
          micEnabled: true,
          webcamEnabled: true,
          name: "User A"
        }}
      >
        <h2>Room A</h2>
        <ParticipantView />
      </MeetingProvider>

      {/* ROOM B — relay mirror */}
      {mode === "relay" && (
        <MeetingProvider
          token={TOKEN}
          config={{
            meetingId: ROOM_B,
            micEnabled: true,
            webcamEnabled: true,
            name: "Relayed Stream"
          }}
        >
          <h2>Room B (Relay)</h2>
          <ParticipantView />
        </MeetingProvider>
      )}
    </>
  );
}
