import React, { useEffect, useState } from 'react';

function Get() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    fetch('https://in.global.nba.com/stats2/league/playerlist.json?locale=en')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        const playerList = json.payload.players || [];
        const sortedPlayers = playerList.sort((a, b) =>
          a.playerProfile.lastName.localeCompare(b.playerProfile.lastName)
        );
        setPlayers(sortedPlayers);
        setFilteredPlayers(sortedPlayers);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredPlayers(
      players.filter(
        (player) =>
          player.playerProfile.firstName.toLowerCase().includes(value) ||
          player.playerProfile.lastName.toLowerCase().includes(value)
      )
    );
  };

  const handleFilterByLetter = (letter) => {
    setSelectedLetter(letter);
    setFilteredPlayers(
      players.filter((player) =>
        player.playerProfile.lastName.startsWith(letter)
      )
    );
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div>
      <h1>NBA Player List</h1>

      {/* Search Box */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: '8px',
            width: '300px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* Alphabet Filters */}
      <div style={{ marginBottom: '20px' }}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleFilterByLetter(letter)}
            style={{
              marginRight: '5px',
              padding: '8px 12px',
              fontSize: '16px',
              backgroundColor: selectedLetter === letter ? '#007BFF' : '#f0f0f0',
              color: selectedLetter === letter ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {letter}
          </button>
        ))}
        <button
          onClick={() => {
            setFilteredPlayers(players);
            setSelectedLetter('');
          }}
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            backgroundColor: selectedLetter === '' ? '#007BFF' : '#f0f0f0',
            color: selectedLetter === '' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginLeft: '10px',
          }}
        >
          Show All
        </button>
      </div>

      {/* Players Table */}
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>TEAM</th>
            <th>POS</th>
            <th>HT</th>
            <th>WT</th>
            <th>EXP</th>
            <th>COUNTRY</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player, index) => (
            <tr key={index}>
              <td>
                <img
                  src={`https://cdn.nba.com/headshots/nba/latest/260x190/${player.playerProfile.personId}.png`}
                  alt={`${player.playerProfile.displayName}`}
                  style={{ width: '60px', height: '40px', objectFit: 'cover' }}
                />
              </td>
              <td>{player.playerProfile.displayName}</td>
              <td>{player.teamProfile.displayAbbr}</td>
              <td>{player.playerProfile.position}</td>
              <td>{player.playerProfile.height}</td>
              <td>{player.playerProfile.weight}</td>
              <td>{player.playerProfile.experience}</td>
              <td>{player.playerProfile.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Get