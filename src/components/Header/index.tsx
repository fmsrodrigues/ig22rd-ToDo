import styles from './styles.module.css';

import rocketImg from '../../assets/rocket.png';

export function Header(){
  return(
    <header className={styles.header}>
      <img src={rocketImg} alt="Logotipo do todo" />
      <strong>
        <span>to</span><span>do</span>
      </strong>
    </header>
  )
}