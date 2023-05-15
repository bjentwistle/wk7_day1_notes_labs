import React from 'react';    // 1️⃣
import './App.css';           // 2️⃣

function App() {              // 3️⃣
  // we can write JS here :)  // 4️⃣
  const name = "Becky"
  const age = "'none of your business'"
  const personsPet = {"name":"Poppy",
                  "breed": "Labrador",
                  "age": 3}
  return (                    // 5️⃣
  <div>
  	<h1 className="title">Hello Beautiful World!</h1>
    <p> My name is {name} and I'm {age} years old!</p>
    <p>About:</p>
    <p>{name} has a pet {personsPet.breed}, who's name is {personsPet.name} and she is {personsPet.age} years old.</p>
  </div>    // 6️⃣
  );                          // 7️⃣
}                             // 8️⃣

export default App;           // 9️⃣