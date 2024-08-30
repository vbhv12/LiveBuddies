"use client"

import CreateServerModal from "@/components/modals/create-server-modal";
import { useState } from "react";

export const ModalProvider = () =>{

    const [isMounted, setIsMounted] = useState()
    return(
        <>
            <CreateServerModal/>
        </>
    )
}