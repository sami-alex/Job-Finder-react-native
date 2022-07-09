import { View, ImageBackground } from "react-native"
const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('Choice')
    },3000)
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require('./splashScreen.jpg')}
            resizeMode="stretch" >
        </ImageBackground>
    )
}
export default SplashScreen