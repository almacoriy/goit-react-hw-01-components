import Profile from 'components/social-profile/Profile';
import StatisticsList from 'components/statistics/StatisticsList';
import FriendList from 'components/friend-list/FriendList';
import TransactionHistory from 'components/transaction-history/TransactionHistory';
import user from 'components/social-profile/user.json';
import data from 'components/statistics/data.json';
import friends from 'components/friend-list/friends.json';
import transactions from 'components/transaction-history/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
