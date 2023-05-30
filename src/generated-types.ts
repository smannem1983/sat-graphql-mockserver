export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getAvailableDates?: Maybe<TourData>;
  getAvailableTimes?: Maybe<TourAvailabilityDate>;
};


export type QueryGetAvailableDatesArgs = {
  listingID: Scalars['ID'];
  month?: InputMaybe<Scalars['String']>;
};


export type QueryGetAvailableTimesArgs = {
  date?: InputMaybe<Scalars['String']>;
  listingID: Scalars['ID'];
};

export type TourAvailabilityDate = {
  __typename?: 'TourAvailabilityDate';
  availabileTimes?: Maybe<Array<Maybe<TourAvailabilityTime>>>;
  id: Scalars['ID'];
  tourDate: Scalars['DateTime'];
};

export type TourAvailabilityTime = {
  __typename?: 'TourAvailabilityTime';
  endTime: Scalars['DateTime'];
  id: Scalars['ID'];
  startTime: Scalars['DateTime'];
};

export type TourData = {
  __typename?: 'TourData';
  areAvailableTimesIncluded?: Maybe<Scalars['Boolean']>;
  availableDates?: Maybe<Array<Maybe<TourAvailabilityDate>>>;
  listingID: Scalars['ID'];
};
