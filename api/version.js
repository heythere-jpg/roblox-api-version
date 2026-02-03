// api/version.js
export default function handler(req, res) {
  // Version number (change this to update the game version)
  const version = "1.2.3";

  // Optional: can add custom messages or extra fields
  res.status(200).json({ version });
}
