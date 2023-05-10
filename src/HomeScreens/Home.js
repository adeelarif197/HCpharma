// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Dimensions,
//   FlatList,
//   ScrollView,
//   Modal,
// } from 'react-native';
// import React, {useState} from 'react';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import Entypo from 'react-native-vector-icons/Entypo';
// import {Colors} from '../Theme/Colors';
// import SwiperFlatList from 'react-native-swiper-flatlist';
// import Btn from '../components/Btn';

// const Home = ({navigation}) => {
//   const width = Dimensions.get('window').width - 30;
//   const FullWidth = Dimensions.get('window').width;
//   const [categry, setcategry] = useState('');
//   const [ModalVisible, setModalVisible] = useState(false);

//   const Data = [
//     {
//       name: 'Cleaning',
//       img: require('../../assets/clean.png'),
//       size: 60,
//     },
//     // {
//     //   name: 'Plumbing',
//     //   img: require('../../assets/plum.png'),
//     //   size: 60,
//     // },
//     {
//       name: 'Laundary',
//       img: require('../../assets/laundary.png'),
//       size: 40,
//     },
//     // {
//     //   name: 'Car Wash',
//     //   img: require('../../assets/car1.png'),
//     //   size: 40,
//     // },
//     // {
//     //   name: 'Cleaning',
//     //   img: require('../../assets/clean.png'),
//     //   size: 60,
//     // },
//   ];
//   const ListData = [
//     {
//       name: 'Dry Cleaning',
//       price: '$150',
//       off: '20% Off',
//       img: require('../../assets/kitchen.jpg'),
//     },
//     {
//       name: 'Iron Pressing',
//       price: '$150',
//       off: '20% Off',
//       img: require('../../assets/house.jpg'),
//     },
//   ];
//   const SwiperData = [
//     {
//       off: '40% OFF',
//       type: 'Full Car Wash',
//       img: require('../../assets/car.png'),
//     },
//     {
//       off: '40% OFF',
//       type: 'Full Car Wash',
//       img: require('../../assets/car.png'),
//     },
//     {
//       off: '40% OFF',
//       type: 'Full Car Wash',
//       img: require('../../assets/car.png'),
//     },
//   ];
//   const SwiperStyle = ({item}) => {
//     return (
//       <View
//         style={{
//           width: FullWidth,
//           alignItems: 'center',
//         }}>
//         <View style={[styles.swiperCard, {width: width}]}>
//           <View>
//             <Text
//               style={{fontSize: 25, fontWeight: 'bold', color: Colors.white}}>
//               {item.off}
//             </Text>
//             <Text style={{color: Colors.white, fontSize: 16}}>{item.type}</Text>
//             <TouchableOpacity style={{marginTop: 20}}>
//               <Text style={styles.btn}>BOOK NOW</Text>
//             </TouchableOpacity>
//           </View>
//           <Image
//             source={item.img}
//             style={{height: 90, width: 150}}
//             resizeMode="cover"
//           />
//         </View>
//       </View>
//     );
//   };
//   const ItemStyle = ({item, index}) => {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <TouchableOpacity
//           onPress={() => {
//             if (item.name == 'Laundary') {
//               navigation.navigate('Laundary');
//             }
//           }}>
//           <View
//             style={{
//               alignItems: 'center',
//               backgroundColor: Colors.purelightblue,
//               marginHorizontal: 15,
//               width: 70,
//               height: 70,
//               borderRadius: 35,
//               justifyContent: 'center',
//             }}>
//             <Image
//               source={item.img}
//               resizeMode="stretch"
//               style={{
//                 height: item.size,
//                 width: item.size,
//                 marginVertical: 8,
//               }}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text>{item.name}</Text>
//       </View>
//     );
//   };
//   const ListStyle = ({item}) => {
//     return (
//       <TouchableOpacity onPress={() => setcategry(item.name) + toggleModal()}>
//         <View style={styles.ListView}>
//           <Image
//             source={item.img}
//             style={{height: 80, width: 80, borderRadius: 7}}
//           />
//           <View style={{marginLeft: 10}}>
//             <Text
//               style={{color: Colors.black, fontSize: 16, fontWeight: '500'}}>
//               {item.name}
//             </Text>
//             <Text
//               style={{
//                 color: Colors.black,
//                 fontWeight: 'bold',
//                 fontSize: 16,
//                 marginVertical: 2,
//               }}>
//               {item.price}
//             </Text>
//             <Text style={{color: 'red', fontSize: 13, fontWeight: '500'}}>
//               {item.off}
//             </Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   const ModalStyle = () => {
//     return (
//       <View style={{backgroundColor: Colors.white, flex: 1}}>
//         <TouchableOpacity onPress={() => toggleModal()}>
//           <Entypo
//             name="cross"
//             size={30}
//             color={Colors.black}
//             style={{marginVertical: 10, marginHorizontal: 20}}
//           />
//         </TouchableOpacity>
//         <Text
//           style={{
//             textAlign: 'center',
//             fontSize: 17,
//             fontWeight: 'bold',
//             color: Colors.black,
//             marginVertical: 10,
//           }}>
//           Cleaner Shop
//         </Text>
//         <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
//           <Text style={{color: Colors.black, fontWeight: '500'}}>
//             {categry}
//           </Text>
//           <Text style={{marginTop: 10}}>
//             At Our Shop Drycleaning is very similar to regular home laundering,
//             but a liquid solvent is used to clean your clothes instead of water
//             and detergent
//           </Text>
//         </View>
//       </View>
//     );
//   };
//   const toggleModal = () => {
//     setModalVisible(!ModalVisible);
//   };
//   return (
//     <View style={{flex: 1, backgroundColor: Colors.white}}>
//       <View style={styles.headerbox}>
//         <TouchableOpacity style={styles.icon1}>
//           <Fontisto name="nav-icon-grid-a" size={25} color={Colors.black} />
//         </TouchableOpacity>
//         <View style={{width: '60%'}}>
//           <Text>Address</Text>
//           <Text>4517 Washington Ave</Text>
//         </View>
//         <TouchableOpacity style={styles.icon2}>
//           <AntDesign name="search1" size={30} color={Colors.black} />
//         </TouchableOpacity>
//       </View>
//       <View style={{alignItems: 'center', marginVertical: 15}}>
//         <SwiperFlatList
//           index={0}
//           showPagination={true}
//           data={SwiperData}
//           renderItem={SwiperStyle}
//           paginationActiveColor={Colors.darkblue}
//           paginationDefaultColor={'lightgrey'}
//           paginationStyleItem={{height: 8, width: 8, marginHorizontal: 3}}
//           paginationStyle={{top: '105%'}}
//         />
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           marginHorizontal: 20,
//           marginTop: 15,
//         }}>
//         <Text style={{color: Colors.black}}>ALL CATEGORIES</Text>
//         <Text style={{color: Colors.black}}>See All</Text>
//       </View>
//       <View>
//         <FlatList
//           style={{marginTop: 15}}
//           data={Data}
//           renderItem={ItemStyle}
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>
//       <View style={{marginTop: 20, width: '90%', alignSelf: 'center'}}>
//         <Text style={{color: Colors.black, fontWeight: '500'}}>
//           RECOMMENDED
//         </Text>
//         <Text>Based on your recent activities</Text>
//       </View>
//       <FlatList data={ListData} renderItem={ListStyle} />

//       <Modal
//         visible={ModalVisible}
//         animationInTiming={100}
//         animationOutTiming={100}
//         animationIn={'zoomIn'}
//         animationOut={'zoomOut'}
//         backdropOpacity={0}
//         onBackdropPress={toggleModal}
//         onBackButtonPress={toggleModal}>
//         <ModalStyle />
//       </Modal>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   headerbox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   icon1: {
//     marginHorizontal: 20,
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderColor: Colors.gray,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon2: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderColor: Colors.gray,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   ListView: {
//     flexDirection: 'row',
//     width: '95%',
//     alignSelf: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.lightgrey,
//     paddingVertical: 15,
//     borderRadius: 7,
//     paddingLeft: 10,
//     marginVertical: 10,
//   },
//   btn: {
//     backgroundColor: Colors.darkblue,
//     color: Colors.white,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     textAlign: 'center',
//   },
//   swiperCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: Colors.lightblue,
//     paddingHorizontal: '5%',
//     paddingVertical: 20,
//     borderRadius: 12,
//     // marginHorizontal: 15,
//   },
// });


import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TopFlatlist from '../components/TopFlatlist'
import MiddleFlatList from '../components/MiddleFlatList'
import BottomFlatList from '../components/BottomFlatList'
import { useNavigation } from '@react-navigation/native';


const DATA = [
  {
    id: 1,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/tablet.png'),
    names: "Tablets",
    uri: require('../assets/images/bline.png'),
    title: "B-LINE MEDICAL",
    rating: "4.9",
  },
  {
    id: 2,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/syrup.png'),
    names: "Syrup",
    uri: require('../assets/images/ccure.png'),
    title: "C-Cure Pharmacy",
    rating: "5.0",
  },
  {
    id: 3,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/surgical.png'),
    names: "Surgical Items",
    uri: require('../assets/images/bline.png'),
    title: "B-LINE MEDICAL",
    rating: "4.9",
  },
  {
    id: 4,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/injection.png'),
    names: "Injections",
    uri: require('../assets/images/ccure.png'),
    title: "C-Cure Pharmacy",
    rating: "4.9",
  },
  {
    id: 5,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/syrup.png'),
    names: "Syrup",
    uri: require('../assets/images/bline.png'),
    title: "B-LINE MEDICAL",
    rating: "2.9",
  },
  {
    id: 6,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/surgical.png'),
    names: "Surgical Items",
    uri: require('../assets/images/ccure.png'),
    title: "C-Cure Pharmacy",
    rating: "3.9",
  },
  {
    id: 7,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/tablet.png'),
    names: "Tablets",
    uri: require('../assets/images/bline.png'),
    title: "B-LINE MEDICAL",
    rating: "5.0",
  },
  {
    id: 8,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/injection.png'),
    names: "Injections",
    uri: require('../assets/images/ccure.png'),
    title: "C-Cure Pharmacy",
    rating: "4.9",
  },
  {
    id: 9,
    image: require('../assets/images/mask.png'),
    icon: require('../assets/images/surgical.png'),
    names: "Surgical Items",
    uri: require('../assets/images/bline.png'),
    title: "B-LINE MEDICAL",
    rating: "5.0",
  },

];






class Home extends Component {

  render() {
  
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('NavBar')} >
            <Icon style={styles.headerIcon} name="text" size={30}></Icon>
          </TouchableOpacity>
          <FontAwesome style={styles.headerBell} name="bell" size={25}></FontAwesome>
          <Text style={styles.headerText}>Home</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
          <FontAwesome style={styles.cart} name="shopping-cart" size={25}></FontAwesome>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.search} >
            <Fontisto name="search" style={styles.searchIcon} size={20} color="black" />
            <TextInput
              placeholder="Search Product or Pharmacy Store"
              placeholderTextColor="grey"
              style={styles.searchText}
            />
          </View>

          <View style={styles.welcome}>
            <Text style={styles.wtext1} >
              <Text style={styles.wtext2}>Good Morning, </Text>
            Malik
            </Text>
          </View>

          <View style={{ marginTop: 5 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              renderItem={({ item }) => (
                <TopFlatlist image={item.image} />
              )}
              keyExtractor={item => item.id}
            />
          </View>

          <View style={styles.tip}>
            <Text style={styles.tipText}>Tips of the day</Text>
            <Foundation style={styles.tipIcon} name="lightbulb" size={25}></Foundation>
          </View>


          <View style={styles.tips}>
            <Text style={styles.wtext}>
              An apple a day keeps the doctor away
            </Text>
          </View>

          <View style={styles.tip}>
            <Text style={styles.tipText}>Categories</Text>
            <Icon style={styles.tipIcon} name="menu" size={25}></Icon>
          </View>

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              renderItem={({ item }) => (
                <MiddleFlatList icon={item.icon} names={item.names} />
              )}
              keyExtractor={item => item.id}
            />
          </View>

          <View style={styles.tip}>
            <Text style={styles.tipText}>Pharmacies</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <BottomFlatList uri={item.uri} name={item.name} title={item.title} rating={item.rating}/>
            )}
            keyExtractor={item => item.id}
          />

        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginHorizontal: 17,
    flexDirection: "row",
  },

  headerIcon: {
    color: "green",
    marginTop: 10,
    // marginLeft: 10
    flex: 1,
  },

  headerBell: {
    color: "green",
    marginTop: 15,
    // marginLeft: 10
    flex: 0.4,
  },

  headerText: {
    color: "green",
    marginTop: 13,
    // marginLeft: 70,
    flex: 3,
    fontSize: 20,
    textAlign: "center",
  },

  cart: {
    color: "green",
    marginTop: 15,
    // marginLeft: 100
    
  },

  search: {
    height: 45,
    marginTop: 10,
    margin: 10,
    borderWidth: 2,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderColor: 'grey',
    marginVertical: 4,
    marginHorizontal: 25,
    borderBottomLeftRadius: 60,
    textAlign: "center",
    flexDirection: "row",
  },

  searchIcon: {
    marginTop: 8,
    marginLeft: 10,
    color: "grey"
  },

  searchText: {
    marginStart: 20,
    flex: 1,
  },

  welcome: {
    marginHorizontal: 25,
    flexDirection: "row",
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    // borderColor: 'grey',
    // marginVertical: 4,
    marginTop: 10,
    borderBottomLeftRadius: 60,
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"

  },

  tips: {
    marginHorizontal: 25,
    flexDirection: "row",
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    marginTop: 3,
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"

  },

  wtext1: {
    fontSize: 20,
    fontWeight: "bold"
  },

  wtext2: {
    color: "green"
  },

  tip: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10
  },

  tipText: {
    flex: 0.9,
    alignItems: "flex-start",
    fontWeight: "bold",
    fontSize: 16,
    color: "green"
  },

  tipIcon: {
    color: "green",
    flex: 0.1,
    alignItems: "flex-end",
  },

  wtext: {
    fontSize: 18,
    fontWeight: "bold"
  },


});




export default Home;