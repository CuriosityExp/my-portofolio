import Link from "next/link";
import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
export default function AboutPage() {
  return (
    <div className="flex flex-row justify-around w-full min-h-screen items-center gap-5">
      <div className="w-1/2 flex flex-col">
        <h1 className="font-bold text-4xl text-right">Daniel Elisandro</h1>
        <h6 className="font-light text-md text-right mb-2">
          Full Stack Developer
        </h6>
        <p className="text-right w-60 self-end mb-9">
          I am a tech-savvy individual with a strong foundation in physics,
          driven by a profound enthusiasm for the world of technology,
          particularly web development and mobile applications.
        </p>
        <div className="self-end">
          <div className="flex gap-5 items-center">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/daniel-elisandro/"}
            >
              <IoLogoLinkedin size={60} />
            </Link>
            <Link target="_blank" href={"https://github.com/CuriosityExp"}>
              <IoLogoGithub size={60} />
            </Link>
            <button className="bg-primary p-4 rounded-xl font-bold ">
              {" "}
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">Photo</div>
    </div>
  );
}
