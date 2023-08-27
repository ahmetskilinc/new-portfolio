import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ahmet Kilinç",
	description: "Personal Portfolio of Ahmet Kilinç",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="bg-[#FF8C00]">
			<head>
				<meta name="theme-color" content="#FF8C00" />
				<link rel="manifest" href="manifest.json" />
				<link rel="icon" type="image/x-icon" href="/favicon.png"></link>
			</head>
			<body className={`${inter.className} !text-[#f2f2f2]`}>
				<nav className="fixed w-full z-10">
					<div className="flex justify-between w-11/12 mx-auto h-[82px] items-center">
						<Link href="/" className="text-2xl font-light text-[#f2f2f2] flex gap-4 items-center">
							{/* <div className="relative w-10 h-10">
								<Image src="/me.png" alt="" className="rounded-full grayscale" objectFit="cover" fill />
							</div> */}
							Ahmet Kilinç
						</Link>
						{/* <img src="/menu.svg" alt="menu icon" /> */}
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}
