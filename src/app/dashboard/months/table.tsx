// ...
export default async function MonthlyBlogsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const months = await fetchFilteredBlogs(query, currentPage);
  // ...
}