const verifyToken = (req, res, next) => {
  const headers = req.headers.authorization;
  const accessToken = headers ? headers.split(" ")[1] : "";
  try {
    console.log(accessToken);
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyToken;
