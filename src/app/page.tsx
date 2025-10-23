import { getDbUserId } from "@/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { getPosts } from '@/actions/post.action';
import CreatePost from "@/components/ui/CreatePost";
import PostCard from "@/components/ui/PostCard";
import August2025 from "@/components/ui/August2025";
import September2025 from "@/components/ui/September2025";
import October2025 from "@/components/ui/October2025";
import SearchInput from "./dashboard/search/searchinput";
import BlogMenuBar from "@/components/ui/blogmenubar";

export default async function Home() {
  const user = await currentUser();
  const userId = await getDbUserId();
  const posts = await getPosts();
  const dbUserId= await getDbUserId();

  if (!userId) return;
  else {
  return (
    <div>
      <BlogMenuBar />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 p-0 "> {/*Sets the overall grid layout for the display*/}
    <div className="col-span-1 col-start-1 md:col-span-1 p-2 gap-3">
        
    <div>  
  <div >
    <div className="col-span-2 col-start-2 md:col-span-1 p-2 gap-3 bg-[#90AEAD]"> <October2025 /></div>
 
    </div>
    </div>
    <div className="md:col-start-4 gap-0"> 
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
      </div>
      </div>
  );
}
}





