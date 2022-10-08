const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url) {
  try {
    const response = await fetch(url);

    if (response.status < 200 || response.status > 399) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function listDecks() {
  const url = `${API_BASE_URL}/decks?_embed=cards`;
  return await fetchJson(url);
}
