import React from "react";

import { HomeContainer } from "./styled";
import TextHome from "../TextHome";
import { ButtonFlag } from "../ButtonFlag";
import Description from "../Description";

function Home() {
  return (
    <>
      <ButtonFlag />
      <HomeContainer>
        <TextHome />
        <Description />
      </HomeContainer>
    </>
  );
}

export default Home;
