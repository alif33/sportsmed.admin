import jwt from 'jsonwebtoken';

const signToken = ({ _id, name, email }) => {
  return jwt.sign(
    {
      _id,
      name,
      email
    },

    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};


const unsignedToken = async(token) => {
  return await jwt.verify(token, process.env.JWT_SECRET);
};

const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Access Denied' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Access Denied' });
  }
};

const isAdmin = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Access Denied' });
      } else {
        req.admin = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Access Denied' });
  }
};

export { signToken, unsignedToken, isAuth, isAdmin };
