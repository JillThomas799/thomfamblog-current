import { PrismaClient } from "@prisma/client";
import Months from "./months";


const prisma =  new PrismaClient()          //Creates an instance of this class. With the prisma variable, you have access to altering and executing commands to your table.  It has full details of how our schema is because we ran the 'generate' function. 

export default async function retrieveBlogs() {
  const months = await prisma.month.findMany();

  return <Months months={months} />;
}