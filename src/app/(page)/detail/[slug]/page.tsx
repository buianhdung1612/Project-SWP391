import SaleCode from "@/app/components/SaleCode/SaleCode"
import Section1 from "./Section1"

export default async function DetailProductPage() {
    const data: any = [
        {
            percent: "10",
            code: "DINOS10",
            minimum: "500"
        },
        {
            percent: "10",
            code: "DINOS10",
            minimum: "500"
        },
        {
            percent: "10",
            code: "DINOS10",
            minimum: "500"
        },
        {
            percent: "10",
            code: "DINOS10",
            minimum: "500"
        },
    ]

    return (
        <>
            <Section1/>
            <SaleCode data={data}/>
        </>
    )
}