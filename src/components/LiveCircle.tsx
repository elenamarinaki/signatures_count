import { useSpring, animated } from "react-spring"

interface LiveCircleProps {
  className?: string
}

export const LiveCircle = ({ className }: LiveCircleProps) => {
  const springs = useSpring({
    from: {
      opacity: 0.4,
    },
    to: {
      opacity: 1,
    },
    loop: true,
  })

  return (
    <animated.div
      style={{
        width: 125,
        height: 125,
        borderRadius: 90,
        backgroundColor: "#c04040",
        ...springs,
      }}
    />
  )
}
