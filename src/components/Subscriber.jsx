import { useEffect, useState } from "react";

const Subscriber = ({ channel }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const req = await fetch(
        `https://api.socialcounts.org/youtube-live-subscriber-count/${channel.id}`
      );
      const res = await req.json();
      setData(res);
    })();
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="w-fit m-auto">
      {data && (
        <>
          <p>{channel.title}</p>
          <img
            className="m-auto rounded-full"
            src={channel.avatar}
            alt={channel.avatar}
          />
          <p>subscribe : {numberWithCommas(data.est_sub)}</p>
          <p>view : {numberWithCommas(data.table[0].count)}</p>
        </>
      )}
    </div>
  );
};

export default Subscriber;
