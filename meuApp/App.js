import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("../meuApp/assets/logo.jpg")} style={styles.logo}></Image>

      <Text style={styles.text}>Bem vindo a PEX</Text>
      <Text style={styles.text2}>Economize tempo e dinheiro em todas as etapas de sua obra. Na reforma ou construção nós iremos te auxiliar em tudo.</Text>

      <TouchableOpacity style={styles.botao} onPress={() => {this.clicou}}>
      <Text style={styles.seta}>  </Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 121,
    width: 224,   
  },
  text:{
    marginTop: 80,
    fontSize: 24,
    height: 41,
    width: 311,
    left: 0,
    top: 0,
    textAlign: 'center'
  },
  text2:{
    height: 60,
    width: 311,
    left: 0,
    top: 20,
    justifyContent: 'center',
  },

  botao: {
    height: 62,
    width: 62,
    borderRadius: 84,
    margin: 250,
    marginBottom: 550,

  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    padding: 20,
    gap: 8,    
    position: 'absolute',
    left: 50,
    // right: 0,
    top: 280,
    bottom: 0,    
    backgroundColor: '#F09200',
    borderRadius: 84,
  },

  seta:{
    fontSize: 20,
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
