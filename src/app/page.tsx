import { getDbUserId } from "@/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { getPosts } from '@/actions/post.action';
import prisma from "@/lib/prisma";
import CreatePost from "@/components/ui/CreatePost";
import WhoToFollow from "@/components/ui/WhoToFollow";
import PostCard from "@/components/ui/PostCard";
import August2025 from "@/components/ui/August2025";

export default async function Home() {
  const user = await currentUser();
  const userId = await getDbUserId();
  const posts = await getPosts();
  const dbUserId= await getDbUserId();
  
  console.log ({ posts });

  if (!userId) return;
  else {
  return (
    <div className="grid grid-cols-1 bg-slate-400 p-4">
    <div>
    <August2025 />
    </div>
    <div className=" lg:grid-cols-10 gap-6"> 
      
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}

         <div className="space-y-6"> 
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))} 
        </div>
        </div>
    
       {/* <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div> */}
    </div>
    </div>
  );
}
}





