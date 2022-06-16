import styled from "styled-components";


export const ButtonContainer = styled.div`
  display: flex;
  a {
    color: white;
    padding: $pad $extra;
    display: inline-block;
    border: $thick solid transparent;
    position: relative;
    font-size: 1.5em;
    cursor: pointer;
    letter-spacing: 0.07em;
  }

  a > img {
    width: 100%;
  }

  motion.section {
    position: fixed;
    top: 1%;
    right: 1%;
    z-index: 1;
    transform: translate(50%, 50%);
  }
`;
