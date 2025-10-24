import { create } from "zustand";

type User = {
  username: string;
  role: string;
};

type UserState = {
  user: User;
  actions: UserStoreActions;
};

type UserStoreActions = {
  setUser: (user: User) => void;
  // setRoles: (roles: string[]) => void;
};

// Zustand Store
const useUserStore = create<UserState>((set) => {
  return {
    user: {
      username: "",
      role: "",
    },
    actions: {
      setUser: (user: User) => set({ user }),
      // setRoles: (roles: string[]) => {
      //   const user = useUserStore.getState().user;
      //   set({ user: { ...user, roles } });
      // },
    },
  };
});

// Zustand Store Function
export const useUser = () => useUserStore(state => state.user);
export const useUserActions = () => useUserStore(state => state.actions);
