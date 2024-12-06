import { getDocLink } from "@/utils";
import { ActionIcon, Center } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { memo } from "react";
export type DocLinkProps = {
  path?: string;
  link?: string;
};
export const DocLink = memo(({ path, link }: DocLinkProps) => {
  const docLink = link || (path && getDocLink(path));

  if (!docLink) return null;

  return (
    <Center>
      <ActionIcon component="a" color="gray" variant="transparent" href={docLink} target="_blank">
        <IconInfoCircle size={16} />
      </ActionIcon>
    </Center>
  );
});
