import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Theme/Colors'
import Reuse_Button from '../Components/Reuse_Button'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fonts from '../Theme/Fonts'

const Change_Successfully = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <Image source={require('../Theme/Images/Change_Successfully.png')} resizeMode={"contain"} style={styles.ImgStyle} />
            <View style={styles.passResetText}>
                <Text style={styles.passwordReset}>Password Reset</Text>
            </View>
            <View>
                <Text style={{ ...styles.passwordReset, color: "#817D7D", fontSize: 12 }}>Your Password Has been Reset{'\n'}Sucessfully</Text>
            </View>
            <Reuse_Button
                CustomStyle={styles.backLogin}
                BtnText={"Back To Login Page"}
                addLeft={<AntDesign name='arrowleft' color={Colors.WHITE} size={18} style={{ marginRight: '1%' }} />}
                onPress={() => navigation.navigate("Sign_In")}
            />
        </View>
    )
}

export default Change_Successfully

const styles = StyleSheet.create({
    ImgStyle: {
        height: "55%",
        width: '80%',
        alignSelf: 'center'
    },
    passResetText:{
        width: '90%', alignSelf: "center", marginTop: '2%'
    },
    backLogin:{
        width: '56%', marginTop: '20%', flexDirection: "row",
    },
    passwordReset: {
        fontSize: 24,
        fontWeight: '500',
        fontFamily: Fonts.PoppinsBold,
        textAlign: 'center',
        color: Colors.BLACK
    }
})