import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'localStorage',
  storage: localStorage,
});

const memoState = atom<Memo[]>({
  key: 'memos',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export default memoState;
