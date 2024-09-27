import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Table,
  Modal,
  FormText,
} from "react-bootstrap";
import { useContext } from "react";
import InputRespuestas from "../../components/InputRespuesta/InputRespuestas";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { KahootContext } from "../../context";

const CreateTest = () => {
const {
  activate,
  preguntass, setPreguntass,
  show, onChangeText,
  actualizarRepuestaCorrecta,
  handleClose,
  handleShow,
  onSubmit,
  eliminarPregunta,
  control,
  register,
  handleSubmit,
  errors,reset } = useContext(KahootContext)

  const navigate = useNavigate()
  const handleCreateTest = (data) => {

    const { autor, time, nombreTest } = data;
    if (preguntass.length <= 0) {
      alert("No puedes guardar");
    } else {
      const guardar = {
        codigo: Math.random().toString(36).substring(2, 9),
        autor,
        time,
        nombreTest,
        preguntass,
      };
      const tests = JSON.parse(localStorage.getItem("tests"));
      if (tests) {
        tests.push(guardar);
        localStorage.setItem("tests", JSON.stringify(tests));
      } else {
        localStorage.setItem("tests", JSON.stringify([guardar]));
      }


      reset();
      setPreguntass([]);
      alert("Se a Guardado con exito");
      navigate('/')

    }
  };


  return (
    <>
      <Container>
        <h1 className="text-center">Crear una Evaluacion</h1>
        <Form className="mt-5 text-center ">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                 <div className="d-flex flex-column ">

                <Form.Label>Nombre del Test</Form.Label>
                {errors.nombreTest && <FormText className="mb-2 text-danger">{errors.nombreTest.message}</FormText>}
               
                 </div>
                <Form.Control
                  {...register("nombreTest",{required:'Este campo no puede estar vacio'})}
                  type="text"
                  placeholder="Nombre del Test"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
               <div className="d-flex flex-column">

                <Form.Label>Autor
                </Form.Label>
                {errors.autor && <FormText className="mb-2 text-danger">{errors.autor.message}</FormText>}
               </div>

                <Form.Control
                  {...register("autor",{required:'Este campo no puede estar vacio'})}
                  type="text"
                  placeholder="Nombre del Autor"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
               <div className="d-flex flex-column ">
                <Form.Label>Duracion
                <Form.Text> (Ingrese los minutos)</Form.Text>

                </Form.Label>

                {errors.time && <FormText className="mb-2 text-danger">{errors.time.message}</FormText>}
               </div>
             
                <Form.Control
                  {...register("time",{required:'Este campo no puede estar vacio'})}
                  type="number"
                  placeholder="Duracion"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Row>
              <Col className="d-flex justify-content-end">
          
                <Button
                  className="my-3 me-2"
                  variant="danger"
                  onClick={handleSubmit(handleCreateTest)}
                >
                Guardar Cambios
                </Button>

                <Button className="my-3" variant="primary" onClick={handleShow}>
                  Crear Pregunta
                </Button>
              </Col>
            </Row>

            <Col>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Url de Imagen</th>
                    <th>Pregunta</th>
                    <th>Respuestas</th>
                    <th>Respuesta Correcta</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {preguntass?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.img}</td>
                      <td>{item.pregunta}</td>
                      <td>{`${item.respuesta1}, ${item.respuesta2}, ${item.respuesta3}, ${item.respuesta4},`}</td>
                      <td>{item.respuestaCorrecta}</td>
                      <td>
                        <Button
                          onClick={() => eliminarPregunta(index)}
                          className="btn btn-danger"
                        >
                          eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Crear Pregunta</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Text className="mb-2 text-danger">
                    {errors.img && "Necesita Ingresar una URL"}
                  </Form.Text>

                  <Controller
                    name="img"
                    control={control}
                    rules={{ required: true ,pattern:/https:/i}}
                    render={({ field }) => (
                      <Form.Control
                        className="mt-2"
                        {...field}
                        type="text "
                        placeholder="img"
                      />
                    )}
                  />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Text className="mb-2 text-danger">
                    {errors.pregunta && "Necesita Ingresar su  Pregunta"}
                  </Form.Text>

                  <Controller
                    name="pregunta"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Form.Control
                        className="mt-2"
                        {...field}
                        type="text "
                        placeholder="Ingrese su  Pregunta"
                      />
                    )}
                  />
                </Form.Group>

                <Form.Label>Respuesta 1: </Form.Label>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Text className=" text-danger">
                    {errors.respuesta1 && "Necesita llenar este campo"}
                  </Form.Text>

                  <Controller
                    name="respuesta1"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, name, ref } }) => {
                      return (
                        <InputRespuestas
                          activate={activate[name]}
                          onChange={(e) => onChangeText(e, onChange, name)}
                          inputRef={ref}
                          control={control}
                          name={name}
                          onChangeTwo={() => actualizarRepuestaCorrecta(name)}
                          nameRadio={"respuestaCorrecta"}
                        />
                      );
                    }}
                  />
                </Form.Group>

                <Form.Label>Respuesta 2:</Form.Label>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Text className=" text-danger">
                    {errors.respuesta2 && "Este campo no puede estar vacio"}
                  </Form.Text>

                  <Controller
                    name="respuesta2"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, name, ref } }) => (
                      <InputRespuestas
                        activate={activate[name]}
                        onChange={(e) => onChangeText(e, onChange, name)}
                        inputRef={ref}
                        control={control}
                        name={name}
                        onChangeTwo={(e) => actualizarRepuestaCorrecta(name)}
                        nameRadio={"respuestaCorrecta"}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Label>Respuesta 3:</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Text className="mb-2 text-danger">
                    {errors.respuesta3 && "Este campo no puede estar vacio"}
                  </Form.Text>

                  <Controller
                    name="respuesta3"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, name, ref } }) => (
                      <InputRespuestas
                        activate={activate[name]}
                        onChange={(e) => onChangeText(e, onChange, name)}
                        inputRef={ref}
                        control={control}
                        name={name}
                        onChangeTwo={(e) => actualizarRepuestaCorrecta(name)}
                        nameRadio={"respuestaCorrecta"}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Label>Respuesta 4:</Form.Label>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Text className="mb-2 text-danger">
                    {errors.respuesta4 && "Este campo no puede estar vacio"}
                  </Form.Text>

                  <Controller
                    name="respuesta4"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, name, ref } }) => (
                      <InputRespuestas
                        activate={activate[name]}
                        onChange={(e) => onChangeText(e, onChange, name)}
                        inputRef={ref}
                        control={control}
                        name={name}
                        onChangeTwo={(e) => actualizarRepuestaCorrecta(name)}
                        nameRadio={"respuestaCorrecta"}
                      />
                    )}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                Guardar Pregunta
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Container>
    </>
  );
};

export default CreateTest;
