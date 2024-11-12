import Link from "next/link";
import React from "react";
import {LiaGithubSquare} from "react-icons/lia"
import {FaNodeJs} from "react-icons/fa"
import {SiPuppeteer} from "react-icons/si"
import {TbBrandReact, TbBrandMongodb, TbBrandOpenai} from "react-icons/tb"
import Image from "next/image";
const imageSize = {
  maxWidth: 200,
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-1/2 mt-10">
        <h1 className="text-center text-4xl font-bold">Seeker</h1>
        <div className="text-center text-md flex justify-center items-center gap-2">
          <div className="tooltip tooltip-left"  data-tip={"Github Repositories"}>
          <LiaGithubSquare size={32} />
          </div>
          <Link href={"https://github.com/CuriosityExp/seeker"}><span className="text-blue-600 hover:underline">Server</span></Link>
          <Link href={"https://github.com/CuriosityExp/seeker-mobile-app"}><span className="text-blue-600 hover:underline"> Client</span></Link>
        </div>
        <p className="text-center">{`Seeker is a comprehensive job finder assistant that offers a range of valuable features for job seekers. The app includes a CV generator that allows users to create professional and customised resumes tailored to their target positions. Additionally, Seeker provides a "to-do list before applying" feature, guiding users through important pre-application tasks such as skill enhancement and employer research. With its user-friendly interface and innovative tools, Seeker streamlines the job search process, empowering individuals to present their best selves to potential employers and improve their chances of securing the ideal job.`}
        </p>
      </div>
      <div className="mt-2 text-center">
        <p className="font-semibold">Tech Stack:</p>
        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center bg-slate-300 p-2 rounded-xl hover:shadow-lg gap-1">
            <TbBrandReact size={32} color={"#5FD3F3"} />
            <p>React Native</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-300 p-2 rounded-xl hover:shadow-lg gap-1">
            <FaNodeJs size={32} color={"#6EA460"} />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-300 p-2 rounded-xl hover:shadow-lg gap-1">
            <TbBrandMongodb size={32} color={"#6EA460"} />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-300 p-2 rounded-xl hover:shadow-lg gap-1">
            <TbBrandOpenai size={32} />
            <p>OpenAI</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-300 p-2 rounded-xl hover:shadow-lg gap-1">
            <SiPuppeteer size={40} color={"#6EA460"} />
            <p>Puppeteer.js</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl snap-x bg-primary px-10 my-4 h-500 flex rounded-2xl shadow-xl overflow-x-scroll gap-5">
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/landing-page.png"} alt="landing-page" style={imageSize} width={200} height={200} />
          <p>Landing Screen Seeker </p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/landing-content.png"} alt="landing-page" style={imageSize} width={500} height={500} sizes='100vw'/>
          <p>Landing Screen Content </p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/boarding.png"} alt="content" width={500} style={imageSize} height={500} sizes='100vw'/>
          <p>Boarding</p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/profile.png"} alt="Profile Screen" style={imageSize} width={500} height={500} sizes='100vw'/>
          <p>Profile Screen</p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/home.png"} alt="Home Screen" style={imageSize} width={500} height={500} sizes='100vw'/>
          <p>Home Screen</p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/search.png"} alt="landing-page" style={imageSize} width={500} height={500} sizes='100vw'/>
          <p>Select Search Screen</p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/search-query.png"} alt="landing-page" style={imageSize} width={500} height={500} sizes='100vw'/>
          <p>Search Job Portal</p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/querying.png"} alt="landing-page" style={imageSize} width={500} height={500} sizes='100vw'/>
          <p>Scrapping Screen</p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/bookmark.png"} alt="landing-page" style={imageSize} width={500} height={500} sizes='100vw'/>
          <p>Bookmark Screen</p>
        </div>
        <div className="snap-center text-center flex flex-col justify-center items-center gap-1">
          <Image src={"/todos.png"} alt="landing-page" style={imageSize} width={500} height={500} sizes='100vw'/>
          <p>To-Do Screen</p>
        </div>
        
      </div>
    </div>
  );
}
