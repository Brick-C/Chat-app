import axios from "axios";

export const sendSMS = async (to, msg) => {
  await axios.get(
    ` http://bulksmsbd.net/api/smsapi?api_key=MMLyyc7QyfKECduK87Lm&type=text&number=${to}&senderid=Random&message=${msg}`
  );
};
