import { ClipboardList } from 'lucide-react';
import { useState } from 'react';
import styles from './TextInputZone.module.css';
import type { TextInputZoneProps } from '../types';

export function TextInputZone({
  isProcessing,
  onTextSubmit,
}: TextInputZoneProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = async () => {
    if (!inputText.trim() || isProcessing) return;

    await onTextSubmit(inputText.trim());
    setInputText('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <ClipboardList size={22} />
        </div>

        <div>
          <div className={styles.title}>Paste Meeting Transcript</div>
          <div className={styles.subtitle}>
            Paste raw meeting text and let AI generate structured notes
          </div>
        </div>
      </div>

      <textarea
        className={styles.textarea}
        placeholder="Paste your meeting transcript here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        disabled={isProcessing}
      />

      <button
        className={styles.button}
        disabled={!inputText.trim() || isProcessing}
        onClick={handleSubmit}
      >
        {isProcessing ? 'Processing...' : 'Generate Meeting Notes'}
      </button>
    </div>
  );
}
