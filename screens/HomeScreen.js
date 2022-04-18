import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";

import { colors } from "../utilities/constants";
import Book from "../components/Book";
import Loader from "../components/Loader";
import Error from "../components/Error";

const HomeScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // function to fetch books
  const fetchData = async () => {
    const query = '*[_type == "book"]';
    const res = await fetch(
      `https://6o4iqhb0.api.sanity.io/v2021-10-21/data/query/production?query=${query}`
    );
    const data = await res.json();
    setBooks(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItems = ({ item }) => {
    return (
      <Book
        book={item}
        onPress={() => navigation.navigate("highlight", { bookId: item._id })}
      />
    );
  };

  if (loading) {
    return <Loader />;
  }

  if (books.length <= 0) {
    return <Error text="No Books Available" iconName="book" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item._id}
        contentContainerStyle={{
          marginTop: 14,
          paddingHorizontal: 14,
          paddingBottom: 14,
          minHeight: Dimensions.get("screen").height,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        numColumns={2}
        data={books}
        renderItem={renderItems}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
  },
});
