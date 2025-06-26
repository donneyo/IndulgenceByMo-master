const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://indulgence-by-mo-master.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
