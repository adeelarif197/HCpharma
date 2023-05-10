import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';



const SearchMedicineList = (props) => {


    return (

        <View style={styles.container}>

            <View style={styles.imageView}>
                <Image style={styles.image}
                    source={props.uri}
                />
            </View>
            <View style={{ marginTop: 5, flex: 3 }}>
                <Text style={{ color: "black", fontWeight: "bold" }}>{props.title}</Text>
                <Text>{props.name}</Text>



            </View>

            <View style={{ flex: 1 }} >
                <Text style={styles.offer}>{props.price}</Text>


            </View>

        </View>




    )
}




export default SearchMedicineList


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        height: 70,
        padding: 10,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        marginVertical: 4,
        marginHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomLeftRadius: 60,


    },

    imageView: {
        flex: 0.8,

        marginVertical: 15,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },

    image: {

        resizeMode: "contain",
        width: 20,
        height: 20,

    },

    offer: {
        backgroundColor: '#19D54A',
        color: "green",
        width: 40,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 15
    },



});



