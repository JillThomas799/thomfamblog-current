import { Month } from "@prisma/client"; 

interface MonthsProps {     
  months: Array<Month>;
} //Interfaces allow types to be easily shared between different objects, separate to the variables which use them. In this case, the monthsProps object contains the property months and the type of this property is an array of the data held in the Month table on neon database.



//Creation of read-only variable Months. This pulls in the object MonthsProps (see comment above) , whose type is an array of the data in the Month table in neon database.
const Months = ({ months }: MonthsProps) => {   
  return (
    <>
      {months.map((month: any) => (
        <div className="flex p-3 gap-4 my-3 rounded-xl border-[1px] border-zinc-600 w-3/4">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">{month.component}</span>
          </div>
        </div>
      ))}
    </>
  );
};


export default Months;







