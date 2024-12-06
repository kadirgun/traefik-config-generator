import { ActionIcon, TextInput, type TextInputProps } from "@mantine/core";
import { memo } from "react";
import { getHotkeyHandler, useInputState } from "@mantine/hooks";
import { IconCheck } from "@tabler/icons-react";

export type SubmitableInputProps = {
  value: string;
  onChange: (value: string) => void;
} & Omit<TextInputProps, "value" | "onChange">;

export const SubmitableInput = memo(({ value, onChange, ...props }: SubmitableInputProps) => {
  const [changedValue, setChangedValue] = useInputState(value);

  const handleSubmit = () => {
    onChange(changedValue);
  };

  return (
    <TextInput
      value={changedValue}
      onChange={setChangedValue}
      rightSection={
        <ActionIcon color="gray" variant="light" onClick={handleSubmit}>
          <IconCheck size={16} />
        </ActionIcon>
      }
      onKeyDown={getHotkeyHandler([["Enter", handleSubmit]])}
      {...props}
    />
  );
});
