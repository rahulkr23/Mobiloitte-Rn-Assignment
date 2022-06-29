import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const  Breeds = () => {
  return (
    <View style={styles.container}>
      <ScrollView>

        {/* Card  */}
        <View style={{}}>
          <TouchableOpacity>
            <View style={styles.container2}>
              <Text style={styles.sortByNew}>Sort by: New</Text>
              <View style={styles.card}>
                <View style={styles.breedNameRow}>
                  <Text style={styles.breedName}>Breed name</Text>
                  <Text style={styles.noOfCows}>No. of cows</Text>
                </View>
                <View style={styles.harianaRow}>
                  <Text style={styles.name}>Hariana</Text>
                  <Text style={styles.name1}>25</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>


              </View>
              <Image
                source={{ uri: 'https://i.postimg.cc/Bvmk0QCv/Rectangle-10.png' }}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </View>
          </TouchableOpacity>
          {/* Card end */}


          <TouchableOpacity>
            <View style={styles.container2}>

              <View style={styles.card}>
                <View style={styles.breedNameRow}>
                  <Text style={styles.breedName}>Breed name</Text>
                  <Text style={styles.noOfCows}>No. of cows</Text>
                </View>
                <View style={styles.harianaRow}>
                  <Text style={styles.name}>Hariana</Text>
                  <Text style={styles.name1}>25</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={{ uri: 'https://i.postimg.cc/Bvmk0QCv/Rectangle-10.png' }}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </View>
          </TouchableOpacity>

          {/* Card */}

          <TouchableOpacity>

            <View style={styles.container2}>

              <View style={styles.card}>
                <View style={styles.breedNameRow}>
                  <Text style={styles.breedName}>Breed name</Text>
                  <Text style={styles.noOfCows}>No. of cows</Text>
                </View>
                <View style={styles.harianaRow}>
                  <Text style={styles.name}>Hariana</Text>
                  <Text style={styles.name1}>25</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={{ uri: 'https://i.postimg.cc/Bvmk0QCv/Rectangle-10.png' }}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </View>

          </TouchableOpacity>
          {/* Card end */}



          {/* Card */}
          <TouchableOpacity>
            <View style={styles.container2}>

              <View style={styles.card}>
                <View style={styles.breedNameRow}>
                  <Text style={styles.breedName}>Breed name</Text>
                  <Text style={styles.noOfCows}>No. of cows</Text>
                </View>
                <View style={styles.harianaRow}>
                  <Text style={styles.name}>Hariana</Text>
                  <Text style={styles.name1}>25</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={{ uri: 'https://i.postimg.cc/Bvmk0QCv/Rectangle-10.png' }}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Card end */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  card: {
    top: 10,
    width: 320,
    height: 120,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 0,
    borderRadius: 5,
    elevation: 0,
    



  },
  breedName: {
    fontWeight: 'bold',
    color: "#566573"
  },
  noOfCows: {
    fontWeight: 'bold',
    color: "#566573",
    marginLeft: 26
  },
  breedNameRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 135,
    marginRight: 10
  },
  name: {
    fontWeight: 'bold',
    color: "#121212"
  },
  name1: {

    color: "#121212",
    marginLeft: 75,
    fontWeight: 'bold'
  },
  harianaRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 141,
    marginRight: 39
  },
  viewAll: {
    fontWeight: 'bold',
    color: "rgba(65,117,5,1)",
    marginTop: 39,
    marginLeft: 250
  },
  image: {
    top: 0,
    left: 10,
    width: 100,
    height: 120,
    position: "absolute"
  },
  container2: {
    width: 320,
    height: 130,
    marginTop: 70,
    marginLeft: 20
  },
  sortByNew: {
    fontWeight: "bold",
    color: "#121212",
    marginTop: -30,
    marginLeft: 0
  }
});

export default Breeds;