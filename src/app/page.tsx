import { getDbUserId } from "@/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { getPosts } from '@/actions/post.action';
import prisma from "@/lib/prisma";
import CreatePost from "@/components/ui/CreatePost";
import PostCard from "@/components/ui/PostCard";
import August2025 from "@/components/ui/August2025";
import September2025 from "@/components/ui/September2025";
import October2025 from "@/components/ui/October2025";
import SearchInput from "./dashboard/search/Searchinput";

export default async function Home() {
  const user = await currentUser();
  const userId = await getDbUserId();
  const posts = await getPosts();
  const dbUserId= await getDbUserId();

  if (!userId) return;
  else {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-2 "> {/*Sets the overall grid layout for the display*/}
    <div className="col-span-1 md:col-span-2">
      <div className="mt-2 md:mt-1 flex items-center justify-between gap-2 mb-12">

  {/*Addition of the searchbar*/} 
             <div className="flex flex-col items-center p-2 w-full">
              <SearchInput />
              {/* <div className="flex flex-col items-center w-full">{children}</div> */}
             </div>

    </div>
    </div> 
    <div className="col-span-1 md:col-span-2 p-2 gap-3 bg-[#90AEAD]">
    <div>
      <October2025 />
     <September2025 />
    <August2025 /> 
    </div>
    </div>
    <div className="md:col-start-3 gap-2"> 
       <div className="col-span-1">
        {user ? <CreatePost /> : null}

         <div className="space-y-2"> 
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))} 
        </div>
        </div>
        
    </div>
    </div>
  );
}
}





