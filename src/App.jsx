import { useState } from "react";
import Subscriber from "./components/Subscriber";

const App = () => {
  const [channels, setChannels] = useState([]);
  const [data, setData] = useState(null);

  const handleSearch = async ({ target }) => {
    if (!target.value) return setChannels([]);
    const req = await fetch(
      `https://api.socialcounts.org/youtube-live-subscriber-count/search/${target.value}`
    );
    const { items } = await req.json();
    return setChannels(items);
  };

  const handleClick = async (channel, e) => {
    setChannels([]);
    return setData(channel);
  };

  return (
    <div className="text-center font-mono">
      <input
        className="text-black"
        type="text"
        onChange={handleSearch.bind(this)}
      />
      {channels &&
        channels.map((e) => {
          return (
            <div
              className="cursor-pointer w-fit p-3 m-auto"
              key={e.id}
              onClick={handleClick.bind(this, e)}
            >
              <img
                className="m-auto p-1 rounded-full"
                src={e.avatar}
                alt={e.avatar}
              />
              <p>{e.title}</p>
            </div>
          );
        })}
      {data && (
        <div>
          <Subscriber channel={data} />
        </div>
      )}
    </div>
  );
};

export default App;
