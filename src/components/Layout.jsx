import React from "react";
import { css } from "@emotion/react";
import { StaticQuery, Link, graphql } from "gatsby";

import { rhythm } from "../utils/typography";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Link to={`/`}>
            <h3>{data.site.siteMetadata.title}</h3>
          </Link>
          <Link to={`/about/`}>
            <h4>About</h4>
          </Link>
        </div>
        {children}
      </div>
    )}
  />
);

export default Layout;
