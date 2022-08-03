import styles from './relib-one.module.css';

/* eslint-disable-next-line */
export interface RelibOneProps {}

export function RelibOne(props: RelibOneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RelibOne!</h1>
    </div>
  );
}

export default RelibOne;
