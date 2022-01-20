export const fadeOutTransition = {
  initial: { opacity: 0, scale: .95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
  transition: { duration: .2 }
}
export const fadeInTransition = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: .95 },
  transition: { duration: .2 }
}