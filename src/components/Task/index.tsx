import { Check, Trash } from 'phosphor-react';
import { ITask } from '../../entities';

import styles from './styles.module.css';

interface TaskProps {
  task: ITask;
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onToggleTaskCompletion, onDeleteTask }: TaskProps){
  function handleToggleCompletion() {
    onToggleTaskCompletion(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return(
    <div className={styles.task}>
      {/* <label className={task.finished ? styles.checkboxActivated : styles.checkboxDesactivated}>
        <input          
          type="checkbox" 
          checked={task.finished}
          onChange={handleToggleCompletion}
        />
        <div aria-hidden="true">
          {task.finished && <Check size={12} weight="bold"/>}
        </div>
      </label> */}


      <button 
        className={task.finished ? styles.checkboxActivated : styles.checkboxDesactivated} 
        onClick={handleToggleCompletion}
      >
        {task.finished && <Check size={10} weight="bold"/>}
      </button>
      <p className={task.finished ? styles.finishedTask : ''}>{task.title}</p>
      <button 
        title="Deletar tarefa" 
        className={styles.deleteTask}
        onClick={handleDeleteTask}
      >
        <Trash size={14}/>
      </button>
    </div>
  )
}