import { useAtom } from 'jotai';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { getDynamicLogo } from 'utils/tokens';

import {
  realizedPnLListAtom,
  unrealizedPnLListAtom,
} from 'pages/portfolio-page/components/AccountValue/fetchEverything';

import styles from './Perpetuals.module.scss';

interface AssetLinePropsI {
  symbol: string;
  value: string | number;
}

const formatCurrency = (value: number) => value.toLocaleString('en-US', { maximumFractionDigits: 2 });

export const AssetLine = ({ symbol, value }: AssetLinePropsI) => {
  const IconComponent = getDynamicLogo(symbol.toLowerCase());
  return (
    <div className={styles.assetsLine}>
      <Suspense fallback={null}>
        <IconComponent width={24} height={24} />
      </Suspense>
      <div style={{ flex: '1' }}>{symbol}</div>
      <div>{value}</div>
    </div>
  );
};

export const Perpetuals = () => {
  const { t } = useTranslation();

  const [unrealizedPnLList] = useAtom(unrealizedPnLListAtom);
  const [realizedPnLList] = useAtom(realizedPnLListAtom);

  return (
    <>
      <div className={styles.pnlBlock}>
        <div className={styles.pnlHeader}>{t('pages.portfolio.account-value.details.perps.realized')}</div>
        <div className={styles.assetsList}>
          {realizedPnLList.map((token) => (
            <AssetLine key={token.symbol} symbol={token.symbol} value={formatCurrency(token.value)} />
          ))}
        </div>
      </div>
      <div className={styles.pnlBlock}>
        <div className={styles.pnlHeader}>{t('pages.portfolio.account-value.details.perps.unrealized')}</div>
        <div className={styles.assetsList}>
          {unrealizedPnLList.map((token) => (
            <AssetLine key={token.symbol} symbol={token.symbol} value={formatCurrency(token.value)} />
          ))}
        </div>
      </div>
    </>
  );
};
