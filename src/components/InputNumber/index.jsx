import React, { useState } from 'react'
import styles from './InputNumber.module.scss'

export default function InputNumber() {
    const [numberBinary, setNumberBinary] = useState('')
    const [numberDecimal, setNumberDecimal] = useState('')

    function handleChange(e) {
        setNumberBinary(e.target.value)
    }

    function handleClick() {
        if (validateInput(numberBinary)) {
            setNumberDecimal(BinaryToDecimal(numberBinary))
        } else {
            return alert("Input must contain only 0's and 1's and a maximum of 8 characters")
        }
    }

    function BinaryToDecimal(numberBinary) {
        let numberDecimal = 0

        for (let index = 0; index < numberBinary.length; index++) {
            numberDecimal = 2 * numberDecimal + parseInt(numberBinary[index])
        }

        return numberDecimal
    }

    function validateInput(numberBinary) {
        if (numberBinary.length < 1 || numberBinary.length > 8) return false

        for (let index = 0; index < numberBinary.length; index++) {
            if (numberBinary[index] !== '0' && numberBinary[index] !== '1') {
                return false
            }
        }

        return true
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.container__input}
                value={numberBinary}
                type="text"
                name="number"
                id="number"
                placeholder='Enter a binary number'
                onChange={handleChange}
            />
            <button
                className={styles.container__submit}
                type='submit'
                onClick={handleClick}
            >
                Convert
            </button>
            <div className={styles.container__output}>Your number is: {numberDecimal}</div>
        </div>
    )
}
