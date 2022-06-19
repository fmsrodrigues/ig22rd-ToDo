import { ITask } from '../../entities';

import clipboardSvg from '../../assets/clipboard.svg';

import styles from './styles.module.css';
import { Task } from '../Task';

interface TasksListProps {
  tasks: ITask[];
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, onToggleTaskCompletion, onDeleteTask }: TasksListProps){
  const finishedTasks = tasks.reduce((acc, task) => task.finished ? acc + 1 : acc, 0);
  const finishedTasksText = tasks.length === 0 ? finishedTasks : `${finishedTasks} de ${tasks.length}`

  return(
    <>
      <header className={styles.header}>
          <strong className={styles.totalTasks}>
            <span>Tarefas criadas</span> <span>{tasks.length}</span>
          </strong>
          <strong className={styles.finishedTasks}>
            <span>Concluídas</span> <span>{finishedTasksText}</span>
          </strong>
      </header>
      
      {tasks.length > 0 ? (
        <div className={styles.tasks}>
          {tasks.map((task) => (
            <Task 
              key={task.id}
              task={task}
              onToggleTaskCompletion={onToggleTaskCompletion} 
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyTasks}>
          <img src={clipboardSvg} alt="Logotipo do ignite" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}      
    </>
  )
}