import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory'
export const App = () => {
  return (
    <div className="App">
      <Profile />
      <Statistics />
      <TransactionHistory/>
    </div>
  );
};

