import styled from "styled-components";
import { motion } from "framer-motion";

export const MyCustomComponent = styled(motion.div)`
  color: #f8f8f8;

  h2 {
    font-size: 3.6rem;
  }
`;

export const SpanDescription = styled.span`
  font-weight: 700;
  color: #e9322f;
  border-bottom: 1px solid #e9322f;
`;
