import React from "react";
import { ValidationError, useForm } from "@formspree/react";

import * as S from "./styles";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xleyppbd");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <S.ContactFormContainer>
      <S.ContactFormInnerContainer>
        <S.ContactForm onSubmit={handleSubmit}>
          <S.ContactFormInput
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <S.ContactFormTextArea
            id="message"
            name="message"
            placeholder="Mensagem"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <S.ContactFormButton type="submit" disabled={state.submitting}>
            Submit
          </S.ContactFormButton>
        </S.ContactForm>
        <S.ContactFormInfo>
          <S.ContactFormInfoTitle>
            Para mais informações . . .
          </S.ContactFormInfoTitle>
          <S.ContactFormInfoSubTitle>
            Entre em contato comigo!
          </S.ContactFormInfoSubTitle>
        </S.ContactFormInfo>
      </S.ContactFormInnerContainer>
    </S.ContactFormContainer>
  );
}
