import { MotionValue, useTransform } from "framer-motion"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance * 50])
}
export default useParallax