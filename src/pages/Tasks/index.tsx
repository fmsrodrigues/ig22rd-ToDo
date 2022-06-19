import { useState } from 'react';

import { ITask } from '../../entities';

import { TaskForm } from '../../components/TaskForm';
import { TaskList } from '../../components/TasksList';

import styles from './styles.module.css';

export function Tasks(){
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(title: string): void {
    setTasks(state => [
      {
        id: crypto.randomUUID(),
        title,
        finished: false
      },
      ...state,
    ]);
  }

  function removeTask(id: string): void {
    setTasks(state => state.filter(task => task.id !== id));
  }

  function toggleTaskCompletion(id: string): void {
    setTasks(state => {
      let finishedTasks: ITask[] = [];
      let unfinishedTasks: ITask[] = [];

      state.forEach(task => {
        if(task.id === id) {
          return finishedTasks.push({ ...task, finished: !task.finished });
        };

        if(task.finished) {
          return finishedTasks.push(task);
        }
  
        return unfinishedTasks.push(task);
      });     

      finishedTasks.sort((a, _) => a.finished ? 1 : -1);

      return [...unfinishedTasks, ...finishedTasks];
    });
  }

  return(
    <div className={styles.container}>
      <TaskForm onCreateTask={addTask}/>
      <div className={styles.taskList}>
        <TaskList 
          tasks={tasks} 
          onToggleTaskCompletion={toggleTaskCompletion} 
          onDeleteTask={removeTask}
        />
      </div>
    </div>
  )
}