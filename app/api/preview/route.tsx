import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const status = searchParams.get("status");

  // Check the secret and next parameters
//   if (secret !== process.env.PREVIEW_SECRET) {
//     return new Response("Invalid token", { status: 401 });
//   }

//   // Enable or disable Draft Mode
//   if (status === "published") {
//     draftMode().disable();
//   } else {
//     draftMode().enable();
//   }

  // Redirect to the path from the CMS
  redirect(url || "/");
}
