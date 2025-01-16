import { create } from "zustand";
import { UserProfileType } from "../@types/UserProfileType";

type UserProfileState = {
  userProfile: UserProfileType | null;
  onChangeUserProfile: (userProfile: UserProfileType) => void;
};

export const useUserProfile = create<UserProfileState>()((set) => ({
  userProfile: null,

  onChangeUserProfile(userProfile) {
    set({ userProfile });
  },
}));
