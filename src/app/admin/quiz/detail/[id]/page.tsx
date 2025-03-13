"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailQuizAdmin() {
    const { id } = useParams();
    const [data, setData] = useState()

    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/question/group/${id}`);
            const data = await response.json();

            console.log(data);
        }
    }, [])
    return(
        <>
            das
        </>
    )
}