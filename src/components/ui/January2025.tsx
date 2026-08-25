import Image from 'next/image'
import Link from 'next/link'
import "./January2025.css";
import CatLennie from "./catlennie";
import HarryBarrowDocksTitled from "/public/imagesresized/HarryBarrowDocksTitled.jpg";




export default function January2025() {
  return (
    <div>
      <div className="bg-linear-[180deg, rgb(36, 60, 62) 45%, #f2f3f5 55%] border-solid border-4 border-gray-600  p-2 md:p-4  h-[100vh]">
        <div className="text-black bg-[#c2b280] border-solid border-2 mr-auto ml-auto mt-0 p-2 border-[#f5f5f5]  font-bold text-xl text-center">January 2025</div>
        <div className="scale-[70%] translate-x-[-10%] translate-y-[-30%] md:scale-[82%] md:translate-x-[-30%] md:translate-y-0 lg:scale-[85%] lg:translate-x-[-20%]"><CatLennie /> </div>
        <br />
        <br />
      </div>

      < div className="mb-20">
        < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-[#f5f5f5] border-solid border-2 md:border-2 bg-[#786d68]">
          < div className="text-md md:text-lg max-w-full font-semibold text-[ #687875] text-center dark:text-[ #687875] justify-center items-center">
           <div className="font-semibold pt-2 pb-2 mr-[5%] ml-[5%] md:mr-[30%] md:ml-[30%]  mt-2 text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#c2b280]"> January 1st - 31st 2025</div> {/*End of news date block*/}
            <div className="font-semibold text-center text-black border-solid border-[#f5f5f5] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#c2b280]"> WISHING EVERYONE A VERY HAPPY NEW YEAR!</div>
            <div className="font-semibold text-left md:text-left text-black border-solid border-[#f5f5f5] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#c2b280]"> 
              Welcome to our January blog.
          <br />
          <br />
          This month, as it is January, we have returned to our snowy scene.
          However, given Lennie does not like the snow and he likes to keep
          warm, on our header design this month, we have created an igloo for
          him, a heated mat to lie on and some dinner to eat, which he is
          enjoying.
          <br />
          <br />
          We have added 2 robins to the animation as he likes to sleep in his
          basket right by the patio window and look outside to survey his
          domain. Often birds can be seen hopping towards the glass and looking
          in at Lennie, and then hopping away again happily as they know he is
          inside.
          <br />
          <br />
          The design and animations on this page have been created using SVG
          (scalable vector graphics), html, css and javascript. The design for
          the robins was created by referring to images of a robin and trying to
          recreate a representative example of what we see in real life.
          <br />
          <br />
          If you have any problems with the page and animations displaying
          correctly please could you let me know as usual, via the Problem
          Feedback button at the bottom of the home page of this website. It is
          much appreciated as whilst all the designs are tested using developer
          tools across different device settings before release, sometimes the
          displays will not run in the intended way and it is only by knowing
          about it I can try and correct it.
          <br />
          <br />
          </div>

            <br />
            <br />
          </div>
        </div>
      </div>


      <div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-[#f5f5f5] border-solid border-2 bg-[#786d68]">
          <div className="font-semibold pt-2 pb-2 mr-[5%] ml-[5%] md:mr-[30%] md:ml-[30%]  mt-2 text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#c2b280]"> February 4th and 17th 2025</div> {/*End of news date block*/}
          <div className="font-semibold m-2 p-1 md:m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-[#f5f5f5] border-solid border-2 bg-[#c2b280]">Harry explores some opportunities for employment.</div>
          <div className="text-black text-left font-semibold md:text-left mb-4 p-6 bg-[#c2b280] border-[#f5f5f5] border-solid border-2  ">
            Harry has been working very hard to explore further job opportunities
            now he has successfully completed his PhD. This has involved some
            reconnaissance activity, so on the 4th of February 2025 he was out near
            Whitehaven in Cumbria and then on the 17th February at the naval
            dockyard in Barrow-in-Furness, Cumbria. Applying for a graduate job
            seems to be a full time job in itself!
          </div>


          <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-semibold text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#c2b280] mb-6">Click on the image below to open the album containing some photos of Harry's experience exploring job opportunities.
            <br />
            <br />
            Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
          </div>
          <Link
            href="https://photos.app.goo.gl/hdjpfSq6fvLfxyQh9"
            target="_blank"
          >
            <Image
              src={HarryBarrowDocksTitled}
              className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#f5f5f5] border-4 mt-4 mb-6"
              alt="Photo of Harry, with Barrow Docks behind."
            />
          </Link>
        </div>
      </div>  


      



    
    </div>
  );
}