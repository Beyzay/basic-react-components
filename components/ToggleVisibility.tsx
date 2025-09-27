import { useState } from "react";
import styles from "../styles/ToggleVisibility.module.css";

export default function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>

                {/* Attach onClick handler to the button element */}
                <button 
                    className={styles.button}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? "Hide" : "Show"}
                </button>

                {/* Toggle content's visibility when the button is clicked */}
                {isVisible && <p className={styles.text}>Peekaboo! 👻</p>}
            
            </div>
        </div>
    );
}
