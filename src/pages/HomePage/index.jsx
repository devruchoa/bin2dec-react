import React from 'react'
import InputNumber from '../../components/InputNumber'
import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <main className={styles.main}>
        <h2 className={styles.main__title}>Bin2Dec - REACT</h2>
        <InputNumber />
    </main>
  )
}
