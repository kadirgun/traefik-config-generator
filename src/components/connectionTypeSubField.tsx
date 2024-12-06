import { Button, Tabs } from "@mantine/core";
import { memo, useState } from "react";
import { FieldSelect } from "./fieldSelect";
import { ObjectInput } from "./inputs/objectInput";

export type ConnectionTypeSubFieldProps = {
  path: string;
  value: any;
  onChange: (value: any) => void;
};

export const ConnectionTypeSubField = memo(({ path, value, onChange }: ConnectionTypeSubFieldProps) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(value)[0] || null);
  const handleChange = (key: any, newValue: any) => {
    onChange({
      ...value,
      [key]: newValue,
    });
  };

  return (
    <Tabs orientation="vertical" h="100%" value={selectedTab} onChange={setSelectedTab}>
      <Tabs.List defaultValue="0">
        {Object.keys(value).map((key) => (
          <Tabs.Tab key={key} value={key}>
            {key}
          </Tabs.Tab>
        ))}

        <FieldSelect position="right-start" path={path} onSelect={setSelectedTab}>
          <Button variant="transparent" color="gray" fullWidth>
            +
          </Button>
        </FieldSelect>
      </Tabs.List>

      {Object.keys(value).map((key) => (
        <Tabs.Panel value={key} key={key} p="sm">
          <ObjectInput
            rename
            path={`${path}.${key}`}
            value={value[key]}
            onChange={(value) => handleChange(key, value)}
          />
        </Tabs.Panel>
      ))}
    </Tabs>
  );
});
