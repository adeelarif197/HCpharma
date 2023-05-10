import React from 'react'
import { View, Image, StyleSheet } from 'react-native'


const TopFlatlist = (props) => {


    return (

        <View>

            <Image style={styles.images}
                source={props.image}
            />
        </View>


    )
}




export default TopFlatlist


const styles = StyleSheet.create({

    image: {
        alignItems: "flex-start",
        flex: 0.3,
        width: 50,
        height: 40,
        marginTop: 10
    },
    images: {
        resizeMode: "contain",
        width: 250,
        height: 150,
        marginTop: 10
    },

});



