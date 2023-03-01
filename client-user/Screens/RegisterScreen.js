
import { TextInput, View , Button, Text} from "react-native";
import React from "react";


export default function Register (){
    const [username, onChangeUsername] = React.useState(' ');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
   
        <View style={{marginTop:200}}>
          <Text style={{textAlign:"center", marginTop:20, fontSize:40}} category="h1">Register</Text>
        </View>
        <View style={{flex:1,marginTop:100, width:"90%", marginBottom:20}}>
  
        <TextInput
          placeholder="Username"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          value={username}
          onChangeText={username => onChangeUsername(username)}
          style={{textAlignVertical:"center",flexDirection:"row", padding: 10, fontSize:20, flex:1, borderWidth:1, marginTop:20, borderRadius:10, paddingTop:12}}
          />
            <TextInput
          placeholder="Email"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          value={email}
          onChangeText={email => onChangeEmail(email)}
          style={{padding: 10, fontSize:20, flex:1, borderWidth:1, marginTop:20, borderRadius:10, paddingTop:12}}
          />
           <TextInput
          placeholder="Password"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          value={password}
          onChangeText={password => onChangePassword(password)}
          style={{padding: 10, fontSize:20, flex:1, borderWidth:1,marginTop:20, borderRadius:10, paddingTop:12}}
          />
  
        </View>
        <View style={{flex:1, backgroundColor: "white",marginTop:90, width:"50%",height:"40%", marginBottom:10}}>
        <Button title={"Sign Up"} onPress={() => {}} />
  
        </View>
    </View>
    )
}