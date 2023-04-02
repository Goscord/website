import { Text } from "#/lib/components/atoms/text";
import { ReactElement } from "react";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { goscord } from "#/lib/configs/goscord";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import goscordLogo from "~/goscord.png";
import { footerLinks } from "#/lib/configs/footer";

export function FooterSection(): ReactElement {
  const mediaStyles = "text-gray-2 cursor-pointer hover:brightness-125 active:scale-95";

  return (
    <footer className="w-full bg-gray pt-8 pb-16 px-4 flex gap-16 justify-around items-center lg:flex-col-reverse">
      <div className="space-y-3">
        <Text color="gray-2" className="flex gap-1 items-center justify-center flex-wrap">
          <Image src={goscordLogo} alt="goscord logo" className="h-5 w-5 rounded" />
          <strong className="text-primary font-normal">Goscord</strong>
          - Made with ❤️ by the Goscord team
        </Text>

        <div className="flex items-center gap-8 lg:justify-center">
          <Link href={goscord.github.mainRepoUrl} target="_blank">
            <BsGithub className={clsx("text-xl", mediaStyles)} />
          </Link>

          <Link href={goscord.discord.url} target="_blank">
            <BsDiscord className={clsx("text-2xl", mediaStyles)} />
          </Link>
        </div>
      </div>

      <div className="flex gap-28 sm:flex-col sm:gap-14">
        {footerLinks.map(group => (
          <div key={group.title} className="space-y-3">
            <Text color="gray-3" type="h3">{group.title}</Text>

            {group.links.map(link => (
              <Text
                key={link.name}
                color="gray-2"
                className="hover:underline hover:brightness-125 cursor-pointer"
              >
                <Link href={link.link} target="_blank">
                  {link.name}
                </Link>
              </Text>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}