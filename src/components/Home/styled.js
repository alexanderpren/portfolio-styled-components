import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg";

export const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;
