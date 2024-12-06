import { Card, Group, ActionIcon, Text } from "@mantine/core";
import { IconTrashFilled } from "@tabler/icons-react";
import { memo } from "react";

export type RemovableCardProps = {
  children: React.ReactNode;
  onRemove?: () => void;
  title?: string;
  leftSection?: React.ReactNode;
};

export const RemovableCard = memo(({ title, children, onRemove, leftSection }: RemovableCardProps) => {
  return (
    <Card withBorder shadow="sm" radius="md" bg="transparent">
      <Card.Section withBorder p={5}>
        <Group justify="space-between">
          <Group gap={5} ml="xs">
            {leftSection}
            <Text size="xs" fw={500}>
              {title}
            </Text>
          </Group>
          <ActionIcon color="gray" variant="subtle" onClick={onRemove}>
            <IconTrashFilled size={14} />
          </ActionIcon>
        </Group>
      </Card.Section>

      <Card.Section p="sm">{children}</Card.Section>
    </Card>
  );
});
