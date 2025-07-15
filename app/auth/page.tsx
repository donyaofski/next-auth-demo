'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AuthForm.module.scss';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function AuthPage() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const validatePhone = (phone: string) => /^(\+98|0)?9\d{9}$/.test(phone);

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError('شماره موبایل معتبر نیست');
      return;
    }
    try {
      const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data = await res.json();
      localStorage.setItem('user', JSON.stringify(data.results[0]));
      router.push('/dashboard');
    } catch (err) {
      setError('خطا در دریافت اطلاعات کاربر');
    }
  };

  return (
    <div className={styles.container}>
      <h2>ورود</h2>
      <Input
        type="text"
        placeholder="شماره موبایل (مثلاً 09123456789)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
}