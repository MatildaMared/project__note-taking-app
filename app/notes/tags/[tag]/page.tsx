import React from "react";

async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
    const tag = (await params).tag;

    return <div>Page for tag: {tag}</div>;
}

export default TagPage;
