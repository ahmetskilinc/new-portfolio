import CustomLink from "@/components/CustomLink";
import Link from "next/link";

export default function Connect() {
	return (
		<main className="  min-h-screen bg-fixed ">
			<div className="w-11/12 md:w-1/2 mx-auto md:mx-0 h-screen items-end justify-center flex flex-col gap-6 md:gap-10">
				<p className="text-[#f2f2f2] text-4xl md:text-7xl font-extralight">Connect with me</p>
				<div className="items-end justify-end flex flex-row gap-8">
					<Link href="">
						<img src="/codepen.svg" alt="" className="h-6 w-6 md:h-10 md:w-10" />
					</Link>
					<Link href="">
						<img src="/github.svg" alt="" className="h-6 w-6 md:h-10 md:w-10" />
					</Link>
					<Link href="">
						<img src="/linkedin.svg" alt="" className="h-6 w-6 md:h-10 md:w-10" />
					</Link>
					<Link href="">
						<img src="/email.svg" alt="" className="h-6 w-6 md:h-10 md:w-10" />
					</Link>
					<Link href="">
						<img src="/instagram.svg" alt="" className="h-6 w-6 md:h-10 md:w-10" />
					</Link>
				</div>
			</div>
		</main>
	);
}
