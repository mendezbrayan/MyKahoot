import { InputGroup,Form } from "react-bootstrap";

const InputRespuestas = ({activate,name,onChangeTwo,onChange,inputRef,nameRadio,...props}) => {
    return (
        

    <>
   
      <InputGroup className="mt-2">
      <Form.Control
      name={name}
      onChange={onChange} 
      ref={inputRef}
      props={props}
      aria-label="Text input with radio button" />

        <InputGroup.Radio required = {true} disabled={activate} name={nameRadio} onChange={onChangeTwo} aria-label="Radio button for following text input" />
      </InputGroup>
    </>
  );
}




export default InputRespuestas;