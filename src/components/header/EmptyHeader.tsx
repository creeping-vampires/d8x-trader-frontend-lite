import { Box, Toolbar, Typography } from '@mui/material';

import LogoWithText from 'assets/logoWithTextOnly.png';

import { Container } from '../container/Container';
import { LanguageSwitcher } from '../language-switcher/LanguageSwitcher';

import styles from './Header.module.scss';
import { PageAppBar } from './Header.styles';

export const EmptyHeader = () => (
  <Container className={styles.root}>
    <Box sx={{ display: 'flex' }}>
      <PageAppBar position="static">
        <Toolbar className={styles.toolbar}>
          <Box className={styles.leftSide}>
            <Typography variant="h6" component="div">
              <a href="/" className={styles.logoLink}>
                <img src={LogoWithText} alt="logo" loading="lazy" className={styles.omnistratLogo} />
              </a>
            </Typography>
          </Box>
          <Box className={styles.rightSide}>
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </PageAppBar>
    </Box>
  </Container>
);
