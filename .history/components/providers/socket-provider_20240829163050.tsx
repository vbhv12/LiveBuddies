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

export const SocketProvider = ({children} : { children: React.ReactNode }) =>{
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(()=>{
        const socketInstance = new (ClientIo as any)(process.env.NEXT_PUBLIC_ITE)
    },[])
}

export default SocketProvider