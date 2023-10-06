export interface ContactFormLocale {
  title: string;
  description: string;
  aditionalDescription: string;
  fields: ContactFormFields[];
}

interface ContactFormFields {
  placeholder: string;
}
