import { Link } from "react-router-dom";

export default function HomePage(token, IsLoggedIn, setToken) {
  return (
    <div className="HomePage">
      <h1>Thanks for dropping by! Welcome to Drop Shop!</h1>
      <br></br>
      <br></br>
      <h2>
        Here you can give or get the drop on what you want from our community of
        members! Sign in or create an account to get started. Must be logged in
        before checkout.
      </h2>
    </div>
  );
}
