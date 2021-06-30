import styled from "styled-components";
import { Form, Field } from "formik";

export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 480px) {
    height: 110vh;
  }
`;
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #3d70b2;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 80vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 0;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0;
`;

export const TopLine = styled.p`
  color: #3d70b2;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 50px;
`;

export const Heading = styled.h1`
  color: #000;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const FormGroup = styled(Form)`
  margin-bottom: 20px;
`;
export const GroupLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  color: #000;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const GroupInput = styled(Field)`
  background-color: #e6eced;
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  border: 0;
  outline: none;
  font-size: 16px;
`;
export const GroupButton = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#3d70b2" : "#000")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#000" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;
export const SuccessfulMessage = styled.p`
  color: #15fa00;
  display: flex;
  font-size: 24px;
  margin-left: 3px;
  margin-top: 2px;
`;
export const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
`;
