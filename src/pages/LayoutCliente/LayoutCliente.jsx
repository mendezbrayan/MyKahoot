import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { KahootContext } from "../../context";
import './styles.css'
const LayoutCliente = () => {

const {preguntas,
    notFount,setNoutFound,
    test2,setTest2
  } = useContext(KahootContext)

    const navigate = useNavigate()
    const {codigo} = useParams()
    
    useEffect(() => {
const prueba = preguntas.find((item) => item.codigo === codigo)
if(!test2){
  setNoutFound(true)
}else{
setTest2(prueba)

}
 },[])

    const start = () => {
        navigate(`/game/${codigo}/start`)
    }
    return (
        <>
        {notFount && <h2>Test No Encontrado</h2>}
        {!notFount && 
        
        <div className="d-flex align-items-center  pt-5 m-auto flex-column justify-content-center">
<div className="card py-4  ">
    <h2>Welcome To Kahoot Chango</h2>
<p><span className="fw-bold">The Autor game is:</span> {test2?.autor}</p>

     <p><span className=" fw-bold">Time to take test:  </span>{`${test2?.time} Minutos`}</p>
<p><span className="fw-bold">Total Questions in Test:</span> {test2?.preguntass?.length}</p>
  
  <Button className="z-1 boton" onClick={start} variant="danger">
Start
</Button>
    
</div>

        </div>
        }
        </>
    );
}

export default LayoutCliente;