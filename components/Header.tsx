export default function Header() {
    return (
        <header
            style={{
                border: "1px solid black",
                borderRadius: "8px",
                padding: "8px",
                margin: "16px 16px 0 16px",
                textAlign: "center",
            }}
        >
            <h1>Welcome to My React App</h1>
            <p>This is an introductory React app using components and props.</p>
        </header>
    );
}