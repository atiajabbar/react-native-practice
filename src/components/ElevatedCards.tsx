import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
<Text style={styles.headingText}>ElevatedCards</Text>
   <ScrollView horizontal={true} style={styles.container}>
    <View style={[styles.card, styles.cardElevated]}>
        <Text>
            Tap
        </Text>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
        <Text>
            Tap
        </Text>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
        <Text>
            me
        </Text>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
        <Text>
            Scroll
        </Text>
    </View>

    <View style={[styles.card, styles.cardElevated]}>
        <Text>
            more....
        </Text>
    </View>
    <View style={[styles.card, styles.cardElevated]}>
        <Text>
            😁
        </Text>
    </View>
   </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
      },
      container:{
padding: 10,
      },

      card:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
width: 100, 
height: 100,
borderRadius: 10,
margin: 10,

      },
      cardElevated:{
backgroundColor: '#cad5e2',
elevation: 4,
shadowOffset: {
    width: 1,
    height: 1,
},
shadowColor: 'red',
shadowOpacity: 0.4,
shadowRadius: 3,
      }

})