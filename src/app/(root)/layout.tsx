import Navbar from "@/components/global/Navbar"
import { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
    return <>
        <Navbar />
        {children}
    </>
}

export default RootLayout