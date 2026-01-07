import AppHeader from "@/components/AppHeader";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface Watchlist {
  id: string,
  label: string,
}

const initialData: Watchlist[] = [
  {
    id: "1",
    label: "Favorites",
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

interface Pairs {
  id: string,
  name: string,
}

const initialPairs: Watchlist[] = [
  {
    id: "1",
    label: "BTCUSD",
  },
  {
    id: "2",
    label: "ETHUSD"
  }
]


export default function Index() {

  const [visible, setVisible] = useState(true)

  // function expandList() {
  //   console.log(visible)
  //   return setVisible(true);
  // };


  return (
    <View style={styles.container}>
      <AppHeader>
        Watchlists
      </AppHeader>
      <Text style={styles.text}>{initialData[0].label}</Text>
      <Text style={styles.text}>{initialData[1].label}</Text>
      <Text style={styles.text}>{initialData[2].label}</Text>
      <Pressable onPress={() => setVisible(!visible)}>
        <Text style={styles.text}>
          Click Me
        </Text>
      </Pressable>
      {visible &&
        <FlatList
          data={initialPairs}
          renderItem={({ item }) => <Text>{item.label}</Text>} />
      }

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