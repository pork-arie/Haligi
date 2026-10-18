import { Tabs } from "expo-router";

export default function Tabslayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "home" }} />
      <Tabs.Screen name="s" options={{ title: "secondscreen" }} />
      <Tabs.Screen name="third" options={{ title: "thirdscreen" }} />
    </Tabs>
  );
}
