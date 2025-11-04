import { useState } from "react"; //Adding 'state' to a component allows the component to 'remember' some specific information and display it. eg. count the number of times a button is clicked.
import "./App.css"; //if importing from another file in the same folder use ./file name. ./ tells the import to look for the .js file in the same folder as the current file
// import JillBioImage from "imagesresized/JillBioImage.jpg"; //if importing from another src folder, just use this configuration
// import BernardBioImage from "imagesresized/BernardBioImage.jpg";
// import LennieBioImage from "imagesresized/LennieBioImage.jpg";
// import ElenaBioImage from "imagesresized/ElenaBioImage.jpg";
// import HarryBioImage from "imagesresized/HarryBioImage.jpg";
import Image from 'next/image'
import Link from 'next/link'

const BernardPortalEntry = () => {
  return (
    <div>
      <div className="figApp">
        <Link href="/dashboard/aboutus/bernardbio" className="text-white underline">
          <img
            className="w-auto h-auto b-solid b-[5px] b-grey"
            // src={BernardBioImage}
            alt=""
            title="Click here to go to Bernard's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/bernardbio" className="text-white underline">
          <figcaption>Bernard</figcaption>
        </Link>
      </div>
    </div>
  );
};

const JillPortalEntry = () => {
  return (
    <div>
      <div className="figApp">
        <Link href="/dashboard/aboutus/jillbio" className="text-white underline">
          <img
             className="w-auto h-auto b-solid b-[5px] b-grey"
            // src={JillBioImage}
            alt=""
            title="Click here to go to Jill's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/jillbio" className="text-white underline">
          <figcaption>Jill</figcaption>
        </Link>
      </div>
    </div>
  );
};

const ElenaPortalEntry = () => {
  return (
    <div>
      <div className="figApp">
        <Link href="/dashboard/aboutus/elenabio" className="text-white underline">
          <img
            className="w-auto h-auto b-solid b-[5px] b-grey"
            // src={ElenaBioImage}
            alt=""
            title="Click here to go to Elena's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/elenabio" className="text-white underline">
          <figcaption>Elena</figcaption>
        </Link>
      </div>
    </div>
  );
};

const LenniePortalEntry = () => {
  return (
    <div>
      <div className="figApp">
        <Link href="/dashboard/aboutus/lenniebio" className="text-white underline">
          <img
            className="w-auto h-auto b-solid b-[5px] b-grey"
            // src={LennieBioImage}
            alt=""
            title="Click here to go to Lennie's profile"
          />
        </Link>
        <Link href="/dashboard/aboutus/lenniebio" className="text-white underline">
          <figcaption>Lennie</figcaption>
        </Link>
      </div>
    </div>
  );
};

const HarryPortalEntry = () => {
  return (
    <div>
      <div className="figApp">
        <Link href="/dashboard/aboutus/harrybio" className="profileLink">
          <img
             className="w-auto h-auto b-solid b-[5px] b-grey"
            // src={HarryBioImage}
            alt=""
            title="Click here to go to Harry's profile"
          />
        </Link>
        <Link href="/dasboard/aboutus/harrybio" className="profileLink">
          <figcaption>Harry</figcaption>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  const [isVisible, setIsVisible] = useState(false); // declares a state variable inside the component App:

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col bg-[#6b7a8f]">
      <div className="App">
        <h1 id="the_Thomas_Family_Blog">Thomas Family Blog</h1>
        <div className="gridContainer">
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
        </div>
    </div>
  );
}


