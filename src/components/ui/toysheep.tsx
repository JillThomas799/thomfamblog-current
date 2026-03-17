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

           
            <g id="toysheepface">
              <circle
                cx="0"
                cy="100"
                r="45.0"
                fill="#FF0000"
                opacity="1"
                />
            </g>

          
          </g>

        </svg>
      </div>
    </div>
  );
}
