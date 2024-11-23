import React from "react";
function FinishScreen({ maxpoint, points }) {
  const pointpercent = (points / maxpoint) * 100;
  return (
    <>
      <div className="result">
        <p>
          شما {points} امتیاز از {maxpoint} امتیاز گرفتید
        </p>
      </div>
      <p className="highscore">
        {pointpercent > 70
          ? "شما فرهنگ مطالع بالایی دارید"
          : "شما باید بیشتر مطالع کنید"}
      </p>
    </>
  );
}

export default FinishScreen;
