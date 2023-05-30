/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import { faker } from '@faker-js/faker';
import { Query, TourAvailabilityDate, TourAvailabilityTime, TourData } from '../generated-types';

faker.seed(0);

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        getAvailableDates: overrides && overrides.hasOwnProperty('getAvailableDates') ? overrides.getAvailableDates! : aTourData(),
        getAvailableTimes: overrides && overrides.hasOwnProperty('getAvailableTimes') ? overrides.getAvailableTimes! : aTourAvailabilityDate(),
    };
};

export const aTourAvailabilityDate = (overrides?: Partial<TourAvailabilityDate>): TourAvailabilityDate => {
    return {
        availabileTimes: overrides && overrides.hasOwnProperty('availabileTimes') ? overrides.availabileTimes! : [aTourAvailabilityTime(), aTourAvailabilityTime(), aTourAvailabilityTime()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.datatype.uuid(),
        tourDate: overrides && overrides.hasOwnProperty('tourDate') ? overrides.tourDate! : faker['date']['soon'](...[{"days":3}]),
    };
};

export const aTourAvailabilityTime = (overrides?: Partial<TourAvailabilityTime>): TourAvailabilityTime => {
    return {
        endTime: overrides && overrides.hasOwnProperty('endTime') ? overrides.endTime! : faker['date']['soon'](...[{"days":1}]).toISOString(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : faker.datatype.uuid(),
        startTime: overrides && overrides.hasOwnProperty('startTime') ? overrides.startTime! : faker['date']['soon'](...[{"days":1}]).toISOString(),
    };
};

export const aTourData = (overrides?: Partial<TourData>): TourData => {
    return {
        areAvailableTimesIncluded: overrides && overrides.hasOwnProperty('areAvailableTimesIncluded') ? overrides.areAvailableTimesIncluded! : true || faker.datatype.boolean(),
        availableDates: overrides && overrides.hasOwnProperty('availableDates') ? overrides.availableDates! : [aTourAvailabilityDate(), aTourAvailabilityDate(), aTourAvailabilityDate()],
        listingID: overrides && overrides.hasOwnProperty('listingID') ? overrides.listingID! : faker.datatype.uuid(),
    };
};

export const seedMocks = (seed: number) => faker.seed(seed);
