import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.button)`
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.vividBlue};
  width: 100%;
  border-radius: 8px;

  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.lightSilver};
  font-weight: 600;
  font-size: 1.6rem;

  &:hover {
    background: ${({ theme }) => theme.colors.softSilver};
    color: ${({ theme }) => theme.colors.aquaGreen};
    border-radius: 2px;
  }

  &:focus {
    outline-offset: 2px;
    outline-color: ${({ theme }) => theme.colors.softSilver};
  }
`;
