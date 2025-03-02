"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailRoleAdmin() {
    const { id } = useParams();
    const [data, setData] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        const fetchRole= async () => {
            const response = await fetch(`https://freshskinweb.onrender.com/admin/role/${id}`);
            const data = await response.json();
            setData(data.data);
        };

        fetchRole();
    }, []);

    return (
        <>
            <div>{data.description}</div>
        </>
    )
}