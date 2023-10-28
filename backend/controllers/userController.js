//@desc  auth user/set token
//route  POST /api/users/auth
//access Pubic
const authUser = (req, res) => {
  res.status(200).json({ message: "Auth User" });
};

export { authUser };
