"use client"
import { useEffect, useRef } from "react"
import { ThirdwebConnect } from "@/components/thirdweb-connect"

export default function HomePage() {
  const rightSideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rightSideRef.current) {
        const rect = rightSideRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        document.documentElement.style.setProperty("--x", `${x}%`)
        document.documentElement.style.setProperty("--y", `${y}%`)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Animated Starfield */}
      <div className="w-1/2 bg-black relative overflow-hidden flex flex-col items-center justify-center">
        {/* Animated Stars Background */}
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>

        <div className="absolute top-8 left-8 z-10">
          <img src="/refi-logo.png" alt="ReFi STARTER" className="h-16 w-auto" />
        </div>

        <div className="z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-white text-center">Welcome to ReFi Starter</h1>
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-gray-300">Sign in</p>
            <ThirdwebConnect />
          </div>
        </div>
      </div>

      {/* Right Side - Pixelated Background with Focus Mask */}
      <div ref={rightSideRef} className="w-1/2 relative overflow-hidden">
        <div id="bg" className="absolute inset-0">
          <img
            id="bg_pixelate"
            src="https://res.cloudinary.com/db7zzjmcj/image/upload/v1758770983/solarpunk_land_40x26_p4oomg.jpg"
            alt="Pixelated landscape"
            className="absolute inset-0 w-full h-full object-cover pixelated"
          />
          <img
            id="bg_focus"
            src="https://res.cloudinary.com/db7zzjmcj/image/upload/v1758770984/solarpunk_land_awiqa8.jpg"
            alt="Focused landscape"
            className="absolute inset-0 w-full h-full object-cover focus-mask"
          />
        </div>
      </div>
    </div>
  )
}
