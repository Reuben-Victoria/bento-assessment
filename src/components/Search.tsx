import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Icon } from "@iconify/react";
import RenderIf from "./RenderIf";
import { useDebounce } from "@/hooks";

/**
 * Input component for searching
 */
interface SearchProps {
  value?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  size?: "small" | "default" | "medium";
  hideX?: boolean;
  debounceTime?: number;
  className?: React.HTMLProps<HTMLElement>["className"];
}
const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
  size = "default",
  hideX,
  debounceTime = 400,
  className,
  ...props
}: SearchProps) => {
  const search = useRef<HTMLInputElement>(null!);
  const [hasValue, setHasValue] = useState<boolean>(false);

  const { value: innerValue, onChangeHandler } = useDebounce<string>({
    initialValue: value!,
    onChange,
    debounceTime,
  });

  const computedSizes: Record<string, any> = {
    small: "",
    medium: "search-size-medium",
    default: "search-size-default",
  };

  const computedInputClass: Record<string, any> = {
    small: "search-input-small",
    medium: "search-input-medium",
    default: "search-input-default",
  };
  return (
    <div
      className={classNames("search-container", computedSizes[size], className)}
    >
      <span className={"search-icon-left"}>
        <Icon
          icon={"ph:magnifying-glass"}
        />
      </span>
      <input
        value={innerValue}
        onChange={onChangeHandler}
        ref={search}
        className={classNames("search", computedInputClass[size])}
        type='text'
        placeholder={placeholder}
        {...props}
        onInput={() => setHasValue(true)}
      />
      <RenderIf condition={!hideX!}>
        {hasValue ? (
          <button
            className={"search-icon-right"}
            onClick={() => {
              setHasValue(false);
              onChangeHandler({ target: { value: "" } } as any);
            }}
            data-testid={"cancel"}
          >
            <Icon
              icon={"ph:x-bold"}
              className='text-base text-icon-secondary'
            />
          </button>
        ) : null}
      </RenderIf>
    </div>
  );
};

export default Search;
