import { memo } from 'react';

import { Link, Typography } from '@mui/material';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as GithubLogo } from 'assets/social/github.svg';
import { ReactComponent as MediumLogo } from 'assets/social/medium.svg';
import { ReactComponent as TwitterLogo } from 'assets/social/twitter.svg';
import { ReactComponent as DiscordLogo } from 'assets/social/discord.svg';
import { ReactComponent as GitbookLogo } from 'assets/social/gitbook.svg';
import { ReactComponent as PythLogo } from 'assets/icons/pbp_pyth.svg';

import { Container } from '../container/Container';

import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

export const Footer = memo(() => {
  const { t } = useTranslation();

  return (
    <footer>
      <Container>
        <div className={styles.rootBox}>
          <div className={styles.iconsLeft}>
            <Link
              href="https://app.pulsetic.com/status/xVSntXa0"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="none"
              className={styles.footerLink}
            >
              {t('footer.external-service-status')}
            </Link>
            <Link
              href="https://pyth.network/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="none"
              className={styles.pythLogo}
            >
              <PythLogo className={styles.pythLogo} />
            </Link>
          </div>
          <div className={styles.iconsHolder}>
            <Link
              href="https://github.com/D8-X"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLogo}
            >
              <GithubLogo />
            </Link>
            <Link
              href="https://medium.com/@d8x.exchange"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLogo}
            >
              <MediumLogo />
            </Link>
            <Link
              href="https://discord.gg/kUEZ5cvzKn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLogo}
            >
              <DiscordLogo />
            </Link>
            <Link
              href="https://twitter.com/d8x_exchange"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLogo}
            >
              <TwitterLogo />
            </Link>
            <Link
              href="https://d8x.gitbook.io/d8x"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLogo}
            >
              <GitbookLogo />
            </Link>
          </div>
          <Link
            href="https://d8x.exchange"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="none"
            className={styles.footerLogoWrapper}
          >
            <Logo className={styles.footerLogo} />
          </Link>
        </div>
        <div className={styles.copyrightHolder}>
          <Typography color={'var(--d8x-color-text-main)'} variant="caption" gutterBottom={false}>
            Powered by D8X
          </Typography>
        </div>
      </Container>
    </footer>
  );
});
