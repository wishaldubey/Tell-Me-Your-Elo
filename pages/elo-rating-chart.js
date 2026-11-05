import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { DisplayAd, InFeedAd, InArticleAd } from "../components/ads";

const chartSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tellmeyourelo.vercel.app/elo-rating-chart",
      url: "https://tellmeyourelo.vercel.app/elo-rating-chart",
      name: "Chess Elo Rating Chart — What Is a Good Elo?",
    },
    {
      "@type": "Article",
      headline: "Chess Elo Rating Chart — What Is a Good Elo?",
      description:
        "See the Chess Elo rating chart: beginner, intermediate, advanced and expert bands, what a good Elo is, and how Chess.com ratings compare with FIDE.",
      author: { "@type": "Organization", name: "Tell Me Your Elo" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a good Chess Elo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As a rough guide, under 800 is still learning the basics, 800–1200 is a club beginner, 1200–1600 is a solid intermediate, 1600–2000 is a strong club player, and above 2000 is expert territory. The exact cut-offs vary by time control and player pool, so treat them as a map, not a verdict.",
          },
        },
        {
          "@type": "Question",
          name: "Is 1200 a good Chess Elo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, 1200 is a solid intermediate rating on Chess.com: a player at this level knows the rules and a few tactics and plays coherent games, and the next step is usually tactical patterns and basic endgames.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my bullet, blitz, rapid and daily ratings different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chess.com tracks a separate rating for each time control, built from a separate pool of games, so it is normal for the four numbers to differ. Compare a rating only with the same time control, never a bullet number against a rapid number.",
          },
        },
      ],
    },
  ],
};

const bands = [
  {
    range: "Under 800",
    level: "Learning the basics",
    plays: "Knows how the pieces move, still drops pieces and misses simple mates.",
    work: "Basic piece movement, not hanging pieces, and basic checkmate patterns.",
  },
  {
    range: "800 – 1200",
    level: "Club beginner",
    plays: "Knows the rules and a few tactics, plays complete games with clear mistakes.",
    work: "Opening principles, forks and pins, and castling early.",
  },
  {
    range: "1200 – 1600",
    level: "Solid intermediate",
    plays: "Plays coherent openings and middlegames, wins against weaker players reliably.",
    work: "Tactical patterns, basic endgames, and reviewing lost games for one repeated mistake.",
  },
  {
    range: "1600 – 2000",
    level: "Strong club player",
    plays: "Rarely hangs pieces, understands plans, and converts winning positions.",
    work: "Positional concepts, advanced endgames, and opening preparation.",
  },
  {
    range: "2000+",
    level: "Expert territory",
    plays: "Deep preparation, precise calculation, and very few unforced errors.",
    work: "Master games, advanced endgame technique, and targeted opening study.",
  },
];

const EloRatingChart = () => {
  return (
    <>
      <Head>
        <title>Chess Elo Rating Chart — What Is a Good Elo?</title>
        <meta
          name="description"
          content="See the Chess Elo rating chart: beginner, intermediate, advanced and expert bands, what a good Elo is, and how Chess.com ratings compare with FIDE."
        />
        <meta
          name="keywords"
          content="chess elo rating chart, elo rating chart, what is a good elo, chess rating levels, good chess rating, chess elo bands"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://tellmeyourelo.vercel.app/elo-rating-chart" />
        <meta property="og:url" content="https://tellmeyourelo.vercel.app/elo-rating-chart" />
        <meta property="og:image" content="https://tellmeyourelo.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Chess Elo Rating Chart — What Is a Good Elo?" />
        <meta
          property="og:description"
          content="See the Chess Elo rating chart: beginner, intermediate, advanced and expert bands, what a good Elo is, and how Chess.com ratings compare with FIDE."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(chartSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://tellmeyourelo.vercel.app/" },
              { "@type": "ListItem", position: 2, name: "Chess Elo Rating Chart", item: "https://tellmeyourelo.vercel.app/elo-rating-chart" },
            ],
          }) }}
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
              Chess Elo Rating Chart
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                So what is a good Elo, really? The honest answer is: it depends on the band you are
                in and what you are comparing it with. The chart below is the map most Chess.com
                players use — beginner to expert — with what players at each level usually do and
                what they usually work on next. Treat the bands as a guide, not a verdict: the
                exact cut-offs vary by time control and player pool.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">The Chess Elo rating chart</h2>
              <div className="space-y-6">
                {bands.map((band) => (
                  <div key={band.range} className="border-b border-gray-700/50 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-white">
                      {band.range} — {band.level}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mt-2">
                      <strong className="text-white">Typical play: </strong>
                      {band.plays}
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-1">
                      <strong className="text-white">Work on next: </strong>
                      {band.work}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-8">
              <InFeedAd className="max-w-2xl mx-auto" />
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                Does the chart change by time control?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Yes, in practice. Chess.com tracks bullet, blitz, rapid and daily as separate
                ratings, each from its own pool of games, so it is normal for one player&apos;s
                four numbers to differ. Always compare a rating with the same time control, and
                check all four on the{" "}
                <Link href="/" className="text-blue-400 hover:underline">
                  homepage Elo checker
                </Link>{" "}
                before deciding which band you are in. A bullet number and a rapid number are not
                the same measurement.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                Chess.com Elo vs FIDE rating
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Chess.com ratings and FIDE ratings are different scales built from different
                player pools, so there is no official conversion between them and the bands above
                describe Chess.com ratings. A 1600 on Chess.com is not the same thing as a 1600
                FIDE rating. Use your Chess.com Elo to track your own progress and compare with
                other Chess.com players.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">How to move up a band</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Moving up a band is rarely about playing more games. It is about finding the one
                pattern that keeps costing you points and fixing it:{" "}
                <Link href="/game-analysis" className="text-blue-400 hover:underline">
                  analyze your games move by move
                </Link>{" "}
                to find it, then study exactly that phase in the{" "}
                <Link href="/learn" className="text-blue-400 hover:underline">
                  guide to improving your Chess Elo
                </Link>
                , and recheck your rating after a month of focused games.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you have not checked your rating yet, start with{" "}
                <Link href="/check-chess-elo" className="text-blue-400 hover:underline">
                  how to check your Chess Elo on Chess.com
                </Link>
                .
              </p>
            </div>

            <div className="my-8">
              <InArticleAd className="max-w-3xl mx-auto" />
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Where are you on the chart?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                One username, no sign-up, all four time controls.
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

export default EloRatingChart;
