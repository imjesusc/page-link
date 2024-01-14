import { create } from 'zustand'

export const useStore = create((set) => ({
  profile: {
    name: '',
    description: '',
    avatar: '',
    facebook: '',
    twitter: '',
    instagram: '',
    github: '',
    linkedin: '',
    email: ''
  },
  setProfile: (profile) => set((state) => ({ profile: { ...state.profile, ...profile } }))
}))
