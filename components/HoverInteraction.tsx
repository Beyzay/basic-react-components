import React, { useState } from "react";
import styles from "../styles/HoverInteraction.module.css";

export default function HoverInteraction() {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>

                {/* Attach onMouseOver and onMouseOut handlers to the div element
                to toggle "isHovered" state when the div is hovered or not */}
                <div
                    className={isHovered ? styles.hovered : styles.default}
                    onMouseOver={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}
                >
                    Hover here and watch!
                </div>

            </div>
        </div>
    );
}
