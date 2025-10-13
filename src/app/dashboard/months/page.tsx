


import Pagination from '@/app/dashboard/months/pagination';
import Search from '@/app/search';
import  Table from '@/app/dashboard/months/table';
import CreateBlog  from '@/app/dashboard/months/buttons';
import { MonthsTableSkeleton } from '@/app/dashboard/months/skeletons';
import { Suspense } from 'react';
 
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search monthly blogs..." />
        <CreateBlog />
      </div>
      <Suspense key={query + currentPage} fallback={<MonthsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}