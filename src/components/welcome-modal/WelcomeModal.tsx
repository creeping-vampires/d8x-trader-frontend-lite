import { useAtom } from 'jotai';
import { useState } from 'react';

import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { Dialog } from 'components/dialog/Dialog';
import { showWelcomeModalAtom } from 'store/app.store';

import styles from './WelcomeModal.module.scss';
import { config } from 'config';

export const WelcomeModal = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useAtom(showWelcomeModalAtom);

  const [showModal, setShowModal] = useState(showWelcomeModal);

  const handleModalClose = () => {
    setShowWelcomeModal(false);
    setShowModal(false);
  };

  return (
    <Dialog open={config.showChallengeModal && showModal} className={styles.dialog}>
      <DialogTitle>Disclaimer</DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <p>
          By accessing or using the Frontend, you represent and warrant that you do not reside in, are not located in,
          are not a citizen of, are not incorporated in, do not have registered office in, or are not in any other way
          subject to the jurisdiction of a Prohibited Jurisdiction including, but not limited to, the UNITED STATES OF
          AMERICA, BELARUS, BURUNDI, BURMA (MYANMAR), CENTRAL AFRICAN REPUBLIC, CONGO, DEMOCRATIC REP., DEMOCRATIC
          PEOPLES REPUBLIC OF KOREA (DPRK), GUINEA, GUINEA BISSAU, HAITI, IRAN, IRAQ, YEMEN, LEBANON, LIBYA, MALI,
          NICARAGUA, SOMALIA, SUDAN, REPUBLIC OF SOUTH SUDAN, SYRIA, VENEZUELA, AND ZIMBABWE).
        </p>
        <p>
          IF YOU DO NOT AGREE TO THESE TERMS WITHOUT LIMITATION OR EXCLUSION OR TO ANY CHANGES TO THESE TERMS, YOU MUST
          IMMEDIATELY EXIT THE WEBSITE AND STOP ACCESSING OR USING THE SERVICES.
        </p>
      </DialogContent>
      <DialogActions className={styles.dialogAction}>
        <Button onClick={handleModalClose} variant="secondary" size="small">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
