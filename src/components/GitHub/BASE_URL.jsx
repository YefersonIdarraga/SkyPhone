const BASE_URL = 'https://api.github.com';
const token = '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'; // Reemplaza con tu token real

export async function getCommits(owner, repo) {
  const url = `${BASE_URL}/repos/${owner}/${repo}/commits`;
  const headers = {
    Authorization: `token ${token}`,
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching commits:', error);
    throw error;
  }
}
