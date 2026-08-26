import Image from 'next/image'
import Link from 'next/link'
import "./January2025.scss";
import CatLennie from "./catlennie";
import Snowstorm from "./snowstorm";
import SnowTalkinFell09012025Title from "/public/imagesresized/SnowTalkinFell09012025Title.jpg";
import TreeDownTalkinTitled from "/public/imagesresized/TreeDownTalkinTitled.jpg";




export default function January2025() {
  return (
    <div>
      <div className="bg-gradient-to-b from-black from-0% via-[#243c3e] via-60% to-[#f2f0ef] to-70% order-solid border-4 border-gray-600  p-2 md:p-4  h-[41vh] md:h-[60vh] lg:h-[70vh]">
        <div className="text-black bg-[#a4a4ac] border-solid border-2 mr-auto ml-auto mt-0 p-2 border-[#f5f5f5]  font-bold text-xl text-center">January 2025</div>
        <div className="scale-[65%] translate-x-[-21%] translate-y-[-26%] md:scale-[82%] md:translate-x-[-45%] md:translate-y-[5%] lg:scale-[85%] lg:translate-x-[-45%]"><Snowstorm /><CatLennie /> </div>
        <br />
        <br />
      </div>

      < div className="mb-20">
        < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-[#f5f5f5] border-solid border-2 md:border-2 bg-black">
          < div className="text-md md:text-lg max-w-full font-semibold text-[ #687875] text-center dark:text-[ #687875] justify-center items-center">
           <div className="font-semibold pt-2 pb-2 mr-[5%] ml-[5%] md:mr-[30%] md:ml-[30%]  mt-2 text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac]"> January 1st - 31st 2025</div> {/*End of news date block*/}
            <div className="font-semibold text-center text-black border-solid border-[#f5f5f5] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#a4a4ac]"> WISHING EVERYONE A VERY HAPPY NEW YEAR!</div>
            <div className="font-semibold text-left md:text-left text-black border-solid border-[#f5f5f5] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#a4a4ac]"> 
           <div className="text-center">Welcome to our January blog</div>.
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
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-[#f5f5f5] border-solid border-2 bg-black">
          <div className="font-semibold pt-2 pb-2 mr-[5%] ml-[5%] md:mr-[30%] md:ml-[30%]  mt-2 text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac]"> January 9th 2025, Thursday</div> {/*End of news date block*/}
          <div className="font-semibold m-2 p-1 md:m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac]">SNOWY WONDERLAND: 6.7 mile walk into the local hills.</div>
          <div className="text-black text-left font-semibold md:text-left mb-4 p-6 bg-[#a4a4ac] border-[#f5f5f5] border-solid border-2  ">
            Since the 5th January we have had snow which has persisted due to
          freezing temperatures and clear skies. Bernard has gained weight since
          Christmas so decided we needed to get some exercise! Hence, we entered
          today into a brilliantly sunny, freezing, snowy wonderland. With snow
          boots on our feet and taking appropriate care, we ventured out into
          the icy wilderness feeling rather like Captain Scott on his final
          journey into the Antarctic.....
          <br />
          </div>


          <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-semibold text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac] mb-6">Click on the image below to open the photo album and see the snowy
              wonderland.
            <br />
            <br />
            Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
          </div>
          <Link
            href="https://photos.app.goo.gl/dNwZgxm9gow3NbHcA"
            target="_blank"
          >
            <Image
              src={SnowTalkinFell09012025Title}
              className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#f5f5f5] border-4 mt-4 mb-6"
              alt="Photo of Talkin Fell in the snow and sunshine"
            />
          </Link>
        </div>
      </div>  


<div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-[#f5f5f5] border-solid border-2 bg-black">
          <div className="font-semibold pt-2 pb-2 mr-[5%] ml-[5%] md:mr-[30%] md:ml-[30%]  mt-2 text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac]"> January 15th 2025, Thursday</div> {/*End of news date block*/}
          <div className="font-semibold m-2 p-1 md:m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac]"> WENT TO SEE THE FILM 'MARIA', STARRING ANGELINA JOLIE, AT THE RHEGED
          CENTRE.</div>
          <div className="text-black text-left font-semibold md:text-left mb-4 p-6 bg-[#a4a4ac] border-[#f5f5f5] border-solid border-2  ">
           Today we went to see the newly-released film 'Maria', based on the
          final weeks in the opera singer Maria Callas's life, at the Rheged
          Centre.
          <br />
          <br />
          Whilst not usually a great fan of Angelina Jolie, in my opinion she
          was particularly impressive in this film, as the role of Maria Callas
          is a very difficult one to play. I have had a personal fascination
          with Callas since I was in my teens and first read about her at the
          time of her death in 1977. She was and remains for me the most
          outstanding female opera singer of our time, not so much for the tonal
          perfection of her singing as for her ability to bring alive the
          character of the parts she is playing in the same way that Rudolf
          Nureyev did for ballet. Both of them had something quite exceptional.
          <br />
          <br />
          The film was quite slow-moving to start but very artistically created;
          however after a while it draws you in. There had clearly been much
          work which had gone into the production. Maria Callas had 2 very cute
          poodles and these were represented in the film so Bernard and I have
          nominated them for Oscars as they were brilliant actors. Bernard was
          rather unenthusiastic about going to this film but he came out having
          genuinely enjoyed it so it is not just for absolute opera-buffs. It
          was a change also to have a film which was more in the style of the
          European Arts films which we used to see at the Cornerhouse cinema in Manchester
          (when it was still in existence), but do not seem to be released as often these days.
          <br />
          <br />
         
          </div>
             </div>
                </div>
     

          <div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-[#f5f5f5] border-solid border-2 bg-black">
          <div className="font-semibold pt-2 pb-2 mr-[5%] ml-[5%] md:mr-[30%] md:ml-[30%]  mt-2 text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac]">  January 24th -26th 2025, Thursday</div> {/*End of news date block*/}
          <div className="font-semibold m-2 p-1 md:m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac]">STORM ÉOWYN and its aftermath...</div>
          <div className="text-black text-left font-semibold md:text-left mb-4 p-6 bg-[#a4a4ac] border-[#f5f5f5] border-solid border-2  ">
           Storm Éowyn hit Cumbria on the 24th January 2024 bringing maximum
          winds of 84 miles an hour at Brampton weather station and the most
          prolonged gale force storm we have ever had, hitting gale force 9.
          Harry had received a red alert on his mobile phone, although Bernard
          and I did not receive one on ours. We could see the tarn from our
          house, with what looked like mini tornadoes running across its
          surface.
          <br />
          <br />
          The main challenge though was that the power lines went down at about
          10.45am and were not reinstated until after 20.00 in the evening.
          Fortunately, we have some battery driven lights and a gas hob so were
          still able to make some food and warm drinks and to use the log burner
          for heating. The farmer at the rear of our property was rather more
          ingenious though and had a generator on his tractor which he was using
          to power the electricity to the farmhouse on an emergency supply.
          North West Electric had been helpful and set up a number of warm
          spaces across the county, where warm food and drink could be accessed,
          the closest one to us being Brampton. Lennie does not like the wind
          and had been trying to hide in the wardrobe.....
          <br />
          <br />
          The good news was that on review for any structural damage of the
          property the following morning, there was none noted and Bernard's
          greenhouse had once again survived the storm. Unfortunately, one of
          the houses locally has lost all the ridge tiles on the extension.
          <br />
          <br />
          Storm Éowyn has been reported as being one of the strongest storms in
          a generation, and caused widespread travel problems, power cuts and
          significant damage to infrastructure. The area worse hit was Ireland.
          <br />
          <br />
          <br />
          </div>


          <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-semibold text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#a4a4ac] mb-6">Click on the image below to open the photo album and see the snowy
              wonderland.
            <br />
            <br />
            Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
          </div>
          <Link
            href="https://photos.app.goo.gl/bpVKQbbkeToYbwZB7"
            target="_blank"
          >
            <Image
              src={TreeDownTalkinTitled}
              className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#f5f5f5] border-4 mt-4 mb-6"
              alt="Photo of Talkin Fell in the snow and sunshine"
            />
          </Link>
        </div>
      </div>  



    
    </div>
  );
}