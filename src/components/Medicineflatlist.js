import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';



const Medicineflatlist = (props) => {


    return (

        <View style={styles.container}>

            <View style={styles.imageView}>
                <Image style={styles.image}
                    source={props.uri}
                />
            </View>
            <View style={{ marginTop: 5 }}>
                <Text style={{ color: "grey", fontWeight: "bold" }}>{props.title}</Text>
                <Text><Text style={{ fontWeight: "bold" }}>2.6km</Text> away</Text>
                <Text>Free Delivery | Delivery Time 18 mins</Text>
                <Text>Minimum Order: 26$</Text>
                <View
                    style={styles.underLine}
                />
                <Text style={styles.open}>{props.status}</Text>
            </View>

            <View>
                <Text style={styles.offer}>{props.stock}</Text>

                <View style={{ marginTop: 45, flexDirection: "row" }}>
                    <Text style={{ color: "grey", marginLeft: -100, marginTop: -5, fontWeight: "bold", fontSize: 20 }}>
                        <Entypo style={{ color: "#19D54A", }} name="star" size={25}></Entypo>{props.rating}</Text>
                </View>
            </View>

        </View>




    )
}




export default Medicineflatlist


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        height: 130,
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
        height: 80,
        width: 80,
        marginHorizontal: 10,
        marginVertical: 15,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        borderWidth: 1,
        borderColor: '#B7B7B7',
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },

    image: {

        resizeMode: "contain",
        width: 40,
        height: 40,

    },

    offer: {
        backgroundColor: '#19D54A',
        color: "green",
        width: 90,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: -97,
        marginTop: 20
    },

    open: {
        backgroundColor: '#19D54A',
        color: "green",
        width: 70,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
    },
    underLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: 130,
        marginBottom: 5
    }

});



