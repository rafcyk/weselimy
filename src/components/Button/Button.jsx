import styles from "./styles.module.css";

export const Button = ({ className, children, ...restProps }) => {
  return (
    <button {...restProps} className={`${styles.buttonPrimary} ${className}`}>
      {children}
    </button>
  );
};
