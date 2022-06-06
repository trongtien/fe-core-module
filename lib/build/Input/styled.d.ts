/// <reference types="react" />
export declare const CssInput: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material/FormControl").FormControlClasses> | undefined;
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    fullWidth?: boolean | undefined;
    focused?: boolean | undefined;
    hiddenLabel?: boolean | undefined;
    margin?: "none" | "normal" | "dense" | undefined;
    required?: boolean | undefined;
    size?: "small" | "medium" | undefined;
    sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme> | undefined;
    variant?: "outlined" | "filled" | "standard" | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, "color" | "margin" | "children" | "disabled" | "sx" | "variant" | keyof import("@mui/material/OverridableComponent").CommonProps | "fullWidth" | "size" | "required" | "error" | "focused" | "hiddenLabel"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
