import React, { useRef } from "react";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";

export default function ParticipantView() {
  const { participants, join } = useMeeting();

  return (
    <div>
      <button
        onClick={join}
        style={{ padding: 10, fontSize: 16, marginBottom: 20 }}
      >
        Join Meeting
      </button>

      <div style={{ display: "flex", gap: 10 }}>
        {[...participants.keys()].map((id) => (
          <Video key={id} participantId={id} />
        ))}
      </div>
    </div>
  );
}

function Video({ participantId }) {
  const { webcamStream, micStream, webcamOn, micOn } =
    useParticipant(participantId);

  const videoRef = useRef();
  const audioRef = useRef();

  if (webcamOn && webcamStream && videoRef.current) {
    videoRef.current.srcObject = new MediaStream([webcamStream.track]);
  }

  if (micOn && micStream && audioRef.current) {
    audioRef.current.srcObject = new MediaStream([micStream.track]);
  }

  return (
    <>
      <video ref={videoRef} autoPlay muted playsInline width={220} />
      <audio ref={audioRef} autoPlay />
    </>
  );
}
