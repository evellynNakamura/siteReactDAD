import styles from './Time.module.css'

export default function Time({ dia, hora, minuto, segundo }) {
    return (
        <div className={styles.timerContainer}>
          <div className={styles.timerSegment}>
            <span className={styles.timeLabel}>Days</span>
            <span className={styles.timeValue}>{dia}</span>
          </div>
          <div className={styles.timerSeparator}>:</div>
          <div className={styles.timerSegment}>
            <span className={styles.timeLabel}>Hours</span>
            <span className={styles.timeValue}>{hora}</span>
          </div>
          <div className={styles.timerSeparator}>:</div>
          <div className={styles.timerSegment}>
            <span className={styles.timeLabel}>Minutes</span>
            <span className={styles.timeValue}>{minuto}</span>
          </div>
          <div className={styles.timerSeparator}>:</div>
          <div className={styles.timerSegment}>
            <span className={styles.timeLabel}>Seconds</span>
            <span className={styles.timeValue}>{segundo}</span>
          </div>
        </div>
      )
}
