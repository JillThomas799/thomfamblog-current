
import Link from 'next/link'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { currentUser } from '@clerk/nextjs/server'
import { syncUser } from '@/actions/user.action'


async function Navbar() {
  const user = await currentUser();
  if (user) await syncUser(); //POST

  
  return (
    <nav className="sticky top-0 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-500 
    md:supports-[backdrop-filter]:bg-background/60 z-50 ">
      {/*The background property refers to the default background color which is set in globals.css. Refer to globals.css to see settings */}
        <div className="w-screen mx-auto px-4 py-20 border-b-4 border-solid border-neutral-100">
            <div className="flex items-center justify-between h-16 ">
                <div className="flex-items-center">
                    <div className=" text-5xl font-bold text-primary font-mono tracking-wider text-slate-800 md:text-slate-700 dark:text-slate-300">Thomas Family Blog</div>
                </div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;