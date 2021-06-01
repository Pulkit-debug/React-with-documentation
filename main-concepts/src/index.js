import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.js";

{/* <React.StrictMode>
  </React.StrictMode>, */}



// function Hello(props) { // this is a component always start component with capital letter.
//   return <h1>Hola {props.name}</h1>
// }

// function Comment(props) {

//   // You must keep the functions "pure" meaning don't change the props inside the function. for this we use "states"
//   return (
//     <div>
//       <h1>{props.content} made by {props.author.first}</h1>
//     </div>
//   )
// }


// const author = {
//   first: "me",
//   second: "you"
// }


// Learning "State"

// class Clock extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       date: new Date(),
//     }
//   }

//   // LifeCycle in react means the time period for which a particular element cease to exist or doing it's work>
//   // so here mounting and unmounting concepts are being used.

//   // when the life cycle starts.

//   tick() { // this tick method updates the state. nice and easy!
//     this.setState({
//       date: new Date(),
//     });
//   }

//   componentDidMount() {
//     this.timerId = setInterval(() => {
//       this.tick();
//     }, 1000)
//   }


//   // when the life cycle ends.
//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello Time!</h1>
//         <h2>Current Time is: {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }


// ReactDOM.render(
//   <Clock />,
//   document.getElementById("root")
// );


// ReactDOM.render(
//   // <Comment author={author} content="this is a comment" />,
//   document.getElementById('root')
// );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals






// --------------------------------------------------------------------------------------------------------------------------------

// class Heading extends React.Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       content: <h1>This is .....</h1>,
//       isClicked: false,
//     }
//   }

//   handleClick = async () => {

//     await this.setState((prevState) => ({
//       isClicked: !prevState.isClicked,
//     }))

//     if (this.state.isClicked) {
//       this.setState((prevState) => ({
//         content: <h1>This is HEADING...</h1>
//       }));
//     }
//     else {
//       this.setState((prevState) => ({
//         content: <h1>This is ...</h1>
//       }));
//     }

//   }

//   render() {
//     return (
//       <div>
//         {this.state.content}
//         <button onClick={this.handleClick}>
//           {this.state.isClicked ? "Unload Heading" : "Load Heading"}
//         </button>
//       </div>
//     );
//   }
// }


// ReactDOM.render(
//   <Heading />,
//   document.getElementById("root")
// )


// -------------------------------------------------------------------------------------------------------------------------------------


// Lists and Keys

function ListItem(props) {

  return (
    <li>
      {props.value}
    </li>
  )
}

function NumberList(props) {
  const number = props.nums;
  const listItems = number.map((element) => // it's just that element inside the map need keys. gotta give'em bro.
    <ListItem key={element.toString()} value={element} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  )
}


const nums = [1, 2, 3, 4, 5];


ReactDOM.render(
  <NumberList nums={nums} />,
  document.getElementById("root")
)