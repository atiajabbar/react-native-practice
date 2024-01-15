import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
// import image from '../images/images';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Aj khan',
      status: 'lorem lorem lorem lorelm lorem',
      profile: {image: require('./images/picc.jpg')},
    },
    {
      uid: 2,
      name: 'new name',
      status: 'LOREM LOREM LOREM LOREM',
      profile: {image: require('./images/download.jpg')},
    },
    {
      uid: 3,
      name: ' my name ',
      status: 'lorem lorem lorem',
      profile: {image: require('./images/pic.jpg')},
    },
    {
      uid: 4,
      name: 'Aj khan',
      status: 'lorem lorem lorem lorelm lorem',
      profile: {image: require('./images/picc.jpg')},
    },

    {
      uid: 5,
      name: 'new name',
      status: 'LOREM LOREM LOREM LOREM',
      profile: {image: require('./images/download.jpg')},
    },
    {
      uid: 6,
      name: ' my name ',
      status: 'lorem lorem lorem',
      profile: {image: require('./images/pic.jpg')},
    },
    {
      uid: 7,
      name: 'Aj khan',
      status: 'lorem lorem lorem lorelm lorem',
      profile: {image: require('./images/picc.jpg')},
    },
  
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}  >
        {contacts.map(({uid, name, status, profile}) => (
          // console.log('Profile:', profile);
       
         
            <View key={uid} style={styles.userCard}>
              <Image source={profile.image} style={styles.userImage} />

              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
           
        )
      )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    // flex:1,
    paddingHorizontal: 16,
    marginBottom: 4,
    height: 300,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 16,
  },
});
