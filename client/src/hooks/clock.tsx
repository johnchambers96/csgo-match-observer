import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRoundData, selectPhaseCountdowns } from "../state";

export const useTimer = () => {
  const phaseData = useSelector(selectPhaseCountdowns);
  const roundData = useSelector(selectRoundData);
  const [time, setTime] = useState<number>(115);

  const tick = () => {
    setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      tick();
    }, 1000);
    if (roundData?.phase !== "live") {
      window.clearInterval(timer);
    }
    return () => {
      window.clearInterval(timer);
    };
  }, [roundData?.phase]);

  useEffect(() => {
    if (["live", "bomb", "defuse"].includes(phaseData?.phase || "")) {
      console.log(phaseData);
      setTime(Math.round(Number(phaseData?.phase_ends_in || 115)));
    } else {
      setTime(115);
    }
  }, [phaseData]);

  const formatTimer = (seconds: number): string => {
    if (0 > seconds) return "0:00";
    return (
      (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds
    );
  };

  return {
    time,
    formatTimer,
  };
};
