import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Modal from "./modal/Modal";
const Button1 = styled.button`
  border: none;
  background-color: #07ce4f;
  border-radius: 10px;
  color: white;
  width: 170px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 1238px 0;
  font-size: 18px;

  /* &:hover {
    background-color: #0056b3;
  } */
`;

const Text1 = styled.div`
  display: flex;
  color: white;
  /* font-family: "IRANSansBold"; */
  justify-content: flex-start;
  margin: ${({ $margin }) => $margin};
  /* 
  width: 143px;
  height: 30px; */
`;

// const ListContainer = styled.div`
//   overflow: hidden;
//   max-height: ${({ show }) => (show ? "500px" : "0")};
//   transition: max-height 0.5s ease-out;
// `;

// const List = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
//   background-color: #f0f0f0;
//   border-radius: 10px;
//   margin-top: 10px;
// `;

// const ListItem = styled.li`;
//   padding: 10px;
//   border-bottom: 1px solid #ddd;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

const ButtonWithModal = ({ openModal }) => {
  //   const [showModal, setShowModal] = useState(false);

  //   const toggleModal = () => {
  //     setShowModal(!showModal);
  //   };

  return (
    <div>
      <Button1
        onClick={openModal}
        // {showModal ? "close" : "open"}
      >
        <Text1 $margin="10px"> تعریف کمپین جدید</Text1>
        <Image
          // margin="10px"
          src="/icons/plas.svg"
          width={20.31}
          height={20.31}
          alt=""
          // onClick={closeModal}
        />
      </Button1>
      {/* {showModal && <Modal onClose={toggleModal} />} */}
    </div>
  );
};
export default ButtonWithModal;
