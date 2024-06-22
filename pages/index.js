import React from "react";
// import styled, { createGlobalStyle } from "styled-components";
// import Header from "../Component/Header/Header";
// import ButtonContainer from "../Component/Button/ButtonContainer";
// import MainContainer from "../Component/MainContainer/MainContainer";
import { useState } from "react";
import Header from "@/Component/header/Header";
import ButtonContainer from "@/Component/buttom/Buttoncontainer";
import MainContainer from "@/Component/maincontainer/Maincontainer";
import Modal from "@/Component/buttom/modal/Modal";

// const CompanyText = styled(Text)`
//   font-family: "IRANSansBold";
// `;

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    console.log(closeModal);
  };

  //  const openModal = () => {
  //   setShowModal(!showModal);
  //  };

  return (
    <>
      <Header />
      <ButtonContainer openModal={openModal} />
      <MainContainer />
      <Modal showModal={showModal} closeModal={closeModal} />
    </>
  );
};
export default Page;
