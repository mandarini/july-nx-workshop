import styles from './relib-two.module.css';

/* eslint-disable-next-line */
export interface RelibTwoProps {}

export function RelibTwo(props: RelibTwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RelibTwo!</h1>
    </div>
  );
}

export default RelibTwo;
