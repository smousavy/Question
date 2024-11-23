import React from "react";
function NextBtn({ answer, dispatch, quesCount, quesIndex }) {
  if (answer === null) return null;
  if (quesIndex + 1 > quesCount) return null;
  if (quesIndex + 1 == quesCount) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        پایان
      </button>
    );
  }
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      سوال بعدی
    </button>
  );
}

export default NextBtn;
