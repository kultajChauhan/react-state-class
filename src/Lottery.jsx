import { useState } from "react";
import { helper ,check} from "./helper";
import Ticket from "./Ticket";

function Lotter({n=3,winingNum=15}) {
  let [lottery, setLottery] = useState([0,0,0]);

  function buyLottery() {
    setLottery(helper(n));
  }
  let isWin=check(lottery)===winingNum;

  return (
    <>
      <h2>Lottery</h2>
      <div>
        <Ticket lottery={lottery}/>
      </div>
      <button onClick={buyLottery}>Buy Lottery</button>
      <h2>{isWin&&"Congratulation"}</h2>
    </>
  );
}

export default Lotter;
