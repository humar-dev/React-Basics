
// import Footer from "./Components/Footer"
// import Navbar from "./Components/Navbar"

// function App(){  
// return(
// <>
// <Navbar className="nav"/>
// <Footer/>
// </>

// )
// }

// export default App

// JSX stands for javascript XML
// JSX is not HTML , it is a syntax entension of JavaScript
// Babel convert's it into plan javascript
// You write JSX in React File  
// <--------why do we need hooks ??  ------------>


// learn react hooks , before react hooks we used class component for state or lifecycle

import { useState } from "react";

function App() {
  
  let counter = 15;
  let [count , setCounter ] = useState(15)

  const addCounter = ()=>{    //  +> in these functions , there is no rerendering , No UI change , in contrast react hook's give's React a memory to remember udated value's in re-redering process
       counter = counter+1 ;
       console.log(counter) 
      setCounter(count+1)
  }
  // console.log(counter) , =>this one line printing 15 twice why ??  the reason is strict mode in the main.jsx file , it reloads your app for safety check 

  /// <----------UseState Hook ------------>

  return (
    <>
  
    <Login array = {[1,2,3]}/>
    <h1>Hello,that's my first React project</h1>
    <button onClick={addCounter}> Add value </button>
    <p>Counter Value: {counter}</p>
    </>
    )
  }
  
  export default App
  
  
  
  // <--------- Prop in React---------->
  // Props are just object's passed to an argument
  // Internally react passing the name as an object withh all the prop like
  // prop ;{
  //   name : "Aiman"
  //   }
    
  //   important point => Props are read only , trying to modify them inside a component is wrog practice
    
    
    
    
    
    
    