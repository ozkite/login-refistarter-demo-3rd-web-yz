"use client"

import { X, Phone, Fingerprint, User, Wallet } from "lucide-react"
import { useState } from "react"

export function SignInModal() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="w-full max-w-md bg-[#1a1a1a] rounded-2xl p-8 relative border border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-white">Sign in</h2>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Social Login Icons */}
      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-5 gap-3">
          {/* Row 1 */}
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/google-logo.png" alt="Google" className="w-6 h-6" />
          </button>
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/discord-logo.png" alt="Discord" className="w-6 h-6" />
          </button>
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/telegram-logo.png" alt="Telegram" className="w-6 h-6" />
          </button>
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/farcaster-logo.jpg" alt="Farcaster" className="w-6 h-6" />
          </button>
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/x-twitter-logo.png" alt="X" className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {/* Row 2 */}
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/github-logo.png" alt="GitHub" className="w-6 h-6" />
          </button>
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/line-logo.jpg" alt="LINE" className="w-6 h-6" />
          </button>
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/social/tiktok.png" alt="TikTok" className="w-6 h-6" />
          </button>
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/apple-logo-minimalist.png" alt="Apple" className="w-6 h-6" />
          </button>
          <button className="aspect-square bg-[#252525] hover:bg-[#2a2a2a] rounded-xl flex items-center justify-center transition-colors">
            <img src="/twitch-logo.png" alt="Twitch" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-[#252525] text-gray-300 placeholder-gray-500 rounded-xl px-4 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Phone Number */}
      <button className="w-full bg-[#252525] hover:bg-[#2a2a2a] text-white rounded-xl px-4 py-4 mb-4 flex items-center gap-3 transition-colors">
        <Phone className="w-5 h-5 text-blue-500" />
        <span>Phone number</span>
      </button>

      {/* Passkey */}
      <button className="w-full bg-[#252525] hover:bg-[#2a2a2a] text-white rounded-xl px-4 py-4 mb-4 flex items-center gap-3 transition-colors">
        <Fingerprint className="w-5 h-5 text-blue-500" />
        <span>Passkey</span>
      </button>

      {/* Continue as Guest */}
      <button className="w-full bg-[#252525] hover:bg-[#2a2a2a] text-white rounded-xl px-4 py-4 mb-6 flex items-center gap-3 transition-colors">
        <User className="w-5 h-5 text-blue-500" />
        <span>Continue as guest</span>
      </button>

      {/* Divider */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-[#1a1a1a] text-gray-500">OR</span>
        </div>
      </div>

      {/* Connect Wallet */}
      <button className="w-full bg-[#252525] hover:bg-[#2a2a2a] text-white rounded-xl px-4 py-4 mb-6 flex items-center gap-3 transition-colors">
        <Wallet className="w-5 h-5 text-blue-500" />
        <span>Connect a Wallet</span>
      </button>

      {/* Footer */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Powered by <span className="font-semibold text-gray-400">thirdweb</span>
        </p>
      </div>
    </div>
  )
}
