
// // import Footer from "./Components/Footer"
// // import Navbar from "./Components/Navbar"

// import { useRef , useState , useEffect } from "react";


// // function App(){  
// // return(
// // <>
// // <Navbar className="nav"/>
// // <Footer/>
// // </>

// // )
// // }

// // export default App

// // JSX stands for javascript XML
// // JSX is not HTML , it is a syntax entension of JavaScript
// // Babel convert's it into plan javascript
// // You write JSX in React File  
// // <--------why do we need hooks ??  ------------>


// // learn react hooks , before react hooks we used class component for state or lifecycle

// // import { useState } from "react";

// // function App() {
  
// //   let counter = 15;
// //   let [count , setCounter ] = useState(15)

// //   const addCounter = ()=>{    //  +> in these functions , there is no rerendering , No UI change , in contrast react hook's give's React a memory to remember udated value's in re-redering process
// //        counter = counter+1 ;
// //        console.log(counter) 
// //       setCounter(count+1)
// //   }
// //   // console.log(counter) , =>this one line printing 15 twice why ??  the reason is strict mode in the main.jsx file , it reloads your app for safety check 

// //   /// <----------UseState Hook ------------>

// //   return (
// //     <>
  
// //     <Login array = {[1,2,3]}/>
// //     <h1>Hello,that's my first React project</h1>
// //     <button onClick={addCounter}> Add value </button>
// //     <p>Counter Value: {counter}</p>
// //     </>
// //     )
// //   }
  
// //   export default App
  
  
  
//   // <--------- Prop in React---------->
//   // Props are just object's passed to an argument
//   // Internally react passing the name as an object withh all the prop like
//   // prop ;{
//   //   name : "Aiman"
//   //   }
    
//   //   important point => Props are read only , trying to modify them inside a component is wrog practice
    
    
    
    
    
    
    

  
// // import { useEffect, useState } from "react"
// // import Footer from "./Components/Footer"
// // import Navbar from "./Components/Navbar"

// // //useEffect Hooks works when our component Mount/load  on the browser

// // function App(){  

// //  let [count , setCount] = useState(0)


// //   function addCounter(){
// //       count = count +1;
// //       setCount(count);
// //   }

// //  // Run on Every rnder

// //    useEffect(()=>{
// //     alert("I will run on every Render")
// //   })


// //  // I will Run on first Render Only
// //   useEffect(()=>{
// //     alert("I am using UseEffect")
// //   }, [])

// //   // I will render on a certain value

// //   useEffect(()=>{
// //     alert("Count value has changed now")
// //   },[count])

// // return(
// // <>
// //      <h1>React Counter</h1>
// //     <p>Count value is:  {count}</p>
// //      <button onClick={addCounter}>AddCount</button>

// // </>

// // )
// // }

// // export default App



// //<--------------------useRef and useCallBack Hook in React -------------------->




// function App(){

  
//  let [count , setCount] = useState(0)

//  // let a=0 ; // This one is normal variable and everytime when our component render's it reset it's vaue to 0 , that's teh issue that we are using use ref , and across re-renders it helps to persist the value of a 
 
 
//   let a = useRef(0)
//   let ref = useRef()

//   // ref.current.backgroundColor="red"  React doesn't attach the ref to the DOM until after the component has rendered. So trying to access .current outside of useEffect will cause an error like:  

//   function addCounter(){
//       count = count +1;
//       setCount(count);
//   }

//     useEffect(()=>{
//       a.current = a.current +1 ;
//       ref.current.style.backgroundColor="red"
//     console.log(`Rerendering and teh value of a is ${a.current}.........`)
//   })

//  return(
//   <>
//      <h1>React Counter</h1>
// //     <p>Count value is:  {count}</p>
// //      <button  ref={ref}   onClick={addCounter}>AddCount</button>
//   </>

//  )
// }

// export default App






// ...existing code...

// -------------------- Other React Hooks Examples --------------------
// Added examples for useReducer, useMemo, useLayoutEffect, and useImperativeHandle
import React, { useReducer, useMemo, useLayoutEffect, useImperativeHandle, forwardRef, useRef } from "react";

// useReducer example
function ReducerCounter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>useReducer Example</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

// useMemo example
function MemoExample({ number }) {
  const double = useMemo(() => {
    return number * 2;
  }, [number]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Double of {number} is {double}</p>
    </div>
  );
}

// useLayoutEffect example
function LayoutEffectExample() {
  const ref = useRef();
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.color = "blue";
    }
  }, []);
  return <h2 ref={ref}>useLayoutEffect Example</h2>;
}

// useImperativeHandle example
const ImperativeHandleExample = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello: () => alert("Hello from useImperativeHandle!")
  }));
  return <h2>useImperativeHandle Example</h2>;
});

// Add these components to your App for demonstration
function HooksDemo() {
  const imperativeRef = useRef();
  return (
    <div>
      <ReducerCounter />
      <MemoExample number={5} />
      <LayoutEffectExample />
      <ImperativeHandleExample ref={imperativeRef} />
      <button onClick={() => imperativeRef.current.sayHello()}>Call Imperative Handle</button>
    </div>
  );
}

// Uncomment below to render HooksDemo in your app
// export default HooksDemo;

// -------------------- End of Other React Hooks Examples -----------