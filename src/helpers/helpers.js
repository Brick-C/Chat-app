export const isEmail = (email) => {
  return /^[^\*-/][a-z0-9-_\.]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/.test(email);
};

export const isPhone = (phone) => {
  return /^(01|8801|\+8801)[0-9]{9}$/.test(phone);
};

export const isString = (data) => {
  return /^[a-z@\.]{1,}$/.test(data);
};

export const isNumber = (data) => {
  return /^[0-9\+]{1,}$/.test(data);
};

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randStr = (length = 12) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    str += chars.charAt(randomIndex);
  }
  return str;
};

export const dotsToHyphens = (inputString) => {
  const stringWithHyphens = inputString.replace(/\./g, "");
  return stringWithHyphens;
};

export const hyphensToDots = (inputString) => {
  const stringWithDots = inputString.replace(/-/g, ".");
  return stringWithDots;
};

export const findPublicId = (url) => {
  return url.split("/")[url.split("/").length - 1].split(".")[0];
};

export const createSlug = (title) => {
  const cleanedTitle = title.replace(/[^\w\s]/gi, "").toLowerCase();

  const slug = cleanedTitle.replace(/\s+/g, "-");

  return slug;
};

export const timeAgo = (date) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const timeElapsed = Date.now() - new Date(date).getTime();

  if (timeElapsed < MINUTE) {
    return `${Math.floor(timeElapsed / SECOND)} seconds ago`;
  } else if (timeElapsed < HOUR) {
    return `${Math.floor(timeElapsed / MINUTE)} minutes ago`;
  } else if (timeElapsed < DAY) {
    return `${Math.floor(timeElapsed / HOUR)} hours ago`;
  } else if (timeElapsed < WEEK) {
    return `${Math.floor(timeElapsed / DAY)} days ago`;
  } else if (timeElapsed < MONTH) {
    return `${Math.floor(timeElapsed / WEEK)} weeks ago`;
  } else if (timeElapsed < YEAR) {
    return `${Math.floor(timeElapsed / MONTH)} months ago`;
  } else {
    return `${Math.floor(timeElapsed / YEAR)} years ago`;
  }
};

export const generateRandomPassword = (length = 10) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

export const createOTP = (length = 5) => {
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
};
