"use client"

import { Plus } from "lucide-react"

interface RegisterButtonProps {
  onClick: () => void
}

export function RegisterButton({ onClick }: RegisterButtonProps) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 group hover:scale-105 transition-transform">
      <div className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg transition-colors">
        <Plus className="w-6 h-6 text-white" />
      </div>
      <span className="text-white text-lg font-medium">register project</span>
    </button>
  )
}
