import Link from "next/link";

export default function Footer() {
    return (
        <footer className="container my-12 prose">
            <p className="text-lg font-semibold"><Link href="/">🌎 Calculating.World</Link></p>
            <h3>Other Pages</h3>
            <ul className="">
                <li>
                    <Link href="/year-percentage">What percentage of 2024 has passed?</Link>
                </li>
                <li>
                    <Link href="/five-number-summary-calculator">Five Number Summary Calculator</Link>
                </li>
            </ul>
        </footer>
    );
}