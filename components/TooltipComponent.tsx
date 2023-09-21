import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface tooltipProps {
  tooltipTrigger: ReactNode|string;
  tooltipContent: string;
}
import { Triangle } from "lucide-react";

const TooltipComponent: React.FC<tooltipProps> = ({
  tooltipTrigger,
  tooltipContent,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{tooltipTrigger}</TooltipTrigger>
        <TooltipContent className="block top-0 bg-transparent text-main-paragraph-color relative top-[-1vh] text-xs border-none">
          <p>{tooltipContent}</p>
          {/* <div className="border absolute right-2 bottom-[-10px] z-[10000] w-4 h-4 border-l-transparentborder-t-transparent border-r-first-color  border-b-first-color text-white border-1"  /> */}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
