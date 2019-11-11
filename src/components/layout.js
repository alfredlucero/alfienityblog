import React from "react";
import { css } from "react-emotion";
import { StaticQuery, Link, graphql } from "gatsby";

import { rhythm } from "../utils/typography";

export default ({ children }) => (
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
        className={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <div
          className={css`
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
