import {
  ref,
  get,
  push,
  set,
  query,
  limitToFirst,
  startAfter,
  orderByKey,
} from "firebase/database";
import { database } from "./firebase";
import type { Psychologist } from "../types/psychologist";

export const getPsychologists = async (): Promise<Psychologist[]> => {
  try {
    const dbRef = ref(database, "psychologists");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching psychologists:", error);
    return [];
  }
};

export const getPsychologistById = async (
  id: string,
): Promise<Psychologist | null> => {
  try {
    const dbRef = ref(database, `psychologists/${id}`);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return { id, ...snapshot.val() };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching psychologist ${id}:`, error);
    return null;
  }
};

export const addPsychologist = async (
  psychologist: Omit<Psychologist, "id">,
) => {
  try {
    const dbRef = ref(database, "psychologists");
    const newRef = push(dbRef);
    await set(newRef, psychologist);
    return newRef.key;
  } catch (error) {
    console.error("Error adding psychologist:", error);
    return null;
  }
};

export const getFirstPsychologists = async (
  limit: number = 3,
): Promise<{
  psychologists: Psychologist[];
  lastKey: string | null;
}> => {
  try {
    const psychologistsRef = ref(database, "psychologists");
    const firstQuery = query(
      psychologistsRef,
      orderByKey(),
      limitToFirst(limit),
    );
    const snapshot = await get(firstQuery);

    if (!snapshot.exists()) {
      return { psychologists: [], lastKey: null };
    }

    const data = snapshot.val();
    const keys = Object.keys(data);

    const psychologists = keys.map((key) => ({
      id: key,
      ...data[key],
    }));

    return {
      psychologists,
      lastKey: keys[keys.length - 1] || null,
    };
  } catch (error) {
    console.error("Error fetching first psychologists:", error);
    return { psychologists: [], lastKey: null };
  }
};

export const getMorePsychologists = async (
  lastKey: string,
  limit: number = 3,
): Promise<{
  psychologists: Psychologist[];
  lastKey: string | null;
}> => {
  try {
    const psychologistsRef = ref(database, "psychologists");
    const nextQuery = query(
      psychologistsRef,
      orderByKey(),
      startAfter(lastKey),
      limitToFirst(limit),
    );

    const snapshot = await get(nextQuery);

    if (!snapshot.exists()) {
      return { psychologists: [], lastKey: null };
    }

    const data = snapshot.val();
    const keys = Object.keys(data);

    const psychologists = keys.map((key) => ({
      id: key,
      ...data[key],
    }));

    return {
      psychologists,
      lastKey: keys[keys.length - 1] || null,
    };
  } catch (error) {
    console.error("Error fetching more psychologists:", error);
    return { psychologists: [], lastKey: null };
  }
};

export const getSortedPsychologists = async (
  sortBy: "name" | "price" | "rating" = "name",
  order: "asc" | "desc" = "asc",
): Promise<Psychologist[]> => {
  try {
    const psychologists = await getPsychologists();

    return psychologists.sort((a, b) => {
      let comparison = 0;

      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "price") {
        comparison = a.price_per_hour - b.price_per_hour;
      } else if (sortBy === "rating") {
        comparison = a.rating - b.rating;
      }

      return order === "asc" ? comparison : -comparison;
    });
  } catch (error) {
    console.error("Error sorting psychologists:", error);
    return [];
  }
};
