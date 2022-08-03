import styles from './relib-three.module.css';

/* eslint-disable-next-line */
export interface RelibThreeProps {}

export function RelibThree(props: RelibThreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RelibThree!</h1>
    </div>
  );
}

export default RelibThree;
