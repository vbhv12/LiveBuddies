import { Button } from "@/components/ui/button";
import { SignOutButton, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (<>
       <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
    </>
  );
}
