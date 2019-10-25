const { Router } = require("express");
const router = Router();

router.get("/health", function(req, res) {
  res.body = "Up and running";
  // QUESTION: why this endpoint blocks the app?
  // Because doesn't have res.json(). Doesn't give a response. I think is important to put res.send() at least
});

module.exports = router;
