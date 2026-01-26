import React from 'react'
import RightCard from './RightCard';


const RightContent = (props) => {
  return (
    <div className="h-full p-6 w-2/3 overflow-x-auto flex flex-norap gap-10 ">
      {props.users.map(function(){
        return <RightCard />
      })}
    </div>
  );
}

export default RightContent