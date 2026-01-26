import React from 'react'

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <div className="p-8">
        <h3 className="mb-7 leading-[1.1] text-7xl font-bold">
          Prospective <br />
          <span className="">customer</span> <br /> segmentation
        </h3>
        <p className="text-xl font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quo quas dicta cum aspernatur at, minima praesentium, delectus modi
          culpa
        </p>
      </div>

      <div className="text-8xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
}

export default LeftContent