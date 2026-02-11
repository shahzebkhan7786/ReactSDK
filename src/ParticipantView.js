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
  const { webcamStream, micStream, webcamOn, micOn } =
    useParticipant(participantId);

  const videoRef = useRef();
  const audioRef = useRef();

  useEffect(() => {
    if (videoRef.current && webcamOn && webcamStream) {
      const clonedVideo = webcamStream.track.clone();
      videoRef.current.srcObject = new MediaStream([clonedVideo]);
      videoRef.current.play();
    }

    if (audioRef.current && micOn && micStream) {
      const clonedAudio = micStream.track.clone();
      audioRef.current.srcObject = new MediaStream([clonedAudio]);
      audioRef.current.play();
    }
  }, [webcamStream, micStream, webcamOn, micOn]);

  return (
    <>
      <video ref={videoRef} autoPlay muted width={200} />
      <audio ref={audioRef} autoPlay />
    </>
  );
}
