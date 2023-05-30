import jwt from 'jsonwebtoken'

const jwtGenerator = (public_key) => {
    return jwt.sign({ public_key }, process.env.NEXT_PUBLIC_JWT_SECRET, {
      expiresIn: '1d',
    });
  };

export default jwtGenerator