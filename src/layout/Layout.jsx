
export const Layout = ({ children, className }) => {
  return (
        <div className={`w-full h-screen bg-purple overflow-hidden ${className}`}>{children}</div>
  )
}
