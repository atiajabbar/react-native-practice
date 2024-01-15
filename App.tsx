import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './src/components/FlatCard';
import ElevatedCards from './src/components/ElevatedCards'
import FancyCards from './src/components/FancyCards';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard/>
      <ElevatedCards/>
      <FancyCards/>
      <ScrollView>
      <ContactList />
      </ScrollView>
      
      <ActionCard />
      </ScrollView>
    </SafeAreaView>
  ) 
}

export default App
