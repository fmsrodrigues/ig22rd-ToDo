import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './styles.module.css';

interface TaskFormProps {
  onCreateTask: (title: string) => void;
}

export function TaskForm({ onCreateTask }: TaskFormProps){
  const [taskTitle, setTaskTitle] = useState("");

  function handleCreateTask(e: FormEvent):void {
    e.preventDefault();

    onCreateTask(taskTitle);
    setTaskTitle("");
  }

  function handleTaskTitleChange(e: ChangeEvent<HTMLInputElement>):void {
    e.target.setCustomValidity('');
    setTaskTitle(e.target.value);  
  }

  function handleTaskTitleInvalid(e: InvalidEvent<HTMLInputElement>):void {
    e.target.setCustomValidity('Campo obrigatório');
  }

  return(
    <form className={styles.form} onSubmit={handleCreateTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={taskTitle}
        onChange={handleTaskTitleChange}
        onInvalid={handleTaskTitleInvalid}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  )
}