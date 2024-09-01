import { create } from 'zustand';

export interface IProjectState {
    projectName: string;
    date: string;
    setProject: (projectName: string, date: string) => void;
    resetProject: () => void;
}

const useProjectStore = create<IProjectState>((set) => ({
  projectName: '',
  date: '',
  setProject: (projectName: string, date: string) => set(() => ({ projectName, date })),
  resetProject: () => set(() => ({ projectName: '', date: '' })),
}));

export default useProjectStore;
