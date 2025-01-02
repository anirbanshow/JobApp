import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BG_COLOR, TEXT_COLOR } from '../../utils/Colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SelectUser')
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../../images/logo.jpg')} style={styles.logo} />
            <Text style={styles.name}>FindMyJob</Text>
            <Text style={styles.slogan}>Post | Find Jobs in One Place</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BG_COLOR
    },
    logo: {
        width: scale(100),
        height: scale(100)
    },
    name: {
        fontSize: moderateScale(35),
        fontWeight: '600',
        marginTop: moderateVerticalScale(10),
        color: TEXT_COLOR
    },
    slogan: {
        fontSize: moderateScale(16),
        fontStyle: 'italic',
        position: 'absolute',
        bottom: moderateVerticalScale(80),
        fontWeight: '600'
    }
})