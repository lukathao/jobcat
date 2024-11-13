import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";
import { drizzle } from "@xata.io/drizzle";
import { getXataClient } from "@/db/xata";

const xata = getXataClient();

const jobsCombined = pgTable("jobs-combined", {
  id: text("id").primaryKey(),
  Role: text("Role"),
  Link: text("Link"),
  Location: text("Location"),
  Salary: text("Salary"),
  Summary: text("Summary"),
  Company: text("Company"),
  UpdatedAt: timestamp("xata.updateAt"),
});

const db = drizzle(xata);

export async function getRemoteJobByName(position: string) {
  //Tested and working on xata console
  const jobs = await xata.db["jobs-combined"].search(position, {
    prefix: "phrase",
    target: ["Role", "Salary", "Summary", "xata_id", "Link"],
    fuzziness: 2,
    filter: {
      $any: [
        { Location: { $iContains: 'remote' } },
        { $notExists: 'Company' },
        { Summary: { $iContains: 'united states' } }
      ]
    }
  });

  return jobs;

}

export async function getJobById(id: string) {
  const record = await db
    .select()
    .from(jobsCombined)
    .where(eq(jobsCombined.id, id))
    .execute();
  console.log(record);
}
