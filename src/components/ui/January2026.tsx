import Image from 'next/image'
import Link from 'next/link'


import Robins from "./robins";
import IcyTarn2 from "/public/imagesresized/IcyTarn2.jpg";



export default function January2026() {
  return (   
 <div className=" bg-black border-solid border-4 border-gray-600 p-2 md:p-4 mb-28">     
       <div className="text-black text-center font-semibold text-xl p-3 bg-gray-700 border-[#bdbeba] border-4 m-2 bg-WinterGrass bg-cover ">
        <div className="bg-black mr-[15%] ml-[15%] md:mr-[20%] md:ml-[20%] border-white border-2 text-white p-2">January 2026</div>
                  <br />
                  <br />
                  < Robins />
        </div> 



                  <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 pr-3 pl-3 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#bdbeba]">
         <div className="text-md md:text-lg max-w-full font-normal text-white text-center dark:text-white justify-center items-center bg-[#bdbeba">
       
        
         <Image
                  src={ IcyTarn2 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-4 mt-8 mb-11 transform transition hover:scale-150"
                  alt="Photo of tarn iced over"
                />
                <div className="flex flex-col bg-black border-solid border-gray-500 border-2 text-white items-center mb-8 p-4">Icy Tarn </div>

          </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
        





        

  
</div>

  );
}