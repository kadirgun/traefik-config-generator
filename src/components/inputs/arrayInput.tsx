import { ActionIcon, Center, Stack } from "@mantine/core";
import { cloneDeep, get } from "lodash-es";
import { memo } from "react";
import { ObjectInput } from "./objectInput";
import { IconPlus } from "@tabler/icons-react";
import { getOriginalPath } from "@/utils";
import { configSchema } from "@/schema";
import { RemovableCard } from "../removableCard";

export type ArrayInputProps = {
  path: string;
  value: any[];
  onChange: (value: any[]) => void;
};

export const ArrayInput = memo(({ path, onChange, value }: ArrayInputProps) => {
  const originalPath = getOriginalPath(path);

  const addItem = () => {
    const newValue = cloneDeep(get(configSchema, originalPath, [])[0]);
    onChange([...value, newValue]);
  };

  const handleChange = (index: number, newValue: any) => {
    const newData = [...value];
    newData[index] = newValue;
    onChange(newData);
  };

  const handleRemove = (index: number) => {
    const newData = [...value];
    newData.splice(index, 1);
    onChange(newData);
  };

  return (
    <Stack gap="sm">
      {value.map((_, index) => {
        return (
          <Stack gap="sm" key={`${path}.${index}`}>
            <RemovableCard onRemove={() => handleRemove(index)}>
              <ObjectInput
                path={`${path}.${index}`}
                value={value[index]}
                onChange={(event) => handleChange(index, event)}
              />
            </RemovableCard>
          </Stack>
        );
      })}

      <Center>
        <ActionIcon color="gray" variant="subtle" onClick={addItem}>
          <IconPlus size={16} />
        </ActionIcon>
      </Center>
    </Stack>
  );
});
