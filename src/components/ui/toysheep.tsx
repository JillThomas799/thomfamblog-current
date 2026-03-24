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
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
            </filter>
            <filter id="blur3" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.0" />
            </filter>

            <g id="toysheeplegleftfront">
              <g id="toysheeplegleftfrontupper">
                <rect 
                x="55"
                y="230"
                rx="6"
                ry="6"
                width="10"
                height="60"
                fill="#444444" />
              </g>
               <g id="toysheeplegleftfrontfoot">
                <ellipse
                cx="60"
                cy="290"
                rx="10"
                ry="7.5"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>

             <g id="toysheeplegrightfront">
              <g id="toysheeplegrightfrontupper"> 
                <rect 
                x="35"
                y="230"
                rx="6"
                ry="6"
                width="10"
                height="60"
                fill="#444444" />
              </g>
               <g id="toysheeplegrightfrontfoot">
                <ellipse
                cx="37"
                cy="290"
                rx="10"
                ry="7.5"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>

              {/* <g id="toysheeplegrightrear" filter="url(#blur2)">
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
            </g> */}
            
            {/* <g id="toysheeplegleftrear" filter="url(#blur2)">
              <g id="toysheeplegleftrearupper">
                <rect 
                x="-250"
                y="220"
                rx="6"
                ry="6"
                width="20"
                height="60"
                fill="#444444" />
                </g>
               <g id="toysheeplegleftrearfoot" filter="url(#blur2)">
                     <ellipse
                cx="-240"
                cy="290"
                rx="20"
                ry="15"
                fill="black"
                opacity="0.9"
                />
               </g>
            </g>              */}

            <g id="toysheepbody" filter="url(#blur3)">
                <circle
                cx="50"
                cy="240"
                r="30.0"
                // fill="#FCF5E5"
                fill="url(#gradtoysheepjumper)"
                opacity="1"
                
               /></g>
           
            <g id="toysheephead"   >
              
              <g id="toysheepface" filter="url(#blur2)" >
                <circle
                cx="50"
                cy="230"
                r="19.0"
                fill="#483C32"
                opacity="1"
               /></g>   
               <g id="toysheephair" filter="url(#blur2)">
                 
                <path fill="#222222"
                d="M 36 220 a 3,2 30 1 1 37 0 Z" />
              </g>           

               <g id="toysheepeyeleft">
                <circle
                id="outereyeleft"
                cx="58"
                cy="223"
                r="4.0"
                fill="#FCF5E5"
                opacity="1"
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
               <g id="toysheepearright" filter="url(#blur1)">
                <rect
                x="20"
                y="210"
                rx="6"
                ry="6"
                width="20"
                height="5"
                fill="#000000"
              ></rect></g>
               <g id="toysheepearleft" filter="url(#blur1)">
                <rect
                x="55"
                y="210"
                rx="6"
                ry="6"
                width="20"
                height="5"
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
