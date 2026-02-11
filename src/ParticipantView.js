import React, { useEffect, useRef } from "react";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";

export default function ParticipantView() {
  const { participants, join } = useMeeting();

  useEffect(() => {
    join();
  }, []);

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {[...participants.keys()].map((id) => (
        <Video key={id} participantId={id} />
      ))}
    </div>
  );
}

function Video({ participantId }) {
  const { webcamStream, webcamOn } = useParticipant(participantId);
  const ref = useRef();

  useEffect(() => {
    if (ref.current && webcamOn && webcamStream) {
      ref.current.srcObject = new MediaStream([
        webcamStream.track.clone()
      ]);
      ref.current.play();
    }
  }, [webcamStream, webcamOn]);

  return <video ref={ref} autoPlay muted width={200} />;
}
