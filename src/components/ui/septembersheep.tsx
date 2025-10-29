
import React from "react";
import "./septembersheep.css";
import { Link } from "react-router-dom";

export default function SeptemberSheep() {
  return (
    <div className="m-8 border-solid border-4 border-[#743500]">
      <div
        className="bg-[#98964D] h-screen"
      >
               
        <svg
         id="CowsAndSheep"
          version="1.1"
          x="0"
          y="20"
          width="100%"
          height="50vh"
          viewBox="0 0 -60 0"
          className = "overflow-visible"
        >
          <defs>
            <radialGradient
              id="Gradsheepfur"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#f4eee0", stopOpacity: "1" }}
              >
                {" "}
              </stop>
              <stop
                offset="100%"
                style={{ stopColor: "#e9e0d4", stopOpacity: "1" }}
              ></stop>
            </radialGradient>

            <radialGradient
              id="GradSheepEar"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#3A3B3c", stopOpacity: "1.0" }}
              >
                {" "}
              </stop>
              <stop
                offset="100%"
                style={{ stopColor: "#efefe3", stopOpacity: "1.0" }}
              ></stop>
            </radialGradient>

            <radialGradient
              id="GradLambEar"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#FEC0CB", stopOpacity: "1" }}
              >
                {" "}
              </stop>
              <stop
                offset="100%"
                style={{ stopColor: "#efefe3", stopOpacity: "0.7" }}
              ></stop>
            </radialGradient>

            <linearGradient id="GradLambBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: " #d3d3d3" }} />
              <stop offset="100%" style={{ stopColor: "#f6f6da" }} />
            </linearGradient>

            <linearGradient id="GradLambLeg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: " #d3d3d3" }} />
              <stop offset="100%" style={{ stopColor: "#f6f6da" }} />
            </linearGradient>

            <linearGradient id="GradLambTail" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: " #3A3B3C" }} />
              <stop offset="10%" style={{ stopColor: " #d3d3d3" }} />
              <stop offset="100%" style={{ stopColor: " #d3d3d3" }} />
            </linearGradient>
          </defs>
          <svg id="swaledaleSheepS1" width="100vw" height="83vh">
            <g id="swaledaleSheepS1frontlegright">
              <rect
                x="618"
                y="478"
                rx="6"
                ry="6"
                width="7"
                height="28"
                fill=" url(#GradLambLeg)"
              ></rect>
            </g>
            <g id="swaledaleSheepS1frontlegleft">
              <rect
                x="600"
                y="478"
                rx="6"
                ry="6"
                width="7"
                height="28"
                fill=" url(#GradLambLeg)"
              ></rect>
            </g>
            <g id="swaledaleSheepS1rearlegright">
              <rect
                x="589"
                y="474"
                rx="6"
                ry="6"
                width="7"
                height="29"
                fill=" url(#GradLambLeg)"
              ></rect>
            </g>
            <g id="swaledaleSheepS1rearlegleft">
              <rect
                x="611"
                y="474"
                rx="6"
                ry="6"
                width="7"
                height="29"
                fill=" url(#GradLambLeg)"
              ></rect>
            </g>

            <g id="swaledaleSheepS1bodyleft">
              <path
                fill="url(#Gradsheepfur)"
                d="M 600 480 A 30,40 80 0 1 605, 430"
              />
            </g>
            <g id="swaledaleSheepS1bodycentre">
              <polygon
                points="610 430, 605 430, 600 480, 620 480"
                fill="url(#Gradsheepfur)"
              />
            </g>
            <g id="swaledaleSheepS1bodyright">
              <path
                fill="url(#Gradsheepfur)"
                d="M 620 480 A 30,40 80 0 0 610, 430"
              />
            </g>

            <g id="swaledaleSheepS1upperhornleft">
              <path
                fill="#c4915e"
                stroke="#c4915e"
                strokeWidth="8"
                d="M 604 418 A 30,30 20 0,0 595 422"
              />
            </g>
            <g id="swaledaleSheepS1lowerhornleft">
              <path
                fill="#c4915e"
                stroke="#c4915e"
                strokeWidth="2"
                d="M 595 422 A 30,40 0 0, 0 598 436"
              />
            </g>
            <g>
              <path
                id="sheepearSleft"
                d="M 604 420 q -39 -3 23 20 "
                fill="url(#GradSheepEar)"
                opacity="1.0"
              ></path>
            </g>
            <g id="swaledaleSheepS1upperhornright">
              <path
                fill="#c4915e"
                stroke="#c4915e"
                strokeWidth="8"
                d="M 616 418 A 30,30 -20 0,0 627 422"
              />
            </g>
            <g id="swaledaleSheepS1lowerhornright">
              <path
                fill="#c4915e"
                stroke="#c4915e"
                strokeWidth="2"
                d="M 627 425 A 30,40 0 0, 0 624 436"
              />
            </g>
            <g>
              <path
                id="sheepearSright"
                d="M 618 421 q 35 -3 -23 20"
                fill="url(#GradSheepEar)"
                opacity="1.0"
              ></path>
            </g>

            <g id="swaledaleSheep1Shead">
              <ellipse
                cx="610"
                cy="430"
                rx="11.5"
                ry="15"
                fill="#36454F"
                opacity="0.9"
              ></ellipse>
            </g>
            <g id="swaledaleSheep1Smuzzle">
              <ellipse
                cx="610"
                cy="436"
                rx="5"
                ry="9"
                fill="url(#Gradsheepfur)"
                opacity="0.9"
              ></ellipse>
            </g>
            <g id="swaledaleSheep1Seyerightouter">
              <ellipse
                cx="603"
                cy="425"
                rx="4"
                ry="3"
                fill="url(#Gradsheepfur)"
                opacity="0.9"
                className = "rotate-20, rotate-x-603 rotate-y-425)" 
              ></ellipse>
            </g>
            <g id="swaledaleSheep1Seyeleftouter">
              <ellipse
                cx="616"
                cy="425"
                rx="4"
                ry="3"
                fill="url(#Gradsheepfur)"
                opacity="0.9"
                style={{ transform: "rotate(-20deg,616,425)" }}
              ></ellipse>
            </g>
            <g id="swaledaleSheep1Seyerightinner">
              <ellipse
                cx="603"
                cy="425"
                rx="3"
                ry="1.5"
                fill="#36454F"
                opacity="0.9"
                className = "rotate-20, rotate-x-603 rotate-y-425)" 
              ></ellipse>
            </g>
            <g id="swaledaleSheep1Seyeleftinner">
              <ellipse
                cx="616"
                cy="425"
                rx="3"
                ry="1.5"
                fill="#36454F"
                opacity="0.9"
                  className = "rotate-20, rotate-x-616 rotate-y-425)" 
              ></ellipse>
            </g>

            <g id="swaledaleSheep1Smouth">
              <path d="M 605 438 Q 610 443 615 438" fill="#36454F" />
            </g>
            <g id="swaledaleSheep1Snoseleft">
              <path d="M 605 435 Q 607 436 610 439" fill="#36454F" />
            </g>
          </svg>
          <svg
            id="swaledaleSheepS2"
            width="100vw"
            height="83vh"
           style={{ transform: "translate(-300px, -120px)" }} 
          >
            <g id="swaledaleSheepS2frontlegright">
              <rect
                x="453"
                y="478"
                rx="6"
                ry="6"
                width="7"
                height="48"
                fill=" url(#GradLambLeg)"
              ></rect>
            </g>
            <g id="swaledaleSheepS2frontlegleft">
              <rect
                x="465"
                y="478"
                rx="6"
                ry="6"
                width="7"
                height="48"
                fill=" url(#GradLambLeg)"
              ></rect>
            </g>
            <g id="swaledaleSheepS2rearlegright">
              <rect
                x="498"
                y="493"
                rx="6"
                ry="6"
                width="7"
                height="29"
                fill=" url(#GradLambLeg)"
              ></rect>
            </g>
            <g id="swaledaleSheepS2rearlegleft">
              <rect
                x="509"
                y="493"
                rx="6"
                ry="6"
                width="7"
                height="29"
                fill=" url(#GradLambLeg)"
              ></rect>
            </g>
            <g id="swaledaleSheepS2body">
              <rect
                x="450"
                y="460"
                rx="30"
                ry="13"
                width="70"
                height="40"
                fill="url(#Gradsheepfur)"
              ></rect>
            </g>
            <g id="idmarkerswaledaleSheepS2">
              <rect
                x="485"
                y="460"
                rx="2"
                ry="30"
                width="7"
                height="10"
                fill="red"
                opacity="0.5"
                filter="url(#blur2)"
              ></rect>
            </g>

            <g
              id="relocatesheephornsswaledaleSheepS2"
              className = "translate-x-[-152px] translate-y-[37px]"
            >
              <g id="swaledaleSheepS2upperhornleft">
                <path
                  fill="#c4915e"
                  stroke="#c4915e"
                  strokeWidth="8"
                  d="M 604 418 A 30,30 25 0,0 594 422"
                />
              </g>
              <g id="swaledaleSheepS2lowerhornleft">
                <path
                  fill="#c4915e"
                  stroke="#c4915e"
                  strokeWidth="2"
                  d="M 594 422 A 30,40 0 0, 0 596 434"
                />
              </g>
              <g>
                <path
                  id="sheepS2earleft"
                  d="M 604 420 q -39 -3 23 20 "
                  fill="url(#GradSheepEar)"
                  opacity="1.0"
                ></path>
              </g>
              <g id="swaledaleSheepS2upperhornright">
                <path
                  fill="#c4915e"
                  stroke="#c4915e"
                  strokeWidth="7"
                  d="M 612 418 A 30,30 -20 0,1 627 422"
                />
              </g>
              <g id="swaledaleSheepS2lowerhornright">
                <path
                  fill="#c4915e"
                  stroke="#c4915e"
                  strokeWidth="2"
                  d="M 627 425 A 30,40 0 0, 0 624 434"
                />
              </g>
              <g>
                <path
                  id="sheepS2earright"
                  d="M 618 421 q 35 -3 -23 20"
                  fill="url(#GradSheepEar)"
                  opacity="1.0"
                ></path>
              </g>
            </g>

            <g id="swaledaleSheepS2head">
              <ellipse
                cx="457"
                cy="467"
                rx="11.5"
                ry="15"
                fill="#36454F"
                opacity="0.9"
              ></ellipse>
            </g>

            <g
              id="relocatefacialfeaturesswaledaleSheepS2"
              className = "translate-x-[-152px] translate-y-[37px]"
            >
              <g id="swaledaleSheepS2muzzle">
                <ellipse
                  cx="611"
                  cy="439"
                  rx="5"
                  ry="9"
                  fill="url(#Gradsheepfur)"
                  opacity="0.9"
                ></ellipse>
              </g>
              <g id="swaledaleSheepS2eyerightouter">
                <ellipse
                  cx="603"
                  cy="425"
                  rx="4"
                  ry="3"
                  fill="url(#Gradsheepfur)"
                  opacity="0.9"
                 className = "rotate-20, rotate-x-603 rotate-y-425)" 
                ></ellipse>
              </g>
              <g id="swaledaleSheepS2eyeleftouter">
                <ellipse
                  cx="616"
                  cy="425"
                  rx="4"
                  ry="3"
                  fill="url(#Gradsheepfur)"
                  opacity="0.9"
                  className = "rotate-20, rotate-x-616 rotate-y-425)" 
                ></ellipse>
              </g>
              <g id="swaledaleSheepS2eyerightinner">
                <ellipse
                  cx="604"
                  cy="426"
                  rx="3"
                  ry="1.5"
                  fill="#36454F"
                  opacity="0.9"
                  className = "rotate-20, rotate-x-603 rotate-y-425)" 
                ></ellipse>
              </g>
              <g id="swaledaleSheepS2eyeleftinner">
                <ellipse
                  cx="616"
                  cy="426"
                  rx="3"
                  ry="1.5"
                  fill="#36454F"
                  opacity="0.9"
                 className = "rotate-20, rotate-x-616 rotate-y-425)" 
                ></ellipse>
              </g>
              <g id="swaledaleSheepS2mouth">
                <path d="M 606 438 Q 610 443 617 438" fill="#36454F" />
              </g>
              <g id="swaledaleSheepS2noseleft">
                <path d="M 605 435 Q 607 436 610 439" fill="#36454F" />
              </g>
            </g>

            <g id="swaledaleSheepS2tail" transform="rotate(-5,514, 473)">
              <rect
                x="514"
                y="473"
                rx="3"
                ry="3"
                width="8"
                height="30"
                fill=" url(#Gradsheepfur)"
                opacity="0.9"
              ></rect>
            </g>
          </svg>
          ;
          <svg id="sheepAdultLambS1" className="scale-[50%]">
            <use
              xlinkHref="#swaledaleSheepS1"
              x={300}
              y={150}
               className = "scale[2.2]" 
            />
          </svg>
          <svg id="sheepAdultLambS2" className="scale-[55%]">
            <use
              xlinkHref="#swaledaleSheepS2"
              x={600}
              y={150}
             className = "scale[2.2] translate-x-8 translate-y-40" 
            />
          </svg>
        </svg>
      </div>{" "}
      {/* Closing tag SeptemberheaderDisplay*/}

    </div>
  );
}
