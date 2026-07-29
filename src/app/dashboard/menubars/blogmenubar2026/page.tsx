import { getDbUserId } from "@/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { getPosts } from '@/actions/post.action';
import CreatePost from "@/components/ui/CreatePost";
import PostCard from "@/components/ui/PostCard";
import BlogMenuBarMonths2026 from "@/components/ui/blogmenubarmonths2026";
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
        <BlogMenuBar/>
      <BlogMenuBarMonths2026/>
    </div>  
  );
}
}