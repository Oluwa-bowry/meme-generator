// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./meme/Header"
import MemeGenerator from './meme/memeGenerator';


class App extends React.Component{

  
  render() {
    
    return(
      <div className = "todo-list">
        <Header />
        <MemeGenerator />
        
      </div>
      
    )
  }
}

export default App



// 
// function App() {
//   return (
//     <div
//     tabIndex={1}
//     onFocus={(e) => {
//       if (e.currentTarget === e.target) {
//         console.log('focused self');
//       } else {
//         console.log('focused child', e.target);
//       }
//       if (!e.currentTarget.contains(e.relatedTarget)) {
//         // Not triggered when swapping focus between children
//         console.log('focus entered self');
//       }
//     }}
//     onBlur={(e) => {
//       if (e.currentTarget === e.target) {
//         console.log('unfocused self');
//       } else {
//         console.log('unfocused child', e.target);
//       }
//       if (!e.currentTarget.contains(e.relatedTarget)) {
//         // Not triggered when swapping focus between children
//         console.log('focus left self');
//       }
//     }}
//   >
//     <input id="1" />
//     <input id="2" />
//   </div>
    
//   )
// }



/* <div className="joke-instances">
      <Joke 
      question= "What two things can you never eat for breakfast?"
      punchline= "Lunch and dinner"
      />

      <Joke 
      question= "What gets wetter the more it dries?"
      punchline= "Damn you're right!"/>

      <Joke 
      punchline = "I'm tired of everything! Lord you said no peace for the wicked but I'm not wicked, I'm your son." />
    </div> */