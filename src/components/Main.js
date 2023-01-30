import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";

import "../styles/Main.css";

const Main = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch()

  function startQuiz(){
    if(inputRef.current?.value){
      dispatch(setUserId(inputRef.current?.value))
    }
  }

  return (
    <div className="container">
      <div className="upper">
        <h1 className="title text-light">The Quiz App</h1>

        <ol>
          <li>You will be asked 10 Questions one after another.</li>
          <li>10 Points is awarded for the correct answer.</li>
          <li>
            Each question has three options. You can choose only one of option.
          </li>
          <li>You can review and change answers before the quiz finish.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
          <input
            ref={inputRef}
            className="userid"
            type="text"
            placeholder="Username*"
          />
        </form>

        <div className="start">
          {
            <Link className="btn" to={"quiz"} onClick={startQuiz}>
              Start Quiz
            </Link>
          }
        </div>
      </div>
      
    </div>
  );
};

export default Main;
