import { type LucideIcon } from 'lucide-react';
import styles from './Box.module.css';
import type { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  header?: string;
  icon?: LucideIcon;
  collapsible?: boolean;
  isExpanded?: boolean;
  onToggleExpanded?: () => void;
  className?: string;
  gap?: string;
}

export function Box({
  children,
  header,
  icon: Icon,
  collapsible = false,
  isExpanded = true,
  onToggleExpanded,
  className,
  gap,
}: BoxProps) {
  return (
    <div className={`${styles.box} ${className || ''}`}>
      {header && (
        <div className={styles.header}>
          {Icon && (
            <div className={styles.icon}>
              <Icon size={22} />
            </div>
          )}

          <h2 className={styles.title}>{header}</h2>
        </div>
      )}

      {(!collapsible || isExpanded) && (
        <div className={styles.content} style={gap ? { gap } : undefined}>
          {children}
        </div>
      )}
    </div>
  );
}
