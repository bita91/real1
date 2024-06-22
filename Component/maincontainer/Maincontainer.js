import React from "react";
import styled from "styled-components";
import Image from "next/image";
import StyledFlashIcon from "../Icon/icon";
// const MainBox = styled.div`
//   width: 1200px;
//   height: 50px;
//   border-radius: 10px;
//   border: 1px solid #707070;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 10px auto;
//   font-size: 18px;
//   padding: 0 20px;
// `;

// const MainBox = styled.div`
//   width: 1200px;
//   height: 50px;
//   border-radius: 10px;
//   border: 1px solid #707070;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin: 10px auto;
//   font-size: 18px;
//   padding: 0 20px;
// `;

// const BoxContainer1 = styled.div`
//   display: flex;
//   /* align-items: center; */
//   width: 200px;
// `;

// const BoxContainer2 = styled.div`
//   display: flex;
//   width: 200px;
// `;

// const BoxContainer3 = styled.div`
//   display: flex;
//   width: 200px;
// `;

// const Text2 = styled.div`
//   display: flex;
//   /* margin: 0 250px; */
//   color: ${({ $color }) => $color};
//   /* text-align: right; */
//   width: 200px;
//   /* padding: 15px;   */
//   margin: ${({ $margin }) => $margin};
// `;

// const Text3 = styled.div`
//   display: flex;
//   color: #474546;

//   /* align-items: center; */
//   /* justify-content: space-between; */
//   width: 200px;
//   /* padding: 10px auto; */
//   /* margin: 0 50px; */
// `;

const MainBox = styled.div`
  width: 75%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #707070;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  font-size: 18px;
  padding: 0 20px;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  /* width: 100px; */
  white-space: nowrap;
`;
const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  color: ${({ $color }) => $color};
`;

export default function MainContainer() {
  return (
    <>
      <MainBox>
        <BoxContainer>کمپین : خرید فرش با تضمین قیمت </BoxContainer>

        <ArrowDiv>
          <Text $color="#1986E5">در حال اکران</Text>
          <Text>مشاهده جزئیات</Text>

          <StyledFlashIcon />

          <Image src="/icons/flash.svg" width={12.88} height={7.36} alt="" />
        </ArrowDiv>
      </MainBox>

      <MainBox>
        <BoxContainer>کمپین : تعویض فرش</BoxContainer>

        <ArrowDiv>
          <Text $color="#1986E5">در حال اکران</Text>
          <Text>مشاهده جزئیات</Text>
          <Image src="/icons/flash.svg" width={12.88} height={7.36} alt="" />
          <StyledFlashIcon />
        </ArrowDiv>
      </MainBox>

      <MainBox>
        <BoxContainer $maxwith="50%">کمپین : یکی بخر دو تا ببر</BoxContainer>

        <ArrowDiv>
          <Text $color="#E31C40">منقضی شده</Text>
          <Text>مشاهده جزئیات</Text>
          <Image src="/icons/flash.svg" width={12.88} height={7.36} alt="" />
          <StyledFlashIcon />
        </ArrowDiv>
      </MainBox>
    </>
  );
}

// export default function MainContainer() {
//   return (
//     <>
//       <MainBox>
//         <BoxContainer1>کمپین : خرید فرش با تضمین قیمت </BoxContainer1>
//         <Text2 $color="#1986E5" $margin=" 0 auto">
//           در حال اکران{" "}
//         </Text2>

//         <Text3> مشاهده جزئیات</Text3>

//         <Image
//           src="/icons/flash.svg"
//           width={12.88}
//           height={7.36}
//           color="#474546"
//           alt=""
//         />
//         {/* <Image src="/icons/flash.svg" width={12.88} height={7.36} alt="" /> */}

//         {/* <BoxContainer> مشاهده جزئیات </BoxContainer> */}
//       </MainBox>

//       <MainBox>
//         <BoxContainer2>کمپین : تعویض فرش </BoxContainer2>
//         <Text2 $color="#1986E5"> در حال اکران </Text2>
//         <Text3> مشاهده جزئیات</Text3>
//         <Image
//           src="/icons/flash.svg"
//           width={12.88}
//           height={7.36}
//           color="#707070"
//           alt=""
//         />
//       </MainBox>

//       <MainBox>
//         <BoxContainer3>کمپین : یکی بخر دو تا ببر </BoxContainer3>
//         <Text2 $color="#E31C40">منقضی شده </Text2>
//         <Text3> مشاهده جزئیات</Text3>
//         <Image
//           src="/icons/flash.svg"
//           width={12.88}
//           height={7.36}
//           color="#707070"
//           alt=""
//         />
//       </MainBox>
//     </>
//   );
// }
