import { Button, buttonVariants } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "usehooks-ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { downloadResume } from "@/lib/utils";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <header className="px-8 py-4 md:px-12 lg:px-32 bg-neutral-100/90">
      <div className="flex justify-between mx-auto max-w-7xl">
        <a href="/" className="text-2xl font-bold">
          AC
        </a>
        {isDesktop ? <WidescreenMenu /> : <HamburgerMenu />}
      </div>
    </header>
  );
};

const HamburgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <RxHamburgerMenu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href="#experience">
            <span className="text-lg">Experience</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="#about">
            <span className="text-lg">About Me</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="#contact">
            <span className="text-lg">Contact</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={downloadResume}>
          <span className="text-lg">Resume</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const WidescreenMenu = () => {
  const linkButtonVariants = buttonVariants({ variant: "link", size: "sm" });
  return (
    <>
      <nav>
        <a className={linkButtonVariants} href="#experience">
          <span className="text-lg">Experience</span>
        </a>
        <a className={linkButtonVariants} href="#about">
          <span className="text-lg">About Me</span>
        </a>
        <a className={linkButtonVariants} href="#contact">
          <span className="text-lg">Contact</span>
        </a>
      </nav>
      <Button size="sm" onClick={downloadResume}>
        <span>Resume</span>
      </Button>
    </>
  );
};

export default Header;
