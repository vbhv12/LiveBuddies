import { Button } from "@/components/ui/button";
import { SignOutButton, SignedOut } from "@clerk/nextjs";

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
