import { Calendar, Users, FolderKanban, FileText } from 'lucide-react';
import styles from './MeetingMetadata.module.css';
import { Box } from './Box';

interface MeetingMetadataProps {
  title: string;
  date: string;
  participants: string;
  project: string;
  onTitleChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onParticipantsChange: (value: string) => void;
  onProjectChange: (value: string) => void;
}

export function MeetingMetadata({
  title,
  date,
  participants,
  project,
  onTitleChange,
  onDateChange,
  onParticipantsChange,
  onProjectChange,
}: MeetingMetadataProps) {
  return (
    <Box header="Meeting Details" icon={FileText}>
      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="meeting-title">Meeting Title</label>

          <input
            id="meeting-title"
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="e.g. Smart Inventory Sprint Review"
          />
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="meeting-date">
              <Calendar size={16} />
              Date
            </label>

            <input
              id="meeting-date"
              type="date"
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="meeting-project">
              <FolderKanban size={16} />
              Project / Team
            </label>

            <input
              id="meeting-project"
              type="text"
              value={project}
              onChange={(e) => onProjectChange(e.target.value)}
              placeholder="e.g. Engineering"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="meeting-participants">
            <Users size={16} />
            Participants
          </label>

          <input
            id="meeting-participants"
            type="text"
            value={participants}
            onChange={(e) => onParticipantsChange(e.target.value)}
            placeholder="e.g. Rahul, Priya, Sukhesh"
          />

          <span className={styles.helpText}>Separate names with commas</span>
        </div>
      </div>
    </Box>
  );
}
