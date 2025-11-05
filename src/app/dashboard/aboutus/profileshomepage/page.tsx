import { getDbUserId } from "@/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { getPosts } from '@/actions/post.action';
import CreatePost from "@/components/ui/CreatePost";
import PostCard from "@/components/ui/PostCard";
import ProfilesHomePage from "@/components/ui/ProfilesHomePage";
import BlogMenuBar from "@/components/ui/blogmenubar";
import Link from "next/link"; 
import { Button } from "@/components/ui/button";
import { Undo2Icon } from "lucide-react";



export default async function Home() {
  const user = await currentUser();
  const userId = await getDbUserId();
  const posts = await getPosts();
  const dbUserId= await getDbUserId();
 

  if (!userId) return;
  else { 
  return (
    <div>
      <Button variant="ghost" className="flex items-center gap-2 font-bold b-solid bg-slate-500 dark:bg-black p-4" asChild>
            <Link href="/">
            <span className="hidden lg:inline text-lg text-slate-300 dark:text-slate-200 ">Back</span>
            <Undo2Icon className="w-4 h-4" />            
            </Link>
        </Button>
      <BlogMenuBar />
   <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#90AEAD] border-solid border-red border-5px"> {/*Sets the overall grid layout for the display*/}
        
    <div className="col-span-1 md:col-span-3 p-2 gap-3 ">
       <div className="text-white text-center font-semibold text-2xl p-3 bg-[#566867] border-solid border-2 border-[#22311d]">ABOUT US
        </div>
    <div>
    <ProfilesHomePage />
       </div>
    </div>
    {/* <div className="md:col-start-3 gap-2"> 
       <div className="col-span-1">
        {user ? <CreatePost /> : null}

         <div className="space-y-2"> 
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))} 
        </div>
        </div>
        
    </div> */}
    </div>
    </div>  
  );
}
}

