
import React, { createContext, useState, useContext, useEffect } from "react";

export type AgeRange = "Under 18" | "18-23" | "24-29" | "30-39" | "40-49" | "50-59" | "60+";

export type Goal = 
  | "Improve sleep quality" 
  | "Optimize my fitness" 
  | "Fix my sleep schedule" 
  | "Reduce anxiety" 
  | "Feel less exhausted" 
  | "Increase focus";

export type Challenge = 
  | "Studying or academic pressure" 
  | "New job or work stress" 
  | "Health changes or concerns" 
  | "Difficulty falling asleep" 
  | "ADHD"
  | "Difficult sleep environment";

export type SleepPractice = 
  | "Journaling or to-do list" 
  | "Melatonin Supplements" 
  | "Winding down" 
  | "Comfortable bedroom" 
  | "Alcohol" 
  | "Relaxation techniques & sounds"
  | "Limiting screen time";

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  ageRange: AgeRange | null;
  setAgeRange: (age: AgeRange | null) => void;
  gender: string | null;
  setGender: (gender: string | null) => void;
  goals: Goal[];
  setGoals: (goals: Goal[]) => void;
  challenges: Challenge[];
  setChallenges: (challenges: Challenge[]) => void;
  sleepPractices: SleepPractice[];
  setSleepPractices: (practices: SleepPractice[]) => void;
  sleepData: any;
  setSleepData: (data: any) => void;
  preferredWakeTime: string;
  setPreferredWakeTime: (time: string) => void;
  preferredSleepTime: string;
  setPreferredSleepTime: (time: string) => void;
}

const UserContext = createContext<UserContextType>({
  name: "",
  setName: () => {},
  ageRange: null,
  setAgeRange: () => {},
  gender: null,
  setGender: () => {},
  goals: [],
  setGoals: () => {},
  challenges: [],
  setChallenges: () => {},
  sleepPractices: [],
  setSleepPractices: () => {},
  sleepData: null,
  setSleepData: () => {},
  preferredWakeTime: "7:00",
  setPreferredWakeTime: () => {},
  preferredSleepTime: "23:00",
  setPreferredSleepTime: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>("");
  const [ageRange, setAgeRange] = useState<AgeRange | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [sleepPractices, setSleepPractices] = useState<SleepPractice[]>([]);
  const [sleepData, setSleepData] = useState<any>(null);
  const [preferredWakeTime, setPreferredWakeTime] = useState<string>("7:00");
  const [preferredSleepTime, setPreferredSleepTime] = useState<string>("23:00");

  // Load data from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem("user-name");
    const savedAge = localStorage.getItem("user-age") as AgeRange | null;
    const savedGender = localStorage.getItem("user-gender");
    const savedGoals = JSON.parse(localStorage.getItem("user-goals") || "[]");
    const savedChallenges = JSON.parse(localStorage.getItem("user-challenges") || "[]");
    const savedPractices = JSON.parse(localStorage.getItem("user-sleep-practices") || "[]");
    const savedSleepData = JSON.parse(localStorage.getItem("user-sleep-data") || "null");
    const savedWakeTime = localStorage.getItem("preferred-wake-time") || "7:00";
    const savedSleepTime = localStorage.getItem("preferred-sleep-time") || "23:00";
    
    if (savedName) setName(savedName);
    if (savedAge) setAgeRange(savedAge);
    if (savedGender) setGender(savedGender);
    if (savedGoals.length) setGoals(savedGoals);
    if (savedChallenges.length) setChallenges(savedChallenges);
    if (savedPractices.length) setSleepPractices(savedPractices);
    if (savedSleepData) setSleepData(savedSleepData);
    if (savedWakeTime) setPreferredWakeTime(savedWakeTime);
    if (savedSleepTime) setPreferredSleepTime(savedSleepTime);
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    if (name) localStorage.setItem("user-name", name);
    if (ageRange) localStorage.setItem("user-age", ageRange);
    if (gender) localStorage.setItem("user-gender", gender);
    localStorage.setItem("user-goals", JSON.stringify(goals));
    localStorage.setItem("user-challenges", JSON.stringify(challenges));
    localStorage.setItem("user-sleep-practices", JSON.stringify(sleepPractices));
    if (sleepData) localStorage.setItem("user-sleep-data", JSON.stringify(sleepData));
    localStorage.setItem("preferred-wake-time", preferredWakeTime);
    localStorage.setItem("preferred-sleep-time", preferredSleepTime);
  }, [name, ageRange, gender, goals, challenges, sleepPractices, sleepData, preferredWakeTime, preferredSleepTime]);

  return (
    <UserContext.Provider 
      value={{
        name,
        setName,
        ageRange,
        setAgeRange,
        gender,
        setGender,
        goals,
        setGoals,
        challenges,
        setChallenges,
        sleepPractices,
        setSleepPractices,
        sleepData,
        setSleepData,
        preferredWakeTime,
        setPreferredWakeTime,
        preferredSleepTime,
        setPreferredSleepTime
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
