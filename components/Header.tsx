import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <Link className="flex-none text-xl font-semibold dark:text-white" href="/">🌎 Calculating.World</Link>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/five-number-summary-calculator">Five Number Summary Calculator</Link>
      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/year-percentage">What percentage of 2024 is over?</Link>
    </div>
  </nav>
</header>
  );
}