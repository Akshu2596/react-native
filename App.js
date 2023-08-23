import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, Button } from 'react-native';
import RoundedButton from './components/RoundedButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.textWrapper, {justifyContent:'center'}]}>
        <Text style={styles.header}>Welcome To</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/Group.png')} style= {styles.logo}/>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>HotDoc</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <RoundedButton onPress={() => alert('button pressed!')} label={'Sign in with Email'} bgColor={'#FFFFFF'} textColor={'#263238'}/>
        <RoundedButton onPress={() => alert('button pressed!')} label={'Sign in with Facebook'} bgColor={'#3B5998'} textColor={'#FFF'}/>
        <RoundedButton onPress={() => alert('button pressed!')} label={'Sign in with Apple'} bgColor={'#212121'} textColor={'#fff'}/>
      </View>
      <View style={[styles.textWrapper, styles.footerWrapper]}>
        <Text style={[styles.footer, {color: '#263238'}]}>New Member?</Text>
        <Text style={[styles.footer, {color: '#1A936F'}]}>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae4e0',
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 4,
  },
  textWrapper: {
    flex: 1,

  },
  logoContainer: {
    flex: 3,
  },
  buttonsContainer: {
    flex: 4,
    width: '100%',
    padding: 6,
    gap: 20,
    justifyContent: 'center'
  },
  header: {
    fontSize: 25,
    color: '#263238',
  },
  footer: {
    fontSize: 14,

  },
  footerWrapper: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 4
  },
  logo:{
    flex: 1,
    resizeMode: 'contain',
    height:200,
    width:200,
  },
  title:{
    fontSize: 30,
    color: '#114B5F'
  }
});
