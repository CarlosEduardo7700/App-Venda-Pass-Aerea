import { StyleSheet, ImageBackground, Text, TextInput, Button, View, ScrollView } from 'react-native';
import { useState } from 'react';
import imgAviao from "./assets/aviao.jpeg"

export default function App() {

  const [passageiro, setPassageiro] = useState("")
  const [destino, setDestino] = useState("")
  const [data, setData] = useState("")
  

  const [listaObj, setListaObj] = useState([])

  function mapa(obj, id) {
    return (
      <View key={id} style={styles.passagensBox}>
        
        <View style={{flex: 1, alignItems: "center"}}>
          <Text>{obj.passageiro}</Text>
          <Text>{obj.destino}</Text>
          <Text>{obj.data}</Text>
        </View>

      </View>
    )
  }

  const listaView = listaObj.map( mapa )

  return (
    <View style={styles.container}>

      <View style={{width: "100%", flex: 3}}>

        <ImageBackground source={imgAviao} style={styles.imgHeader}>
          <Text style={styles.textoHeader}>Venda de Passagens Aéreas</Text>
        </ImageBackground>
        
      </View>

      <ScrollView style={{width: "100%", flex: 7, padding: 20, backgroundColor: "#EEE"}}>
        
        <Text style={styles.labelInput}>Nome do Passageiro:</Text>
        <TextInput style={styles.inputBox} value={passageiro} onChangeText={setPassageiro}/>
        <Text style={styles.labelInput}>Destino:</Text>
        <TextInput style={styles.inputBox} value={destino} onChangeText={setDestino}/>
        <Text style={styles.labelInput}>Data do Embarque:</Text>
        <TextInput style={styles.inputBox} value={data} onChangeText={setData}/>

        <Button title='Salvar' onPress={
          () => {
            const novoObj = {
              passageiro: passageiro,
              destino: destino,
              data: data
            }
            setListaObj([...listaObj, novoObj])
          }
        }/>

        <View style={{backgroundColor: "lightyellow", marginVertical: 10, borderWidth: 1, borderColor: "black", borderRadius: 10}}>
          {listaView}
        </View>
      
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgHeader: {
    width: "100%", 
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textoHeader: {
    fontSize: 30,
    backgroundColor: "#999B",
    color: "white",
    width: "80%",
    textAlign: "center",
    marginBottom: 20
  },
  labelInput: {
    fontSize: 20,
    fontWeight: "500"
  },
  inputBox: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 30,
    padding: 10,
    marginBottom: 15
  },
  passagensBox: {
    backgroundColor: "lightblue",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10
  }
});
