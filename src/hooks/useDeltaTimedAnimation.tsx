'use client'

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { ANIMATION_DURATION_MS, UNIVERSAL_START_TIME_MS } from "./animation-constants";

export default function useDeltaTimedAnimation() {
    const [progress, setProgress] = useState(0);
    const [numUpdates, setNumUpdates] = useState(0);

    useEffect(() => {
        const requestId = requestAnimationFrame(() => {
            const elapsedMs = Date.now() - UNIVERSAL_START_TIME_MS;
            const progress = (elapsedMs % ANIMATION_DURATION_MS) / ANIMATION_DURATION_MS;
            
            flushSync(() => {
                setProgress(progress);
                setNumUpdates((prev) => prev + 1);
            });
        });

        return () => cancelAnimationFrame(requestId);
    }, [progress]);

    return {
        progress,
        numUpdates,
    };
}
