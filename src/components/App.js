import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Error from "./Error";
import Loader from "./Loader";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextBtn from "./NextBtn";
import ProgressBar from "./ProgressBar";
import FinishScreen from "./FinishScreen";
const initState = {
  questions: [],
  status: "loading",
  quesIndex: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFaild":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "answer":
      const ques = state.questions.at(state.quesIndex);

      return {
        ...state,
        answer: action.payload,
        points:
          ques.correctOption === action.payload
            ? state.points + ques.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        answer: null,
        quesIndex: state.quesIndex + 1,
      };
    case "finish":
      return {
        ...state,
        status: "finish",
      };
    default:
      console.log("errorrrrrrr");
  }
}
function App() {
  const [{ questions, status, quesIndex, answer, points }, dispatch] =
    useReducer(reducer, initState);
  const quesCount = questions.length;

  const maxpoint = questions.reduce((acc, cur) => cur.points + acc, 0);

  useEffect(function () {
    fetch("questions.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFaild" }));
  }, []);
  return (
    <div className="App">
      <Header />
      <Main>
        {status === "error" && <Error />}
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <StartScreen quesCount={quesCount} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <ProgressBar
              maxpoint={maxpoint}
              quesCount={quesCount}
              quesIndex={quesIndex}
              points={points}
              answer={answer}
            />
            <Question
              question={questions[quesIndex]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextBtn
              answer={answer}
              dispatch={dispatch}
              quesCount={quesCount}
              quesIndex={quesIndex}
            />
          </>
        )}
        {status === "finish" && (
          <FinishScreen maxpoint={maxpoint} points={points} />
        )}
      </Main>
    </div>
  );
}

export default App;
