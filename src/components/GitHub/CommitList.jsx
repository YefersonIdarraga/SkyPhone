import React, { useEffect, useState } from 'react';
import { getCommits } from './BASE_URL'; // Importa la función de utilidad

function CommitList() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const owner = 'YefersonIdarraga'; // Reemplaza con el nombre del propietario del repositorio
    const repo = 'SkyPhone'; // Reemplaza con el nombre del repositorio
    const token = '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'; // Reemplaza con tu token de acceso personal real

    getCommits(owner, repo, token)
      .then((data) => {
        setCommits(data);
      })
      .catch((error) => {
        console.error('Error fetching commits:', error);
      });
  }, []);

  return (
    <div>
      <h1>Commits</h1>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>
            <img
              src={commit.author.avatar_url} // URL de la foto del autor del commit
              alt={`${commit.author.login}'s avatar`}
              width="40"
              height="40"
            />
            {commit.commit.author.name}: {commit.commit.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommitList;