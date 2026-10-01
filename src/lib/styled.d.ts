import "styled-components";
import type { AppTheme } from "./theme";

// Estende o DefaultTheme do styled-components com os nossos tokens,
// dando autocompletar e checagem de tipos em todo `props.theme`.
declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
