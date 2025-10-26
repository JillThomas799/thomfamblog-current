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

export default function LoadingSpinner({color = "#dde1e3", size = "small"}: LoadingSpinnerProps) {
  return (<div className="loading-spinner" style={{ borderTopColor: color,}}/>);
  

}
