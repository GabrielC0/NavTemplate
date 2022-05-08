import { Alert } from 'react-native';
import { Button,View,Text,Image,StyleSheet,Pressable,TextInput,TouchableOpacity,useState} from 'react-native';
import InputState from "./InputSate";
import name from "./InputSate";


export default function App() {
    
  return (
      
    <View style={{justifyContent:"center"}}>
        <View className="Header" 
        style={{height:50, width:360,borderBottomWidth:1,borderBottomColor:"black",alignItems:"center"}}>
            <Text style={{fontSize:30,marginLeft:5}} Spécificité />  
        </View>

        <View className="Nom de la carte-section"
        style={{borderBottomWidth:1,borderBottomColor:"black",marginTop:2,height:100}}>
            <Text style={{fontSize:15,marginLeft:15,marginTop:15}}>Nom de la carte</Text> 


            {/* <InputState/> */}
           {/* <Text>`${name}`</Text>  */}

            
        </View>

        <View className="Point de vie-section"
        style={{borderBottomWidth:1,borderBottomColor:"black",marginTop:2,height:100,
        justifyContent:"space-between",flexDirection:"row"}}>

            <Text style={{fontSize:15,marginLeft:15,marginTop:15}}>Point de vie</Text> 
  
            <Text style={{fontSize:10,marginTop:60,marginLeft:115}}>P.V</Text>
            <TextInput
            style={{height:30,width:60,borderWidth:1,borderColor:"black",marginRight:70,marginTop:50,borderRadius:5}}
            value={Text}
            />
            
        </View>

        <View className="Type de Pokemon-section"
            style={{borderBottomWidth:1,borderBottomColor:"black",marginTop:2,height:100,
            justifyContent:"space-between",flexDirection:"row"}}>

            <Text style={{fontSize:15,marginLeft:15,marginTop:15,}}>Type de Pokemon</Text> 

            <View style={{flexDirection:"row-reverse"}}>
                

                <View style={{height:45,width:20,borderWidth:1,borderColor:"black",borderLeftWidth:0,marginTop:35,
                marginRight:65,borderTopRightRadius:5,borderBottomRightRadius:5}}>

                    <TouchableOpacity  
                    style={{backgroundColor:"grey",width:19,height:43}}>

                        <Image
                        style={{height:20,width:20,marginTop:10}}
                        source={require('./Arrow-Down.png')}/>

                    </TouchableOpacity>


                </View>

                <View
                style={{height:45,width:40,borderWidth:1,borderColor:"black",borderTopLeftRadius:5,
                borderBottomLeftRadius:5,marginTop:35}}>
                </View>

            </View>
        </View>

        <View className="Attaque-section"
            style={{borderBottomWidth:1,borderBottomColor:"black",marginTop:2,height:250}}>

            <Text style={{fontSize:15,marginLeft:15,marginTop:15,}}>Attaque</Text>            

            <View style={{flexDirection:"row",width:320,height:50,
            marginTop:15,alignItems:"center",marginLeft:30}}>
                
                <View
                style={{height:45,width:40,borderWidth:1,borderColor:"black",borderTopLeftRadius:5,
                borderBottomLeftRadius:5}}>
                </View>

                <View style={{height:45,width:20,borderWidth:1,borderColor:"black",borderLeftWidth:0,borderTopRightRadius:5,borderBottomRightRadius:5}}>

                    <TouchableOpacity  
                    style={{backgroundColor:"grey",width:19,height:43}}>

                        <Image
                        style={{height:20,width:20,marginTop:10}}
                        source={require('./Arrow-Down.png')}/>

                    </TouchableOpacity>
                </View>

                
                <TextInput
                    style={{width:150,height:45,borderWidth:1,borderColor:"black",borderRadius:5,alignItems:"center",marginLeft:20}}
                    value={Text}
                />
                {/* <Text style={{fontSize:15,marginTop:10,}}>Nom de l'attaque</Text> */}
                

                
                <TextInput
                    style={{width:70,height:45,borderWidth:1,borderColor:"black",borderRadius:5,alignItems:"center",marginLeft:20}}
                    value={Text}
                />
                {/* <Text style={{fontSize:15,marginTop:10,}}>Degats</Text> */}
                

            </View>


            <TextInput
                style={{width:320,height:100,borderWidth:1,borderColor:"black",borderRadius:5,marginLeft:30,marginTop:20}}
                value={Text}
            />
            {/* <Text style={{fontSize:15,marginTop:10,marginLeft:5}}>Description de l'attaque</Text> */}
            

        </View>

        <View className="Bas de carte-section"
            style={{borderBottomWidth:1,borderBottomColor:"black",marginTop:2,height:250}}>

            <Text style={{fontSize:15,marginLeft:15,marginTop:15,}}>Bas de carte</Text>            

            <View style={{flexDirection:"row",width:320,height:50,
            marginTop:15,alignItems:"center",marginLeft:15}}>
                
                
                <View
                style={{height:35,width:70,borderWidth:1,borderColor:"black",borderTopLeftRadius:5,
                borderBottomLeftRadius:5,alignItems:"center"}}>
                    <Text style={{marginTop:5}}>Faiblesse</Text>
                </View>
                

                <View style={{height:35,width:20,borderWidth:1,borderColor:"black",borderLeftWidth:0,
                borderTopRightRadius:5,borderBottomRightRadius:5}}>

                    <TouchableOpacity  
                    style={{backgroundColor:"grey",width:19,height:33}}>

                        <Image
                        style={{height:20,width:20,marginTop:5}}
                        source={require('./Arrow-Down.png')}/>

                    </TouchableOpacity>

                </View>
                <Text style={{marginTop:5,marginRight:10}}>x2</Text>
                
                <View
                style={{height:35,width:75,borderWidth:1,borderColor:"black",borderTopLeftRadius:5,
                borderBottomLeftRadius:5,alignItems:"center"}}>
                    <Text style={{marginTop:5}}>Resistance</Text>
                </View>

                <View style={{height:35,width:20,borderWidth:1,borderColor:"black",borderLeftWidth:0,
                borderTopRightRadius:5,borderBottomRightRadius:5,marginRight:10}}>
                    <TouchableOpacity  
                    style={{backgroundColor:"grey",width:19,height:33}}>

                        <Image
                        style={{height:20,width:20,marginTop:5}}
                        source={require('./Arrow-Down.png')}/>

                    </TouchableOpacity>
                </View>
                
                <View
                style={{height:35,width:70,borderWidth:1,borderColor:"black",borderTopLeftRadius:5,
                borderBottomLeftRadius:5,alignItems:"center"}}>
                    <Text style={{marginTop:5}}>retraite</Text>
                </View>

                <View style={{height:35,width:20,borderWidth:1,borderColor:"black",borderLeftWidth:0,
                borderTopRightRadius:5,borderBottomRightRadius:5,marginRight:10}}>
                    <TouchableOpacity  
                    style={{backgroundColor:"grey",width:19,height:33}}>

                        <Image
                        style={{height:20,width:20,marginTop:5}}
                        source={require('./Arrow-Down.png')}/>

                    </TouchableOpacity>
                </View>
            </View>



        </View>

    </View>

  );
}

