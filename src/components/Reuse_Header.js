import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Theme/Colors'
import Fonts from '../Theme/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Reuse_Header = (props) => {
    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={Colors.SMart_Rental} />
            <View style={{ ...styles.HeaderBg, ...props.CustomHeaderBg }}>
                <View style={{ ...styles.dataView, ...props.CustomdataView }}>
                    <TouchableOpacity onPress={props.onPress}>
                        <Ionicons name={'ios-arrow-back-outline'} size={20} color={Colors.WHITE} style={props.IconStyle} />
                    </TouchableOpacity>
                    <View style={{ ...styles.HeaderText, ...props.CustomHeaderText }}>
                        <Text style={{ ...styles.editProfile, ...props.CustomeditProfile }}>{props.HeaderName}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Reuse_Header

const styles = StyleSheet.create({
    HeaderBg: {
        backgroundColor: Colors.SMart_Rental,
        height: '10%',
        justifyContent: 'center'
    },
    dataView: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    HeaderText: {
        flex: 1,
        marginRight: '4%'
    },
    editProfile: {
        fontFamily: Fonts.NunitoMedium,
        fontSize: 16,
        fontWeight: '400',
        color: Colors.WHITE,
        textAlign: 'center'
    }
})