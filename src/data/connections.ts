import type { Connection, ConnectionKind } from "./types";

/**
 * The knowledge graph: typed cross-reference edges between verses.
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
  // John's gospel: who Jesus is
  // ------------------------------------------------------------------
  "John 1:1": [
    c("Genesis 1:1", "theme", "John opens his Gospel with the opening words of Genesis ('In the beginning…') so we see the Word was already there before creation began."),
    c("John 8:58", "theme", "'Before Abraham came into existence, I AM': the Word's eternity and divine name."),
    c("Colossians 1:16-17", "theme", "All things were created through the Word and hold together in Him."),
    c("Hebrews 1:2-3", "theme", "God made the worlds through the Son, the radiance of His glory."),
    c("Revelation 19:13", "theme", "The returning King is called 'The Word of God': the same Word who was in the beginning."),
  ],
  "John 1:14": [
    c("Philippians 2:6-7", "pattern", "The Word who was God took the form of a servant: 'the Word became flesh.'"),
    c("Hebrews 2:14-17", "theme", "He shared in our flesh and blood so He could be a merciful High Priest."),
    c("Colossians 2:9", "fulfilled", "The fullness of deity dwells in Him bodily: the Word made flesh."),
  ],
  "John 8:58": [
    c("Exodus 3:14", "quotes", "Jesus takes the name God revealed in the burning bush, 'I AM WHO I AM,' as His own."),
    c("John 1:1", "theme", "The Word was with God in the beginning, before Abraham existed."),
    c("Isaiah 43:10-13", "contrast", "God says 'before me there was no God formed,' yet the man Jesus claims the divine 'I AM.'"),
  ],
  "John 20:28": [
    c("Isaiah 45:22-23", "quotes", "God swears that every knee will bow and every tongue swear to Him alone, and Thomas bows to Jesus."),
    c("Philippians 2:10-11", "fulfilled", "Paul applies Isaiah's 'every knee… every tongue' to Jesus Christ as Lord."),
    c("Psalm 22:28", "theme", "'The kingdom is Yahweh’s. He is the ruler over the nations,' and Thomas calls Jesus his Lord and his God."),
  ],
  "Philippians 2:9-11": [
    c("Isaiah 45:23", "quotes", "The name above every name: God's own words, now given to Jesus."),
    c("John 13:13", "theme", "Jesus: 'You call me Teacher and Lord. You say so correctly, for so I am.'"),
  ],
  "Hebrews 1:3": [
    c("Colossians 1:15", "theme", "The Son is 'the image of the invisible God.'"),
    c("2 Corinthians 4:6", "theme", "The glory of God shines in the face of Jesus Christ."),
    c("John 1:14", "theme", "We beheld His glory: glory as of the only Son from the Father."),
  ],
  "Colossians 2:9": [
    c("John 1:14", "theme", "The Word became flesh: the fullness of deity dwelling bodily."),
    c("Hebrews 1:3", "theme", "The exact imprint of God's nature."),
  ],

  // ------------------------------------------------------------------
  // The cross: why He died
  // ------------------------------------------------------------------
  "Isaiah 53:5": [
    c("1 Peter 2:24", "fulfilled", "Peter explains the cross in Isaiah's own words: 'his own self bore our sins in his body on the tree.'"),
    c("Matthew 8:17", "fulfilled", "Matthew applies this Servant-song to Jesus' healings."),
  ],
  "Isaiah 53:6": [
    c("2 Corinthians 5:21", "fulfilled", "The LORD laid on Him the iniquity of us all: God made Him who knew no sin to be sin for us."),
    c("Romans 5:8", "theme", "While we were still sinners, the sheep who had gone astray, Christ died for us."),
  ],
  "Romans 3:23": [
    c("Psalm 14:1-3", "quotes", "Paul's 'There is no one righteous; no, not one' echoes the psalmist's verdict on all humanity."),
    c("Psalm 51:4", "theme", "'Against you, and you only, have I sinned': the deepest wrong of sin is against God."),
  ],
  "Romans 5:8": [
    c("John 3:16", "theme", "God loved the world, so He gave His Son while we were still sinners."),
    c("Romans 8:32", "theme", "'He who didn't spare his own Son': the love proven at the cross."),
    c("1 John 4:9-10", "theme", "This is love: not that we loved God, but that He loved us and sent His Son."),
  ],
  "2 Corinthians 5:21": [
    c("Isaiah 53:6", "fulfilled", "'Yahweh has laid on him the iniquity of us all': the great exchange."),
    c("Galatians 3:13", "theme", "Christ became a curse for us, redeeming us from the curse of the law."),
    c("Leviticus 16:21-22", "pattern", "The scapegoat bore the people's sins and carried them away: a picture of the sinless One becoming sin for us."),
  ],
  "Mark 10:45": [
    c("Isaiah 53:10-12", "fulfilled", "The Servant 'poured out his soul to death… yet he bore the sin of many': the ransom Jesus came to pay."),
    c("1 Timothy 2:5-6", "theme", "The one mediator gave himself as a ransom for all."),
  ],

  // ------------------------------------------------------------------
  // Salvation: how we come
  // ------------------------------------------------------------------
  "John 14:6": [
    c("Acts 4:12", "theme", "'Neither is there any other name under heaven… by which we must be saved.'"),
    c("John 10:9", "theme", "'I am the door. If anyone enters in by me, he will be saved.'"),
    c("Hebrews 10:19-20", "theme", "A new and living way into the holy place: opened through His flesh."),
  ],
  "John 3:16": [
    c("Numbers 21:8-9", "pattern", "Just as the lifted bronze serpent brought life, the lifted Son of Man gives eternal life (John 3:14)."),
    c("1 John 4:9", "theme", "'By this, God’s love was revealed in us: that God has sent his one and only Son into the world.'"),
  ],
  "Romans 10:9-10": [
    c("Joel 2:32", "quotes", "Paul's 'whoever will call on the name of the Lord will be saved' is the prophet Joel's promise."),
    c("Deuteronomy 30:12-14", "quotes", "Moses' 'the word is very near to you': Paul applies it to the word of faith we preach."),
  ],
  "Ephesians 2:8-9": [
    c("Titus 3:5", "theme", "'Not by works… but according to his mercy.'"),
    c("Romans 3:24", "theme", "Justified freely by His grace through the redemption that is in Christ Jesus."),
    c("Jonah 2:9", "theme", "'Salvation belongs to Yahweh': it is His to give, not ours to earn."),
  ],
  "John 10:27-28": [
    c("Romans 8:38-39", "theme", "Nothing can separate us from the love of God; no one can snatch them from His hand."),
    c("John 6:37", "theme", "'He who comes to me I will in no way throw out.'"),
    c("John 17:12", "theme", "Of those the Father gave Him, Jesus lost none."),
  ],
  "Romans 8:38-39": [
    c("John 10:28", "theme", "The Shepherd holds His sheep; no one can snatch them out of His hand."),
    c("Deuteronomy 31:6", "theme", "'He will not fail you nor forsake you': from Sinai to the cross, the same faithful God."),
  ],
  "1 John 1:9": [
    c("Psalm 32:5", "theme", "'I acknowledged my sin… and you forgave the iniquity of my sin.'"),
    c("Proverbs 28:13", "theme", "'He who conceals his sins doesn't prosper, but whoever confesses and renounces them finds mercy.'"),
  ],
  "1 John 2:1-2": [
    c("Hebrews 7:25", "theme", "Jesus 'lives forever to make intercession' for us: our advocate above."),
    c("John 14:16", "theme", "The same word 'Helper/Advocate' (paraclete): Jesus is our advocate with the Father, and He sent another Helper, the Spirit."),
  ],

  // ------------------------------------------------------------------
  // The Holy Spirit
  // ------------------------------------------------------------------
  "John 14:16-17": [
    c("John 15:26", "theme", "The Spirit 'whom I will send… the Spirit of truth': the Helper who testifies about Jesus."),
    c("Romans 8:9", "fulfilled", "'If any man doesn't have the Spirit of Christ, he is not his': He dwells in you (John 14:17)."),
  ],
  "John 16:13-14": [
    c("John 15:26", "theme", "The Spirit bears witness about Jesus and glorifies Him."),
    c("1 Corinthians 2:12-13", "theme", "We have received the Spirit, who teaches the deep and spiritual things of God."),
  ],
  "Acts 5:3-4": [
    c("Psalm 51:4", "theme", "To deceive the Spirit is to sin against God: 'against you, and you only, have I sinned.'"),
    c("Numbers 32:23", "theme", "'You have sinned against Yahweh; and be sure your sin will find you out': sin against God is never private or cost-free."),
  ],
  "Matthew 28:19": [
    c("2 Corinthians 13:14", "theme", "The apostolic benediction names Father, Son, and Spirit as the one source of grace."),
    c("Genesis 1:26", "theme", "'Let us make man in our image': the plural address hints at the triune God."),
    c("Isaiah 48:16", "theme", "'Now the Lord Yahweh has sent me, with his Spirit': Father, Son, and Spirit working together."),
  ],
  "Hebrews 9:14": [
    c("Genesis 1:2", "theme", "The same Spirit who brooded over creation is the 'eternal Spirit' through whom Christ offered Himself."),
    c("Psalm 139:7", "theme", "'Where could I go from your Spirit?' He is everywhere, the eternal Spirit."),
  ],
  "Romans 8:11": [
    c("1 Corinthians 6:14", "theme", "The Spirit who raised Jesus will also raise us; resurrection is His work."),
    c("Ezekiel 37:5-6", "pattern", "The Spirit gives life to dry bones: the same Spirit who will raise our mortal bodies."),
  ],

  // ------------------------------------------------------------------
  // The Spirit's work + the walk (new questions)
  // ------------------------------------------------------------------
  "John 16:11": [
    c("Colossians 2:15", "fulfilled", "The cross disarmed the rulers and authorities; the prince of this world is judged."),
    c("John 12:31", "theme", "'Now the prince of this world will be cast out': Jesus said at the cross."),
  ],
  "Daniel 7:13-14": [
    c("Mark 14:62", "fulfilled", "At His trial Jesus answers the high priest: 'You will see the Son of Man sitting at the right hand of Power, and coming with the clouds': Daniel's vision, claimed by Christ."),
    c("Revelation 1:13", "theme", "John sees 'one like a son of man' among the lampstands: the risen Jesus bearing Daniel's title."),
    c("Matthew 26:64", "fulfilled", "Jesus applies Daniel's 'Son of Man' to Himself before the Sanhedrin."),
  ],
  "John 15:5": [
    c("Colossians 1:27", "theme", "'Christ in you': the union that makes fruitfulness possible."),
    c("Galatians 2:20", "theme", "'No longer I that live, but Christ living in me': the branch-life he describes."),
  ],
  "2 Corinthians 3:18": [
    c("2 Corinthians 4:6", "theme", "The glory of God shining in the face of Christ: the glory we are being changed into."),
    c("Romans 12:2", "theme", "Transformed by the renewing of the mind: the Spirit's ongoing work."),
    c("1 John 3:2", "promise", "When He appears we will be like Him: the transformation's glorious destination."),
  ],
  "Galatians 5:16": [
    c("Romans 8:5-8", "theme", "Those who live according to the flesh vs. those who live according to the Spirit."),
    c("Colossians 3:1-2", "theme", "Set your minds on things above: the bent of the Spirit-led life."),
  ],
  "Romans 6:11": [
    c("Galatians 2:20", "theme", "Crucified with Christ, and yet alive: He lives in me."),
    c("Colossians 3:3", "theme", "You died, and your life is hidden with Christ in God."),
  ],
  "Hebrews 7:25": [
    c("Romans 8:34", "parallel", "Christ at the right hand of God is interceding for us."),
    c("Hebrews 4:16", "theme", "Because He ever lives to intercede, we come boldly for grace."),
    c("1 John 2:1", "theme", "We have an advocate with the Father, Jesus Christ the righteous."),
  ],
  "John 14:2-3": [
    c("Revelation 21:1-4", "promise", "A new heaven and a new earth: God dwelling with His people, the place He prepared."),
    c("Hebrews 11:16", "promise", "He has prepared a city for them: a better, heavenly country."),
  ],

  // ------------------------------------------------------------------
  // God the Father + faith & works
  // ------------------------------------------------------------------
  "John 14:9": [
    c("John 1:18", "theme", "The only Son, who is at the Father's side, has made Him known."),
    c("Colossians 1:15", "theme", "Jesus is the image of the invisible God; to see Him is to see the Father."),
    c("Hebrews 1:3", "theme", "The Son is the exact imprint of God's nature."),
  ],
  "1 John 3:1": [
    c("John 3:16", "theme", "God so loved: the same love that gave His Son makes us His children."),
    c("Galatians 4:4-5", "theme", "He sent forth His Son… that we might receive adoption as children."),
    c("Ephesians 1:5", "theme", "Predestined us for adoption through Jesus Christ, in love."),
  ],
  "James 2:17": [
    c("Romans 3:28", "contrast", "Paul: justified by faith apart from works. James: faith without works is dead. Two sides of the same reality."),
    c("John 15:5", "theme", "A branch that abides in the vine bears fruit; genuine faith naturally produces works."),
    c("Ephesians 2:8-9", "contrast", "Paul's 'justified by faith apart from the works of the law,' while James insists real faith works. The same Spirit wrote both."),
  ],
  "James 2:26": [
    c("Romans 4:5", "contrast", "Paul: faith counted as righteousness. James: faith without works is dead. The ground and the fruit of the same faith."),
    c("James 2:17", "parallel", "James' own summary: a body without the spirit is dead, so faith without works is dead."),
  ],
  "Galatians 5:6": [
    c("Ephesians 2:10", "theme", "Created in Christ Jesus for good works: faith that works through love."),
    c("1 Corinthians 13:13", "theme", "The greatest of gifts is love, and genuine faith is ever 'working through love.'"),
  ],
  "1 Corinthians 15:3": [
    c("Romans 5:8", "theme", "Christ died for the ungodly: 'for our sins,' as the gospel says."),
    c("Isaiah 53:5", "fulfilled", "He was pierced for our transgressions: the death 'for our sins' the Servant-song foretold."),
    c("Mark 10:45", "theme", "The Son of Man came to give his life as a ransom for many."),
  ],
  "Romans 3:24": [
    c("Ephesians 2:8", "theme", "By grace through faith, the gift of justification."),
    c("Titus 3:7", "theme", "Justified by his grace, heirs according to the hope of eternal life."),
    c("Romans 4:5", "parallel", "Faith credited as righteousness: Paul's own explanation of how we are justified."),
  ],
  "Hebrews 11:1": [
    c("Hebrews 11:6", "theme", "Without faith it is impossible to please God: the same letter, the same point."),
    c("Romans 10:17", "theme", "Faith comes by hearing the word: the content and the confidence of biblical faith."),
  ],
  "Romans 8:28": [
    c("Genesis 50:20", "parallel", "You meant evil against me, but God meant it for good: the same sovereign working."),
    c("Romans 8:18", "theme", "The present sufferings are not worth comparing with the glory to come."),
    c("2 Corinthians 4:17", "theme", "A light affliction working an eternal weight of glory."),
  ],
  "Daniel 4:35": [
    c("Isaiah 46:9-10", "theme", "I am God, and there is none like me; I will do all my pleasure."),
    c("Romans 11:36", "theme", "From him and through him and to him are all things."),
    c("Ephesians 1:11", "theme", "He works all things after the counsel of his will."),
  ],
  "Proverbs 3:5": [
    c("James 1:5", "theme", "Ask God for wisdom, and he will give it: the trust that leads to guidance."),
    c("Psalm 32:8", "theme", "I will instruct you and teach you in the way that you should go."),
    c("Romans 12:2", "theme", "Renew your mind, and you will discern the will of God."),
  ],
  "Acts 3:19": [
    c("2 Corinthians 7:10", "theme", "Godly sorrow produces repentance leading to salvation."),
    c("Luke 24:47", "theme", "Repentance and remission of sins proclaimed in his name."),
    c("Joel 2:13", "pattern", "Return to the LORD your God, for he is gracious and merciful, slow to anger and abundant in lovingkindness."),
  ],
  "Romans 6:23": [
    c("Romans 5:12", "theme", "Sin entered through one man, and death through sin: the wage of the offense."),
    c("Ephesians 2:8", "contrast", "The wage is death, but the gift is eternal life: grace versus debt."),
    c("1 John 5:11", "theme", "God gave us eternal life, and this life is in his Son: the gift."),
  ],
  "2 Timothy 3:16": [
    c("2 Peter 1:21", "theme", "Men spoke from God, carried along by the Spirit: the origin of Scripture."),
    c("Psalm 19:7", "theme", "The law of the Lord is perfect, restoring the soul."),
    c("Hebrews 4:12", "theme", "The word of God is living and active, sharper than any two-edged sword."),
  ],
  "Ephesians 6:12": [
    c("Ephesians 6:13-17", "theme", "The armor of God: how we stand against these spiritual forces."),
    c("Colossians 2:15", "fulfilled", "Christ disarmed the rulers and authorities at the cross: the enemy we resist is already defeated."),
    c("1 Peter 5:8", "parallel", "Your adversary the devil walks about as a roaring lion."),
  ],
  "Revelation 21:4": [
    c("Isaiah 65:19", "quotes", "The voice of weeping and crying will be heard no more."),
    c("1 Corinthians 15:26", "theme", "The last enemy, death, is destroyed."),
    c("Revelation 7:17", "theme", "God will wipe away every tear from their eyes: the same promise to the martyrs."),
  ],
  "Hebrews 1:14": [
    c("Psalm 103:20", "theme", "Angels who excel in strength, doing his word."),
    c("Hebrews 1:5-6", "theme", "Above angels, the Son is worshiped; they are servants."),
    c("2 Kings 6:17", "theme", "The mountain is full of horses and chariots of fire: angels minister unseen."),
  ],
  "Galatians 5:22": [
    c("John 15:5", "theme", "Abide in the vine and bear fruit: the fruit of the Spirit grows in union with Christ."),
    c("Ephesians 5:9", "theme", "The fruit of the light: goodness, righteousness, and truth."),
    c("Colossians 3:12", "theme", "Put on compassion, kindness, humility: the same fruit described another way."),
  ],
  "Romans 5:12": [
    c("Genesis 3:6-7", "theme", "The first disobedience through which sin entered the world."),
    c("Romans 3:23", "theme", "All have sinned: because all died in the one man's transgression."),
    c("Ezekiel 18:20", "contrast", "The soul who sins will die: the just sentence for the offense."),
  ],
  "Psalms 42:5": [
    c("Psalms 43:5", "theme", "The refrain repeated across two psalms: questioning the soul, then commanding it to hope in God."),
    c("2 Corinthians 7:5", "parallel", "Paul's honest report: fightings outside, fears inside. Distress and faith in the same breath."),
    c("Jonah 2:7", "theme", "When my soul fainted within me, I remembered Yahweh. Despair remembered becomes prayer."),
  ],
  "Psalms 88:18": [
    c("Psalms 30:5", "contrast", "Psalm 30 promises that weeping is for a night only; Psalm 88 sings a night that lasts to its final verse."),
    c("Matthew 27:46", "pattern", "My God, my God, why have you forsaken me? The darkness of lament finds its deepest address at the cross."),
  ],
  "1 Peter 5:8": [
    c("Job 1:7", "theme", "Where have you come from? From roaming the earth: the prowler at work."),
    c("Revelation 12:10", "theme", "The accuser who accuses our brothers day and night."),
    c("Ephesians 6:12", "parallel", "Our wrestling is not against flesh and blood, but against him."),
  ],
  "Ephesians 6:13-17": [
    c("Ephesians 6:12", "theme", "The foe we face: spiritual forces of darkness."),
    c("2 Corinthians 10:4-5", "parallel", "Divine weapons to pull down the strongholds of the enemy."),
    c("1 Thessalonians 5:8", "theme", "Put on the breastplate of faith and love, and the helmet of hope: the same armor."),
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
