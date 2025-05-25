import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import {sum} from "./helepr";
import Form from "./Form";
import CommentsForm from "./CommentsForm";
import Comment from "./Comment";
import Counter from "./Counter";
import Joker from "./Joker";

// function App() {

//   let winCondition = (ticket) => {
//     return sum(ticket) === 15;
//   }

//   return (
//     <>
//       <Lottery n={3} winCondition={winCondition}/>
//     </>
//   );
// }

// export default App;

function App() {

  return (
    <>
      <Joker/>
    </>
  );
}

export default App;