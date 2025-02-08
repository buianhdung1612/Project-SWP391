import TitleTrademark from "./Title&Trademark";
import Price from "./Price";
import Action from "./Action";
import MoreInfo from "./MoreInfo";

export default function Information() {
    return (
        <>
            <div className="flex-1">
                <TitleTrademark/>
                <Price/>
                <Action/>
                <MoreInfo/>
            </div>
        </>
    )
}