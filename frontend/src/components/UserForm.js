import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import "./UserForm.css";
import { useState } from "react";

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $age: Int) {
    addUser(name: $name, email: $email, age: $age) {
      id
      name
      email
    }
  }
`;

export default function UserForm() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: ["GetUsers"],
    onCompleted: () => {
      // ✅ Clear inputs after successful add
      setForm({ name: "", email: "", age: "" });
    }
  });

  return (
    <div className="page">
      <div className="card">
        <h2>Add New User</h2>

        <input
          placeholder="Name"
          value={form.name}             
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}           
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Age"
          type="number"
          value={form.age}             
          onChange={e => setForm({ ...form, age: e.target.value })}
        />

        <button onClick={() => addUser({ variables: { 
          name: form.name, 
          email: form.email, 
          age: form.age ? Number(form.age) : null 
        }})}>
          Add User
        </button>
      </div>
    </div>
  );
}
