import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
export const App = () => {
  return (
    <div className="App">
      <Profile
      username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics data={ data} />
      <TransactionHistory/>
    </div>
  );
};

