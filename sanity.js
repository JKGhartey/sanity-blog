import {
  // createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";
// import createImageUrlBuilder from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",

  useCdn: process.env.NODE_ENV === "production",
};

// Sanity Client Connection
export const SanityClient = createClient(config);

const builder = imageUrlBuilder(config);

export function urlFor(source) {
  return builder.image(source);
}

// export const urlFor = (source) => createImageUrlBuilder(source).image(source);

// export const useCurrentUser = createCurrentUserHook(config);
