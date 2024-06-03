import "./globals.css";

import { Inter as FontSans } from "next/font/google"
import Script from "next/script";
import { cn } from "@/lib/utils"

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

// export const metadata = {
// 	title: "Calculating.World",
// 	description: `Free online calculators for date math, time calculations, percentages of years/months/days, and tracking time periods. Find elapsed and remaining times easily.`,
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Script
				src="https://beamanalytics.b-cdn.net/beam.min.js"
				data-token="9ea5cf2c-e873-4c7c-95b3-763d2a6440d4" async />
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>{children}</body>
		</html>
	);
}
