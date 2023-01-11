import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../Theme/Colors';

const Laundary = ({navigation}) => {
  const [selectedBtn, setselectedBtn] = useState(0);
  const [val, setval] = useState(false);
  const Btns = [
    {
      id: 0,
      btn: 'Dry Cleaning',
    },
    {
      id: 1,
      btn: 'Wash & Fold',
    },
    {
      id: 2,
      btn: 'Iron',
    },
  ];
  const Data = [
    {
      name: 'Coat',
      price: '$20.40',
      img: require('../../assets/coat.png'),
    },
    {
      name: 'Hoodie',
      price: '$20.40',
      img: require('../../assets/hoodie.png'),
    },
    {
      name: 'Jacket',
      price: '$20.40',
      img: require('../../assets/jacket.png'),
    },
    {
      name: 'Blazer',
      price: '$20.40',
      img: require('../../assets/blazer.png'),
    },
    {
      name: 'Leather Jacket',
      price: '$20.40',
      img: require('../../assets/leather.png'),
    },
  ];
  const ItemStyle = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: Colors.purelightblue,
              height: 60,
              width: 60,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={item.img} style={{height: 40, width: 40}} />
          </View>
          <View style={{marginLeft: 10}}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <AntDesign
              name="plus"
              size={20}
              style={{borderWidth: 0.5, padding: 3, borderRadius: 15}}
            />
          </TouchableOpacity>
          <Text style={{marginHorizontal: 10}}>1</Text>
          <TouchableOpacity>
            <AntDesign
              name="minus"
              size={20}
              style={{borderWidth: 0.5, padding: 3, borderRadius: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.iconBox}>
            <AntDesign name="left" size={22} color={Colors.black} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: '23%',
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          LAUNDARY
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 17,
        }}>
        {Btns.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => setselectedBtn(index)}>
              <View
                style={{
                  marginHorizontal: 15,
                  backgroundColor:
                    selectedBtn == index ? Colors.btnColor : Colors.white,
                  paddingHorizontal: 17,
                  paddingVertical: 10,
                  borderRadius: 25,
                  borderWidth: selectedBtn == index ? 0 : 0.5,
                  borderColor: Colors.gray,
                }}>
                <Text
                  style={{
                    color: selectedBtn == index ? Colors.white : Colors.black,
                  }}>
                  {item.btn}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setval(!val);
        }}>
        <View style={styles.dropDown}>
          <Text>Outwear</Text>
          <AntDesign name={val == true ? 'up' : 'down'} size={18} />
        </View>
      </TouchableOpacity>
      {val == true ? (
        <View>
          <FlatList data={Data} renderItem={ItemStyle} />
        </View>
      ) : null}
    </View>
  );
};

export default Laundary;

const styles = StyleSheet.create({
  iconBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  dropDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: Colors.lightgrey,
    borderRadius: 15,
  },
});
