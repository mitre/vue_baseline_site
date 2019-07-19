import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/mitre/vue_baseline_site",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSections() {
    return apiClient.get("/sections");
  },
  getBaselines() {
    return apiClient.get("/baselines");
  }
};
