import { View, Text, Image, Button, ScrollView} from 'react-native'
import React from 'react'

const Camera = () => {
  return (
    <View style={{flex:1, justifyContent: 'flex-start', alignItems:'center'}}>
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Image style={{width: 390, height: 200, borderRadius: 3}}
        source={{uri:"https://th.bing.com/th/id/OIP.RiQFC3FLoYDqIH5mYwoiUwHaEo?pid=ImgDet&rs=1",}}
    />
    <Text style={{fontSize: 20}}>Canon Camera</Text>
    <Button title="Add to favourite" color={'black'}/>
    </View>
    <View style={{alignItems: "center"}}>
        <Image style ={{width: 390, height: 200, marginTop: 10, borderRadius: 3}}source={{uri: "https://img.freepik.com/free-photo/camera-green-ground_54391-1168.jpg?size=626&ext=jpg"}}/>
        <Text style={{fontSize: 20}}>Canon 6DS camera</Text>
        <Button title="Add to favourite" color={'black'}/>
    </View>
    <View style={{alignItems: "center", marginBottom: 10}}>
        <Image style ={{width: 390, height: 200, marginTop: 10, borderRadius: 3}}source={{uri: "https://images.alphacoders.com/108/1084863.jpg"}}/>
        <Text style={{fontSize: 20}}>Canon 6DS Lensss</Text>
        <Button title="Add to favourite" color={'black'}/>
    </View>
    </ScrollView>
  

</View>
  )
}

export default Camera