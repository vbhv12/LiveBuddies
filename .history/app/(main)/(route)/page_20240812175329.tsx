import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (<>
       <SignOutButton>
        <button>Sign out</button>
      </SignOutButton>
    </>
  );
}
