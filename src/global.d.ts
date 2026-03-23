declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "modern-normalize/modern-normalize.css" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "react-icons/go" {
  import { IconType } from "react-icons";
  export const GoHeart: IconType;
  export const GoHeartFill: IconType;
  export const GoArrowUpRight: IconType;
}

declare module "react-icons/fa" {
  import { IconType } from "react-icons";
  export const FaStar: IconType;
  export const FaRegStar: IconType;
  export const FaPhone: IconType;
  export const FaEnvelope: IconType;
  export const FaCheck: IconType;
  export const FaUser: IconType;
  export const FaQuestion: IconType;
  export const FaChevronDown: IconType;
  export const FaPalette: IconType;
  export const FaHeart: IconType;
  export const FaRegHeart: IconType;
  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaArrowUp: IconType;
}

declare module "react-icons/ai" {
  import { IconType } from "react-icons";
  export const AiOutlineClose: IconType;
  export const AiOutlineMenu: IconType;
}

declare module "clsx" {
  type ClassValue = string | number | boolean | null | undefined | ClassValue[];
  function clsx(...inputs: ClassValue[]): string;
  export default clsx;
}
