import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://indonesia-island-journey.johnnyyy6666.chatgpt.site",
  ),
  title: "群岛之间｜印尼十一日旅行手册",
  description: "从巴厘岛到科莫多、婆罗摩与罗威纳，在海景酒店、快艇群岛和从容留白之间展开的十一日私人旅程。",
  openGraph: {
    title: "群岛之间｜印尼十一日旅行手册",
    description: "海景酒店 · 科莫多快艇 · 婆罗摩日出 · AYANA 私人假期",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 909,
        alt: "群岛之间｜印度尼西亚十一日私人旅程",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "群岛之间｜印尼十一日旅行手册",
    description: "一段舒适、从容而充满岛屿风景的私人旅程。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="codex-preview" content="development" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
