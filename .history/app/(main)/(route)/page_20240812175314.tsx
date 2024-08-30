import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (<>
       <SignOutButton>
        <button>Sign out</button>
      </SignOutButton>
    </>
  );
}
