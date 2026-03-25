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

              <filter id="blur1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.0" />
              </filter>
            </defs>

              <filter id="blur2" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.0" />
            </filter>
            <filter id="blur3" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.0" />
            </filter>

            <g id="toysheeplegleftrearfoot">
                     <ellipse
                cx="35"
                cy="272"
                rx="9"
                ry="6.5"
                fill="black"
                opacity="0.9"
                />
                </g>
                 <g id="toysheeplegrightrearfoot">
                     <ellipse
                cx="55"
                cy="272"
                rx="9"
                ry="6.5"
                fill="black"
                opacity="0.9"
                />
                </g>

            <g id="toysheeplegleftfront">
              <g id="toysheeplegleftfrontupper">
                <rect 
                x="55"
                y="235"
                rx="6"
                ry="6"
                width="8"
                height="65"
                fill="#444444" />
              </g>
               <g id="toysheeplegleftfrontfoot">
                <ellipse
                cx="60"
                cy="290"
                rx="9"
                ry="6.5"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>

             <g id="toysheeplegrightfront">
              <g id="toysheeplegrightfrontupper"> 
                <rect 
                x="35"
                y="235"
                rx="6"
                ry="6"
                width="8"
                height="65"
                fill="#444444" />
              </g>
               <g id="toysheeplegrightfrontfoot">
                <ellipse
                cx="37"
                cy="290"
                rx="9"
                ry="6.5"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>

            <g id="toysheepbody" filter="url(#blur3)">
                <ellipse
                cx="50"
                cy="237"
                rx="33.0"
                ry="35.0"
                // fill="#FCF5E5"
                fill="url(#gradtoysheepjumper)"
                opacity="1"
                
               /></g>
           
            <g id="toysheephead"   >
              
              <g id="toysheepface" filter="url(#blur1)" >
                <circle
                cx="50"
                cy="230"                
                r="18.0"
                fill="#483C32"
                opacity="1"
               />
               <g id="mouthright">
                <line 
                x1="42"
                y1="237"
                x2="50"
                y2="244"
                stroke="#000000"
                stroke-width="1.6" />
               </g>
                <g id="mouthleft">
                   <line 
                x1="58"
                y1="237"
                x2="50"
                y2="244"
                stroke="#000000"
                stroke-width="1.6" />
               </g>
                
               </g>           

               <g id="toysheepeyeleft">
                <circle
                id="outereyeleft"
                cx="58"
                cy="223"
                r="4.0"
                fill="#FCF5E5"
                opacity="1"
                filter="url(#blur1)"
               />
               <circle
                id="innereyeleft"
                cx="58"
                cy="223"
                r="2.5"
                fill="#000000"
                opacity="1"
               />               
               </g>
               <g id="toysheepeyeright">
                <circle
                id="outereyeright"
                cx="42"
                cy="223"
                r="4.0"
                fill="#FCF5E5"
                opacity="1"
                filter="url(#blur1)"
               />
               <circle
                id="innereyeright"
                cx="42"
                cy="223"
                r="2.5"
                fill="#000000"
                opacity="1"
               />
               </g>
               <g id="toysheepearright" transform="rotate(-30,20,217) translate (0,10)">
                <rect
                x="20"
                y="210"
                rx="6"
                ry="6"
                width="30"
                height="7"
                fill="#000000"
                opacity="0.9"
              ></rect></g>
               <g id="toysheepearleft"  transform="rotate(-10,55,217) translate (0,0)">
                <rect
                x="53"
                y="210"
                rx="6"
                ry="6"
                width="27"
                height="7"
                fill="#000000"
                 opacity="0.9"
              ></rect>
               </g>

                <g id="toysheephair" filter="url(#blur1)">
                 
                <ellipse 
                 cx="50"
                cy="211"
                rx="11.0"
                ry="12.0"
                fill="#222222"
                opacity="1" />
                
              </g>   
            </g>

          </g>

        </svg>
      </div>
    </div>
  );
}
