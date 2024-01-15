import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
    <View style={[styles.card, styles.cardElevated]}>
    <Image style={styles.cardImage}
    source={{
        uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShlaxTgobpgCwKKHMAFGdnN1yfbJMkPLQ1Q4qU1wJHqycNeY95'
    }}
    />
    <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Its a very good place to visit.</Text>
<Text style={styles.cardLabel}>Great to visit here!</Text>
<Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt est tenetur doloribus fuga. Eius officiis nulla suscipit enim quisquam repellat cum, ducimus magni id velit atque, provident, similique voluptate delectus.</Text>
<Text style={styles.cardFooter}>Near to me.</Text>
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
fontSize: 24,
fontWeight: 'bold',
paddingHorizontal: 8,

    },
    card:{
        width:350,
        height: 360,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 25,
    },
    cardElevated:{
        backgroundColor: 'white',
        color: 'black',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height:1,
        }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius:6,
        borderTopRightRadius: 6,
    },
    cardBody:{
flex:1,
flexGrow: 1,
paddingHorizontal: 12,
    },
    cardTitle:{
        color:'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel:{
        color:'black',
        fontSize: 14,
        // fontWeight: 'bold',
        marginBottom: 6,
    },
cardDescription:{
    color:'#242B2E',
    fontSize: 12,
        // fontWeight: 'bold',
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6,
        
},
cardFooter:{
    color:'black',
},
})