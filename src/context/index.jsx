import { createContext, useState } from "react";
import { useForm } from "react-hook-form";

export const KahootContext = createContext();

export const KahootProvider = ({ children }) => {
  const copyLink = (code) => {
    navigator.clipboard.writeText(`${window.location}game/${code}`);
  };
  const [preguntas, setPreguntas] = useState( JSON.parse(localStorage.getItem("tests"))
  );

  const [test, setTest] = useState();
  const [num, setNum] = useState(0);
  const [valor, setValor] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [finish, setFinish] = useState(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconts] = useState(59);

  const [notFount,setNoutFound] = useState(false)
  const [test2,setTest2] = useState({})
   const [activate, setActivate] = useState({
    respuesta1: true,
    respuesta2: true,
    respuesta3: true,
    respuesta4: true,
  });
  const [preguntass, setPreguntass] = useState([]);
  const [show, setShow] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
   formState:{errors} ,
  } = useForm({
    defaultValues: {
      img:"",
      pregunta: "",
      respuesta1: "",
      respuesta2: "",
      respuesta3: "",
      respuesta4: "",
      respuestaCorrecta: "",
      nombreTest: "",
      autor: "",
      time: "",
    },
  });
 

  const onChangeText = (event, onChange, name) => {
    if (event.target.value !== "") {
      activate[name] = false;
      setActivate({ ...activate });
    } else {
      activate[name] = true;
      setActivate({ ...activate });
    }

    onChange(event.target.value);
  };

  const actualizarRepuestaCorrecta = (name) => {

    setValue("respuestaCorrecta", getValues(name));
  };

  const handleClose = () => {
    setShow(false);
    setActivate({
      respuesta1: true,
      respuesta2: true,
      respuesta3: true,
      respuesta4: true,
    });
    reset({
      img:"",
      pregunta: "",
      respuesta1: "",
      respuesta2: "",
      respuesta3: "",
      respuesta4: "",
      respuestaCorrecta: "",
    });
  };

  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    if(getValues('respuestaCorrecta')){
       const { autor, time, nombreTest, ...dataFilter } = data;
    setPreguntass([...preguntass, dataFilter]);
    handleClose();
    }
   
  };

  const eliminarPregunta = (index) => {
    const nuevo = preguntass.filter((e, i) => i !== index);
    setPreguntass(nuevo);
  };

  const respuesta = (value) => {
    setNum(num + 1);

    if (test.preguntass.length - 1 > num) {
      setNum(num + 1);
    } else {
      setFinish(true);
    }

    if (value === test.preguntass[num].respuestaCorrecta) {
      setValor(valor + 1);
    } else {
      setValor2(valor2 + 1);
    }
  };

  return (
    <KahootContext.Provider
      value={{
        copyLink,
        preguntas,
        setPreguntas,
        test,
        setTest,
        num,
        setNum,
        valor,
        setValor,
        valor2,
        setValor2,
        finish,
        setFinish,
        hours,
        setHours,
        minutes,
        setMinutes,
        seconds,
        setSeconts,
        notFount,setNoutFound,
        test2,setTest2,
        activate, setActivate,
        preguntass, setPreguntass,
        show, setShow,
        onChangeText,
        actualizarRepuestaCorrecta,
        handleClose,
        handleShow,
        onSubmit,
        eliminarPregunta,
        control,
        register,
        handleSubmit,
         errors,
         reset,
         respuesta 
      }}
    >
      {children}
    </KahootContext.Provider>
  );
};
