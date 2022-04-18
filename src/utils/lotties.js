import EnergyLottie from '_assets/lotties/energy-lottie.json';
import SmartPhoneLottie from '_assets/lotties/smartphone-lottie.json';
import VolunteerLottie from '_assets/lotties/volunteer-lottie.json';
import PaypalLottie from '_assets/lotties/paypal-lottie.json';
import MaintainerLottie from '_assets/lotties/maintainer-lottie.json';
import DonateLottie from '_assets/lotties/donate-lottie.json';
import PrayLottie from '_assets/lotties/pray-lottie.json';
import ShareLottie from '_assets/lotties/share-lottie.json';
import BankLottie from '_assets/lotties/bank-lottie.json';

export const LOTTIE_TYPES = {
  ENERGY: 'ENERGY',
  SMARTPHONE: 'SMARTPHONE',
  VOLUNTEER: 'VOLUNTEER',
  PAYPAL_PAG_SEGURO: 'PAYPAL_PAG_SEGURO',
  MAINTAINER: 'MAINTAINER',
  DONATE: 'DONATE',
  PRAY: 'PRAY',
  SHARE: 'SHARE',
  BANK: 'BANK',
};

export const LOTTIES_FILES = {
  [LOTTIE_TYPES.ENERGY]: {
    ICON: EnergyLottie,
    WIDTH: 280,
    HEIGHT: 280,
  },
  [LOTTIE_TYPES.SMARTPHONE]: {
    ICON: SmartPhoneLottie,
    WIDTH: 280,
    HEIGHT: 280,
  },
  [LOTTIE_TYPES.VOLUNTEER]: {
    ICON: VolunteerLottie,
    WIDTH: 280,
    HEIGHT: 280,
  },
  [LOTTIE_TYPES.PAYPAL_PAG_SEGURO]: {
    ICON: PaypalLottie,
    WIDTH: 280,
    HEIGHT: 280,
  },
  [LOTTIE_TYPES.MAINTAINER]: {
    ICON: MaintainerLottie,
    WIDTH: 280,
    HEIGHT: 280,
  },
  [LOTTIE_TYPES.DONATE]: {
    ICON: DonateLottie,
    WIDTH: 280,
    HEIGHT: 280,
  },
  [LOTTIE_TYPES.PRAY]: {
    ICON: PrayLottie,
    WIDTH: 280,
    HEIGHT: 280,
  },
  [LOTTIE_TYPES.SHARE]: {
    ICON: ShareLottie,
    WIDTH: 280,
    HEIGHT: 170,
  },
  [LOTTIE_TYPES.BANK]: {
    ICON: BankLottie,
    WIDTH: 280,
    HEIGHT: 280,
  },
};
