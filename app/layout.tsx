import "./globals.css";

const today = new Date();

export const metadata = {
	title: "Percent Complete",
	description: `Progress bar showing how far through the year we are in ${today.getFullYear()}.`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
