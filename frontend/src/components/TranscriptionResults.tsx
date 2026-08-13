import { FileText, Sparkles } from 'lucide-react';
import styles from './TranscriptionResults.module.css';
import type { TranscriptionResultsProps } from '../types';
import { TextBox } from './TextBox';
import { Box } from './Box';

function parseMeetingNotes(text: string) {
  const sections = {
    summary: '',
    decisions: [] as string[],
    actions: [] as string[],
  };

  let current = '';

  text.split('\n').forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('# Meeting Summary')) {
      current = 'summary';
      return;
    }

    if (trimmed.startsWith('# Key Decisions')) {
      current = 'decisions';
      return;
    }

    if (trimmed.startsWith('# Action Items')) {
      current = 'actions';
      return;
    }

    if (!trimmed) return;

    if (current === 'summary') {
      sections.summary += trimmed + ' ';
    } else if (current === 'decisions') {
      sections.decisions.push(trimmed.replace(/^-\s*/, ''));
    } else if (current === 'actions') {
      sections.actions.push(trimmed.replace(/^-\s*/, ''));
    }
  });

  return sections;
}

export function TranscriptionResults({
  rawText,
  cleanedText,
  useLLM,
  isCopied,
  isCleaningWithLLM,
  isProcessing,
  isOriginalExpanded,
  onCopy,
  onToggleOriginalExpanded,
}: TranscriptionResultsProps) {
  // Show component if either processing or rawText exists
  if (!isProcessing && !rawText) {
    return null;
  }

  const displayText = useLLM && cleanedText ? cleanedText : rawText;
  const meetingNotes = cleanedText ? parseMeetingNotes(cleanedText) : null;

  return (
    <div className={styles.container}>
      <Box
        header="Original Transcription"
        icon={FileText}
        collapsible={true}
        isExpanded={isOriginalExpanded}
        onToggleExpanded={onToggleOriginalExpanded}
      >
        <TextBox
          mode="display"
          variant="default"
          value={rawText || ''}
          isLoading={isProcessing && !rawText}
          maxHeight="300px"
        />
      </Box>

      {/* AI Meeting Notes */}
      {useLLM && (cleanedText || isCleaningWithLLM) && (
        <Box header="AI Meeting Notes" icon={Sparkles}>
          {cleanedText}

          {isCleaningWithLLM ? (
            <TextBox
              mode="display"
              variant="default"
              value=""
              isLoading={true}
            />
          ) : (
            <div className={styles.meetingCards}>
              <div className={styles.card}>
                <h3>📝 Meeting Summary</h3>
                <p>{meetingNotes?.summary}</p>
              </div>

              <div className={styles.card}>
                <h3>✅ Key Decisions</h3>
                <ul>
                  {meetingNotes?.decisions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.card}>
                <h3>📌 Action Items</h3>
                <ul>
                  {meetingNotes?.actions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                className={styles.copyButton}
                onClick={() => cleanedText && onCopy(cleanedText)}
              >
                {isCopied ? '✓ Copied' : '📋 Copy Meeting Notes'}
              </button>
            </div>
          )}
        </Box>
      )}

      {/* Copy button for non-LLM case */}
      {!useLLM && displayText && (
        <TextBox
          mode="display"
          variant="default"
          value={displayText}
          showCopyButton={true}
          isCopied={isCopied}
          onCopy={() => onCopy(displayText)}
          maxHeight="300px"
        />
      )}
    </div>
  );
}
