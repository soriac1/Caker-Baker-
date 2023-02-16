import type { ReactNode } from "react"
import TWHeader from "./twheader"
import TWFooter from "./twfooter"


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <TWHeader/>
        <main>{children}</main>
      <TWFooter/>
    </>
  )
}