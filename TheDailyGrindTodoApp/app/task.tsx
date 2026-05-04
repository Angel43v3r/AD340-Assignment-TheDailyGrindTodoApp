import React, { useState} from "react";
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Task = {
  id: string;
  text: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

export default function TaskScreen() {
  const [task, setTask] = useState<string>('');
  const [todos, newTodo] = useState<Task[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const priorityColor = (p: "low" | "medium" | "high") => {
    if (p === "high") return "#e57373";
    if (p === "medium") return "#ffb74d";
    return "#81c784";
  };

  const addTask = () => {
    if (task.trim() === '') {
      return;
    }

    newTodo(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        text: task,
        completed: false,
        priority: priority
      }
    ]);

    setTask('');
  };

  const toggleTask = (id: string) => {
    newTodo(
      todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id: string) => {
    newTodo(
      todos.filter(t =>
        t.id !== id
      )
    );
  };

  const clearAll = () => newTodo([]);

  const displayItem = ({ item, index }: { item: Task; index: number }) => (
    <View style={styles.item}>
      {/* LEFT SIDE: Checkbox + Text */}
      <View style={styles.checkbox}>
        <TouchableOpacity onPress={() => toggleTask(item.id)}>
          <View style={[styles.checkboxBox, item.completed && styles.checkboxChecked]}>
            {item.completed && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>

        {/* Expand/collapse Text todo */}
        <TouchableOpacity
          style={styles.textOverflow}
          onPress={() => setExpandedId(prev => (prev === item.id ? null : item.id))}
        >
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={[styles.text, item.completed && styles.done]}>
              {index + 1}.{' '}
            </Text>
            <Text
              style={[styles.text, styles.textFlex, item.completed && styles.done]}
              numberOfLines={expandedId === item.id ? undefined : 1}
              ellipsizeMode="tail"
            >
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* RIGHT SIDE: Priority badge + X button */}
      <Text style={[styles.priorityBadge, { backgroundColor: priorityColor(item.priority) }]}>
        {item.priority}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.keyboardView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>The Daily Grind</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Task:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a task!"
            value={task}
            onChangeText={setTask}
          />

          <Text style={styles.label}>Priority:</Text>
          <View style={styles.priorityRow}>
            {(["low", "medium", "high"] as const).map(p => (
              <TouchableOpacity
                key={p}
                style={[styles.priorityBtn, { backgroundColor: priorityColor(p) }, priority === p && styles.prioritySelected]}
                onPress={() => setPriority(p)}
              >
                <Text style={styles.priorityBtnText}>{p}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Todo:</Text>

        <TouchableOpacity style={styles.button} onPress={clearAll}>
          <Text style={styles.buttonText}>Clear All</Text>
        </TouchableOpacity>

        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={displayItem}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 40 }}
        />

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7bebee',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#413f3d',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
  },
  checkboxBox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#412f3d',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: '#7bebee',
    borderColor: '#412f3d',
  },
  checkmark: {
    color: '#412f3d',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 60,
    backgroundColor: '#d8cfd0',
  },
  delete: {
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: 'bold',
    padding: 4,
  },
  done: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  form: {
    backgroundColor: '#c4b8b9',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b1a6a4',
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#94847b',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#b1a6a4',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  keyboardView: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#412f3d',
    marginBottom: 6,
  },
  priorityBadge: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    textTransform: 'capitalize',
    marginRight: 8,
    borderRadius: 8,
  },
  priorityBtn: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    opacity: 0.4,
    borderRadius: 4,
  },
  priorityBtnText: {
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
  },
  priorityRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  prioritySelected: {
    opacity: 1,
  },
  text: {
    fontSize: 16,
    flexShrink: 1,
  },
  textFlex: {
    flex: 1,
    flexShrink: 1,
  },
  textOverflow: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    color: '#412f3d',
  },
});