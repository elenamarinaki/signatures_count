interface MessageProps {
  text?: string
  className?: string
}

export const Message = ({ text, className }: MessageProps) => {
  return <p className={className}>{text}</p>
}
