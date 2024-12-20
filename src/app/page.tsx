/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {

  const trackDownloadEvent = ({ action, category, label, value }: any) => {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  const countDownload = () => {
    trackDownloadEvent({
      action: 'download_cv',
      category: 'engagement',
      label: 'CV downloaded',
      value: 'Altuğ Altuner CV',
    });
  };


  return (
    <section className="h-full">
      <div className="container mx-auto xl:h-[90%]">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-8">

          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-accent">Altuğ Altuner</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting digital experiences and I am proficient in JS and TS and front end technologies such as React, Next.</p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/cv.pdf" download>
                <Button
                  onClick={countDownload}
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
};

export default Home