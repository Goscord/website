import { ReactElement } from "react";
import { Text } from "#/lib/components/atoms/text";
import Link from "next/link";

export default function Documentation(): ReactElement {
  return (
    <div className="flex items-center justify-center flex-col gap-5 h-96">
      <Text color="black" className="text-center">Our documentation coming soon...</Text>

      <Link href="https://pkg.go.dev/github.com/Goscord/goscord#section-documentation" target="_blank">
        <Text color="primary" className="hover:underline">While waiting, you can use the Golang documentation.</Text>
      </Link>
    </div>
  );
}