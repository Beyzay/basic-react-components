type MainContentProps = {
    title: string;
    content: string;
}

export default function MainContent({title, content}: MainContentProps) {
    return (
        <article style={{
                padding: "8px",
                margin: "16px 16px 0 16px",
                maxWidth: "600px",
            }}
        >
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    );
}