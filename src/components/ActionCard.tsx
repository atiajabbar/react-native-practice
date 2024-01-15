import { StyleSheet, Text, View,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}> 
        <Text style={styles.headerText}>
            What is new in this app? 
            </Text>
        </View>
        <Image source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRA23-gt1ypDK_SSITEDAtlDH9QZryPQe0Jg&usqp=CAU'
        }}
        style={styles.cardImage}>

        </Image>
    <View style={styles.bodyContainer}>
<Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque, officia repudiandae nisi commodi, quisquam similique ipsum vitae voluptates veniam rerum assumenda consequatur provident. Labore reprehenderit nostrum commodi temporibus eos.</Text>
    </View>
    <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.socialLinks}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com')}>
            <Text style={styles.socialLinks}>Follow me</Text>
        </TouchableOpacity>
        
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
    borderRadius:8,
    marginVertical: 12,
    marginHorizontal: 16,

},
elevatedCard:{
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,

},
headingContainer:{
    height: 40,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',

},
headerText:{
    color:'black',
    fontSize: 16,
    fontWeight: '600',

},
cardImage:{
    height: 190,
},
bodyContainer:{
    padding: 10,

},
footerContainer:{
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
},
socialLinks:{
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 8,
},
})