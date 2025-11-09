// import { useState } from "react"; //Adding 'state' to a component allows the component to 'remember' some specific information and display it. eg. count the number of times a button is clicked.
// import "./App.css"; //if importing from another file in the same folder use ./file name. ./ tells the import to look for the .js file in the same folder as the current file
import jillbiophoto5 from '/public/imagesresized/jillbiophoto5.jpg';
import bernardbiophoto from '/public/imagesresized/bernardbiophoto.jpg';
import lenniebiophoto5 from '/public/imagesresized/lenniebiophoto5.jpg';
import elenabiophoto7 from '/public/imagesresized/elenabiophoto7.jpg';
import harrybiophoto from '/public/imagesresized/harrybiophoto.jpg';
import Image from 'next/image'
import Link from 'next/link'
import './ProfilesHomePage.css';

const BernardPortalEntry = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Link href="/dashboard/aboutus/bernardbio" className="text-white underline">
          <Image
            className="w-auto h-auto border-solid border-[5px] border-slate-300 "
            src={bernardbiophoto}
            alt=""
            title="Click here to go to Bernard's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/bernardbio" className="text-white underline">
          <div className="color-white text-center text-lg font-bold pt-2 pb-6">Bernard</div>
        </Link>
      </div>
    </div>
  );
};

const JillPortalEntry = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Link href="/dashboard/aboutus/jillbio" className="text-white underline">
          <Image
             className="w-auto h-auto border-solid border-[5px] border-slate-300"
            src={jillbiophoto5}
            alt=""
            title="Click here to go to Jill's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/jillbio" className="text-white underline">
          <div className="color-white text-center text-lg font-bold pt-2 pb-6">Jill</div>
        </Link>
      </div>
    </div>
  );
};

const ElenaPortalEntry = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Link href="/dashboard/aboutus/elenabio" className="text-white underline">
          <Image
            className="w-auto h-auto border-solid border-[5px] border-slate-300"
            src={elenabiophoto7}
            alt=""
            title="Click here to go to Elena's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/elenabio" className="text-white underline">
          <div className="color-white text-center text-lg font-bold pt-2 pb-6">Elena</div>
        </Link>
      </div>
    </div>
  );
};

const LenniePortalEntry = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Link href="/dashboard/aboutus/lenniebio" className="text-white underline">
          <Image
            className="w-auto h-auto border-solid border-[5px] border-slate-300"
            src={lenniebiophoto5}
            alt=""
            title="Click here to go to Lennie's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/lenniebio" className="text-white underline">
          <div className="color-white text-center text-lg font-bold pt-2 pb-6">Lennie</div>
        </Link>
      </div>
    </div>
  );
};

const HarryPortalEntry = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Link href="/dashboard/aboutus/harrybio" className="text-white underline">
          <Image
             className="w-auto h-auto border-solid border-[5px] border-slate-300"
            src={harrybiophoto}
            alt=""
            title="Click here to go to Harry's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/harrybio" className="text-white underline">
          <div className="color-white text-center text-lg font-bold pt-2 pb-6">Harry</div>
        </Link>
      </div>
    </div>
  );
};

export default function ProfilesHomePage() {
  
  return (
    <div className="flex flex-col w-auto bg-gray-400 dark:bg-gray-700">
      <div className="flex flex-col bg-[#6b7a8f">
        {/* <h1 id="the_Thomas_Family_Blog">Thomas Family Blog</h1> */}
        {/* <div className="grid grid-cols-3 pt-8 gap-4"> */}
          <div className="flex flex-col items-center p-6 md:grid md:grid-cols-3 md:pt-8 md:gap-4">
          <BernardPortalEntry />
          <div></div>
          <JillPortalEntry />
          <div></div>
          <LenniePortalEntry />
          <div></div>
          <ElenaPortalEntry />
          <div></div>
          <HarryPortalEntry />
          <div></div>
          </div>
        {/* </div> */}
        </div>
    </div>
  );
}