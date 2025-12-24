import "./augustcyclist.css";

export default function AugustCyclist() {
  return (
    <div className="scale-[70%] translate-x-[-31px] md:scale-[53%] md:translate-x-[-21%]">
      <div id="AugustHeader">
        <div className="bikeRiding">
          <div className="clouds"></div>
          {/* <div className="shadow"></div> */}
          <div className="cyclist">
            <div id="bike" className="scale-[70%] translate-x-[-50px] md:scale-[100%]">
              <div className="leftTyre">
                <div className="spokes"></div>
              </div>

              <div className="rightTyre">
                <div className="spokes"></div>
              </div>

              <div className="wheel"></div>
              <div className="pedals"></div>
              <div className="chain"></div>
            </div>{" "}
            {/*Closing div for bike*/}
            <div id="girl" className="scale-[70%] translate-x-[-50px] md:scale-[85%]">
              <div className="top"></div>
              <div className="rightArm"></div>
              <div className="leftArm"></div>
              <div className="head"></div>
              <div className="hair"></div>
              <div className="strap"></div>
              <div className="trousers">
                <div className="leftLeg">
                  <div className="leftcalf"></div>
                </div>
                <div className="rightLeg">
                  <div className="calf"></div>
                </div>
              </div>{" "}
              {/*Closing div for trousers*/}
            </div>{" "}
            {/* closing div for class girl */}
          </div>{" "}
          {/*closing div for class cyclist*/}
        </div>{" "}
        {/*Closing div for class bike-riding*/}
      </div>{" "}
      {/*closing div for id AugustHeader*/}
    </div>
  );
}
