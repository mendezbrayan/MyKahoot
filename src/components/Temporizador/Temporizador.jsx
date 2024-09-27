import { useContext, useEffect } from "react";
import "./styles.css";
import { KahootContext } from "../../context";
const Temporizador = ({time}) => {
  const { hours, setHours, minutes, setMinutes, seconds, setSeconts,setFinish } =
    useContext(KahootContext);

  useEffect(() => {
    const horas = parseInt(time / 60);
    const minutos = time - horas * 60;
    setHours(minutes == 0 ? horas - 1 : horas);
    setMinutes(minutos == 0 ? 59 : minutos - 1);
  }, [time]);

  useEffect(() => {
    function play() {
      setSeconts(seconds - 1);
    }
    if (seconds > 0) {
      const intervalID = setInterval(play, 1000);
      setTimeout(() => {
        clearInterval(intervalID);
      }, 1000);
    } else if (minutes > 0) {
      setMinutes(minutes - 1);
      setSeconts(59);
    } else if (hours > 0) {
      setHours(hours - 1);
      setMinutes(59);
      setSeconts(59);
    } else {
      setFinish(true);
    }
  }, [seconds]);

  return (
    <>
 <div className="loader">
     <div className="box-1">
     </div>
     <span>
        <h4>{`${hours}: ${minutes} : ${seconds}`}</h4>
     </span>
 </div>
      
    </>
  );
};

export default Temporizador;
