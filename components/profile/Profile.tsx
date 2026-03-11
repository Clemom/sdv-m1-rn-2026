import * as Device from "expo-device";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Mon Username</Text>
      <Text>
        OS : {Platform.OS} {Device.osVersion}{" "}
        {Platform.select({ ios: "by Apple", android: "by Someone" })}
      </Text>
      <Text>
        {Device.manufacturer} : {Device.modelName}
      </Text>
      <Text>
        Résolution : {Dimensions.get("screen").width} x{" "}
        {Dimensions.get("screen").height} ({Dimensions.get("screen").scale})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
