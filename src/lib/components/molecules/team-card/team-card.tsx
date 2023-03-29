import { ReactElement } from "react";
import { TeamCardProps } from "./team-card.type";
import { Text } from "#/lib/components/atoms/text";
import { FiGithub, FiLink, FiTwitter } from "react-icons/fi";
import Image from "next/image";

export function TeamCard({ img, name, description, githubLink, twitterLink, websiteLink }: TeamCardProps): ReactElement {
  return (
    <div className="bg-primary-3 py-4 px-6 rounded-lg shadow flex gap-8 items-center">
      <Image src={img} alt={`${name} profile picture`} className="h-32 w-32 rounded-lg" />

      <div className="flex flex-col gap-1">
        <Text color="gray" size="xl">{name}</Text>
        <Text color="black" size="2xl" className="font-bold">{description}</Text>

        <div className="flex gap-3 text-lg">
          {githubLink && <FiTwitter className="cursor-pointer" />}
          {twitterLink && <FiGithub className="cursor-pointer" />}
          {websiteLink && <FiLink className="cursor-pointer" />}
        </div>
      </div>
    </div>
  );
}