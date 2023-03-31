import type { TeamMember } from "./team.type";
import bluzzi from "~/team/bluzzi.png";
import szeroki from "~/team/szeroki.png";
import onirez from "~/team/onirez.png";

export const teamMembers: TeamMember[] = [
  {
    img: bluzzi,
    name: "Bluzzi",
    description: "Web Developer",
    twitterLink: "https://twitter.com/Bluzzi_",
    githubLink: "https://github.com/Bluzzi",
    websiteLink: "https://camilledugas.me"
  },
  {
    img: szeroki,
    name: "szeroki",
    description: "API Developer",
    twitterLink: "https://twitter.com/szerookii___",
    githubLink: "https://github.com/szerookii",
    websiteLink: "https://www.szeroki.fr"
  },
  {
    img: onirez,
    name: "Onirez",
    description: "Web Designer",
    twitterLink: "https://twitter.com/OnireZz"
  }
];
