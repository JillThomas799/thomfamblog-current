import Image from 'next/image'
import Link from 'next/link'

import "./octoberwitch.scss"

export default function OctoberWitch() {

  return (
    <div>
      <div className="container">
         <div className="star-1"></div>
      <div className="star-2"></div> 
             <div className="moon">
                 </div>

        <div className="cauldron">
          <div className="cauldron-body"></div>
          <div className="cauldron-brim -top"></div>
          <div className="cauldron-brim -bottom"></div>
          <div className="cauldron-leg -left"></div>
          <div className="cauldron-leg -right"></div>
          <div className="cauldron-leg -small"></div>
          <div className="bottom-goo -green -g-right"></div>
          <div className="bottom-goo -red -r-middle"></div>
          <div className="goo-drip -green">
            <div className="goo-drop -green"></div>
          </div>
          <div className="goo-drip -red -right">
            <div className="goo-drop -red"></div>
          </div>
          <div className="goo-drip -red -left">
            <div className="goo-drop -red -left"></div>
          </div>
        </div>
        <div className="goo -green -g-left"></div>
        <div className="goo -green -g-right"></div>
        <div className="goo -red -r-left"></div>
        <div className="goo -red -r-right"></div>
        <div className="bubble -green"></div>
        <div className="bubble -yellow"></div>
        <div className="bubble -red"></div>
        <div className="bubble -green-2"></div>
        <div className="bottom-goo -green -g-left"></div>
        <div className="bottom-goo -red -r-line"></div>

        <div className="cat">
          <div className="cat-body"></div>
          <div className="cat-head">
            <div className="face">
		        <div className="eye eye--left">
		      	<div className="eye-pupil"></div>
		</div>
		<div className="eye eye--right">
			<div className="eye-pupil"></div>
		</div>
		<div className="muzzle"></div>
	</div>
           
            <div className="cat-ear -left"></div>
            <div className="cat-ear -right"></div>
          </div>
          <div className="cat-tail"></div>
        </div>
      </div>



    </div>
  );
}
