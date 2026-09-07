import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
  criadaEm: string;
};

type Props = {
  tarefa: Tarefa;
  onAlternar: (id: string) => void;
  onExcluir: (id: string) => void;
};

export default function TarefaItem({
  tarefa,
  onAlternar,
  onExcluir,
}: Props) {
  return (
    <View
      style={[
        styles.card,
        tarefa.concluida && styles.cardConcluido,
      ]}
    >
      <TouchableOpacity
        style={styles.areaTarefa}
        onPress={() => onAlternar(tarefa.id)}
      >
        <Text style={styles.checkbox}>
          {tarefa.concluida ? '✓' : '○'}
        </Text>

        <Text
          style={[
            styles.texto,
            tarefa.concluida && styles.textoConcluido,
          ]}
        >
          {tarefa.texto}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onExcluir(tarefa.id)}
      >
        <Text style={styles.excluir}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },

  cardConcluido: {
    backgroundColor: '#f0f0f0',
  },

  areaTarefa: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    fontSize: 24,
    marginRight: 10,
  },

  texto: {
    fontSize: 16,
    flex: 1,
  },

  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  excluir: {
    fontSize: 20,
    marginLeft: 10,
  },
});