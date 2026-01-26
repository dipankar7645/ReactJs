import React from 'react'

const App = () => {

  function btnclick(){
    console.log('button is clicked')
  }


  return (
    <div>
      <button onClick={btnclick}>Click here</button>
    </div>
  )
}

export default App