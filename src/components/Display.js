import React from "react";

function Display(diengi) {
  const { count } = diengi;
  console.log(count, "diengi");
  return (
    <div>
      <h2>Count ở component con: {diengi}</h2>
    </div>
  );
}

export default Display;
