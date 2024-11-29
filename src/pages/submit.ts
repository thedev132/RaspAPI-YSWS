import type { APIRoute } from "astro";

// Define your color codes for Bash (ANSI escape codes)
const red = "\x1b[0;31m";
const green = "\x1b[0;32m";
const blue = "\x1b[0;34m";
const yellow = "\x1b[0;33m";
const cyan = "\x1b[0;36m";
const reset = "\x1b[0m";

// Define the JSON content with color codes embedded
const res = `${cyan}{${reset}
  ${red}"submission_link"${reset}: ${cyan}"https://forms.fillout.com/t/nzGCgZ4XUYus"${reset},${reset}
  ${red}"deadline"${reset}: ${yellow}"January 31, 2025"${reset},${reset}
  ${cyan}"hint"${reset}: ${green}"navigate to ${red}/NUMBER_OF_ENDPOINTS_REQUIRED${reset}${green} to finally uncover the secret!"${reset}
${cyan}}\n`;

export const GET: APIRoute = () => {
    return new Response(res, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
