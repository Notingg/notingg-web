import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      backgroundSecondary500: string;
      backgroundSecondary800: string;
      primaryColor500: string;
      primaryColor800: string;
      neutralColor: string;
      tertiaryColor: string;
    };
    fontFamily: string;
  }
}
