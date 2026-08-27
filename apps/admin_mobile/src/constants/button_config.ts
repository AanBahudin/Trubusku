import { Colors } from "@/themes/Colors";
import { ViewStyle } from "react-native";

const buttonVariant: Record<string, ViewStyle> = {
  default: {
    backgroundColor: Colors.primary[500],
  },
  disabled: {
    backgroundColor: Colors.secondary[400]
  },
  ghost: {
    backgroundColor: "transparent"
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary[300],
  },
  danger: {
    backgroundColor: Colors.danger,
  },
  icon: {
    width: 40,
    height: 40,
    // paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary[500],
  },
};

const buttonSize: Record<string, ViewStyle> = {
  sm: {
    paddingVertical: 8,
  },
  md: {
    paddingVertical: 12,
  },
  lg: {
    paddingVertical: 16,
  },
  xl: {
    paddingVertical: 20,
  },
};

export {buttonSize, buttonVariant}