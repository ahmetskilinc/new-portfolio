import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type Props = {
	title: string;
	link: Url;
};

const CustomLink = ({ title, link }: Props) => {
	return (
		<Link href={link} className="flex gap-4 group">
			<p className="text-[#f2f2f2] text-[42px] md:text-[78px] font-extralight uppercase group-hover:font-normal transition-all group-hover:-translate-x-3 translate-x-10 duration-300">
				{title}
			</p>
			<img
				src="/link-arrow.svg"
				alt="arrow pointing right"
				className="opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-3 duration-300"
			/>
		</Link>
	);
};

export default CustomLink;
