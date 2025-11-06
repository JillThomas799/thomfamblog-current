import { getDbUserId } from "@/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { getPosts } from '@/actions/post.action';
import CreatePost from "@/components/ui/CreatePost";
import PostCard from "@/components/ui/PostCard";
import BernardBio from "@/components/ui/bernardbioprofile";
import BlogMenuBar from "@/components/ui/blogmenubar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
         <Button variant="ghost" className="flex flex-row w-20 h-10 md:w-24 md:h-16 mb-4 md:mb-10 gap-2 p-4 font-bold b-solid bg-gray-300 text-gray-800 md:bg-gray-800  md:text-gray-300" asChild>
           <Link href="/dashboard/aboutus/profileshomepage">
            <span className="text-lg text-gray-800 md:text-slate-300 md:dark:text-slate-300 dark:text-slate-800 items-nowrap">Back  </span>
            <span><Undo2Icon  /></span>                   
            </Link>
        </Button>
      <BlogMenuBar />
   <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-2 bg-[#90AEAD]"> {/*Sets the overall grid layout for the display*/}
        
    <div className="col-span-1 md:col-span-2 p-2 gap-3 ">
    <div>
    <BernardBio />
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
