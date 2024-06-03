import { Button, buttonVariants } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { useMediaQuery } from "usehooks-ts";

const Intro = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <section className="px-8 md:px-12 lg:px-32">
      <div className="flex flex-col gap-6 mx-auto lg:flex-row flex-nowrap max-w-7xl">
        <div className="w-full space-y-6">
          <h2 className="text-4xl md:text-7xl">
            <div className="w-56 -translate-x-8 aspect-square lg:-translate-x-12 lg:w-80">
              <img
                src="https://robohash.org/placeholder.png"
                className="w-full"
                alt="me"
              />
            </div>
            Hi there!{" "}
            <span className="whitespace-nowrap">I'm Atul Chauhan</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end w-full space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-7xl">
            Software developer based in Bangalore, India
            <ImLocation
              className="inline ml-2 fill-red-400"
              size={isDesktop ? 42 : 16}
            />
          </h2>
          <p className="text-sm md:text-3xl text-neutral-500">
            I specialize in building web applications.
          </p>
          <div className="space-x-4">
            <a
              href="mailto:atul14.chauhan@outlook.com"
              className={buttonVariants()}
            >
              Lets Talk
            </a>
            <a
              className={buttonVariants({ variant: "outline" })}
              href="#experience"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
