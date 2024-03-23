import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
 
export default function App() {
 
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [validacao, setValida] = useState('');
 
 
  function validar(){
    let campoEmail;
    let campoSenha;
    campoEmail = email;
    campoSenha = senha;
   
    if (campoEmail === '' || campoSenha === ''){
      setValida("Os campos estão vazios!");
    }
  }
 
  return (
<View style={estilos.container}>
<Text style={estilos.texto}>
        E-mail
</Text>
<TextInput
        value={email}
        onChangeText={(text)=>setEmail(text)}
        style={estilos.input}
        placeholder="Digite seu e-mail"/>
 
      <Text style={estilos.texto}>
        Senha
</Text>
<TextInput
        value={senha}
        onChangeText={(text)=>setSenha(text)}
        style={estilos.input}
        placeholder="Digite sua senha"/>
<Text>{validacao}</Text>
 
      <View style={estilos.buttons}>
<TouchableOpacity
        onPress={validar}
        style={estilos.button}>
<Text>
          Entrar
</Text>
</TouchableOpacity>
 
</View>
</View>
  );
 
 
}
 
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#087C57',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  texto:{
    color: "#fff",
    fontSize: 12,
    fontFamily: 'Poppins-Light'
  },
  input:{
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: '80%'
  },
  button:{
    backgroundColor: "#FFD700",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8
  },
  buttons: {
    flexDirection:'row',
    gap: 8,
    height: 36
  },
  textButton:{
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: 'Poppins-Light'
  }
});