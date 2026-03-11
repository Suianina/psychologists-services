import React from 'react';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to the Psychologists App</h1>
      <p className={styles.subtitle}>Find the right specialist and book a session.</p>
    </main>
  );
}
