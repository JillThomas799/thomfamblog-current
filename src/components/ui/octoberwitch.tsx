import Image from 'next/image'
import Link from 'next/link'

import "./octoberwitch.scss"

export default function OctoberWitch() {
    
  return (
    <div>  
<div className="container">
  <div className="witch">
    <div className="hair"></div>
    <div className="head">
      <div className="head-copy"></div>
      <div className="eye -left">
        <div className="pupil"></div>
      </div>
      <div className="eye -right">
        <div className="pupil"></div>
      </div>
      <div className="mouth">
        <div className="tongue"></div>
      </div>
      <div className="cheek -left"></div>
      <div className="cheek -right"></div>
      <div className="ear -left"></div>
      <div className="ear -right"></div>
    </div>
    <div className="neck"></div>
    <div className="hat"></div>
    <div className="hat-brim"></div>
    <div className="arm -left">
      <div className="hand -left">
        <div className="finger -left"></div>
        <div className="finger -skew-left -right"></div>
      </div>
    </div>
    <div className="arm -right">
      <div className="hand -right">
        <div className="finger -skew-right -left"></div>
        <div className="finger -right"></div>
      </div>
    </div>
    <div className="body"></div>
    <div className="leg">
      <div className="foot"></div>
    </div>
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
  <div className="lone-eye">
    <div className="lone-eye__color">
      <div className="lone-eye__pupil"></div>
    </div>
  </div>
  <div className="cat">
    <div className="cat-body"></div>
    <div className="cat-head">
      <div className="cat-pupil -left"></div>
      <div className="cat-pupil -right"></div>
      <div className="cat-ear -left"></div>
      <div className="cat-ear -right"></div>
    </div>
    <div className="cat-tail"></div>
  </div>
</div>



</div>
    );
}
