'use client'

import { ANIMATION_DURATION_SEC } from "@/hooks/animation-constants";
import { motion } from "framer-motion";

type ProgressAnimationProps = {
    title: string;
};

export default function FramerMotionProgressAnimation(props: ProgressAnimationProps) {
    const { title } = props;

    return (
        <>
            <span className="flex items-center justify-center font-bold">{title}</span>

            <motion.div
                className="h-full bg-red-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: ANIMATION_DURATION_SEC, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            />

            <span>&nbsp;<br/>&nbsp;</span> {/* hack to fill the space where the FPS would go for the grid */}
        </>
    );
}
