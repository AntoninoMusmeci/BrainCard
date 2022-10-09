const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url,options) {
  try {
    const response = await fetch(url,options);

    if (response.status < 200 || response.status > 399) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.log("error:",error);
    return []
  }
}

export async function listDecks() {
  const url = `${API_BASE_URL}/decks?_embed=cards`;
  return await fetchJson(url,{});
}


export async function createDeck(deck, signal) {
    const url = `${API_BASE_URL}/decks`;
    console.log("create desk")
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(deck),
      signal,
    };
    return await fetchJson(url, options);
  }
  
  export async function readDeck(deckId) {
    const url = `${API_BASE_URL}/decks/${deckId}?_embed=cards`;
    const response = await fetchJson(url, {});
    return response.cards
  }