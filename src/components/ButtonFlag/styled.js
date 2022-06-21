import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  top: 1%;
  right: 3%;
  z-index: 1;
  transform: translate(50%, 50%);

  a {
    color: white;
    padding: $pad $extra;
    display: inline-block;
    border: $thick solid transparent;

    font-size: 1.5em;
    cursor: pointer;
    letter-spacing: 0.07em;
  }

  a > img {
    width: 100%;
  }
  a:hover {
    border: $thick solid white;
  }
`;
