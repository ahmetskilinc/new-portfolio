import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import Link from "next/link";

export default function Connect() {
	return (
		<main className="  min-h-screen bg-fixed ">
			<div className="w-11/12 md:w-1/2 mx-auto md:mx-0 h-screen items-end justify-center flex flex-col gap-6 md:gap-10">
				<p className="text-[#f2f2f2] text-4xl md:text-7xl font-extralight">Connect with me</p>
				<div className="items-end justify-end flex flex-row gap-8">
					<Link href="https://codepen.io/ahmetskilinc">
						<div className="relative h-5 w-5 md:h-8 md:w-8">
							<Image src="/codepen.svg" alt="" objectFit="cover" fill />
						</div>
					</Link>
					<Link href="https://github.com/ahmetskilinc">
						<div className="relative h-5 w-5 md:h-8 md:w-8">
							<Image src="/github.svg" alt="" objectFit="cover" fill />
						</div>
					</Link>
					<Link href="https://linkedin.com/in/ahmetskilinc">
						<div className="relative h-5 w-5 md:h-8 md:w-8">
							<Image src="/linkedin.svg" alt="" objectFit="cover" fill />
						</div>
					</Link>
					<Link href="mailto:ahmetskilinc@icloud.com">
						<div className="relative h-5 w-5 md:h-8 md:w-8">
							<Image src="/email.svg" alt="" objectFit="cover" fill />
						</div>
					</Link>
					<Link href="https://instagram.com/bruvimtired">
						<div className="relative h-5 w-5 md:h-8 md:w-8">
							<Image src="/instagram.svg" alt="" objectFit="cover" fill />
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
