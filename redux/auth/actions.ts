import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthData } from "./initial-state";

export const handlePending = (state: RootState["auth"]) => {
  state.isLoading = true;
};

export const handleReject = (
  state: RootState["auth"],
  { payload }: PayloadAction<AuthData>
) => {
  state.error = payload as unknown as Error;
  state.isLoading = false;
};

export const handleRegisterFulfilled = (
  state: RootState["auth"],
  { payload }: PayloadAction<AuthData>
) => {
  state.message = payload.message;
  state.error = null;
  state.isLoading = false;
};

export const handleLoginFulfilled = (
  state: RootState["auth"],
  { payload }: PayloadAction<AuthData>
) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

export const handleLogoutFulfilled = (state: RootState["auth"]) => {
  state.user = { name: null, email: null, id: null, avatarURL: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
  state.isLoading = false;
};
