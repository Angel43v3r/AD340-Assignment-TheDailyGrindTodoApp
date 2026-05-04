import { describe, expect, test } from 'vitest';

type Priority = "low" | "medium" | "high";

type Task = {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
};

const priorityColor = (p: Priority): string => {
  if (p === "high") return "#e57373";
  if (p === "medium") return "#ffb74d";
  return "#81c784";
};

const addTask = (todos: Task[], text: string, priority: Priority): Task[] => {
  if (text.trim() === '') return todos;
  return [...todos, { id: Date.now().toString(), text, completed: false, priority }];
};

const toggleTask = (todos: Task[], id: string): Task[] =>
  todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);

const deleteTask = (todos: Task[], id: string): Task[] =>
  todos.filter(t => t.id !== id);

const clearAll = (todos: Task[]): Task[] => [];

// ---- Normal Cases ----
describe('Task Screen Test Cases', () => {
  test('adds a task with correct text and priority', () => {
    const result = addTask([], 'Buy coffee', 'high');
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe('Buy coffee');
    expect(result[0].priority).toBe('high');
    expect(result[0].completed).toBe(false);
  });

  test('toggles a task from incomplete to complete', () => {
    const todos: Task[] = [{ id: '1', text: 'Study', completed: false, priority: 'medium' }];
    const result = toggleTask(todos, '1');
    expect(result[0].completed).toBe(true);
  });

  test('deletes a task by id', () => {
    const todos: Task[] = [
      { id: '1', text: 'Task 1', completed: false, priority: 'low' },
      { id: '2', text: 'Task 2', completed: false, priority: 'medium' },
    ];
    const result = deleteTask(todos, '1');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('2');
  });

  test('Clear All button clears all tasks from a populated list', () => {
    const todos: Task[] = [
      { id: '1', text: 'Task 1', completed: false, priority: 'low' },
      { id: '2', text: 'Task 2', completed: true, priority: 'high' },
    ];
    const result = clearAll(todos);
    expect(result).toHaveLength(0);
  });

  test('clearing an already empty list stays empty', () => {
    const result = clearAll([]);
    expect(result).toHaveLength(0);
  });

  test('priorityColor returns correct color for each level', () => {
    expect(priorityColor('low')).toBe('#81c784');
    expect(priorityColor('medium')).toBe('#ffb74d');
    expect(priorityColor('high')).toBe('#e57373');
  });

    test('does not add a task when text is empty', () => {
    const result = addTask([], '', 'medium');
    expect(result).toHaveLength(0);
  });

  test('does not add a task when text is only whitespace', () => {
    const result = addTask([], '     ', 'low');
    expect(result).toHaveLength(0);
  });

  test('toggling a completed task marks it incomplete', () => {
    const todos: Task[] = [{ id: '1', text: 'Done task', completed: true, priority: 'high' }];
    const result = toggleTask(todos, '1');
    expect(result[0].completed).toBe(false);
  });

  test('deleting a non-existent id does not change the list', () => {
    const todos: Task[] = [{ id: '1', text: 'Task 1', completed: false, priority: 'low' }];
    const result = deleteTask(todos, '999');
    expect(result).toHaveLength(1);
  });

  test('can add multiple tasks and all are stored', () => {
    let todos: Task[] = [];
    todos = addTask(todos, 'Task 1', 'low');
    todos = addTask(todos, 'Task 2', 'medium');
    todos = addTask(todos, 'Task 3', 'high');
    expect(todos).toHaveLength(3);
  });
});