import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (<>
       <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
    </>
  );
}