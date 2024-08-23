import "styled-components";

type SizeKey = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type SizeValue = string;

type Spacing = {
  [key in SizeKey]: SizeValue;
};

declare module "styled-components" {
  export interface DefaultTheme {
    fontWeight: "normal" | "bold" | "semibold" | "medium";
    spacing: Spacing;
    color: {
      primary: {
        blue: string;
      };
    };
  }
}
