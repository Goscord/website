import { TeamCard } from "#/lib/components/molecules/team-card";
import { teamMembers } from "#/lib/configs/team";
import { ReactElement } from "react";

export function TeamSection(): ReactElement {
  return (
    <section className="bg-gray py-16 flex items-center justify-center flex-wrap gap-10">
      {teamMembers.map(member => (
        <TeamCard
          key={member.name}

          img={member.img}

          name={member.name}
          description={member.description}

          githubLink={member.githubLink}
          twitterLink={member.twitterLink}
          websiteLink={member.websiteLink}
        />
      ))}
    </section>
  );
}