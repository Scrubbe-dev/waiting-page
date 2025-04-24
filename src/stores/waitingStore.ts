/*  eslint-disable  @typescript-eslint/no-unused-vars */
/*  eslint-disable  @typescript-eslint/no-explicit-any */

import { create } from 'zustand';
import api from '../lib/axiosConfig';

interface WaitingUserState {
  loading: boolean;
  error: string | null;
  success: boolean;
  submitForm: (data: {
    fullName: string;
    email: string;
    company: string;
    role: string;
    message?: string;
  }) => Promise<void>;
  resetState: () => void;
}

export const useWaitingStore = create<WaitingUserState>((set) => ({
  loading: false,
  error: null,
  success: false,
  
  submitForm: async (data) => {
    set({ loading: true, error: null, success: false });
    try {
      await api.post('/post-waiting', data);
      set({ success: true, loading: false });
    } catch (error:any) {
      set({ error: error.response?.data?.message || 'Submission failed', loading: false });
    }
  },

  resetState: () => set({ error: null, success: false, loading: false })
}));