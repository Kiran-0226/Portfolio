import './Button.css'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
}

function Button({ children, href, onClick }: ButtonProps) {
  if (href) {
    return (
      <a className="button" href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button