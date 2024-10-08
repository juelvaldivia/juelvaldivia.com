import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from '@xata.io/client';
import { buildClient } from '@xata.io/client';
import dotenv from 'dotenv';

dotenv.config();

const tables = [
  {
    name: 'guests',
    columns: [
      { name: 'name', type: 'text' },
      { name: 'phone', type: 'text' },
      { name: 'event_id', type: 'text' },
      { name: 'confirmed', type: 'bool' },
      { name: 'genre', type: 'text' },
    ],
  },
  {
    name: 'events',
    columns: [
      { name: 'name', type: 'text' },
      { name: 'limitDateToConfirm', type: 'text' },
      { name: 'date', type: 'text' },
      { name: 'place', type: 'text' },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Guests = InferredTypes['guests'];
export type GuestsRecord = Guests & XataRecord;

export type Events = InferredTypes['events'];
export type EventsRecord = Events & XataRecord;

export type DatabaseSchema = {
  guests: GuestsRecord;
  events: EventsRecord;
};

const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL: process.env.XATA_DATABASE_NAME,
  branch: process.env.XATA_BRANCH,
  apiKey: process.env.XATA_API_KEY,
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
