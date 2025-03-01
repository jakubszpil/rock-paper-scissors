import { Stack } from "expo-router";

import { colors } from "@/config/colors";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: colors.neutral["800"],
        statusBarStyle: "light",
        navigationBarColor: colors.neutral["800"],
        headerShown: false,
      }}
    />
  );
}
