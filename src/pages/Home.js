import { useState, useEffect } from "react";

/* Ok, let's try setting up another nested route. 
As mentioned in our introduction, we want to view a specific user profile while still viewing the list of all our available users. We can implement this feature by making 
our UserProfile component a nested route within our Home component. */
import { Outlet, useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home() {
  /* Now, within our Home component
   we can use the useOutletContext hook to access that piece of data:
 */
  const users = useOutletContext();
  const userList = users.map((user) => {
    return <UserCard key={user.id} user={user} />;
  });

  return (
    <>
      <main>
        <h1>Home!</h1>
        {/* If we provide a piece of data to the Outlet component within 
        our App, and we want to access it within our UserProfile component,
         we'll have to pass that data to the Outlet component within our 
         Home component first.

 */}
        <Outlet context={users} />
        {userList}
      </main>
    </>
  );
}

export default Home;
