const router = require('express').Router();

router.use(function (req,res,next) {
  if (req.user.isTrustedByBatman) {
    return next();
  }
  res.sendStatus(401);
});

router.get('/', function (req,res,next) {
  res.send('Batman is Bruce Wayne');
});

module.exports = router;
