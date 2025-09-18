import { useState } from "react";
import styles from "../styles/Counter.module.css";

export default function Counter() {
    const [count, setCount] = useState(0); // Initializes the state of count to 0

    return(
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <button
                    className={styles.button}
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
                
                <h2 className={styles.count}>
                    Count: <span className={styles.countNumber}>{count}</span>
                </h2>

                <button
                    className={styles.button}
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
}