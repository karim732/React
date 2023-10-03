"# React"

- css animation
- css transition
- Framer motion
- ReactTransitionGroup(old)

- import { motion, useAnimate, stagger } from "framer-motion";

- const [scope, animate] = useAnimate();
  animate(
  "input, textarea",
  { x: [-10, 0, 10, 0] },
  { type: "spring", duration: 2, delay: stagger(0.05) }
  );

- <motion.dialog
  variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
  initial="hidden"
  animate="visible"
  exit="hidden"
  open
  className="modal" >
  <h2>{title}</h2>
  {children}
  </motion.dialog>
