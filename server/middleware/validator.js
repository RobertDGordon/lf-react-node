const nameValidation = /^[a-z ,.'-]+$/i;
const emailValidation = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneValidation = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

const validator = (req, res, next) => {
    let post = req.body
    if (post.firstName && post.lastName && post.email.length >= 0 && post.phoneNumber.length >= 0 && post.Supervisor){
        if (!post.firstName.match(nameValidation) || !post.lastName.match(nameValidation)){
            return res.status(400).json({ message: "Invalid first or last name!" });
        }
        if (post.email && !post.email.match(emailValidation)){
            return res.status(400).json({ message: "Invalid email!" });
        }
        if (post.phoneNumber && !post.phoneNumber.match(phoneValidation)){
            return res.status(400).json({ message: "Invalid phone number!" });
        }
        next()
    } else {
        res.status(400).json({ message: "Missing required field (name or supervisor)!" });
    }
}

module.exports = validator;