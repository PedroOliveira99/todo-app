import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import InputAdicionar from '../../components/input-adicionar';
import TarefaItem, {
  Tarefa,
} from '../../components/tarefa-item';

const CHAVE_STORAGE = '@minhas_tarefas';

export default function Home() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [carregando, setCarregando] = useState(true);

  // CARREGAR TAREFAS
  useEffect(() => {
    const carregarTarefas = async () => {
      try {
        const dados = await AsyncStorage.getItem(CHAVE_STORAGE);

        if (dados) {
          setTarefas(JSON.parse(dados));
        }
      } catch (erro) {
        Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
      } finally {
        setCarregando(false);
      }
    };

    carregarTarefas();
  }, []);

  // SALVAR TAREFAS
  useEffect(() => {
    if (!carregando) {
      AsyncStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(tarefas)
      );
    }
  }, [tarefas, carregando]);

  // ADICIONAR
  const adicionar = () => {
    if (!novaTarefa.trim()) {
      Alert.alert('Erro', 'Digite uma tarefa.');
      return;
    }

    const tarefa: Tarefa = {
      id: Date.now().toString(),
      texto: novaTarefa.trim(),
      concluida: false,
      criadaEm: new Date().toISOString(),
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa('');

    Alert.alert('Sucesso', 'Tarefa adicionada!');
  };

  // CONCLUIR / DESMARCAR
  const alternarTarefa = (id: string) => {
    setTarefas(
      tarefas.map(item =>
        item.id === id
          ? {
              ...item,
              concluida: !item.concluida,
            }
          : item
      )
    );
  };

  // EXCLUIR
  const confirmarExclusao = (id: string) => {
    Alert.alert(
      'Excluir tarefa',
      'Deseja realmente excluir esta tarefa?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            setTarefas(
              tarefas.filter(item => item.id !== id)
            );
          },
        },
      ]
    );
  };

  const pendentes = tarefas.filter(
    item => !item.concluida
  ).length;

  if (carregando) {
    return (
      <View style={styles.carregando}>
        <Text>Carregando tarefas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        📝 Minhas Tarefas
      </Text>

      <Text style={styles.contador}>
        {pendentes} tarefa(s) pendente(s)
      </Text>

      <InputAdicionar
        valor={novaTarefa}
        onChange={setNovaTarefa}
        onAdicionar={adicionar}
      />

      {tarefas.length === 0 ? (
        <View style={styles.vazia}>
          <Text style={styles.textoVazio}>
            Nenhuma tarefa
          </Text>
        </View>
      ) : (
        <FlatList
          data={tarefas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TarefaItem
              tarefa={item}
              onAlternar={alternarTarefa}
              onExcluir={confirmarExclusao}
            />
          )}
        />
      )}
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
    marginBottom: 5,
  },

  contador: {
    color: '#666',
    marginBottom: 20,
  },

  vazia: {
    alignItems: 'center',
    marginTop: 50,
  },

  textoVazio: {
    fontSize: 18,
    color: '#999',
  },

  carregando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});