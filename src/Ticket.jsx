import LotteryNum from "./LotteryNum";

function Ticket({ lottery }) {
  return (
    <>
    {lottery.map((num,idx) => <LotteryNum num={num} key={idx}/>)}
      
    </>
  );
}


export default Ticket;