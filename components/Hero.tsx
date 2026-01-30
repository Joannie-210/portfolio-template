import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#FFD700"
        />
        <Spotlight className="h-[100vh] w-[50vw] top-10 left-full" fill="#FFD700" />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="#8e44ad" />
      </div>
      <div className="text-center my-20 mx-auto max-w-[900px] justify-center flex flex-col ">
        <Reveal>
          <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-extrabold">
            Hello, I&apos;m {""}
            <span className="bg-gradient-to-r from-purple to-purple via-white bg-clip-text text-transparent">
             Joanna Enoch
            </span>
          </h1>
        </Reveal>
        <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl">
          I&apos;m a Frontend Developer
        </h2>
        <p className="max-w-[700px] mx-auto">
         Translating ideas into interactive digital experiences is my speciality. My strength lies in making software solutions user-friendly and easily navigable.
         Interested in working together? Let's talk!
        </p>
        <a className="mt-10 mx-auto" href="#contact">
          <Button
            title="Contact me"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
