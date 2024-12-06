import { memo } from "react";
import {
  ActionIcon,
  Autocomplete,
  Center,
  Group,
  NumberInput,
  Stack,
  Switch,
  TagsInput,
  TextInput,
} from "@mantine/core";
import { ArrayInput } from "./arrayInput";
import { KeyValueInput } from "./keyValueInput";
import { useConfigAtom } from "@/atoms/config";
import { get, mapKeys, set } from "lodash-es";
import { SubmitableInput } from "../submitableInput";
import { IconLabelFilled, IconPlus, IconTrashFilled } from "@tabler/icons-react";
import { RemovableCard } from "../removableCard";
import { DocLink } from "../docLink";
import { getDocLink } from "@/utils";
import { FieldSelect } from "../fieldSelect";

const keyValuePatterns = [
  /healthCheck\.headers$/,
  /headers\.customRequestHeaders$/,
  /headers\.customResponseHeaders$/,
  /headers\.sslProxyHeaders$/,
  /http\.middlewares\.[\w_-]+\.plugin\.[\w_-]+$/,
];

const autoCompletePaths: Record<string, string> = {
  service: "services",
  middlewares: "middlewares",
  fallback: "services",
};

export type FieldsProps = {
  path: string;
  value: any;
  onChange: (value: any) => void;
  rename?: boolean;
};

export const ObjectInput = memo(({ path, value, onChange, rename }: FieldsProps) => {
  const { config, setConfig } = useConfigAtom();
  const handleChange = (key: any, newValue: any) => {
    onChange({
      ...value,
      [key]: newValue,
    });
  };

  const name = path.split(".").pop() as string;

  const handleRename = (newName: string) => {
    if (newName === name) return;

    const basePath = path.split(".").slice(0, -1).join(".");
    const baseObject = get(config, basePath);

    const updatedObject = mapKeys(baseObject, (_, key) => (key === name ? newName : key));

    setConfig((config) => {
      set(config, basePath, updatedObject);
    });
  };

  const handleRemove = (key: string) => {
    const updatedValue = { ...value };
    delete updatedValue[key];
    onChange(updatedValue);
  };

  const getAutoCompleteData = (key: string) => {
    const autoCompletePath = autoCompletePaths[key];
    if (!autoCompletePath) return [];

    const basePath = path.split(".")[0];

    return Object.keys(get(config, `${basePath}.${autoCompletePath}`, {}));
  };

  if (!value) return null;

  return (
    <Stack gap="sm">
      {rename && <SubmitableInput value={name} onChange={handleRename} leftSection={<IconLabelFilled size={16} />} />}
      {Object.keys(value).map((key) => {
        const docLink = getDocLink(`${path}.${key}`);
        if (typeof value[key] === "string") {
          if (autoCompletePaths[key]) {
            return (
              <Autocomplete
                label={key}
                key={key}
                size="xs"
                value={value[key]}
                data={getAutoCompleteData(key)}
                onChange={(event) => handleChange(key, event)}
                rightSection={
                  <ActionIcon variant="subtle" color="gray" onClick={() => handleRemove(key)}>
                    <IconTrashFilled size={16} />
                  </ActionIcon>
                }
                leftSection={docLink && <DocLink link={docLink} />}
              />
            );
          } else {
            return (
              <TextInput
                size="xs"
                key={key}
                label={key}
                value={value[key]}
                onChange={(event) => handleChange(key, event.target.value)}
                rightSection={
                  <ActionIcon variant="subtle" color="gray" onClick={() => handleRemove(key)}>
                    <IconTrashFilled size={16} />
                  </ActionIcon>
                }
                leftSection={docLink && <DocLink link={docLink} />}
              />
            );
          }
        } else if (typeof value[key] === "number") {
          return (
            <NumberInput
              size="xs"
              key={key}
              label={key}
              value={value[key]}
              onChange={(event) => {
                if (typeof event === "number") {
                  handleChange(key, event);
                }
              }}
              rightSection={
                <ActionIcon variant="subtle" color="gray" onClick={() => handleRemove(key)}>
                  <IconTrashFilled size={16} />
                </ActionIcon>
              }
              leftSection={docLink && <DocLink link={docLink} />}
            />
          );
        } else if (typeof value[key] === "boolean") {
          return (
            <Group key={key} justify="space-between">
              <Switch
                size="xs"
                key={key}
                label={key}
                checked={value[key]}
                onChange={(event) => handleChange(key, event.target.checked)}
              />

              <Group>
                <DocLink path={`${path}.${key}`} />
                <ActionIcon variant="subtle" color="gray" onClick={() => handleRemove(key)}>
                  <IconTrashFilled size={16} />
                </ActionIcon>
              </Group>
            </Group>
          );
        } else if (Array.isArray(value[key])) {
          if (value[key].some((item) => typeof item === "object")) {
            return (
              <RemovableCard
                leftSection={docLink && <DocLink link={docLink} />}
                key={key}
                title={key}
                onRemove={() => handleRemove(key)}
              >
                <ArrayInput path={`${path}.${key}`} value={value[key]} onChange={(event) => handleChange(key, event)} />
              </RemovableCard>
            );
          } else {
            return (
              <TagsInput
                size="xs"
                key={key}
                data={getAutoCompleteData(key)}
                label={key}
                placeholder={`Enter ${key}`}
                value={value[key]}
                onChange={(event) => handleChange(key, event)}
                rightSection={
                  <ActionIcon variant="subtle" color="gray" onClick={() => handleRemove(key)}>
                    <IconTrashFilled size={16} />
                  </ActionIcon>
                }
                leftSection={docLink && <DocLink link={docLink} />}
              />
            );
          }
        } else if (typeof value[key] === "object") {
          const isKeyValue = keyValuePatterns.some((pattern) => pattern.test(`${path}.${key}`));
          if (isKeyValue) {
            return (
              <RemovableCard
                leftSection={docLink && <DocLink link={docLink} />}
                title={key}
                key={key}
                onRemove={() => handleRemove(key)}
              >
                <KeyValueInput value={value[key]} onChange={(event) => handleChange(key, event)} />
              </RemovableCard>
            );
          } else {
            return (
              <RemovableCard
                leftSection={docLink && <DocLink link={docLink} />}
                title={key}
                key={key}
                onRemove={() => handleRemove(key)}
              >
                <ObjectInput
                  path={`${path}.${key}`}
                  value={value[key]}
                  onChange={(event) => handleChange(key, event)}
                />
              </RemovableCard>
            );
          }
        }
      })}

      <Center>
        <FieldSelect path={path} withoutValues isUnique>
          <ActionIcon variant="subtle" color="gray">
            <IconPlus size={16} />
          </ActionIcon>
        </FieldSelect>
      </Center>
    </Stack>
  );
});
