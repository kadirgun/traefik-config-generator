import { configSchema } from "@/schema";
import { Box, Combobox, ScrollArea, useCombobox, type FloatingPosition } from "@mantine/core";
import { cloneDeep, get, set } from "lodash-es";
import { memo, useMemo, useState } from "react";
import { FieldName } from "./fieldName";
import { useConfigAtom } from "@/atoms/config";
import { getEmptyValueByType, getOriginalPath, getPathString } from "@/utils";

const replaceValuePatterns = [
  {
    pattern: /http\.middlewares\.{plugin}$/,
    path: "plugin",
  },
];

export type FieldSelectProps = {
  path?: string;
  children: React.ReactNode;
  position?: FloatingPosition;
  withoutValues?: boolean;
  isUnique?: boolean;
  onSelect?: (key: string) => void;
};

export const FieldSelect = memo(({ path, children, position, withoutValues, isUnique, onSelect }: FieldSelectProps) => {
  const [search, setSearch] = useState("");
  const { config, setConfig } = useConfigAtom();

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch("");
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const originalPath = path && getOriginalPath(path);

  const data = useMemo(() => {
    return Object.keys(originalPath ? get(configSchema, originalPath, {}) : configSchema).filter((key) => {
      if (!isUnique) return true;
      return get(config, getPathString([path, key])) === undefined;
    });
  }, [path, config]);

  const filteredOptions = useMemo(
    () => data.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim())),
    [search, data]
  );

  const options = useMemo(
    () =>
      filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
          <FieldName name={item} />
        </Combobox.Option>
      )),
    [filteredOptions]
  );

  const handleOpen = () => {
    if (data.length > 1) {
      return combobox.toggleDropdown();
    }

    return handleSubmit(data[0]);
  };

  const getRenamedKey = (val: string) => {
    const renameRegex = /{(.*)}/;
    const match = val.match(renameRegex);

    if (!match) return val;

    const key = match[1];
    const current = path ? get(config, path, {}) : config;
    const index = Object.keys(current).filter((item) => item.startsWith(key)).length + 1;
    return val.replace(renameRegex, `${key}-${index}`);
  };

  const handleSubmit = (val: string) => {
    const templatePath = getPathString([originalPath, val]);
    const template = cloneDeep(get(configSchema, templatePath)) as any;

    const replacePattern = replaceValuePatterns.find(({ pattern }) => pattern.test(templatePath));

    if (replacePattern) {
      set(template, replacePattern.path, getEmptyValueByType(get(template, replacePattern.path)));
    }

    const key = getRenamedKey(val);

    setConfig((draft) => {
      set(draft, getPathString([path, key]), withoutValues ? getEmptyValueByType(template) : template);
    });
    onSelect?.(key);
    combobox.closeDropdown();
  };

  if (data.length === 0) return null;

  return (
    <Combobox store={combobox} width={250} position={position || "bottom"} withArrow onOptionSubmit={handleSubmit}>
      <Combobox.Target withAriaAttributes={false}>
        <Box onClick={handleOpen}>{children}</Box>
      </Combobox.Target>

      <Combobox.Dropdown>
        {data.length > 5 && (
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search fields"
          />
        )}
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={300}>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
});
