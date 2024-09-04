import {React,useState } from 'react';
import UserHeader from './userHeader';
import UserFooter from './userFooter';
import UserMain from './userMain';
import Usersvg from './usersvg'
import ProgressContext from '../ProgressContext';
import '../../Style/index/header.module.css'; 
import '../../Style/index/footer.module.css'; 
import '../../Style/user/main.module.css'; 
const User = () => {
  const [completionPercentage, setCompletionPercentage] = useState(0);
  return (
    <ProgressContext.Provider value={{ completionPercentage, setCompletionPercentage }}>
      <div>
        <Usersvg/>
        <UserHeader /> 
        <UserMain/>
        <UserFooter /> 
      </div>
    </ProgressContext.Provider>
  );
};

export default User; 