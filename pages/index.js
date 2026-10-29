import React, { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import UserStats from "../components/UserStats";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { DisplayAd, InFeedAd, InArticleAd, MultiplexAd } from "../components/ads";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [comparisonData, setComparisonData] = useState(null);
  const [randomImage, setRandomImage] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Rewarded search gate (AdSense rewarded ads, beta) ---
  // TODO: paste your real rewarded ad unit slot ID here.
  // Create it in AdSense > Ads > By ad unit > Rewarded ads (NOT the
  // Offerwall auto-created unit). Until this is a real numeric slot ID,
  // the gate stays dormant and searches work exactly as before, so the
  // site never breaks on a missing/invalid slot.
  const REWARDED_AD_SLOT_ID = "";
  const [pendingSearch, setPendingSearch] = useState(null);
  const [rewardedAd, setRewardedAd] = useState(null);
  const [rewardStatus, setRewardStatus] = useState("idle"); // idle | loading | ready | unavailable
  const [resultMode, setResultMode] = useState(null); // null | "full" | "basic"
  const rewardedAdRef = useRef(null);

  const fetchUserData = async (username) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.chess.com/pub/player/${username}`);
      if (!res.ok) {
        if (res.status === 404) {
          const randomIndex = Math.floor(Math.random() * 3) + 1;
          setRandomImage(`/${randomIndex}.webp`);
          setUserData(null);
          return null;
        } else {
          throw new Error("An unexpected error occurred");
        }
      }

      const data = await res.json();
      const statsRes = await fetch(
        `https://api.chess.com/pub/player/${username}/stats`
      );
      const statsData = await statsRes.json();
      return { ...data, stats: statsData };
    } catch (err) {
      setRandomImage("");
      setUserData(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Fetches and shows results. mode="full" shows the full UserStats
  // charts; mode="basic" shows only the core Elo answer (see BasicStats
  // below). A 404 still shows the not-found image, not a gated result.
  const runSearch = async (input, mode) => {
    const usernames = input.split(",").map((name) => name.trim());
    setRandomImage("");
    setResultMode(null);
    if (usernames.length === 1) {
      const data = await fetchUserData(usernames[0]);
      setUserData(data);
      setComparisonData(null);
      if (data) setResultMode(mode);
    } else if (usernames.length === 2) {
      const [user1Data, user2Data] = await Promise.all(
        usernames.map(fetchUserData)
      );
      if (user1Data && user2Data) {
        setUserData(user1Data);
        setComparisonData(user2Data);
        setResultMode(mode);
      } else {
        setUserData(null);
        setComparisonData(null);
      }
    }
  };

  // Search button click: do NOT fetch yet. Show the rewarded gate and
  // load a rewarded ad. The ad itself is only shown after the user taps
  // "Watch ad" (affirmative opt-in, as AdSense rewarded policy requires).
  const handleSearch = (input) => {
    if (rewardedAdRef.current) {
      try { rewardedAdRef.current.disposeAd(); } catch (e) {}
      rewardedAdRef.current = null;
    }
    setRewardedAd(null);
    setUserData(null);
    setComparisonData(null);
    setResultMode(null);
    setRandomImage("");
    // No slot configured yet: gate dormant, old behaviour preserved.
    if (!REWARDED_AD_SLOT_ID) {
      runSearch(input, "full");
      return;
    }
    setPendingSearch(input);
    setRewardStatus("loading");
    try {
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({
        params: {
          google_ad_slot: REWARDED_AD_SLOT_ID,
          google_ad_format: "rewarded",
          google_ad_loaded_callback: (ad) => {
            if (ad) {
              rewardedAdRef.current = ad;
              setRewardedAd(ad);
              setRewardStatus("ready");
            } else {
              setRewardStatus("unavailable");
            }
          },
        },
      });
    } catch (e) {
      setRewardStatus("unavailable");
    }
  };

  const handleWatchAd = () => {
    const ad = rewardedAdRef.current;
    if (!ad) return;
    const input = pendingSearch;
    ad.show((result) => {
      const viewed = result && result.status === "viewed";
      setPendingSearch(null);
      setRewardedAd(null);
      rewardedAdRef.current = null;
      setRewardStatus("idle");
      try { ad.disposeAd(); } catch (e) {}
      // Viewed = full results. Closed early / dismissed = basic Elo only,
      // never nothing: AdSense policy says skipping a rewarded ad must
      // not impede normal use of the site, and the core Elo answer is
      // the site's normal use.
      runSearch(input, viewed ? "full" : "basic");
    });
  };

  const handleSkipAd = () => {
    const input = pendingSearch;
    setPendingSearch(null);
    setRewardedAd(null);
    rewardedAdRef.current = null;
    setRewardStatus("idle");
    runSearch(input, "basic");
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://tellmeyourelo.vercel.app/#website",
        url: "https://tellmeyourelo.vercel.app/",
        name: "Tell Me Your Elo",
        description: "Free Chess.com Elo checker: check your chess rating, stats and game history, and compare players.",
      },
      {
        "@type": "WebApplication",
        name: "Tell Me Your Elo",
        url: "https://tellmeyourelo.vercel.app/",
        applicationCategory: "SportsApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Check Your Chess Elo — Tell Me Your Elo | Chess.com Stats</title>
        <meta name="description" content="Enter your Chess.com username to check your Elo rating free — bullet, blitz, rapid and daily stats, game history and player comparison, no sign-up needed." />
        <meta name="keywords" content="chess, elo rating, chess analysis, chess.com, chess statistics, chess rating tracker, chess performance, chess games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
              <link rel="canonical" href="https://tellmeyourelo.vercel.app/" />
        <meta property="og:url" content="https://tellmeyourelo.vercel.app/" />
        <meta property="og:image" content="https://tellmeyourelo.vercel.app/chess-logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Check Your Chess Elo — Tell Me Your Elo | Chess.com Stats" />
        <meta property="og:description" content="Enter your Chess.com username to check your Elo rating free — bullet, blitz, rapid and daily stats, game history and player comparison, no sign-up needed." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Navigation />

        <div className="container mx-auto p-4">
          {/* Top Display Ad */}
          <div className="my-6">
            <DisplayAd className="max-w-4xl mx-auto" />
          </div>

          {/* Title and Logo */}
          <div className="flex items-center justify-center mb-8 mt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Tell Me Your Elo
            </h1>
            <img
              src="/chess-logo.png"
              alt="Chess Logo"
              className="ml-3 w-10 h-12 transform rotate-[12deg]"
            />
          </div>

          {/* Subtitle */}
          <div className="text-center mb-8">
            <p className="text-xl text-gray-300 font-light">
              Analyze your chess performance • Track your rating • Compare with others
            </p>
            <p className="text-gray-400 mt-2">
              Get comprehensive insights into your Chess.com statistics and game history
            </p>
          </div>

          {/* Search Bar */}
          <div className="my-8 text-center">
            <SearchBar onSearch={handleSearch} />
            <p className="text-gray-400 font-mono italic mt-3 text-lg">
              Separate usernames with a comma to compare players
            </p>
          </div>

          {/* Rewarded gate: shown after the search button, before any result. */}
          {pendingSearch && (
            <div className="max-w-2xl mx-auto my-8 bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-xl text-center">
              <h3 className="text-xl font-bold text-white mb-3">Watch a short ad to unlock full stats</h3>
              <p className="text-gray-300 mb-2">
                Watch a short ad (usually 5–30 seconds) to see detailed stats, charts
                and comparisons for <span className="text-blue-400 font-semibold">{pendingSearch}</span>.
              </p>
              <p className="text-gray-400 text-sm mb-5">
                Your basic Elo rating is always free. If you close the ad early you
                will still see your basic Elo, just not the full detailed stats.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWatchAd}
                  disabled={rewardStatus !== "ready"}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {rewardStatus === "loading" ? "Loading ad…" : rewardStatus === "unavailable" ? "No ad available" : "Watch ad to see full results"}
                </button>
                <button
                  onClick={handleSkipAd}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Show basic Elo only
                </button>
              </div>
              {rewardStatus === "unavailable" && (
                <p className="text-gray-400 text-sm mt-4">
                  No rewarded ad is available right now. Use basic Elo, or try again later.
                </p>
              )}
            </div>
          )}

          {/* In-Feed Ad after search */}
          <div className="my-8">
            <InFeedAd className="max-w-2xl mx-auto" />
          </div>

          {/* Loading or Display */}
          {loading ? (
            <div className="flex flex-col justify-center items-center h-96">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-400 mb-6"></div>
              <p className="text-lg text-blue-400 font-semibold animate-pulse">
                Summoning The Grandmasters...
              </p>
            </div>
          ) : randomImage ? (
            <div className="flex justify-center items-center h-96">
              <img
                src={randomImage}
                alt="Player not found"
                className="w-auto h-auto max-w-full max-h-full shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
              />
            </div>
          ) : (
            <>
              {/* Full results only after a completed rewarded ad (or when no
                  slot is configured yet). Basic Elo only after skip/close. */}
              {resultMode === "basic" && userData ? (
                <div className="mt-4 p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg mx-auto max-w-3xl text-center">
                  <h2 className="text-2xl font-semibold">{userData.name || userData.username}</h2>
                  <p className="text-gray-300">@{userData.username}</p>
                  <p className="text-xl font-bold text-blue-400 mt-4">
                    Elo Rating: {userData.stats?.chess_rapid?.last?.rating || "N/A"}
                  </p>
                  {comparisonData && (
                    <p className="text-xl font-bold text-blue-400 mt-2">
                      {comparisonData.username}: {comparisonData.stats?.chess_rapid?.last?.rating || "N/A"}
                    </p>
                  )}
                  <p className="text-gray-400 text-sm mt-4">
                    Watch the ad above on your next search to unlock detailed stats, charts and comparisons.
                  </p>
                </div>
              ) : (
                <UserStats userData={userData} comparisonData={comparisonData} />
              )}
              
              {/* In-Article Ad after user stats */}
              <div className="my-8">
                <InArticleAd className="max-w-3xl mx-auto" />
              </div>
            </>
          )}

          {/* Features Section */}
          {!userData && !loading && !randomImage && !pendingSearch && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                Powerful Chess Analysis Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-xl">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Detailed Statistics</h3>
                  <p className="text-gray-300">
                    Get comprehensive insights into your chess performance across all time controls and game types.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-xl">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚔️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Player Comparison</h3>
                  <p className="text-gray-300">
                    Compare two players side by side to see how you stack up against friends or rivals.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-xl">
                  <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">♟️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Game Analysis</h3>
                  <p className="text-gray-300">
                    Analyze your games with our interactive chess board and detailed move history.
                  </p>
                </div>
              </div>
              
              {/* Multiplex Ad after features */}
              <div className="my-12">
                <MultiplexAd className="max-w-4xl mx-auto" />
              </div>
            </div>
          )}

          {/* SEO content: what Elo means, how to check it, and what it says about you.
              This is always visible (unlike the tool results above) so search engines
              and AdSense can classify the page, and so visitors have a reason to stay. */}
          <section className="max-w-4xl mx-auto mt-16 space-y-10 text-left">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">What is my Chess Elo rating?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your Elo rating is a single number that summarises how strong you are against
                other players. Win against a stronger opponent and it rises a lot; lose to a
                weaker one and it falls a lot; beat someone you were expected to beat and it
                barely moves. That is why two players can play the same number of games and
                end up hundreds of points apart.
              </p>
              <p className="text-gray-300 leading-relaxed">
                On Chess.com you do not have one rating, you have one per time control:
                bullet, blitz, rapid and daily are tracked separately, so a fast blitz
                rating and a slow daily rating for the same player can be very different.
                Chess.com ratings are also not the same scale as FIDE ratings — use them to
                track your own progress and compare with other Chess.com players, not as a
                direct FIDE equivalent. Enter your username above to see all four, plus your
                recent game history.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">How to check your Elo on Chess.com</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 leading-relaxed">
                <li>Type your exact Chess.com username in the search box above and search — no sign-up is needed, and only public data is read.</li>
                <li>Read your bullet, blitz, rapid and daily ratings side by side, with your win, loss and draw record for each.</li>
                <li>To compare with a friend or rival, enter two usernames separated by a comma.</li>
                <li>To go deeper, <Link href="/game-analysis" className="text-blue-400 hover:underline">analyze your games move by move</Link> and find the mistakes that cost you points.</li>
              </ol>
              <p className="text-gray-300 leading-relaxed mt-4">
                If a player cannot be found, check the spelling first — Chess.com usernames
                are case-sensitive — then check the profile is public. More answers are on
                the <Link href="/faq" className="text-blue-400 hover:underline">Chess Elo FAQ</Link>.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">What your Elo says about you — and what it does not</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a rough guide, under 800 is still learning the basics, 800–1200 is a
                club beginner who knows the rules and a few tactics, 1200–1600 is a solid
                intermediate, 1600–2000 is a strong club player, and above 2000 is expert
                territory. The exact cut-offs vary by time control and pool, so treat them
                as a map, not a verdict.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What Elo does not tell you is <em>why</em> you are stuck. That usually comes
                from hanging pieces, weak endgames, or one opening you keep losing from —
                which is exactly what game review and study fix. Start with the{" "}
                <Link href="/learn" className="text-blue-400 hover:underline">chess improvement guide</Link>:
                opening principles, tactical patterns and endgame essentials, organised by
                rating band from beginner to advanced.
              </p>
            </div>
          </section>

          {/* Bottom Display Ad before footer */}
          <div className="my-8">
            <DisplayAd className="max-w-4xl mx-auto" />
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Home;
