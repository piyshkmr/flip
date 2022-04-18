import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableNativeFeedback,
} from "react-native";

import sanityConfig from "../utilities/sanityConfig";
import imageUrlBuilder from "@sanity/image-url";
import { colors } from "../utilities/constants";

const builder = imageUrlBuilder(sanityConfig);

const Book = ({ book, onPress }) => {
  // create url
  function urlFor(source) {
    return builder.image(source).height(200);
  }

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.book}>
        <Image
          source={{ uri: urlFor(book.image).url() }}
          resizeMode="cover"
          style={styles.bookImage}
        />
        <Text numberOfLines={2} style={styles.title}>
          {book.name}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Book;

const styles = StyleSheet.create({
  book: {
    width: "48%",
    marginBottom: 14,
    backgroundColor: colors.bgLight,
    padding: 12,
    borderRadius: 14,
  },
  bookImage: {
    marginBottom: 8,
    width: "100%",
    height: 200,
    borderRadius: 14,
  },
  title: {
    fontWeight: "700",
    fontSize: 15,
    color: colors.text,
  },
});
