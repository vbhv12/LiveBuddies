"use client";
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {io as ClientIo} from "socket.io-client";


type SocketContextType = 

const SocketProvider = () => {
  return (
    <div>SocketProvider</div>
  )
}

export default SocketProvider