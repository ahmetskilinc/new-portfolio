import Image from "next/image";
import Link from "next/link";

export default function Connect() {
	return (
		<main className=" min-h-screen bg-fixed">
			<div className="w-11/12 md:w-full mx-auto md:mx-0 items-center justify-center flex flex-col gap-10 py-16 md:py-10">
				<div className="flex flex-col items-center">
					<div className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] md:w-[560px] md:h-[560px] lg:h-[800px] lg:w-[800px]">
						<Image src="/me.png" alt="" className="rounded-full grayscale" objectFit="cover" fill />
					</div>
					<p className="text-xl max-w-6xl -mb-20 -translate-y-20 md:px-7 font-extralight text-justify">
						Welcome to my website! I&apos;m Ahmet, a passionate web developer specialising in React and Next.js. With a computer
						science degree as my foundation, I&apos;m self-taught in web development and always seeking new skills and knowledge
						to enhance my craft. You can take a look at some of my projects below or contact me through email or social media
						above!
					</p>
					<div className="flex flex-row gap-8 flex-grow mt-10">
						<Link href="https://codepen.io/ahmetskilinc">
							<div className="relative h-5 w-5 md:h-8 md:w-8">
								<p className="sr-only">codepen</p>
								<Image src="/codepen.svg" alt="" objectFit="cover" fill />
							</div>
						</Link>
						<Link href="https://github.com/ahmetskilinc">
							<div className="relative h-5 w-5 md:h-8 md:w-8">
								<p className="sr-only">github</p>
								<Image src="/github.svg" alt="" objectFit="cover" fill />
							</div>
						</Link>
						<Link href="https://linkedin.com/in/ahmetskilinc">
							<div className="relative h-5 w-5 md:h-8 md:w-8">
								<p className="sr-only">linkedin</p>
								<Image src="/linkedin.svg" alt="" objectFit="cover" fill />
							</div>
						</Link>
						<Link href="mailto:ahmetskilinc@icloud.com">
							<div className="relative h-5 w-5 md:h-8 md:w-8">
								<p className="sr-only">email</p>
								<Image src="/email.svg" alt="" objectFit="cover" fill />
							</div>
						</Link>
						<Link href="https://instagram.com/bruvimtired">
							<div className="relative h-5 w-5 md:h-8 md:w-8">
								<p className="sr-only">instagram</p>
								<Image src="/instagram.svg" alt="" objectFit="cover" fill />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
