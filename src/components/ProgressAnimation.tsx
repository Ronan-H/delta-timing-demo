'use client'

import { UNIVERSAL_START_TIME_MS } from "@/hooks/animation-constants";

type ProgressAnimationProps = {
    title: string;
    useProgressFunction: () => {
        progress: number;
        numUpdates?: number;
    };
};

export default function ProgressAnimation(props: ProgressAnimationProps) {
    const { title, useProgressFunction } = props;

    const { progress, numUpdates } = useProgressFunction();

    const fps = (() => {
        if (numUpdates == null) {
            return null;
        }

        const elapsedMs = Date.now() - UNIVERSAL_START_TIME_MS;
        const elapsedSec = elapsedMs / 1000;
        return numUpdates / elapsedSec;
    })();

    return (
        <>
            <span className="flex items-center justify-center font-bold">{title}</span>
            
            <div className="bg-red-500" suppressHydrationWarning style={{
                width: `${progress * 100}%`,
            }} />

            {fps !== null && (
                <span className="flex flex-col text-gray-400">
                    <span>{`UPS (from start):`}</span>
                    <span>{`FPS: ${fps.toFixed(1)}`}</span>
                </span>
            )}
        </>
    );
}
