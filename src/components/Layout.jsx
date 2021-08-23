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
    render={(data) => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 1280px;
          min-height: 100vh;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <section>
            <h3>
              <Link to={`/`}>{data.site.siteMetadata.title}</Link>
            </h3>
          </section>

          <section
            css={css`
              display: flex;
              column-gap: 1rem;
            `}
          >
            <h3>
              <Link to={`/about/`}>About</Link>
            </h3>
            <h3>
              <Link to={`/projects/`}>Projects</Link>
            </h3>
            <h3>
              <Link to={`/contact/`}>Contact</Link>
            </h3>
          </section>
        </nav>
        <main>{children}</main>
      </div>
    )}
  />
);

export default Layout;
