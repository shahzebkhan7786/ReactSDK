import React, { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantView from "./ParticipantView";
import { ROOM_A, ROOM_B } from "./config";

export default function Room() {
  const [roomId, setRoomId] = useState(null);

  const { join, leave, participants } = useMeeting({
    meetingId: roomId
  });

  const joinRoom = (id) => {
    setRoomId(id);
    setTimeout(() => join(), 200);
  };

  const switchRoom = (id) => {
    leave();
    setTimeout(() => {
      setRoomId(id);
      setTimeout(() => join(), 200);
    }, 300);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Current Room: {roomId || "None"}</h2>

      <button onClick={() => joinRoom(ROOM_A)}>Join Room A</button>
      <button onClick={() => switchRoom(ROOM_B)}>Switch to Room B</button>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {[...participants.keys()].map((id) => (
          <ParticipantView participantId={id} key={id} />
        ))}
      </div>
    </div>
  );
}
