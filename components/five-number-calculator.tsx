'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';

import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export default function FiveNumberCalculator() {
    const [data, setData] = useState('');
    const [summary, setSummary] = useState<{
        min: number | null,
        q1: number | null,
        median: number | null,
        q3: number | null,
        max: number | null
    }>({
        min: null,
        q1: null,
        median: null,
        q3: null,
        max: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData(e.target.value);
    };

    const calculateSummary = () => {
        let dataArray = data
            .split(',')
            .map(Number)
            .sort((a, b) => a - b);

        if (dataArray.length === 0 || dataArray.some(isNaN)) {
            alert('Please enter a valid set of numbers.');
            return;
        }

        const min = dataArray[0];
        const max = dataArray[dataArray.length - 1];
        const median = calculateMedian(dataArray);
        const q1 = calculateMedian(
            dataArray.slice(0, Math.floor(dataArray.length / 2))
        );
        const q3 = calculateMedian(
            dataArray.slice(Math.ceil(dataArray.length / 2))
        );

        setSummary({ min, q1, median, q3, max });
    };

    const calculateMedian = (arr: number[]) => {
        const mid = Math.floor(arr.length / 2);
        return arr.length % 2 !== 0
            ? arr[mid]
            : (arr[mid - 1] + arr[mid]) / 2;
    };


    return (
        <>
            <div className='max-w-[500px] mx-auto'>

                <Label className=' text-2xl font-bold' htmlFor="dataInput">
                    Enter your data (comma-separated):
                </Label>
                <Textarea
                    id="dataInput"
                    className='mt-4'
                    value={data}
                    onChange={handleChange}
                    placeholder="e.g., 1, 2, 3, 4, 5"
                />
                <Button className="mt-4" onClick={calculateSummary}>
                    Calculate Summary
                </Button>
            </div>
            <h2 className="mt-4 font-bold text-2xl">Results</h2>


            <div className="grid py-4 lg:grid-cols-3 gap-2 lg:grid-rows-3">
                <Card className="row-span-3 col-span-1 flex flex-col justify-center">

                    <CardHeader className="pb-2">
                        <CardDescription>Minimum</CardDescription>
                        <CardTitle className="text-4xl">
                            {summary.min || '--'}{' '}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            The smallest data point in the dataset.
                        </div>
                    </CardContent>
                </Card>
                <Card className="row-span-1 col-span-1 flex flex-col justify-center">
                    <CardHeader className="pb-2">
                        <CardDescription>First Quartile (Q1)</CardDescription>
                        <CardTitle className="text-4xl">
                            {summary.q1 || '--'}{' '}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            The median of the lower half of the dataset (25th
                            percentile).
                        </div>
                    </CardContent>
                </Card>

                <Card className="row-span-2 col-span-1 flex flex-col justify-center">
                    <CardHeader className="pb-2">
                        <CardDescription>Third Quartile (Q3)</CardDescription>
                        <CardTitle className="text-4xl">
                            {summary.q3 || '--'}{' '}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            The middle value of the dataset (50th percentile).
                        </div>
                    </CardContent>
                </Card>
                <Card className="row-span-2 col-span-1 flex flex-col justify-center">
                    <CardHeader className="pb-2">
                        <CardDescription>Median</CardDescription>
                        <CardTitle className="text-4xl">
                            {summary.median || '--'}{' '}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            The median of the upper half of the dataset (75th percentile).
                        </div>
                    </CardContent>
                </Card>
                <Card className="row-span-2 col-span-1 flex flex-col justify-center">
                    <CardHeader className="pb-2">
                        <CardDescription>Maximum</CardDescription>
                        <CardTitle className="text-4xl">
                            {summary.max || '--'}{' '}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-xs text-muted-foreground">
                            The largest data point in the dataset.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
