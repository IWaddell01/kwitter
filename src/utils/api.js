import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  // Login
  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Google Login
  async loginGoogle() {
    try {
      const result = await this.axiosInstance.post("/auth/google/login");
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Logout
  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Sign Up
  async signUp({ username, displayName, password }) {
    try {
      const result = await this.axiosInstance.post("/users", {
        username,
        displayName,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Users List
  async users() {
    try {
      const result = await this.axiosInstance.get("/users?limit=250");
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Username
  async username(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Delete User
  async delUser(username) {
    try {
      const result = await this.axiosInstance.delete(`/users/${username}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Update Profile
  async updateProfile(credentials, username) {
    // console.log({ password, about, displayName });
    try {
      const result = await this.axiosInstance.patch(
        `/users/${username}`,
        credentials
      );
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Set Profile Pic
  async setProfilePic(username, picture) {
    try {
      const result = await this.axiosInstance.put(
        "/users/" + username + "/picture",
        picture
      );
      return result;
    } catch (err) {
      console.log({ err });
      helpMeInstructor(err);
      throw err;
    }
  }

  // Messages
  async messages() {
    try {
      const result = await this.axiosInstance.get("/messages");
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Create Message
  async createMessage({ text }) {
    try {
      const result = await this.axiosInstance.post("/messages", {
        text,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  // Likes WIP
  // async likes(messageId) {
  //   console.log(messageId);
  //   try {
  //     const result = await this.axiosInstance.post("/likes", {
  //       messageId,
  //     });
  //     return result;
  //   } catch (err) {
  //     helpMeInstructor(err);
  //     throw err;
  //   }
  // }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
