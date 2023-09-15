export interface AboutMeLocale {
  whatIDoCards: WhatIDoCards[];
  whoIAm: WhoIAm;
}

export interface WhatIDoCards {
  title: string;
  extra: string;
}

interface WhoIAm {
  title: string;
  subtitle: string;
  infoAboutMe: string;
}
