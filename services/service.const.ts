export const headers = {
  "Content-Type": "application/json",
};

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://sport-app-gabriel-tanase.vercel.app/"
    : "http://localhost:3000/";
