import { Url } from "next/dist/shared/lib/router/router";
import { Nabla, Roboto_Slab, Tektur, Yatra_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Roboto_Slab({ subsets: ["latin"] });

type Props = {
	title: string;
	link: Url;
};

const CustomLink = ({ title, link }: Props) => {
	return (
		<Link href={link} className="flex gap-4 group items-center">
			<p
				className={`${font.className} text-4xl md:text-6xl lg:text-7xl font-extralight uppercase group-hover:font-normal transition-all group-hover:-translate-x-2 md:group-hover:-translate-x-3 translate-x-10 duration-300`}
			>
				{title}
			</p>
			<svg
				width="32"
				height="25"
				viewBox="0 0 32 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14 opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-2 md:group-hover:-translate-x-3 duration-300 -rotate-90 group-hover:rotate-0 flex place-items-center"
			>
				<path
					id="Vector"
					d="M20 24.05L17.85 21.95L26.25 13.55H0V10.55H26.25L17.8 2.1L19.95 0L32 12.05L20 24.05Z"
					className="fill-[#121212] dark:fill-[#f2f2f2]"
				/>
			</svg>
		</Link>
	);
};

export default CustomLink;
