import CustomLink from "@/components/CustomLink";
import Link from "next/link";

export default function Connect() {
	return (
		<main className="bg-[url('/background.svg')] bg-cover bg-right md:bg-center bg-no-repeat min-h-screen bg-fixed ">
			<div className="w-3/4 md:w-1/2 mx-auto md:mx-0 h-screen items-end justify-center flex flex-col gap-6">
				<p className="text-[#f2f2f2] text-[32px] md:text-[78px] font-extralight">Connect with me</p>
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
