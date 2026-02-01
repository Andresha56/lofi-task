import { useSelector } from "react-redux";
import { RootState } from "../app/store";

/* =====================
   Shared SVG props
===================== */
type SVGProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

/* =====================
   SVG ICONS (INLINE)
===================== */

function FireSVG({ size = 24, color = "#292D32", className }: SVGProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 10C9.5 9.2 8.45 9 8.17 9.74C7.49 11.53 7 13.13 7 14C7 16.76 9.24 19 12 19C14.76 19 17 16.76 17 14C17 13.07 16.43 11.29 15.68 9.34C14.7 6.81 14.21 5.54 13.61 5.48C12.5 5.86 12.5 7.24 12.5 10C12.5 10.83 11.83 11.5 11 11.5C10.17 11.5 9.5 10.83 9.5 10Z"
        fill={color}
      />
    </svg>
  );
}

function CloseSVG({
  size = 22,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 21L21 1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M21 21L1 1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonSVG({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4Z" fill={color} />
    </svg>

  );
}

function RainSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3025 3.79271C9.72117 5.66781 6 10.5528 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 10.5528 14.2788 5.66781 12.6975 3.79271C12.327 3.35336 11.673 3.35336 11.3025 3.79271ZM10 18C10.5523 18 11 17.5523 11 17C11 16.4477 10.5523 16 10 16C9.44772 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18Z" fill={color} />
    </svg>
  );
}

function WindSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path
        d="M6 22 H42 C48 22 48 14 42 14"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M6 32 H50 C56 32 56 24 50 24"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        opacity="0.85"
      />
      <path
        d="M14 42 H36 C42 42 42 36 36 36"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        opacity="0.6"
      />
    </svg>

  );
}

function BirdSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8q1.5-3 4-3c.5 0 1 .5 1 1s-.5 1-1 1q-2.5 0-4 3c-1.5 3-4 4.5-7 4.5-3 0-5.5-1.5-7-4.5 1.5-3 4-4.5 7-4.5 1.5 0 2.5.5 3.5 1.5" />
      <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill={color} />
      <path d="M13 13c.5 2.5 2 4.5 4 5.5s4.5 1 6-1" />
      <path d="M10 16c.5 2 1.5 3.5 3 4.5" />
    </svg>
  );
}

function CoffeeSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path
        d="M16 24 H40 V40 C40 46 35 50 30 50 H26 C21 50 16 46 16 40 Z"
        stroke={color}
        stroke-width="5"
        stroke-linejoin="round"
      />
      <path
        d="M40 28 H45 C51 28 51 36 45 36 H40"
        stroke={color}
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M22 14 C22 10 26 10 26 6"
        stroke={color}
        stroke-width="4"
        stroke-linecap="round"
        opacity="0.7"
      />
      <path
        d="M30 14 C30 10 34 10 34 6"
        stroke={color}
        stroke-width="4"
        stroke-linecap="round"
        opacity="0.7"
      />
    </svg>


  );
}

function PlaySvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 5V19L19 12L8 5Z"
        fill={color}
      />
    </svg>
  );
}

function PauseSVG({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4H10V20H6V4Z"
        fill={color}
      />
      <path
        d="M14 4H18V20H14V4Z"
        fill={color}
      />
    </svg>
  );
}

function ResetSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 11L10 15L14 19" stroke={color} stroke-width="2" />
      <path d="M4.20577 12.75C3.21517 11.8921 2.8184 10.8948 3.077 9.91263C3.3356 8.9305 4.23511 8.01848 5.63604 7.31802C7.03696 6.61756 8.86101 6.1678 10.8253 6.0385C12.7895 5.9092 14.7842 6.10758 16.5 6.60289C18.2158 7.09819 19.5567 7.86273 20.3149 8.77792C21.0731 9.69312 21.2061 10.7078 20.6933 11.6647C20.1806 12.6215 19.0507 13.467 17.4789 14.0701C15.9071 14.6731 13.9812 15 12 15" stroke={color} stroke-width="2" stroke-linecap="round" />
    </svg>

  );
}

function LogoutSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20L19 20C19.5523 20 20 19.5523 20 19L20 5C20 4.44772 19.5523 4 19 4L16 4" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 9L15 12M12 15L15 12M15 12H5" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 4H10M12 20H10M4 7L4 5C4 4.44772 4.44772 4 5 4L6 4M4 17L4 19C4 19.5523 4.44772 20 5 20H6" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
}

function TickSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" />
    </svg>

  );
}

function DoubleTickSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z" fill={color} />
    </svg>
  );
}
function PlusSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlaylistSvg({
  size = 24,
  color = "#292D32",
  strokeWidth = 1.5,
  className,
}: SVGProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="8" r="4" fill={color} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 6.89543 15.8954 6 17 6C18.1046 6 19 6.89543 19 8H15ZM11 8C11 7.29873 11.1203 6.62556 11.3414 6H5C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8H11ZM11.8027 11C12.2671 11.8028 12.9121 12.488 13.6822 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11.8027ZM5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H5Z" fill={color} />
    </svg>

  );
}
// icons mapping
const ICONS: Record<string, (props: SVGProps) => JSX.Element> = {
  fire: FireSVG,
  cross: CloseSVG,
  moon: MoonSVG,
  rain: RainSvg,
  wind: WindSvg,
  bird: BirdSvg,
  coffee: CoffeeSvg,
  play: PlaySvg,
  pause: PauseSVG,
  restart: ResetSvg,
  logout: LogoutSvg,
  tick: TickSvg,
  doubleTick: DoubleTickSvg,
  plus: PlusSvg,
  playlist: PlaylistSvg
};

interface Props {
  name: string;
  height: number;
  width: number;
  className?: string;
  color?: string;
}

const Icon = ({ name, height, width, className, color }: Props) => {
  const { colors } = useSelector((state: RootState) => state.colors);

  const finalColor =
    color ?? (colors.backgroundColor === "#181818" ? "white" : "black");

  const SvgIcon = ICONS[name];

  if (!SvgIcon) return null;

  return (
    <SvgIcon
      size={Math.min(width, height)}
      color={finalColor}
      className={className}
    />
  );
};

export default Icon;
