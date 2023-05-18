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
  availableDates?: Maybe<TourData>;
};


export type QueryAvailableDatesArgs = {
  listingID: Scalars['ID'];
  month?: InputMaybe<Scalars['String']>;
};

export type TourAvailabilityDate = {
  __typename?: 'TourAvailabilityDate';
  id: Scalars['ID'];
  tourAvailabilityTimes?: Maybe<Array<Maybe<TourAvailabilityTime>>>;
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
  availableDates?: Maybe<Array<Maybe<TourAvailabilityDate>>>;
  listingID: Scalars['ID'];
};
