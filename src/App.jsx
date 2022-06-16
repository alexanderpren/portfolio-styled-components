import { LanguageContextProvider } from "./context/LanguageContext";

import GlobalStyles from "./shared/Global.styled";
import Home from "./components/Home";
import "./i18n/i18n";

function App() {
  return (
    <>
      <LanguageContextProvider>
        <GlobalStyles />
        <Home />
      </LanguageContextProvider>
    </>
  );
}

export default App;
