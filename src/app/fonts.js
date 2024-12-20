// Next
import { DM_Sans, Manrope } from "next/font/google"

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  fallback: ["system-ui", "arial"],
})

const fontMono = Manrope({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  fallback: ["system-ui", "arial"],
})

export { fontSans, fontMono }
