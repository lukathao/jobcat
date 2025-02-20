// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "jobs-combined",
    columns: [
      { name: "Role", type: "string" },
      { name: "Link", type: "string" },
      { name: "Location", type: "string" },
      { name: "Salary", type: "string" },
      { name: "Summary", type: "text" },
      { name: "H1B", type: "bool" },
      { name: "Company", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type JobsCombined = InferredTypes["jobs-combined"];
export type JobsCombinedRecord = JobsCombined & XataRecord;

export type DatabaseSchema = {
  "jobs-combined": JobsCombinedRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Luka-Thao-s-workspace-j66af7.us-east-1.xata.sh/db/jobcat",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
