import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type Props = {
	title: string;
	link: Url;
};

const CustomLink = ({ title, link }: Props) => {
	return (
		<Link href={link} className="flex gap-4 group items-center">
			<p className="text-[#f2f2f2] text-4xl md:text-6xl lg:text-7xl font-extralight uppercase group-hover:font-normal transition-all group-hover:-translate-x-2 md:group-hover:-translate-x-3 translate-x-10 duration-300">
				{title}
			</p>
			<img
				src="/link-arrow.svg"
				alt="arrow pointing right"
				className="w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14 opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-2 md:group-hover:-translate-x-3 duration-300 -rotate-90 group-hover:rotate-0"
			/>
		</Link>
	);
};

export default CustomLink;
