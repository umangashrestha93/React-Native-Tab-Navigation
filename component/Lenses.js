import { View, Text, Image, Button, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Lenses = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1, justifyContent: 'flex-start', alignItems:'center'}}>
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Image style={{width: 390, height: 200, borderRadius: 3}}
        source={{uri:"https://th.bing.com/th/id/OIP.V_2JLAW5XiBFzvNuYOp8UwHaE8?pid=ImgDet&rs=1",}}
    />
    <Text style={{fontSize: 20}}>Canon Camera</Text>
    <Button title="Add to favourite" color={'black'}/>
    </View>
    <View style={{alignItems: "center"}}>
        <Image style ={{width: 390, height: 200, marginTop: 10, borderRadius: 3}}source={{uri: "https://live.staticflickr.com/3954/15737426522_83e73ec2c6_b.jpg"}}/>
        <Text style={{fontSize: 20}}>Canon 6DS camera</Text>
        <Button title="Add to favourite" color={'black'}/>
    </View>
    <View style={{alignItems: "center", marginBottom: 10}}>
        <Image style ={{width: 390, height: 200, marginTop: 10, borderRadius: 3}}source={{uri: "https://th.bing.com/th/id/OIP.vKBUoKK4NAl-7QPjrqFF_wHaE8?pid=ImgDet&w=540&h=360&rs=1"}}/>
        <Text style={{fontSize: 20}}>Canon 6DS Lensss</Text>
        <Button title="Add to favourite" color={'black'}/>
    </View>
    </ScrollView>
  

</View>

  )
}

export default Lenses