import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import "./UserList.css";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      age
    }
  }
`;

export default function UserList() {
  const { data, loading } = useQuery(GET_USERS);

  if (loading) {
    return (
      <div className="list-page">
        <div className="list-card">
          <h2>Users</h2>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="list-page">
      <div className="list-card">
        <h2>Users</h2>

        <ul className="user-list">
          {data.users.map((u, i) => (
            <li key={u.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="avatar">{u.name[0]}</div>
              <div className="info">
                <span className="name">{u.name}</span>
                <span className="email">{u.email}</span>
              </div>
              <span className="age">{u.age}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
