import { ReactNode } from "react";

export type TextContentType = {
  label: string;
  value?: string | number;
  component?: ReactNode;
};
