/// <reference types="react" />
declare const MenuButton: import("styled-components").StyledComponent<{
    <E extends React.ElementType<any> = "button">(props: import("../Button").ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, {}, never>;
export default MenuButton;
