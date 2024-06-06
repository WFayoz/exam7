import React from "react";
import done from "../assets/imgs/done.png";

const ThanksMessage = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col gap4 items-center justify-center">
        <img src={done} alt="" />
        <h1 className="font-bold text-green-500 text-[30px]">
          Your Order Is Delivering
        </h1>
      </div>
    </div>
  );
};

export default ThanksMessage;
