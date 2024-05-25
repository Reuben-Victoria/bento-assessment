import React, { useCallback, useRef, useState } from "react";

interface DebouncedStateOptions<T> {
  initialValue: T;
  debounceTime?: number;
  onChange: (value: T) => void;
}

export function useDebounce<T>({
  initialValue,
  debounceTime = 500,
  onChange,
}: DebouncedStateOptions<T>) {
  // eslint-disable-next-line no-undef
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [value, setValue] = useState<T>(initialValue);

  const updateOutside = useCallback(
    (newValue: T) => {
      clearTimeout(timeoutRef.current!);
      timeoutRef.current = setTimeout(() => {
        onChange(newValue);
      }, debounceTime);
    },
    [debounceTime, onChange]
  );

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value as T;
    setValue(newValue);
    updateOutside(newValue);
  }

  return {
    value,
    onChangeHandler,
  };
}
