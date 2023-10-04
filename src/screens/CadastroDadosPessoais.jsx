import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../conf/firebase';

function CadastroDadosPessoais({ navigation }) {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [erros, setErros] = useState({});

  // Função para formatar a data de nascimento e limitar a 8 dígitos
  const formatarData = (data) => {
    if (data.length <= 10) {
      if (data.length === 2 || data.length === 5) {
        setDataNascimento(data + '/');
      } else {
        setDataNascimento(data);
      }
    }
  };

  const validarCampos = () => {
    const novosErros = {};

    if (!nome) {
      novosErros.nome = 'Campo obrigatório';
    }

    if (!genero) {
      novosErros.genero = 'Campo obrigatório';
    }

    if (!dataNascimento) {
      novosErros.dataNascimento = 'Campo obrigatório';
    }

    if (!cpf) {
      novosErros.cpf = 'Campo obrigatório';
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  const handleProximaEtapa = async () => {
    // Valide os campos
    if (validarCampos()) {
      // Salve os dados no Firebase Firestore
      const dadosPessoaisRef = collection(db, 'dadosPessoais');
      await addDoc(dadosPessoaisRef, {
        nome,
        genero,
        dataNascimento,
        cpf,
      });

      // Passe os dados para a próxima tela (Dados Acadêmicos):
      navigation.navigate('CadastroDadosAcademicos', {
        dadosPessoais: {
          nome,
          genero,
          dataNascimento,
          cpf,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro - Dados Pessoais</Text>
      
      {/* Nome */}
<View style={styles.inputView}>
  <Text style={styles.label}>Nome:</Text>
  <TextInput
    style={[styles.inputText, erros.nome && styles.inputError]}
    placeholder="Digite seu nome"
    onChangeText={(text) => {
      // Use uma expressão regular para aceitar letras, espaços e acentos
      const alphabeticText = text.replace(/[^a-zA-ZÀ-ú\s]/g, '');
      setNome(alphabeticText);
    }}
    value={nome} // Adicione esta linha para garantir que o valor seja sempre atualizado
  />
  {erros.nome && <Text style={styles.errorMessage}>{erros.nome}</Text>}
</View>


      {/* Gênero */}
      <View style={styles.inputView}>
        <Text style={styles.label}>Gênero:</Text>
        <Picker
          selectedValue={genero}
          style={[styles.picker, erros.genero && styles.inputError]}
          onValueChange={(itemValue) => setGenero(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Prefiro não responder" value="Prefiro não responder" />
        </Picker>
        {erros.genero && <Text style={styles.errorMessage}>{erros.genero}</Text>}
      </View>

     {/* Data de Nascimento */}
      <View style={styles.inputView}>
        <Text style={styles.label}>Data de Nascimento:</Text>
        <TextInput
          style={[styles.inputText, erros.dataNascimento && styles.inputError]}
          placeholder="DD/MM/AAAA"
          onChangeText={(text) => {
            const numericText = text.replace(/[^0-9]/g, ''); // Remova caracteres não numéricos

            if (numericText.length <= 8) {
              // Se o texto tem no máximo 8 caracteres (DDMMAAAA), formate a data:
              let formattedText = '';
              for (let i = 0; i < numericText.length; i++) {
                if (i === 2 || i === 4) {
                  formattedText += '/';
                }
                formattedText += numericText[i];
              }
              setDataNascimento(formattedText);
            }
            // Valida a data para que não seja maior que 31 dias ou 12 meses:
            const [dia, mes, ano] = numericText.split('/').map(Number);

            if (dia > 31 || mes > 12 || ano < 1900) {
            }
          }}
          value={dataNascimento}
          maxLength={10}
        />
        {erros.dataNascimento && <Text style={styles.errorMessage}>{erros.dataNascimento}</Text>}
      </View>





      {/* CPF */}
      <View style={styles.inputView}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={[styles.inputText, erros.cpf && styles.inputError]}
          placeholder="Digite seu CPF"
          keyboardType="numeric"
          onChangeText={(text) => {
            const numericText = text.replace(/[^0-9]/g, '');
            setCpf(numericText);
          }}
          value={cpf}
          maxLength={11}
        />
        {erros.cpf && <Text style={styles.errorMessage}>{erros.cpf}</Text>}
      </View>

      {/* Botão Próximo */}
      <TouchableOpacity style={styles.botao} onPress={handleProximaEtapa}>
        <Text style={styles.textoBotao}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86BDAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    color: '#333',
  },
  inputText: {
    height: 40,
    color: '#333',
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  picker: {
    width: '100%',
    color: '#333',
    borderColor: '#ffffff',
    marginBottom: 5,
  },
  botao: {
    width: '30%',
    backgroundColor: '#1e7557',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#ffffff',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    marginLeft: 5,
  },
  inputError: {
    
  },
});

export default CadastroDadosPessoais;
