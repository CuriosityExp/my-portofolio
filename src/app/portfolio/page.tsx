import Link from "next/link";
import React from "react";
import {LiaGithubSquare} from "react-icons/lia"
import {HiPhotograph} from "react-icons/hi"
export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-1/2 mt-10">
        <h1 className="text-center text-4xl font-bold">Seeker</h1>
        <div className="text-center text-md flex justify-center items-center gap-2">
          <LiaGithubSquare size={32} />
          <Link href={"https://github.com/CuriosityExp/seeker"}><span className="text-blue-600 hover:underline">Server</span></Link>
          <Link href={"https://github.com/CuriosityExp/seeker-mobile-app"}><span className="text-blue-600 hover:underline"> Client</span></Link>
        </div>
        <p className="text-center">{`Seeker is a comprehensive job finder assistant that offers a range of valuable features for job seekers. The app includes a CV generator that allows users to create professional and customised resumes tailored to their target positions. Additionally, Seeker provides a "to-do list before applying" feature, guiding users through important pre-application tasks such as skill enhancement and employer research. With its user-friendly interface and innovative tools, Seeker streamlines the job search process, empowering individuals to present their best selves to potential employers and improve their chances of securing the ideal job.`}</p>
      </div>
      <div className="w-3/4 snap-x bg-primary mt-4 h-500 flex justify-center items-center rounded-2xl shadow-xl overflow-x-scroll gap-5">
        <div className="w-1/4 snap-center text-center">
          <HiPhotograph size={200} />
          <p>Caption </p>
        </div>
        <div className="w-1/4 snap-center text-center">
          <HiPhotograph size={200} />
          <p>Caption </p>
        </div>
        <div className="w-1/4 snap-center text-center">
          <HiPhotograph size={200} />
          <p>Caption </p>
        </div>
        <div className="w-1/4 snap-center text-center">
          <HiPhotograph size={200} />
          <p>Caption </p>
        </div>
        <div className="w-1/4 snap-center text-center">
          <HiPhotograph size={200} />
          <p>Caption </p>
        </div>
        <div className="w-1/4 snap-center text-center">
          <HiPhotograph size={200} />
          <p>Caption </p>
        </div>
        
      </div>
    </div>
  );
}
