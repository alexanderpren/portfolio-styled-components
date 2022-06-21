import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import useLanguages from "../../context/LanguageContext";
import { SpanDescription, MyCustomComponent } from "./styled";

const Description = () => {
  const el = useRef(null);

  const { language } = useLanguages();
  let description = [];

  const primeraFrase =
    language === "en" ? "I'm a passionate" : "Soy un apasionado";

  useEffect(() => {
    if (language === "en") {
      description = [
        "React Frontend Developer",
        "FullStack Developer",
        "Freelancer",
        "Enthusiastic"
      ];
    } else {
      description = [
        "Desarrollador Frontend React",
        "FullStack Developer",
        "Freelancer",
        "Entusiasta"
      ];
    }
    const typed = new Typed(el.current, {
      strings: description,
      // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: " -"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, [language]);

  return (
    <MyCustomComponent
      initial={{ opacity: 0, translateX: -2000 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "spring", duration: 2 }}
    >
      <h2>
        {primeraFrase} <SpanDescription ref={el}></SpanDescription>{" "}
        {language === "en" ? "from " : "de "}
        México
      </h2>
    </MyCustomComponent>
  );
};

export default Description;
