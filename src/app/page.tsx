import CustomLink from "@/components/CustomLink";

export default function Home() {
	return (
		<main className="bg-[url('/background.svg')] bg-cover bg-right md:bg-center bg-no-repeat min-h-screen bg-fixed ">
			<div className="w-3/4 md:w-1/2 mx-auto md:mx-0 h-screen items-end justify-center flex flex-col">
				<CustomLink title="My Projects" link="/projects" />
				<CustomLink title="Lets Connect" link="/connect" />
				<CustomLink title="About Me" link="/about" />
			</div>
		</main>
	);
}
