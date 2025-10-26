import { currentUser } from "@clerk/nextjs/server";
import { Button } from "./button";
import { LinkIcon, MapPinIcon, Underline } from "lucide-react";
import { Separator } from "./separator";
import Link from "next/link";
import { getUserByClerkId } from "@/actions/user.action";



async function SideNav() {
  const authUser = await currentUser();
  if (!authUser) return <UnAuthenticatedSidebar />;
  
  const user = await getUserByClerkId(authUser.id); //This is the Clerk Id
  if (!user) return null;

  return (
    <div className="sticky top-20 bg-black pb-6">
          <div className="flex flex-col items-center text-center">
            <Link
              href={`/profile/${user.username}`}
              className="flex flex-col items-center justify-center"
            >

              <div className="mt-4 space-y-1">
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.username}</p>
              </div>
            </Link>

            {user.bio && <p className="mt-3 text-sm text-muted-foreground">{user.bio}</p>}


           
          </div>
        
    </div>
  );
}

export default SideNav;

const UnAuthenticatedSidebar = () => (
  <div className="sticky top-20">    
        <p className="text-center text-muted-foreground mb-4">
          Login to access your profile and connect with others.
        </p>
        
          <Button className="w-full" variant="outline">
            Login
          </Button>
        
          <Button className="w-full mt-2" variant="default">
          August2025
          </Button>
        
  </div>
);


  