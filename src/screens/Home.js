import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';


const Home = () => {
  return (

    <View style={styles.container}>

      {/* Header Start */}
      <View style={styles.header}>
        <View style={styles.fungyRow}>

          <Text style={styles.fungy}>Fungy</Text>

          <View style={styles.viewstyle}>
            <Feather name='search' size={10} style={styles.icon} />
            <TextInput
              style={styles.textinput}
              placeholder='search here'
              placeholderTextColor="#000"

            />

          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Text style={styles.explore}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.myItems}>My items</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.following}>Following</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.activity}>Activity</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.activity}>How its Works</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.activity}>Community</Text>
            </TouchableOpacity>

          </ScrollView>


          <TouchableOpacity>
            <View style={styles.box}>
              <Text style={styles.boxtext}>0 TOKENS</Text>
            </View>

          </TouchableOpacity>

          <View style={styles.profileImg}>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://i.postimg.cc/sD3t6qPm/IMG-20210723-234235-1.jpg' }}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>

        {/* Header End */}
      </View>



      <Text style={styles.headertext}>Create your collection</Text>


      <View style={styles.rectColumnRow}>
        <View style={styles.rectColumn}>
          <View style={styles.box1}>
            <Text style={styles.loremIpsum3}>
              JPG, PNG,GIF,WEBP,MP4 or MP3, Max 100mb
            </Text>
            <Text style={styles.loremIpsum4}>(620 x 620 recommended)</Text>
            <View style={styles.button}><Text style={{ fontSize: 10, color: '#fff', fontWeight: '800', alignSelf: 'center', marginTop: 2 }}>CHOOSE FILE</Text></View>
          </View>

          <Text style={styles.uploadCover}>Upload cover</Text>
          <View style={styles.box2}>

            <Text style={styles.loremIpsum3}>
              JPG, PNG,GIF,WEBP,MP4 or MP3, Max 100mb
            </Text>
            <Text style={styles.loremIpsum4}>(620 x 620 recommended)</Text>
            <View style={styles.button2}><Text style={{ fontSize: 10, color: '#fff', fontWeight: '800', alignSelf: 'center', marginTop: 2 }}>CHOOSE FILE</Text></View>
          </View>
          <Text style={{ fontSize: 8, marginLeft: 5 }}>PLease add cover Image to your media files</Text>


          <Text style={styles.uploadCover}>Item Category</Text>

          {/* Item Categories */}
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <SimpleLineIcons name="game-controller" style={{ marginTop: 3 }} />
              <Text style={{ marginLeft: 5 }}>
                Art
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <MaterialIcons name="18mp" style={{ marginTop: 3, fontSize: 15 }} />
              <Text style={{ marginLeft: 5 }}>
                NSWF
              </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <FontAwesome name="money" style={{ marginTop: 3 }} />
              <Text style={{ marginLeft: 5 }}>
                Defi
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <MaterialIcons name="photo-camera" style={{ marginTop: 3, fontSize: 15 }} />
              <Text style={{ marginLeft: 5 }}>
                Photography
              </Text>
            </View>
          </TouchableOpacity>



          <View style={{ marginLeft: 100, marginTop: -115 }}>
            <TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Fontisto name="applemusic" style={{ marginTop: 3, fontSize: 15 }} />
                <Text style={{ marginLeft: 5 }}>
                  Music
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <MaterialCommunityIcons
                  name="baby-face" style={{ marginTop: 3, fontSize: 15 }} />
                <Text style={{ marginLeft: 5 }}>
                  Memes
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <MaterialCommunityIcons name="web" style={{ marginTop: 3, fontSize: 15 }} />
                <Text style={{ marginLeft: 5 }}>
                  Domains
                </Text>
              </View>
            </TouchableOpacity>
          </View>



          <View style={{ marginLeft: 210, marginTop: -89, width: '100%' }}>
            <TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <SimpleLineIcons name="game-controller" style={{ marginTop: 3 }} />
                <Text style={{ marginLeft: 5 }}>
                  Game
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <FontAwesome5 name="hand-peace" style={{ marginTop: 3, fontSize: 15 }} />
                <Text style={{ marginLeft: 5 }}>
                  Punks
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Fontisto name="webpack" style={{ marginTop: 3, fontSize: 15 }} />
                <Text style={{ marginLeft: 5 }}>
                  Metaverces
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Item Categories end */}
          <ScrollView>

          </ScrollView>
          <View>

            <Text style={styles.enterprice}>Enter price to allow users instantly purchases your nft</Text>

            <View style={{ flexDirection: 'row', margin: 20 }}>
              <View style={{ width: 80, height: 80, borderWidth: 1, borderColor: 'skyblue', borderRadius: 12 }}>
                <Foundation name="price-tag" style={{ fontSize: 35, alignSelf: 'center', marginTop: 10, color: 'skyblue' }} />
                <Text style={{ fontSize: 10, alignSelf: 'center', fontWeight: '800', color: '#000' }}>Fixed Price</Text>
              </View>


              <View style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#000', borderRadius: 12, marginLeft: 30 }}>
                <MaterialCommunityIcons name="timelapse" style={{ fontSize: 35, alignSelf: 'center', marginTop: 10, color: '#000' }} />
                <Text style={{ fontSize: 10, alignSelf: 'center', fontWeight: '800', color: '#000' }}>Timed Auctions</Text>

              </View>
            </View>

            <Text style={styles.enterprice2}>Price</Text>

            <TextInput
              multiline={true}
              blurOnSubmit={true}
              placeholder='0.045'
              placeholderTextColor='#000'
              style={{ fontSize: 10, marginTop: -7 }}
            />
            <Text style={{ fontSize: 10, marginTop: -12 }}>searvice fees <Text style={{ color: 'skyblue' }}>2.5%</Text></Text>
            <Text style={{ fontSize: 10, marginTop: -1 }}>You will receive <Text style={{ color: '#000' }}>0.053ETH</Text>  <Text style={{ color: 'skyblue' }}>$106.58</Text></Text>
          </View>
        </View>

        <View style={styles.box3}>
          <Text style={styles.loremIpsum6}>Upload File to Preview your</Text>
          <Text style={styles.brandNewNft}>brand new NFT</Text>
        </View>
      </View>

      <View style={styles.uploadFileRow}>
        <Text style={styles.uploadFile}>Upload file</Text>
        <Text style={styles.preview}>Preview</Text>
      </View>



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headertext: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 20,
    width: 139,
    marginTop: 15,
    marginLeft: 12,
    fontWeight: 'bold'
  },
  box1: {
    width: 196,
    height: 91,
    backgroundColor: "#E6E6E6",
    borderRadius: 10
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 7,
    marginTop: 20,
    marginLeft: 27
  },


  loremIpsum4: {
    color: "#121212",
    fontSize: 9,
    marginTop: 12,
    marginLeft: 45
  },
  button: {
    height: 21,
    width: 70,
    marginTop: 9,
    marginLeft: 65,
    backgroundColor: '#5C40F7',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 12,

  },
  button2: {
    height: 21,
    width: 70,
    marginTop: 9,
    marginLeft: 65,
    backgroundColor: '#5C40F7',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 12,

  },
  uploadCover: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 10
  },
  enterprice: {
    color: "#121212",
    marginTop: 40,
    fontSize: 10,
    width: '130%',
    fontWeight: 'bold'
  },
  enterprice2: {
    color: "#121212",
    marginTop: 10,
    fontSize: 10,
    width: '130%',
    fontWeight: 'bold'
  },
  box2: {
    width: 196,
    height: 97,
    backgroundColor: "#E6E6E6",
    marginTop: 9,
    borderRadius: 10
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 7,
    marginTop: 17,
    marginLeft: 27
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    marginTop: 13,
    marginLeft: 36
  },

  rectColumn: {
    width: 196
  },
  box3: {
    width: 125,
    height: 149,
    backgroundColor: "#E6E6E6",
    marginLeft: 9,
    borderRadius: 10
  },
  loremIpsum6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    marginTop: 45,
    marginLeft: 9
  },
  brandNewNft: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 8,
    marginTop: 10,
    marginLeft: 36
  },
  rectColumnRow: {
    height: 225,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 12,
    marginRight: 18
  },
  uploadFile: {
    color: "#121212"
  },
  preview: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 135,
    marginTop: 8
  },
  uploadFileRow: {
    height: 24,
    flexDirection: "row",
    marginTop: -256,
    marginLeft: 15,
    marginRight: 93
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginTop: 0
  },
  fungy: {
    color: "#121212",
    fontSize: 17,
    marginTop: 4,
    fontWeight: 'bold',
    marginRight: 8

  },
  explore: {
    color: "#121212",
    fontSize: 12,
    marginLeft: 5,
    marginTop: 8
  },
  myItems: {
    color: "#121212",
    fontSize: 12,
    marginLeft: 5,
    marginTop: 8
  },
  following: {
    color: "#121212",
    fontSize: 12,
    marginLeft: 5,
    marginTop: 8
  },
  activity: {
    color: "#121212",
    fontSize: 12,
    marginLeft: 5,
    marginTop: 8
  },
  box: {
    width: 71,
    height: 24,
    borderWidth: 1,
    borderColor: "#3498DB",
    marginLeft: 1,
    marginTop: 4,
    borderRadius: 8,
    marginRight: -5
  },
  boxtext: {
    color: "#3498DB",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 6,
    textAlign: 'center'
  },
  ellipse: {
    top: 8,
    left: 8,
    width: 27,
    height: 24,
    position: "absolute"
  },
  image: {
    top: 0,
    left: 8,
    width: 35,
    height: 35,
    position: "absolute",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000"
  },
  profileImg: {
    width: 40,
    height: 40,
    marginLeft: 8
  },
  fungyRow: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 12,
    marginTop: 11
  },
  loremIpsum7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 8,
    marginTop: 318,
    marginLeft: 12
  },
  itemCategory: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 21,
    marginLeft: 13
  },
  viewstyle: {

    backgroundColor: 'skyblue',
    height: 30,
    width: 80,
    borderRadius: 8,
    horizontal: 'true'
  },

  textinput: {
    fontSize: 10,
    marginTop: -30,
    marginLeft: 15,

  },

  icon: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    marginRight: 60

  },

});

export default Home;