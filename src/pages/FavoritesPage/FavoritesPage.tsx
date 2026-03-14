import styles from './FavoritesPage.module.css';

export default function FavoritesPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Favorites</h1>
      <p className={styles.subtitle}>Your favorite psychologists are stored here.</p>
    </main>
  );
}
