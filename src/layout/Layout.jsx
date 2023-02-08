export const Layout = ({ children, className }) => {
  return <div className={`w-full h-full overflow-x-hidden bg-purple ${className}`}>{children}</div>
}
