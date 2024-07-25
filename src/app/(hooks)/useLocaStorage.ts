"use client";
import { useState, useEffect } from "react";

type StorageKey = string;

type SetValue<T> = (value: T) => void;

function useLocalStorage<T>(
  key: StorageKey,
  initialValue: T
): [T, SetValue<T>] {
  // Função para buscar o valor armazenado no localStorage
  const getStoredValue = (): T => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    }
    return initialValue;
  };

  // Estado para armazenar o valor atual
  const [storedValue, setStoredValue] = useState<T>(() => getStoredValue());

  // Atualiza o localStorage sempre que o valor mudar
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  // Função para atualizar o valor armazenado e no estado
  const setValue: SetValue<T> = (value) => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
