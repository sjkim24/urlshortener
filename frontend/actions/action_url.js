import axios from "axios";

export const PROCESS_URL = "PROCESS_URL";

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