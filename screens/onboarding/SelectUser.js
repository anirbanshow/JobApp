import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

const SelectUser = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../images/select-logo.jpg')} style={styles.logo} />
            <Text style={styles.title}>What are you looking for?</Text>
            <TouchableOpacity style={styles.wantToHire}>
                <Text style={styles.btnText1}>Want to Hire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wantToJob}>
                <Text style={styles.btnText2}>Want to get Job</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: moderateScale(20),
        fontWeight: '600'
    },
    wantToHire: {
        width: '90%',
        height: verticalScale(45),
        backgroundColor: TEXT_COLOR,
        borderRadius: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateVerticalScale(20)
    },
    wantToJob: {
        width: '90%',
        height: verticalScale(45),
        borderColor: TEXT_COLOR,
        borderWidth: 1,
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateVerticalScale(20)
    },
    btnText1: {
        color: BG_COLOR,
        fontSize: moderateScale(16),
        fontWeight: '600'
    },
    btnText2: {
        color: TEXT_COLOR,
        fontSize: moderateScale(16),
        fontWeight: '600'
    },
    logo: {
        width: scale(100),
        height: scale(100),
        marginBottom: moderateVerticalScale(50)
    }
});