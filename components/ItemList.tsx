import React, { useState } from "react";
import styles from "../styles/ItemList.module.css";

export default function ItemList() {

    // Initialize the "items" state to a list (array) of string items
    const [items, setItems] = useState([
        { id: 1, title: "Apple" },
        { id: 2, title: "Orange" },
        { id: 3, title: "Banana" },
        { id: 4, title: "Grapes" },
        { id: 5, title: "Apricot" },
        { id: 6, title: "Avocado" },
        { id: 7, title: "Guava" },
        { id: 8, title: "Berries" },
    ]);

    // Initialize the "inputValue" state to a "" for adding a new item
    const [inputValue, setInputValue] = useState("");

    // Initialize the "isFilterOn" state to false for filtering items
    const [isFilterOn, setIsFilterOn] = useState(false);

    // Initialize the "filterLetter" state to a "" for filtering items
    const [filterLetter, setFilterLetter] = useState("");

    // Initialize an array variable with objects from the "items"
    // that stores only the "item" objects by filtering by the 1st letter of the item's title if the "isFilterOn" is true and "filterLetter" is not an empty string
    // or that stores all the "item" objects if the "filterLetter" is an empty string
    const filteredItems = 
        isFilterOn && filterLetter ? items.filter(item => 
            item.title.toLowerCase().startsWith(filterLetter.toLowerCase())
        ) : items;


    // Define a function to pass a new object into the "items" list (array)
    const handleAddItem = () => {

        // Trim the "inputValue"
        const trimmedInputValue = inputValue.trim();
        if (!trimmedInputValue) return; // Stop executing the function if the "trimmedInputValue" is an empty string

        // Initialize a variable to store the highest id + 1 in the list, or if the list is empty 1
        const newId = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;

        // Initialize a variable with the "newId" and the new "trimmedInputValue"
        const newItem = { id: newId, title: trimmedInputValue }
        
        // and that updates the "items" state to include the "newItem"
        setItems([...items, newItem]);

        // Update the "inputValue" state to "" for clearing the input field after each addition
        setInputValue("");
    }

    // Define a function to update the "items" state with only items whose id is not the given id
    const handleDeleteItem = (id: number) => {
        setItems(items.filter((item) => item.id !== id));
    }

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>

                <h2 className={styles.h2}>Dynamic List</h2>

                {/* Render the content of the li element with items or filtered items */}
                <ul className={styles.ul}>
                    {filteredItems.map((item) => (
                        <li key={item.id} className={styles.li}>
                            <span>{item.title}</span>

                            {/* Attach onClick event handler to the button element 
                            to call the "handleDeleteItem" function with the listed item's id */}
                            <button
                                onClick={() => handleDeleteItem(item.id)}
                                className={styles.button}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                <div className={styles.addItemContainer}>

                    {/* Input field for adding a new item with the entered "title" */}
                    {/* Attach onChange event handler to the input element 
                    to update the "inputValue" state to the entered value */}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="New item"
                        className={styles.inputText}
                    />

                    {/* Attach onClick event handler to the button element 
                    to call the "handleAddItem" function */}
                    <button
                        onClick={handleAddItem}
                        className={styles.button}
                    >
                        Add Item
                    </button>
                </div>

                <div className={styles.filterContainer}>
                    <label>
                        {/* Attach onChange event handler to the input element
                        to update the "isFilterOn" state to checbox checked status */}
                        <input
                            type="checkbox"
                            checked={isFilterOn}
                            onChange={e => setIsFilterOn(e.target.checked)}
                            className={styles.inputCheckbox}
                        />
                        Show Only Items Starting with "{filterLetter.toUpperCase()}"
                    </label>

                    {/* Attach onChange event handler to the input element
                    to update the "filterLetter" state to the entered value's 1st letter */}
                    <input
                        type="text"
                        value={filterLetter}
                        onChange={e => setFilterLetter(e.target.value.slice(0, 1))}
                        placeholder="Enter a letter"
                        maxLength={1}
                        className={styles.inputText}
                    />
                </div>

            </div>
        </div>
    );
}