import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  valor: string;
  onChange: (texto: string) => void;
  onAdicionar: () => void;
};

export default function InputAdicionar({
  valor,
  onChange,
  onAdicionar,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa..."
        value={valor}
        onChangeText={onChange}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={onAdicionar}
      >
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },

  botao: {
    backgroundColor: '#2e86de',
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginLeft: 8,
    borderRadius: 8,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});