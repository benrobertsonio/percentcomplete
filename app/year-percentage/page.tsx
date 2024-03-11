import Image from 'next/image';
import { Press_Start_2P } from 'next/font/google';
import 'nes.css/css/nes.min.css';
import Head from 'next/head';

const pressStart2P = Press_Start_2P({
	weight: '400',
	subsets: ['latin'],
});

export const metadata = {
	title: `What Percentage of the Year ${new Date().getFullYear()} Has Gone
	By?`,
	description: `Progress bar showing how far through the year we are in ${new Date().getFullYear()}.`,
};

export default function Home() {
	// today's date
	const today = new Date();
	// first day of the year
	const firstDay = new Date(today.getFullYear(), 0, 1);
	// check if it's a leap year
	const isLeapYear =
		(today.getFullYear() % 4 === 0 &&
			today.getFullYear() % 100 !== 0) ||
		today.getFullYear() % 400 === 0;
	// get the total days in the current year
	const daysInYear = isLeapYear ? 366 : 365;
	// milliseconds in a year
	const msInYear = 1000 * 60 * 60 * 24 * daysInYear;

	// time since first day of the year
	const timeSince = today.getTime() - firstDay.getTime();

	const percent = (timeSince / msInYear).toLocaleString(undefined, {
		style: 'percent',
		minimumFractionDigits: 1,
	});

	const percentNumber = (timeSince / msInYear) * 100;

	const todayFormatted = today.toLocaleDateString(undefined, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	// calculate the current day of the year
	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0);
	const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor(diff / oneDay);

	return (
		<>
			<Head>
				<title>
					What Percentage of the Year {today.getFullYear()} Has Gone
					By?
				</title>
				<meta
					property="og:title"
					content={`What Percentage of the Year ${today.getFullYear()} Has Gone By?`}
				/>
				<meta property="og:type" content="webpage" />
				<meta
					property="og:url"
					content="https://calculating.world/year-percentage"
				/>
				<meta property="og:site_name" content="Calculating.World" />
				<meta
					name="keywords"
					content="percentage of year elapsed, 2024 calendar, calculate date progression"
				/>
				<meta
					name="description"
					content={`Calculate what percentage of the year ${today.getFullYear()} has elapsed by any given date. Useful for tracking goals, timing events, and measurements based on the calendar year.`}
				/>
			</Head>
			<div
				style={{
					fontFamily:
						'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
				}}
			>
				<div
					style={{
						height: '100vh',
						width: '100vw',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						backgroundColor: '#212529',
					}}
				>
					<main
						className="nes-container with-title is-centered is-dark"
						style={{
							width: '90%',
							margin: '0 auto',
							maxWidth: '70ch',
							textAlign: 'center',
						}}
					>
						<h1>
							Calculating the Percentage of {today.getFullYear()}{' '}
							That's Elapsed
						</h1>
						<p>
							By {todayFormatted} approximately {percent} of the year has
							gone by. This is based on there being {daysInYear} days in 2024.
						</p>

						<section>
							<h2>How to Calculate Percentage of Year Passed</h2>
							<p>
								To calculate what percentage of the year has elapsed
								on any given date, you simply take the day number for
								that date and divide it by the total number of days in
								the year. Then multiply by 100 to get the percentage.
							</p>
							<p>
								For {todayFormatted}, the calculation would look like:
								<br />
								Day {day} / {daysInYear} total days in {today.getFullYear()} = {(percentNumber / 100).toFixed(4)}
								<br />
								{(percentNumber / 100).toFixed(4)} x 100 = {percent}
							</p>
							<p>
								So by {todayFormatted}, around {percent} of the year
								had passed.
							</p>
						</section>

						<section>
							<h3>Why Calculating Elapsed Year Percentage Matters</h3>
							<p>
								Knowing what percentage of the year has gone by can be
								useful for keeping track of goals, deadlines, and
								milestones. Many personal and professional objectives
								are set on a year-basis, so calculating the elapsed
								percentage helps measure progress.
							</p>
							<p>
								It can also be helpful for timing seasonal activities,
								events, and sales. Businesses will sometimes run
								promotions or activate marketing campaigns based on
								what portion of the year has passed.
							</p>
						</section>

						<section>
							<h4>Calculate Any Date's Elapsed Percentage</h4>
							<p>
								Use this online calculator tool to find out what
								percentage of {today.getFullYear()} has elapsed by any specific date.
								Simply enter the month and day:
							</p>
							<section className="nes-container with-title is-centered is-dark">
								<h3 className="nes-text title">
									Today is{' '}
									{today.toLocaleDateString(undefined, {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
									.
								</h3>
								<h2>
									<span className="nes-text">
										The year {new Date().getFullYear()} is{' '}
										<span className="nes-text is-success">
											{percent}
										</span>{' '}
										complete.
									</span>
								</h2>
								<br />
								<progress
									className="nes-progress is-pattern"
									value={percentNumber}
									max={100}
								/>
								<br />
								<p
									style={{ marginTop: '1em', fontSize: '1.2em' }}
									className="nes-text"
								>
									{percent}
								</p>
							</section>
							<p>
								With this information, you can easily keep track of
								how much of {today.getFullYear()} has gone by at any point in the year.
								Knowing the elapsed percentage helps with planning,
								tracking progress, and timing events appropriately.
							</p>
						</section>
					</main>

					<footer style={{ marginTop: '2em' }}>
						<p className="nes-text" style={{ color: 'white' }}>
							Made with <i className="nes-icon heart is-small" /> by
							Ben Robertson
						</p>
					</footer>
				</div>
			</div>
		</>
	);
}
