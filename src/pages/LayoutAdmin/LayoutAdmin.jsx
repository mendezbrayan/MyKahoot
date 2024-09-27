import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KahootContext } from "../../context";

const LayoutAdmin = () => {
  const {copyLink,eliminarTest} = useContext(KahootContext)
const table = JSON.parse(localStorage.getItem('tests'))
  return (
    <>
      <div className="container pt-5">
        <div className="d-flex justify-content-end ">
          <Link className="btn btn-primary" to={"/create"}>
            Create Test
          </Link>
        </div>
        <div className="d-flex  flex-column justify-content-center ">
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre de la Prueba</th>
                <th>Duracion</th>
                <th>Autor</th>
                <th>Total Preguntas</th>
                <th>Codigo</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item,index) => (
                  <tr  key={index}>
                <td>1</td>
                <td>{item.nombreTest}</td>
                <td>{item.time}</td>
                <td>{item.autor}</td>
                <td>{item.preguntass?.length}</td>
                <td>{item.codigo}</td>
                <td> 
                  <Button onClick={() => copyLink(item.codigo)} variant="success">Copiar Link</Button>
                </td>
              <td>
              <Button onClick={() => eliminarTest(index)} variant="danger">Eliminar</Button>
              
            </td>
            </tr>
              ))}
            
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
