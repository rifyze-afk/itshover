export async function getGithubStars() {
  try {
    // Use GitHub API endpoint instead of web URL
    const resp = await fetch("https://api.github.com/repos/itshover/itshover", {
      next: { revalidate: 3600 },
    });

    if (!resp.ok) {
      console.error("Failed to fetch GitHub stars:", resp.status);
      return 0;
    }

    const data = await resp.json();
    return data.stargazers_count || 0;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return 0;
  }
}
