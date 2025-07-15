'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (!user) {
      router.push('/auth');
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}