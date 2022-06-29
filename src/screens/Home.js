import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <View style={styles.container}>

      {/* Row */}

      <View style={styles.rectRow}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={styles.card1}>
            <ImageBackground
              source={require("../assets/images/Vector.png")}
              resizeMode="contain"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
            >
              <Image
                source={require("../assets/images/Vector_(1).png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </ImageBackground>
            <Text style={styles.addNew}>Add new</Text>
          </View>
          <View style={styles.card2}>
            <Image
              source={require("../assets/images/Rectangle_101.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.text1}>Breed 1{"\n"} 20</Text>
          </View>
          <View style={styles.card2}>
            <Image
              source={require("../assets/images/Rectangle_101.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.text1}>Breed 1{"\n"} 20</Text>
          </View>

        </ScrollView>

      </View>



      {/* Row End */}


      <View style={styles.cowsRow}>
        <Text style={styles.cowstext}>Cows</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>

        </TouchableOpacity>

      </View>
      <TouchableOpacity>
        <Text style={styles.explore}>Explore</Text>

      </TouchableOpacity>

      <View style={styles.rect3Row}>
        <View style={styles.box1}>
          <Image
            source={require("../assets/images/Rectangle_19.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.veterinary}>Veterinary</Text>
        </View>
        <View style={styles.rect11Stack}>
          <View style={styles.box2}>
            <Text style={styles.market}>Market</Text>
          </View>
          <Image
            source={require("../assets/images/Rectangle_222.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </View>
      </View>
      <View style={styles.rect9StackRow}>
        <View style={styles.rect9Stack}>
          <View style={styles.box3}>
            <Text style={styles.registration}>Registration</Text>
          </View>
          <Image
            source={require("../assets/images/Rectangle_24.png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
        </View>
        <View style={styles.box4}>
          <Image
            source={require("../assets/images/Rectangle_26.png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
          <Text style={styles.ownershipTransfer}>Ownership Transfer</Text>
        </View>
      </View>
      <View style={styles.image8Stack}>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Vector_(1).png")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
          <Image
            source={require("../assets/images/Vector.png")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card1: {
    width: 120,
    height: 128,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,

  },
  image: {
    width: 53,
    height: 65,
    marginTop: 20,
    marginLeft: 27
  },
  image_imageStyle: {},
  image2: {
    width: 40,
    height: 20,
    marginTop: 23,
    marginLeft: 5
  },
  addNew: {
    color: "#121212",
    marginTop: 15,
    marginLeft: 32,
    fontWeight: 'bold'
  },
  card2: {
    width: 120,
    height: 128,
    backgroundColor: "#E6E6E6",
    marginLeft: 33,
    borderRadius: 5
  },
  image3: {
    width: 120,
    height: 90
  },
  text1: {
    color: "#121212",
    marginTop: 3,
    marginLeft: 40,
    fontWeight: 'bold'
  },
  rectRow: {
    // height: 128,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 10,
    marginRight: 5
  },
  cowstext: {
    color: "#121212",
    fontSize: 16,
    marginTop: 6,
    fontWeight: 'bold'
  },
  seeAll: {
    fontWeight: 'bold',
    color: "#121212",
    marginLeft: 258
  },
  cowsRow: {
    height: 25,
    flexDirection: "row",
    marginTop: -174,
    marginLeft: 10,
    marginRight: 10
  },
  explore: {
    fontWeight: 'bold',
    color: "#121212",
    fontSize: 16,
    marginTop: 182,
    marginLeft: 12
  },
  box1: {
    width: 151,
    height: 160,
    backgroundColor: "#E6E6E6",
    marginTop: 11,
    marginLeft: 5,
    borderRadius: 5
  },
  image4: {
    width: 120,
    height: 110,
    marginTop: 15,
    marginLeft: 12
  },
  veterinary: {
    color: "#121212",
    marginTop: 15,
    marginLeft: 43
  },
  box2: {
    top: 11,
    left: 0,
    width: 151,
    height: 160,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    marginLeft: 5,
    borderRadius: 5
  },
  market: {
    color: "#121212",
    marginTop: 140,
    marginLeft: 53
  },
  image5: {
    top: 0,
    left: 1,
    width: 149,
    height: 159,
    position: "absolute"
  },
  rect11Stack: {
    width: 151,
    height: 171,
    marginLeft: 29
  },
  rect3Row: {
    height: 171,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 10,
    marginRight: 19
  },
  box3: {
    top: 12,
    left: 0,
    width: 151,
    height: 160,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    marginLeft: 5
  },
  registration: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 140,
    marginLeft: 37
  },
  image6: {
    top: 0,
    left: 9,
    width: 151,
    height: 152,
    position: "absolute"
  },
  rect9Stack: {
    width: 160,
    height: 172
  },
  box4: {
    width: 151,
    height: 160,
    backgroundColor: "#E6E6E6",
    marginLeft: 30,
    marginTop: 12,
    borderRadius: 5

  },
  image7: {
    width: 142,
    height: 120,
    marginTop: 4,
    marginLeft: 4
  },
  ownershipTransfer: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 16,
    marginLeft: 18
  },
  rect9StackRow: {
    height: 172,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 10,
    marginRight: 19,
  },
  image8: {
    top: 13,
    left: 2,
    width: 40,
    height: 20,
    position: "absolute",
    tintColor: 'green'
  },
  image9: {
    top: 0,
    left: 0,
    width: 45,
    height: 45,
    position: "absolute",
    tintColor: 'green'
  },
  image8Stack: {
    width: 45,
    height: 45,
    marginTop: 8,
    marginLeft: 286
  }
});

export default Home;