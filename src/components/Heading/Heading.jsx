export const Heading = ({ variant, children, ...restProps }) => {
  const renderHeadingVariant = (variant, children, restProps) => {
    switch (variant) {
      case "h1":
        return <h1 {...restProps}>{children}</h1>;
      case "h2":
        return <h2 {...restProps}>{children}</h2>;
      case "h3":
        return <h3 {...restProps}>{children}</h3>;
      case "h4":
        return <h4 {...restProps}>{children}</h4>;
      case "h5":
        return <h5 {...restProps}>{children}</h5>;
      case "h6":
        return <h6 {...restProps}>{children}</h6>;
      case "div":
        return <div {...restProps}>{children}</div>;
      default:
        return <h2 {...restProps}>{children}</h2>;
    }
  };

  return <>{renderHeadingVariant(variant, children, restProps)}</>;
};
