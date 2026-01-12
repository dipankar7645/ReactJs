import React from 'react'
import Card from './components/Card';

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Prabhakar"
        age={23}
        img="https://images.unsplash.com/photo-1544380904-c686aad2fc40?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBncmFwaGljc3xlbnwwfHwwfHx8MA%3D%3D"
        />
      <Card
        user="Dipankar"
        age={21}
        img="https://images.unsplash.com/photo-1650615567023-0721bceeecb6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBncmFwaGljc3xlbnwwfHwwfHx8MA%3D%3D"
        />
    </div>
  );
}

export default App