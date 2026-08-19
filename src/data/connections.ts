import type { Connection, ConnectionKind } from "./types";

/**
 * The knowledge graph — typed cross-reference edges between verses.
 *
 * Keyed by the verse being studied; each entry lists the verses it connects
 * to, HOW they connect (`kind`), and a one-line explanation (the pedagogy).
 *
 * This is the heart of "biblical pedagogy": Scripture interprets Scripture.
 * Every target ref resolves to text because the full Bible is vendored.
 */
const c = (target: string, kind: ConnectionKind, note: string): Connection => ({ target, kind, note });

export const connections: Record<string, Connection[]> = {
  // ------------------------------------------------------------------
  // John's gospel — who Jesus is
  // ------------------------------------------------------------------
  "John 1:1": [
    c("Genesis 1:1", "theme", "John opens his Gospel with the opening words of Genesis — 'In the beginning…' — so we see the Word was already there before creation began."),
    c("John 8:58", "theme", "'Before Abraham was, I AM' — the Word's eternity and divine name."),
    c("Colossians 1:16-17", "theme", "All things were created through the Word and hold together in Him."),
    c("Hebrews 1:2-3", "theme", "God made the worlds through the Son, the radiance of His glory."),
    c("Revelation 19:13", "theme", "The returning King is called 'The Word of God' — the same Word who was in the beginning."),
  ],
  "John 1:14": [
    c("Philippians 2:6-7", "pattern", "The Word who was God took the form of a servant — 'the Word became flesh.'"),
    c("Hebrews 2:14-17", "theme", "He shared in our flesh and blood so He could be a merciful High Priest."),
    c("Colossians 2:9", "fulfilled", "The fullness of deity dwells in Him bodily — the Word made flesh."),
  ],
  "John 8:58": [
    c("Exodus 3:14", "quotes", "Jesus takes the name God revealed in the burning bush — 'I AM WHO I AM' — as His own."),
    c("John 1:1", "theme", "The Word was with God in the beginning — before Abraham existed."),
    c("Isaiah 43:10-13", "contrast", "God says 'before me no god was formed' — yet the man Jesus claims the divine 'I AM.'"),
  ],
  "John 20:28": [
    c("Isaiah 45:22-23", "quotes", "God swears that every knee will bow and every tongue swear to Him alone — and Thomas bows to Jesus."),
    c("Philippians 2:10-11", "fulfilled", "Paul applies Isaiah's 'every knee… every tongue' to Jesus Christ as Lord."),
    c("Psalm 22:28", "theme", "'The kingdom is the LORD's, and he rules over the nations' — and Thomas calls Jesus his Lord and his God."),
  ],
  "Philippians 2:9-11": [
    c("Isaiah 45:23", "quotes", "The name above every name — God's own words, now given to Jesus."),
    c("John 13:13", "theme", "Jesus: 'You call me Teacher and Lord — and you are right, for so I am.'"),
  ],
  "Hebrews 1:3": [
    c("Colossians 1:15", "theme", "The Son is 'the image of the invisible God.'"),
    c("2 Corinthians 4:6", "theme", "The glory of God shines in the face of Jesus Christ."),
    c("John 1:14", "theme", "We beheld His glory — glory as of the only Son from the Father."),
  ],
  "Colossians 2:9": [
    c("John 1:14", "theme", "The Word became flesh — the fullness of deity dwelling bodily."),
    c("Hebrews 1:3", "theme", "The exact imprint of God's nature."),
  ],

  // ------------------------------------------------------------------
  // The cross — why He died
  // ------------------------------------------------------------------
  "Isaiah 53:5": [
    c("1 Peter 2:24", "fulfilled", "Peter explains the cross in Isaiah's own words: 'He himself bore our sins in his body on the tree.'"),
    c("Matthew 8:17", "fulfilled", "Matthew applies this Servant-song to Jesus' healings."),
  ],
  "Isaiah 53:6": [
    c("2 Corinthians 5:21", "fulfilled", "The LORD laid on Him the iniquity of us all — God made Him who knew no sin to be sin for us."),
    c("Romans 5:8", "theme", "While we were still sinners — the sheep who had gone astray — Christ died for us."),
  ],
  "Romans 3:23": [
    c("Psalm 14:1-3", "quotes", "Paul's 'no one is righteous' echoes the psalmist's verdict on all humanity."),
    c("Psalm 51:4", "theme", "'Against you, you only, have I sinned' — the deepest wrong of sin is against God."),
  ],
  "Romans 5:8": [
    c("John 3:16", "theme", "God loved the world — so He gave His Son while we were still sinners."),
    c("Romans 8:32", "theme", "'He who did not spare his own Son' — the love proven at the cross."),
    c("1 John 4:9-10", "theme", "This is love: not that we loved God, but that He loved us and sent His Son."),
  ],
  "2 Corinthians 5:21": [
    c("Isaiah 53:6", "fulfilled", "'The LORD laid on him the iniquity of us all' — the great exchange."),
    c("Galatians 3:13", "theme", "Christ became a curse for us, redeeming us from the curse of the law."),
    c("Leviticus 16:21-22", "pattern", "The scapegoat bore the people's sins and carried them away — a picture of the sinless One becoming sin for us."),
  ],
  "Mark 10:45": [
    c("Isaiah 53:10-12", "fulfilled", "The Servant 'poured out his soul to death… and bore the sin of many' — the ransom Jesus came to pay."),
    c("1 Timothy 2:5-6", "theme", "The one mediator gave himself as a ransom for all."),
  ],

  // ------------------------------------------------------------------
  // Salvation — how we come
  // ------------------------------------------------------------------
  "John 14:6": [
    c("Acts 4:12", "theme", "'There is no other name under heaven… by which we must be saved.'"),
    c("John 10:9", "theme", "'I am the door. If anyone enters by me, he will be saved.'"),
    c("Hebrews 10:19-20", "theme", "A new and living way into the holy place — opened through His flesh."),
  ],
  "John 3:16": [
    c("Numbers 21:8-9", "pattern", "Just as the lifted bronze serpent brought life, the lifted Son of Man gives eternal life (John 3:14)."),
    c("1 John 4:9", "theme", "'By this, God’s love was revealed in us: that God has sent his one and only Son into the world.'"),
  ],
  "Romans 10:9-10": [
    c("Joel 2:32", "quotes", "Paul's 'everyone who calls on the name of the Lord will be saved' is the prophet Joel's promise."),
    c("Deuteronomy 30:12-14", "quotes", "Moses' 'the word is very near you' — Paul applies it to the word of faith we preach."),
  ],
  "Ephesians 2:8-9": [
    c("Titus 3:5", "theme", "'Not by works… but according to his mercy.'"),
    c("Romans 3:24", "theme", "Justified freely by His grace through the redemption that is in Christ Jesus."),
    c("Jonah 2:9", "theme", "'Salvation belongs to the LORD' — it is His to give, not ours to earn."),
  ],
  "John 10:27-28": [
    c("Romans 8:38-39", "theme", "Nothing can separate us from the love of God — no one can snatch them from His hand."),
    c("John 6:37", "theme", "'Whoever comes to me I will in no way throw out.'"),
    c("John 17:12", "theme", "Of those the Father gave Him, Jesus lost none."),
  ],
  "Romans 8:38-39": [
    c("John 10:28", "theme", "The Shepherd holds His sheep — no one can snatch them out of His hand."),
    c("Deuteronomy 31:6", "theme", "'He will not fail you nor forsake you' — from Sinai to the cross, the same faithful God."),
  ],
  "1 John 1:9": [
    c("Psalm 32:5", "theme", "'I acknowledged my sin… and you forgave the iniquity of my sin.'"),
    c("Proverbs 28:13", "theme", "'Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.'"),
  ],
  "1 John 2:1-2": [
    c("Hebrews 7:25", "theme", "Jesus 'always lives to make intercession' for us — our advocate above."),
    c("John 14:16", "theme", "The same word 'Helper/Advocate' (paraclete) — Jesus is our advocate with the Father, and He sent another Helper, the Spirit."),
  ],

  // ------------------------------------------------------------------
  // The Holy Spirit
  // ------------------------------------------------------------------
  "John 14:16-17": [
    c("John 15:26", "theme", "The Spirit 'whom I will send… the Spirit of truth' — the Helper who testifies about Jesus."),
    c("Romans 8:9", "fulfilled", "'Anyone who does not have the Spirit of Christ does not belong to him' — He dwells in you (John 14:17)."),
  ],
  "John 16:13-14": [
    c("John 15:26", "theme", "The Spirit bears witness about Jesus and glorifies Him."),
    c("1 Corinthians 2:12-13", "theme", "We have received the Spirit — who teaches the deep and spiritual things of God."),
  ],
  "Acts 5:3-4": [
    c("Psalm 51:4", "theme", "To deceive the Spirit is to sin against God — 'against you, you only, have I sinned.'"),
    c("Numbers 32:23", "theme", "'You will have sinned against the LORD' — sin against God is never private or cost-free."),
  ],
  "Matthew 28:19": [
    c("2 Corinthians 13:14", "theme", "The apostolic benediction names Father, Son, and Spirit as the one source of grace."),
    c("Genesis 1:26", "theme", "'Let us make man in our image' — the plural address hints at the triune God."),
    c("Isaiah 48:16", "theme", "'Now the Lord GOD has sent me with his Spirit' — Father, Son, and Spirit working together."),
  ],
  "Hebrews 9:14": [
    c("Genesis 1:2", "theme", "The same Spirit who brooded over creation is the 'eternal Spirit' through whom Christ offered Himself."),
    c("Psalm 139:7", "theme", "'Where could I go from your Spirit?' — He is everywhere, the eternal Spirit."),
  ],
  "Romans 8:11": [
    c("1 Corinthians 6:14", "theme", "The Spirit who raised Jesus will also raise us — resurrection is His work."),
    c("Ezekiel 37:5-6", "pattern", "The Spirit gives life to dry bones — the same Spirit who will raise our mortal bodies."),
  ],
};

/** Connections leaving from a verse reference. */
export function getConnections(ref: string): Connection[] {
  return connections[ref] ?? [];
}
/** Human-readable label for a connection kind. */
export const connectionKindLabel: Record<ConnectionKind, string> = {
  quotes: "The Scripture echoes",
  promise: "A promise made",
  fulfilled: "Fulfilled here",
  pattern: "A pattern of",
  parallel: "In parallel with",
  theme: "The same thread",
  contrast: "In contrast to",
};
