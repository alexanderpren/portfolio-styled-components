import React from "react";
import { TextContainer } from "./styled";
import { useTranslation, Trans } from "react-i18next";

const TextHome = () => {
  const { t, i18n } = useTranslation();
  console.log("si se esta despĺegando");
  return (
    <TextContainer>
      <Trans i18nKey="description.part1"></Trans>
      <h1 styles={{ color: "white" }}> {t("description.part2")} </h1>
    </TextContainer>
  );
};

export default TextHome;
