import { motion } from 'framer-motion';

export const WelcomeMessage = () => {
  return (
    <div className="text-7xl text-white">
      {'Welcome'.split('').map((letter, index) => (
        <motion.span key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * index }}>{letter}</motion.span>
      ))}
    </div >
  );
}
