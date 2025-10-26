// import { Loader2Icon } from "lucide-react"

// import { cn } from "@/lib/utils"

// function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
//   return (
//     <Loader2Icon
//       role="status"
//       aria-label="Loading"
//       className={cn("size-4 animate-spin", className)}
//       {...props}
//     />
//   )
// }

// export { Spinner }

import "./spinner.css"
interface LoadingSpinnerProps {
  color?: string;
  size?: "small"|"medium"|"large";}

export default function LoadingSpinner({color="#397ce5", size="medium" }: LoadingSpinnerProps) {
  return (
  <div className={`loading-spinner loading-spinner--${size}`} style={{ borderTopColor: color }}/>);
  //The color and size stated here are the default color and size, should a color and size not be specified. 
}
