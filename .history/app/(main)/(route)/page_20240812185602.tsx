import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (<>
       <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <Moo
    </>
  );
}
