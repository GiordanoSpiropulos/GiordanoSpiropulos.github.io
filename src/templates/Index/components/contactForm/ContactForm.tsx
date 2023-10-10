import React from "react";
import { ValidationError, useForm } from "@formspree/react";

import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { ContactFormLocale } from "./contact-form.types";

export function ContactForm() {
  const [state, handleSubmit] = useForm(`xleyppbd`);
  const { t } = useTranslation();
  const contactFormLocale: ContactFormLocale = t("contactForm", {
    returnObjects: true,
  });

  return (
    <S.ContactFormContainer id="contact">
      <S.ContactFormInnerContainer>
        <S.ContactForm onSubmit={handleSubmit}>
          <S.ContactFormInput
            id="email"
            type="email"
            name="email"
            required
            placeholder={contactFormLocale.fields[0].placeholder}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <S.ContactFormTextArea
            id="message"
            name="message"
            required
            placeholder={contactFormLocale.fields[1].placeholder}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <S.ContactFormButton type="submit" disabled={state.submitting}>
            {contactFormLocale.fields[2].placeholder}
          </S.ContactFormButton>
        </S.ContactForm>
        <S.ContactFormInfo>
          <S.ContactFormInfoTitle>
            {contactFormLocale.title}
          </S.ContactFormInfoTitle>
          <S.ContactFormInfoDescription>
            {contactFormLocale.description}
          </S.ContactFormInfoDescription>
          <S.ContactFormInfoDescription>
            {contactFormLocale.aditionalDescription}{" "}
            <S.ContactFormAnchor
              href={contactFormLocale.linkedin}
              target="_blank"
            >
              LinkedIn
            </S.ContactFormAnchor>
            .
          </S.ContactFormInfoDescription>
        </S.ContactFormInfo>
      </S.ContactFormInnerContainer>
    </S.ContactFormContainer>
  );
}
