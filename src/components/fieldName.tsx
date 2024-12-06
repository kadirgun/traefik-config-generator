import { memo } from "react";

export type FieldNameProps = {
  name: string;
};
export const FieldName = memo(({ name }: FieldNameProps) => {
  return name.replace("{", "").replace("}", "");
});
