import { useConfigAtom } from "@/atoms/config";
import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Stack } from "@mantine/core";
import { IconBrandDocker } from "@tabler/icons-react";
import { isArray, isEmpty } from "lodash-es";
import { memo, useMemo } from "react";

export const DockerExport = memo(() => {
  const { config } = useConfigAtom();

  const flatten = (obj: any, prefix = ""): Record<string, any> => {
    return Object.keys(obj).reduce((acc: Record<string, any>, key) => {
      const value = obj[key];
      const path = `${prefix}${key}`.toLocaleLowerCase();

      if (isArray(value)) {
        if (typeof value[0] === "object") {
          value.forEach((item, index) => {
            acc = {
              ...acc,
              ...flatten(item, `${path}[${index}].`),
            };
          });
        } else {
          acc[path] = value.join(",");
        }
      } else if (typeof value === "object" && value !== null) {
        acc = {
          ...acc,
          ...flatten(value, `${path}.`),
        };
      } else if (typeof value === "boolean" && value) {
        acc[path] = "true";
      } else {
        acc[path] = value;
      }

      return acc;
    }, {});
  };

  const flattenConfig = useMemo(() => flatten(config, "traefik."), [config]);

  const dockerConfig = useMemo(
    () =>
      Object.keys(flattenConfig)
        .map((key) => {
          const value = flattenConfig[key];
          if (isEmpty(value)) return null;
          return `- ${key}=${value}`;
        })
        .filter(Boolean)
        .join("\n"),
    [flattenConfig]
  );

  return (
    <Stack p="md">
      <CodeHighlightTabs
        code={[
          {
            fileName: "compose.yml",
            code: dockerConfig,
            language: "yaml",
            icon: <IconBrandDocker size={16} />,
          },
        ]}
      />
    </Stack>
  );
});
