import React from "react";
function Options({ question, dispatch, answer }) {
  const answered = answer != null;

  return (
    <div>
      {question.options.map((option, i) => {
        return (
          <button
            disabled={answered}
            className={`btn btn-option ${answer === i ? "answer" : ""} ${
              answered
                ? i == question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={i}
            onClick={() => {
              dispatch({ type: "answer", payload: i });
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
