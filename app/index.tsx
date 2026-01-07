import AppHeader from "@/components/AppHeader";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface Watchlist {
  id: string,
  label: string,
}

const initialData: Watchlist[] = [
  {
    id: "1",
    label: "Favorites"
  },
  {
    id: "2",
    label: "Trending"
  },
  {
    id: "3",
    label: "Watching"
  }
]

export default function Index() {

  return (
    <View style={styles.container}>
      <AppHeader>
        Watchlists
      </AppHeader>
      <Text style={styles.text}>{initialData[0].label}</Text>
      <Text style={styles.text}>{initialData[1].label}</Text>
      <Text style={styles.text}>{initialData[2].label}</Text>
      <Pressable>
        <Text style={styles.text}>
          Click Me
        </Text>
      </Pressable>
      <FlatList
        data={initialData}
        renderItem={({ item }) => <Text>{item.label}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gray",
  },
  text: {
    marginTop: 12,
    fontSize: 24,
  }
})