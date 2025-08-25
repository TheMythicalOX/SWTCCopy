import axios from "axios";
const Submit = async (email: string, pass: string) => {
  let error = "";
  error = await axios
    .post(
      "https://swtc.onl/php/index.php",
      {
        email: email,
        pass: pass,
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.data === 1) {
        return "Password is invalid";
      }
      if (res.data === "Logged in") {
        return "";
      } else {
        return res.data;
      }
    });
  return error;
};

export default Submit;
