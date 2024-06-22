import React from "react";
import styled from "styled-components";
import Image from "next/image";

const HeaderContainer = styled.header`
  background-color: #e31c40;
  height: 96px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 80px;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 8px;
`;

const Text = styled.div`
  display: flex;
  color: white;

  margin: ${({ $margin }) => $margin};
  /* align-items: center;  */
  /* width: 143px;
  height: 30px;
  padding-top: 12px; */
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LeftDiv>
        <Image src="/icons/hamshahri.svg" width={30} height={30} alt="" />
        <Text $margin="0 8px"> پنل مدیریت ویدئوگرام </Text>
      </LeftDiv>
      <RightDiv>
        <Text $margin=" 10px"> شرکت شهر فرش</Text>
        {/* <Logo src="icons/flash.svg" alt="Logo" /> */}
        <Image src="/icons/flash.svg" width={12.88} height={7.36} alt="" />
      </RightDiv>
    </HeaderContainer>
  );
}
