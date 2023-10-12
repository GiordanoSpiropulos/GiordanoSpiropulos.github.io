import { column } from "@components/Layout/styles";
import styled, { css } from "styled-components";

const baseInput = css`
  color: ${(props) => props.theme.color.primary.main};
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.color.primary.main};
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
  &:focus {
    border: 2px solid ${(props) => props.theme.color.primary.contrastMain};
  }
`;

export const ContactFormContainer = styled.section`
  ${column}
  height: 100vh;
  padding: 0 16px;
`;

export const ContactFormInnerContainer = styled.div`
  display: grid;
  margin-top: 80px;

  height: 100%;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`;

export const ContactFormTitle = styled.h2`
  color: ${(props) => props.theme.color.primary.main};
  align-self: center;
`;

export const ContactForm = styled.form`
  ${column}
  height: 100%;
  width: 85%;
  justify-self: center;
  @media (max-width: 992px) {
    order: 2;
    width: 100%;
  }
`;

export const ContactFormInfo = styled.div`
  ${column}
`;

export const ContactFormInfoTitle = styled.span`
  color: ${(props) => props.theme.color.primary.white};
  font-size: 32px;
`;

export const ContactFormInfoDescription = styled.span`
  color: ${(props) => props.theme.color.primary.white};
  margin: 50px 0px 25px;
  font-style: italic;
  flex-wrap: nowrap;
`;

export const ContactFormAnchor = styled.a`
  color: ${(props) => props.theme.color.primary.main};
  text-decoration: underline;
`;

export const ContactFormInput = styled.input`
  ${baseInput}
`;

export const ContactFormTextArea = styled.textarea`
  ${baseInput}
  resize: none;
  height: 50%;
`;

export const ContactFormButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.color.primary.main};
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
  &:hover {
    background: ${(props) => props.theme.color.primary.contrastMain};
  }
`;
