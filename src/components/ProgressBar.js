import React from "react";
function ProgressBar({ maxpoint, quesIndex, quesCount, points, answer }) {
  return (
    <header className="progress">
      <progress max={quesCount} value={quesIndex + Number(answer !== null)} />
      <p>
        سوال {quesIndex + 1}\{quesCount}
      </p>
      <p>
        {points} امتیاز از {maxpoint}
      </p>
    </header>
  );
}

export default ProgressBar;
