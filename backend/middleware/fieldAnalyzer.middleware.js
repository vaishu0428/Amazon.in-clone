const requiredFields = ['title', 'price', 'disc', 'brand', 'rating', 'category', 'subCategory', 'image'];

const validateProductFields = (req, res, next) => {

  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length) {
    return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
  }
  const fieldErrors = [];

  if (typeof req.body.title !== 'string') {
    fieldErrors.push('title');
  }

  if (typeof req.body.price !== 'number') {
    fieldErrors.push('price');
  }

  if (typeof req.body.brand !== 'string') {
    fieldErrors.push('brand');
  }

  if (typeof req.body.disc !== 'string') {
    fieldErrors.push('disc');
  }

  if (typeof req.body.rating !== 'number' || req.body.rating < 1 || req.body.rating > 5) {
    fieldErrors.push('rating');
  }

  if (typeof req.body.category !== 'string') {
    fieldErrors.push('category');
  }

  if (typeof req.body.subCategory !== 'string') {
    fieldErrors.push('subCategory');
  }

  if (!Array.isArray(req.body.image) || !req.body.image.every(img => typeof img.url === 'string')) {
    fieldErrors.push('image');
  }

  if (fieldErrors.length > 0) {
    const message = `Invalid field types of ${fieldErrors.join(', ')}`;
    return res.status(400).json({ message });
  }

  // Check rating range
  if (req.body.rating && (req.body.rating < 1 || req.body.rating > 5)) {
    return res.status(400).json({ message: 'Rating must be between 1 and 5' });
  }

  // Passes validation
  next();
};

module.exports = validateProductFields;
