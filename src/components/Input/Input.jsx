import { useRef } from "react";
import styles from "./styles.module.css";

export const Input = ({
  value = "",
  handleInputChange,
  errorMessage = "",
  placeholder = "",
  label,
  type = "text",
  className,
  icon,
  onFocus = () => null,
  ...restProps
}) => {
  const inputRef = useRef(null);

  const handleIconClick = (e) => {
    e.stopPropagation();
    inputRef.current.type = "date";
    inputRef.current.focus();
    inputRef.current.showPicker();
  };

  return (
    <div className={styles.inputBoxWrapper}>
      <div className={`${styles.inputWrapper}`}>
        <input
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          onFocus={onFocus}
          type={type}
          onChange={(e) => handleInputChange(e)}
          className={`
        ${!!errorMessage ? styles.inputError : ""}
        ${styles.input} 
        ${className}`}
          {...restProps}
        />
        {!!icon ? (
          <span
            className={`material-symbols-rounded ${styles.inputIcon}`}
            onClick={handleIconClick}
          >
            {icon}
          </span>
        ) : null}
      </div>
      {!!errorMessage ? (
        <div className={styles.errorMessageWrapper}>{errorMessage}</div>
      ) : null}
    </div>
  );
};
