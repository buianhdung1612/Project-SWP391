import AboveHeader from "./AboveHeader";
import Section1 from "./Section1";
import Section2 from "./Section2";


export default function Header() {
    return (
        <>
            <header className="sticky z-[999] top-0 left-0 bg-white">
                <AboveHeader/>
                <Section1 />
                <Section2 />
            </header>
        </>
    );
}
