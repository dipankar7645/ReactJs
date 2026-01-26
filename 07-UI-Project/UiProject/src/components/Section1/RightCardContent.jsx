import React from 'react'

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
      <h2 className="bg-white rounded-full text-2xl font-semibold h-10 w-10 flex justify-center items-end">
        1
      </h2>
      <div>
        <p className="text-lg leading-relaxrd text-white mb-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo non
          accusamus et suscipit iure tenetur officiis doloremque.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white font-medium px-8 py-2 rounded-full">
            Satified
          </button>
          <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent