import React from "react";
import { Layout, Navbar } from "../../common/components";
import { useTranslation } from "react-i18next";

export function IndexTemplate() {
  const { t } = useTranslation();
  console.log(t("links", { returnObjects: true }));

  return <div></div>;
}
