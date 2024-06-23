import axios from "axios";

export default class PostsService {
  #api;

  constructor() {
    this.#api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getAllPosts() {
    try {
      const resp = await this.#api.get("/notion/posts");
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  }
}
