/* From Uiverse.io by abhusha08 */
import { useContext } from "react";
import { KahootContext } from "../../context";
import { Link } from "react-router-dom";

 

const Finish = () => {
    const {valor,valor2} = useContext(KahootContext)
    return (
        <>
        <div className="card2">
  <button className="red-btn button">Respuestas Correctas {valor}</button>

  <button className="blue-btn button">Respuestas Incorrectas {valor2}</button>
  <Link to={'/'} className="btn btn-dark" >Home</Link>
</div>
        </>
    );
}

export default Finish;