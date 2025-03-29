'use client'

import { useEffect, useState } from "react";
import { MS_PER_UPDATE, PROGRESS_INCREMENT } from "./animation-constants";
import { flushSync } from "react-dom";

export default function useSetIntervalAnimation() {
    const [progress, setProgress] = useState(0);
    const [numUpdates, setNumUpdates] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            flushSync(() => {
                setProgress((prev) => (prev + PROGRESS_INCREMENT) % 1);
                setNumUpdates((prev) => prev + 1);
            });
        }, MS_PER_UPDATE);

        return () => clearInterval(interval);
    }, []);

    return {
        progress,
        numUpdates,
    };
}
