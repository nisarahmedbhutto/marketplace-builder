import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env"; // Aapke environment variables yahan se aayenge

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Statically generated pages ke liye false set karein
});

export default sanityClient;
