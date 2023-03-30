import { Text } from "#/lib/components/atoms/text";
import { ReactElement } from "react";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { goscord } from "#/lib/configs/goscord";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import goscordLogo from "~/goscord.png";

export function FooterSection(): ReactElement {
  const mediaStyles = "text-gray-2 cursor-pointer hover:brightness-125 active:scale-95";

  return (
    <footer className="bg-gray py-8 flex items-center justify-center">
      <div className="space-y-3">
        <Text color="gray-2" className="flex gap-1 items-center">
          <Image src={goscordLogo} alt="goscord logo" className="h-5 w-5 rounded" />
          <strong className="text-primary font-normal">Goscord</strong>
          - Made with ❤️ by the Goscord team
        </Text>

        <div className="flex items-center gap-8">
          <Link href={goscord.github.mainRepoUrl} target="_blank">
            <BsGithub className={clsx("text-xl", mediaStyles)} />
          </Link>

          <Link href={goscord.discord.url} target="_blank">
            <BsDiscord className={clsx("text-2xl", mediaStyles)} />
          </Link>
        </div>
      </div>

      <div>

      </div>
    </footer>
  );
}