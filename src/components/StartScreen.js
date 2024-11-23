import React from "react";
function StartScreen({ quesCount, dispatch }) {
  return (
    <div className="start">
      <h2>زمان خوشی سپری کنید</h2>
      <h3>شما باید به {quesCount} سوال پاسخ بدید</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        شروع
      </button>
    </div>
  );
}

export default StartScreen;
