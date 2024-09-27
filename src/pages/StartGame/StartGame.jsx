import { useEffect, useState } from "react";
import './style.css'
import MostrarPreguntas from "../../components/MostrarPreguntas/MostrarPreguntas";
const StartGame = () => {
    
    const [cont,setCont] = useState(5)
   const [show,setShow] = useState(true)

useEffect(() => {
    function myCallback () {
        setCont(cont - 1)
    }
    if(cont > 0){
const intervalID = setInterval(myCallback, 1000)
setTimeout(() => {
    clearInterval(intervalID)
}, 1000);
    }else{
        setShow(false)
    }

},[cont])

 
   
    return (
        <>
        {show && (  <div className="text-center  d-flex  pt-5">

        
      <div className="loader1">
    <span>Empezamos en {cont}</span>
    <span>Empezamos en {cont}</span>
</div>

        {cont === 0 && <h3>Goo...!!</h3>}
        </div> )}
       {!show &&  <MostrarPreguntas/>}
       
        
        </>
    );
}

export default StartGame;