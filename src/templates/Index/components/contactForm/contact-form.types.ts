export interface ContactFormLocale {
  title: string;
  description: string;
  aditionalDescription: string;
  linkedin: string;
  fields: ContactFormFields[];
}

interface ContactFormFields {
  placeholder: string;
}
