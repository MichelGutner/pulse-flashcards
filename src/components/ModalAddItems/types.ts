import { ComponentProps } from "react";
import { TextInput } from "react-native";

export type TModalAddItemsProps = {
  visible: boolean;
  onClose: VoidFunction;
  onSave: VoidFunction;
  title: string;
  description: string;
  firstInput: {
    label: string;
    input: ComponentProps<typeof TextInput>;
  };
  secondInput: {
    label: string;
    input: ComponentProps<typeof TextInput>;
  };
  tertiaryInput?: {
    label: string;
    input: ComponentProps<typeof TextInput>;
  };
};
