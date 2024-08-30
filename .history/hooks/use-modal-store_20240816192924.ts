import { Server } from "@prisma/client";
import {create} from "zustand"

export type ModalType = "createServer" | "invite";

interface ModalData{
    server?:Server
}

interface ModalStore{
    type: ModalType | null;
    data: Mode
    isOpen: boolean;
    onOpen: (type: ModalType) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) =>({
    type: null,
    isOpen: false,
    onOpen: (type) => set({isOpen: true, type}),
    onClose: () => set({type: null, isOpen:false})
}))