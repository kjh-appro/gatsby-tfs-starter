import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import config from "../../data/SiteConfig";
import AvatarLinks from "../components/Avatar/AvatarLinks";
import { Box } from "theme-ui";
import { Grid } from "theme-ui";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <About />
        <AvatarLinks />
      </Layout>
    );
  }
}

export default AboutPage;
