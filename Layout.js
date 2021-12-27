import styles from 'styles/layout.module.css';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
