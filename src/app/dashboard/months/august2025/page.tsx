import { getDbUserId } from "@/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { getPosts } from '@/actions/post.action';
import CreatePost from "@/components/ui/CreatePost";
import PostCard from "@/components/ui/PostCard";
import August2025 from "@/components/ui/August2025";
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
   <div className="flex flex-col md:grid md:grid-cols-3 gap-4 p-2 bg-[#90AEAD]"> {/*Sets the overall grid layout for the display*/}
    <div className=" sm:flex-col md:col-span-2 p-2 gap-3 ">
     <August2025 />
       </div>
    <div className=" sm: flex flex-col md: col-span-1 md:col-span-1 col-start-3 gap-2">
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
