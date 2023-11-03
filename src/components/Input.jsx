import { useState } from "react";
import Subscriber from "./Subscriber";
import Card from "./Card";
const Input = () => {
  const [channels, setChannels] = useState([]);
  const [data, setData] = useState(null);

  const handleSearch = async ({ target }) => {
    if (!target.value.length) return setChannels([]);
    setData(null);
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
    <div className="flex-1 grid grid-rows-6 p-20">
      <input
        className="text-black"
        type="text"
        onChange={handleSearch.bind(this)}
      />
      {channels &&
        channels.map((e) => {
          return (
            <div onClick={handleClick.bind(this, e)}>
              <Card data={e} />
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

export default Input;
