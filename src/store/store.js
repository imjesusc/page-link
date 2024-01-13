import { create } from 'zustand'

export const useStore = create((set) => ({
  profile: {
    name: '',
    description: '',
    avatar: ''
  },
  setProfile: (profile) => set((state) => ({ profile: { ...state.profile, ...profile } }))
}))
