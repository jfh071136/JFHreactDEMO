import React from "react";
import { useParams } from "react-router";
export default function Detail() {
    const { id, title } = useParams();
    const messageDATA = [
        { id: '01', content: '你好，台灣' },
        { id: '02', content: '你好，通霄' },
        { id: '03', content: '你好，未來的自己' },
    ]
    function contentMatch() {
        return messageDATA.find((item) => {
            return item.id === id
        }).content
    }

    return <div>

        <ul>
            <li>ID:{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{contentMatch()}</li>
        </ul>
    </div>;
}
