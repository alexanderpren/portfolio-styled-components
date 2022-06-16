import { LanguageContextProvider } from "./context/LanguageContext";

import GlobalStyles from "./shared/Global.styled";
import Home from "./components/Home";

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
