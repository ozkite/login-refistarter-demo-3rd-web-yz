"use client"

import type React from "react"

import { X } from "lucide-react"
import { useState } from "react"

interface RegistrationFormProps {
  onClose: () => void
}

export function RegistrationForm({ onClose }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    projectName: "",
    representativeName: "",
    type: "",
    twitterProject: "",
    description: "",
    twitterTeam: "",
    telegramWhatsapp: "",
    zoraLensFarcaster: "",
    community: "",
    category: "",
    website: "",
    walletType: "",
    previousWork: "",
    discord: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Verify your Identity</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-neCJYK2uYzzRopKKv0nB4ZWbi0nB52.png"
              alt="Self Protocol"
              className="h-8"
            />
            <span className="text-gray-400">Self Protocol</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <h3 className="text-xl font-semibold text-white mb-4">Project Registration</h3>

          {/* Project Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project name"
            />
          </div>

          {/* Name of Representative */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name of Representative <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.representativeName}
              onChange={(e) => setFormData({ ...formData, representativeName: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter representative name"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option value="project">Project</option>
              <option value="independent">Independent Initiative</option>
            </select>
          </div>

          {/* Twitter of Project */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Twitter of Project</label>
            <input
              type="text"
              value={formData.twitterProject}
              onChange={(e) => setFormData({ ...formData, twitterProject: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="@projecthandle"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your project"
            />
          </div>

          {/* Twitter accounts from Team */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Twitter accounts from Team of project
            </label>
            <input
              type="text"
              value={formData.twitterTeam}
              onChange={(e) => setFormData({ ...formData, twitterTeam: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="@handle1, @handle2"
            />
          </div>

          {/* Telegram or WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Telegram or WhatsApp of Representative
            </label>
            <input
              type="text"
              value={formData.telegramWhatsapp}
              onChange={(e) => setFormData({ ...formData, telegramWhatsapp: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username or phone number"
            />
          </div>

          {/* Zora, Lens, Farcaster */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Zora, Lens, Farcaster</label>
            <input
              type="text"
              value={formData.zoraLensFarcaster}
              onChange={(e) => setFormData({ ...formData, zoraLensFarcaster: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Profile links"
            />
          </div>

          {/* Identity Check - Self Protocol */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Identity Check</p>
                <p className="text-xs text-gray-500 mt-1">Self Protocol</p>
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Verify
              </button>
            </div>
          </div>

          {/* Community */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Community</label>
            <input
              type="text"
              value={formData.community}
              onChange={(e) => setFormData({ ...formData, community: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Community name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Project category"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
            />
          </div>

          {/* Wallet Type */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Wallet Type <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.walletType}
              onChange={(e) => setFormData({ ...formData, walletType: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select wallet type</option>
              <option value="wallet">Wallet</option>
              <option value="ens">ENS</option>
              <option value="multisig">Multi-Sig</option>
            </select>
          </div>

          {/* Previous Work */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your previous Work: videos or pictures
            </label>
            <input
              type="text"
              value={formData.previousWork}
              onChange={(e) => setFormData({ ...formData, previousWork: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Links to previous work"
            />
          </div>

          {/* Discord */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Discord</label>
            <input
              type="text"
              value={formData.discord}
              onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Discord username"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  )
}
