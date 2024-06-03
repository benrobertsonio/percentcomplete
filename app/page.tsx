import "nes.css/css/nes.min.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata = {
    title: "Calculating.World",
    description: `Free online calculators for date math, time calculations, percentages of years/months/days, and tracking time periods. Find elapsed and remaining times easily.`,
};

export default function Home() {
    // today's date
    const today = new Date();


    return (
        <>
            <Head>
                <title>Calculating.World</title>
                <meta property="og:title" content="Calculating.World" />
                <meta property="og:type" content="webpage" />
                <meta property="og:url" content="https://calculating.world" />
                <meta property="og:site_name" content="Calculating.World" />
                <meta
                    name="description"
                    content={`What percentage of the year has passed in ${today.getFullYear()}?`}
                />
            </Head>
            <div style={{
                fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            }}>
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",

                    }}
                >
                    <main

                        style={{
                            width: "90%",
                            margin: "0 auto",
                            maxWidth: "70ch",
                            textAlign: "center",
                        }}
                    >
                        <div className="prose lg:prose-xl">
                            <h1>🌎 Calculating.World</h1>
                            <p>
                                Free online calculators for date math, time calculations, percentages of years/months/days, and tracking time periods. Find elapsed and remaining times easily.
                            </p>
                            <ul>
                                <li style={{ listStyleType: "none", textDecoration: "underline" }}><Link href="/year-percentage">What percent of the year has passed in {today.getFullYear()}?</Link></li>
                                <li style={{ listStyleType: "none", textDecoration: "underline" }}><Link href="/five-number-summary-calculator">Five Number Summary Calculator</Link></li>
                            </ul>
                        </div>

                    </main>
                    <footer style={{ marginTop: "2em" }}>
                        {/* <p className="nes-text">
                            Made with <i className="nes-icon heart is-small" /> by Ben
                            Robertson
                        </p> */}
                    </footer>
                </div>
            </div>
        </>
    );
}
