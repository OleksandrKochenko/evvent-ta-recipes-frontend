export interface AuthData {
  user: {
    name: string | null;
    email: string | null;
    id: string | null;
    avatarURL: string | null;
  };
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: Error | null;
  message: string | null;
}

export const initialState: AuthData = {
  user: { name: null, email: null, id: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  message: null,
};
