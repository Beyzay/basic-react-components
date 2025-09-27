import { use, useState } from "react";
import styles from "../styles/FilteredList.module.css";

export default function FilteredList() {
    const [isActive, setIsActive] = useState(true); // Initialize "isActive" state to "true

    //Declare a variable to store list of items
    const items = [
        { id: 1, name: "Item 1", active: true },
        { id: 2, name: "Item 2", active: false },
        { id: 3, name: "Item 3", active: false },
        { id: 4, name: "Item 4", active: true },
        { id: 5, name: "Item 5", active: true },
        { id: 6, name: "Item 6", active: true },
    ];

    // Declare a variable to store list of items filtered by "isActive" state
    const filteredItems = items.filter(item => item.active === isActive);

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>

                <h2>Filtered List</h2>

                {/* Attach onClick handler to the button elements
                to toggle filter ("isActive" state) when a button is clicked */}
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={() => setIsActive(true)}>Show Active</button>
                    <button className={styles.button} onClick={() => setIsActive(false)}>Show Inactive</button>
                </div>

                {/* Render filtered list of items when a button is clicked */}
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
}
