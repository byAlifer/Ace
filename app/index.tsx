import LoginButton from "@/components/loginButton"
import { Text, Image, View, StyleSheet, ImageBackground } from "react-native"

export default function Index() {
  return (
    <ImageBackground
      source={require('../assets/images/login-background.jpg')}
      resizeMode="cover"
      style={styles.backgroud_image}
    > 
      <View style={styles.main_container}>
        <Image 
          source={require('../assets/icons/Logo.svg')}
          style={styles.logo_size}
        />
        <View style={styles.login_options}>
          <LoginButton altLogin={"Google"}/>
          <LoginButton altLogin={"Steam"}/>
          <Text style={styles.signUp_text}>Cadastre-se agora</Text>
        </View>
      </View>
    </ImageBackground>
  )
}


//Estilização
const styles = StyleSheet.create({
  backgroud_image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  main_container: {
    backgroundColor: 'rgba(30,30,30, 0.97)',
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 80
  },
  logo_size: {
    width: 128,
    height: 72
  },
  login_options: {
    gap: 20,
    alignItems: 'center'
  },
  signUp_text: {
    color: '#9C9C9C',
    fontWeight: 'bold',
  }
})

