import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ahmet Kilinç",
	description: "Personal Portfolio of Ahmet Kilinç",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="">
			<head>
				<meta name="theme-color" content="#9B9D34" />
				<link rel="manifest" href="manifest.json" />
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
			</head>
			<body className={`${inter.className} !text-[#f2f2f2]`}>
				<CustomCursor />
				<nav className="fixed w-full z-10">
					<div className="flex justify-between w-11/12 mx-auto h-[82px] items-center">
						<Link href="/" className="text-2xl font-light flex gap-4 items-center">
							<p className={`${roboto_slab.className}`}>Ahmet</p>
						</Link>
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}
