import { goscord } from "#/lib/configs/goscord";
import { FooterLinks } from "./footer.type";

export const footerLinks: FooterLinks[] = [
  {
    title: "GitHub",
    links: [
      { name: "Goscord", link: goscord.github.mainRepoUrl },
      { name: "Website", link: goscord.github.websiteRepoUrl },
      { name: "Example bot", link: goscord.github.botRepoUrl },
      { name: "Backend", link: goscord.github.backendRepoUrl }
    ]
  }
];