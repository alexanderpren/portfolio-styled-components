import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import useLanguages from "../../context/LanguageContext";
import { ButtonContainer } from "./styled";
import SPAIN from "../../assets/Icons/SPAIN";
import USA from "../../assets/Icons/USA";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" }
};

export const ButtonFlag = () => {
  const { language, handleLanguageChange } = useLanguages();
  const { t, i18n } = useTranslation();

  const reportChange = (lng) => {
    console.log(`Language changed to ${language}`);
      handleLanguageChange();
    i18n.changeLanguage(lng); 
  };

  return (
    <ButtonContainer>
      <motion.section
        onClick={()=>reportChange(language)}
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: "spring", duration: 2 }}
      >
       {language === "es" ? <SPAIN width={50} /> : <USA width={50} /> } 
      </motion.section>
    </ButtonContainer>
  );
};
