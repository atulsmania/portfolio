import { cn } from "@/lib/utils";

type WebsiteIconProps = {
  domain?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const fallbackIcon = "https://clearbit.com/favicon.ico";
const WebsiteIcon = ({ domain, className, ...props }: WebsiteIconProps) => {
  const fullIconUrl = domain
    ? `https://logo.clearbit.com/${domain}`
    : fallbackIcon;

  return (
    <img
      src={fullIconUrl}
      alt={`Icon for ${domain}`}
      className={cn("w-10 h-10 rounded", className)}
      {...props}
    />
  );
};

export default WebsiteIcon;
