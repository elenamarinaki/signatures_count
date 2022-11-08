import { useSpring, animated } from "react-spring"

interface CountProps {
  n?: number | null
  className?: string
}

export const Count = ({ n, className }: CountProps) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 20,
    config: { mass: 1, tension: 20, friction: 15 },
  })
  return (
    <animated.div className={className}>
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  )
}
