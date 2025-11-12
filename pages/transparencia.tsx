// pages/transparencia.tsx
import type { NextPage } from 'next'
import styles from '../styles/transparencia.module.css'  // 👈 ruta y nombre exactos

const Transparencia: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Transparencia</h1>
      <p className={styles.text}>
        Aquí va el contenido de transparencia de DonaSonrisas.
      </p>
    </main>
  )
}

export default Transparencia
