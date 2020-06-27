const url = "https://exodus-apiv1.herokuapp.com";
const headers = {
  "Content-Type": "application/json",
};
export async function getFetch(urlApi) {
    try {
      const response = await fetch(`${url}/${urlApi}`);
      return await response.json()
    } catch (err) {
      return err;
    }
  }