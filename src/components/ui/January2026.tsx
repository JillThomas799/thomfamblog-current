import Image from 'next/image'
import Link from 'next/link'


import Robins from "./robins";



export default function January2026() {
  return (   
 <div className=" bg-black h-[100vh] w-full pb-[100%] border-solid border-4 border- border-gray-600  mb-28">     
       <div className="text-black text-center font-semibold text-2xl p-3 bg-gray-700 border-[#bdbeba] border-4 m-2 bg-WinterGrass bg-cover ">
        <div className="bg-black mr-[30%] ml-[30%] border-grey-600 border-4 text-white">January 2026</div>
                  <br />
                  <br />
                  < Robins />
        </div> 

    
       <div className="text-white text-center font-semibold text-xl p-3 bg-gray-700 border-[#bdbeba] border-4 mt-6 mr-2 ml-2 mb-20">
            <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 5th January 2026, Monday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-black">Frozen</div> {/*End of news header block*/}
        
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-black pb-8 pt-4 pr-4 pl-4 mr-[2%] ml-[2%] mt-5 mb-4  justify-center text-center">
         
          </div> 

        </div> 
  
  
  
</div>

  );
}