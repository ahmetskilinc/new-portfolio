import Link from "next/link";
import projectsData from "@/data/projectsData";
import Project from "@/components/Project";

export default function Connect() {
	return (
		<main className=" min-h-screen bg-fixed ">
			<div className="w-11/12 md:w-full mx-auto md:mx-0 items-center justify-center flex flex-col gap-10 py-24 md:py-[280px]">
				{projectsData.map((project) => (
					<Project project={project} key={project.title} />
				))}
			</div>
		</main>
	);
}
