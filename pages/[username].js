import PlayerStats from '../components/PlayerStats';

export async function getServerSideProps(context) {
  const { username } = context.query;

  try {
    const res = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    const playerData = await res.json();

    return {
      props: {
        username,
        playerData,
      },
    };
  } catch (error) {
    console.error("Error fetching player data:", error);
    return {
      notFound: true, // If user not found or error, show 404 page
    };
  }
}

export default function PlayerPage({ username, playerData }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold my-6">Player Stats for {username}</h1>
      <PlayerStats username={username} playerData={playerData} />
    </div>
  );
}
