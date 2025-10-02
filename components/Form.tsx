import { useState } from "react";
import styles from "../styles/Form.module.css";

export default function Form() {
    const [input, setInput] = useState("");
    const [submissionMessage, setSubmissionMessage] = useState("");

    // Define an event handler function
    const handleSubmit = (e: React.FormEvent) => {
        // Prevent default behavior (form submission)
        e.preventDefault();
        
        // Validate input
        if (input.trim() === "") { // Check if the trimmed input is empty
            setSubmissionMessage("Error: Please fill out the form!"); // Update error message
        } else { // If the input is valid
            setSubmissionMessage("Success: Form submitted!"); // Update success message
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                
                <h2>Form</h2>

                {/* Attach onSubmit handler to the form element */}
                <form className={styles.formContainer} onSubmit={handleSubmit}>

                    {/* Attach onChange handler to the input element */}
                    <input
                        className={styles.input}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Fill out this field"
                    />

                    <button className={styles.button} type="submit">Submit</button>
                </form>

                {/* Display success or error message if set*/}
                {submissionMessage && <p>{submissionMessage}</p>}

            </div>
        </div>
    );
}
