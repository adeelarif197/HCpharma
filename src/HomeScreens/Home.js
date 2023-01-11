import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors} from '../Theme/Colors';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Btn from '../components/Btn';

const Home = ({navigation}) => {
  const width = Dimensions.get('window').width - 30;
  const FullWidth = Dimensions.get('window').width;
  const Data = [
    {
      name: 'Cleaning',
      img: require('../../assets/clean.png'),
      size: 60,
    },
    // {
    //   name: 'Plumbing',
    //   img: require('../../assets/plum.png'),
    //   size: 60,
    // },
    {
      name: 'Laundary',
      img: require('../../assets/laundary.png'),
      size: 40,
    },
    // {
    //   name: 'Car Wash',
    //   img: require('../../assets/car1.png'),
    //   size: 40,
    // },
    // {
    //   name: 'Cleaning',
    //   img: require('../../assets/clean.png'),
    //   size: 60,
    // },
  ];
  const ListData = [
    {
      name: 'Dry Cleaning',
      price: '$150',
      off: '20% Off',
      img: require('../../assets/kitchen.jpg'),
    },
    {
      name: 'Iron Pressing',
      price: '$150',
      off: '20% Off',
      img: require('../../assets/house.jpg'),
    },
    {
      name: 'Sofa Cleaning',
      price: '$150',
      off: '20% Off',
      img: require('../../assets/sofa.jpg'),
    },
  ];
  const SwiperData = [
    {
      off: '40% OFF',
      type: 'Full Car Wash',
      img: require('../../assets/car.png'),
    },
    {
      off: '40% OFF',
      type: 'Full Car Wash',
      img: require('../../assets/car.png'),
    },
    {
      off: '40% OFF',
      type: 'Full Car Wash',
      img: require('../../assets/car.png'),
    },
  ];
  const SwiperStyle = ({item}) => {
    return (
      <View
        style={{
          width: FullWidth,
          alignItems: 'center',
        }}>
        <View style={[styles.swiperCard, {width: width}]}>
          <View>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: Colors.white}}>
              {item.off}
            </Text>
            <Text style={{color: Colors.white, fontSize: 16}}>{item.type}</Text>
            <TouchableOpacity style={{marginTop: 20}}>
              <Text style={styles.btn}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={item.img}
            style={{height: 90, width: 150}}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  };
  const ItemStyle = ({item, index}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            if (item.name == 'Laundary') {
              navigation.navigate('Laundary');
            }
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: Colors.purelightblue,
              marginHorizontal: 15,
              width: 70,
              height: 70,
              borderRadius: 35,
              justifyContent: 'center',
            }}>
            <Image
              source={item.img}
              resizeMode="stretch"
              style={{
                height: item.size,
                width: item.size,
                marginVertical: 8,
              }}
            />
          </View>
        </TouchableOpacity>
        <Text>{item.name}</Text>
      </View>
    );
  };
  const ListStyle = ({item}) => {
    return (
      <View style={styles.ListView}>
        <Image
          source={item.img}
          style={{height: 80, width: 80, borderRadius: 7}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: Colors.black, fontSize: 16, fontWeight: '500'}}>
            {item.name}
          </Text>
          <Text
            style={{
              color: Colors.black,
              fontWeight: 'bold',
              fontSize: 16,
              marginVertical: 2,
            }}>
            {item.price}
          </Text>
          <Text style={{color: 'red', fontSize: 13, fontWeight: '500'}}>
            {item.off}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={styles.headerbox}>
        <TouchableOpacity style={styles.icon1}>
          <Fontisto name="nav-icon-grid-a" size={25} color={Colors.black} />
        </TouchableOpacity>
        <View style={{width: '60%'}}>
          <Text>Address</Text>
          <Text>4517 Washington Ave</Text>
        </View>
        <TouchableOpacity style={styles.icon2}>
          <AntDesign name="search1" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginVertical: 15}}>
        <SwiperFlatList
          index={0}
          showPagination={true}
          data={SwiperData}
          renderItem={SwiperStyle}
          paginationActiveColor={Colors.darkblue}
          paginationDefaultColor={'lightgrey'}
          paginationStyleItem={{height: 8, width: 8, marginHorizontal: 3}}
          paginationStyle={{top: '105%'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 15,
        }}>
        <Text style={{color: Colors.black}}>ALL CATEGORIES</Text>
        <Text style={{color: Colors.black}}>See All</Text>
      </View>
      <View>
        <FlatList
          style={{marginTop: 15}}
          data={Data}
          renderItem={ItemStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{marginTop: 20, width: '90%', alignSelf: 'center'}}>
        <Text style={{color: Colors.black, fontWeight: '500'}}>
          RECOMMENDED
        </Text>
        <Text>Based on your recent activities</Text>
      </View>
      <FlatList data={ListData} renderItem={ListStyle} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon1: {
    marginHorizontal: 20,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon2: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListView: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightgrey,
    paddingVertical: 15,
    borderRadius: 7,
    paddingLeft: 10,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: Colors.darkblue,
    color: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    textAlign: 'center',
  },
  swiperCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightblue,
    paddingHorizontal: '5%',
    paddingVertical: 20,
    borderRadius: 12,
    // marginHorizontal: 15,
  },
});
