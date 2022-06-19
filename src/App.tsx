import { Header } from './components/Header';
import { Tasks } from './pages/Tasks';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Tasks />
      </main>
    </>
  )
}

export default App
