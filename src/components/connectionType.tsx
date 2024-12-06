import { Button, Stack, Tabs } from "@mantine/core";
import { memo, useState } from "react";
import { ConnectionTypeSubField } from "./connectionTypeSubField";
import { FieldSelect } from "./fieldSelect";
import { isArray } from "lodash-es";
import { ArrayInput } from "./inputs/arrayInput";

export type ConnectionProps = {
  path: string;
  value: any;
  onChange: (value: any) => void;
};

export const ConnectionType = memo(({ path, value, onChange }: ConnectionProps) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(value)[0] || null);

  const handleChange = (key: any, newValue: any) => {
    onChange({
      ...value,
      [key]: newValue,
    });
  };

  return (
    <Tabs orientation="vertical" value={selectedTab} onChange={setSelectedTab}>
      <Tabs.List>
        {Object.keys(value).map((key) => (
          <Tabs.Tab key={key} value={key}>
            {key}
          </Tabs.Tab>
        ))}

        <FieldSelect position="right-start" path={path} withoutValues isUnique onSelect={setSelectedTab}>
          <Button variant="transparent" color="gray" fullWidth>
            +
          </Button>
        </FieldSelect>
      </Tabs.List>

      {Object.keys(value).map((key) => (
        <Tabs.Panel value={key} key={key}>
          {isArray(value[key]) ? (
            <Stack gap="sm" p="sm">
              <ArrayInput path={`${path}.${key}`} value={value[key]} onChange={(value) => handleChange(key, value)} />
            </Stack>
          ) : (
            <ConnectionTypeSubField
              path={`${path}.${key}`}
              value={value[key]}
              onChange={(value) => handleChange(key, value)}
            />
          )}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
});
