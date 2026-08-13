import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Built with React, FastAPI, Whisper & Ollama</p>
      <span>© 2026 Sukhesh Etikala</span>
    </footer>
  );
}
