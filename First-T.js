import {Text,View,Image} from 'react-native';

export default function App() {
 
  return (
    <View style={{marginLeft:20}}>

      <View>
        <Image
        style={{marginLeft:20,marginTop:25}}
        source={require('./Template.png')}/>
      </View>

      <View className="Icons-Footer" 
      style={{flexDirection:"row",justifyContent:"space-between",marginLeft:40,height:50,width:250,marginTop:25}}>
 
        <Image
        style={{height:35,width:35}}
        source={require('./Download.png')}/>

        <View style={{borderWidth:1,borderRadius:50,borderColor:"black",height:45,width:45}}>
        <Image
        style={{height:35,width:35,marginLeft:5}}
        source={require('./Ramdom.png')}/>
        </View>

        <Image
        style={{height:35,width:35}}
        source={require('./Share.png')}/>

      </View>

      <View className="Footer"
      style={{marginTop:80,marginLeft:40,height:50,width:250,alignItems:"center",borderWidth:1,borderColor:"black"}}>

        <Text style={{marginTop:15}}>Cartes récentes</Text>

      </View>
    </View>

  );
}
