import "./spinner.css"
interface LoadingSpinnerProps {
  color?: string;
  size?: "small"|"medium"|"large";}

export default function LoadingSpinner({color="#397ce5", size="small" }: LoadingSpinnerProps) {
  return (
  <div className={`loading-spinner loading-spinner--${size}`} style={{ borderTopColor: color }}/>);
  //The color and size stated here are the default color and size, should a color and size not be specified. 
}
