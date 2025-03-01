import { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { colors } from "@/config/colors";

export interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      {props.icon && <Text style={styles.buttonIcon}>{props.icon}</Text>}
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary["500"],
    padding: 12,
    flexGrow: 1,
    flexBasis: 0,
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.primary["50"],
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonIcon: {
    fontSize: 36,
    marginBottom: 6,
  },
});
