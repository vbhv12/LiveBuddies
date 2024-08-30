import { Button,  } from "@/components/ui/button";

export default function Home() {
  return (<>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
    </>
  );
}
