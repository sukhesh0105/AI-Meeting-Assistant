import { Bot } from 'lucide-react';
import styles from './SettingsPanel.module.css';
import type { SettingsPanelProps } from '../types';
import { Box } from './Box';

export function SettingsPanel({
  useLLM,
  systemPrompt,
  isLoadingPrompt,
  onToggleLLM,
  onPromptChange,
}: SettingsPanelProps) {
  return (
    <Box header="AI Settings" icon={Bot}>
      <div className={styles.container}>
        {/* AI Toggle */}
        <div className={styles.toggleRow}>
          <div className={styles.toggleInfo}>
            <h4>Enable AI Cleaning</h4>
            <p>Generate summaries, decisions and action items</p>
          </div>

          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={useLLM}
              onChange={(e) => onToggleLLM(e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        {/* Active Model */}
        <div className={styles.modelCard}>
          <div className={styles.modelTitle}>Active Local Model</div>
          <div className={styles.modelName}>Gemma 3 · 4B</div>
        </div>

        {/* System Prompt */}
        {useLLM && (
          <div className={styles.promptSection}>
            <label className={styles.promptLabel}>System Prompt</label>

            <textarea
              className={styles.promptBox}
              value={systemPrompt}
              onChange={(e) => onPromptChange(e.target.value)}
              disabled={isLoadingPrompt}
              placeholder="Enter the system prompt for the LLM..."
            />
          </div>
        )}
      </div>
    </Box>
  );
}
