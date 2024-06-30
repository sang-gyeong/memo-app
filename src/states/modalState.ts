import { atom } from 'recoil';

type ModalType = {
  isOpen: boolean;
  component: React.ReactNode | null;
  callBack?: () => any;
};

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    isOpen: false,
    component: null,
  },
});
