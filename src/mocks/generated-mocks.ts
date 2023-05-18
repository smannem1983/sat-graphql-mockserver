/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import casual from 'casual';
import { Query, TourAvailabilityDate, TourAvailabilityTime, TourData } from '../generated-types';

casual.seed(0);

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        availableDates: overrides && overrides.hasOwnProperty('availableDates') ? overrides.availableDates! : aTourData(),
    };
};

export const aTourAvailabilityDate = (overrides?: Partial<TourAvailabilityDate>): TourAvailabilityDate => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        tourAvailabilityTimes: overrides && overrides.hasOwnProperty('tourAvailabilityTimes') ? overrides.tourAvailabilityTimes! : [aTourAvailabilityTime(), aTourAvailabilityTime(), aTourAvailabilityTime()],
        tourDate: overrides && overrides.hasOwnProperty('tourDate') ? overrides.tourDate! : casual['date'](),
    };
};

export const aTourAvailabilityTime = (overrides?: Partial<TourAvailabilityTime>): TourAvailabilityTime => {
    return {
        endTime: overrides && overrides.hasOwnProperty('endTime') ? overrides.endTime! : casual['date'](),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : casual.uuid,
        startTime: overrides && overrides.hasOwnProperty('startTime') ? overrides.startTime! : casual['date'](),
    };
};

export const aTourData = (overrides?: Partial<TourData>): TourData => {
    return {
        availableDates: overrides && overrides.hasOwnProperty('availableDates') ? overrides.availableDates! : [aTourAvailabilityDate(), aTourAvailabilityDate(), aTourAvailabilityDate()],
        listingID: overrides && overrides.hasOwnProperty('listingID') ? overrides.listingID! : casual.uuid,
    };
};

export const seedMocks = (seed: number) => casual.seed(seed);
