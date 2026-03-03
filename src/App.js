import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";

import statsData from "./data/data.json";
import friendsData from "./data/friends.json";

function App() {
  return (
    <div>
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
    </div>
  );
}

export default App;
