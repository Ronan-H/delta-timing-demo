
'use client'

import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

export function Stopwatch() {
    const [startTimeMs, setStartTimeMs] = useState(Date.now());
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setStartTimeMs(Date.now());
    }, []);

    useEffect(() => {
        const requestId = requestAnimationFrame(() => {
            flushSync(() => {
                setCounter((prev) => prev + 1);
            });
        });

        return () => cancelAnimationFrame(requestId);
    }, [counter]);

    const elapsedMs = Date.now() - startTimeMs;
    const elapsedSec = Math.floor(elapsedMs / 1000);

    return (
        <div className="text-2xl">
            <span>{elapsedSec}</span>
        </div>
    )
}