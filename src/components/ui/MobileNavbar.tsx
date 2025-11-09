"use client";

import {
  BellIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react"; /*The useState hook is used to declare a state variable and its initial value. This state variable is then used in the component, and whenever the state updates, so that React will automatically re-render the component with the new state. The useState hook returns an array with two values: the current state value and a state updater function to update that value.*/
import { useAuth, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Link from "next/link";


export default function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false); /*showMobileMenu displays the mobile menu, setShowMobileMenu 
  setShowMobileMenu updates the current state to a new value */
  const { isSignedIn } = useAuth();
  const { theme, setTheme } = useTheme();

  function toggleshowMobileMenu() {
    if(showMobileMenu === true) {
        setShowMobileMenu(false);
    } else if (showMobileMenu === false) {
        setShowMobileMenu(true);
    }
  }

  return (
    <div className="flex md:hidden items-center space-x-2 transition-all bg-gray-300 dark:bg-gray-900" onClick={toggleshowMobileMenu}>
      <Button
        variant="ghost"
        className="bg-slate-200 dark:bg-slate-900"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        // className="mr-2"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
          {/* <Button variant="ghost" className="font-bold text-lg">Menu</Button> */}
        </SheetTrigger>
        <SheetContent side="right" className="w-[200px] bg-neutral-200 dark:bg-slate-900">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6">
            <Button variant="ghost" className="flex items-center gap-3 justify-start font-bold b-solid bg-transparent dark:bg-black p-6" asChild>
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                Home
              </Link>
            </Button>

            {isSignedIn ? (
              <>
              <Button variant="ghost" className="flex items-center  gap-3 justify-start font-bold" asChild>
            <Link href="/dashboard/aboutus/profileshomepage">
            <HomeIcon className="w-4 h-4 font-semibold" />
            About us
            {/* <span className="hidden lg:inline text-lg text-slate-300 dark:text-slate-200 ">About Us</span> */}
            </Link>
        </Button>
                <Button variant="ghost" className="flex items-center gap-3 justify-start font-bold" asChild>
                  <Link href="/notifications">
                    <BellIcon className="w-4 h-4 font-bold" />
                    Notifications
                  </Link>
                </Button>
                <Button variant="ghost" className="flex items-center gap-3 justify-start font-bold" asChild>
                  <Link href="/profile">
                    <UserIcon className="w-4 h-4 font-bold" />
                    Profile
                  </Link>
                </Button>
                <SignOutButton>
                  <Button variant="ghost" className="flex items-center gap-3 justify-start w-full font-bold">
                    <LogOutIcon className="w-4 h-4" />
                    Logout
                  </Button>
                </SignOutButton>
              </>
            ) : (
              <SignInButton mode="modal">
                <Button variant="default" className="w-full">
                  Sign In/Register
                </Button>
              </SignInButton>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

// export default MobileNavbar;