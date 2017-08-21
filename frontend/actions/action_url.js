import axios from "axios";

export const PROCESS_URL = "PROCESS_URL";
export const GET_TOP_HUNDRED_URLS = "GET_TOP_HUNDRED_URLS";

const URL = "/api/shortened_urls";

export function processUrl(longUrl, token) {
  const request = axios.post(`${URL}`, { 
    shortened_url: { long_url: longUrl }, authenticity_token: token 
  });
  
  return {
    type: PROCESS_URL,
    payload: request
  };
};

export function getTopHundredUrls() {
  const request = axios.get(URL);
  
  return {
    type: GET_TOP_HUNDRED_URLS,
    payload: request
  };
};