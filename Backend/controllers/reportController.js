 import Tesseract from 'tesseract.js';

 const extractReport = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // OCR using Tesseract
    const result = await Tesseract.recognize(req.file.buffer, 'eng');
    const text = result.data.text;

    // Sample parsing logic (customize based on your reports)
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const parsed = lines.map(line => {
      const [param, value] = line.split(':');
      return { parameter: param?.trim(), value: value?.trim() };
    });

    res.json({ data: parsed });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error processing file" });
  }
};
export default extractReport;