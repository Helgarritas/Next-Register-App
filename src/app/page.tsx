
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {  
  return (
    <>
      <LoginLink
        postLoginRedirectURL="/dashboard"
      >
        Login
      </LoginLink>
    </>
  );
}
