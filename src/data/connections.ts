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
const c = (target: string, kind: ConnectionKind, note: string): Connection => ({
  target,
  kind,
  note,
});

export const connections: Record<string, Connection[]> = {
  // ------------------------------------------------------------------
  // John's gospel: who Jesus is
  // ------------------------------------------------------------------
  "John 1:1": [
    c(
      "Genesis 1:1",
      "theme",
      "John opens his Gospel with the opening words of Genesis ('In the beginning…') so we see the Word was already there before creation began.",
    ),
    c(
      "John 8:58",
      "theme",
      "'Before Abraham came into existence, I AM': the Word's eternity and divine name.",
    ),
    c(
      "Colossians 1:16-17",
      "theme",
      "All things were created through the Word and hold together in Him.",
    ),
    c(
      "Hebrews 1:2-3",
      "theme",
      "God made the worlds through the Son, the radiance of His glory.",
    ),
    c(
      "Revelation 19:13",
      "theme",
      "The returning King is called 'The Word of God': the same Word who was in the beginning.",
    ),
  ],
  "John 1:14": [
    c(
      "Philippians 2:6-7",
      "pattern",
      "The Word who was God took the form of a servant: 'the Word became flesh.'",
    ),
    c(
      "Hebrews 2:14-17",
      "theme",
      "He shared in our flesh and blood so He could be a merciful High Priest.",
    ),
    c(
      "Colossians 2:9",
      "fulfilled",
      "The fullness of deity dwells in Him bodily: the Word made flesh.",
    ),
  ],
  "John 8:58": [
    c(
      "Exodus 3:14",
      "quotes",
      "Jesus takes the name God revealed in the burning bush, 'I AM WHO I AM,' as His own.",
    ),
    c(
      "John 1:1",
      "theme",
      "The Word was with God in the beginning, before Abraham existed.",
    ),
    c(
      "Isaiah 43:10-13",
      "contrast",
      "God says 'before me there was no God formed,' yet the man Jesus claims the divine 'I AM.'",
    ),
  ],
  "John 20:28": [
    c(
      "Isaiah 45:22-23",
      "quotes",
      "God swears that every knee will bow and every tongue swear to Him alone, and Thomas bows to Jesus.",
    ),
    c(
      "Philippians 2:10-11",
      "fulfilled",
      "Paul applies Isaiah's 'every knee… every tongue' to Jesus Christ as Lord.",
    ),
    c(
      "Psalm 22:28",
      "theme",
      "'The kingdom is Yahweh’s. He is the ruler over the nations,' and Thomas calls Jesus his Lord and his God.",
    ),
  ],
  "Philippians 2:9-11": [
    c(
      "Isaiah 45:23",
      "quotes",
      "The name above every name: God's own words, now given to Jesus.",
    ),
    c(
      "John 13:13",
      "theme",
      "Jesus: 'You call me Teacher and Lord. You say so correctly, for so I am.'",
    ),
  ],
  "Hebrews 1:3": [
    c(
      "Colossians 1:15",
      "theme",
      "The Son is 'the image of the invisible God.'",
    ),
    c(
      "2 Corinthians 4:6",
      "theme",
      "The glory of God shines in the face of Jesus Christ.",
    ),
    c(
      "John 1:14",
      "theme",
      "We beheld His glory: glory as of the only Son from the Father.",
    ),
  ],
  "Colossians 2:9": [
    c(
      "John 1:14",
      "theme",
      "The Word became flesh: the fullness of deity dwelling bodily.",
    ),
    c("Hebrews 1:3", "theme", "The exact imprint of God's nature."),
  ],

  // ------------------------------------------------------------------
  // The cross: why He died
  // ------------------------------------------------------------------
  "Isaiah 53:5": [
    c(
      "1 Peter 2:24",
      "fulfilled",
      "Peter explains the cross in Isaiah's own words: 'his own self bore our sins in his body on the tree.'",
    ),
    c(
      "Matthew 8:17",
      "fulfilled",
      "Matthew applies this Servant-song to Jesus' healings.",
    ),
  ],
  "Isaiah 53:6": [
    c(
      "2 Corinthians 5:21",
      "fulfilled",
      "The LORD laid on Him the iniquity of us all: God made Him who knew no sin to be sin for us.",
    ),
    c(
      "Romans 5:8",
      "theme",
      "While we were still sinners, the sheep who had gone astray, Christ died for us.",
    ),
  ],
  "Romans 3:23": [
    c(
      "Psalm 14:1-3",
      "quotes",
      "Paul's 'There is no one righteous; no, not one' echoes the psalmist's verdict on all humanity.",
    ),
    c(
      "Psalm 51:4",
      "theme",
      "'Against you, and you only, have I sinned': the deepest wrong of sin is against God.",
    ),
  ],
  "Romans 5:8": [
    c(
      "John 3:16",
      "theme",
      "God loved the world, so He gave His Son while we were still sinners.",
    ),
    c(
      "Romans 8:32",
      "theme",
      "'He who didn't spare his own Son': the love proven at the cross.",
    ),
    c(
      "1 John 4:9-10",
      "theme",
      "This is love: not that we loved God, but that He loved us and sent His Son.",
    ),
  ],
  "2 Corinthians 5:21": [
    c(
      "Isaiah 53:6",
      "fulfilled",
      "'Yahweh has laid on him the iniquity of us all': the great exchange.",
    ),
    c(
      "Galatians 3:13",
      "theme",
      "Christ became a curse for us, redeeming us from the curse of the law.",
    ),
    c(
      "Leviticus 16:21-22",
      "pattern",
      "The scapegoat bore the people's sins and carried them away: a picture of the sinless One becoming sin for us.",
    ),
  ],
  "Mark 10:45": [
    c(
      "Isaiah 53:10-12",
      "fulfilled",
      "The Servant 'poured out his soul to death… yet he bore the sin of many': the ransom Jesus came to pay.",
    ),
    c(
      "1 Timothy 2:5-6",
      "theme",
      "The one mediator gave himself as a ransom for all.",
    ),
  ],

  // ------------------------------------------------------------------
  // Salvation: how we come
  // ------------------------------------------------------------------
  "John 14:6": [
    c(
      "Acts 4:12",
      "theme",
      "'Neither is there any other name under heaven… by which we must be saved.'",
    ),
    c(
      "John 10:9",
      "theme",
      "'I am the door. If anyone enters in by me, he will be saved.'",
    ),
    c(
      "Hebrews 10:19-20",
      "theme",
      "A new and living way into the holy place: opened through His flesh.",
    ),
  ],
  "John 3:16": [
    c(
      "Numbers 21:8-9",
      "pattern",
      "Just as the lifted bronze serpent brought life, the lifted Son of Man gives eternal life (John 3:14).",
    ),
    c(
      "1 John 4:9",
      "theme",
      "'By this, God’s love was revealed in us: that God has sent his one and only Son into the world.'",
    ),
  ],
  "Romans 10:9-10": [
    c(
      "Joel 2:32",
      "quotes",
      "Paul's 'whoever will call on the name of the Lord will be saved' is the prophet Joel's promise.",
    ),
    c(
      "Deuteronomy 30:12-14",
      "quotes",
      "Moses' 'the word is very near to you': Paul applies it to the word of faith we preach.",
    ),
  ],
  "Ephesians 2:8-9": [
    c("Titus 3:5", "theme", "'Not by works… but according to his mercy.'"),
    c(
      "Romans 3:24",
      "theme",
      "Justified freely by His grace through the redemption that is in Christ Jesus.",
    ),
    c(
      "Jonah 2:9",
      "theme",
      "'Salvation belongs to Yahweh': it is His to give, not ours to earn.",
    ),
  ],
  "John 10:27-28": [
    c(
      "Romans 8:38-39",
      "theme",
      "Nothing can separate us from the love of God; no one can snatch them from His hand.",
    ),
    c("John 6:37", "theme", "'He who comes to me I will in no way throw out.'"),
    c("John 17:12", "theme", "Of those the Father gave Him, Jesus lost none."),
  ],
  "Romans 8:38-39": [
    c(
      "John 10:28",
      "theme",
      "The Shepherd holds His sheep; no one can snatch them out of His hand.",
    ),
    c(
      "Deuteronomy 31:6",
      "theme",
      "'He will not fail you nor forsake you': from Sinai to the cross, the same faithful God.",
    ),
  ],
  "1 John 1:9": [
    c(
      "Psalm 32:5",
      "theme",
      "'I acknowledged my sin… and you forgave the iniquity of my sin.'",
    ),
    c(
      "Proverbs 28:13",
      "theme",
      "'He who conceals his sins doesn't prosper, but whoever confesses and renounces them finds mercy.'",
    ),
  ],
  "1 John 2:1-2": [
    c(
      "Hebrews 7:25",
      "theme",
      "Jesus 'lives forever to make intercession' for us: our advocate above.",
    ),
    c(
      "John 14:16",
      "theme",
      "The same word 'Helper/Advocate' (paraclete): Jesus is our advocate with the Father, and He sent another Helper, the Spirit.",
    ),
  ],

  // ------------------------------------------------------------------
  // The Holy Spirit
  // ------------------------------------------------------------------
  "John 14:16-17": [
    c(
      "John 15:26",
      "theme",
      "The Spirit 'whom I will send… the Spirit of truth': the Helper who testifies about Jesus.",
    ),
    c(
      "Romans 8:9",
      "fulfilled",
      "'If any man doesn't have the Spirit of Christ, he is not his': He dwells in you (John 14:17).",
    ),
  ],
  "John 16:13-14": [
    c(
      "John 15:26",
      "theme",
      "The Spirit bears witness about Jesus and glorifies Him.",
    ),
    c(
      "1 Corinthians 2:12-13",
      "theme",
      "We have received the Spirit, who teaches the deep and spiritual things of God.",
    ),
  ],
  "Acts 5:3-4": [
    c(
      "Psalm 51:4",
      "theme",
      "To deceive the Spirit is to sin against God: 'against you, and you only, have I sinned.'",
    ),
    c(
      "Numbers 32:23",
      "theme",
      "'You have sinned against Yahweh; and be sure your sin will find you out': sin against God is never private or cost-free.",
    ),
  ],
  "Matthew 28:19": [
    c(
      "2 Corinthians 13:14",
      "theme",
      "The apostolic benediction names Father, Son, and Spirit as the one source of grace.",
    ),
    c(
      "Genesis 1:26",
      "theme",
      "'Let us make man in our image': the plural address hints at the triune God.",
    ),
    c(
      "Isaiah 48:16",
      "theme",
      "'Now the Lord Yahweh has sent me, with his Spirit': Father, Son, and Spirit working together.",
    ),
  ],
  "Hebrews 9:14": [
    c(
      "Genesis 1:2",
      "theme",
      "The same Spirit who brooded over creation is the 'eternal Spirit' through whom Christ offered Himself.",
    ),
    c(
      "Psalm 139:7",
      "theme",
      "'Where could I go from your Spirit?' He is everywhere, the eternal Spirit.",
    ),
  ],
  "Romans 8:11": [
    c(
      "1 Corinthians 6:14",
      "theme",
      "The Spirit who raised Jesus will also raise us; resurrection is His work.",
    ),
    c(
      "Ezekiel 37:5-6",
      "pattern",
      "The Spirit gives life to dry bones: the same Spirit who will raise our mortal bodies.",
    ),
  ],

  // ------------------------------------------------------------------
  // The Spirit's work + the walk (new questions)
  // ------------------------------------------------------------------
  "John 16:11": [
    c(
      "Colossians 2:15",
      "fulfilled",
      "The cross disarmed the rulers and authorities; the prince of this world is judged.",
    ),
    c(
      "John 12:31",
      "theme",
      "'Now the prince of this world will be cast out': Jesus said at the cross.",
    ),
  ],
  "Daniel 7:13-14": [
    c(
      "Mark 14:62",
      "fulfilled",
      "At His trial Jesus answers the high priest: 'You will see the Son of Man sitting at the right hand of Power, and coming with the clouds': Daniel's vision, claimed by Christ.",
    ),
    c(
      "Revelation 1:13",
      "theme",
      "John sees 'one like a son of man' among the lampstands: the risen Jesus bearing Daniel's title.",
    ),
    c(
      "Matthew 26:64",
      "fulfilled",
      "Jesus applies Daniel's 'Son of Man' to Himself before the Sanhedrin.",
    ),
  ],
  "John 15:5": [
    c(
      "Colossians 1:27",
      "theme",
      "'Christ in you': the union that makes fruitfulness possible.",
    ),
    c(
      "Galatians 2:20",
      "theme",
      "'No longer I that live, but Christ living in me': the branch-life he describes.",
    ),
  ],
  "2 Corinthians 3:18": [
    c(
      "2 Corinthians 4:6",
      "theme",
      "The glory of God shining in the face of Christ: the glory we are being changed into.",
    ),
    c(
      "Romans 12:2",
      "theme",
      "Transformed by the renewing of the mind: the Spirit's ongoing work.",
    ),
    c(
      "1 John 3:2",
      "promise",
      "When He appears we will be like Him: the transformation's glorious destination.",
    ),
  ],
  "Galatians 5:16": [
    c(
      "Romans 8:5-8",
      "theme",
      "Those who live according to the flesh vs. those who live according to the Spirit.",
    ),
    c(
      "Colossians 3:1-2",
      "theme",
      "Set your minds on things above: the bent of the Spirit-led life.",
    ),
  ],
  "Romans 6:11": [
    c(
      "Galatians 2:20",
      "theme",
      "Crucified with Christ, and yet alive: He lives in me.",
    ),
    c(
      "Colossians 3:3",
      "theme",
      "You died, and your life is hidden with Christ in God.",
    ),
  ],
  "Hebrews 7:25": [
    c(
      "Romans 8:34",
      "parallel",
      "Christ at the right hand of God is interceding for us.",
    ),
    c(
      "Hebrews 4:16",
      "theme",
      "Because He ever lives to intercede, we come boldly for grace.",
    ),
    c(
      "1 John 2:1",
      "theme",
      "We have an advocate with the Father, Jesus Christ the righteous.",
    ),
  ],
  "John 14:2-3": [
    c(
      "Revelation 21:1-4",
      "promise",
      "A new heaven and a new earth: God dwelling with His people, the place He prepared.",
    ),
    c(
      "Hebrews 11:16",
      "promise",
      "He has prepared a city for them: a better, heavenly country.",
    ),
  ],

  // ------------------------------------------------------------------
  // God the Father + faith & works
  // ------------------------------------------------------------------
  "John 14:9": [
    c(
      "John 1:18",
      "theme",
      "The only Son, who is at the Father's side, has made Him known.",
    ),
    c(
      "Colossians 1:15",
      "theme",
      "Jesus is the image of the invisible God; to see Him is to see the Father.",
    ),
    c("Hebrews 1:3", "theme", "The Son is the exact imprint of God's nature."),
  ],
  "1 John 3:1": [
    c(
      "John 3:16",
      "theme",
      "God so loved: the same love that gave His Son makes us His children.",
    ),
    c(
      "Galatians 4:4-5",
      "theme",
      "He sent forth His Son… that we might receive adoption as children.",
    ),
    c(
      "Ephesians 1:5",
      "theme",
      "Predestined us for adoption through Jesus Christ, in love.",
    ),
  ],
  "James 2:17": [
    c(
      "Romans 3:28",
      "contrast",
      "Paul: justified by faith apart from works. James: faith without works is dead. Two sides of the same reality.",
    ),
    c(
      "John 15:5",
      "theme",
      "A branch that abides in the vine bears fruit; genuine faith naturally produces works.",
    ),
    c(
      "Ephesians 2:8-9",
      "contrast",
      "Paul's 'justified by faith apart from the works of the law,' while James insists real faith works. The same Spirit wrote both.",
    ),
  ],
  "James 2:26": [
    c(
      "Romans 4:5",
      "contrast",
      "Paul: faith counted as righteousness. James: faith without works is dead. The ground and the fruit of the same faith.",
    ),
    c(
      "James 2:17",
      "parallel",
      "James' own summary: a body without the spirit is dead, so faith without works is dead.",
    ),
  ],
  "Galatians 5:6": [
    c(
      "Ephesians 2:10",
      "theme",
      "Created in Christ Jesus for good works: faith that works through love.",
    ),
    c(
      "1 Corinthians 13:13",
      "theme",
      "The greatest of gifts is love, and genuine faith is ever 'working through love.'",
    ),
  ],
  "1 Corinthians 15:3": [
    c(
      "Romans 5:8",
      "theme",
      "Christ died for the ungodly: 'for our sins,' as the gospel says.",
    ),
    c(
      "Isaiah 53:5",
      "fulfilled",
      "He was pierced for our transgressions: the death 'for our sins' the Servant-song foretold.",
    ),
    c(
      "Mark 10:45",
      "theme",
      "The Son of Man came to give his life as a ransom for many.",
    ),
  ],
  "Romans 3:24": [
    c(
      "Ephesians 2:8",
      "theme",
      "By grace through faith, the gift of justification.",
    ),
    c(
      "Titus 3:7",
      "theme",
      "Justified by his grace, heirs according to the hope of eternal life.",
    ),
    c(
      "Romans 4:5",
      "parallel",
      "Faith credited as righteousness: Paul's own explanation of how we are justified.",
    ),
  ],
  "Hebrews 11:1": [
    c(
      "Hebrews 11:6",
      "theme",
      "Without faith it is impossible to please God: the same letter, the same point.",
    ),
    c(
      "Romans 10:17",
      "theme",
      "Faith comes by hearing the word: the content and the confidence of biblical faith.",
    ),
  ],
  "Romans 8:28": [
    c(
      "Genesis 50:20",
      "parallel",
      "You meant evil against me, but God meant it for good: the same sovereign working.",
    ),
    c(
      "Romans 8:18",
      "theme",
      "The present sufferings are not worth comparing with the glory to come.",
    ),
    c(
      "2 Corinthians 4:17",
      "theme",
      "A light affliction working an eternal weight of glory.",
    ),
  ],
  "Daniel 4:35": [
    c(
      "Isaiah 46:9-10",
      "theme",
      "I am God, and there is none like me; I will do all my pleasure.",
    ),
    c(
      "Romans 11:36",
      "theme",
      "From him and through him and to him are all things.",
    ),
    c(
      "Ephesians 1:11",
      "theme",
      "He works all things after the counsel of his will.",
    ),
  ],
  "Proverbs 3:5": [
    c(
      "James 1:5",
      "theme",
      "Ask God for wisdom, and he will give it: the trust that leads to guidance.",
    ),
    c(
      "Psalm 32:8",
      "theme",
      "I will instruct you and teach you in the way that you should go.",
    ),
    c(
      "Romans 12:2",
      "theme",
      "Renew your mind, and you will discern the will of God.",
    ),
  ],
  "Acts 3:19": [
    c(
      "2 Corinthians 7:10",
      "theme",
      "Godly sorrow produces repentance leading to salvation.",
    ),
    c(
      "Luke 24:47",
      "theme",
      "Repentance and remission of sins proclaimed in his name.",
    ),
    c(
      "Joel 2:13",
      "pattern",
      "Return to the LORD your God, for he is gracious and merciful, slow to anger and abundant in lovingkindness.",
    ),
  ],
  "Romans 6:23": [
    c(
      "Romans 5:12",
      "theme",
      "Sin entered through one man, and death through sin: the wage of the offense.",
    ),
    c(
      "Ephesians 2:8",
      "contrast",
      "The wage is death, but the gift is eternal life: grace versus debt.",
    ),
    c(
      "1 John 5:11",
      "theme",
      "God gave us eternal life, and this life is in his Son: the gift.",
    ),
  ],
  "2 Timothy 3:16": [
    c(
      "2 Peter 1:21",
      "theme",
      "Men spoke from God, carried along by the Spirit: the origin of Scripture.",
    ),
    c(
      "Psalm 19:7",
      "theme",
      "The law of the Lord is perfect, restoring the soul.",
    ),
    c(
      "Hebrews 4:12",
      "theme",
      "The word of God is living and active, sharper than any two-edged sword.",
    ),
  ],
  "Ephesians 6:12": [
    c(
      "Ephesians 6:13-17",
      "theme",
      "The armor of God: how we stand against these spiritual forces.",
    ),
    c(
      "Colossians 2:15",
      "fulfilled",
      "Christ disarmed the rulers and authorities at the cross: the enemy we resist is already defeated.",
    ),
    c(
      "1 Peter 5:8",
      "parallel",
      "Your adversary the devil walks about as a roaring lion.",
    ),
  ],
  "Revelation 21:4": [
    c(
      "Isaiah 65:19",
      "quotes",
      "The voice of weeping and crying will be heard no more.",
    ),
    c("1 Corinthians 15:26", "theme", "The last enemy, death, is destroyed."),
    c(
      "Revelation 7:17",
      "theme",
      "God will wipe away every tear from their eyes: the same promise to the martyrs.",
    ),
  ],
  "Hebrews 1:14": [
    c("Psalm 103:20", "theme", "Angels who excel in strength, doing his word."),
    c(
      "Hebrews 1:5-6",
      "theme",
      "Above angels, the Son is worshiped; they are servants.",
    ),
    c(
      "2 Kings 6:17",
      "theme",
      "The mountain is full of horses and chariots of fire: angels minister unseen.",
    ),
  ],
  "Galatians 5:22": [
    c(
      "John 15:5",
      "theme",
      "Abide in the vine and bear fruit: the fruit of the Spirit grows in union with Christ.",
    ),
    c(
      "Ephesians 5:9",
      "theme",
      "The fruit of the light: goodness, righteousness, and truth.",
    ),
    c(
      "Colossians 3:12",
      "theme",
      "Put on compassion, kindness, humility: the same fruit described another way.",
    ),
  ],
  "Romans 5:12": [
    c(
      "Genesis 3:6-7",
      "theme",
      "The first disobedience through which sin entered the world.",
    ),
    c(
      "Romans 3:23",
      "theme",
      "All have sinned: because all died in the one man's transgression.",
    ),
    c(
      "Ezekiel 18:20",
      "contrast",
      "The soul who sins will die: the just sentence for the offense.",
    ),
  ],
  "Mark 14:36": [
    c(
      "Matthew 6:10",
      "theme",
      "Your will be done: the Lord's Prayer petition that Gethsemane prays at the cost of everything.",
    ),
    c(
      "Luke 22:42-44",
      "parallel",
      "The parallel account of the same surrender, with the angel strengthening recorded only by Luke.",
    ),
  ],
  "Hebrews 4:15": [
    c(
      "Psalms 55:4-5",
      "pattern",
      "David's terror and horror foreshadow the greater David's sorrow even to death.",
    ),
    c(
      "1 Peter 2:23",
      "theme",
      "He suffered without threatening, because he entrusted himself to the one who judges rightly.",
    ),
  ],
  "Philippians 4:7": [
    c(
      "Isaiah 26:3",
      "theme",
      "Perfect peace kept for the mind stayed on God; the same guarding promise in the prophets.",
    ),
    c(
      "John 14:27",
      "parallel",
      "The peace Jesus bequeathed on his last night is the peace Paul says now garrisons believers.",
    ),
  ],
  "Psalms 42:5": [
    c(
      "Psalms 43:5",
      "theme",
      "The refrain repeated across two psalms: questioning the soul, then commanding it to hope in God.",
    ),
    c(
      "2 Corinthians 7:5",
      "parallel",
      "Paul's honest report: fightings outside, fears inside. Distress and faith in the same breath.",
    ),
    c(
      "Jonah 2:7",
      "theme",
      "When my soul fainted within me, I remembered Yahweh. Despair remembered becomes prayer.",
    ),
  ],
  "Psalms 88:18": [
    c(
      "Psalms 30:5",
      "contrast",
      "Psalm 30 promises that weeping is for a night only; Psalm 88 sings a night that lasts to its final verse.",
    ),
    c(
      "Matthew 27:46",
      "pattern",
      "My God, my God, why have you forsaken me? The darkness of lament finds its deepest address at the cross.",
    ),
  ],
  "1 Peter 5:8": [
    c(
      "Job 1:7",
      "theme",
      "Where have you come from? From roaming the earth: the prowler at work.",
    ),
    c(
      "Revelation 12:10",
      "theme",
      "The accuser who accuses our brothers day and night.",
    ),
    c(
      "Ephesians 6:12",
      "parallel",
      "Our wrestling is not against flesh and blood, but against him.",
    ),
  ],
  "Ephesians 6:13-17": [
    c(
      "Ephesians 6:12",
      "theme",
      "The foe we face: spiritual forces of darkness.",
    ),
    c(
      "2 Corinthians 10:4-5",
      "parallel",
      "Divine weapons to pull down the strongholds of the enemy.",
    ),
    c(
      "1 Thessalonians 5:8",
      "theme",
      "Put on the breastplate of faith and love, and the helmet of hope: the same armor.",
    ),
  ],

  // ------------------------------------------------------------------
  // OT story studies (canonical era trails)
  // ------------------------------------------------------------------
  // what-does-the-flood-show-us-about-god
  "Genesis 6:6": [
    c(
      "Hosea 11:8",
      "parallel",
      "The God who grieved over drowning a violent world also cries out over Ephraim with His heart turned within Him, proving divine judgment always flows through grief, not indifference.",
    ),
  ],
  "Genesis 6:8": [
    c(
      "Ephesians 2:8",
      "pattern",
      "Noah found favor in God's eyes before any achievement, the same order of salvation Paul names directly: by grace you have been saved, and that not of yourselves.",
    ),
  ],
  "Genesis 7:23": [
    c(
      "Matthew 24:37",
      "theme",
      "Jesus points back to the days of Noah as the standing pattern for His return, so the flood teaches that history is heading toward a real day of verdict.",
    ),
  ],
  "Genesis 8:1": [
    c(
      "Exodus 2:24",
      "parallel",
      "God remembered Noah at the ark and God remembered His covenant with Abraham at the Red Sea, marking both turning points where deliverance begins with God acting on His promise.",
    ),
  ],
  "Genesis 9:15": [
    c(
      "Isaiah 54:9",
      "promise",
      "God stakes future salvation on the flood covenant itself, swearing that as the waters of Noah will not again cover the earth, so His anger will not return against His redeemed people.",
    ),
  ],
  "1 Peter 3:21": [
    c(
      "Romans 6:4",
      "fulfilled",
      "Peter calls the flood waters a symbol of baptism, and Paul explains the reality: burial with Christ in baptism and rising with Him to newness of life.",
    ),
  ],
  // what-happened-at-babel
  "Genesis 11:4": [
    c(
      "Daniel 4:30",
      "pattern",
      "Nebuchadnezzar repeats Babel word for word, boasting of great Babylon he built for his own majesty's glory.",
    ),
    c(
      "Luke 14:11",
      "contrast",
      "Babel exalts a name and is scattered; Jesus says whoever exalts himself will be humbled, and whoever humbles himself will be exalted.",
    ),
  ],
  "Genesis 11:5": [
    c(
      "Psalms 113:6",
      "theme",
      "The God who must come down even to see mankind's tallest tower is the same God who stoops down to see heaven and earth.",
    ),
  ],
  "Genesis 11:9": [
    c(
      "Zephaniah 3:9",
      "promise",
      "What Yahweh confused at Babel He promises to purify, giving the peoples pure lips to call on His name together.",
    ),
  ],
  "Genesis 11:8": [
    c(
      "Acts 17:26",
      "fulfilled",
      "Paul reads the scattering as God's providence, fixing the appointed seasons and boundaries of every nation made from one blood.",
    ),
  ],
  "Acts 2:6": [
    c(
      "Genesis 11:7",
      "contrast",
      "At Babel confused languages stopped understanding; at Pentecost many languages carry one message and everyone understands.",
    ),
  ],
  // why-did-god-test-abraham-with-isaac
  "Genesis 22:5": [
    c(
      "Hebrews 11:19",
      "parallel",
      "Telling the servants that both would come back shows Abraham had already concluded that God is able to raise up even from the dead.",
    ),
  ],
  "Genesis 22:8": [
    c(
      "John 1:29",
      "fulfilled",
      "Abraham's confidence that God would provide the lamb is answered when John names Jesus the Lamb of God who takes away the sin of the world.",
    ),
  ],
  "Genesis 22:12": [
    c(
      "Romans 8:32",
      "contrast",
      "Abraham was stopped before he could give his son, but God went through with it and did not spare His own Son for us all.",
    ),
  ],
  "Genesis 22:13": [
    c(
      "1 Peter 1:19",
      "pattern",
      "A substitute dies so the promised son lives, foreshadowing the faultless and pure lamb, the blood of Christ.",
    ),
  ],
  "Genesis 22:14": [
    c(
      "Genesis 15:6",
      "theme",
      "The mountain named Yahweh Will Provide stands near the earlier moment when Abraham believed Yahweh and was counted righteous.",
    ),
  ],
  "Hebrews 11:19": [
    c(
      "John 11:25",
      "theme",
      "The resurrection Abraham trusted God for is the reality Jesus claims to be when He calls Himself the resurrection and the life.",
    ),
  ],
  // why-did-god-give-israel-the-law-at-sinai
  "Exodus 20:2": [
    c(
      "Romans 6:14",
      "theme",
      "Paul's order matches Sinai's preamble: being under grace rather than law does not weaken obedience, it grounds obedience in rescue already accomplished.",
    ),
  ],
  "Exodus 19:5": [
    c(
      "1 Peter 2:9",
      "fulfilled",
      "Peter applies Sinai's covenant identity language directly to the church, calling believers 'a people for God’s own possession'.",
    ),
  ],
  "Exodus 19:6": [
    c(
      "Revelation 1:6",
      "fulfilled",
      "John sees the Sinai ideal realized in Christ, who made us 'priests to his God and Father', a kingdom of priestly worshipers.",
    ),
  ],
  "Exodus 20:19": [
    c(
      "Hebrews 12:22",
      "contrast",
      "Israel begged God to stop speaking from the trembling mountain, while the writer of Hebrews announces that believers have come instead to joyful Mount Zion through the Mediator.",
    ),
  ],
  "Matthew 5:17": [
    c(
      "Romans 10:4",
      "fulfilled",
      "Paul agrees with Jesus that the law is not discarded but reaches its goal, since 'Christ is the fulfillment of the law' for everyone who believes.",
    ),
  ],
  "Galatians 3:24": [
    c(
      "Romans 3:31",
      "parallel",
      "Both apostles defend the law against misuse: the tutor leads to Christ, and faith upholds the law rather than nullifying it.",
    ),
  ],
  // why-did-god-spare-rahab
  "Joshua 2:11": [
    c(
      "Deuteronomy 4:39",
      "parallel",
      "Israel's own confession that Yahweh alone is God over heaven and earth comes first here from a Canaanite woman's lips.",
    ),
  ],
  "Joshua 2:21": [
    c(
      "Exodus 12:13",
      "pattern",
      "A visible sign on the house marks out those spared when judgment passes through, just as the Passover blood marked the doorposts.",
    ),
  ],
  "Joshua 6:17": [
    c(
      "Genesis 15:16",
      "fulfilled",
      "Jericho falls in exactly the generation God named to Abraham, when the iniquity of the Amorite would finally be full.",
    ),
  ],
  "Joshua 6:25": [
    c(
      "Genesis 12:3",
      "fulfilled",
      "The promise to bless all families of the earth through Abraham's seed begins reaching Canaanites in Rahab's rescue.",
    ),
  ],
  "Hebrews 11:31": [
    c(
      "James 2:25",
      "parallel",
      "Two New Testament writers hold up the same woman: Hebrews to display her faith, James to show that her faith worked.",
    ),
  ],
  "Matthew 1:5": [
    c(
      "Galatians 3:8",
      "fulfilled",
      "The nations blessed through Abraham arrive inside Messiah's own family tree by way of a Canaanite mother.",
    ),
  ],
  // what-does-ruth-teach-about-redemption
  "Ruth 2:12": [
    c(
      "Psalms 91:4",
      "theme",
      "Boaz blesses the foreigner who took refuge under the wings of the God of Israel, and the Psalm turns that same shelter into every believer's promise.",
    ),
    c(
      "Matthew 23:37",
      "theme",
      "Jesus longs to gather Jerusalem 'even as a hen gathers her chicks under her wings,' the very refuge image Boaz invoked over Ruth.",
    ),
  ],
  "Ruth 2:20": [
    c(
      "Ruth 4:14",
      "theme",
      "What Naomi names as God's hesed over the barley harvest ripens into the town's cry, 'Blessed be Yahweh,' over a grandson.",
    ),
  ],
  "Leviticus 25:25": [
    c(
      "Ephesians 1:7",
      "pattern",
      "The law's provision for a kinsman to buy back what a brother lost anticipates redemption's core cost: in Christ we have 'redemption through his blood', the price Boaz's transaction only foreshadowed.",
    ),
  ],
  "Ruth 4:9": [
    c(
      "Ephesians 1:7",
      "fulfilled",
      "Boaz pays out silver to buy back a lost inheritance, while we have redemption through blood, the costlier purchase Boaz only foreshadowed.",
    ),
  ],
  "Ruth 4:10": [
    c(
      "1 Peter 1:18-19",
      "contrast",
      "Ruth was bought with a legal transaction at the gate, but Peter says we were redeemed not with silver or gold 'but with precious blood, as of a faultless and pure lamb.'",
    ),
  ],
  "Ruth 4:22": [
    c(
      "Matthew 1:5",
      "fulfilled",
      "The book ends its genealogy at David, and Matthew traces that exact line through Rahab, Boaz, Ruth, Obed, and Jesse straight to Jesus.",
    ),
  ],
  // why-did-david-spare-saul
  "1 Samuel 24:6": [
    c(
      "Psalms 105:15",
      "theme",
      "Yahweh guards His anointed ones Himself, warning 'Don't touch my anointed ones!', so David refuses the very touch God reserved to His own authority.",
    ),
  ],
  "1 Samuel 24:12": [
    c(
      "Romans 12:19",
      "parallel",
      "David hands his case to Yahweh centuries before Paul tells every believer to give place to God's wrath instead of seeking revenge.",
    ),
  ],
  "1 Samuel 26:10": [
    c(
      "Psalms 37:7",
      "theme",
      "David lives out the psalmist's counsel to rest in Yahweh and wait patiently, trusting God's timing for a throne already promised.",
    ),
  ],
  "Romans 12:19": [
    c(
      "Deuteronomy 32:35",
      "quotes",
      "Paul cites the song of Moses, where Yahweh claims vengeance and recompense as His own prerogative rather than Israel's.",
    ),
  ],
  "Romans 12:21": [
    c(
      "1 Peter 2:23",
      "pattern",
      "Jesus embodied the command: when he was cursed he didn't curse back, but committed himself to him who judges righteously.",
    ),
  ],
  // why-did-god-send-jonah-to-nineveh
  "Jonah 1:17": [
    c(
      "Matthew 12:40",
      "fulfilled",
      "Jesus reads Jonah's three days in the fish as a prophetic sign of His own burial and resurrection.",
    ),
  ],
  "Jonah 2:9": [
    c(
      "Psalms 3:8",
      "theme",
      "A hunted psalmist and a drowning prophet land on the same confession, that salvation belongs to Yahweh alone.",
    ),
  ],
  "Jonah 3:10": [
    c(
      "Exodus 32:14",
      "pattern",
      "Both scenes show Yahweh relenting from declared disaster, once at Moses' intercession and once at Nineveh's repentance.",
    ),
  ],
  "Jonah 4:2": [
    c(
      "Exodus 34:6",
      "quotes",
      "Jonah prays back what God proclaimed about Himself at Sinai, including that He is 'slow to anger, and abundant in loving kindness'.",
    ),
  ],
  "Jonah 3:5": [
    c(
      "Matthew 12:41",
      "fulfilled",
      "Jesus treats Nineveh's repentance as historical and so real that its citizens will rise in judgment on unbelieving generations.",
    ),
  ],
  "Jonah 4:11": [
    c(
      "Luke 15:10",
      "theme",
      "God's pity for the hundred twenty thousand of Nineveh anticipates heaven's joy over one repenting sinner.",
    ),
  ],
  // how-did-jacob-become-israel
  "Genesis 28:12": [
    c(
      "John 1:51",
      "fulfilled",
      "Jesus tells Nathanael he will see the angels of God ascending and descending on the Son of Man, presenting Jesus as the true stairway where heaven meets earth.",
    ),
  ],
  "Genesis 28:14": [
    c(
      "Genesis 12:3",
      "pattern",
      "God repeats to fleeing Jacob the exact promise He gave Abraham, that all the families of the earth will be blessed in him and his seed.",
    ),
  ],
  "Genesis 28:15": [
    c(
      "Matthew 28:20",
      "promise",
      "The risen Jesus closes Matthew with the same covenant presence, saying he is with his people always, even to the end of the age.",
    ),
  ],
  "Genesis 32:28": [
    c(
      "Hosea 12:4",
      "parallel",
      "Hosea looks back on this night centuries later, remembering how Jacob struggled with the angel, wept, and pleaded until he prevailed.",
    ),
  ],
  "Genesis 35:11": [
    c(
      "Genesis 17:1",
      "pattern",
      "The God who named himself God Almighty to Abram reappears under the same name to confirm the identical covenant with Jacob.",
    ),
  ],
  // what-was-god-doing-in-josephs-slavery
  "Genesis 37:28": [
    c(
      "Matthew 26:15",
      "pattern",
      "Another hated brother is handed over by his own for silver weighed out in betrayal.",
    ),
  ],
  "Genesis 39:21": [
    c(
      "Acts 7:9",
      "parallel",
      "Stephen retells the story centuries later and draws the same conclusion: men sold Joseph, but God was with him.",
    ),
  ],
  "Genesis 45:8": [
    c(
      "Proverbs 16:9",
      "pattern",
      "The brothers planned a course for Joseph's life, but Yahweh directed where his steps actually went.",
    ),
  ],
  "Genesis 50:20": [
    c(
      "Romans 8:28",
      "theme",
      "Paul states the same principle for every believer: God works all things, even evil things, together for good.",
    ),
    c(
      "Acts 2:23",
      "pattern",
      "At the cross the pattern repeats: lawless men did the wicked deed by God's determined counsel and foreknowledge.",
    ),
  ],
  // why-did-god-harden-pharaohs-heart
  "Exodus 8:15": [
    c(
      "Hebrews 3:13",
      "theme",
      "Pharaoh shows where a habit of refusing to listen ends: Scripture warns that any of us can be hardened by the deceitfulness of sin.",
    ),
  ],
  "Exodus 9:27": [
    c(
      "2 Corinthians 7:10",
      "contrast",
      "Pharaoh admitted guilt yet changed nothing once the pain stopped; only godly sorrow works repentance leading to salvation.",
    ),
  ],
  "Hebrews 3:15": [
    c(
      "Psalms 95:8",
      "quotes",
      "The warning Hebrews repeats three times is drawn directly from the psalm recalling Israel's rebellion at Meribah.",
    ),
  ],
  "Romans 9:17": [
    c(
      "Exodus 9:16",
      "quotes",
      "Paul cites God's word to Pharaoh about being raised up to display His power when he answers the charge that hardening is unjust.",
    ),
  ],
  "Romans 9:22": [
    c(
      "2 Peter 3:9",
      "parallel",
      "The patience that bears with vessels of wrath is the same forbearance by which the Lord delays judgment, wanting all to come to repentance.",
    ),
  ],
  // what-was-the-tabernacle-for
  "Exodus 25:8": [
    c(
      "Revelation 21:3",
      "theme",
      "The sanctuary command already aimed at the end of the story, where a loud voice announces that God's dwelling is with people and He will dwell with them.",
    ),
  ],
  "Exodus 25:21": [
    c(
      "Romans 3:25",
      "pattern",
      "Paul calls Jesus the atoning sacrifice through faith in his blood, the reality toward which the covering placed over the testimony pointed.",
    ),
  ],
  "Exodus 25:22": [
    c(
      "Hebrews 9:24",
      "parallel",
      "The meeting place God appointed above the ark was one of the hand-made holy places that Hebrews calls representations of the true, where Christ now appears in God's presence for us.",
    ),
  ],
  "Exodus 40:34": [
    c(
      "John 1:14",
      "parallel",
      "The glory that once filled the tent and barred Moses from entering is the glory the apostles say they saw in the Word become flesh, full of grace and truth.",
    ),
  ],
  "Leviticus 16:2": [
    c(
      "Hebrews 9:24",
      "contrast",
      "Aaron was forbidden to enter the Most Holy Place at all times on pain of death, while Christ enters heaven itself to appear in the presence of God for us.",
    ),
  ],
  // what-did-the-sacrificial-system-teach-israel
  "Leviticus 17:11": [
    c(
      "Matthew 26:28",
      "fulfilled",
      "Jesus calls His own poured-out blood the blood of the covenant given for the remission of sins, the atonement-by-blood principle reaching its intended end.",
    ),
  ],
  "Leviticus 1:4": [
    c(
      "Isaiah 53:6",
      "theme",
      "The hand laid on the victim's head pictures exactly what Yahweh later did, laying on Him the iniquity of us all.",
    ),
  ],
  "Leviticus 16:21": [
    c(
      "2 Corinthians 5:21",
      "pattern",
      "Confessed sins placed on the innocent goat foreshadow God making Him who knew no sin to be sin on our behalf.",
    ),
  ],
  "Leviticus 16:22": [
    c(
      "John 1:29",
      "fulfilled",
      "A goat carrying Israel's iniquity to a solitary land anticipates the Lamb of God who takes away the sin of the world.",
    ),
  ],
  "Hebrews 10:4": [
    c(
      "Hebrews 10:14",
      "contrast",
      "What bulls and goats were powerless to do, one offering of Christ accomplished, perfecting forever those who are being sanctified.",
    ),
  ],

  // ------------------------------------------------------------------
  // Grief and hope: what happens when a believer dies
  // ------------------------------------------------------------------
  "Luke 23:43": [
    c(
      "2 Corinthians 12:4",
      "theme",
      "Paul too knew Paradise as a real place, caught up there though forbidden to tell what he heard.",
    ),
    c(
      "Revelation 2:7",
      "promise",
      "Paradise lost in Eden is promised again: the tree of life stands in the Paradise of God for those who overcome.",
    ),
  ],
  "Philippians 1:23": [
    c(
      "2 Corinthians 5:8",
      "parallel",
      "Paul twice weighs death as gain: to depart is to be with Christ, absent from the body and at home with the Lord.",
    ),
    c(
      "Luke 23:43",
      "parallel",
      "Jesus promised the thief 'today you will be with me in Paradise'; Paul calls departing to be with Christ far better.",
    ),
    c(
      "Ecclesiastes 12:7",
      "theme",
      "At death the spirit returns to the God who gave it; being with Christ is the personal fulfillment of that return.",
    ),
  ],
  "2 Corinthians 5:8": [
    c(
      "Philippians 1:23",
      "parallel",
      "The same dilemma from the other letter: to depart and be with Christ is far better.",
    ),
    c(
      "Luke 23:43",
      "promise",
      "Being at home with the Lord is what Jesus promised the dying thief: today with me in Paradise.",
    ),
    c(
      "Ecclesiastes 12:7",
      "theme",
      "The dust returns to the earth and the spirit returns to God; Paul fills that return with the face of the Lord.",
    ),
  ],
  "Hebrews 11:13": [
    c(
      "1 Peter 2:11",
      "parallel",
      "Peter addresses believers as foreigners and pilgrims, the same confession Abraham's family made.",
    ),
    c(
      "Hebrews 11:16",
      "theme",
      "They died not having received, yet God prepared a city for them and is not ashamed to be called their God.",
    ),
    c(
      "Hebrews 11:39-40",
      "theme",
      "Their story is unfinished without us: apart from us they will not be made perfect.",
    ),
  ],
  "Hebrews 11:16": [
    c(
      "Hebrews 11:13",
      "theme",
      "The strangers and pilgrims who died in faith are the ones God prepared the city for.",
    ),
    c(
      "John 14:3",
      "fulfilled",
      "The city God prepared for them is the place Jesus went to prepare: that where I am, you may be there also.",
    ),
  ],
  "Ephesians 4:8": [
    c(
      "Psalms 68:18",
      "quotes",
      "Paul quotes the psalm and reads it of Jesus: ascended on high, He led captivity captive and gave gifts to men.",
    ),
    c(
      "Revelation 5:12",
      "theme",
      "The ascended King pours out what He won: worthy is the Lamb to receive power, and gifts flow from His victory.",
    ),
  ],
  "Job 19:26-27": [
    c(
      "1 Corinthians 15:20",
      "fulfilled",
      "Job hoped to see God in his flesh after death; Christ risen as the first fruits of those who are asleep makes that hope sure.",
    ),
    c(
      "John 11:25",
      "theme",
      "The one who said 'I am the resurrection and the life' holds Job's expectation: I shall see God, even after my skin is destroyed.",
    ),
  ],
  "John 11:25": [
    c(
      "John 14:19",
      "parallel",
      "His resurrection is the life He gives: because I live, you will live also.",
    ),
    c(
      "1 Corinthians 15:20",
      "fulfilled",
      "He became the first fruits of those who are asleep: His rising is the guarantee of every believer's.",
    ),
  ],
  "1 Thessalonians 4:17": [
    c(
      "John 14:3",
      "promise",
      "The reception He promised arrives here: I will come again, and will receive you to myself.",
    ),
    c(
      "Luke 23:43",
      "theme",
      "Today with me in Paradise and forever with the Lord: the with-Christ promise spans death and the resurrection both.",
    ),
  ],
  "Lamentations 3:22-23": [
    c(
      "Psalms 30:5",
      "parallel",
      "Mercies new every morning are the reason weeping may stay for the night but joy comes in the morning.",
    ),
    c(
      "Psalms 42:11",
      "theme",
      "Even lament turns to hope in God: His compassion does not fail, so the soul can praise again.",
    ),
  ],
  "Psalms 30:5": [
    c(
      "John 16:20",
      "parallel",
      "Jesus promises the same exchange: your sorrow will be turned into joy.",
    ),
    c(
      "Lamentations 3:22-23",
      "parallel",
      "The night ends because His compassions do not fail; they are new every morning.",
    ),
  ],
  "Psalms 42:11": [
    c(
      "Psalms 43:5",
      "parallel",
      "The same refrain closes the next psalm: hope in God, for I shall still praise him.",
    ),
    c(
      "Lamentations 3:22-23",
      "theme",
      "The soul's question has an answer in God's unfailing compassion: hope in God, and praise returns.",
    ),
  ],
  "Psalms 13:5": [
    c(
      "Psalms 13:1",
      "contrast",
      "The same psalm moves from how long, Yahweh to trust: but I trust in your loving kindness.",
    ),
    c(
      "Psalms 62:5",
      "theme",
      "The soul that argued itself back to hope now rests: my expectation is from him.",
    ),
  ],
  "Psalms 13:1": [
    c(
      "Revelation 6:10",
      "parallel",
      "The martyrs under the altar cry the same how long; the psalmist's question is heaven's question too.",
    ),
    c(
      "Habakkuk 1:2",
      "parallel",
      "Habakkuk prayed it first: how long will I cry, and you will not hear?",
    ),
    c(
      "Psalms 13:5",
      "contrast",
      "The psalm does not end where it begins: but I trust in your loving kindness.",
    ),
  ],
  "Job 2:13": [
    c(
      "Romans 12:15",
      "pattern",
      "Job's friends did one thing right before they spoke: they sat with him seven days. Paul makes it a command: weep with those who weep.",
    ),
    c(
      "Job 16:2",
      "contrast",
      "Their silence honored grief; opening their mouths made them miserable comforters.",
    ),
  ],
  "2 Corinthians 1:4": [
    c(
      "Job 2:13",
      "pattern",
      "Presence before words: the comfort we receive equips us to sit with others the way Job's friends first did.",
    ),
    c(
      "1 Corinthians 12:26",
      "theme",
      "Comfort flows along the body: when one member suffers, all the members suffer with it.",
    ),
  ],
  "Romans 12:15": [
    c(
      "1 Corinthians 12:26",
      "theme",
      "The body's shared feeling made explicit: weep with those who weep, rejoice with those who rejoice.",
    ),
    c(
      "Job 2:13",
      "pattern",
      "The best grief counsel in Scripture began in silence: they sat with him seven days and no one spoke a word.",
    ),
  ],
  "1 Kings 19:7": [
    c(
      "Matthew 4:11",
      "parallel",
      "Angels served exhausted servants in both stories: they fed Elijah under the broom tree, they served Jesus after the temptation.",
    ),
    c(
      "Psalms 103:13-14",
      "theme",
      "The angel's word knows our frame: the journey is too great for you, so God's compassion treats the man as dust that needs sleep and food.",
    ),
  ],

  // ------------------------------------------------------------------
  // The fixed gulf: death, judgment, and no crossing over
  // ------------------------------------------------------------------
  "Luke 16:22": [
    c(
      "Revelation 7:17",
      "theme",
      "The beggar who longed for crumbs is carried to comfort, and heaven's own promise is the same picture: the Lamb 'shepherds them, and leads them to springs of waters of life.'",
    ),
    c(
      "Hebrews 1:14",
      "parallel",
      "Angels carry Lazarus to Abraham's bosom because that is their office: 'serving spirits, sent out to do service for the sake of those who will inherit salvation.'",
    ),
  ],
  "Luke 16:22-23": [
    c(
      "2 Corinthians 5:8",
      "theme",
      "Lazarus is at rest the moment he dies, which is Paul's own hope in other words: 'to be absent from the body, and to be at home with the Lord.'",
    ),
    c(
      "Hebrews 9:27",
      "theme",
      "Both men die once and wake with their destination settled, the appointment the whole parable rests on: 'it is appointed for men to die once, and after this, judgment.'",
    ),
  ],
  "Luke 16:22-26": [
    c(
      "Hebrews 11:39-40",
      "theme",
      "Abraham's bosom is comfort but not yet completion: the faithful of the old covenant 'should not be made perfect' apart from us.",
    ),
    c(
      "Luke 23:43",
      "fulfilled",
      "What the parable pictures as a place of rest becomes personal at the cross: 'today you will be with me in Paradise.'",
    ),
  ],
  "Luke 16:23-26": [
    c(
      "Mark 9:48",
      "theme",
      "The anguish of the parable is the Gehenna Jesus warns about elsewhere, the place 'where their worm doesn't die, and the fire is not quenched.'",
    ),
    c(
      "Revelation 20:14-15",
      "fulfilled",
      "Hades is not the last word, and the gulf is not the end of the story: 'Death and Hades were thrown into the lake of fire. This is the second death, the lake of fire.'",
    ),
    c(
      "Matthew 25:41",
      "theme",
      "The fire of the parable is the fire of the judgment, and Jesus names its first occupants: 'Depart from me, you cursed, into the eternal fire which is prepared for the devil and his angels.'",
    ),
  ],
  "Luke 16:24": [
    c(
      "Isaiah 66:24",
      "pattern",
      "The thirst and the flame are imagery Jesus' hearers knew from the prophets: 'their worm shall not die, neither shall their fire be quenched.'",
    ),
    c(
      "Matthew 25:46",
      "theme",
      "The same word measures both destinations, in the parable and in the judgment: 'These will go away into eternal punishment, but the righteous into eternal life.'",
    ),
  ],
  "Luke 16:26": [
    c(
      "Hebrews 9:27-28",
      "theme",
      "The gulf is a settled verdict rather than a waiting room, because there is no third step between the two: 'it is appointed for men to die once, and after this, judgment.'",
    ),
    c(
      "Luke 23:43",
      "contrast",
      "Two men died that same day and woke on opposite sides of this gulf: the thief with Jesus in Paradise, the rich man in anguish.",
    ),
    c(
      "2 Corinthians 5:8",
      "theme",
      "The crossing is fixed because each person is already home somewhere: 'to be absent from the body, and to be at home with the Lord.'",
    ),
    c(
      "Revelation 20:15",
      "theme",
      "What the gulf fixes in the parable is ratified at the judgment: 'If anyone was not found written in the book of life, he was cast into the lake of fire.'",
    ),
    c(
      "Isaiah 55:6",
      "contrast",
      "The crossing no one may make afterward is the seeking God commands beforehand: 'Seek Yahweh while he may be found; call you on him while he is near.'",
    ),
  ],
  "Luke 16:31": [
    c(
      "John 5:46-47",
      "parallel",
      "Jesus says the same to His own hearers: Moses wrote about Him, and a heart unmoved by Scripture will not be moved by wonders either.",
    ),
    c(
      "John 3:18",
      "theme",
      "Abraham's answer is a verdict rather than a delay: 'He who doesn't believe has been judged already, because he has not believed in the name of the one and only Son of God.'",
    ),
    c(
      "2 Corinthians 6:2",
      "contrast",
      "The warning against waiting for a sign becomes the apostle's plea to the living: 'Behold, now is the acceptable time. Behold, now is the day of salvation.'",
    ),
  ],

  // ------------------------------------------------------------------
  // Worship: spirit and truth, gathered and scattered
  // ------------------------------------------------------------------
  "John 4:23-24": [
    c(
      "Philippians 3:3",
      "parallel",
      "Paul describes the same worshipers: worship God in the Spirit, and have no confidence in the flesh.",
    ),
    c(
      "Psalms 51:17",
      "theme",
      "What the Father seeks, David already knew: a broken and contrite heart, O God, you will not despise.",
    ),
  ],
  "Romans 12:1": [
    c(
      "Hebrews 13:15-16",
      "parallel",
      "The living sacrifice continues as a sacrifice of praise, the fruit of lips which proclaim allegiance to his name.",
    ),
    c(
      "Psalms 51:17",
      "parallel",
      "The sacrifice God has always wanted: a broken and contrite heart, now offered with the whole body.",
    ),
    c(
      "Micah 6:8",
      "theme",
      "The daily shape of the living sacrifice: act justly, love mercy, walk humbly with your God.",
    ),
  ],
  "Psalms 50:12": [
    c(
      "Acts 17:25",
      "parallel",
      "Paul preaches the same truth in Athens: God is not served by men's hands as though he needed anything.",
    ),
    c(
      "Isaiah 66:1-2",
      "quotes",
      "Heaven is my throne: the question 'what kind of house will you build to me' was already rhetorical in Isaiah.",
    ),
  ],
  "Acts 17:24-25": [
    c(
      "Psalms 50:12",
      "parallel",
      "The psalm behind the sermon: if I were hungry, I would not tell you, for the world is mine.",
    ),
    c(
      "Isaiah 66:1-2",
      "parallel",
      "The God who gives all life and breath cannot be housed: heaven is my throne, and the earth is my footstool.",
    ),
  ],
  "Psalms 50:15": [
    c(
      "Psalms 91:15",
      "parallel",
      "The same promise in another psalm: I will be with him in trouble, I will deliver him, and honor him.",
    ),
    c(
      "Jeremiah 33:3",
      "promise",
      "Call to me, and I will answer you: the invitation Psalms 50 makes in the day of trouble.",
    ),
  ],
  "Amos 5:23-24": [
    c(
      "Micah 6:8",
      "parallel",
      "What God wanted instead of noise: to act justly, to love mercy, and to walk humbly with your God.",
    ),
    c(
      "Isaiah 1:15-17",
      "parallel",
      "Isaiah preaches the same indictment and the same cure: hands full of blood, so wash yourselves and seek justice.",
    ),
  ],
  "Isaiah 1:15": [
    c(
      "Amos 5:23-24",
      "parallel",
      "Two prophets, one verdict on worship without justice: God will not hear, and will not listen to the music.",
    ),
    c(
      "Isaiah 1:16-17",
      "theme",
      "The command that follows the indictment: cease to do evil, learn to do well, seek justice, relieve the oppressed.",
    ),
  ],
  "Mark 7:6-7": [
    c(
      "Isaiah 29:13",
      "quotes",
      "Jesus is quoting Isaiah's charge against His own generation: this people honors me with their lips, but their heart is far from me.",
    ),
    c(
      "Isaiah 1:15",
      "parallel",
      "Lip service and bloody hands: both prophets say God refuses worship that hides injustice.",
    ),
  ],
  "2 Samuel 6:7": [
    c(
      "Leviticus 10:1-2",
      "parallel",
      "Strange fire before Yahweh which he had not commanded: Nadab and Abihu died at the altar as Uzzah died at the ark.",
    ),
    c(
      "Deuteronomy 4:24",
      "theme",
      "Good intentions do not make the holy safe: Yahweh your God is a devouring fire, a jealous God.",
    ),
    c(
      "Hebrews 4:16",
      "contrast",
      "The same holy God now invites what Uzzah presumed: draw near with boldness to the throne of grace.",
    ),
  ],
  "Hebrews 12:28-29": [
    c(
      "Deuteronomy 4:24",
      "quotes",
      "Hebrews takes Sinai's warning as a present description: for Yahweh your God is a devouring fire, and our God is a consuming fire.",
    ),
    c(
      "Hebrews 4:16",
      "theme",
      "Reverence and access held together: the consuming fire is met at a throne of grace.",
    ),
  ],
  "Hebrews 4:16": [
    c(
      "Leviticus 16:2",
      "contrast",
      "Once even the high priest entered the Most Holy Place at the risk of death; now all may draw near with boldness.",
    ),
    c(
      "Hebrews 10:19-22",
      "theme",
      "The ground of the boldness: entrance into the holy place by the blood of Jesus.",
    ),
  ],
  "Revelation 5:13": [
    c(
      "Philippians 2:10-11",
      "parallel",
      "The homage John hears anticipated: at the name of Jesus every knee should bow, in heaven, on earth, and under the earth.",
    ),
    c(
      "Revelation 5:12",
      "theme",
      "The crescendo it completes: worthy is the Lamb who has been killed to receive the power, wealth, wisdom, strength, honor, glory, and blessing.",
    ),
  ],
  "Revelation 19:10": [
    c(
      "Matthew 4:10",
      "quotes",
      "The angel answers as Jesus answered Satan: worship God, and serve him only.",
    ),
    c(
      "Acts 10:25-26",
      "parallel",
      "Peter refused Cornelius' worship with the same reflex: a fellow servant of God will not accept what belongs to God.",
    ),
  ],
  "Acts 2:42": [
    c(
      "Hebrews 10:24-25",
      "parallel",
      "The first church's devotion becomes Hebrews' charge: do not forsake assembling, but consider how to provoke love and good works.",
    ),
    c(
      "Colossians 3:16",
      "parallel",
      "Teaching and admonishing one another with psalms: the word of Christ dwells richly where the church gathers.",
    ),
  ],
  "Colossians 3:16": [
    c(
      "Ephesians 5:18-19",
      "parallel",
      "Two letters, one recipe: be filled with the Spirit, and the Spirit-filled church sings psalms, hymns, and spiritual songs.",
    ),
    c(
      "Acts 2:42",
      "parallel",
      "The apostles' teaching and fellowship is the word of Christ dwelling richly in a gathered people.",
    ),
  ],
  "Hebrews 10:24-25": [
    c(
      "Hebrews 3:13",
      "parallel",
      "Gathering is daily care, not only weekly habit: exhort one another day by day, lest anyone be hardened by the deceitfulness of sin.",
    ),
    c(
      "Acts 2:42",
      "parallel",
      "The devoted continuing of the first church is the practice Hebrews commands: teaching, fellowship, breaking of bread, prayer.",
    ),
  ],
  "Habakkuk 3:17-18": [
    c(
      "Job 1:21",
      "parallel",
      "Job worshiped with nothing left: Yahweh gave, and Yahweh has taken away. Blessed be Yahweh's name.",
    ),
    c(
      "Philippians 4:11-12",
      "parallel",
      "Paul learned the same joy in any state: I have learned in whatever state I am, to be content in it.",
    ),
  ],
  "Acts 16:25": [
    c(
      "Habakkuk 3:17-18",
      "parallel",
      "Rejoicing though the fig tree doesn't flourish: midnight hymns in chains are Habakkuk's empty stalls made flesh.",
    ),
    c(
      "James 5:13",
      "parallel",
      "James' rule kept in the hardest place: is any cheerful? Let him sing praises. Paul and Silas sang in a prison.",
    ),
  ],
  "1 Corinthians 14:26": [
    c(
      "1 Corinthians 12:7",
      "theme",
      "Why each one brings something: to each one is given the manifestation of the Spirit for the profit of all.",
    ),
    c(
      "1 Peter 4:10-11",
      "parallel",
      "The gifts exercised in the gathering serve one another as good managers of the grace of God in its various forms.",
    ),
  ],
  "1 Corinthians 12:7": [
    c(
      "1 Peter 4:10",
      "parallel",
      "The manifestation given to each is a gift to be managed: employ it in serving one another.",
    ),
    c(
      "1 Corinthians 14:26",
      "theme",
      "The gathering is where the profit of all happens: each brings a psalm, a teaching, a revelation.",
    ),
  ],
  "1 Corinthians 14:33": [
    c(
      "1 Corinthians 14:40",
      "theme",
      "The practical outworking of the God of peace: let all things be done decently and in order.",
    ),
  ],
  "1 Corinthians 14:34": [
    c(
      "1 Timothy 2:11-12",
      "parallel",
      "The same instruction carried into the church's ordinary life: a woman is not to teach or to exercise authority over a man.",
    ),
    c(
      "1 Corinthians 11:5",
      "contrast",
      "Paul has already assumed women praying and prophesying in the assembly, so this silence concerns the teaching office rather than a woman's voice existing at all.",
    ),
  ],
  "1 Corinthians 11:3": [
    c(
      "Ephesians 5:23",
      "parallel",
      "The same headship named plainly elsewhere: the husband is the head of the wife, and Christ is the head of the assembly.",
    ),
    c(
      "1 Timothy 2:13",
      "parallel",
      "Paul's other word on men and women in the church reaches back to the same ground, the order of Adam and Eve.",
    ),
    c(
      "John 14:28",
      "theme",
      "Headship inside the Trinity: the Son is fully God and still says the Father is greater, so order is not inferiority.",
    ),
  ],
  "1 Timothy 2:12": [
    c(
      "1 Corinthians 14:34",
      "parallel",
      "The ruling given to Corinth and the standing order given to Timothy are one ruling, and Paul grounds both in creation.",
    ),
    c(
      "1 Timothy 3:2",
      "theme",
      "The office in view is the overseer's, and its qualification is that he be good at teaching.",
    ),
  ],
  "1 Corinthians 10:31": [
    c(
      "Colossians 3:17",
      "parallel",
      "The same all-of-life scope: whatever you do, in word or in deed, do all in the name of the Lord Jesus.",
    ),
    c(
      "Micah 6:8",
      "theme",
      "Eating and drinking done justly, mercifully, humbly: what Yahweh requires of you.",
    ),
  ],
  "Micah 6:8": [
    c(
      "Isaiah 1:17",
      "parallel",
      "Micah's summary in Isaiah's imperatives: learn to do well, seek justice, relieve the oppressed, judge the fatherless, plead for the widow.",
    ),
    c(
      "1 Corinthians 10:31",
      "theme",
      "The ordinary acts of eating and drinking belong to the walk humbly with your God.",
    ),
  ],
  "Revelation 21:22": [
    c(
      "John 2:19-21",
      "fulfilled",
      "Destroy this temple: the temple the new Jerusalem needs no building for is His risen body.",
    ),
    c(
      "Revelation 22:3-4",
      "theme",
      "Temple, throne, and presence are one: the throne of God and of the Lamb will be in it, and his servants serve him.",
    ),
  ],
  "Revelation 22:3-4": [
    c(
      "Exodus 33:20",
      "contrast",
      "Moses was told man may not see me and live; then his servants will see his face.",
    ),
    c(
      "1 John 3:2",
      "fulfilled",
      "The sight promised: when he is revealed, we will be like him, for we will see him just as he is.",
    ),
    c(
      "Revelation 21:22",
      "theme",
      "No temple because the Lord God and the Lamb are its temple: service and sight have the same address.",
    ),
  ],
  "Revelation 7:9-10": [
    c(
      "Revelation 5:9",
      "parallel",
      "The multitude out of every nation is the purchase of the new song: you were killed, and bought us for God with your blood, out of every tribe, language, people, and nation.",
    ),
    c(
      "Revelation 5:13",
      "theme",
      "The palm-branch crowd joins every created thing blessing the Lamb: salvation to our God and to the Lamb.",
    ),
  ],

  // ------------------------------------------------------------------
  // Fruit, filling, incarnation, and the Kingdom that is not of this world
  // ------------------------------------------------------------------
  "Galatians 5:22-23": [
    c(
      "John 15:5",
      "theme",
      "Fruit grows only on the vine: he who remains in me bears much fruit, for apart from me you can do nothing.",
    ),
    c(
      "Psalms 1:3",
      "parallel",
      "A tree planted by the streams of water produces its fruit in its season; the rooted soul bears the Spirit's fruit.",
    ),
    c(
      "Matthew 7:16",
      "contrast",
      "Fruit also exposes the counterfeit: do you gather grapes from thorns, or figs from thistles?",
    ),
  ],
  "Galatians 5:16-17": [
    c(
      "Romans 8:5-8",
      "parallel",
      "Paul names the war precisely: the mind set on the flesh is hostile to God, the mind set on the Spirit is life and peace.",
    ),
    c(
      "Galatians 5:22-23",
      "contrast",
      "The works of the flesh and the fruit of the Spirit are the two outcomes of this war.",
    ),
  ],
  "Romans 8:5-8": [
    c(
      "Galatians 5:16-17",
      "parallel",
      "The same two powers at war: the flesh lusts against the Spirit, and the Spirit against the flesh.",
    ),
    c(
      "Galatians 5:22-23",
      "contrast",
      "Where the flesh produces its works, the Spirit produces fruit of another kind entirely.",
    ),
  ],
  "Matthew 7:16": [
    c(
      "Galatians 5:22-23",
      "contrast",
      "The Spirit's fruit is what the test looks for: love, joy, peace, patience, kindness, goodness, faith.",
    ),
    c(
      "Luke 6:43-45",
      "parallel",
      "No good tree produces rotten fruit: the treasure of the heart determines what the mouth produces.",
    ),
  ],
  "1 Corinthians 12:13": [
    c(
      "Galatians 3:27-28",
      "parallel",
      "The one baptism creates the one people: as many as were baptized into Christ have put on Christ, neither Jew nor Greek.",
    ),
    c(
      "Ephesians 4:4-5",
      "theme",
      "The unity the baptism creates, confessed back: one body, one Spirit, one hope of your calling.",
    ),
  ],
  "Ephesians 5:18": [
    c(
      "Acts 4:31",
      "parallel",
      "What the command looks like when it happens: they were all filled with the Holy Spirit, and spoke the word of God with boldness.",
    ),
    c(
      "Colossians 3:16",
      "parallel",
      "The twin command: let the word of Christ dwell in you richly; Spirit-filling and Word-dwelling sing the same songs.",
    ),
  ],
  "Acts 4:31": [
    c(
      "Acts 2:4",
      "parallel",
      "Pentecost repeated for a praying church: all filled, all speaking the word of God with boldness.",
    ),
    c(
      "Ephesians 6:19-20",
      "theme",
      "Paul asks prayer for the same filling: utterance and boldness to make known the mystery of the Good News.",
    ),
  ],
  "Galatians 3:27": [
    c(
      "Romans 6:3-4",
      "parallel",
      "Baptized into his death and raised with him: the burial and the clothing are one union with Christ.",
    ),
    c(
      "1 Corinthians 12:13",
      "parallel",
      "The same baptism from the body's side: in one Spirit we were all baptized into one body.",
    ),
  ],
  "Philippians 2:6-8": [
    c(
      "2 Corinthians 8:9",
      "parallel",
      "The self-emptying in one sentence: though he was rich, yet for your sakes he became poor.",
    ),
    c(
      "Isaiah 53:7",
      "fulfilled",
      "He didn't open his mouth: the Lamb led to the slaughter is the servant's obedience unto death.",
    ),
  ],
  "1 John 4:9-10": [
    c(
      "John 3:16",
      "parallel",
      "The same gift John saw firsthand: God has sent his one and only Son into the world that we might live through him.",
    ),
    c(
      "Romans 5:8",
      "parallel",
      "Paul says it as demonstration, John as definition: God commends his love in Christ dying for us while we were yet sinners.",
    ),
  ],
  "Revelation 5:5-6": [
    c(
      "Genesis 49:9-10",
      "fulfilled",
      "Judah is a lion's cub: Jacob's blessing finds its Lion, and he has overcome.",
    ),
    c(
      "John 1:29",
      "contrast",
      "The Lion the elder announces appears as a Lamb: John had already met Him as the Lamb of God, who takes away the sin of the world.",
    ),
    c(
      "Isaiah 53:7",
      "parallel",
      "The throne's victory belongs to the victim: a lamb led to the slaughter, who didn't open his mouth.",
    ),
  ],
  "Genesis 49:10": [
    c(
      "Revelation 5:5",
      "quotes",
      "John hears the blessing fulfilled: the Lion who is of the tribe of Judah, the Root of David, has overcome.",
    ),
    c(
      "Numbers 24:17",
      "parallel",
      "Balaam saw the same scepter: a star will come out of Jacob, a scepter will rise out of Israel.",
    ),
    c(
      "Revelation 22:16",
      "fulfilled",
      "The scepter's end and source meet in one person: I am the root and the offspring of David.",
    ),
  ],
  "Revelation 22:16": [
    c(
      "Isaiah 11:1",
      "fulfilled",
      "Root and offspring at once: a shoot out of the stock of Jesse grows from the root that is also His.",
    ),
    c(
      "Numbers 24:17",
      "fulfilled",
      "The Bright and Morning Star: the star out of Jacob rises at last and names Himself.",
    ),
  ],
  "Romans 1:3": [
    c(
      "2 Samuel 7:12-16",
      "fulfilled",
      "The throne promise to David's seed: I will establish his kingdom, now born of the seed of David according to the flesh.",
    ),
    c(
      "Matthew 1:1",
      "parallel",
      "Matthew's first verse says the same: the book of the genealogy of Jesus Christ, the son of David.",
    ),
  ],
  "Romans 8:15-16": [
    c(
      "Galatians 4:6-7",
      "parallel",
      "Two letters, one cry: God sent out the Spirit of his Son into your hearts, crying, Abba, Father.",
    ),
    c(
      "John 1:12",
      "theme",
      "The right to become God's children given to all who received Him, sealed by the Spirit of adoption.",
    ),
  ],
  "Galatians 4:6-7": [
    c(
      "Romans 8:15-16",
      "parallel",
      "The same adoption from the other letter: you received the Spirit of adoption, by whom we cry, Abba! Father!",
    ),
    c(
      "John 1:12",
      "theme",
      "Believing gave the right to become children; adoption gives the Spirit who makes the relationship a cry.",
    ),
  ],
  "1 John 4:11": [
    c(
      "John 13:34-35",
      "parallel",
      "The new commandment is John's logic: if God loved us in this way, we also ought to love one another.",
    ),
    c(
      "1 John 4:19-21",
      "theme",
      "We love him, because he first loved us: love for the brother is how love for God is seen.",
    ),
  ],
  "John 18:36": [
    c(
      "1 John 2:15-17",
      "theme",
      "My Kingdom is not of this world: the world passes away, so its love cannot be kingdom love.",
    ),
    c(
      "Colossians 1:13",
      "contrast",
      "Kingdoms of this world take people by force; the Father translated us into the Kingdom of the Son of his love.",
    ),
  ],
  "1 John 2:15-17": [
    c(
      "James 4:4",
      "parallel",
      "John's warning sharpened: friendship with the world is hostility toward God.",
    ),
    c(
      "Matthew 6:19-21",
      "parallel",
      "The passing world cannot hold the heart: where your treasure is, there your heart will be also.",
    ),
  ],
  "Colossians 1:13": [
    c(
      "John 18:36",
      "contrast",
      "The Kingdom not of this world is still a Kingdom you enter: delivered out of the power of darkness, translated into the Son's.",
    ),
    c(
      "Ephesians 2:19",
      "parallel",
      "Translation becomes citizenship: no longer strangers and foreigners, but fellow citizens with the saints.",
    ),
  ],
  "Matthew 6:33": [
    c(
      "Luke 12:31",
      "parallel",
      "Luke preserves the same words from another day: seek God's Kingdom, and all these things will be added to you.",
    ),
    c(
      "Matthew 6:19-21",
      "theme",
      "Seeking first means treasuring first: the Kingdom commands where the heart lives.",
    ),
  ],
  "1 Peter 4:10": [
    c(
      "1 Corinthians 12:7",
      "parallel",
      "The manifestation given to each for the profit of all is the gift each must employ in serving one another.",
    ),
    c(
      "Romans 12:6-8",
      "parallel",
      "The same stewardship in other words: gifts differing according to the grace that was given to us.",
    ),
    c(
      "Matthew 25:21",
      "theme",
      "Good managers aim at the audit: well done, good and faithful servant.",
    ),
  ],
  "1 Corinthians 12:11": [
    c(
      "Romans 12:6-8",
      "parallel",
      "One Spirit, many gifts, all by grace: distributing to each one separately as he desires.",
    ),
    c(
      "1 Corinthians 12:7",
      "theme",
      "The distribution has a direction: the manifestation is for the profit of all.",
    ),
  ],
  "Matthew 25:21": [
    c(
      "Luke 19:17",
      "parallel",
      "The same commendation in the other parable: well done, you good servant, because you were found faithful with very little.",
    ),
    c(
      "1 Corinthians 4:2",
      "theme",
      "The parable's standard stated plainly: it is required of stewards that they be found faithful.",
    ),
  ],
  "Colossians 4:3-4": [
    c(
      "Ephesians 6:19-20",
      "parallel",
      "Paul asks Ephesus the same thing: utterance to open my mouth and make known the mystery with boldness.",
    ),
    c(
      "1 Corinthians 16:9",
      "parallel",
      "The open door is real and contested: a great and effective door has opened to me, and there are many adversaries.",
    ),
  ],
  "Acts 4:29-31": [
    c(
      "Ephesians 6:19-20",
      "parallel",
      "The church's prayer and Paul's request are one: words and boldness to speak the mystery of the Good News.",
    ),
    c(
      "Acts 12:24",
      "theme",
      "The prayed-for boldness compounds over decades: the word of God grew and multiplied.",
    ),
  ],
  "2 Thessalonians 3:1": [
    c(
      "Acts 12:24",
      "parallel",
      "What running swiftly looks like in history: the word of God grew and multiplied.",
    ),
    c(
      "Colossians 4:3-4",
      "parallel",
      "One apostolic prayer list: open doors for the word, and boldness to speak it.",
    ),
  ],
  "Matthew 9:38": [
    c(
      "Luke 10:2",
      "parallel",
      "The same command on another mission: the harvest is plentiful, the laborers few, so pray to the Lord of the harvest.",
    ),
    c(
      "John 4:35",
      "parallel",
      "Jesus already saw what prayer sends: the fields are white for harvest already.",
    ),
  ],

  // ------------------------------------------------------------------
  // God's chosen people: from Sinai to the church
  // ------------------------------------------------------------------
  "1 Peter 2:9-10": [
    c(
      "Exodus 19:5-6",
      "fulfilled",
      "Israel's calling becomes the church's: my own possession, a kingdom of priests, a holy nation, applied to those in Christ.",
    ),
    c(
      "Hosea 2:23",
      "fulfilled",
      "Hosea's mercy promise lands: I will tell those who were not my people, You are my people.",
    ),
  ],
  "Ephesians 2:14": [
    c(
      "Ephesians 2:19",
      "theme",
      "The wall broken means the strangers are now no longer foreigners, but fellow citizens and of the household of God.",
    ),
    c(
      "Galatians 3:28-29",
      "parallel",
      "The partition Paul demolished is the division he declared dissolved: neither Jew nor Greek, all one in Christ Jesus.",
    ),
  ],
  "Ephesians 3:6": [
    c(
      "Ephesians 2:19",
      "parallel",
      "Fellow citizens becomes fellow heirs: Gentiles are fellow heirs, members of the same body, and partakers of the promise.",
    ),
    c(
      "Galatians 3:28-29",
      "parallel",
      "One in Christ Jesus means Abraham's seed and heirs according to promise, Jew and Greek alike.",
    ),
  ],
  "Romans 11:17": [
    c(
      "Jeremiah 11:16",
      "quotes",
      "Israel was Yahweh's green olive tree, beautiful with goodly fruit; Paul pictures the same tree with branches broken off.",
    ),
    c(
      "Ephesians 3:6",
      "theme",
      "Grafted in among them: partaker of the root is Paul's image for fellow heir of the same promise.",
    ),
    c(
      "John 15:5",
      "contrast",
      "A graft lives by the vine or not at all: apart from me you can do nothing.",
    ),
  ],

  // ------------------------------------------------------------------
  // The story of Scripture: Eden, the throne, exile, and Esther
  // ------------------------------------------------------------------
  "Genesis 2:17": [
    c(
      "Genesis 3:4-5",
      "contrast",
      "God said the day they ate they would surely die; the serpent answered that they would not. The first doctrine ever denied was God's own warning.",
    ),
    c(
      "Romans 5:12",
      "theme",
      "Paul traces death's entrance into the world back to this one command and this one choice.",
    ),
    c(
      "James 1:13-14",
      "contrast",
      "God tempts no one. The boundary tested trust; the desire that followed was the couple's own.",
    ),
  ],
  "Genesis 3:15": [
    c(
      "Galatians 4:4",
      "fulfilled",
      "In the fullness of time God sent His Son, born of a woman: the offspring promised in the garden.",
    ),
    c(
      "Romans 16:20",
      "fulfilled",
      "The God of peace will crush Satan under the feet of His people, the same promise widened to the church.",
    ),
    c(
      "Hebrews 2:14",
      "fulfilled",
      "Through His own death He destroyed the one who had the power of death.",
    ),
    c(
      "Revelation 12:9",
      "fulfilled",
      "The ancient serpent is finally thrown down, the heel-bruise avenged.",
    ),
  ],
  "2 Samuel 7:16": [
    c(
      "Luke 1:32-33",
      "fulfilled",
      "The angel speaks this promise over Mary's son almost word for word: the throne of His father David, a kingdom without end.",
    ),
    c(
      "Psalms 89:34",
      "promise",
      "God swore not to break His covenant or alter what His lips had uttered, which is why the fallen crown could not be the last word.",
    ),
    c(
      "Matthew 1:1",
      "pattern",
      "Matthew opens his Gospel by naming Jesus the son of David, the heir of this throne.",
    ),
  ],
  "Jeremiah 31:33": [
    c(
      "Hebrews 8:10",
      "quotes",
      "Hebrews quotes this verse at length to prove the new covenant has already come in Christ.",
    ),
    c(
      "Ezekiel 36:26-27",
      "parallel",
      "The companion promise: a new heart, a new spirit, and God's own Spirit placed within.",
    ),
    c(
      "2 Corinthians 3:3",
      "fulfilled",
      "Believers are a letter written not on stone tablets but on hearts, by the Spirit of the living God.",
    ),
  ],
  "Habakkuk 2:3": [
    c(
      "Hebrews 10:37",
      "quotes",
      "Hebrews quotes this verse to urge endurance: the coming One will come and will not delay.",
    ),
    c(
      "Galatians 4:4",
      "fulfilled",
      "The appointed time arrived when God sent His Son, born under the law.",
    ),
    c(
      "2 Peter 3:9",
      "theme",
      "The Lord is not slow concerning His promise; His delay is patience, not forgetfulness.",
    ),
  ],
  "Psalms 27:14": [
    c(
      "Isaiah 40:31",
      "parallel",
      "Waiting on Yahweh is the very posture that renews strength, so that the weary run and do not faint.",
    ),
    c(
      "Lamentations 3:25",
      "parallel",
      "Yahweh is good to those who wait for Him, to the soul that seeks Him.",
    ),
    c(
      "Hebrews 10:36",
      "theme",
      "Endurance is what carries a believer from doing God's will to receiving the promise.",
    ),
  ],
  "Job 28:28": [
    c(
      "Proverbs 1:7",
      "parallel",
      "Proverbs states the same thesis from the other direction: the fear of Yahweh is where knowledge begins.",
    ),
    c(
      "Ecclesiastes 12:13",
      "parallel",
      "Ecclesiastes lands exactly where Job lands: fear God and keep His commandments.",
    ),
    c(
      "1 Corinthians 1:24",
      "fulfilled",
      "Christ is the wisdom of God, the fear of the Lord made visible in a person.",
    ),
  ],
  "Proverbs 1:7": [
    c(
      "Job 28:28",
      "parallel",
      "Job's poem reaches the same conclusion after searching the earth, the deep, and the grave.",
    ),
    c(
      "James 1:5",
      "theme",
      "If anyone lacks wisdom, the instruction is to ask God, who gives liberally and without reproach.",
    ),
    c(
      "1 Kings 3:9",
      "pattern",
      "Solomon asked for a listening heart rather than riches, and God gave him both.",
    ),
  ],
  "Ecclesiastes 1:2": [
    c(
      "Romans 8:20",
      "theme",
      "Creation was subjected to futility, yet in hope, which is why the vapor is not the whole story.",
    ),
    c(
      "Ecclesiastes 12:13",
      "theme",
      "The book answers its own complaint: fear God and keep His commandments.",
    ),
  ],
  "Daniel 1:8": [
    c(
      "Daniel 6:10",
      "parallel",
      "The same resolve decades later: he prayed as he had always done, even with the decree signed.",
    ),
    c(
      "Romans 12:2",
      "theme",
      "Refusing the world's shaping while serving faithfully inside it is the exile's double calling.",
    ),
    c(
      "1 Corinthians 10:31",
      "theme",
      "Even eating and drinking are to be done for the glory of God, which is why the king's table was not a small matter.",
    ),
  ],
  "Jeremiah 29:7": [
    c(
      "1 Peter 2:11-12",
      "theme",
      "Peter's exile ethic matches Jeremiah's: abstain from fleshly desires, and do good among the nations.",
    ),
    c(
      "Matthew 5:14",
      "theme",
      "A city set on a hill cannot be hidden, which is what God intends a scattered people to be.",
    ),
    c(
      "1 Timothy 2:1-2",
      "theme",
      "The church prays for kings and all in authority, seeking the same peace Jeremiah commanded the exiles to seek.",
    ),
  ],
  "1 Peter 2:11": [
    c(
      "Philippians 3:20",
      "parallel",
      "Citizenship in heaven is why the pilgrim posture makes sense.",
    ),
    c(
      "Hebrews 11:13",
      "parallel",
      "The faithful of the old covenant confessed the same thing: strangers and pilgrims on the earth.",
    ),
    c(
      "John 17:15",
      "theme",
      "Kept in the world rather than taken out of it, which is the tension every exile lives in.",
    ),
  ],
  "1 Peter 3:15": [
    c(
      "Matthew 5:16",
      "theme",
      "Let your light shine so that others see your good works and give glory to your Father.",
    ),
    c(
      "Colossians 4:6",
      "theme",
      "Speech seasoned with salt, so that you know how to answer each person.",
    ),
    c(
      "1 Peter 2:12",
      "theme",
      "Good conduct among the nations turns slander into glory to God on the day of visitation.",
    ),
  ],
  "Colossians 2:14": [
    c(
      "Ephesians 2:15-16",
      "parallel",
      "The law of commandments abolished in His flesh, making peace between Jew and Gentile.",
    ),
    c(
      "2 Corinthians 5:21",
      "theme",
      "God made the sinless One to be sin for us, which is how the record against us was cancelled.",
    ),
    c(
      "Esther 9:1",
      "pattern",
      "The decree against God's people reversed on the appointed day.",
    ),
  ],
  "Luke 22:20": [
    c(
      "Jeremiah 31:31",
      "fulfilled",
      "The new covenant Jeremiah promised, here sealed in blood rather than written on stone.",
    ),
    c(
      "Exodus 24:8",
      "pattern",
      "Moses sprinkled the blood of the covenant over the people at Sinai; now the covenant is ratified in Christ's own blood.",
    ),
    c(
      "Hebrews 9:15",
      "theme",
      "Mediator of a new covenant, so that a death has occurred for the redemption of transgressions.",
    ),
  ],
  "1 Corinthians 5:7": [
    c(
      "Exodus 12:13",
      "fulfilled",
      "The Passover blood that turned away judgment finds its substance in Christ.",
    ),
    c(
      "John 1:29",
      "fulfilled",
      "The Lamb of God who takes away the sin of the world.",
    ),
    c(
      "1 Peter 1:19",
      "theme",
      "Redeemed not with perishable things like silver or gold, but with the precious blood of a faultless lamb.",
    ),
  ],
  "Esther 3:13": [
    c(
      "Exodus 1:22",
      "parallel",
      "Pharaoh's decree to cast the sons into the river; the same enemy, a new empire, an older grudge.",
    ),
    c(
      "Exodus 17:16",
      "theme",
      "Yahweh swore war with Amalek from generation to generation, and Haman is the Agagite.",
    ),
    c(
      "Esther 9:1",
      "contrast",
      "The day appointed for slaughter becomes the day of reversal.",
    ),
  ],
  "Esther 4:16": [
    c(
      "John 10:11",
      "pattern",
      "The good shepherd lays down his life for the sheep.",
    ),
    c(
      "Hebrews 2:9",
      "fulfilled",
      "The greater Mediator did more than risk death; He tasted death for everyone.",
    ),
    c(
      "Exodus 32:32",
      "pattern",
      "Moses offered to be blotted out of God's book for the sake of a guilty people.",
    ),
  ],
  "Esther 9:22": [
    c(
      "Psalms 30:11",
      "theme",
      "Mourning turned into dancing, sackcloth exchanged for gladness: the same reversal sung in the psalms.",
    ),
    c(
      "Revelation 19:9",
      "theme",
      "The marriage supper of the Lamb, the final feast of reversal to which every rescued people is invited.",
    ),
    c(
      "Esther 3:13",
      "contrast",
      "The month appointed for destruction becomes a month of feasting and gifts to the needy.",
    ),
  ],
  "Deuteronomy 18:15": [
    c(
      "Acts 3:22",
      "fulfilled",
      "Peter applies this promise directly to Jesus and warns that refusing Him is refusing the prophet God sent.",
    ),
    c(
      "John 1:45",
      "fulfilled",
      "Philip announces the fulfillment: the one Moses and the prophets wrote about has been found.",
    ),
    c(
      "Hebrews 1:1-2",
      "fulfilled",
      "God, who spoke to the fathers by the prophets, has now spoken by His Son.",
    ),
  ],
  "Genesis 22:18": [
    c(
      "Galatians 3:16",
      "quotes",
      "Paul notices that the promise speaks of a singular seed, and says that seed is Christ.",
    ),
    c(
      "Acts 3:25",
      "quotes",
      "Peter tells the crowd they are heirs of the covenant God made with Abraham.",
    ),
    c(
      "Revelation 7:9",
      "fulfilled",
      "A multitude from every nation, the blessing finally reaching all the families of the earth.",
    ),
  ],
  "Genesis 12:3": [
    c(
      "Galatians 3:8",
      "quotes",
      "Paul says God announced the gospel in advance to Abraham in this very promise.",
    ),
    c(
      "Acts 3:25",
      "quotes",
      "Peter names the blessing of Abraham as the covenant now fulfilled in the risen Jesus.",
    ),
    c(
      "Psalms 72:17",
      "theme",
      "Men shall be blessed by him and all nations call him blessed: the same promise sung in the psalms.",
    ),
  ],

  // ------------------------------------------------------------------
  // Understanding hard passages: why God conceals, and how we read
  // ------------------------------------------------------------------
  "Proverbs 25:2": [
    c(
      "Deuteronomy 29:29",
      "theme",
      "Moses draws the same boundary between what God keeps secret and what He reveals for us to live by.",
    ),
    c(
      "Matthew 13:11",
      "theme",
      "Jesus applies the principle to His own teaching: the mysteries of the Kingdom are given to some and not to others.",
    ),
  ],
  "Deuteronomy 29:29": [
    c(
      "Proverbs 25:2",
      "theme",
      "The hidden things are God's glory and the searching is ours, so concealment is an invitation rather than a refusal.",
    ),
    c(
      "1 Peter 1:10-11",
      "theme",
      "Even the prophets who carried revelation did not understand its timing, but searched their own words diligently.",
    ),
  ],
  "Matthew 13:11": [
    c(
      "Isaiah 6:9-10",
      "quotes",
      "Jesus explains the parables with Isaiah's commission: a people who closed their own eyes cannot see.",
    ),
    c(
      "Daniel 12:9",
      "theme",
      "Understanding is sealed only until the time God appoints, so the veil is temporary and not a final verdict.",
    ),
    c(
      "Mark 4:33-34",
      "parallel",
      "Mark gives the same scene from the other side: the crowds received parables, and the disciples received the explanation.",
    ),
  ],
  "Mark 4:33-34": [
    c(
      "Matthew 13:11",
      "parallel",
      "Matthew records the reason Jesus gave for the parables; Mark records the private explanation He gave afterward.",
    ),
    c(
      "John 16:12",
      "theme",
      "Jesus measured His teaching to what His hearers could carry, and told them plainly that He was holding things back.",
    ),
  ],
  "John 16:12": [
    c(
      "John 16:25",
      "theme",
      "The same conversation promises an end to figures of speech, when He will speak plainly about the Father.",
    ),
    c(
      "Hebrews 5:14",
      "theme",
      "What is withheld is not withheld forever; maturity, exercised by use, is what opens the solid food.",
    ),
  ],
  "John 16:25": [
    c(
      "John 16:12",
      "theme",
      "The plainness Jesus promises answers the burden He said they could not yet bear.",
    ),
    c(
      "Mark 4:34",
      "theme",
      "Figures of speech in public and plainness in private is the same pattern Mark describes.",
    ),
  ],
  "Proverbs 2:4-5": [
    c(
      "Proverbs 25:2",
      "theme",
      "Wisdom is treated as hidden treasure, which is why God conceals it: what is dug for is valued.",
    ),
    c(
      "James 1:5",
      "theme",
      "The search is not left to our own cleverness; God gives wisdom liberally to the one who asks.",
    ),
  ],
  "1 Corinthians 2:10": [
    c(
      "John 16:13",
      "theme",
      "The Spirit who searches the deep things of God is the same Spirit Jesus promised would guide us into all truth.",
    ),
    c(
      "Daniel 12:9",
      "fulfilled",
      "What Daniel was told was sealed until the time of the end is now revealed to us by the Spirit.",
    ),
  ],
  "1 Corinthians 2:14": [
    c(
      "Luke 24:45",
      "theme",
      "Understanding Scripture is something God does in a reader, which is why the natural man cannot receive it.",
    ),
    c(
      "1 John 2:27",
      "theme",
      "The anointing that teaches is the same Spirit, so no reader is left to his own resources.",
    ),
  ],
  "Luke 24:45": [
    c(
      "Psalm 119:18",
      "parallel",
      "The psalmist prays for what Jesus gives: eyes opened to see wondrous things in the law.",
    ),
    c(
      "1 Corinthians 2:14",
      "theme",
      "Paul explains why opened minds are necessary: the things of God are spiritually discerned.",
    ),
  ],
  "1 Peter 1:10-11": [
    c(
      "Daniel 12:9",
      "theme",
      "The prophets searched what was sealed, which is why they inquired so carefully about the time.",
    ),
    c(
      "Hebrews 1:1-2",
      "theme",
      "God spoke in many portions and many ways before He spoke finally and plainly in His Son.",
    ),
  ],
  "Hebrews 5:14": [
    c(
      "1 Corinthians 2:6",
      "parallel",
      "Paul also reserves his wisdom teaching for the full grown, the same distinction Hebrews draws.",
    ),
    c(
      "John 16:12",
      "theme",
      "Growing up into solid food is the answer to the things Jesus said they could not yet bear.",
    ),
  ],
  "2 Peter 3:16": [
    c(
      "Acts 17:11",
      "contrast",
      "The Bereans searched the Scriptures daily to test what they heard; the ignorant and unsettled twist them instead.",
    ),
    c(
      "Acts 20:27",
      "theme",
      "Paul's answer to hard letters is the whole counsel of God, not a few favorite verses.",
    ),
  ],
  "1 Corinthians 13:12": [
    c(
      "Job 11:7",
      "theme",
      "Job is asked whether he can fathom the mystery of God, and the answer is the same as Paul's: not yet, but then.",
    ),
    c(
      "Romans 11:33",
      "theme",
      "Paul ends his hardest argument in doxology rather than a system, because God's judgments are past tracing out.",
    ),
  ],
  "1 John 5:7": [
    c(
      "Matthew 28:19",
      "parallel",
      "The three who testify in John's letter are the three named in one name at the Great Commission.",
    ),
    c(
      "2 Corinthians 13:14",
      "parallel",
      "The same three appear in the blessing, which is why the doctrine rests on the whole witness rather than one verse.",
    ),
  ],
  // ------------------------------------------------------------------
  // Verses the studies cite most: the threads that hold the graph together
  // ------------------------------------------------------------------
  "Romans 8:1": [
    c(
      "Romans 5:1",
      "parallel",
      "Justification by faith is the ground Paul stands on: peace with God is why there is now no condemnation for those in Christ.",
    ),
    c(
      "Zechariah 3:1-5",
      "pattern",
      "Joshua the high priest stands accused in filthy garments until the angel strips them off, a courtroom picture of condemnation removed by God alone.",
    ),
    c(
      "John 5:24",
      "theme",
      "Jesus says the one who hears and believes has eternal life and does not come into judgment but has passed out of death into life, the very verdict Paul declares.",
    ),
  ],
  "Acts 17:11": [
    c(
      "2 Timothy 3:16-17",
      "parallel",
      "The Bereans' daily search rests on what Scripture is for: God-breathed and profitable for teaching, reproof, correction, and training in righteousness.",
    ),
    c(
      "John 5:39",
      "theme",
      "Jesus tells His hearers that the Scriptures they search are the very writings that testify about Him, the test the Bereans applied.",
    ),
    c(
      "Isaiah 8:20",
      "theme",
      "Isaiah sends the same questioner back to the law and the testimony, the standard by which every claimed word is judged.",
    ),
  ],
  "Luke 24:27": [
    c(
      "Luke 24:44",
      "parallel",
      "Later the same day Jesus names the three divisions, the law of Moses, the prophets, and the psalms, as the writings that speak of Him.",
    ),
    c(
      "Genesis 3:15",
      "fulfilled",
      "The first promise in Scripture already points to the offspring who will bruise the serpent's head, one of the things concerning Himself that Jesus explained.",
    ),
    c(
      "Isaiah 53:5-6",
      "fulfilled",
      "The servant pierced for our transgressions and crushed for our iniquities is the center of the prophetic witness Jesus opened to them.",
    ),
  ],
  "John 6:37": [
    c(
      "John 10:28-29",
      "parallel",
      "Jesus says the same thing in the shepherd's voice: no one will snatch His sheep out of His hand or out of the Father's hand.",
    ),
    c(
      "Isaiah 42:1-3",
      "pattern",
      "The servant will not break a bruised reed or quench a dimly burning wick, the picture behind Jesus' promise never to throw out the one who comes.",
    ),
    c(
      "John 6:39",
      "theme",
      "The ones the Father gives Him are the ones He will raise up at the last day, so His welcome and His keeping are one work.",
    ),
  ],
  "James 4:7": [
    c(
      "1 Peter 5:8-9",
      "parallel",
      "Peter gives the same two moves, steadfast faith and resistance, against the devil who prowls looking for someone to devour.",
    ),
    c(
      "Ephesians 6:11",
      "theme",
      "Paul's whole armor exists for standing against the schemes of the devil, which is what submission to God makes possible.",
    ),
    c(
      "Matthew 4:10-11",
      "pattern",
      "Jesus answers the tempter from the word and the devil leaves Him, the pattern James promises to every believer who resists.",
    ),
  ],
  "Acts 1:8": [
    c(
      "Luke 24:48-49",
      "parallel",
      "Luke's Gospel ends with the same promise: the disciples are witnesses, and they are to wait until they are clothed with power from on high.",
    ),
    c(
      "Acts 2:1-4",
      "fulfilled",
      "At Pentecost the promise arrives in wind and fire, and the witness begins in Jerusalem exactly as Jesus said.",
    ),
    c(
      "Isaiah 43:10",
      "theme",
      "God's ancient words to Israel, that they are His witnesses, now pass to the disciples who carry the same testimony to the ends of the earth.",
    ),
  ],
  "James 1:5": [
    c(
      "Proverbs 2:3-6",
      "theme",
      "Proverbs promises that the one who calls out for discernment and searches for it will find the knowledge of God, for Yahweh gives wisdom.",
    ),
    c(
      "1 Kings 3:9-12",
      "pattern",
      "Solomon asks for an understanding heart and God gives what was asked and more, the generosity James appeals to.",
    ),
    c(
      "Matthew 7:7-8",
      "parallel",
      "Jesus makes asking the ordinary way the Father gives, which is why a lack of wisdom is an invitation to pray rather than to despair.",
    ),
  ],
  "2 Timothy 3:16-17": [
    c(
      "Hebrews 4:12",
      "parallel",
      "Hebrews describes the same word as living and active, sharper than any two-edged sword, discerning the thoughts and intentions of the heart.",
    ),
    c(
      "Psalm 119:105",
      "theme",
      "The psalmist calls the word a lamp to his feet, the practical shape of being equipped for every good work.",
    ),
    c(
      "Matthew 4:4",
      "pattern",
      "Jesus answers hunger in the wilderness with Scripture rather than argument, showing the sufficiency of every word that proceeds from the mouth of God.",
    ),
  ],
  "Acts 2:38": [
    c(
      "Ezekiel 36:25-27",
      "fulfilled",
      "The promised clean water, new heart, and Spirit within are what Peter announces as the gift received in baptism.",
    ),
    c(
      "Titus 3:5",
      "theme",
      "Paul names the same washing and renewal and traces them to mercy rather than to works of righteousness.",
    ),
    c(
      "Mark 1:15",
      "parallel",
      "Jesus begins His ministry with the same call: repent and believe the Good News, because the kingdom is at hand.",
    ),
  ],
  "2 Corinthians 12:9": [
    c(
      "Isaiah 40:29-31",
      "theme",
      "Isaiah promises that God gives power to the weak and increases strength for the one who has no might, which is Paul's boast.",
    ),
    c(
      "1 Corinthians 1:27-29",
      "parallel",
      "God chooses the weak and despised so that no flesh may boast, the same logic Paul applies to his own thorn.",
    ),
    c(
      "Hebrews 11:34",
      "theme",
      "The heroes of faith were made strong out of weakness, and Paul's paradox is that the power of Christ rests on him rather than replacing the weakness.",
    ),
  ],
  "John 5:39": [
    c(
      "Luke 24:27",
      "theme",
      "On the Emmaus road Jesus does what He says here, opening Moses and all the prophets and explaining the things concerning Himself.",
    ),
    c(
      "2 Timothy 3:15",
      "theme",
      "Paul tells Timothy that the sacred writings are able to make him wise to salvation through faith in Christ Jesus, the same testimony Jesus claims.",
    ),
    c(
      "Deuteronomy 18:15-18",
      "promise",
      "Moses promised a prophet like himself whom God would raise and whose words must be heard, one of the writings that testify of Jesus.",
    ),
  ],
  "Colossians 2:15": [
    c(
      "Genesis 3:15",
      "fulfilled",
      "The first promise already aimed at the serpent's head, and the cross is where that blow falls.",
    ),
    c(
      "Hebrews 2:14-15",
      "parallel",
      "Hebrews says He shared flesh and blood so that through death He might destroy the one who had the power of death.",
    ),
    c(
      "1 John 3:8",
      "theme",
      "The Son of God appeared for this purpose, to destroy the works of the devil, which is what the public triumph describes.",
    ),
  ],
  "1 John 4:4": [
    c(
      "1 John 5:4-5",
      "parallel",
      "John defines the victory as faith, the same faith that overcomes the world because of the One who is in the believer.",
    ),
    c(
      "2 Kings 6:16",
      "pattern",
      "Elisha tells his frightened servant that those with them are more than those with the enemy, and John locates that greater power in the Spirit who indwells the believer.",
    ),
    c(
      "Romans 8:31",
      "theme",
      "If God is for us, Paul asks, who can be against us, the same confidence John places in the indwelling Spirit.",
    ),
  ],
  "Genesis 1:27": [
    c(
      "Genesis 5:1-2",
      "parallel",
      "The generations of Adam restate it: God made man in His likeness, created them male and female, and blessed them.",
    ),
    c(
      "Genesis 9:6",
      "theme",
      "The sanctity of human life rests on this verse, for God made man in His own image.",
    ),
    c(
      "Colossians 3:10",
      "theme",
      "The new man is renewed in knowledge after the image of his Creator, so the image marred by sin is being restored in Christ.",
    ),
  ],
  "1 John 4:10": [
    c(
      "Romans 5:8",
      "parallel",
      "Paul says God commends His love in that while we were yet sinners Christ died for us, love that begins entirely on God's side.",
    ),
    c(
      "John 3:16",
      "theme",
      "The sending of the Son is the shape God's love takes in the Gospel's most familiar verse, and the initiative is His.",
    ),
    c(
      "Titus 3:4-5",
      "theme",
      "Paul says the kindness and love of God our Savior appeared, not by works of righteousness but according to His mercy.",
    ),
  ],
  "Hebrews 1:1-2": [
    c(
      "John 1:14",
      "parallel",
      "The Word who spoke through the prophets became flesh and lived among us, which is how God has now spoken in a Son.",
    ),
    c(
      "Numbers 12:6-8",
      "contrast",
      "God speaks to prophets in visions and dreams but with Moses mouth to mouth, and Hebrews announces a Son who surpasses even that intimacy.",
    ),
    c(
      "John 1:18",
      "theme",
      "No one has seen God at any time, but the one and only Son has declared Him, the final word Hebrews announces.",
    ),
  ],
  "Philippians 1:6": [
    c(
      "1 Thessalonians 5:23-24",
      "parallel",
      "Paul prays for the Thessalonians to be preserved complete and rests on the same certainty: the One who calls is faithful and will do it.",
    ),
    c(
      "Ephesians 1:13-14",
      "theme",
      "The Spirit is the guarantee of the inheritance until redemption, which is why the work begun cannot be left unfinished.",
    ),
    c(
      "Hebrews 12:2",
      "theme",
      "Jesus is the author and perfecter of faith, the One who both begins and completes what He starts in His people.",
    ),
  ],
  "1 John 4:1": [
    c(
      "Matthew 7:15-16",
      "parallel",
      "Jesus warns of false prophets in sheep's clothing and gives the same test John does: they are known by their fruits.",
    ),
    c(
      "Deuteronomy 13:1-3",
      "pattern",
      "Even a prophet whose sign comes true is to be rejected if he leads away from Yahweh, which is why every spirit must be tested.",
    ),
    c(
      "Acts 17:11",
      "theme",
      "The Bereans examined the Scriptures daily to see whether what they heard was so, the practice John commands.",
    ),
  ],
  "1 Timothy 2:5": [
    c(
      "Job 9:32-33",
      "pattern",
      "Job longs for an umpire between himself and God who could lay a hand on both, a longing answered in the man Christ Jesus.",
    ),
    c(
      "Hebrews 9:15",
      "theme",
      "Jesus is the mediator of a new covenant, whose death redeems the transgressions committed under the first.",
    ),
    c(
      "Acts 4:12",
      "theme",
      "Peter says there is salvation in no other name under heaven given among men, the exclusive claim of the one mediator.",
    ),
  ],
  "John 20:31": [
    c(
      "1 John 5:13",
      "parallel",
      "John says he wrote so that believers may know they have eternal life, the same purpose he states here.",
    ),
    c(
      "John 1:12",
      "theme",
      "To those who received Him He gave the right to become children of God, the life that is in His name.",
    ),
    c(
      "Luke 1:3-4",
      "parallel",
      "Luke writes so that Theophilus may know the certainty of the things he was taught, the same aim of a written witness.",
    ),
  ],
  "Romans 8:32": [
    c(
      "Genesis 22:12-14",
      "pattern",
      "Abraham does not withhold his only son and God provides the ram, a picture of the Father who did not spare His own Son.",
    ),
    c(
      "John 3:16",
      "theme",
      "The giving of the only Son is the measure of the love Paul reasons from, and the guarantee of every other gift.",
    ),
    c(
      "Hebrews 11:17-19",
      "pattern",
      "Abraham offered Isaac believing God could raise him from the dead, and Paul's argument rests on that same God.",
    ),
  ],
  "2 Corinthians 13:14": [
    c(
      "Matthew 28:19",
      "parallel",
      "The three named in the baptismal formula are the three named in the blessing, one name over one people.",
    ),
    c(
      "Ephesians 2:18",
      "theme",
      "Through Christ we both have access in one Spirit to the Father, which is the fellowship the blessing asks for.",
    ),
    c(
      "Numbers 6:24-26",
      "pattern",
      "The threefold Aaronic blessing asks Yahweh to bless, keep, and give peace, and the apostolic blessing fills that shape with the Father, Son, and Spirit.",
    ),
  ],
  "Ephesians 1:13-14": [
    c(
      "2 Corinthians 1:21-22",
      "parallel",
      "Paul says God sealed us and gave the Spirit in our hearts as a guarantee, the same pledge of what is to come.",
    ),
    c(
      "Romans 8:16",
      "theme",
      "The Spirit testifies with our spirit that we are children of God, which is the inward side of being sealed.",
    ),
    c(
      "Romans 8:23",
      "theme",
      "The Spirit is the first fruits, and those who have Him groan for the redemption of the body that the seal guarantees.",
    ),
  ],
  "Luke 15:20": [
    c(
      "Hosea 11:8",
      "pattern",
      "God's heart turns within Him and His compassion is aroused even as judgment looms, the prophet's version of a father running down the road.",
    ),
    c(
      "Micah 7:18-19",
      "theme",
      "Micah celebrates a God who delights in loving kindness and casts sins into the depths of the sea, the welcome the father gives.",
    ),
    c(
      "Isaiah 55:7",
      "theme",
      "Isaiah calls the wicked to return because God will abundantly pardon, which is what the father does before the son finishes his speech.",
    ),
  ],
  "John 20:29": [
    c(
      "1 Peter 1:8-9",
      "parallel",
      "Peter blesses those who have not seen Him and yet love and believe, receiving the outcome of their faith.",
    ),
    c(
      "2 Corinthians 5:7",
      "theme",
      "Paul states the rule Jesus blesses here: we walk by faith, not by sight.",
    ),
    c(
      "Hebrews 11:1",
      "theme",
      "Faith is the assurance of things hoped for and the conviction of things not seen, which is why the unseen believer is called blessed.",
    ),
  ],
  "Acts 2:23": [
    c(
      "Genesis 50:20",
      "pattern",
      "Joseph tells his brothers that they meant evil while God meant it for good, the earliest shape of the cross Peter preaches.",
    ),
    c(
      "Isaiah 53:10",
      "promise",
      "It pleased Yahweh to bruise the servant and make his soul an offering for sin, the determined counsel behind the crucifixion.",
    ),
    c(
      "Acts 4:27-28",
      "parallel",
      "The same church prays that Herod, Pilate, the Gentiles, and Israel did whatever God's hand and counsel foreordained to happen.",
    ),
  ],
  "Ephesians 6:18": [
    c(
      "1 Thessalonians 5:17",
      "parallel",
      "Paul gives the shortest form of the same command elsewhere: pray without ceasing.",
    ),
    c(
      "Luke 18:1",
      "theme",
      "Jesus tells a parable so that His disciples ought always to pray and not lose heart, the perseverance Paul asks for.",
    ),
    c(
      "Romans 8:26-27",
      "theme",
      "The Spirit helps our weakness and intercedes for us, which is what praying in the Spirit means when we do not know how to pray.",
    ),
  ],
  "Hebrews 4:12": [
    c(
      "Jeremiah 23:29",
      "theme",
      "Jeremiah hears God describe His word as fire and as a hammer that breaks the rock in pieces, the same piercing power.",
    ),
    c(
      "Ephesians 6:17",
      "theme",
      "Paul names the word of God as the sword of the Spirit, the one offensive piece in the whole armor.",
    ),
    c(
      "2 Timothy 3:16-17",
      "parallel",
      "Paul's charge rests on the same conviction: every Scripture is God-breathed and profitable for correction and training.",
    ),
  ],
  "1 Corinthians 11:26": [
    c(
      "Luke 22:19-20",
      "parallel",
      "At the table Jesus commands that the bread and cup be done in memory of Him, the new covenant in His blood.",
    ),
    c(
      "Exodus 12:14",
      "pattern",
      "Passover was kept as a memorial throughout every generation, the meal whose shape the Supper fulfills and reopens.",
    ),
    c(
      "Matthew 26:29",
      "promise",
      "Jesus will not drink the fruit of the vine again until He drinks it anew with His disciples in the Father's Kingdom.",
    ),
  ],
  "John 10:30": [
    c(
      "Deuteronomy 6:4",
      "theme",
      "The confession that Yahweh is one is the heart of Israel's faith, and Jesus places Himself and the Father inside that unity rather than beside it.",
    ),
    c(
      "John 14:9-11",
      "parallel",
      "Whoever has seen Jesus has seen the Father, for He is in the Father and the Father in Him.",
    ),
    c(
      "John 17:22",
      "theme",
      "Jesus asks that His people be one even as He and the Father are one, so that unity is both His identity and His gift.",
    ),
  ],
  "1 Corinthians 13:13": [
    c(
      "1 Corinthians 13:8",
      "parallel",
      "Paul has just said that prophecies, tongues, and knowledge pass away while love never fails, which is why it is the greatest.",
    ),
    c(
      "Colossians 3:14",
      "theme",
      "Paul calls love the bond of perfection, the thing that holds every other virtue together.",
    ),
    c(
      "1 Peter 4:8",
      "theme",
      "Peter sets love above all things because love covers a multitude of sins.",
    ),
  ],
  "Romans 5:1": [
    c(
      "Romans 3:24-26",
      "theme",
      "Paul has already shown the ground: justified freely by grace through the redemption in Christ Jesus, who is both just and the justifier.",
    ),
    c(
      "Romans 5:9-10",
      "parallel",
      "Justified by His blood and reconciled while we were enemies, much more will we be saved by His life.",
    ),
    c(
      "John 14:27",
      "theme",
      "The peace Jesus leaves with His disciples is not the peace the world gives, which is why it survives trouble.",
    ),
  ],
  "2 Corinthians 7:10": [
    c(
      "Psalm 51:17",
      "pattern",
      "David learns that the sacrifice God wants is a broken spirit and a contrite heart He will not despise.",
    ),
    c(
      "Proverbs 28:13",
      "theme",
      "Whoever conceals his sins does not prosper, but whoever confesses and renounces them finds mercy.",
    ),
    c(
      "Matthew 27:3-5",
      "contrast",
      "Judas felt remorse and still went to the priests and hanged himself, the sorrow of the world that works death rather than repentance.",
    ),
  ],
  "Galatians 4:6": [
    c(
      "Romans 8:15",
      "parallel",
      "Paul says the very same thing in Romans: the Spirit of adoption is the One by whom we cry Abba, Father.",
    ),
    c(
      "Mark 14:36",
      "pattern",
      "In Gethsemane Jesus prays Abba, Father, and the Spirit puts that same Son-shaped prayer on the lips of His people.",
    ),
    c(
      "Psalm 103:13",
      "theme",
      "As a father has compassion on his children, so Yahweh has compassion on those who fear Him.",
    ),
  ],
  "Matthew 4:4": [
    c(
      "Deuteronomy 8:3",
      "quotes",
      "Jesus answers the wilderness temptation with the wilderness text itself, where God taught Israel that man lives by every word from His mouth.",
    ),
    c(
      "John 6:35",
      "theme",
      "Jesus later names Himself the bread of life, the food the word supplies in the wilderness.",
    ),
    c(
      "Luke 4:4",
      "parallel",
      "Luke records the same answer in his account of the temptation, confirming the saying as Jesus' own reply.",
    ),
  ],
  "John 15:4-5": [
    c(
      "Psalm 1:3",
      "pattern",
      "The blessed man is like a tree planted by streams of water that yields its fruit in season, the image behind the vine and branches.",
    ),
    c(
      "Jeremiah 17:7-8",
      "pattern",
      "Jeremiah compares the one who trusts Yahweh to a tree planted by the waters that does not cease from yielding fruit.",
    ),
    c(
      "Galatians 5:22-23",
      "theme",
      "The fruit of the Spirit is love, joy, peace, and the rest, and fruit only grows on a branch that remains in the vine.",
    ),
  ],
  "Mark 1:15": [
    c(
      "Daniel 2:44",
      "promise",
      "Daniel foretold that the God of heaven would set up a kingdom that shall never be destroyed, the kingdom Jesus announces as at hand.",
    ),
    c(
      "Galatians 4:4-5",
      "theme",
      "When the fullness of time came God sent His Son, born under the law, to redeem those under the law.",
    ),
    c(
      "Isaiah 61:1-2",
      "fulfilled",
      "The anointed servant preaches good news to the humble and proclaims the year of Yahweh's favor, the program Jesus claims in Nazareth.",
    ),
  ],
  "2 Corinthians 1:3-4": [
    c(
      "Isaiah 40:1-2",
      "theme",
      "Comfort, comfort my people, says your God, the ancient command that shapes Paul's name for God here.",
    ),
    c(
      "Psalm 34:18",
      "theme",
      "Yahweh is near to those who have a broken heart and saves those who have a crushed spirit.",
    ),
    c(
      "2 Corinthians 1:5",
      "parallel",
      "As the sufferings of Christ abound toward us, so our comfort also abounds through Christ.",
    ),
  ],
  "Ephesians 1:11": [
    c(
      "Isaiah 46:9-10",
      "theme",
      "God declares the end from the beginning and says His counsel shall stand, the purpose Paul says works all things.",
    ),
    c(
      "Romans 8:28-30",
      "parallel",
      "All things work together for good for those called according to His purpose, whom He foreknew and predestined to be conformed to His Son.",
    ),
    c(
      "Ephesians 1:4-5",
      "parallel",
      "He chose us in Him before the foundation of the world and predestined us for adoption according to the good pleasure of His will.",
    ),
  ],
  "Romans 12:2": [
    c(
      "Ephesians 4:22-24",
      "parallel",
      "Put away the old man, be renewed in the spirit of your mind, and put on the new man created in righteousness and holiness of truth.",
    ),
    c(
      "2 Corinthians 3:18",
      "theme",
      "Beholding the glory of the Lord we are transformed into the same image from glory to glory, the renewal Paul commands here.",
    ),
    c(
      "Titus 3:5",
      "theme",
      "The renewing of the mind is the work of the Holy Spirit, given according to mercy rather than works.",
    ),
  ],
  "Romans 8:26-27": [
    c(
      "John 14:16-17",
      "theme",
      "Jesus promises another Counselor, the Spirit of truth, who will be with His people and in them, which is why He can pray within them.",
    ),
    c(
      "Ephesians 6:18",
      "theme",
      "Paul tells the church to pray at all times in the Spirit, the practice this intercession makes possible.",
    ),
    c(
      "Psalm 38:9",
      "pattern",
      "The psalmist says his groaning is not hidden from God, prayer that outruns words long before Paul names the Spirit's intercession.",
    ),
  ],
  "Romans 8:16": [
    c(
      "Galatians 4:6",
      "parallel",
      "God sent the Spirit of His Son into our hearts, crying Abba, Father, the same inward testimony of sonship.",
    ),
    c(
      "1 John 4:13",
      "theme",
      "We know that we remain in Him and He in us because He has given us of His Spirit.",
    ),
    c(
      "Ephesians 1:13-14",
      "theme",
      "The Spirit who testifies is also the seal and guarantee of the inheritance until redemption.",
    ),
  ],
  "Romans 8:15": [
    c(
      "Galatians 4:6",
      "parallel",
      "Paul says the same in Galatians: the Spirit of His Son in our hearts cries Abba, Father.",
    ),
    c(
      "Mark 14:36",
      "pattern",
      "The Spirit's cry is the prayer Jesus prayed in Gethsemane, making His own address to the Father the believer's.",
    ),
    c(
      "Romans 8:23",
      "theme",
      "Having the first fruits of the Spirit, we groan waiting for adoption, the redemption of the body.",
    ),
  ],
  "Hebrews 12:6": [
    c(
      "Proverbs 3:11-12",
      "quotes",
      "The appeal is drawn straight from the proverb: do not despise Yahweh's discipline, for whom He loves He reproves.",
    ),
    c(
      "Revelation 3:19",
      "parallel",
      "The risen Christ says the same to Laodicea: as many as I love, I reprove and chasten.",
    ),
    c(
      "Deuteronomy 8:5",
      "theme",
      "As a man disciplines his son, so Yahweh your God disciplines you, the fatherly pattern behind the chastening.",
    ),
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
