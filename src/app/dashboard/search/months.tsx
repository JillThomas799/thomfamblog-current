import { PrismaClient, Prisma } from "@prisma/client";
import { Month } from "@prisma/client";

interface MonthsProps {
  months: Array<Month>;
}

const Months = ({ months }: MonthsProps) => {
  return (
    <>
      {months.map((month: any) => (
        <div className="flex p-3 gap-4 my-3 rounded-xl border-[1px] border-zinc-600 w-3/4">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">{month.component}</span>
            {/* <span className="sm:text-lg font-light">{month.component}</span> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Months;







