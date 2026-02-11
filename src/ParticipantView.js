import React, { useEffect, useRef } from "react";
import { useParticipant } from "@videosdk.live/react-sdk";

export default function ParticipantView({ participantId }) {
  const { webcamStream, webcamOn } = useParticipant(participantId);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current && webcamOn && webcamStream) {
      videoRef.current.srcObject = new MediaStream([
        webcamStream.track
      ]);
      videoRef.current.play();
    }
  }, [webcamStream, webcamOn]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted width={200} />
      <p>{participantId}</p>
    </div>
  );
}
