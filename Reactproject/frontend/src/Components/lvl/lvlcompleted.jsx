import React from 'react';
import SVGComponent from './SVGComponent'
import LvlHeader from './lvlHeader';
import LvlFooter from './lvlFooter';
import LvlMain from './lvlMain';
import '../../Style/lvl/header.module.css'; 
import '../../Style/lvl/footer.module.css'; 
import '../../Style/lvl/main.module.css'; 
const LVL = () => {
  return (
    <div>
    <SVGComponent/>
      <LvlHeader /> 
      <LvlMain/>
      <LvlFooter /> 
    </div>
  );
};

export default LVL; 