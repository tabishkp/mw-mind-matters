
import React, { createContext, useState, useContext, useEffect } from "react";
import { SleepQualityScore } from '@/components/sleep/SleepQualityRating';

export interface SleepQualityEntry {
  date: string; // ISO date string
  rating: SleepQualityScore;
  timestamp: number;
}

interface SleepQualityContextType {
  ratings: SleepQualityEntry[];
  addRating: (rating: SleepQualityScore) => void;
  getRatingsForRange: (startDate: Date, endDate: Date) => SleepQualityEntry[];
  getAverageRating: (days?: number) => number | null;
  hasRatedToday: boolean;
}

const SleepQualityContext = createContext<SleepQualityContextType>({
  ratings: [],
  addRating: () => {},
  getRatingsForRange: () => [],
  getAverageRating: () => null,
  hasRatedToday: false
});

export const useSleepQuality = () => useContext(SleepQualityContext);

export const SleepQualityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ratings, setRatings] = useState<SleepQualityEntry[]>([]);
  const [hasRatedToday, setHasRatedToday] = useState<boolean>(false);
  
  // Load ratings from localStorage on mount
  useEffect(() => {
    const savedRatings = localStorage.getItem("sleep-quality-ratings");
    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }
    
    checkIfRatedToday();
  }, []);

  // Check if user has already rated today
  const checkIfRatedToday = () => {
    const today = new Date().toISOString().split('T')[0];
    const savedRatings = localStorage.getItem("sleep-quality-ratings");
    
    if (savedRatings) {
      const parsedRatings: SleepQualityEntry[] = JSON.parse(savedRatings);
      const ratedToday = parsedRatings.some(entry => entry.date === today);
      setHasRatedToday(ratedToday);
    }
  };
  
  // Save ratings to localStorage when they change
  useEffect(() => {
    if (ratings.length > 0) {
      localStorage.setItem("sleep-quality-ratings", JSON.stringify(ratings));
      checkIfRatedToday();
    }
  }, [ratings]);
  
  const addRating = (rating: SleepQualityScore) => {
    const now = new Date();
    const newEntry: SleepQualityEntry = {
      date: now.toISOString().split('T')[0], // Format as YYYY-MM-DD
      rating,
      timestamp: now.getTime()
    };
    
    // Remove any existing rating for today before adding the new one
    const filteredRatings = ratings.filter(entry => entry.date !== newEntry.date);
    
    setRatings([...filteredRatings, newEntry]);
    setHasRatedToday(true);
  };
  
  const getRatingsForRange = (startDate: Date, endDate: Date) => {
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();
    
    return ratings.filter(entry => {
      const entryTimestamp = new Date(entry.date).getTime();
      return entryTimestamp >= startTimestamp && entryTimestamp <= endTimestamp;
    });
  };
  
  const getAverageRating = (days = 7) => {
    if (ratings.length === 0) return null;
    
    const now = new Date();
    const startDate = new Date();
    startDate.setDate(now.getDate() - days);
    
    const recentRatings = getRatingsForRange(startDate, now);
    if (recentRatings.length === 0) return null;
    
    const sum = recentRatings.reduce((acc, entry) => acc + entry.rating, 0);
    return parseFloat((sum / recentRatings.length).toFixed(1));
  };
  
  return (
    <SleepQualityContext.Provider
      value={{
        ratings,
        addRating,
        getRatingsForRange,
        getAverageRating,
        hasRatedToday
      }}
    >
      {children}
    </SleepQualityContext.Provider>
  );
};
