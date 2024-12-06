import { NumberInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { memo } from "react";

export type HttpRouter = {
  entryPoints: Array<string>;
  middlewares: Array<string>;
  service: string;
  rule: string;
  ruleSyntax: string;
  priority: number;
  tls: {
    options: string;
    certResolver: string;
    domains: Array<{
      main: string;
      sans: Array<string>;
    }>;
  };
};

export type HttpRouterProps = {
  name: string;
};

export const HttpRouter = memo(() => {
  const form = useForm<Partial<HttpRouter>>({
    initialValues: {},
  });

  return (
    <Stack>
      {form.values.service && <TextInput label="Service" {...form.getInputProps("service")} />}
      {form.values.rule && <TextInput label="Rule" {...form.getInputProps("rule")} />}
      {form.values.priority && <NumberInput label="Priority" {...form.getInputProps("priority")} />}
      {form.values.ruleSyntax && <TextInput label="Rule Syntax" {...form.getInputProps("ruleSyntax")} />}
      {form.values.entryPoints && (
        <Stack>
          {form.values.entryPoints.map((_, index) => (
            <TextInput key={index} label="Entry Point" {...form.getInputProps(`entryPoints.${index}`)} />
          ))}
        </Stack>
      )}
    </Stack>
  );
});
