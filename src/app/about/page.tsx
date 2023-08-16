import Link from "next/link";
import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import ProfileImage from "@/components/ProfileImage";
export default function AboutPage() {
  return (
    <div className="flex flex-row justify-around w-full min-h-screen items-center gap-5">
      <div className="w-2/6 flex flex-col">
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
            <Link target="_blank" href={"https://docs.google.com/document/d/11FFTLVwEx2Dp5gXq7HcAj292LF4Uxh3k1Gp01mh9sgw/edit?usp=sharing"} className="bg-primary p-4 rounded-xl font-bold ">
              View CV
            </Link>
          </div>
        </div>
      </div>
      <div className="w-4/6 flex justify-center h-600 overflow-clip">
        <ProfileImage />
      </div>
    </div>
  );
}
