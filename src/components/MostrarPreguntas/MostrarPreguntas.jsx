import { useContext, useEffect } from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Temporizador from "../Temporizador/Temporizador";
import { KahootContext } from "../../context";
import Finish from "../Finish/Finish";
import './styles.css'


const MostrarPreguntas = () => {
  const {
    preguntas,
    test,
    setTest,
    num,
    finish,
    respuesta
  } = useContext(KahootContext);

  const { codigo } = useParams();
  const prueba = preguntas.find((item) => item.codigo === codigo);

  useEffect(() => {
    setTest(prueba);
  }, []);


  return (
    <>
      {finish === true ? (
        <div className="d-flex mt-5 justify-content-center">
          <Finish/>

        </div>
      ) : (
        <Container>
          <h1 className="text-center">{test?.preguntass[num]?.pregunta}</h1>
          <Row>
            <Col
              className="d-flex m-auto  justify-content-center mb-3 gap-4"
              xs={6}
              md={4}
            >
              <Temporizador time={test?.time} />

              <Image
                style={{ width: "500px", height: "300px" }}
                src={test?.preguntass[num]?.img}
                rounded
              />
            </Col>
            <Col md={12} className="d-flex   justify-content-center mb-3 gap-4">
              <Button
                onClick={() => respuesta(test?.preguntass[num]?.respuesta1)}
                variant="danger"
                size="lg"
                className="px-3"
                style={{ width: "300px" }}
              >
                <i className="bi bi-triangle-fill text-white"></i>{" "}
                {test?.preguntass[num]?.respuesta1}
              </Button>
              <Button
                onClick={() => respuesta(test?.preguntass[num]?.respuesta2)}
                variant="primary"
                size="lg"
                className="px-3"
                style={{ width: "300px" }}
              >
                <i className="bi bi-diamond-fill text-white"></i>{" "}
                {test?.preguntass[num]?.respuesta2}
              </Button>
            </Col>
            <Col md={12} className="d-flex  justify-content-center gap-4">
              <Button
                onClick={() => respuesta(test?.preguntass[num]?.respuesta3)}
                variant="warning"
                size="lg"
                className="px-3"
                style={{ width: "300px" }}
              >
                <i className="bi bi-circle-fill text-white"></i>{" "}
                {test?.preguntass[num]?.respuesta3}
              </Button>
              <Button
                onClick={() => respuesta(test?.preguntass[num]?.respuesta4)}
                variant="success"
                size="lg"
                className="px-3"
                style={{ width: "300px" }}
              >
                <i className="bi bi-square-fill text-white"></i>{" "}
                {test?.preguntass[num]?.respuesta4}
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default MostrarPreguntas;
