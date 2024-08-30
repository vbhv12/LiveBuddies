"use client";
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {io as ClientIo} from "socket.io-client";


type SocketContextType = {
    socket: any | null;
    isConnected: boolean
}

const SocketContext = createContext<SocketContextType>({
    socket: null,
    isConnected: false
});

export const useSocket = () =>{
    return useContext(SocketContext);
};

export const SocketProvider = ({children} : { children: React.ReactNode})


const SocketProvider = () => {
  return (
    <div>SocketProvider</div>
  )
}

export default SocketProvider