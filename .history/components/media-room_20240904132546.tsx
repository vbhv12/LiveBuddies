"use client";

import { useEffect, useState } from "react";
import {
    ControlBar,
    GridLayout,
    LiveKitRoom,
    ParticipantTile,
    RoomAudioRenderer,
    useTracks,
    VideoConference
  } from "@livekit/components-react";
  import "@livekit/components-styles";
  import { useUser } from "@clerk/nextjs";
  import { Loader2 } from "lucide-react";

  interface MediaRoomProps{
    chatId: string;
    video: boolean;
    audio: boolean;
  };

  export const MediaRoom = ({
    chatId,
    video,
    audio
  } : MediaRoomProps) => {
    const {user} = useUser();
    const [token, setToken] = useState("");

    useEffect(()=>{
        if(!user?.firstName || !user?.lastName) return;

        const name = `${user.firstName} ${user.lastName}`;


        (async () => {
            try {
                const response = await fetch('/api/live')
            } catch (error) {
                console.log(error);
            }
        })

    },[])
  }