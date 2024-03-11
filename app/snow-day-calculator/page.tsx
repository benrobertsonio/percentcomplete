import axios from 'axios';

interface GetServerSidePropsContext {
    query: {
        latitude: string;
        longitude: string;
    };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const latitude = context.query.latitude;
    const longitude = context.query.longitude;
    const response = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}/forecast`);

    const snowfall = response.data.properties.periods[0].snow; // This depends on the structure of the API response

    let probabilityOfClosure;

    if (snowfall > 10) {
        probabilityOfClosure = 'High';
    } else if (snowfall > 5) {
        probabilityOfClosure = 'Medium';
    } else {
        probabilityOfClosure = 'Low';
    }

    return {
        props: {
            probabilityOfClosure,
        },
    };
}

interface SnowDayCalculatorProps {
    probabilityOfClosure: string;
}
export default function SnowDayCalculator({ probabilityOfClosure }: SnowDayCalculatorProps) {
    return (
        <div>
            <h1>Snow Day Calculator</h1>
            <p>The probability of school closure is: {probabilityOfClosure}</p>
        </div>
    );
}