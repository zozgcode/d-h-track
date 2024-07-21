"use client";

import React, { useEffect, useState, Suspense } from 'react';
import ResultPage from '../resultPage/ResultPage';
import { Package } from '@/utils/types';
import { mockPackages } from '../resultPage/mockData/MockData';
import { useSearchParams } from "next/navigation";
import Loader from '../loader/Loader';
import PackageNotFound from '../notFounf/PackageNotFound';

function TrackPackage() {
    const [packageDetails, setPackageDetails] = useState<Package | null>(null);
    const [error, setError] = useState('');

    const searchParams = useSearchParams();
    const trackingNumber = searchParams.get('trackingNumber');

    useEffect(() => {
        if (trackingNumber) {
            const foundPackage = mockPackages.find(pkg => pkg.tracking_number === trackingNumber);
            if (foundPackage) {
                setPackageDetails(foundPackage);
            } else {
                setError('Package not found');
            }
        }
    }, [trackingNumber]);

    return (
        <div>
            {error && <PackageNotFound />}
            {packageDetails ? (
                <ResultPage packageInfo={packageDetails} />
            ) : (
                !error && <Loader />
            )}
        </div>
    );
}

export default function TrackPackageWrapper() {
    return (
        <Suspense fallback={<Loader />}>
            <TrackPackage />
        </Suspense>
    );
}
