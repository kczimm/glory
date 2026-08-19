import type { Question } from "./types";

/**
 * The questions. Each answer is directly sourced from Scripture —
 * whole chapters to read, and study points grounded in specific verses.
 * The `raises` edges are the journey: Scripture itself provokes the
 * next question.
 */
export const questions: Question[] = [
  // ------------------------------------------------------------------
  // TRAIL: The Holy Spirit
  // ------------------------------------------------------------------
  {
    slug: "who-is-the-holy-spirit",
    question: "Who is the Holy Spirit?",
    category: "holy-spirit",
    summary:
      "The Holy Spirit is not an impersonal force — He is a Person, fully God, whom Jesus promised to send to dwell in His people, teach them, and bear witness to Him. The entire New Testament assumes that He is present and active in every believer.",
    passages: [
      {
        book: "John",
        chapter: 14,
        title: "The Helper is promised",
        lookFor: "Jesus speaks of sending \"another Helper\" — a Person who will dwell with you and be in you.",
        focus: "15-31",
      },
      {
        book: "John",
        chapter: 16,
        title: "The Spirit's work",
        lookFor: "Notice what the Spirit does: He convicts, guides, speaks, and glorifies Jesus.",
        focus: "5-15",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "The Spirit comes",
        lookFor: "The promised Spirit arrives — and Peter explains that this is the age of the Spirit.",
        focus: "1-21",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "Life in the Spirit",
        lookFor: "Paul's great chapter on living by the Spirit — He sets us free, leads us, prays for us.",
      },
    ],
    points: [
      {
        heading: "The Spirit is a Person, not a force",
        body:
          "Scripture speaks of the Spirit as someone who speaks, teaches, testifies, guides, and can be grieved. He is not an 'it' — Jesus calls Him 'the Helper' and uses personal pronouns. A force cannot be lied to; a Person can. This is why the Spirit is Someone to know, not something to use.",
        verses: ["John 14:26", "John 15:26", "John 16:13", "Ephesians 4:30", "Acts 13:2"],
      },
      {
        heading: "Jesus promised Him as 'another Helper'",
        body:
          "In the upper room, Jesus promised that the Father would send the Spirit of truth to dwell with His people — 'another' Helper, of the same kind as Jesus Himself. He even said it was to our advantage that He go away, because the Helper would come. The Spirit is the presence of Jesus with us now.",
        verses: ["John 14:16-17", "John 16:7"],
      },
      {
        heading: "His central work is to glorify Jesus",
        body:
          "The Spirit does not draw attention to Himself. He takes what belongs to Christ and declares it to us, and He bears witness to Jesus. Whenever the Spirit genuinely works, Jesus becomes more real and more glorious — never less.",
        verses: ["John 16:13-14", "John 15:26"],
      },
      {
        heading: "He dwells in every believer",
        body:
          "Paul writes that anyone who does not have the Spirit of Christ does not belong to Christ, and that our bodies are temples of the Holy Spirit. The Spirit is the seal and the deposit — God's guarantee that we belong to Him and that the inheritance is coming.",
        verses: ["Romans 8:9", "1 Corinthians 6:19", "Ephesians 1:13-14"],
      },
      {
        heading: "He transforms us from the inside",
        body:
          "The Spirit produces His fruit in our character — love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. He gives gifts for serving others, and when we don't know how to pray, He Himself intercedes for us with groanings too deep for words.",
        verses: ["Galatians 5:22-23", "1 Corinthians 12:4-11", "Romans 8:26-27"],
      },
    ],
    keyVerses: ["John 14:16-17", "John 16:13-14", "Romans 8:9", "1 Corinthians 6:19", "Galatians 5:22-23"],
    raises: ["is-the-holy-spirit-god", "how-do-i-receive-the-holy-spirit"],
    followsFrom: [],
    related: ["who-is-jesus"],
    planned: ["What are the gifts of the Spirit, and are they for today?"],
    order: 1,
  },

  {
    slug: "is-the-holy-spirit-god",
    question: "Is the Holy Spirit God?",
    category: "holy-spirit",
    summary:
      "Yes. The Bible treats the Holy Spirit as fully God: He is called God directly, shares the divine name, and possesses divine attributes and works. He is a distinct Person, but the same divine essence as the Father and the Son.",
    passages: [
      {
        book: "Acts",
        chapter: 5,
        title: "Lying to the Spirit is lying to God",
        lookFor: "Watch how Peter equates the Holy Spirit with God in the same breath.",
        focus: "1-11",
      },
      {
        book: "Matthew",
        chapter: 28,
        title: "One name, three Persons",
        lookFor: "Baptism is into the name of the Father, Son, and Holy Spirit — one name shared by three.",
        focus: "16-20",
      },
      {
        book: "1 Corinthians",
        chapter: 2,
        title: "The Spirit searches the deep things of God",
        lookFor: "Only God knows God's depths — and the Spirit searches them.",
        focus: "10-16",
      },
      {
        book: "Genesis",
        chapter: 1,
        title: "The Spirit at creation",
        lookFor: "The Spirit of God is present at the very beginning, hovering over creation.",
        focus: "1-3",
      },
    ],
    points: [
      {
        heading: "Scripture calls Him God directly",
        body:
          "When Ananias lied about the price of the land, Peter said: 'You have lied to the Holy Spirit… you have not lied to men, but to God.' The equation is explicit and unmistakable — to deceive the Holy Spirit is to deceive God.",
        verses: ["Acts 5:3-4"],
      },
      {
        heading: "He shares the divine name",
        body:
          "Jesus commanded baptism 'in the name of the Father and of the Son and of the Holy Spirit' — a single name shared by all three. Paul's benediction likewise places the grace of Christ, the love of God, and the fellowship of the Spirit side by side as the one source of every blessing.",
        verses: ["Matthew 28:19", "2 Corinthians 13:14"],
      },
      {
        heading: "He possesses divine attributes",
        body:
          "The Spirit is called 'the eternal Spirit'; the psalmist asks 'Where could I go from your Spirit?' — He is everywhere; and Paul says the Spirit searches all things, even the deep things of God, knowing the mind of God as only God can.",
        verses: ["Hebrews 9:14", "Psalm 139:7-10", "1 Corinthians 2:10-11"],
      },
      {
        heading: "He does divine works",
        body:
          "The Spirit hovered over creation, He gives new birth, and He will raise our mortal bodies. Regeneration — being born again — is His work, and the resurrection itself is attributed to Him. These are works only God can do.",
        verses: ["Genesis 1:2", "John 3:5-8", "Romans 8:11"],
      },
      {
        heading: "Yet He is distinct from the Father and the Son",
        body:
          "Being God does not mean being the Father or the Son. The Spirit is sent by the Father at the Son's request; He proceeds from the Father and testifies about the Son. He is a Person in eternal relationship — not a mode or a mask.",
        verses: ["John 14:16-17", "John 15:26", "Matthew 28:19"],
      },
    ],
    keyVerses: ["Acts 5:3-4", "Matthew 28:19", "1 Corinthians 2:10-11", "Hebrews 9:14"],
    raises: ["what-is-the-trinity"],
    followsFrom: ["who-is-the-holy-spirit"],
    related: ["is-jesus-really-god"],
    planned: ["How does the Spirit convict the world?"],
    order: 2,
  },

  {
    slug: "what-is-the-trinity",
    question: "What is the Trinity?",
    category: "holy-spirit",
    summary:
      "There is one God, who eternally exists as three Persons — Father, Son, and Holy Spirit — the same in essence, distinct in Person. Scripture does not give this as a philosophy; it shows it in the life of God revealed in Christ and in the work of salvation.",
    passages: [
      {
        book: "Matthew",
        chapter: 28,
        title: "Baptism into the one name",
        lookFor: "One name, three Persons — the church has confessed this since the beginning.",
        focus: "16-20",
      },
      {
        book: "John",
        chapter: 14,
        title: "Three Persons in relationship",
        lookFor: "The Son speaks to the Father about sending the Spirit. Watch the relationships.",
        focus: "15-31",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "The Son and the Father",
        lookFor: "The Father addresses the Son as God, and angels worship Him.",
        focus: "1-14",
      },
    ],
    points: [
      {
        heading: "There is one God",
        body:
          "Scripture is emphatic: 'Hear, Israel: the LORD our God, the LORD is one.' God declares, 'I am the LORD, and there is no other.' The Bible is fiercely monotheistic — there is one God, and nothing else is to be worshipped.",
        verses: ["Deuteronomy 6:4", "Isaiah 45:5", "Mark 12:29"],
      },
      {
        heading: "The Father, Son, and Spirit are each called God",
        body:
          "The Father is God; the Son is called God — 'In the beginning was the Word, and the Word was God,' and Thomas confesses Jesus as 'My Lord and my God'; and the Spirit is God, as Peter made plain to Ananias. Three Persons, each fully divine.",
        verses: ["John 1:1", "John 20:28", "Acts 5:3-4", "Hebrews 1:8"],
      },
      {
        heading: "Yet they are distinct Persons who relate to one another",
        body:
          "At Jesus' baptism, the Spirit descends upon the Son while the Father speaks from heaven — three Persons present at once. In the upper room, the Son asks the Father to send the Spirit. They love, send, glorify, and speak to one another.",
        verses: ["Matthew 3:16-17", "John 14:16-17", "John 17:1-5"],
      },
      {
        heading: "One name, three Persons",
        body:
          "The Great Commission puts it beyond dispute: baptize 'in the name' — singular — 'of the Father and of the Son and of the Holy Spirit.' The earliest confession of the church was already trinitarian, because that is how God revealed Himself.",
        verses: ["Matthew 28:19", "2 Corinthians 13:14"],
      },
      {
        heading: "The Trinity is the grammar of salvation",
        body:
          "The Father chose us and loved us before the foundation of the world; the Son redeemed us by His blood; the Spirit sealed us and dwells in us. Every blessing of salvation flows from the triune God — and we are invited into His fellowship.",
        verses: ["Ephesians 1:3-14", "2 Corinthians 13:14", "John 14:23"],
      },
    ],
    keyVerses: ["Matthew 28:19", "John 14:16-17", "2 Corinthians 13:14", "Hebrews 1:3"],
    raises: ["is-jesus-really-god"],
    followsFrom: ["is-the-holy-spirit-god", "is-jesus-really-god"],
    related: ["who-is-the-holy-spirit"],
    planned: ["Can we really understand the Trinity?", "How do I pray to God as Father, Son, and Spirit?"],
    order: 3,
  },

  {
    slug: "how-do-i-receive-the-holy-spirit",
    question: "How do I receive the Holy Spirit?",
    category: "holy-spirit",
    summary:
      "The Spirit is a gift — received through faith in Jesus Christ, not earned by works or by feelings. When you trust Christ, you are sealed with the promised Holy Spirit; and as you walk with Him, you are filled again and again.",
    passages: [
      {
        book: "Acts",
        chapter: 2,
        title: "Repent, be baptized, receive the gift",
        lookFor: "Peter's answer to the crowd — and the promise that it is 'for you and your children.'",
        focus: "37-41",
      },
      {
        book: "John",
        chapter: 7,
        title: "Rivers of living water",
        lookFor: "Jesus' invitation to the thirsty — John explains it is about the Spirit.",
        focus: "37-39",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "The Spirit of adoption",
        lookFor: "The Spirit makes us cry 'Abba, Father' — sons and daughters, not slaves.",
        focus: "14-17",
      },
    ],
    points: [
      {
        heading: "The Spirit is received through faith, not works",
        body:
          "Paul's question to the Galatians is the key: 'Did you receive the Spirit by the works of the law, or by hearing of faith?' The Spirit comes by believing the gospel — the same way salvation itself comes.",
        verses: ["Galatians 3:2", "Galatians 3:5", "Ephesians 1:13"],
      },
      {
        heading: "He is the gift promised to all who repent and believe",
        body:
          "Peter's answer to 'What must we do?' was: repent and be baptized in the name of Jesus Christ for the forgiveness of sins — 'and you will receive the gift of the Holy Spirit.' The promise is not for a select few; it is for everyone the Lord calls.",
        verses: ["Acts 2:38-39", "Acts 2:41"],
      },
      {
        heading: "He comes the moment we come to Christ",
        body:
          "Paul writes that having believed, you were sealed with the Holy Spirit of promise — the seal, the down payment of the inheritance. Jesus described the Spirit as rivers of living water flowing from within the believer.",
        verses: ["Ephesians 1:13-14", "John 7:37-39"],
      },
      {
        heading: "He makes us cry 'Abba, Father'",
        body:
          "The Spirit of adoption replaces the spirit of fear. Through Him we call God our Father with the intimate confidence of a child, and He Himself testifies with our spirit that we are God's children.",
        verses: ["Romans 8:14-16", "Romans 8:9"],
      },
      {
        heading: "We are filled as we walk with Him",
        body:
          "Receiving the Spirit is the beginning; being filled is the ongoing life. We are commanded to be filled with the Spirit — and to walk by Him, and not to grieve Him. The filling is not one dramatic moment, but a continual surrender.",
        verses: ["Ephesians 5:18", "Galatians 5:16", "Galatians 5:25", "Ephesians 4:30"],
      },
    ],
    keyVerses: ["Acts 2:38-39", "Ephesians 1:13-14", "Romans 8:15-16", "Galatians 3:2"],
    raises: [],
    followsFrom: ["who-is-the-holy-spirit"],
    related: ["who-is-the-holy-spirit", "how-can-i-be-saved"],
    planned: [
      "What are spiritual gifts, and how do they work?",
      "How do I know the Spirit is leading me?",
    ],
    order: 4,
  },

  // ------------------------------------------------------------------
  // TRAIL: Jesus Christ
  // ------------------------------------------------------------------
  {
    slug: "who-is-jesus",
    question: "Who is Jesus?",
    category: "jesus-christ",
    summary:
      "Jesus is the Christ, the Son of God — the promised Messiah of Israel, God become man, who came to seek and save the lost. Everything in the Bible converges on Him.",
    passages: [
      {
        book: "John",
        chapter: 1,
        title: "The Word became flesh",
        lookFor: "The opening of John's Gospel: the Word was God, and the Word became flesh.",
        focus: "1-18",
      },
      {
        book: "Philippians",
        chapter: 2,
        title: "He emptied Himself",
        lookFor: "Christ, being in the form of God, took the form of a servant — and was exalted above every name.",
        focus: "5-11",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "The Son, the radiance of God's glory",
        lookFor: "The Son is the heir of all things, the exact imprint of God's nature — superior to angels.",
        focus: "1-14",
      },
      {
        book: "John",
        chapter: 8,
        title: "Before Abraham was, I AM",
        lookFor: "Jesus claims the divine name — and the crowd understands exactly what He means.",
        focus: "48-59",
      },
    ],
    points: [
      {
        heading: "He is the Word made flesh",
        body:
          "John begins where Genesis begins: 'In the beginning was the Word, and the Word was with God, and the Word was God… And the Word became flesh and dwelt among us.' The eternal Word — God Himself — took on humanity. We beheld His glory.",
        verses: ["John 1:1", "John 1:14"],
      },
      {
        heading: "He is the Messiah the Scriptures promised",
        body:
          "The very first thing Andrew did was tell Peter, 'We have found the Messiah.' Philip said, 'We have found him of whom Moses and the prophets wrote.' The whole Old Testament — the Law, the Prophets, the Psalms — points to Him.",
        verses: ["John 1:41", "John 1:45"],
      },
      {
        heading: "He is Lord",
        body:
          "God has highly exalted Him and given Him the name above every name, so that every knee should bow and every tongue confess that Jesus Christ is Lord. The confession of the church, from the beginning, has been 'Jesus is Lord.'",
        verses: ["Philippians 2:9-11", "Romans 10:9", "Acts 2:36"],
      },
      {
        heading: "He is fully human",
        body:
          "He was made in the likeness of men, born in the flesh, and in every respect tested as we are — yet without sin. He was hungry, weary, and wept. He is not a distant God; He is a brother who has walked our road.",
        verses: ["Philippians 2:7-8", "Hebrews 4:15", "John 1:14"],
      },
      {
        heading: "He came to seek and save the lost",
        body:
          "Jesus summed up His own mission: 'The Son of Man came not to be served, but to serve, and to give his life as a ransom for many.' He did not come to be admired — He came to rescue.",
        verses: ["Mark 10:45", "Luke 19:10"],
      },
    ],
    keyVerses: ["John 1:1", "John 1:14", "Philippians 2:9-11", "Hebrews 1:3", "Mark 10:45"],
    raises: ["is-jesus-really-god", "why-did-jesus-have-to-die", "what-does-it-mean-that-jesus-is-the-son-of-god"],
    followsFrom: [],
    related: ["who-is-the-holy-spirit"],
    planned: ["What does it mean that Jesus calls himself the Son of Man?"],
    order: 5,
  },

  {
    slug: "is-jesus-really-god",
    question: "Is Jesus really God?",
    category: "jesus-christ",
    summary:
      "Yes — in the plainest terms Scripture can manage. Jesus is called God outright, claims the divine name 'I AM,' does divine works, and receives the worship that belongs to God alone.",
    passages: [
      {
        book: "John",
        chapter: 8,
        title: "\"Before Abraham was, I AM\"",
        lookFor: "Jesus takes the covenant name of Exodus 3:14 as His own — and the crowd reaches for stones.",
        focus: "48-59",
      },
      {
        book: "Colossians",
        chapter: 2,
        title: "The fullness of deity dwells in Him",
        lookFor: "Paul's blunt statement: in Christ the whole fullness of deity dwells bodily.",
        focus: "8-15",
      },
      {
        book: "John",
        chapter: 20,
        title: "My Lord and my God",
        lookFor: "Thomas' confession — and notice that Jesus accepts the worship.",
        focus: "24-29",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "The Son addressed as God",
        lookFor: "The Father speaks to the Son: 'Your throne, O God, is forever.'",
        focus: "1-14",
      },
    ],
    points: [
      {
        heading: "He is called God outright",
        body:
          "John opens with 'the Word was God.' Thomas — a Jew who knew exactly what he was saying — called the risen Jesus 'My Lord and my God,' and Jesus received it. And in Hebrews, the Father Himself says to the Son, 'Your throne, O God, is forever and ever.'",
        verses: ["John 1:1", "John 20:28", "Hebrews 1:8"],
      },
      {
        heading: "He claimed the divine name: 'I AM'",
        body:
          "'Before Abraham was, I AM.' Not 'I was' — 'I AM,' the name God spoke from the burning bush in Exodus 3:14. The crowd understood perfectly; they picked up stones to kill Him for blasphemy. Jesus also said that unless you believe that He is, you will die in your sins.",
        verses: ["John 8:58", "John 8:24"],
      },
      {
        heading: "He does divine works",
        body:
          "All things were made through Him, and He upholds the universe by the word of His power. He forgave sins — which the scribes rightly said only God can do. Creation, forgiveness, and sustaining all things are works of God, and they are His.",
        verses: ["John 1:3", "Hebrews 1:3", "Mark 2:5-7"],
      },
      {
        heading: "He receives divine worship",
        body:
          "Angels are commanded to worship Him. The risen disciples worshiped Him. Every knee will bow and every tongue confess that He is Lord — worship that the Bible gives to God and to no one else, given freely to Jesus.",
        verses: ["Hebrews 1:6", "Matthew 28:17", "Philippians 2:10-11"],
      },
      {
        heading: "The fullness of deity dwells in Him",
        body:
          "Paul puts it beyond ambiguity: 'In him dwells all the fullness of the Godhead bodily.' And He is the radiance of God's glory and the exact imprint of God's nature. To see Jesus is to see God.",
        verses: ["Colossians 2:9", "Hebrews 1:3", "John 14:9"],
      },
    ],
    keyVerses: ["John 1:1", "John 8:58", "Colossians 2:9", "Hebrews 1:3", "John 20:28"],
    raises: ["why-did-jesus-have-to-die", "what-is-the-trinity"],
    followsFrom: ["who-is-jesus"],
    related: ["is-the-holy-spirit-god"],
    planned: ["Does Jesus sharing God's nature mean there are two Gods?"],
    order: 6,
  },

  {
    slug: "why-did-jesus-have-to-die",
    question: "Why did Jesus have to die?",
    category: "jesus-christ",
    summary:
      "Because of the holiness of God and the reality of our sin. We sinned against a holy God, and the just penalty is death. In love, God the Son took that penalty in our place — satisfying justice so that God can be both just and the justifier of those who believe.",
    passages: [
      {
        book: "Isaiah",
        chapter: 53,
        title: "The suffering Servant",
        lookFor: "Written 700 years before Christ — pierced for our transgressions, crushed for our iniquities.",
      },
      {
        book: "Romans",
        chapter: 3,
        title: "All have sinned — God justifies",
        lookFor: "The diagnosis, and the remedy: justification by grace through the redemption in Christ Jesus.",
        focus: "21-26",
      },
      {
        book: "Romans",
        chapter: 5,
        title: "While we were sinners, Christ died",
        lookFor: "God shows His love for us in this: Christ died for us while we were still enemies.",
        focus: "6-11",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "God made Him to be sin for us",
        lookFor: "The great exchange: the sinless One became sin for us, that we might become God's righteousness.",
        focus: "17-21",
      },
      {
        book: "Mark",
        chapter: 10,
        title: "A ransom for many",
        lookFor: "Jesus' own words about why He came — to serve and to give His life.",
        focus: "35-45",
      },
    ],
    points: [
      {
        heading: "The problem: we have all sinned against a holy God",
        body:
          "Scripture's diagnosis is total: 'All have sinned and fall short of the glory of God.' Isaiah says it like a confession: 'All we like sheep have gone astray; each of us has turned to his own way.' The problem is not that God is too strict — it is that we have actually rebelled against Him.",
        verses: ["Romans 3:23", "Isaiah 53:6"],
      },
      {
        heading: "The penalty: death — separation from God",
        body:
          "The wages of sin is death. Not merely physical death, but spiritual separation from the God who is the source of all life. 'It is appointed for men to die once, and after this, judgment.' Someone must answer for what we have done.",
        verses: ["Romans 6:23", "Hebrews 9:27"],
      },
      {
        heading: "The love: God Himself acted",
        body:
          "This is the scandal of the gospel — we did not climb to God; He came down to us. 'God commends his own love toward us, in that while we were yet sinners, Christ died for us.' While we were still enemies, He loved us.",
        verses: ["Romans 5:8", "John 3:16", "1 John 4:10"],
      },
      {
        heading: "The substitution: Christ took our place",
        body:
          "The heart of the cross is exchange. He was pierced for our transgressions and crushed for our iniquities; the LORD laid on Him the iniquity of us all. He Himself bore our sins in His body on the tree. God made Him who knew no sin to be sin for us. He died the death we owed, in our place.",
        verses: ["Isaiah 53:5-6", "1 Peter 2:24", "2 Corinthians 5:21", "Mark 10:45"],
      },
      {
        heading: "The result: God is just, and the justifier",
        body:
          "On the cross, God set forth Christ as an atoning sacrifice — 'so that he might himself be righteous, and the righteousness of him who has faith in Jesus.' Justice is not suspended; it is satisfied. The penalty is paid, the righteousness is given, and the love is proven.",
        verses: ["Romans 3:24-26", "Romans 5:9", "Hebrews 9:27-28"],
      },
    ],
    keyVerses: ["Romans 3:23", "Romans 5:8", "Isaiah 53:5-6", "2 Corinthians 5:21", "Mark 10:45"],
    raises: ["how-can-i-be-saved", "did-jesus-rise-from-the-dead"],
    followsFrom: ["who-is-jesus", "is-jesus-really-god"],
    related: [],
    planned: ["What happened between the cross and the resurrection?"],
    order: 7,
  },

  {
    slug: "how-can-i-be-saved",
    question: "How can I be saved?",
    category: "jesus-christ",
    summary:
      "By grace through faith — not by works, but by trusting in Christ alone, confessing Him as Lord, and receiving His righteousness. Salvation is a gift; faith is the open hand that receives it.",
    passages: [
      {
        book: "Ephesians",
        chapter: 2,
        title: "Saved by grace through faith",
        lookFor: "The clearest sentence in the Bible about how salvation happens — and what it is not.",
        focus: "1-10",
      },
      {
        book: "Romans",
        chapter: 10,
        title: "Confess and believe",
        lookFor: "The word is near you: confess Jesus is Lord, believe God raised Him, and you will be saved.",
        focus: "8-17",
      },
      {
        book: "John",
        chapter: 3,
        title: "Born again",
        lookFor: "Nicodemus comes by night — and Jesus tells him salvation is a new birth from above.",
        focus: "1-21",
      },
      {
        book: "Acts",
        chapter: 16,
        title: "The jailer's question",
        lookFor: "'What must I do to be saved?' — and the apostolic answer.",
        focus: "25-34",
      },
    ],
    points: [
      {
        heading: "It is a gift, not wages",
        body:
          "By grace you have been saved through faith — and this is not of yourselves; it is the gift of God, not of works, so that no one can boast. Eternal life is 'the gift of God in Christ Jesus our Lord.' If it could be earned, it would be a wage; the gospel says it is a gift.",
        verses: ["Ephesians 2:8-9", "Romans 6:23", "Titus 3:5"],
      },
      {
        heading: "It is through faith in Christ alone",
        body:
          "Salvation is not found in a system or a church or a set of works — it is a Person. 'I am the way, the truth, and the life. No one comes to the Father except through me.' 'There is no other name under heaven given among men by which we must be saved.'",
        verses: ["John 14:6", "Acts 4:12", "1 Timothy 2:5"],
      },
      {
        heading: "Faith is trust — not mere agreement",
        body:
          "Even demons believe God exists; they shudder. Saving faith is not intellectual assent — it is the trust of the whole heart. 'Whoever believes in him should not perish, but have eternal life.' Believe, and the life is already yours.",
        verses: ["John 3:16", "Acts 16:31", "John 6:47"],
      },
      {
        heading: "It begins with repentance — turning to God",
        body:
          "The gospel call is to repent and believe. 'Repent therefore, and turn again, that your sins may be blotted out.' Repentance is not earning forgiveness; it is turning from sin to the Savior who forgives. Jesus began His preaching the same way: 'Repent, and believe in the gospel.'",
        verses: ["Acts 3:19", "Mark 1:15", "Acts 20:21"],
      },
      {
        heading: "It is sealed, secure, and knowable",
        body:
          "When you believe, you are sealed with the Holy Spirit — God's guarantee. Nothing can separate you from the love of God in Christ Jesus. And John writes that these things were written 'that you may know that you have eternal life.' Assurance is not arrogance; it is faith in a promise.",
        verses: ["Ephesians 1:13-14", "Romans 8:38-39", "1 John 5:11-13", "John 10:27-28"],
      },
    ],
    keyVerses: ["Ephesians 2:8-9", "Romans 10:9-10", "John 14:6", "Romans 8:38-39", "1 John 5:11-13"],
    raises: ["what-does-it-mean-to-be-born-again", "can-i-lose-my-salvation", "what-happens-when-i-sin"],
    followsFrom: ["why-did-jesus-have-to-die", "did-jesus-rise-from-the-dead"],
    related: ["how-do-i-receive-the-holy-spirit", "who-is-the-holy-spirit"],
    planned: ["What should I do now that I'm saved?"],
    order: 8,
  },

  // ------------------------------------------------------------------
  // TRAIL: Jesus Christ (continued) / Our Walk with Him
  // ------------------------------------------------------------------
  {
    slug: "did-jesus-rise-from-the-dead",
    question: "Did Jesus really rise from the dead?",
    category: "jesus-christ",
    summary:
      "Yes — the resurrection is the best-attested event of the ancient world and the hinge of the Christian faith. If Christ did not rise, our faith is futile; because He did, death is defeated and we have a living hope.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 15,
        title: "The earliest account",
        lookFor: "Paul lists the witnesses — many still alive and checkable when he wrote.",
        focus: "1-20",
      },
      {
        book: "Luke",
        chapter: 24,
        title: "The empty tomb and the risen Lord",
        lookFor: "He is not here — He has risen, and He appears bodily, not as a ghost.",
        focus: "1-43",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "Peter's first sermon",
        lookFor: "The resurrection is the proof — 'God raised him up, having freed him from the agony of death.'",
        focus: "22-36",
      },
      {
        book: "John",
        chapter: 20,
        title: "Thomas believes",
        lookFor: "The risen Jesus offers His wounds — and Thomas worships Him as Lord and God.",
        focus: "24-29",
      },
    ],
    points: [
      {
        heading: "A historical claim with checkable witnesses",
        body:
          "This is not myth. Paul delivers what he 'received' — Christ died for our sins, was buried, and rose the third day according to the Scriptures, and appeared to Peter, then the twelve, then more than five hundred brothers at once, then James, then Paul. Most of those witnesses were still alive when he wrote and could be questioned.",
        verses: ["1 Corinthians 15:3-8"],
      },
      {
        heading: "The tomb was empty",
        body:
          "The women found the stone rolled away and the tomb empty; the grave clothes were left behind. The angel's words are the heart of it: 'He is not here, for he has risen, just like he said.' No one has ever produced His body — because there was none to produce.",
        verses: ["Luke 24:1-6", "Matthew 28:6", "John 20:6-7"],
      },
      {
        heading: "He appeared bodily, not as a ghost",
        body:
          "Jesus insisted He was not a spirit: 'See my hands and my feet, that it is truly me. Touch me and see, for a spirit does not have flesh and bones, as you see that I have.' He even ate in their presence and invited Thomas to touch His wounds. The resurrection was a bodily, physical event.",
        verses: ["Luke 24:39-43", "John 20:27"],
      },
      {
        heading: "The resurrection vindicates who He is",
        body:
          "Paul writes that Jesus was 'declared to be the Son of God with power… by the resurrection from the dead.' Peter tells the crowd that God has made Him both Lord and Christ — and raised Him as public proof. The resurrection is God's own verdict on Jesus.",
        verses: ["Romans 1:4", "Acts 2:32-36", "Acts 17:31"],
      },
      {
        heading: "It means death is defeated for us",
        body:
          "Christ is the firstfruits of the resurrection — and because He rose, those who belong to Him will rise too. The Spirit who raised Jesus will give life to our mortal bodies, and we are born again to a living hope through His resurrection. His victory is ours.",
        verses: ["1 Corinthians 15:20-22", "Romans 8:11", "1 Peter 1:3"],
      },
    ],
    keyVerses: ["1 Corinthians 15:3-8", "1 Corinthians 15:20", "Luke 24:39", "Romans 8:11"],
    raises: ["how-can-i-be-saved"],
    followsFrom: ["why-did-jesus-have-to-die"],
    related: ["is-jesus-really-god"],
    planned: ["What happened between the cross and the resurrection?", "Where is Jesus now?"],
    order: 9,
  },

  {
    slug: "what-does-it-mean-that-jesus-is-the-son-of-god",
    question: "What does it mean that Jesus is the Son of God?",
    category: "jesus-christ",
    summary:
      "When Scripture calls Jesus the Son of God, it is not saying He is a created being or 'less than' God — it is declaring His full divinity and His perfect relationship with the Father. He is the eternal Son, of one nature with the Father.",
    passages: [
      {
        book: "John",
        chapter: 5,
        title: "Equal with the Father",
        lookFor: "Jesus explains His relationship to the Father — and the Jews understand it as a claim to equality.",
        focus: "16-23",
      },
      {
        book: "John",
        chapter: 10,
        title: "I and the Father are one",
        lookFor: "Jesus' own words — and the crowd's reaction: they reach for stones.",
        focus: "22-39",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "The Son, greater than angels",
        lookFor: "The Father calls Him 'Son' and addresses Him as God.",
      },
    ],
    points: [
      {
        heading: "'Son' speaks of nature, not of being made",
        body:
          "In Scripture, sonship describes likeness of nature and relationship. The Son is 'the radiance of God's glory and the exact imprint of his nature.' The word speaks of who He eternally is in relation to the Father — not of a point when He began to exist.",
        verses: ["Hebrews 1:3", "Hebrews 1:5"],
      },
      {
        heading: "Everyone understood it as a claim to equality",
        body:
          "When Jesus called God His own Father, 'the Jews sought all the more to kill him, because he not only broke the Sabbath, but also called God his own Father, making himself equal with God.' They knew exactly what sonship meant — He was claiming to be God.",
        verses: ["John 5:17-18", "John 10:33"],
      },
      {
        heading: "The Son does the Father's own works",
        body:
          "As the Father raises the dead and gives life, so the Son gives life to whom He will. All judgment has been given to the Son, 'that all may honor the Son even as they honor the Father.' These are not the works of a servant doing another's bidding — they are the works of God.",
        verses: ["John 5:19", "John 5:21-23"],
      },
      {
        heading: "He is one with the Father",
        body:
          "Jesus said plainly, 'I and the Father are one.' The crowd immediately understood: 'because you, being a man, make yourself God.' The Son is not one god among many — He and the Father are one in being, distinct in Person.",
        verses: ["John 10:30", "John 10:33"],
      },
      {
        heading: "Why it matters for salvation",
        body:
          "Our life is in the Son: 'He who has the Son has life.' And because the Son is God, He is fully able to save. The Father's love is measured by this — He 'did not spare his own Son, but delivered him up for us all.' A lesser Christ could not bear a whole world's sin; the Son of God can.",
        verses: ["1 John 5:11-12", "Romans 8:32", "John 3:16"],
      },
    ],
    keyVerses: ["John 5:18", "John 10:30", "Hebrews 1:3", "John 5:21"],
    raises: ["is-jesus-really-god"],
    followsFrom: ["who-is-jesus"],
    related: ["who-is-the-holy-spirit"],
    planned: ["Why did Jesus also call himself the Son of Man?"],
    order: 10,
  },

  {
    slug: "what-does-it-mean-to-be-born-again",
    question: "What does it mean to be born again?",
    category: "our-walk",
    summary:
      "To be born again is to receive new spiritual life from God through faith in Christ — a second birth, not of the flesh but of the Spirit, which makes you a child of God and a new creation. It is the doorway of the entire Christian life.",
    passages: [
      {
        book: "John",
        chapter: 3,
        title: "Nicodemus comes by night",
        lookFor: "Jesus' great teaching: 'Unless one is born again, he cannot see the kingdom of God.'",
        focus: "1-16",
      },
      {
        book: "1 Peter",
        chapter: 1,
        title: "Born again to a living hope",
        lookFor: "The new birth — by the resurrection of Christ, through the living and abiding word of God.",
        focus: "3-9",
      },
      {
        book: "Titus",
        chapter: 3,
        title: "The washing of regeneration",
        lookFor: "God saved us by mercy — the renewal of the Holy Spirit.",
        focus: "3-7",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "A new creation",
        lookFor: "If anyone is in Christ — a new creation; the old has passed away.",
        focus: "16-21",
      },
    ],
    points: [
      {
        heading: "It is a second birth",
        body:
          "Nicodemus was a religious expert, and Jesus told him he still needed to be 'born again' — born of water and the Spirit, not of the flesh. Flesh gives birth to flesh; the Spirit gives birth to spirit. The new birth is not self-improvement; it is a new beginning from above.",
        verses: ["John 3:3", "John 3:5-8"],
      },
      {
        heading: "It is God's work, not ours",
        body:
          "We become children of God 'not of blood, nor of the will of the flesh, nor of the will of man, but of God.' It is God who saves us 'by his mercy, through the washing of regeneration and renewing of the Holy Spirit.' We cannot birth ourselves; we receive the birth He gives.",
        verses: ["John 1:12-13", "Titus 3:5", "Ephesians 2:8-9"],
      },
      {
        heading: "It makes us a new creation",
        body:
          "'If anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.' The new birth is not a fresh coat of paint on the old life — it is a new life, the life of Christ in you.",
        verses: ["2 Corinthians 5:17", "Galatians 6:15"],
      },
      {
        heading: "It gives a living hope",
        body:
          "We are 'born again to a living hope through the resurrection of Jesus Christ from the dead,' and 'born again, not of corruptible seed, but of incorruptible, through the living and abiding word of God.' The life you are born to can't die.",
        verses: ["1 Peter 1:3", "1 Peter 1:23"],
      },
      {
        heading: "How do you receive it? By believing the gospel",
        body:
          "The new birth comes as you trust what God says about His Son. Having believed, you are sealed with the Spirit — and the Spirit Himself testifies with your spirit that you are God's child. It is a gift to receive, not an achievement to earn.",
        verses: ["John 3:16", "Ephesians 1:13", "Romans 8:15-16"],
      },
    ],
    keyVerses: ["John 3:3", "John 1:12-13", "2 Corinthians 5:17", "1 Peter 1:3"],
    raises: ["how-do-i-receive-the-holy-spirit", "what-happens-when-i-sin"],
    followsFrom: [],
    related: ["how-can-i-be-saved"],
    planned: ["What is the difference between being born again and being baptized?", "What does the new life look like day to day?"],
    order: 11,
  },

  {
    slug: "can-i-lose-my-salvation",
    question: "Can I lose my salvation?",
    category: "our-walk",
    summary:
      "No. Salvation is the work of God — secured by Christ, sealed by the Spirit, and kept by His power. Those who truly belong to Him cannot be snatched from His hand. Scripture's warnings against falling away call us to persevere in real faith, not to doubt God's ability to keep His own.",
    passages: [
      {
        book: "John",
        chapter: 10,
        title: "No one can snatch them from my hand",
        lookFor: "The Shepherd's promise of eternal security.",
        focus: "22-30",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "Nothing can separate us",
        lookFor: "Paul's resounding conclusion of assurance.",
        focus: "31-39",
      },
      {
        book: "Philippians",
        chapter: 1,
        title: "He who began will complete it",
        lookFor: "The certainty of the God who finishes what He starts.",
        focus: "3-6",
      },
    ],
    points: [
      {
        heading: "The Shepherd holds His sheep",
        body:
          "Jesus said His sheep hear His voice, He knows them, they follow Him, and He gives them eternal life — 'and they will never perish, and no one will snatch them out of my hand.' The Father who gave them is greater than all, and no one can snatch them out of the Father's hand either.",
        verses: ["John 10:27-29"],
      },
      {
        heading: "Nothing can separate us from His love",
        body:
          "Paul lists the worst that could be named — tribulation, distress, persecution, famine, nakedness, peril, sword, even death itself — and asks: 'Who will separate us from Christ's love?' His answer is a trumpet: neither death nor life, nor anything in all creation, can separate us from the love of God in Christ Jesus our Lord.",
        verses: ["Romans 8:35-39"],
      },
      {
        heading: "He who began the work will finish it",
        body:
          "'He who began a good work in you will complete it until the day of Jesus Christ.' Jesus said of those the Father gives Him: 'I will lose none of them, but raise them up at the last day,' and 'whoever comes to me I will in no way throw out.' Your keeping rests on His faithfulness, not your grip.",
        verses: ["Philippians 1:6", "John 6:37-39"],
      },
      {
        heading: "The warnings are real — and they call us to abide",
        body:
          "Scripture warns solemnly against falling away (Hebrews 6:4-6), and those warnings are meant to keep us clinging to Christ — genuine faith perseveres. John explains that those who left 'were not of us; for if they had been of us, they would have continued with us.' Real children keep abiding.",
        verses: ["Hebrews 6:4-6", "1 John 2:19", "John 15:4-5"],
      },
      {
        heading: "Assurance is the Spirit's witness, not our record",
        body:
          "John wrote his first letter 'that you may know that you have eternal life' — certainty, not guesswork. The Holy Spirit witnesses with our spirit that we are God's children. The question is not 'Am I good enough to keep it?' but 'Have I truly trusted the One who is strong enough to keep me?'",
        verses: ["1 John 5:11-13", "Romans 8:15-16", "1 John 2:19"],
      },
    ],
    keyVerses: ["John 10:27-29", "Romans 8:38-39", "Philippians 1:6", "John 6:37-39"],
    raises: [],
    followsFrom: ["how-can-i-be-saved"],
    related: ["what-happens-when-i-sin", "who-is-the-holy-spirit"],
    planned: ["What is faith, exactly?", "How do I know the Spirit's witness from my own feelings?"],
    order: 12,
  },

  {
    slug: "what-happens-when-i-sin",
    question: "What happens when I sin after I've come to Christ?",
    category: "our-walk",
    summary:
      "When a believer sins, their salvation is not undone — Christ is their advocate with the Father. But the Spirit is grieved and fellowship is clouded. The remedy is confession: God is faithful to forgive and cleanse, and He grows us through our failures.",
    passages: [
      {
        book: "1 John",
        chapter: 1,
        title: "Walk in the light — confess",
        lookFor: "The honest realism that believers still sin — and the promise of cleansing.",
        focus: "5-10",
      },
      {
        book: "1 John",
        chapter: 2,
        title: "We have an advocate",
        lookFor: "If anyone sins — we have Jesus Christ the righteous, the propitiation for our sins.",
        focus: "1-2",
      },
      {
        book: "Hebrews",
        chapter: 4,
        title: "Approach the throne of grace",
        lookFor: "A High Priest who was tempted as we are — so we may come boldly for mercy.",
        focus: "14-16",
      },
      {
        book: "Psalm",
        chapter: 32,
        title: "The joy of forgiveness",
        lookFor: "David's confession and the blessedness of one whose transgression is forgiven.",
      },
    ],
    points: [
      {
        heading: "Honesty: believers still struggle",
        body:
          "'If we say that we have no sin, we deceive ourselves, and the truth is not in us.' Even Paul cried out over a war within: 'The good that I desire, I don't do; but the evil that I don't desire, that I practice.' A believer is not someone who never fails — but someone who refuses to make peace with failure.",
        verses: ["1 John 1:8", "Romans 7:19-24"],
      },
      {
        heading: "But you have an advocate",
        body:
          "The gospel does not leave you stranded in guilt. 'If anyone sins, we have an advocate with the Father, Jesus Christ the righteous. He is the propitiation for our sins.' Your standing before God rests on His finished work, not on your performance — and He is right now pleading for you.",
        verses: ["1 John 2:1-2", "Hebrews 7:25"],
      },
      {
        heading: "The path back is confession",
        body:
          "'If we confess our sins, he is faithful and righteous to forgive us our sins, and to cleanse us from all unrighteousness.' David learned it: 'I acknowledged my sin to you… and you forgave the iniquity of my sin.' Whoever conceals his sin does not prosper, but whoever confesses and forsakes it obtains mercy.",
        verses: ["1 John 1:9", "Psalm 32:5", "Proverbs 28:13"],
      },
      {
        heading: "Come boldly — not cowering",
        body:
          "We do not approach God on the strength of our clean record but on the faithfulness of our High Priest, who was tempted in every way as we are, yet without sin. Because of Him we can 'draw near with boldness to the throne of grace, that we may receive mercy and find grace to help in time of need.'",
        verses: ["Hebrews 4:15-16"],
      },
      {
        heading: "No condemnation for those in Christ",
        body:
          "'There is therefore now no condemnation for those who are in Christ Jesus.' The Spirit, not the accuser, is the one who convicts — and He convicts to restore, not to destroy. God even works our failures for our good, making His grace sufficient in our weakness.",
        verses: ["Romans 8:1", "Romans 8:26-27", "2 Corinthians 12:9"],
      },
    ],
    keyVerses: ["1 John 2:1-2", "1 John 1:9", "Hebrews 4:15-16", "Romans 8:1"],
    raises: [],
    followsFrom: ["how-can-i-be-saved", "what-does-it-mean-to-be-born-again"],
    related: ["can-i-lose-my-salvation"],
    planned: ["How do I fight sin in my life?", "Does God use our failures for our good?"],
    order: 13,
  },
];
