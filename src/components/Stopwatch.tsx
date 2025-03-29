
'use client'

import { UNIVERSAL_START_TIME_MS } from "@/hooks/animation-constants";
import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

export function Stopwatch() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const requestId = requestAnimationFrame(() => {
            flushSync(() => {
                setCounter((prev) => prev + 1);
            });
        });

        return () => cancelAnimationFrame(requestId);
    }, [counter]);

    const elapsedMs = Date.now() - UNIVERSAL_START_TIME_MS;
    const elapsedSec = Math.floor(elapsedMs / 1000);

    return (
        <div className="text-2xl">
            <span>{elapsedSec}</span>
        </div>
    )
}
