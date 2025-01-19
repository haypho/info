import { motion } from "framer-motion";

export type TypingLettersProps = {
  children: string;
};

export const TypingLetters = ({ children }: TypingLettersProps) =>
  children.split("").map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.025 * index }}
    >
      {letter}
    </motion.span>
  ));
