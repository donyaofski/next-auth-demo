import styles from './Input.module.scss';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return <input className={styles.input} {...props} />;
}