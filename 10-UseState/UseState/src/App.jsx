import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  function increaseNum(){
    setNum (num+1)
  }
  function decreaseNum(){
    setNum (num-1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  );
}

export default App



// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10);
//   const [user, setUser] = useState('Dipanakr')
//   const [array, setArray] = useState([10,20,30,40])
//   function cahngevalue() {
//     setNum(20);
//     setUser('Rahul')
//     setArray([40,50,60,70])
//   }

//   return (
//     <div>
//       <h1>Value of num is {num}</h1>
//       <h1>Name is {user} </h1>
//       <h1>Array is {array} </h1>
//       <button onClick={cahngevalue}>Click</button>
//     </div>
//   )
// }

// export default App.

