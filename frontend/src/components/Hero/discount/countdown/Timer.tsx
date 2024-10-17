"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Timer() {
  // Set the initial countdown duration (4 days, 14 hours, 39 minutes, 12 seconds)
  const initialDuration = {
    days: 4,
    hours: 14,
    minutes: 39,
    seconds: 12,
  };

  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(initialDuration.days);
  const [hours, setHours] = useState(initialDuration.hours);
  const [minutes, setMinutes] = useState(initialDuration.minutes);
  const [seconds, setSeconds] = useState(initialDuration.seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the countdown values every second
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              // Countdown has reached zero
              setPartyTime(true);
              clearInterval(interval);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    
        <div className="flex justify-center items-center space-x-3 text-PrimaryColor">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-6xl font-semibold">{days}</span>
            <span className="text-gray-600">Days</span>
          </div>
          <p className="text-3xl md:text-5xl mt-2 flex h-full font-bold">:</p>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-6xl font-semibold">{hours}</span>
            <span className="text-gray-600">Hours</span>
          </div>
          <p className="text-3xl md:text-5xl mt-2 flex h-full font-bold">:</p>
          
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-6xl font-semibold">{minutes}</span>
            <span className="text-gray-600">Minutes</span>
          </div>
          <p className="text-3xl md:text-5xl mt-2 flex h-full font-bold">:</p>
          
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-6xl font-semibold">{seconds}</span>
            <span className="text-gray-600">Seconds</span>
          </div>
        </div>

  );
}
