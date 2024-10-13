import { FiBarChart, FiHeart, FiMonitor, FiZap } from "react-icons/fi";
import type { Promote } from "./promote.type";

export const promotes: Promote[] = [
  {
    icon: <FiHeart />,
    title: "Use plain Go",
    description: "Goscord is written entirely in Golang, no C dependencies, no more compilation issues!"
  },
  {
    icon: <FiMonitor />,
    title: "Fast development time",
    description: "Goscord is easy to use which allows you to develop Discord applications quickly and easily!"
  },
  {
    icon: <FiZap />,
    title: "Speedy execution",
    description: "Create ultra-fast Discord applications with Golang's speed and Goscord's optimization!"
  },
  {
    icon: <FiBarChart />,
    title: "Active development",
    description: "We are actively developing Goscord to add all the necessary content, we are reactive to updates of the Discord API."
  }
];