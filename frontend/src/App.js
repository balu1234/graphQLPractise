import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserSubscription from "./components/UserSubscription";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Floating Notification */}
      <UserSubscription />

      <h1 className="app-title">GraphQL + MongoDB App</h1>

      <div className="main-layout">
        <UserForm />
        <UserList />
      </div>
    </div>
  );
}

export default App;
