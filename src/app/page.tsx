import CustomLink from "@/components/CustomLink";

export default function Home() {
	return (
		<main className=" min-h-screen bg-fixed ">
			<div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto md:mx-0 h-screen items-end justify-center flex flex-col gap-6 md:gap-16">
				<CustomLink title="My Projects" link="/projects" />
				{/* <CustomLink title="Lets Connect" link="/connect" /> */}
				<CustomLink title="About Me" link="/about" />
			</div>
		</main>
	);
}
