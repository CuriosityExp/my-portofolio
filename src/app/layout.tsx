  import BottomTab from "@/components/BottomTab";
  import "./globals.css";
  import type { Metadata } from "next";
  import { Inter } from "next/font/google";

  const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: "Daniel Elisandro",
    description: "Web Profile for Daniel Elisandro created using Nextjs",
    openGraph: {
      type: "article",
      url: "https://danielelisandro.vercel.app/about",
      title: "Daniel Elisandro - Full Stack Developer",
      description: "Tech-savvy individual with a strong foundation in physics, specializing in web development and mobile applications.",
      images: [
        {
          url: "https://danielelisandro.vercel.app/_next/image?url=%2Fdanielelisandro.png&w=750&q=75",
          width: 800,
          height: 600,
          alt: "Profile Image of Daniel Elisandro",
        },
      ],
    },
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col">

          {children}
          <BottomTab />
          </div>
        </body>
      </html>
    );
  }
