export default function handler(req, res) {
  res.status(200).json({ message: "HOPLOBATRACHUS!!!" });
}

// This is always SEVER-SIDE code
// It will never be included in the client-side bundle
