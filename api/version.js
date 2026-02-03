// api/version.js
export default function handler(req, res) {
  // Version number (change this to update the game version)
  const version = "V0.26.stone.2";

  // Optional: can add custom messages or extra fields
  res.status(200).json({ version });
}
