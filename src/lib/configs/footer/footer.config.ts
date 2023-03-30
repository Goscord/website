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
  },
  {
    title: "Resources",
    links: [
      { name: "Branding", link: "/branding" },
      { name: "Community", link: "/discord" },
      { name: "Report a problem", link: `${goscord.github.mainRepoUrl}/issues` }
    ]
  },
  {
    title: "Developers",
    links: [
      { name: "Documentation", link: "/documentation" },
      { name: "GitHub", link: goscord.github.organizationUrl },
      { name: "Changelog", link: `${goscord.github.mainRepoUrl}/releases` }
    ]
  }
];