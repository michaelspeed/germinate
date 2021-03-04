import { ReactNode } from "react"
import { Head } from "blitz"
import Header from "../../components/headers/Header"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <div className="page" id="top">
        <Header/>
        {children}
      </div>
    </>
  )
}

export default Layout
