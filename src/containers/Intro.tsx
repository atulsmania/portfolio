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
            <img
              src="https://robohash.org/placeholder.png"
              className="-translate-x-12 lg:w-96"
              alt="me"
            />
            Hi there!{" "}
            <span className="whitespace-nowrap">I'm Atul Chauhan</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end w-full space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-7xl">
            Software developer based in Bangalore, India
            <ImLocation
              className="inline ml-2 fill-blue-500"
              size={isDesktop ? 42 : 16}
            />
          </h2>
          <p className="text-sm md:text-3xl text-neutral-500">
            I specialize in building web applications.
          </p>
          <div className="space-x-4">
            <Button className="space-x-2 peer">
              <span>Lets Talk</span>
              <FaLongArrowAltRight />
            </Button>
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