import type { PeopleProps } from "@/types";

import Avatar1 from "@images/main/avatars/avatar-1.png";
import Avatar2 from "@images/main/avatars/avatar-2.png";
import Avatar3 from "@images/main/avatars/avatar-3.png";
import Avatar4 from "@images/main/avatars/avatar-4.png";
import Avatar5 from "@images/main/avatars/avatar-5.png";
import Avatar6 from "@images/main/avatars/avatar-6.png";
import Avatar7 from "@images/main/avatars/avatar-7.png";
import Avatar8 from "@images/main/avatars/avatar-8.png";
import Avatar9 from "@images/main/avatars/avatar-9.png";
import Avatar10 from "@images/main/avatars/avatar-10.png";

import Icon_1 from "@images/main/avatars/icon-1.svg";
import Icon_2 from "@images/main/avatars/icon-2.svg";

export const peopleArray: PeopleProps[] = [
  { id: 0, image: Avatar1, padding: 17 },
  { id: 1, image: Avatar2, padding: 7 },
  { id: 2, image: Avatar3, padding: 7 },
  { id: 3, image: Avatar4, padding: 13 },
  { id: 4, image: Avatar5, padding: 13 },
  { id: 5, image: Avatar6, padding: 11 },
  { id: 6, image: Avatar7, padding: 16 },
  { id: 7, image: Avatar8, padding: 8 },
  { id: 8, image: Avatar9, padding: 11 },
  { id: 9, image: Avatar10, padding: 10 },
  { id: 10, icon: <Icon_1 />, padding: 0 },
  { id: 11, icon: <Icon_2 />, padding: 10 },
];
