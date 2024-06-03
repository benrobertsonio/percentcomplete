import FiveNumberCalculator from '@/components/five-number-calculator';

export const metadata = {
    title: "Five Number Summary Calculator",
    description: `A simple tool to calculate the five number summary of a dataset.`,
};


export default function FiveNumberSummaryCalculator() {
    return (
        <>
            <div className="container my-12 prose">
                <h1>Five Number Summary Calculator</h1>
            </div>
            <div className="container my-12 prose">
                <h2>What is a Five Number Summary?</h2>
                <p>
                    A five-number summary calculator is a tool used in
                    statistics to summarize a dataset and provide key
                    information about its distribution.</p>
                <p>The five-number summary
                    includes the following five statistics:
                </p>
                <ol>
                    <li>Minimum: The smallest data point in the dataset.</li>
                    <li>
                        First Quartile (Q1): The median of the lower half of the
                        dataset (25th percentile).
                    </li>
                    <li>
                        Median (Q2): The middle value of the dataset (50th
                        percentile).
                    </li>
                    <li>
                        Third Quartile (Q3): The median of the upper half of the
                        dataset (75th percentile).
                    </li>
                    <li>Maximum: The largest data point in the dataset.</li>
                </ol>
            </div>
            <div className="container">
                <FiveNumberCalculator />
            </div>
            <div className="container my-12 prose">
                <h2>What is a Five Number Summary Calculator for?</h2>
                <p>
                    The five-number summary provides a concise overview of the data's central tendency, spread, and range. It is particularly useful for:
                </p>
                <ul>
                    <li>Identifying the spread and skewness of the data.</li>
                    <li>Comparing different datasets.</li>
                    <li>Detecting outliers.</li>
                    <li>Providing a basis for creating box plots, which visually represent the distribution of the data.</li>
                </ul>
            </div>
        </>
    );
}
