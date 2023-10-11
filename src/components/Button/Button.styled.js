import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Btn = styled(motion.button)`
  margin-top: 40px;
  height: 40px;

  border-radius: 8px;
  border: none;
  color: white;
  background-color: #a8b8d0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
`;
