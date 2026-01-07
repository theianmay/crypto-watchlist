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

const initialPairs: Pairs[] = [
  {
    id: "1",
    name: "BTCUSD",
  },
  {
    id: "2",
    name: "ETHUSD"
  }
]

const allPairs: Pairs[] = [
  {
    id: "1",
    name: "BTCUSD",
  },
  {
    id: "2",
    name: "ETHUSD"
  },
  {
    id: "3",
    name: "USDTUSD",
  },
  {
    id: "4",
    name: "XRPUSD"
  },
  {
    id: "5",
    name: "BNBUSD",
  },
  {
    id: "6",
    name: "SOLUSD"
  },
  {
    id: "7",
    name: "USDCUSD",
  },
  {
    id: "8",
    name: "STETHUSD"
  },
  {
    id: "9",
    name: "TRXUSD",
  },
  {
    id: "10",
    name: "DOGEUSD"
  },
]

export default function Index() {

  const [visible1, setVisible1] = useState(true)
  const [visible2, setVisible2] = useState(true)
  const [visible3, setVisible3] = useState(true)


  return (
    <View style={styles.container}>
      <AppHeader>
        Watchlists
      </AppHeader>
      <Pressable onPress={() => setVisible1(!visible1)}>
        <Text style={styles.text}>
          {initialData[0].label}
        </Text>
      </Pressable>
      {visible1 &&
        <FlatList
          data={initialPairs}
          renderItem={({ item }) => <Text>{item.name}</Text>} />}
      <Pressable onPress={() => setVisible2(!visible2)}>
        <Text style={styles.text}>
          {initialData[1].label}
        </Text>
      </Pressable>
      {visible2 &&
        <FlatList
          data={initialPairs}
          renderItem={({ item }) => <Text>{item.name}</Text>} />}
      <Pressable onPress={() => setVisible3(!visible3)}>
        <Text style={styles.text}>
          {initialData[2].label}
        </Text>
      </Pressable>
      {visible3 &&
        <FlatList
          data={initialPairs}
          renderItem={({ item }) => <Text>{item.name}</Text>} />}
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