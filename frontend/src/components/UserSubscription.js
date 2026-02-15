import { gql } from "@apollo/client";
import { useSubscription } from "@apollo/client/react";
import { useEffect, useState } from "react";
import "./Toast.css";

const USER_ADDED = gql`
  subscription {
    userAdded {
      id
      name
      email
      age
    }
  }
`;

export default function UserSubscription() {
  const { data } = useSubscription(USER_ADDED);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (data?.userAdded) {
      setShow(true);
      const t = setTimeout(() => setShow(false), 3500); // auto-hide
      return () => clearTimeout(t);
    }
  }, [data]);

  if (!show || !data) return null;

  return (
    <div className="toast">
      <span className="icon">🔔</span>
      <div className="toast-text">
        <strong>New User Added</strong>
        <span>{data.userAdded.name}</span>
      </div>
    </div>
  );
}
