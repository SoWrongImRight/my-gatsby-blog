# https://www.sitepoint.com/gatsby-mdx-blog/

import { graphql, Link as GatsbyLink } from "gatsby";

import { Heading, Box, Link } from '@theme-ui/components';
import React from 'react';
import { Layout } from '../components/layout';

export default function IndexPage({data}) {
    return (
        <>
            <Layout>
                {data.allMdx.nodes.map(({id, except, frontmatter, slug }) => (
                    <Box
                        key={id}
                        as='article'
                        sx={{
                            mb: 4,
                            p: 3,
                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                            border: '1px solid #d1d1d1',
                            borderRadius: '15px',
                        }}
                        >
                            <Link as={GatsbyLink} to={`/${slug}`}>
                                <Heading>{frontmatter.title}</Heading>
                                <Box as='p' variant='styles.p'>
                                    {frontmatter.date}
                                </Box>
                                <Box as='p' variant='styles.p'>
                                    {except}
                                </Box>
                            </Link>
                        </Box>
                ))}
            </Layout>
        </>
    );
}

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              id
              slug
              excerpt(pruneLength: 250)
              frontmatter {
                title
                date(formatString: "MMMM Do YYYY")
              }
              slug
            }
        }
    }
`;