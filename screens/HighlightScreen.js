import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import PagerView from "react-native-pager-view";
import Highlight from "../components/Highlight";
import { colors } from "../utilities/constants";
import Loader from "../components/Loader";

const HighlightScreen = ({ route, navigation }) => {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);

  // get the book id
  const { bookId } = route.params;

  const fetchData = async () => {
    const query = encodeURIComponent(
      `*[_type == "highlights" && book._ref == "${bookId}"]`
    );

    const res = await fetch(
      `https://6o4iqhb0.api.sanity.io/v2021-10-21/data/query/production?query=${query}`
    );
    const data = await res.json();
    setHighlights(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [bookId]);

  if (loading) {
    return <Loader />;
  }

  if (highlights.length <= 0) {
    return <Error text="No Highlights Available" iconName="book" />;
  }

  return (
    <View style={styles.container}>
      <PagerView style={{ flex: 1 }} orientation="vertical">
        {highlights &&
          highlights.map((item) => {
            return <Highlight key={item._id} highlight={item} />;
          })}
      </PagerView>
    </View>
  );
};

export default HighlightScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
  },
});
