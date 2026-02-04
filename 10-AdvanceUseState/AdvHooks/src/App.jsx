// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({user:'Dipankar' , age:20})

//   const btnclick = () =>{
//     const newNum = {...num}
//     newNum.user = 'rahul'
//     newNum.age = 23
//     setNum(newNum)
//   }



//   return (
//     <div>
//       <h1>{num.user} , {num.age}</h1>
//       <button onClick={btnclick}>Click</button>
//     </div>
//   );
// };

// export default App

import React, { use, useState } from 'react'

const App = () => {

  const [num, setNum] = useState([10,20,30])

  const btnclick = () => {
    const newNum = [...num]
    newNum.push(99)
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclick}>Click</button>
    </div>
  )
}

export default App