import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Modal({ children, onClose }) {
  return (
    <ModalBG
      onClick={onClose}
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <ModalCentered onClick={(e) => e.stopPropagation()}>{children(onClose)}</ModalCentered>
    </ModalBG>
  );
}

const ModalBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
const ModalCentered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 250px;
  height: 150px;
  background: white;
  color: white;
  z-index: 10;
 
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;
export default Modal;
