import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { DisplayAd, InFeedAd, InArticleAd } from "../components/ads";

const guideSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tellmeyourelo.vercel.app/check-chess-elo",
      url: "https://tellmeyourelo.vercel.app/check-chess-elo",
      name: "How to Check Your Chess Elo on Chess.com (Free)",
    },
    {
      "@type": "Article",
      headline: "How to Check Your Chess Elo on Chess.com (Free)",
      description:
        "Learn how to check your Chess Elo: find your Chess.com username, check bullet, blitz, rapid and daily ratings, and read what your rating means — no sign-up.",
      author: { "@type": "Organization", name: "Tell Me Your Elo" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is my Chess Elo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your Chess Elo is a single number that summarises how strong you are against other players on Chess.com. You have a separate rating for bullet, blitz, rapid and daily time controls, and each one moves up when you beat a stronger opponent and down when you lose to a weaker one.",
          },
        },
        {
          "@type": "Question",
          name: "Why can't I find my Chess.com profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check the spelling first — Chess.com usernames are case-sensitive — then check the profile is public. A private profile, a misspelled username, or an account that does not exist will not return a rating.",
          },
        },
        {
          "@type": "Question",
          name: "Is a Chess.com Elo the same as a FIDE rating?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Chess.com ratings and FIDE ratings are different scales built from different player pools, so the numbers are not directly interchangeable. Use your Chess.com Elo to track your own progress and compare with other Chess.com players.",
          },
        },
      ],
    },
  ],
};

const CheckChessElo = () => {
  return (
    <>
      <Head>
        <title>How to Check Your Chess Elo on Chess.com (Free)</title>
        <meta
          name="description"
          content="Learn how to check your Chess Elo: find your Chess.com username, check bullet, blitz, rapid and daily ratings, and read what your rating means — no sign-up."
        />
        <meta
          name="keywords"
          content="how to check chess elo, what is my chess elo, chess elo checker, check chess.com rating, my elo, your elo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://tellmeyourelo.vercel.app/check-chess-elo" />
        <meta property="og:url" content="https://tellmeyourelo.vercel.app/check-chess-elo" />
        <meta property="og:image" content="https://tellmeyourelo.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="How to Check Your Chess Elo on Chess.com (Free)" />
        <meta
          property="og:description"
          content="Learn how to check your Chess Elo: find your Chess.com username, check bullet, blitz, rapid and daily ratings, and read what your rating means — no sign-up."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Navigation />

        <div className="container mx-auto p-4">
          <div className="my-6">
            <DisplayAd className="max-w-4xl mx-auto" />
          </div>

          <div className="flex items-center justify-center mb-8 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-center">
              How to Check Your Chess Elo
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Your Chess Elo is a single number that summarises how strong you are against other
                players. You do not need an account, a download, or a subscription to check it —
                your Chess.com rating is public data, and you can look it up free in under a minute
                with just a username.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">What is my Chess Elo rating?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Elo is a rating system, not a grade. Win against a stronger opponent and it rises
                a lot; lose to a weaker one and it falls a lot; beat someone you were expected to
                beat and it barely moves. That is why two players can play the same number of games
                and end up hundreds of points apart.
              </p>
              <p className="text-gray-300 leading-relaxed">
                On Chess.com you do not have one rating, you have one per time control: bullet,
                blitz, rapid and daily are tracked separately. A fast blitz rating and a slow daily
                rating for the same player can be very different, so always check which time
                control a number belongs to before comparing two players.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                How to check your Elo on Chess.com, step by step
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300 leading-relaxed">
                <li>
                  <strong className="text-white">Find your exact Chess.com username.</strong>{" "}
                  It is the name shown on your Chess.com profile, and it is case-sensitive —
                  &quot;Magnus&quot; and &quot;magnus&quot; are different usernames.
                </li>
                <li>
                  <strong className="text-white">Enter it in the Elo checker on the homepage.</strong>{" "}
                  Go to the{" "}
                  <Link href="/" className="text-blue-400 hover:underline">
                    Tell Me Your Elo homepage
                  </Link>
                  , type the username in the search box, and search. No sign-up is needed, and
                  only public data is read.
                </li>
                <li>
                  <strong className="text-white">Read all four ratings side by side.</strong>{" "}
                  You will see bullet, blitz, rapid and daily ratings together, with your win,
                  loss and draw record for each.
                </li>
                <li>
                  <strong className="text-white">Compare with a friend or rival.</strong>{" "}
                  Enter two usernames separated by a comma to see both players&apos; statistics
                  side by side.
                </li>
                <li>
                  <strong className="text-white">Go deeper with your games.</strong>{" "}
                  <Link href="/game-analysis" className="text-blue-400 hover:underline">
                    Analyze your games move by move
                  </Link>{" "}
                  to find the mistakes that are actually costing you rating points.
                </li>
              </ol>
            </div>

            <div className="my-8">
              <InFeedAd className="max-w-2xl mx-auto" />
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">What is a good Chess Elo?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a rough guide, under 800 is still learning the basics, 800–1200 is a club
                beginner who knows the rules and a few tactics, 1200–1600 is a solid intermediate,
                1600–2000 is a strong club player, and above 2000 is expert territory. The exact
                cut-offs vary by time control and pool, so treat them as a map, not a verdict.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What Elo does not tell you is <em>why</em> you are stuck. That usually comes from
                hanging pieces, weak endgames, or one opening you keep losing from — which is
                exactly what game review and study fix. Start with the{" "}
                <Link href="/learn" className="text-blue-400 hover:underline">
                  chess improvement guide
                </Link>
                : opening principles, tactical patterns and endgame essentials, organised by
                rating band from beginner to advanced.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                Chess.com Elo vs FIDE rating: are they the same?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                No. Chess.com ratings and FIDE ratings are different scales built from different
                player pools, so the numbers are not directly interchangeable. A 1600 on Chess.com
                is not the same thing as a 1600 FIDE rating. Use your Chess.com Elo to track your
                own progress and compare with other Chess.com players, not as a direct FIDE
                equivalent.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                Why can&apos;t I find a player?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If a player cannot be found, check the spelling first — Chess.com usernames are
                case-sensitive — then check the profile is public. A private profile, a misspelled
                username, or an account that does not exist will not return a rating. More answers
                are on the{" "}
                <Link href="/faq" className="text-blue-400 hover:underline">
                  Chess Elo FAQ
                </Link>
                .
              </p>
            </div>

            <div className="my-8">
              <InArticleAd className="max-w-3xl mx-auto" />
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Check your Elo now</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                It takes one username and no sign-up.
              </p>
              <Link href="/" className="text-blue-400 hover:underline font-medium">
                Check your Chess Elo →
              </Link>
            </div>

            <div className="my-8">
              <DisplayAd className="max-w-4xl mx-auto" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CheckChessElo;
