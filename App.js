import React from 'react'
import {Text, View, TouchableOpacity, Stylesheet} from 'react-native';

export default class App extends React.Component {
  render() {
  return (
<View style={{flex:1, flexDirection:'column'}}>
    <View style={{alignItems:'center', paddingTop: 100}}>
    <Text style={{}}> Projet SJP5GIT</Text>
    </View>

    <View style= {{flex:1, alignItems: 'center', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-evenly'}}>
    <View style= {{height:200, width:120, backgroundColor:'blue', alignItems:'center'}}>
      <TextInput> Texte 1</TextInput>
      <TextInput> Texte 2</TextInput>
      <TextInput> Texte 3</TextInput>
    </View>
    </View>

    <View style={{height:200, width:50, backgroundColor:'green', alignItems:'center', flexDirection: 'column', justifyContent:'space-evenly'}}>
      <TouchableOpacity>
      <Text> send </Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text> send </Text>
      </TouchableOpacity>
    </View>

</View>

  )
}
}

const styles= Stylesheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput:{
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingleft: 5
  }
})
