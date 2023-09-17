import { Image, StyleSheet, View } from "react-native";

export default function Avatar() {
  return (
    <View>
      <Image
        style={styles.imagem}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "contain",
  },
});
