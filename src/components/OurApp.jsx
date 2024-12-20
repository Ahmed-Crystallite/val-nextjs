// Next
import Image from "next/image"
// Components
import { AutoPlaySlider } from "./index"
// Media
import ScreenShot1 from "media/screenshots/guardian/1.png"
import ScreenShot2 from "media/screenshots/guardian/2.png"
import ScreenShot3 from "media/screenshots/guardian/3.png"
import ScreenShot4 from "media/screenshots/guardian/4.png"
import ScreenShot5 from "media/screenshots/guardian/5.png"
import ScreenShot6 from "media/screenshots/guardian/6.png"
import ScreenShot7 from "media/screenshots/guardian/7.png"

const OurApp = () => {
  return (
    <section>
      <div className="__ourApp relative bg-[linear-gradient(0deg,_rgba(240,228,255,1)_0%,_rgba(255,255,255,1)_100%)] sm:rounded-b-[100px] z-10 lg:py-[100px] md:py-[80px] pt-[60px] pb-[20px]">
        <div className="container">
          <div className="md:pb-[80px]">
            <h2 className="xl:text-[52px] lg:text-[40px] font-sans max-w-[700px] md:text-[30px] text-[22px] leading-tight font-extrabold mb-3 text-black">
              Showcase Your Creativity. Share Your Story.
            </h2>
          </div>
          <AutoPlaySlider
            emblaWrapper="flex items-center"
            align="center"
            arrowsCss="!justify-center mt-16"
            screen={true}
          >
            {[
              ScreenShot1,
              ScreenShot2,
              ScreenShot3,
              ScreenShot4,
              ScreenShot5,
              ScreenShot6,
              ScreenShot7,
            ].map((e, i) => (
              <div
                key={i}
                className="grow-0 shrink-0 lg:basis-[20%] md:basis-[33.33%] sm:basis-[50%] basis-full mx-3"
              >
                <Image
                  src={e}
                  alt="screenshots"
                  className="m-auto sm:w-max sm:h-max w-[50%] h-[50%]"
                />
              </div>
            ))}
          </AutoPlaySlider>
        </div>
      </div>
    </section>
  )
}

export default OurApp
