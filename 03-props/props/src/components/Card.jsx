import React from 'react'

const Card = (props) => {

    // console.log(props.user , props.age);

  return (
    <div className="card">
      <img
        src={props.img}
        alt=""
      />
      {/* <h1>hello, i ama dipankatr</h1> */}
      <h1> {props.user} {props.age} </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
        assumenda?
      </p>
      <button>view profile</button>
    </div>
  );
}

export default Card