import { AppShell, Group, Container, ActionIcon, Paper, Image, Text } from "@mantine/core";
import { memo } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { MainTabs } from "./components/mainTabs";

export const Layout = memo(() => {
  return (
    <AppShell header={{ height: 50 }} padding="md" bg="dark">
      <AppShell.Header>
        <Container h="100%" size="lg">
          <Group h="100%" justify="space-between" style={{ flex: 1 }}>
            <Group>
              <Image h={25} src="/traefik.svg" />
              <Text size="sm" fw={600}>
                Config Generator
              </Text>
            </Group>

            <Group ml="xl" gap={0} visibleFrom="sm">
              <ActionIcon
                color="gray"
                size="lg"
                radius={100}
                component="a"
                target="_blank"
                href="https://github.com/kadirgun/traefik-config-generator"
              >
                <IconBrandGithub size={18} />
              </ActionIcon>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="lg">
          <Paper radius="md">
            <MainTabs />
          </Paper>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
});
