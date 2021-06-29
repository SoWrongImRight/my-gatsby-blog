import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Box, Button, Heading, Link, useColorMode } from "theme-ui";

export const Header = ({ siteTitle, siteDescription }) => {
    const [ colorMode, setColorMode ] = useColorMode();
    return (
        <Box as='header' sx={{ bg: 'highlight', mb: '1.45em' }}>
            <Box
                as='div'
                sx ={{
                    m: '0 auto',
                    maxWidth: '640px',
                    p: '1.45rem 1.0875rem',
                }}
            >
                <Link as={GatsbyLink} to="/">
                    <Heading>{siteTitle}</Heading>
                </Link>
                <Box as='p' variant='styles.p'>
                    {siteDescription}
                </Box>
                <Button
                    onClick={(e) => {
                        setColorMode(colorMode === 'default' ? 'dark' : 'default');
                    }}
                >
                    {colorMode == 'default' ? 'Dark' : 'Light'}
                </Button>
            </Box>
        </Box>
    );
};