import { IntString } from '..';

export interface RelayInfoUrl {
    relayUrl: string;
}

export interface RelayRegisteredEventInfo extends RelayInfoUrl {
    relayManager: string;
    baseRelayFee: IntString;
    pctRelayFee: IntString;
}

export function isInfoFromEvent(info: RelayInfoUrl): boolean {
    return (
        'relayManager' in info &&
        'baseRelayFee' in info &&
        'pctRelayFee' in info
    );
}
