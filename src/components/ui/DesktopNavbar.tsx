import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { currentUser } from '@clerk/nextjs/server';
import { SignInButton, UserButton} from "@clerk/nextjs";
import React from 'react';
import Link from "next/link";
import { ModeToggle } from "./ModeToggle"; 
import { Button } from "./button";
// import Image from 'next/image'
// import LennieBioImage from "/public/imagesresized/LennieBioImage.jpg";

async function DesktopNavbar() {
    const user = await currentUser()
    console.log("user is here:", user);
  return (
    <div className="hidden md:flex items-center space-x-4">
        <ModeToggle />
{/* <div>
 <Image
                  src={ LennieBioImage}
                  className="block ml-auto mr-auto h-auto w-[40%]  border-solid border-[white] border-2 mt-1 mb-11 "
                  alt="Photo of Lennie"
                />

</div> */}

        <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/">
            <HomeIcon className="w-4 h-4" />
            <span className="hidden lg:inline text-md">Home</span>
            </Link>
        </Button>

        {user ? (
            <>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/notifications">
                <BellIcon className="w-4 h-4" />
                 <span className="hidden lg:inline">Notifications</span>
                 </Link>
            </Button>
            
                 <Button variant="ghost" className="flex items-center gap-2" asChild>
                    <Link href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]}`}>
                    <UserIcon className="w-4 h-4" />
                    <span className="hidden lg:inline">Profile</span>
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