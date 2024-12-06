import { useConfigAtom } from "@/atoms/config";
import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Stack } from "@mantine/core";
import { IconFile } from "@tabler/icons-react";
import { stringify as yamlStringify } from "yaml";
import { memo, useMemo } from "react";
import { stringify as tomlStringify } from "smol-toml";

export const FileExport = memo(() => {
  const { config } = useConfigAtom();

  const yamlConfig = useMemo(() => yamlStringify(config), [config]);
  const tomlConfig = useMemo(() => tomlStringify(config), [config]);

  return (
    <Stack p="md">
      <CodeHighlightTabs
        code={[
          {
            fileName: "config.yml",
            code: yamlConfig,
            language: "yaml",
            icon: <IconFile size={16} />,
          },
          {
            fileName: "config.toml",
            code: tomlConfig,
            language: "toml",
            icon: <IconFile size={16} />,
          },
        ]}
      />
    </Stack>
  );
});
