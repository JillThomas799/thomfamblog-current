import React from "react";
import "./robins.css";

export default function Robins() {
  return (
    <div>
      <div>
        <svg
          id="robins"
          version="1.1"
          x="0"
          y="0"
          width="100vw"
          height="40vh"
          viewBox="-80 -90 500 500"
          className="overflow-visible"          
        >
          <g
            id="robin1"
            className="translate-x-[100px]  translate-y-[-350px] scale-[200%] md:translate-x-[-200px] md:translate-y-[-950px] md:scale-[350%]"
            // style={{ transform: "scale(1.5)" }}
            filter="url(#blur8)"
          >
            <defs>
              <filter id="blur8" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
              </filter>
            </defs>

            <g id="robin1breast">
              <path
                d="M -30 270 A 1 1 10 1 0 0 260"
                stroke="#C3BDBD"
                strokeWidth="1'5"
                fill="#C3BDBD"
                opacity="1.0"
              />
            </g>
            <g id="robin1wing">
              <path
                d="M -30 270 A 0.5 0.9 40 1 1 0 260"
                stroke="#90816A"
                strokeWidth="1'5"
                fill="#90816A"
                opacity="1.0"
              />
            </g>
            <g id="robin1redbreast">
              <ellipse
                cx="-3"
                cy="260"
                rx="6"
                ry="10"
                stroke="#FF8F02"
                strokeWidth="1'5"
                fill="#FF8F02"
                opacity="1.0"
              />
            </g>
            <g id="robin1Tail" transform="rotate(-40,-45, 280)">
              <rect
                x="-40"
                y="280"
                width="25"
                height="4"
                stroke="#C3BDBD"
                strokeWidth="1'5"
                fill="#90816A"
                opacity="1.0"
              ></rect>
            </g>
            <g id="robin1TailFly" transform="rotate(55,-45, 237)">
              <rect
                x="-33"
                y="237"
                width="20"
                height="4"
                stroke="#C3BDBD"
                strokeWidth="1'5"
                fill="#90816A"
                opacity="1.0"
              ></rect>
            </g>
            <g id="robin1eye">
              <circle
                cx="-5"
                cy="255"
                r="2.0"
                fill="black"
                opacity="0.7"
              ></circle>
            </g>

            <g id="robin1beak">
              <path
                d="M 4 256 q 3 -2 -3 0 "
                fill="90816"
                stroke="black"
                strokeWidth="2.5"
                opacity="1.0"
              ></path>
            </g>

            <g id="robin1leftLeg">
              <path
                d="M -18 280 L -18 292 Z"
                fill="black"
                stroke="black"
                strokeWidth="1.7"
                opacity="1.0"
              />
              <g id="robin1leftFoot">
                <g id="robin1leftFootToe1">
                  <path
                    d="M -18 292 L -22 291 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1.5"
                    opacity="1.0"
                  />
                </g>
                <g id="robin1leftFootToe2">
                  <path
                    d="M -18 292 L -14 288 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin1leftFootToe3">
                  <path
                    d="M -18 292 L -14 292 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin1leftFootToe4">
                  <path
                    d="M -18 292 L -14 296 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
              </g>
            </g>

            <g id="robin1rightLeg">
              <path
                d="M -12 280 L -12 292 Z"
                fill="black"
                stroke="black"
                strokeWidth="1.7"
                opacity="1.0"
              />
              <g id="robin1rightFoot">
                <g id="robin1rightFootToe1">
                  <path
                    d="M -12 292 L -16 291 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin1rightFootToe2">
                  <path
                    d="M -12 292 L -8 288 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin1rightFootToe3">
                  <path
                    d="M -12 292 L -8 292 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin1rightFootToe4">
                  <path
                    d="M -12 292 L -8 296 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
              </g>
            </g>
          </g>

          <g
            id="robin2"
             className="translate-y-[-500px] scale-[200%] md:translate-x-[-400px] md:translate-y-[-930px] md:scale-[400%]"
            // style={{ transform: "scale(0.89)" }}
            filter="url(#blur8)"
          >
            <defs>
              <filter id="blur8" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
              </filter>
            </defs>

            {/* <ellipse id="robin1Body" cx="0" cy="350" rx="20" ry="10" fill="#C3BDBD"" transform="translate(-200) rotate(-30)"/> */}
            <g id="robin2breast">
              <path
                d="M -30 270 A 1 1 10 1 0 0 260"
                stroke="#C3BDBD"
                strokeWidth="1'5"
                fill="#C3BDBD"
                opacity="1.0"
              />
            </g>
            <g id="robin2wing">
              <path
                d="M -30 270 A 0.5 0.9 40 1 1 0 260"
                stroke="#90816A"
                strokeWidth="1'5"
                fill="#90816A"
                opacity="1.0"
              />
            </g>
            <g id="robin2redbreast">
              <ellipse
                cx="-3"
                cy="260"
                rx="6"
                ry="10"
                stroke="#FF8F02"
                strokeWidth="1'5"
                fill="#FF8F02"
                opacity="1.0"
              />
            </g>
            <g id="robin2Tail" transform="rotate(-40,-45, 280)">
              <rect
                x="-40"
                y="280"
                width="25"
                height="4"
                stroke="#C3BDBD"
                strokeWidth="1'5"
                fill="#90816A"
                opacity="1.0"
              ></rect>
            </g>
            <g id="robin2TailFly" transform="rotate(55,-45, 237)">
              <rect
                x="-33"
                y="237"
                width="20"
                height="4"
                stroke="#C3BDBD"
                strokeWidth="1'5"
                fill="#90816A"
                opacity="1.0"
              ></rect>
            </g>
            <g id="robin2eye">
              <circle
                cx="-5"
                cy="255"
                r="2.0"
                fill="black"
                opacity="0.7"
              ></circle>
            </g>

            <g id="robin2beak">
              <path
                d="M 4 256 q 3 -2 -3 0 "
                fill="90816"
                stroke="black"
                strokeWidth="2.5"
                opacity="1.0"
              ></path>
            </g>

            <g id="robin2leftLeg">
              <path
                d="M -18 280 L -18 292 Z"
                fill="black"
                stroke="black"
                strokeWidth="1.7"
                opacity="1.0"
              />
              <g id="robin2leftFoot">
                <g id="robin2leftFootToe1">
                  <path
                    d="M -18 292 L -22 291 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1.5"
                    opacity="1.0"
                  />
                </g>
                <g id="robin2leftFootToe2">
                  <path
                    d="M -18 292 L -14 288 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin2leftFootToe3">
                  <path
                    d="M -18 292 L -14 292 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin2leftFootToe4">
                  <path
                    d="M -18 292 L -14 296 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
              </g>
            </g>

            <g id="robin2rightLeg">
              <path
                d="M -12 280 L -12 292 Z"
                fill="black"
                stroke="black"
                strokeWidth="1.7"
                opacity="1.0"
              />
              <g id="robin2rightFoot">
                <g id="robin2rightFootToe1">
                  <path
                    d="M -12 292 L -16 291 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin2rightFootToe2">
                  <path
                    d="M -12 292 L -8 288 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin2rightFootToe3">
                  <path
                    d="M -12 292 L -8 292 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
                <g id="robin2rightFootToe4">
                  <path
                    d="M -12 292 L -8 296 Z"
                    fill="#C3BDBD"
                    stroke="black"
                    strokeWidth="1"
                    opacity="1.0"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
