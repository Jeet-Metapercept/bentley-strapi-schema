module.exports = {
  jwtSecret: process.env.JWT_SECRET || '3cc95715-7f4c-4580-976a-04b8d69637d4'
};

// Available options:

// expiresIn: expressed in seconds or a string describing a time span zeit/ms.
// Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default ("120" is equal to "120ms").
// Path — extensions/users-permissions/config/security.json

// {
//   "jwt": {
//     "expiresIn": "1d"
//   }
// }