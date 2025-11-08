import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { currentUser } from '@clerk/nextjs/server';
import { SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle"; 
import { Button } from "./button";


async function DesktopNavbar() {
    const user = await currentUser()
    console.log("user is here:", user);
  return (
    <div className="hidden md:flex items-center space-x-4">
        <ModeToggle />
               {user ? (
            <>
             <Button variant="ghost" className="flex items-center gap-2 font-bold b-solid bg-slate-500 dark:bg-black p-4" asChild>
            <Link href="/">
            <HomeIcon className="w-4 h-4" />
            <span className="hidden lg:inline text-lg text-slate-300 dark:text-slate-200 ">Home</span>
            </Link>
        </Button>

         <Button variant="ghost" className="flex items-center gap-2 font-semibold" asChild>
            <Link href="/dashboard/aboutus/profileshomepage">
            <HomeIcon className="w-4 h-4" />
            <span className="hidden lg:inline text-lg text-slate-300 dark:text-slate-200 ">About Us</span>
            </Link>
        </Button>
            <Button variant="ghost" className="flex items-center gap-2 font-semibold" asChild>
                <Link href="/notifications">
                <BellIcon className="w-4 h-4" />
                 <span className="hidden lg:inline text-lg">Notifications</span>
                 </Link>
            </Button>
            
                 <Button variant="ghost" className="flex items-center gap-2 font-semibold" asChild>
                    <Link href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]}`}>
                    <UserIcon className="w-4 h-4" />
                    <span className="hidden lg:inline text-lg">Profile</span>
                    </Link>
                 </Button>
                 <UserButton />
                 </>
        ) : (
            <SignInButton mode="modal">
                <Button variant="default" className="text-md">Sign In/Register</Button> 
            </SignInButton> )}
         </div>
  );
}

export default DesktopNavbar