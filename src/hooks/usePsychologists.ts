import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebase/firebase";
import { DB_ROOT } from "../firebase/constants";
import type { Psychologist } from "../types/psychologist";

export const usePsychologists = () => {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPsychologists = async () => {
      setLoading(true);
      try {
        const psychologistsRef = ref(database, `${DB_ROOT}/psychologists`);
        const snapshot = await get(psychologistsRef);

        console.log("🔥 Firebase data:", snapshot.val());

        if (snapshot.exists()) {
          const data = snapshot.val();
          const psychologistsList: Psychologist[] = Object.keys(data).map(
            (key) => ({
              id: key,
              ...data[key],
            }),
          );
          setPsychologists(psychologistsList);
          console.log("✅ Psychologists loaded:", psychologistsList.length);
        } else {
          console.log("❌ No data found");
          setPsychologists([]);
        }
      } catch (err) {
        console.error("🔥 Error fetching psychologists:", err);
        setError("Failed to load psychologists");
      } finally {
        setLoading(false);
      }
    };

    fetchPsychologists();
  }, []);

  return { psychologists, loading, error };
};
