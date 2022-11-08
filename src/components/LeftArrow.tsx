import { useEffect } from "react"
import { useSpring, animated } from "react-spring"

interface LeftArrowProps {
  className: string
}

export const LeftArrow = ({ className }: LeftArrowProps) => {
  const spring = useSpring(() => ({
    from: { translateY: 0 },
    to: {
      translateY: -20,
    },
    loop: true,
  }))

  // useEffect(() => {
  //   api.start({
  //     from: {
  //       x: 0,
  //       y: 0,
  //     },
  //     to: {
  //       x: 0,
  //       y: 100,
  //     },
  //   })
  // }, [])

  return (
    // <animated.div style={{ width: 80, height: 80, ...spring }}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 25 25'
      className={className}
    >
      <g fill='#e3e3e3'>
        <path d='M24,9v7H9v4L1,12.5,9,5V9Z' />
      </g>
    </svg>
    // </animated.div>
  )
}
// export const LeftArrow = ({ className }: LeftArrowProps) => {
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       viewBox='0 0 25 25'
//       className={className}
//     >
//       <g fill='#e3e3e3'>
//         <path d='M24,9v7H9v4L1,12.5,9,5V9Z' />
//       </g>
//     </svg>
//   )
// }
