import react from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather() {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="red"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
