const router = require("express").Router();

router.get("/", (req, res) => {
	if (!req.user) {
		return res.redirect("/");
	}

	// console.log("req_profile", req.locals.profile);
	const { displayName, emails, provider } = req.session.profile;

	console.log(emails[0].value, "??????");

	const profileInfo = {
		name: displayName,
		email: emails[0].value,
		provider: provider
	};
	// profileInfo.email = profile.email;
	// profileInfo.displayName = profile.displayName;
	// profileInfo.photos = profile.photos;

	return res.render("landing", { profileInfo });
});

module.exports = router;
