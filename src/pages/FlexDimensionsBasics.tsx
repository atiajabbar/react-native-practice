// import React from 'react';
// import {View, Text, SafeAreaView} from 'react-native';

// const FlexDimensionsBasics = () => {
//   return (
//     <SafeAreaView>
//       {/* <View>
//         <View> */}
//       <Text>Flex giyfgyifg1</Text>

//       {/* <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} /> */}
//       {/* </View> */}
//     </SafeAreaView>
//   );
// };

// export default FlexDimensionsBasics;
import React from 'react';
import {View, Text} from 'react-native';

const Flex = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3, backgroundColor: 'powderblue'}} >
        <Text> Flex 3</Text>
      </View>
      <View style={{flex: 4, backgroundColor: 'skyblue'}} />
      <View style={{flex: 2, backgroundColor: 'steelblue'}} />
    </View>
  );
};
export default Flex;
