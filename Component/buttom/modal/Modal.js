import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/purple.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import size from "react-element-popper/animations/size";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

const ModalBackground = styled.div`
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  margin: 100px auto;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #707070;
  width: 599px;
  height: 563px;
`;

const HeaderDive = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 10px;
`;

const DefineText = styled.div`
  white-space: nowrap;
  width: 74px;
  height: 21px;
  padding: 20px;
`;

const Input = styled.div`
  margin: 0 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const DefineCaracter = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #707070;
  margin: 10px;
  padding: 0 30px;
`;

const Form1 = styled.form`
  width: 100%;
  height: 100%;
`;

const FormGroup1 = styled.div`
  margin: 10px 30px;
`;

const FormGroup2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  padding: 0 60px;
`;

const FormGroup3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin: 0 auto;
  padding: 0 50px;
  width: 50%;
`;

const FormGroup4 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;

const FormGroup5 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Input3 = styled.input`
  border: 1px solid black;
  border-radius: 8px;
  padding: 15px;
  margin: 0 8px;
  width: 140px;
  border: 1px solid #b5b5b5;
`;
const Label4 = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 0 60px;
`;

const FormGroup6 = styled.div`
  margin-bottom: 15px;
`;

const FormGroup7 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  width: 80%;
`;

const FormGroup8 = styled.div`
  margin-bottom: 15px;
`;

const Label1 = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 20px;
`;

const Input1 = styled.input`
  width: 90%;
  height: ${(props) => props.height};
  padding: 15px;
  margin: ${({ $margin }) => $margin};
  border-radius: 10px;

  border: 1px solid #b5b5b5;
`;

const Input2 = styled.input`
  width: 50px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #b5b5b5;
`;

const FileInput = styled.input`
  width: 100%;
`;

const Button = styled.button`
  background: #a7a7a7;
  color: white;
  font-size: 14px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  margin: 80px auto;
  padding: 10px 45px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Modal = ({ showModal, closeModal }) => {
  console.log({ showModal });

  const [value, setValue] = useState(new Date());

  return (
    <ModalBackground showModal={showModal}>
      <ModalContainer>
        <HeaderDive>
          <DefineText> تعریف کمپین</DefineText>
          <Image
            src="/icons/close.svg"
            width={20.31}
            height={20.31}
            alt=""
            onClick={closeModal}
          />
        </HeaderDive>

        <Form1>
          <FormGroup1>
            <Label1>نام کمپین (حداکثر 20 کاراکتر)</Label1>
            <Input1 type="text" />
          </FormGroup1>

          <FormGroup2>
            <Label1> کاور (40*40) پیکسل</Label1>

            <Input1 $margin="15px" type="text" />
          </FormGroup2>

          <FormGroup3>
            <Label1> ویدئو(حداکثر GB 5 ) </Label1>

            <Input1 $margin="15px" type="text" />
          </FormGroup3>

          <FormGroup4>
            <Label4>جایزه نفر اول</Label4>

            <Label4>جایزه نفر دوم</Label4>

            <Label4>جایزه نفر سوم</Label4>
          </FormGroup4>

          <FormGroup5>
            <Input3 type="text" />
            <Input3 type="text" />
            <Input3 type="text" />
          </FormGroup5>

          <FormGroup6></FormGroup6>

          <FormGroup7>
            <Label1>زمان اکران کمپین از</Label1>
            <DatePicker
              width="20px"
              height="30px"
              value={value}
              onChange={setValue}
              calendar={persian}
              locale={persian_fa}
              className="purple"
              animations={[opacity(), transition({ from: 35, duration: 800 })]}
              style={{
                height: "47px",
                width: "150px",
                borderRadius: "8px",
                fontSize: "18px",
              }}
            />

            <Label1>تا</Label1>
            <DatePicker
              value={value}
              onChange={setValue}
              calendar={persian}
              locale={persian_fa}
              className="purple"
              animations={[opacity(), transition({ from: 35, duration: 800 })]}
              style={{
                height: "47px",
                width: "150px",
                borderRadius: "8px",
                fontSize: "18px",
              }}
            />
          </FormGroup7>
          <Button type="submit">افزودن کمپین</Button>
        </Form1>

        <DefineCaracter type="text" />
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
