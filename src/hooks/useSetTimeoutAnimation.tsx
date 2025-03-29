'use client'

import { useEffect, useState } from "react";
import { MS_PER_UPDATE, PROGRESS_INCREMENT } from "./animation-constants";
import { flushSync } from "react-dom";

export default function useSetTimeoutAnimation() {
    const [progress, setProgress] = useState(0);
    const [startTimeMs, setStartTimeMs] = useState(0);
    const [numUpdates, setNumUpdates] = useState(0);

    useEffect(() => {
        setStartTimeMs(Date.now());
        setNumUpdates(0);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            flushSync(() => {
                setProgress((prev) => (prev + PROGRESS_INCREMENT) % 1);
                setNumUpdates((prev) => prev + 1);
            });
        }, MS_PER_UPDATE);

        return () => clearTimeout(timeoutId);
    }, [progress]);

    return {
        progress,
        startTimeMs,
        numUpdates,
    };
}
