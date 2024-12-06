import { Tabs } from "@mantine/core";
import { DockerExport } from "./exports/docker";
import { FileExport } from "./exports/file";

export const ExportTab = () => {
  return (
    <Tabs defaultValue="docker">
      <Tabs.List>
        <Tabs.Tab value="docker">Docker</Tabs.Tab>
        <Tabs.Tab value="file">File</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="docker">
        <DockerExport />
      </Tabs.Panel>

      <Tabs.Panel value="file">
        <FileExport />
      </Tabs.Panel>
    </Tabs>
  );
};
