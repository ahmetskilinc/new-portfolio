import Link from "next/link";

export default function Connect() {
	return (
		<main className="bg-[#FF8C00] bg-cover bg-right md:bg-center bg-no-repeat min-h-screen bg-fixed ">
			<div className="w-11/12 md:w-full mx-auto md:mx-0 items-center justify-center flex flex-col gap-10 py-24 md:py-10">
				<div className="flex flex-col items-center">
					<img
						src="/me.png"
						alt=""
						className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[560px] md:h-[560px] lg:h-[900px] lg:w-[900px] object-cover rounded-full grayscale
					"
					/>
					<p className="max-w-6xl text-2xl -translate-y-20 md:px-7 -mb-20">
						Welcome to my website! I'm Ahmet, a passionate web developer specialising in React and Next.js. With a computer
						science degree as my foundation, I'm self-taught in web development and always seeking new skills and knowledge to
						enhance my craft. You can take a look at some of my projects below or contact me through email or social media
						above!
					</p>
				</div>
			</div>
		</main>
	);
}
