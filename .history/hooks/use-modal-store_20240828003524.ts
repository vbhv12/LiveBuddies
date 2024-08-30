import { ChannelType, Server } from "@prisma/client";
import { Channel } from "diagnostics_channel";
import {create} from "zustand"

export type ModalType = "createServer" | "invite" | "editServer" | "members" | "createChannel" | "leaveServer" | "deleteServer" | "deleteChannel";

interface ModalData{
    server?:Server;
    channel?:Channel
    channelType?: ChannelType;
}

interface ModalStore{
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) =>({
    type: null,
    isOpen: false,
    data: {},
    onOpen: (type, data = {}) => set({isOpen: true, type, data}),
    onClose: () => set({type: null, isOpen:false})
}))