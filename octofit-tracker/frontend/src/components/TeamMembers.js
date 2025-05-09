import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TeamMembers() {
  const { teamId } = useParams();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`https://scaling-bassoon-5xg4jj9vvpw3v47r-8000.app.github.dev/api/teams/${teamId}/members/`)
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => console.error('Error fetching team members:', error));
  }, [teamId]);

  return (
    <div>
      <h1 className="text-center">Team Members</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member._id}>
              <td>{member.username}</td>
              <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamMembers;
