import { Button, Group, Tabs } from "@mantine/core";
import { ConnectionType } from "./connectionType";
import { useConfigAtom } from "@/atoms/config";
import { FieldSelect } from "./fieldSelect";
import { IconFileDownload, IconTrashFilled } from "@tabler/icons-react";
import { useState } from "react";
import { ExportTab } from "./exportTab";

export const MainTabs = () => {
  const { config, setConfig } = useConfigAtom();
  const [selectedTab, setSelectedTab] = useState(Object.keys(config)[0] || null);

  const handleChange = (key: any, newValue: any) => {
    setConfig({
      ...config,
      [key]: newValue,
    });
  };

  const handleClear = () => {
    setConfig({});
    return false;
  };

  const handleTabChange = (tab: any) => {
    if (tab === "clear") return;
    setSelectedTab(tab);
  };

  return (
    <Tabs value={selectedTab} onChange={handleTabChange}>
      <Tabs.List justify="space-between">
        <Group gap={0}>
          {Object.keys(config).map((key) => (
            <Tabs.Tab key={key} value={key}>
              {key}
            </Tabs.Tab>
          ))}

          <FieldSelect position="bottom-start" withoutValues isUnique onSelect={setSelectedTab}>
            <Button variant="subtle" color="gray" fullWidth>
              +
            </Button>
          </FieldSelect>
        </Group>

        <Group align="end">
          <Tabs.Tab value={"export"}>
            <IconFileDownload size={16} />
          </Tabs.Tab>
          <Tabs.Tab value="clear" onClick={handleClear}>
            <IconTrashFilled size={16} />
          </Tabs.Tab>
        </Group>
      </Tabs.List>

      {Object.keys(config).map((key) => (
        <Tabs.Panel value={key} key={key}>
          <ConnectionType
            path={key}
            value={config[key as keyof TConfig]}
            onChange={(value) => handleChange(key, value)}
          />
        </Tabs.Panel>
      ))}

      <Tabs.Panel value="export">
        <ExportTab />
      </Tabs.Panel>
    </Tabs>
  );
};
