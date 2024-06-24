import "../app/globals.css";

import Footer from "./Footer";
import Link from "next/link";
import Script from "next/script";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Script
                src="https://beamanalytics.b-cdn.net/beam.min.js"
                data-token="9ea5cf2c-e873-4c7c-95b3-763d2a6440d4" async />
            {children}
            <Footer />
        </>
    );
}
