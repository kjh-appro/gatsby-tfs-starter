// src/gatsby-plugin-theme-ui/components.js
import Prism from '@theme-ui/prism'
export default {
  pre: props => props.children,
  code: Prism,
}

import { Box } from "theme-ui";
import { Grid } from "theme-ui";