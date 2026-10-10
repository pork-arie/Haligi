
import {ScrollView, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return(
    <ScrollView>
      <View style={styles.likod}>
      <Text style={styles.header}>home screen adi</Text>
      <Text style={styles.subs}>welcome subs ines</Text>
    </View>

    <View style={styles.likod}>
      <Text style={styles.header}>Secont text dev</Text>
      <Text style={styles.subs}>welcome subs ines</Text>
    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  likod:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff'
  },
  header:{
    color:'red',
    fontSize:32,
  },
  subs:{
    fontSize:16,
    marginTop:10,
    color:'blue'
  }
})