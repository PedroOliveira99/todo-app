import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        📊 Sobre o App
      </Text>

      <View style={styles.card}>
        <Text style={styles.numero}>To-Do List</Text>
        <Text style={styles.descricao}>
          Aplicativo desenvolvido em React Native
          com TypeScript usando muitos neuronios e perdendo alguns deles tambem.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.numero}>Funcionalidades</Text>

        <Text style={styles.item}>✓ Adicionar tarefas</Text>
        <Text style={styles.item}>✓ Concluir tarefas</Text>
        <Text style={styles.item}>✓ Excluir tarefas</Text>
        <Text style={styles.item}>✓ Salvar tarefas</Text>
        <Text style={styles.item}>✓ Navegação entre telas</Text>
        <Text style={styles.item}>○ Era pra ter uma pagina de login, mas vou tentar anexar.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    padding: 20,
    paddingTop: 60,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },

  numero: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: '#666',
  },

  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});