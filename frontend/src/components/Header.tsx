import styles from './Header.module.css';
import type { HeaderProps } from '../types';

export function Header(_props: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>AI Meeting Assistant</h1>
      <p className={styles.subtitle}>
        Record, transcribe, summarize meetings, and extract action items with
        local AI
      </p>
    </header>
  );
}
