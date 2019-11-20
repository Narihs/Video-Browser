import axios from "axios";
const KEY = "AIzaSyAh-pcB_3z0oL12yolN6SRkw4LnC7ug9po";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
