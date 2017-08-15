const router = require("express").Router();

router.get("/", (req, res) => {
	if (req.user) {
		return res.redirect("/landing");
	}

	return res.render("index");
});

module.exports = router;
