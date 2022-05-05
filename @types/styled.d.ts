import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;
    };
    fontFamily: string;
  }
}
