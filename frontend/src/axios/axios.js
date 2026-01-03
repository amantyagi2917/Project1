import axios from "axios";

const Url = axios.create({
  baseURL: "http://localhost:3000/book",
});

export default Url;