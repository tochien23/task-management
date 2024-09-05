const User = require("../models/user.model");

module.exports.requireAuth = async (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.spit(" ")[1];//Lấy ra token ở đối số thứ 2 trong mảng

        const user = await User.findOne({
            token: token,
            deleted: false
        }).select("-password");

        if (!user) {
            res.json({
                code: 400,
                message: "Token không hợp lệ!"
            });
            return;
        }

        req.user = user;

        next();
    } else {
        res.json({
            code: 400,
            message: "Vui lòng gửi kèm token!"
        });
    }
}