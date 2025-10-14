import { PrismaClient } from "@prisma/client";  //allows the seed function below to access prisma and import the PrismaClient class.
import { Month } from "@prisma/client";

const prisma =  new PrismaClient()          //Creates an instance of this class. With the prisma variable, you have access to altering and executing commands to your table.  It has full details of how our schema is because we ran the 'generate' function. 

async function seed() {
    await prisma.month.createMany( {
        data: [ {
            id: "August2025", year: 2025, month: "August", component: "<August 2025 />", url: "/dashboard/months/august2025" },
            {
            id: "September2025", year: 2025, month: "September", component: "<September 2025 />", url: "/dashboard/months/september2025"}
            {
            id: "October2025", year: 2025, month: "October", component: "<October 2025 />", url: "/dashboard/months/october2025"}
         ]
    })
}


seed().then (() => prisma.$disconnect());           //This calls the seed() function but importantly, also disconnects the connection between our project with our prisma client.  prisma.$disconnect() prevents any leaks from happening due to us not closing the connection.