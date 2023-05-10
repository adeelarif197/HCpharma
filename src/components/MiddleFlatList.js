import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
const MiddleFlatlist = (props) => {
    const navigation =   useNavigation()

     return (


        <TouchableOpacity style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}
        onPress={() => navigation.navigate('Items')}
        >
            <View style={styles.listItem1}>

                <Image style={styles.image}
                    source={props.icon}
                />


            </View>
            <Text>{props.names}</Text>
        </TouchableOpacity>




    )
}




export default MiddleFlatlist


const styles = StyleSheet.create({

    listItem1: {
        backgroundColor: 'green',
        flexDirection: 'row',
        width: 100,
        height: 100,
        borderWidth: 2,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: 'green',
        marginVertical: 4,
        marginHorizontal: 15,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 30,
        padding: 10
    },


    image: {

        resizeMode: "contain",


    },
});



