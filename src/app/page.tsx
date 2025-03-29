import FramerMotionProgressAnimation from "@/components/FramerMotionProgressAnimation";
import ProgressAnimation from "@/components/ProgressAnimation";
import { Stopwatch } from "@/components/Stopwatch";
import useDeltaTimedAnimation from "@/hooks/useDeltaTimedAnimation";
import useSetIntervalAnimation from "@/hooks/useSetIntervalAnimation";
import useSetTimeoutAnimation from "@/hooks/useSetTimeoutAnimation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-8 gap-8">
      <h1 className="text-3xl font-bold text-center">Delta Timing Comparison</h1>

      <Stopwatch />

      <div className="grid grid-cols-[auto_1fr_auto] grid-rows-2 w-full gap-x-2 gap-y-8">
        <ProgressAnimation
          title="Set Interval"
          useProgressFunction={useSetIntervalAnimation}
        />
        <ProgressAnimation
          title="Set Timeout"
          useProgressFunction={useSetTimeoutAnimation}
        />
        <ProgressAnimation
          title="Delta Timed"
          useProgressFunction={useDeltaTimedAnimation}
        />
        <FramerMotionProgressAnimation
          title="Framer Motion"
        />
      </div>
    </div>
  );
}
