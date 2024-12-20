// Next
import Image from "next/image"
// Components
import { CTA } from "./index"
// Media
import HeroImage from "media/home/hero.png"

const Hero = () => {
  return (
    <section>
      <div className="relative lg:pt-[80px] pt-[150px] pb-[200px] z-10 bg-[linear-gradient(85deg,_rgba(111,0,254,1)_0%,_rgba(78,0,177,1)_100%)]">
        <div className="container">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-10 items-center">
              <div className="lg:col-span-6">
                <span className="font-mono text-secondary 2xl:text-[20px] md:text-[18px] text-[16px] leading-tight font-extrabold">
                  AMAZING FEATURES
                </span>
                <h1 className="font-sans text-white 2xl:text-[50px] xl:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] my-2 leading-tight font-extrabold">
                Showcase Your Creativity. Share Your Story.
                </h1>
                <p className="font-mono text-white/80 2xl:text-[20px] md:text-[18px] text-[16px] leading-normal font-medium 2xl:max-w-[700px] max-w-[650px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-10 flex md:gap-x-4 gap-x-3">
                  <CTA />
                  <CTA
                    icon="apple"
                    text="Available on the"
                    text2="App Store"
                    csstext1="capitalize"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <Image
                  src={HeroImage}
                  priority
                  alt="hero2"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
