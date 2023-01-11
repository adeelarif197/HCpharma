import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors} from '../Theme/Colors';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Btn from '../components/Btn';

const Home = () => {
  const Data = [
    {
      name: 'Cleaning',
      img: require('../../assets/clean.jpg'),
    },
    {
      name: 'Plumbing',
      img: require('../../assets/clean.jpg'),
    },
    {
      name: 'Laundary',
      img: require('../../assets/clean.jpg'),
    },
    {
      name: 'Car Wash',
      img: require('../../assets/clean.jpg'),
    },
    {
      name: 'Cleaning',
      img: require('../../assets/clean.jpg'),
    },
  ];
  const ListData = [
    {
      name: 'Kitchen Cleaning',
      price: '$150',
      off: '20% Off',
      img: require('../../assets/kitchen.jpg'),
    },
    {
      name: 'House Cleaning',
      price: '$150',
      off: '20% Off',
      img: require('../../assets/kitchen.jpg'),
    },
  ];
  const SwiperData = [
    {
      off: '40% OFF',
      type: 'Full Car Wash',
      img: require('../../assets/car.png'),
    },
  ];
  const SwiperStyle = ({item}) => {
    return (
      <View>
        <Text>{item.off}</Text>
        <Text>{item.type}</Text>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>
    );
  };
  const ItemStyle = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={item.img}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            marginVertical: 8,
            marginHorizontal: 20,
          }}
        />
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
          <Text style={{color: 'orange', fontSize: 13}}>{item.off}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.headerbox}>
        <Fontisto
          name="nav-icon-grid-a"
          size={25}
          color={Colors.black}
          style={styles.icon1}
        />
        <View style={{width: '60%'}}>
          <Text>Address</Text>
          <Text>4517 Washington Ave</Text>
        </View>
        <AntDesign
          name="search1"
          size={30}
          color={Colors.black}
          style={styles.icon2}
        />
      </View>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        // index={2}
        showPagination
        data={SwiperData}
        renderItem={SwiperStyle}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{color: Colors.black}}>ALL CATEGORIES</Text>
        <Text style={{color: Colors.black}}>See All</Text>
      </View>
      <FlatList
        style={{marginTop: 15}}
        data={Data}
        renderItem={ItemStyle}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{marginTop: 20, width: '90%', alignSelf: 'center'}}>
        <Text style={{color: Colors.black, fontWeight: '500'}}>
          RECOMMENDED
        </Text>
        <Text>Based on your recent activities</Text>
      </View>
      <FlatList
        style={{marginTop: 25}}
        data={ListData}
        renderItem={ListStyle}
      />
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
    paddingHorizontal: 11,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 12,
  },
  icon2: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 12,
  },
  ListView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightgrey,
    paddingVertical: 15,
    borderRadius: 7,
    paddingLeft: 10,
    marginVertical: 10,
  },
});
