import { StaticImageData } from "next/image";

export type PeopleProps = {
  id: number;
  image?: StaticImageData;
  icon?: JSX.Element;
  padding: number;
};
