import { config } from 'config';
import { getRequestOptions } from 'helpers/getRequestOptions';
import type { ExchangeInfoI, OrderDigestI, PerpetualStaticInfoI, ValidatedResponseI } from 'types/types';
import { OrderI } from 'types/types';
import { RequestMethodE } from '../types/enums';

export function getExchangeInfo(): Promise<ValidatedResponseI<ExchangeInfoI>> {
  return fetch(`${config.apiUrl}/exchangeInfo`, getRequestOptions()).then((data) => {
    if (!data.ok) {
      console.error({ data });
      throw new Error(data.statusText);
    }
    return data.json();
  });
}

export function getPerpetualStaticInfo(symbol: string): Promise<ValidatedResponseI<PerpetualStaticInfoI>> {
  return fetch(`${config.apiUrl}/perpetualStaticInfo?symbol=${symbol}`, getRequestOptions()).then((data) => {
    if (!data.ok) {
      console.error({ data });
      throw new Error(data.statusText);
    }
    return data.json();
  });
}

export function getPositionRisk(
  symbol: string,
  traderAddr?: string
): Promise<ValidatedResponseI<PerpetualStaticInfoI>> {
  return fetch(`${config.apiUrl}/positionRisk?symbol=${symbol}&traderAddr=${traderAddr}`, getRequestOptions()).then(
    (data) => {
      if (!data.ok) {
        console.error({ data });
        throw new Error(data.statusText);
      }
      return data.json();
    }
  );
}

export function getPoolFee(poolSymbol: string, traderAddr?: string): Promise<ValidatedResponseI<number>> {
  return fetch(`${config.apiUrl}/queryFee?poolSymbol=${poolSymbol}&traderAddr=${traderAddr}`, getRequestOptions()).then(
    (data) => {
      if (!data.ok) {
        console.error({ data });
        throw new Error(data.statusText);
      }
      return data.json();
    }
  );
}

export function orderDigest(order: OrderI, traderAddr: string): Promise<ValidatedResponseI<OrderDigestI>> {
  const requestOptions = {
    ...getRequestOptions(RequestMethodE.Post),
    body: JSON.stringify({
      order,
      traderAddr,
    }),
  };
  return fetch(`${config.apiUrl}/orderDigest`, requestOptions).then((data) => {
    if (!data.ok) {
      console.error({ data });
      throw new Error(data.statusText);
    }
    return data.json();
  });
}
