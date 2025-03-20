"use client";
import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";

export const AuthProvider = ({children}) => {
  return  <KindeProvider
      clientId={process.env.KINDE_CLIENT_ID}
      domain={process.env.KINDE_AUTH_DOMAIN}
      redirectUri={process.env.KINDE_REDIRECT_URI}
      logoutRedirectUri={process.env.KINDE_LOGOUT_REDIRECT_URI}
    >
      {children}
    </KindeProvider>;
};