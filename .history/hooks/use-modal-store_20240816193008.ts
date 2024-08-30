import { Server } from "@prisma/client";
import {create} from "zustand"

export type ModalType = "createServer" | "invite";

interface ModalData{
    server?:Server
}

interface ModalStore{
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
    onOpen: (type: ModalType) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) =>({
    type: null,
    isOpen: false,
    data: {}
    onOpen: (type) => set({isOpen: true, type}),
    onClose: () => set({type: null, isOpen:false})
}))