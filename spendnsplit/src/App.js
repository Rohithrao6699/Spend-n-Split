import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <FriendList initialFriends={initialFriends} />
        <AddfriendForm />
        <Button>Add Friend</Button>
      </div>
      <FormsplitBill />
    </div>
  );
}

export default App;

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FriendList({ initialFriends }) {
  return (
    <ul>
      {initialFriends.map((friends) => (
        <Friends friends={friends} key={friends.id} />
      ))}
    </ul>
  );
}

function Friends({ friends }) {
  return (
    <li>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>
      {friends.balance > 0 && (
        <p>
          {friends.name} owes you {friends.balance}
        </p>
      )}
      {friends.balance < 0 && (
        <p>
          you owe {friends.name} {friends.balance}
        </p>
      )}
      {friends.balance === 0 && <p>You are even!</p>}
      <Button>Select</Button>
    </li>
  );
}

function AddfriendForm() {
  return (
    <form className="addfriend">
      <div>
        <label>Friend name</label>
        <input type="text" />
      </div>
      <div>
        <label>Image URL</label>
        <input type="text" />
      </div>

      <Button>Add</Button>
    </form>
  );
}

function FormsplitBill() {
  return (
    <form className="splitbill">
      <h2>Split bill with X</h2>

      <label>Bill value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />

      <label>X's Expense</label>
      <input type="text" disabled />

      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
