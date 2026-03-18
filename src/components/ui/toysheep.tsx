import React from "react";


export default function Toysheep() {
  return (
    <div>
      <div>
        <svg
          id="toysheep"
          version="1.1"
          x="0"
          y="0"
          width="100vw"
          height="40vh"
          viewBox="-80 -90 500 500"
          className="overflow-visible"         
        >

           <g
            id="toysheep1"
            filter="url(#blur8)"            
          >
            <defs>
              <filter id="blur8" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
              </filter>
            </defs>

            <g id="toysheepbody">
                <circle
                cx="50"
                cy="150"
                r="90.0"
                fill="#FCF5E5"
                opacity="1"
               /></g>
           
            <g id="toysheephead"  className="md:translate-x-[-150px] md:translate-y-[50px]" >
              <g id="toysheepface">
                <circle
                cx="50"
                cy="100"
                r="45.0"
                fill="#483C32"
                opacity="1"
               /></g>              

               <g id="toysheepeyeleft">
                <circle
                id="outereyeleft"
                cx="70"
                cy="90"
                r="10.0"
                fill="#FCF5E5"
                opacity="1"
               />
               <circle
                id="innereyeleft"
                cx="70"
                cy="90"
                r="5.7"
                fill="#000000"
                opacity="1"
               />               
               </g>
               <g id="toysheepeyeright">
                <circle
                id="outereyeright"
                cx="35"
                cy="90"
                r="10.0"
                fill="#FCF5E5"
                opacity="1"
               />
               <circle
                id="innereyeright"
                cx="35"
                cy="90"
                r="5.7"
                fill="#000000"
                opacity="1"
               />
               </g>
               <g id="toysheepearright">
                <rect
                x="-30"
                y="60"
                rx="6"
                ry="6"
                width="65"
                height="15"
                fill="#000000"
              ></rect></g>
               <g id="toysheepearleft">
                <rect
                x="70"
                y="60"
                rx="6"
                ry="6"
                width="65"
                height="15"
                fill="#000000"
              ></rect>
               </g>
            </g>

             

          
          </g>

        </svg>
      </div>
    </div>
  );
}
