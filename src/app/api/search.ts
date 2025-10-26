//This file is the api end point for our searchQuery. It is the code in this file which enables us to connect to our database to look for the terms of our searchQuery.

import { Month } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";  
import SearchInput from "../dashboard/search/searchinput";



const prisma =  new PrismaClient()          //Creates an instance of this class. With the prisma variable, you have access to altering and executing commands to your table.  It has full details of how our schema is because we ran the 'generate' function. 


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }

      /**
       * Search months
       */
      const months: Array<Month> = await prisma.month.findMany({
        where: {
          OR: [
            {
              month: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              component: {               
                  contains: query,                
              },
            },
            {
              id: {               
                  contains: query,                
              },
            },
          ],
        },
      });

      

      res.status(200).json({ months });
    } catch (error: any) {
      console.log(error);
      res.status(500).end();
    }
  }
}