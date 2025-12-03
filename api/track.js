module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const data = {
    timestamp: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'Unknown',
    userAgent: req.headers['user-agent'] || 'Unknown',
    referer: req.headers['referer'] || req.headers['referrer'] || 'Direct',
    url: req.query.url || req.url || '/',
    path: req.query.path || req.url || '/',
  };

  console.log('👁️ PAGE VIEW:', JSON.stringify(data, null, 2));
  
  res.status(200).json({ success: true, data });
};
