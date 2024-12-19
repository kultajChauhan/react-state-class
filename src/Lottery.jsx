import { useState } from "react";
import { helper ,check} from "./helper";

function Lotter() {
  let [lottery, setLottery] = useState([0,0,0]);

  function buyLottery() {
    setLottery(helper(3));
  }
  let isWin=check(lottery)===15;

  return (
    <>
      <h2>Lottery</h2>
      <div>
        {lottery[0]}
        {lottery[1]}
        {lottery[2]}
      </div>
      <button onClick={buyLottery}>Buy Lottery</button>
      <h2>{isWin&&"Congratulation"}</h2>
    </>
  );
}

export default Lotter;
