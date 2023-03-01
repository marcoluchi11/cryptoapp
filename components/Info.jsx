export default function Info({ data }) {
  return (
    <section className="w-1/2">
      <h1>Info</h1>
      <div>
        <h3>Website</h3>
        <a href={data.links.homepage[0] || "No web"}></a>
      </div>
      <div>
        <h3>Explorers</h3>

        {data.links.blockchain_site[0]}
      </div>
      <div>
        <h3>Twitter</h3>
        <a
          href={`https://twitter.com/${data.links.twitter_screen_name}` || "#!"}
        >
          Twitter
        </a>
      </div>
      <div>
        <h3>Reddit</h3>
        <a href={data.links.subreddit_url || "#!"}>Reddit</a>
      </div>
    </section>
  );
}
