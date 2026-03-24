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
              <radialGradient
              id="gradtoysheepjumper"
              cx="50%"
              cy="50%"
              spreadMethod="repeat"
            >
               <stop
                offset="30%"
                stopColor ="#f4eee0"
               stopOpacity = "1"
              >
                {" "}
              </stop>
              
              <stop
                offset="40%"
                stopColor ="#483c32"
               stopOpacity = "1"
              >
                {" "}
              </stop>
              <stop
                offset="40%"
                stopColor ="#483c32"
               stopOpacity = "1"
              >
                {" "}
              </stop>
              <stop
                offset="50%"
                stopColor ="#f4eee0"
               stopOpacity = "1"
              >
                {" "}
              </stop>
               <stop
                offset="50%"
                stopColor ="#f4eee0"
               stopOpacity = "1"
              ></stop>
              <stop
                offset="60%"
                stopColor = '#483c32'
                stopOpacity = "1"
              ></stop>
              <stop
                offset="60%"
                stopColor = '#483c32'
                stopOpacity = "1"
              ></stop>
               <stop
                offset="80%"
                stopColor ="#f4eee0"
               stopOpacity = "1"
              ></stop>
               <stop
                offset="80%"
                stopColor ="#f4eee0"
               stopOpacity = "1"
              ></stop>
              <stop
                offset="100%"
                stopColor ="#483c32"
               stopOpacity = "1"
              ></stop>
              
            </radialGradient>

              <filter id="blur8" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
              </filter>
            </defs>

            <g id="toysheeplegleftfront">
              <g id="toysheeplegleftfrontupper">
                <rect 
                x="-220"
                y="230"
                rx="6"
                ry="6"
                width="20"
                height="85"
                fill="#444444" />
              </g>
               <g id="toysheeplegleftfrontfoot">
                <ellipse
                cx="-210"
                cy="315"
                rx="20"
                ry="15"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>

             <g id="toysheeplegrightfront">
              <g id="toysheeplegrightfrontupper"> 
                <rect 
                x="-280"
                y="240"
                rx="6"
                ry="6"
                width="20"
                height="75"
                fill="#444444" />
              </g>
               <g id="toysheeplegrightfrontfoot">
                <ellipse
                cx="-270"
                cy="315"
                rx="20"
                ry="15"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>

              <g id="toysheeplegrightrear">
              <g id="toysheeplegrightrearupper">
                <rect 
                x="-310"
                y="220"
                rx="6"
                ry="6"
                width="20"
                height="60"
                fill="#444444" />
              </g>
               <g id="toysheeplegrightrearfoot">
                  <ellipse
                cx="-305"
                cy="290"
                rx="20"
                ry="15"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>
            
            <g id="toysheeplegleftrear">
              <g id="toysheeplegleftrearupper"> <rect 
                x="-250"
                y="220"
                rx="6"
                ry="6"
                width="20"
                height="60"
                fill="#444444" />
                </g>
               <g id="toysheeplegleftrearfoot">
                     <ellipse
                cx="-240"
                cy="290"
                rx="20"
                ry="15"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>             

            <g id="toysheepbody">
                <circle
                cx="50"
                cy="150"
                r="75.0"
                // fill="#FCF5E5"
                fill="url(#gradtoysheepjumper)"
                opacity="1"
                className="md:translate-x-[-300px] md:translate-y-[30px]"
               /></g>
           
            <g id="toysheephead"  className=" md:translate-x-[-310px] md:translate-y-[30px]" >
              <g id="toysheepface" >
                <circle
                cx="50"
                cy="145"
                r="38.0"
                fill="#483C32"
                opacity="1"
               /></g>              

               <g id="toysheepeyeleft">
                <circle
                id="outereyeleft"
                cx="70"
                cy="140"
                r="10.0"
                fill="#FCF5E5"
                opacity="1"
               />
               <circle
                id="innereyeleft"
                cx="70"
                cy="140"
                r="5.7"
                fill="#000000"
                opacity="1"
               />               
               </g>
               <g id="toysheepeyeright">
                <circle
                id="outereyeright"
                cx="35"
                cy="140"
                r="10.0"
                fill="#FCF5E5"
                opacity="1"
               />
               <circle
                id="innereyeright"
                cx="35"
                cy="140"
                r="5.7"
                fill="#000000"
                opacity="1"
               />
               </g>
               <g id="toysheepearright">
                <rect
                x="-30"
                y="110"
                rx="6"
                ry="6"
                width="65"
                height="15"
                fill="#000000"
              ></rect></g>
               <g id="toysheepearleft">
                <rect
                x="70"
                y="110"
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
