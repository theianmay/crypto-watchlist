import AppHeader from "@/components/AppHeader";
import { StyleSheet, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <AppHeader>
        Watchlists
      </AppHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gray",
  },
})