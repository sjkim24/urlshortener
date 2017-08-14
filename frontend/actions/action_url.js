import axios from "axios";

export const PROCESS_URL = "PROCESS_URL";

// const URL = "/api/process_url";

export function processUrl(longUrl) {
  // const request = axios.get(something)
  
  return {
    type: PROCESS_URL,
    payload: request
  };
};