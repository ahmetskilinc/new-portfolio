import type { Project } from "@/data/projectsData";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type Props = {
	project: Project;
};

const ProjectLinks = ({ github, link }: { github?: Url; link?: Url }) => {
	if (github || link) {
		return (
			<div className="flex gap-6 text-lg underline font-extralight md:justify-end">
				{github ? <Link href={github}>Github</Link> : null}
				{link ? <Link href={link}>Visit</Link> : null}
			</div>
		);
	} else {
		return null;
	}
};

const Project = ({ project: { img, title, description, github, link } }: Props) => {
	return (
		<div className="flex gap-[22px] justify-center md:justify-normal items-center flex-col-reverse md:flex-row">
			<div className="flex flex-col gap-2 md:gap-6 md:text-right">
				<h3 className="text-lg md:text-3xl font-extralight">{title}</h3>
				<p className="md:w-[455px] text-base md:text-2xl font-extralight">{description}</p>
				<ProjectLinks github={github} link={link} />
			</div>
			<img
				src={`/projects/${img}.png`}
				alt={`${title} project screenshot`}
				className="w-full md:w-[662px] md:h-[412px] rounded-md shadow-2xl"
			/>
		</div>
	);
};

export default Project;
