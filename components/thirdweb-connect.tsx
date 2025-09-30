"use client"

import { ConnectButton } from "thirdweb/react"
import { createThirdwebClient } from "thirdweb"
import { inAppWallet, createWallet } from "thirdweb/wallets"
import { celo } from "thirdweb/chains"

const client = createThirdwebClient({
  clientId: "3d325540f5e91eb9d2ce5f2ab8122be3",
})

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
        "github",
        "line",
        "tiktok",
        "apple",
        "twitch",
        "guest",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
]

export function ThirdwebConnect() {
  return (
    <ConnectButton client={client} chains={[celo]} wallets={wallets} connectModal={{ size: "wide" }} theme="dark" />
  )
}
