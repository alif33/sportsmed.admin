




import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Login = ({ children }) => {



  // const [modal, setModal] = useState(false);

  const toggle = () => setModal(true);

  return (
    <>
      <Modal isOpen={true} toggle={true}>
        <ModalHeader toggle={true}></ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
};

export default Login;