import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
  ciradaEm: string;
}
/* Estado Principal */
const [tarefas, setTarefas] = useState<Tarefa[]>([]);

/* Input */
const [tarefas, setTarefas] = useState<Tarefa[]>([]);
const [novaTarefa, setNovaTarefa] = useState('');

const tarefa: Tarefa = {
  id: Date.now().toString(),
  texto: novaTarefa.trim(),
  concluida: false,
  criadaEm: new Date().toISOString(),
};

export default function HomeScreen() {
  return (
    
  );
}

const styles = StyleSheet.create({
  




  riscado: {
  textDecorationLine: 'line-through',
  color: '#999',
},
});
