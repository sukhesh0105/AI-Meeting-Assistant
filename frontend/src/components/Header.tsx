import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>LOCAL AI • WHISPER + GEMMA 3</span>

        <h1>AI Meeting Assistant</h1>

        <p>
          Record, transcribe, summarize meetings, and automatically extract key
          decisions and action items using local AI.
        </p>

        <div className={styles.tags}>
          <span>Whisper</span>
          <span>Ollama</span>
          <span>FastAPI</span>
          <span>React</span>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h2>3</h2>
          <span>AI Features</span>
          <p>Summary • Decisions • Actions</p>
        </div>

        <div className={styles.statCard}>
          <h2>100%</h2>
          <span>Runs Locally</span>
          <p>Whisper + Gemma 3</p>
        </div>
      </div>
    </header>
  );
}
