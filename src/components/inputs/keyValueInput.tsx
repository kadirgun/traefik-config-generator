import { ActionIcon, Center, Group, Stack, TextInput } from "@mantine/core";
import { IconPlus, IconTrashFilled } from "@tabler/icons-react";
import { set } from "lodash-es";
import { memo, useMemo } from "react";

export type KeyValueInputProps = {
  value: Record<string, string>;
  onChange: (value: Record<string, string>) => void;
};

type KeyValueRecord = {
  key: string;
  value: string;
};

export const KeyValueInput = memo(({ value, onChange }: KeyValueInputProps) => {
  const data = useMemo(() => {
    const draft: KeyValueRecord[] = [];

    if (!value) return draft;

    Object.keys(value).forEach((key) => {
      draft.push({
        key: key,
        value: value[key],
      });
    });

    return draft;
  }, [value]);

  const addRecord = () => {
    const records = [...data, { key: "", value: "" }];
    updateData(records);
  };

  const updateData = (newData: KeyValueRecord[]) => {
    const updatedData = {};

    newData.forEach((record) => {
      set(updatedData, record.key, record.value);
    });

    onChange(updatedData);
  };

  const handleChange = (index: number, key: string, changed: string) => {
    const exists = data.find((record, i) => record.key === changed && i !== index);
    if (exists) return;
    const records = data.map((record, i) => (i === index ? { ...record, [key]: changed } : record));
    updateData(records);
  };

  const handleRemove = (index: number) => {
    const records = data.filter((_, i) => i !== index);
    updateData(records);
  };

  return (
    <Stack>
      {data.map((record, index) => (
        <Group grow key={`${data.length}.${index}`}>
          <TextInput
            size="xs"
            placeholder="Key"
            defaultValue={record.key}
            onBlur={(event) => handleChange(index, "key", event.target.value)}
          />
          <TextInput
            size="xs"
            placeholder="Value"
            defaultValue={record.value}
            onBlur={(event) => handleChange(index, "value", event.target.value)}
            rightSection={
              <ActionIcon color="gray" variant="subtle" onClick={() => handleRemove(index)}>
                <IconTrashFilled size={16} />
              </ActionIcon>
            }
          />
        </Group>
      ))}

      <Center>
        <ActionIcon color="gray" variant="subtle" onClick={addRecord}>
          <IconPlus size={16} />
        </ActionIcon>
      </Center>
    </Stack>
  );
});
