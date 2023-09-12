const { checkToken } = require("../middleware");
const { register, login,getAllUser, logOut } = require("./controller");
// const { checkToken} = require('../s');
const AuthRouter = require("express").Router();
AuthRouter.post("/register",checkToken, register);
AuthRouter.post("/login", login);
AuthRouter.get("/get",checkToken, getAllUser);
AuthRouter.post("/logout", logOut);

// AuthRouter.delete("/delete/:id", DeleteUser);

// AuthRouter.put("/edit/:id", EditUser);
//AuthRouter.post("/changepassword",checkToken, changePassword);
module.exports = AuthRouter;