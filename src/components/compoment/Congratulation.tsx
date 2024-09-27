import { useEffect, useState } from "react";
import Confetti from "react-confetti";
function Congratulation() {
  const [numberOfPieces, setNumberOfPieces] = useState(500);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setIsShow(true);
    setNumberOfPieces(300);
    setTimeout(() => {
      setNumberOfPieces(0);
      setTimeout(() => {
        setIsShow(false);
      }, 3000);
    }, 2000);
  }, []);
  return (
    <div className={isShow ? " fixed top-0 right-0 bottom-0 left-0 z-50" : ""}>
      <Confetti
        className="w-full h-full"
        numberOfPieces={numberOfPieces}
        
      />
    </div>
  );
}

export default Congratulation;
