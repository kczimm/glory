import type { Question } from "./types";

/**
 * The questions. Each answer is directly sourced from Scripture:
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
      "The Holy Spirit is not an impersonal force: He is a Person, fully God, whom Jesus promised to send to dwell in His people, teach them, and bear witness to Him. The entire New Testament assumes that He is present and active in every believer.",
    passages: [
      {
        book: "John",
        chapter: 14,
        title: "The Helper is promised",
        lookFor: "Jesus speaks of sending \"another Helper\": a Person who will dwell with you and be in you.",
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
        lookFor: "The promised Spirit arrives, and Peter explains that this is the age of the Spirit.",
        focus: "1-21",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "Life in the Spirit",
        lookFor: "Paul's great chapter on living by the Spirit: He sets us free, leads us, prays for us.",
      },
    ],
    points: [
      {
        heading: "The Spirit is a Person, not a force",
        body:
          "Scripture speaks of the Spirit as someone who speaks, teaches, testifies, guides, and can be grieved. He is not an 'it': Jesus calls Him 'the Helper' and uses personal pronouns. A force cannot be lied to; a Person can. This is why the Spirit is Someone to know, not something to use.",
        verses: ["John 14:26", "John 15:26", "John 16:13", "Ephesians 4:30", "Acts 13:2"],
      },
      {
        heading: "Jesus promised Him as 'another Helper'",
        body:
          "In the upper room, Jesus promised that the Father would send the Spirit of truth to dwell with His people: 'another' Helper, of the same kind as Jesus Himself. He even said it was to our advantage that He go away, because the Helper would come. The Spirit is the presence of Jesus with us now.",
        verses: ["John 14:16-17", "John 16:7"],
      },
      {
        heading: "His central work is to glorify Jesus",
        body:
          "The Spirit does not draw attention to Himself. He takes what belongs to Christ and declares it to us, and He bears witness to Jesus. Whenever the Spirit genuinely works, Jesus becomes more real and more glorious, never less.",
        verses: ["John 16:13-14", "John 15:26"],
      },
      {
        heading: "He dwells in every believer",
        body:
          "Paul writes that anyone who does not have the Spirit of Christ does not belong to Christ, and that our bodies are temples of the Holy Spirit. The Spirit is the seal and the deposit: God's guarantee that we belong to Him and that the inheritance is coming.",
        verses: ["Romans 8:9", "1 Corinthians 6:19", "Ephesians 1:13-14"],
      },
      {
        heading: "He transforms us from the inside",
        body:
          "The Spirit produces His fruit in our character: love, joy, peace, patience, kindness, goodness, faith, gentleness, self-control. He gives gifts for serving others, and when we don't know how to pray, He Himself intercedes for us with groanings too deep for words.",
        verses: ["Galatians 5:22-23", "1 Corinthians 12:4-11", "Romans 8:26-27"],
      },
    ],
    keyVerses: ["John 14:16-17", "John 16:13-14", "Romans 8:9", "1 Corinthians 6:19", "Galatians 5:22-23"],
    raises: ["is-the-holy-spirit-god", "how-do-i-receive-the-holy-spirit", "why-jesus-calls-the-spirit-another-helper", "why-did-the-spirit-wait-until-pentecost"],
    followsFrom: ["who-is-the-father", "why-jesus-calls-the-spirit-another-helper"],
    related: ["who-is-jesus"],
    planned: [],
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
        lookFor: "Baptism is into the name of the Father, Son, and Holy Spirit: one name shared by three.",
        focus: "16-20",
      },
      {
        book: "1 Corinthians",
        chapter: 2,
        title: "The Spirit searches the deep things of God",
        lookFor: "Only God knows God's depths, and the Spirit searches them.",
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
          "When Ananias lied about the price of the land, Peter said: 'Why has Satan filled your heart to lie to the Holy Spirit… You haven't lied to men, but to God.' The equation is explicit and unmistakable: to deceive the Holy Spirit is to deceive God.",
        verses: ["Acts 5:3-4"],
      },
      {
        heading: "He shares the divine name",
        body:
          "Jesus commanded baptism 'in the name of the Father and of the Son and of the Holy Spirit': a single name shared by all three. Paul's benediction likewise places the grace of Christ, the love of God, and the fellowship of the Spirit side by side as the one source of every blessing.",
        verses: ["Matthew 28:19", "2 Corinthians 13:14"],
      },
      {
        heading: "He possesses divine attributes",
        body:
          "The Spirit is called 'the eternal Spirit'; the psalmist asks 'Where could I go from your Spirit?' He is everywhere; and Paul says the Spirit searches all things, even the deep things of God, knowing the mind of God as only God can.",
        verses: ["Hebrews 9:14", "Psalm 139:7-10", "1 Corinthians 2:10-11"],
      },
      {
        heading: "He does divine works",
        body:
          "The Spirit hovered over creation, He gives new birth, and He will raise our mortal bodies. Regeneration, being born again, is His work, and the resurrection itself is attributed to Him. These are works only God can do.",
        verses: ["Genesis 1:2", "John 3:5-8", "Romans 8:11"],
      },
      {
        heading: "Yet He is distinct from the Father and the Son",
        body:
          "Being God does not mean being the Father or the Son. The Spirit is sent by the Father at the Son's request; He proceeds from the Father and testifies about the Son. He is a Person in eternal relationship, not a mode or a mask.",
        verses: ["John 14:16-17", "John 15:26", "Matthew 28:19"],
      },
    ],
    keyVerses: ["Acts 5:3-4", "Matthew 28:19", "1 Corinthians 2:10-11", "Hebrews 9:14"],
    raises: ["what-is-the-trinity", "how-does-the-spirit-convict-the-world", "holy-spirit-in-the-old-testament", "what-is-the-fruit-of-the-spirit"],
    followsFrom: ["who-is-the-holy-spirit"],
    related: ["is-jesus-really-god"],
    planned: ["What is the difference between the fruit and the works of the flesh?"],
    order: 2,
  },

  {
    slug: "what-is-the-trinity",
    question: "What is the Trinity?",
    category: "holy-spirit",
    summary:
      "There is one God, who eternally exists as three Persons: Father, Son, and Holy Spirit, the same in essence, distinct in Person. Scripture does not give this as a philosophy; it shows it in the life of God revealed in Christ and in the work of salvation.",
    passages: [
      {
        book: "Matthew",
        chapter: 28,
        title: "Baptism into the one name",
        lookFor: "One name, three Persons: the church has confessed this since the beginning.",
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
          "Scripture is emphatic: 'Hear, Israel: Yahweh is our God. Yahweh is one.' God declares, 'I am Yahweh, and there is no one else.' The Bible is fiercely monotheistic: there is one God, and nothing else is to be worshipped.",
        verses: ["Deuteronomy 6:4", "Isaiah 45:5", "Mark 12:29"],
      },
      {
        heading: "The Father, Son, and Spirit are each called God",
        body:
          "The Father is God; the Son is called God: 'In the beginning was the Word, and the Word was with God, and the Word was God,' and Thomas confesses Jesus as 'My Lord and my God'; and the Spirit is God, as Peter made plain to Ananias. Three Persons, each fully divine.",
        verses: ["John 1:1", "John 20:28", "Acts 5:3-4", "Hebrews 1:8"],
      },
      {
        heading: "Yet they are distinct Persons who relate to one another",
        body:
          "At Jesus' baptism, the Spirit descends upon the Son while the Father speaks from heaven: three Persons present at once. In the upper room, the Son asks the Father to send the Spirit. They love, send, glorify, and speak to one another.",
        verses: ["Matthew 3:16-17", "John 14:16-17", "John 17:1-5"],
      },
      {
        heading: "One name, three Persons",
        body:
          "The Great Commission puts it beyond dispute: baptize 'in the name,' singular, 'of the Father and of the Son and of the Holy Spirit.' The earliest confession of the church was already trinitarian, because that is how God revealed Himself.",
        verses: ["Matthew 28:19", "2 Corinthians 13:14"],
      },
      {
        heading: "The Trinity is the grammar of salvation",
        body:
          "The Father chose us and loved us before the foundation of the world; the Son redeemed us by His blood; the Spirit sealed us and dwells in us. Every blessing of salvation flows from the triune God, and we are invited into His fellowship.",
        verses: ["Ephesians 1:3-14", "2 Corinthians 13:14", "John 14:23"],
      },
    ],
    keyVerses: ["Matthew 28:19", "John 14:16-17", "2 Corinthians 13:14", "Hebrews 1:3"],
    raises: ["is-jesus-really-god", "who-is-the-father", "can-we-understand-the-trinity", "how-do-the-persons-of-the-trinity-relate"],
    followsFrom: ["is-the-holy-spirit-god", "is-jesus-really-god"],
    related: ["who-is-the-holy-spirit", "who-is-the-father"],
    planned: [],
    order: 3,
  },

  {
    slug: "how-do-i-receive-the-holy-spirit",
    question: "How do I receive the Holy Spirit?",
    category: "holy-spirit",
    summary:
      "The Spirit is a gift, received through faith in Jesus Christ, not earned by works or by feelings. When you trust Christ, you are sealed with the promised Holy Spirit; and as you walk with Him, you are filled again and again.",
    passages: [
      {
        book: "Acts",
        chapter: 2,
        title: "Repent, be baptized, receive the gift",
        lookFor: "Peter's answer to the crowd, and the promise that is 'to you, and to your children.'",
        focus: "37-41",
      },
      {
        book: "John",
        chapter: 7,
        title: "Rivers of living water",
        lookFor: "Jesus' invitation to the thirsty: John explains it is about the Spirit.",
        focus: "37-39",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "The Spirit of adoption",
        lookFor: "The Spirit makes us cry 'Abba, Father': sons and daughters, not slaves.",
        focus: "14-17",
      },
    ],
    points: [
      {
        heading: "The Spirit is received through faith, not works",
        body:
          "Paul's question to the Galatians is the key: 'Did you receive the Spirit by the works of the law, or by hearing of faith?' The Spirit comes by believing the gospel, the same way salvation itself comes.",
        verses: ["Galatians 3:2", "Galatians 3:5", "Ephesians 1:13"],
      },
      {
        heading: "He is the gift promised to all who repent and believe",
        body:
          "Peter's answer to 'What must we do?' was: repent and be baptized in the name of Jesus Christ for the forgiveness of sins: 'and you will receive the gift of the Holy Spirit.' The promise is not for a select few; it is for everyone the Lord calls.",
        verses: ["Acts 2:38-39", "Acts 2:41"],
      },
      {
        heading: "He comes the moment we come to Christ",
        body:
          "Paul writes that having believed, you were sealed with the Holy Spirit of promise: the seal, the down payment of the inheritance. Jesus described the Spirit as rivers of living water flowing from within the believer.",
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
          "Receiving the Spirit is the beginning; being filled is the ongoing life. We are commanded to be filled with the Spirit, and to walk by Him, and not to grieve Him. The filling is not one dramatic moment, but a continual surrender.",
        verses: ["Ephesians 5:18", "Galatians 5:16", "Galatians 5:25", "Ephesians 4:30"],
      },
    ],
    keyVerses: ["Acts 2:38-39", "Ephesians 1:13-14", "Romans 8:15-16", "Galatians 3:2"],
    raises: ["what-are-spiritual-gifts", "how-do-i-know-the-spirit-is-leading-me", "what-does-it-mean-to-be-baptized-with-the-holy-spirit"],
    followsFrom: ["who-is-the-holy-spirit"],
    related: ["who-is-the-holy-spirit", "how-can-i-be-saved"],
    planned: ["What is the difference between the Spirit's baptism and His filling?"],
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
      "Jesus is the Christ, the Son of God: the promised Messiah of Israel, God become man, who came to seek and save the lost. Everything in the Bible converges on Him.",
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
        lookFor: "Christ, being in the form of God, took the form of a servant, and was exalted above every name.",
        focus: "5-11",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "The Son, the radiance of God's glory",
        lookFor: "The Son is the heir of all things, the exact imprint of God's nature, superior to angels.",
        focus: "1-14",
      },
      {
        book: "John",
        chapter: 8,
        title: "Before Abraham was, I AM",
        lookFor: "Jesus claims the divine name, and the crowd understands exactly what He means.",
        focus: "48-59",
      },
    ],
    points: [
      {
        heading: "He is the Word made flesh",
        body:
          "John begins where Genesis begins: 'In the beginning was the Word, and the Word was with God, and the Word was God… The Word became flesh, and lived among us.' The eternal Word, God Himself, took on humanity. We beheld His glory.",
        verses: ["John 1:1", "John 1:14"],
      },
      {
        heading: "He is the Messiah the Scriptures promised",
        body:
          "The very first thing Andrew did was tell Peter, 'We have found the Messiah.' Philip said, 'We have found him, of whom Moses in the law, and the prophets, wrote.' The whole Old Testament, the Law, the Prophets, the Psalms, points to Him.",
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
          "He was made in the likeness of men, born in the flesh, and in every respect tested as we are, yet without sin. He was hungry, weary, and wept. He is not a distant God; He is a brother who has walked our road.",
        verses: ["Philippians 2:7-8", "Hebrews 4:15", "John 1:14"],
      },
      {
        heading: "He came to seek and save the lost",
        body:
          "Jesus summed up His own mission: 'The Son of Man came not to be served, but to serve, and to give his life as a ransom for many.' He did not come to be admired; He came to rescue.",
        verses: ["Mark 10:45", "Luke 19:10"],
      },
    ],
    keyVerses: ["John 1:1", "John 1:14", "Philippians 2:9-11", "Hebrews 1:3", "Mark 10:45"],
    raises: ["is-jesus-really-god", "why-did-jesus-have-to-die", "what-does-it-mean-that-jesus-is-the-son-of-god", "why-did-jesus-call-himself-son-of-man", "what-did-jesus-teach-about-the-kingdom-of-god", "what-does-scripture-show-us-about-mary"],
    followsFrom: ["who-is-the-father"],
    related: ["who-is-the-holy-spirit"],
    planned: [],
    order: 5,
  },

  {
    slug: "is-jesus-really-god",
    question: "Is Jesus really God?",
    category: "jesus-christ",
    summary:
      "Yes, in the plainest terms Scripture can manage. Jesus is called God outright, claims the divine name 'I AM,' does divine works, and receives the worship that belongs to God alone.",
    passages: [
      {
        book: "John",
        chapter: 8,
        title: "\"Before Abraham came into existence, I AM\"",
        lookFor: "Jesus takes the covenant name of Exodus 3:14 as His own, and the crowd reaches for stones.",
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
        lookFor: "Thomas' confession, and notice that Jesus accepts the worship.",
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
          "John opens with 'the Word was God.' Thomas, a Jew who knew exactly what he was saying, called the risen Jesus 'My Lord and my God,' and Jesus received it. And in Hebrews, the Father Himself says to the Son, 'Your throne, O God, is forever and ever.'",
        verses: ["John 1:1", "John 20:28", "Hebrews 1:8"],
      },
      {
        heading: "He claimed the divine name: 'I AM'",
        body:
          "'Before Abraham came into existence, I AM.' Not 'I was' but 'I AM,' the name God spoke from the burning bush in Exodus 3:14. The crowd understood perfectly; they picked up stones to kill Him for blasphemy. Jesus also said that unless you believe that He is, you will die in your sins.",
        verses: ["John 8:58", "John 8:24"],
      },
      {
        heading: "He does divine works",
        body:
          "All things were made through Him, and He upholds the universe by the word of His power. He forgave sins, which the scribes rightly said only God can do. Creation, forgiveness, and sustaining all things are works of God, and they are His.",
        verses: ["John 1:3", "Hebrews 1:3", "Mark 2:5-7"],
      },
      {
        heading: "He receives divine worship",
        body:
          "Angels are commanded to worship Him. The risen disciples worshiped Him. Every knee will bow and every tongue confess that He is Lord, worship that the Bible gives to God and to no one else, given freely to Jesus.",
        verses: ["Hebrews 1:6", "Matthew 28:17", "Philippians 2:10-11"],
      },
      {
        heading: "The fullness of deity dwells in Him",
        body:
          "Paul puts it beyond ambiguity: 'In him all the fullness of the Godhead dwells bodily.' And He is the radiance of God's glory and the exact imprint of God's nature. To see Jesus is to see God.",
        verses: ["Colossians 2:9", "Hebrews 1:3", "John 14:9"],
      },
    ],
    keyVerses: ["John 1:1", "John 8:58", "Colossians 2:9", "Hebrews 1:3", "John 20:28"],
    raises: ["why-did-jesus-have-to-die", "what-is-the-trinity", "does-jesus-sharing-gods-nature-mean-two-gods", "why-did-god-become-a-man", "what-does-firstborn-mean"],
    followsFrom: ["who-is-jesus"],
    related: ["is-the-holy-spirit-god", "are-there-other-gods", "who-are-the-gods-of-psalm-82"],
    planned: ["How does Jesus' becoming man show us the Father's love?"],
    order: 6,
  },

  {
    slug: "why-did-jesus-have-to-die",
    question: "Why did Jesus have to die?",
    category: "jesus-christ",
    summary:
      "Because of the holiness of God and the reality of our sin. We sinned against a holy God, and the just penalty is death. In love, God the Son took that penalty in our place, satisfying justice so that God can be both just and the justifier of those who believe.",
    passages: [
      {
        book: "Isaiah",
        chapter: 53,
        title: "The suffering Servant",
        lookFor: "Written centuries before Christ: pierced for our transgressions, crushed for our iniquities.",
      },
      {
        book: "Romans",
        chapter: 3,
        title: "All have sinned; God justifies",
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
        lookFor: "Jesus' own words about why He came: to serve and to give His life.",
        focus: "35-45",
      },
    ],
    points: [
      {
        heading: "The problem: we have all sinned against a holy God",
        body:
          "Scripture's diagnosis is total: 'All have sinned and fall short of the glory of God.' Isaiah says it like a confession: 'All we like sheep have gone astray; everyone has turned to his own way.' The problem is not that God is too strict; it is that we have actually rebelled against Him.",
        verses: ["Romans 3:23", "Isaiah 53:6"],
      },
      {
        heading: "The penalty: death, separation from God",
        body:
          "The wages of sin is death. Not merely physical death, but spiritual separation from the God who is the source of all life. 'It is appointed for men to die once, and after this, judgment.' Someone must answer for what we have done.",
        verses: ["Romans 6:23", "Hebrews 9:27"],
      },
      {
        heading: "The love: God Himself acted",
        body:
          "This is the scandal of the gospel: we did not climb to God; He came down to us. 'God commends his own love toward us, in that while we were yet sinners, Christ died for us.' While we were still enemies, He loved us.",
        verses: ["Romans 5:8", "John 3:16", "1 John 4:10"],
      },
      {
        heading: "The substitution: Christ took our place",
        body:
          "The heart of the cross is exchange. He was pierced for our transgressions and crushed for our iniquities; Yahweh has laid on Him the iniquity of us all. He Himself bore our sins in His body on the tree. God made Him who knew no sin to be sin for us. He died the death we owed, in our place.",
        verses: ["Isaiah 53:5-6", "1 Peter 2:24", "2 Corinthians 5:21", "Mark 10:45"],
      },
      {
        heading: "The result: God is just, and the justifier",
        body:
          "On the cross, God set forth Christ as an atoning sacrifice: 'that he might himself be just, and the justifier of him who has faith in Jesus.' Justice is not suspended; it is satisfied. The penalty is paid, the righteousness is given, and the love is proven.",
        verses: ["Romans 3:24-26", "Romans 5:9", "Hebrews 9:27-28"],
      },
    ],
    keyVerses: ["Romans 3:23", "Romans 5:8", "Isaiah 53:5-6", "2 Corinthians 5:21", "Mark 10:45"],
    raises: ["how-can-i-be-saved", "did-jesus-rise-from-the-dead", "between-the-cross-and-the-resurrection", "what-does-the-creed-mean-by-he-descended-into-hell"],
    followsFrom: ["who-is-jesus", "is-jesus-really-god"],
    related: [],
    planned: [],
    order: 7,
  },

  {
    slug: "how-can-i-be-saved",
    question: "How can I be saved?",
    category: "jesus-christ",
    summary:
      "By grace through faith, not by works, but by trusting in Christ alone, confessing Him as Lord, and receiving His righteousness. Salvation is a gift; faith is the open hand that receives it.",
    passages: [
      {
        book: "Ephesians",
        chapter: 2,
        title: "Saved by grace through faith",
        lookFor: "The clearest sentence in the Bible about how salvation happens, and what it is not.",
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
        lookFor: "Nicodemus comes by night, and Jesus tells him salvation is a new birth from above.",
        focus: "1-21",
      },
      {
        book: "Acts",
        chapter: 16,
        title: "The jailer's question",
        lookFor: "'What must I do to be saved?' and the apostolic answer.",
        focus: "25-34",
      },
    ],
    points: [
      {
        heading: "It is a gift, not wages",
        body:
          "By grace you have been saved through faith, and this is not of yourselves; it is the gift of God, not of works, so that no one can boast. Eternal life is 'the free gift of God… eternal life in Christ Jesus our Lord.' If it could be earned, it would be a wage; the gospel says it is a gift.",
        verses: ["Ephesians 2:8-9", "Romans 6:23", "Titus 3:5"],
      },
      {
        heading: "It is through faith in Christ alone",
        body:
          "Salvation is not found in a system or a church or a set of works; it is a Person. 'I am the way, the truth, and the life. No one comes to the Father except through me.' 'Neither is there any other name under heaven… by which we must be saved.'",
        verses: ["John 14:6", "Acts 4:12", "1 Timothy 2:5"],
      },
      {
        heading: "Faith is trust, not mere agreement",
        body:
          "Even demons believe God exists; they shudder. Saving faith is not intellectual assent; it is the trust of the whole heart. 'Whoever believes in him should not perish, but have eternal life.' Believe, and the life is already yours.",
        verses: ["John 3:16", "Acts 16:31", "John 6:47"],
      },
      {
        heading: "It begins with repentance: turning to God",
        body:
          "The gospel call is to repent and believe. 'Repent therefore, and turn again, that your sins may be blotted out.' Repentance is not earning forgiveness; it is turning from sin to the Savior who forgives. Jesus began His preaching the same way: 'Repent, and believe in the Good News.'",
        verses: ["Acts 3:19", "Mark 1:15", "Acts 20:21"],
      },
      {
        heading: "It is sealed, secure, and knowable",
        body:
          "When you believe, you are sealed with the Holy Spirit, God's guarantee. Nothing can separate you from the love of God in Christ Jesus. And John writes that these things were written 'that you may know that you have eternal life.' Assurance is not arrogance; it is faith in a promise.",
        verses: ["Ephesians 1:13-14", "Romans 8:38-39", "1 John 5:11-13", "John 10:27-28"],
      },
    ],
    keyVerses: ["Ephesians 2:8-9", "Romans 10:9-10", "John 14:6", "Romans 8:38-39", "1 John 5:11-13"],
    raises: ["what-does-it-mean-to-be-born-again", "can-i-lose-my-salvation", "what-happens-when-i-sin", "what-should-i-do-now-that-im-saved", "faith-or-works", "what-is-the-new-heart-that-god-promised", "how-is-the-new-covenant-different-from-the-old-one"],
    followsFrom: ["why-did-jesus-have-to-die", "did-jesus-rise-from-the-dead"],
    related: ["how-do-i-receive-the-holy-spirit", "who-is-the-holy-spirit"],
    planned: [],
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
      "Yes, the resurrection is a historically attested event with multiple independent witnesses, and it is the hinge of the Christian faith. If Christ did not rise, our faith is futile; because He did, death is defeated and we have a living hope.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 15,
        title: "The earliest account",
        lookFor: "Paul lists the witnesses, many still alive and checkable when he wrote.",
        focus: "1-20",
      },
      {
        book: "Luke",
        chapter: 24,
        title: "The empty tomb and the risen Lord",
        lookFor: "He is not here; He has risen, and He appears bodily, not as a ghost.",
        focus: "1-43",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "Peter's first sermon",
        lookFor: "The resurrection is the proof: Jesus is the one 'God raised up, having freed him from the agony of death.'",
        focus: "22-36",
      },
      {
        book: "John",
        chapter: 20,
        title: "Thomas believes",
        lookFor: "The risen Jesus offers His wounds, and Thomas worships Him as Lord and God.",
        focus: "24-29",
      },
    ],
    points: [
      {
        heading: "A historical claim with checkable witnesses",
        body:
          "This is not myth. Paul delivers what he 'received': Christ died for our sins, was buried, and rose the third day according to the Scriptures, and appeared to Peter, then the twelve, then more than five hundred brothers at once, then James, then Paul. Most of those witnesses were still alive when he wrote and could be questioned.",
        verses: ["1 Corinthians 15:3-8"],
      },
      {
        heading: "The tomb was empty",
        body:
          "The women found the stone rolled away and the tomb empty; the grave clothes were left behind. The angel's words are the heart of it: 'He is not here, for he has risen, just like he said.' No one has ever produced His body, because there was none to produce.",
        verses: ["Luke 24:1-6", "Matthew 28:6", "John 20:6-7"],
      },
      {
        heading: "He appeared bodily, not as a ghost",
        body:
          "Jesus insisted He was not a spirit: 'See my hands and my feet, that it is truly me. Touch me and see, for a spirit doesn't have flesh and bones, as you see that I have.' He even ate in their presence and invited Thomas to touch His wounds. The resurrection was a bodily, physical event.",
        verses: ["Luke 24:39-43", "John 20:27"],
      },
      {
        heading: "The resurrection vindicates who He is",
        body:
          "Paul writes that Jesus was 'declared to be the Son of God with power… by the resurrection from the dead.' Peter tells the crowd that God has made Him both Lord and Christ, and raised Him as public proof. The resurrection is God's own verdict on Jesus.",
        verses: ["Romans 1:4", "Acts 2:32-36", "Acts 17:31"],
      },
      {
        heading: "It means death is defeated for us",
        body:
          "Christ is the firstfruits of the resurrection, and because He rose, those who belong to Him will rise too. The Spirit who raised Jesus will give life to our mortal bodies, and we are born again to a living hope through His resurrection. His victory is ours.",
        verses: ["1 Corinthians 15:20-22", "Romans 8:11", "1 Peter 1:3"],
      },
    ],
    keyVerses: ["1 Corinthians 15:3-8", "1 Corinthians 15:20", "Luke 24:39", "Romans 8:11"],
    raises: ["how-can-i-be-saved", "where-is-jesus-now", "between-the-cross-and-the-resurrection", "why-did-the-disciples-not-recognize-him-after-he-rose", "what-was-it-like-to-see-the-risen-jesus"],
    followsFrom: ["why-did-jesus-have-to-die"],
    related: ["is-jesus-really-god"],
    planned: [],
    order: 9,
  },

  {
    slug: "what-does-it-mean-that-jesus-is-the-son-of-god",
    question: "What does it mean that Jesus is the Son of God?",
    category: "jesus-christ",
    summary:
      "When Scripture calls Jesus the Son of God, it is not saying He is a created being or 'less than' God; it is declaring His full divinity and His perfect relationship with the Father. He is the eternal Son, of one nature with the Father.",
    passages: [
      {
        book: "John",
        chapter: 5,
        title: "Equal with the Father",
        lookFor: "Jesus explains His relationship to the Father, and the Jews understand it as a claim to equality.",
        focus: "16-23",
      },
      {
        book: "John",
        chapter: 10,
        title: "I and the Father are one",
        lookFor: "Jesus' own words, and the crowd's reaction: they reach for stones.",
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
          "In Scripture, sonship describes likeness of nature and relationship. The Son is 'the radiance of God's glory and the exact imprint of his nature.' The word speaks of who He eternally is in relation to the Father, not of a point when He began to exist.",
        verses: ["Hebrews 1:3", "Hebrews 1:5"],
      },
      {
        heading: "Everyone understood it as a claim to equality",
        body:
          "When Jesus called God His own Father, 'the Jews sought all the more to kill him, because he not only broke the Sabbath, but also called God his own Father, making himself equal with God.' They knew exactly what sonship meant: He was claiming to be God.",
        verses: ["John 5:17-18", "John 10:33"],
      },
      {
        heading: "The Son does the Father's own works",
        body:
          "As the Father raises the dead and gives life, so the Son gives life to whom He will. All judgment has been given to the Son, 'that all may honor the Son even as they honor the Father.' These are not the works of a servant doing another's bidding; they are the works of God.",
        verses: ["John 5:19", "John 5:21-23"],
      },
      {
        heading: "He is one with the Father",
        body:
          "Jesus said plainly, 'I and the Father are one.' The crowd immediately understood: 'because you, being a man, make yourself God.' The Son is not one god among many; He and the Father are one in being, distinct in Person.",
        verses: ["John 10:30", "John 10:33"],
      },
      {
        heading: "Why it matters for salvation",
        body:
          "Our life is in the Son: 'He who has the Son has the life.' And because the Son is God, He is fully able to save. The Father's love is measured by this: He who 'didn't spare his own Son, but delivered him up for us all.' A lesser Christ could not bear a whole world's sin; the Son of God can.",
        verses: ["1 John 5:11-12", "Romans 8:32", "John 3:16"],
      },
    ],
    keyVerses: ["John 5:18", "John 10:30", "Hebrews 1:3", "John 5:21"],
    raises: ["is-jesus-really-god", "why-is-jesus-both-son-of-god-and-son-of-man", "what-does-it-mean-that-jesus-is-the-son-of-david"],
    followsFrom: ["who-is-jesus"],
    related: ["who-is-the-holy-spirit"],
    planned: ["What does it mean that Jesus is the Lion of Judah?"],
    order: 10,
  },

  {
    slug: "what-does-it-mean-to-be-born-again",
    question: "What does it mean to be born again?",
    category: "our-walk",
    summary:
      "To be born again is to receive new spiritual life from God through faith in Christ: a second birth, not of the flesh but of the Spirit, which makes you a child of God and a new creation. It is the doorway of the entire Christian life.",
    passages: [
      {
        book: "John",
        chapter: 3,
        title: "Nicodemus comes by night",
        lookFor: "Jesus' great teaching: 'Unless one is born anew, he can't see the Kingdom of God.'",
        focus: "1-16",
      },
      {
        book: "1 Peter",
        chapter: 1,
        title: "Born again to a living hope",
        lookFor: "The new birth: by the resurrection of Christ, through the living and abiding word of God.",
        focus: "3-9",
      },
      {
        book: "Titus",
        chapter: 3,
        title: "The washing of regeneration",
        lookFor: "God saved us by mercy: the renewal of the Holy Spirit.",
        focus: "3-7",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "A new creation",
        lookFor: "If anyone is in Christ, a new creation; the old has passed away.",
        focus: "16-21",
      },
    ],
    points: [
      {
        heading: "It is a second birth",
        body:
          "Nicodemus was a religious expert, and Jesus told him he still needed to be 'born again,' born of water and the Spirit, not of the flesh. Flesh gives birth to flesh; the Spirit gives birth to spirit. The new birth is not self-improvement; it is a new beginning from above.",
        verses: ["John 3:3", "John 3:5-8"],
      },
      {
        heading: "It is God's work, not ours",
        body:
          "We become children of God 'not of blood, nor of the will of the flesh, nor of the will of man, but of God.' It is God who saves us according to his mercy, 'through the washing of regeneration and renewing by the Holy Spirit.' We cannot birth ourselves; we receive the birth He gives.",
        verses: ["John 1:12-13", "Titus 3:5", "Ephesians 2:8-9"],
      },
      {
        heading: "It makes us a new creation",
        body:
          "'If anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.' The new birth is not a fresh coat of paint on the old life; it is a new life, the life of Christ in you.",
        verses: ["2 Corinthians 5:17", "Galatians 6:15"],
      },
      {
        heading: "It gives a living hope",
        body:
          "We are born again 'to a living hope through the resurrection of Jesus Christ from the dead,' and 'born again, not of corruptible seed, but of incorruptible, through the word of God, which lives and remains forever.' The life you are born to can't die.",
        verses: ["1 Peter 1:3", "1 Peter 1:23"],
      },
      {
        heading: "How do you receive it? By believing the gospel",
        body:
          "The new birth comes as you trust what God says about His Son. Having believed, you are sealed with the Spirit, and the Spirit Himself testifies with your spirit that you are God's child. It is a gift to receive, not an achievement to earn.",
        verses: ["John 3:16", "Ephesians 1:13", "Romans 8:15-16"],
      },
    ],
    keyVerses: ["John 3:3", "John 1:12-13", "2 Corinthians 5:17", "1 Peter 1:3"],
    raises: ["how-do-i-receive-the-holy-spirit", "what-happens-when-i-sin", "born-again-and-baptism", "what-the-new-life-looks-like", "what-does-it-mean-to-be-a-child-of-god"],
    followsFrom: ["how-can-i-be-saved", "what-is-faith"],
    related: ["how-can-i-be-saved"],
    planned: ["How does being a child of God change how I live?"],
    order: 11,
  },

  {
    slug: "can-i-lose-my-salvation",
    question: "Can I lose my salvation?",
    category: "our-walk",
    summary:
      "No. Salvation is the work of God: secured by Christ, sealed by the Spirit, and kept by His power. Those who truly belong to Him cannot be snatched from His hand. Scripture's warnings against falling away call us to persevere in real faith, not to doubt God's ability to keep His own.",
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
          "Jesus said His sheep hear His voice, He knows them, they follow Him, and He gives them eternal life: 'They will never perish, and no one will snatch them out of my hand.' The Father who gave them is greater than all, and no one can snatch them out of the Father's hand either.",
        verses: ["John 10:27-29"],
      },
      {
        heading: "Nothing can separate us from His love",
        body:
          "Paul lists the worst that could be named: tribulation, distress, persecution, famine, nakedness, peril, sword, even death itself, and asks: 'Who will separate us from Christ's love?' His answer is a trumpet: neither death nor life, nor anything in all creation, can separate us from the love of God in Christ Jesus our Lord.",
        verses: ["Romans 8:35-39"],
      },
      {
        heading: "He who began the work will finish it",
        body:
          "'He who began a good work in you will complete it until the day of Jesus Christ.' Jesus said of those the Father gives Him: 'I should lose nothing, but should raise him up at the last day,' and 'He who comes to me I will in no way throw out.' Your keeping rests on His faithfulness, not your grip.",
        verses: ["Philippians 1:6", "John 6:37-39"],
      },
      {
        heading: "The warnings are real, and they call us to abide",
        body:
          "Scripture warns solemnly against falling away (Hebrews 6:4-6), and those warnings are meant to keep us clinging to Christ; genuine faith perseveres. John explains that those who left 'didn't belong to us; for if they had belonged to us, they would have continued with us.' Real children keep abiding.",
        verses: ["Hebrews 6:4-6", "1 John 2:19", "John 15:4-5"],
      },
      {
        heading: "Assurance is the Spirit's witness, not our record",
        body:
          "John wrote his first letter 'that you may know that you have eternal life': certainty, not guesswork. The Holy Spirit witnesses with our spirit that we are God's children. The question is not 'Am I good enough to keep it?' but 'Have I truly trusted the One who is strong enough to keep me?'",
        verses: ["1 John 5:11-13", "Romans 8:15-16", "1 John 2:19"],
      },
    ],
    keyVerses: ["John 10:27-29", "Romans 8:38-39", "Philippians 1:6", "John 6:37-39"],
    raises: ["spirits-witness-or-my-own-feelings", "what-does-it-mean-to-be-sealed-with-the-holy-spirit", "what-is-the-difference-between-assurance-and-presumption", "why-endure-if-i-cant-lose-my-salvation"],
    followsFrom: ["how-can-i-be-saved"],
    related: ["what-happens-when-i-sin", "who-is-the-holy-spirit", "what-is-faith"],
    planned: [],
    order: 12,
  },

  {
    slug: "what-happens-when-i-sin",
    question: "What happens when I sin after I've come to Christ?",
    category: "our-walk",
    summary:
      "When a believer sins, their salvation is not undone; Christ is their advocate with the Father. But the Spirit is grieved and fellowship is clouded. The remedy is confession: God is faithful to forgive and cleanse, and He grows us through our failures.",
    passages: [
      {
        book: "1 John",
        chapter: 1,
        title: "Walk in the light: confess",
        lookFor: "The honest realism that believers still sin, and the promise of cleansing.",
        focus: "5-10",
      },
      {
        book: "1 John",
        chapter: 2,
        title: "We have an advocate",
        lookFor: "If anyone sins, we have Jesus Christ the righteous, the propitiation for our sins.",
        focus: "1-2",
      },
      {
        book: "Hebrews",
        chapter: 4,
        title: "Approach the throne of grace",
        lookFor: "A High Priest who was tempted as we are, so we may come boldly for mercy.",
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
          "'If we say that we have no sin, we deceive ourselves, and the truth is not in us.' Even Paul cried out over a war within: 'The good that I desire, I don't do; but the evil that I don't desire, that I practice.' A believer is not someone who never fails, but someone who refuses to make peace with failure.",
        verses: ["1 John 1:8", "Romans 7:19-24"],
      },
      {
        heading: "But you have an advocate",
        body:
          "The gospel does not leave you stranded in guilt. 'If anyone sins, we have a Counselor with the Father, Jesus Christ, the righteous, and he is the atoning sacrifice for our sins.' Your standing before God rests on His finished work, not on your performance, and He is right now pleading for you.",
        verses: ["1 John 2:1-2", "Hebrews 7:25"],
      },
      {
        heading: "The path back is confession",
        body:
          "'If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.' David learned it: 'I acknowledged my sin to you… and you forgave the iniquity of my sin.' Whoever conceals his sin does not prosper, but whoever confesses and forsakes it obtains mercy.",
        verses: ["1 John 1:9", "Psalm 32:5", "Proverbs 28:13"],
      },
      {
        heading: "Come boldly, not cowering",
        body:
          "We do not approach God on the strength of our clean record but on the faithfulness of our High Priest, who was tempted in every way as we are, yet without sin. Because of Him we can 'draw near with boldness to the throne of grace, that we may receive mercy, and may find grace for help in time of need.'",
        verses: ["Hebrews 4:15-16"],
      },
      {
        heading: "No condemnation for those in Christ",
        body:
          "'There is therefore now no condemnation to those who are in Christ Jesus.' The Spirit, not the accuser, is the one who convicts, and He convicts to restore, not to destroy. God even works our failures for our good, making His grace sufficient in our weakness.",
        verses: ["Romans 8:1", "Romans 8:26-27", "2 Corinthians 12:9"],
      },
    ],
    keyVerses: ["1 John 2:1-2", "1 John 1:9", "Hebrews 4:15-16", "Romans 8:1"],
    raises: ["how-do-i-fight-sin", "does-god-use-our-failures", "can-gods-grace-really-cover-my-worst-sins", "god-remembers-our-sins-no-more"],
    followsFrom: ["how-can-i-be-saved", "what-does-it-mean-to-be-born-again"],
    related: ["can-i-lose-my-salvation"],
    planned: [],
    order: 13,
  },

  // ------------------------------------------------------------------
  // More questions: Holy Spirit, Christ, and the walk
  // ------------------------------------------------------------------
  {
    slug: "how-does-the-spirit-convict-the-world",
    question: "How does the Spirit convict the world of sin?",
    category: "holy-spirit",
    summary:
      "Jesus said the Spirit would 'convict the world about sin, about righteousness, and about judgment.' Conviction is not mere guilt: it is God persuading the conscience of the truth, so that people see their sin, their need of Christ's righteousness, and the judgment to come, and turn to the Savior.",
    passages: [
      {
        book: "John",
        chapter: 16,
        title: "The Spirit's convicting work",
        lookFor: "Concerning sin, righteousness, and judgment: Jesus explains all three.",
        focus: "5-15",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "Cut to the heart",
        lookFor: "The preaching of the Spirit-bearing church, and the response: 'what must we do?'",
        focus: "37-41",
      },
      {
        book: "Romans",
        chapter: 3,
        title: "Every mouth is silenced",
        lookFor: "The law leaves every mouth shut: the groundwork the Spirit uses to lead us to Christ.",
        focus: "19-26",
      },
    ],
    points: [
      {
        heading: "Conviction is convincing, not just feeling bad",
        body:
          "Jesus said the Spirit 'will convict the world about sin, about righteousness, and about judgment.' To convict is to bring proof and persuade: the Spirit doesn't merely make people uncomfortable, He opens their eyes to the truth about God, themselves, and the gospel.",
        verses: ["John 16:8"],
      },
      {
        heading: "Concerning sin: because they do not believe in Jesus",
        body:
          "The sin the Spirit exposes first is not a list of behaviors but the root: 'because they don't believe in me.' Weeping over a broken marriage is one thing; being convinced that refusing Christ is the deepest wrong is the Spirit's work. He uses the gospel to name that sin.",
        verses: ["John 16:9", "John 3:19-20"],
      },
      {
        heading: "Concerning righteousness: because Jesus went to the Father",
        body:
          "Jesus went to the Father and the world saw Him no more, yet the Father vindicated Him by the resurrection and ascension. The Spirit convinces the world that Christ is the righteous One, and that His righteousness is what we need. The verdict on Jesus becomes the news we receive.",
        verses: ["John 16:10", "Acts 2:32-33", "Romans 3:21-22"],
      },
      {
        heading: "Concerning judgment: because the ruler of this world is judged",
        body:
          "Satan, the accuser, has been judged at the cross. The Spirit assures us that evil will not have the last word: that the powers behind the world's rebellion are already defeated. Judgment, promised and certain, is part of the good news that calls us to safety in Christ.",
        verses: ["John 16:11", "John 12:31", "Colossians 2:15"],
      },
      {
        heading: "Conviction leads to life, not despair",
        body:
          "When the crowd was 'cut to the heart' under the Spirit's conviction, Peter did not leave them in guilt; he called them to repent and be baptized, and to receive the gift of the Spirit. God's kindness leads to repentance. The Spirit who convicts is the same Spirit who gives the new birth.",
        verses: ["Acts 2:37-38", "Romans 2:4"],
      },
    ],
    keyVerses: ["John 16:8-11", "Acts 2:37-38", "John 3:19-20"],
    raises: ["how-do-i-receive-the-holy-spirit", "what-does-it-mean-that-the-world-hates-jesus"],
    followsFrom: ["is-the-holy-spirit-god"],
    related: ["who-is-the-holy-spirit"],
    planned: ["What is the difference between the world and the kingdom of God?"],
    order: 14,
  },

  {
    slug: "what-are-spiritual-gifts",
    question: "What are spiritual gifts, and how do they work?",
    category: "holy-spirit",
    summary:
      "Spiritual gifts are abilities the Holy Spirit gives to every believer for building up the church and serving others, not for show. They are diverse, but all come from the one Spirit, and their whole purpose is to make Christ known and His people strong.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 12,
        title: "Gifts in the body",
        lookFor: "One Spirit, many gifts: each given for the common good.",
      },
      {
        book: "Romans",
        chapter: 12,
        title: "Gifts as members of one body",
        lookFor: "The Spirit's gifts listed as ways of serving the body.",
        focus: "3-8",
      },
      {
        book: "Ephesians",
        chapter: 4,
        title: "Gifts to equip the church",
        lookFor: "The ascended Christ gives gifts so the body grows up into Him.",
        focus: "7-16",
      },
      {
        book: "1 Corinthians",
        chapter: 13,
        title: "The more excellent way",
        lookFor: "All gifts are worthless without love, and love never fails.",
      },
    ],
    points: [
      {
        heading: "Every believer has been given at least one",
        body:
          "'To each one is given the manifestation of the Spirit for the profit of all.' The Spirit apportions gifts 'to each one separately, as he desires.' No Christian is giftless; gifts are not for a spiritual elite, but for the whole body.",
        verses: ["1 Corinthians 12:7", "1 Corinthians 12:11", "1 Peter 4:10"],
      },
      {
        heading: "They are diverse, but there is one Spirit",
        body:
          "Paul lists 'various kinds of gifts, but the same Spirit… various kinds of service, and the same Lord… various kinds of workings, but the same God, who works all things in all.' The diversity is not a flaw to envy or despise; it is the beauty of a body made to need every member.",
        verses: ["1 Corinthians 12:4-11"],
      },
      {
        heading: "They build the church; they don't show off the church",
        body:
          "The purpose of every gift is edification: 'Let all things be done to build each other up.' Gifts are given 'for the perfecting of the saints, to the work of serving, to the building up of the body of Christ.' A gift used for applause is a gift misused; a gift used for the good of others is a gift well used.",
        verses: ["1 Corinthians 12:25-26", "1 Corinthians 14:26", "Ephesians 4:12"],
      },
      {
        heading: "Love is greater than all gifts",
        body:
          "Paul can imagine tongues, prophecy, and mountain-moving faith, and call them nothing without love. Gifts are for this age; love never fails. The most impressive gift exercised without love does not resemble Christ at all. So we pursue gifts, but we pursue love most of all.",
        verses: ["1 Corinthians 13:1-3", "1 Corinthians 13:13"],
      },
      {
        heading: "The fruit is the goal of the gifts",
        body:
          "The Spirit's gifts build the church, and the Spirit's fruit in your character, love, joy, peace, patience, kindness, goodness, faith, gentleness, self-control, shows Christ. 'Earnestly desire the best gifts,' Paul says, and then shows the way that is still more excellent: love.",
        verses: ["Galatians 5:22-23", "1 Corinthians 12:31", "Romans 12:6-8"],
      },
    ],
    keyVerses: ["1 Corinthians 12:4-7", "1 Corinthians 12:11", "1 Peter 4:10", "1 Corinthians 13:13"],
    raises: ["are-sign-gifts-active", "discovering-my-gift"],
    followsFrom: ["how-do-i-receive-the-holy-spirit"],
    related: ["who-is-the-holy-spirit", "how-does-the-spirit-convict-the-world"],
    planned: ["What is the difference between a talent and a spiritual gift?"],
    order: 15,
  },

  {
    slug: "why-did-jesus-call-himself-son-of-man",
    question: "Why did Jesus call himself the Son of Man?",
    category: "jesus-christ",
    summary:
      "'Son of Man' was Jesus' favorite title for Himself. It comes from Daniel 7, where 'one like a son of man' receives an everlasting kingdom from God. By using it, Jesus claimed to be that divine, reigning figure while also owning His full humanity and His calling to suffer and serve.",
    passages: [
      {
        book: "Daniel",
        chapter: 7,
        title: "One like a son of man",
        lookFor: "The figure of Daniel's vision: given dominion, glory, and an everlasting kingdom.",
        focus: "13-14",
      },
      {
        book: "Mark",
        chapter: 2,
        title: "Authority to forgive sins",
        lookFor: "Jesus answers 'who can forgive sins but God alone?' by describing the Son of Man.",
        focus: "1-12",
      },
      {
        book: "Hebrews",
        chapter: 2,
        title: "Truly one of us",
        lookFor: "He was made like His brothers in every way: a Son of Man who shares our flesh.",
        focus: "5-18",
      },
      {
        book: "Mark",
        chapter: 10,
        title: "The Son of Man came to serve",
        lookFor: "The title that spans glory and suffering: He came to give His life as a ransom.",
        focus: "35-45",
      },
    ],
    points: [
      {
        heading: "It comes from Daniel's vision of the One who rules",
        body:
          "Daniel saw 'one like a son of man' come with the clouds of heaven and receive dominion, glory, and a kingdom that will never be destroyed, words the Bible uses for God's own rule. Jesus took this title as His own, especially when speaking of His glory and return.",
        verses: ["Daniel 7:13-14", "Matthew 26:64", "Revelation 1:13"],
      },
      {
        heading: "It is a claim to divine authority and to be the Messiah",
        body:
          "When the scribes asked who could forgive sins but God alone, Jesus answered by asserting that 'the Son of Man has authority on earth to forgive sins,' claiming the divine prerogative. And the Father 'gave him authority to execute judgment, because he is a Son of Man.'",
        verses: ["Mark 2:5-7", "Mark 2:10", "John 5:27"],
      },
      {
        heading: "It owns His full humanity",
        body:
          "The Son of God did not merely appear human; He became human. He 'shared in flesh and blood' so that He could be 'made like his brothers' in every way, and become a merciful High Priest. Calling Himself the Son of Man declares He is the true Man, our representative.",
        verses: ["Hebrews 2:14-17", "Philippians 2:7-8"],
      },
      {
        heading: "It spans both glory and suffering",
        body:
          "The same title reaches two directions: a glorious reigning figure in Daniel, and 'the Son of Man came not to be served, but to serve, and to give his life as a ransom for many' in the Gospels. Jesus is the Suffering Servant who becomes the reigning King.",
        verses: ["Mark 10:45", "Luke 9:22", "Matthew 20:28"],
      },
      {
        heading: "Why both titles matter",
        body:
          "As the Son of God He is fully God; as the Son of Man He is fully man, able to stand in our place, represent us, suffer for us, and one day judge us. He is the bridge our humanity needed: the divine Son who became man so that man could be reconciled to God.",
        verses: ["Hebrews 2:17-18", "1 Timothy 2:5", "Romans 5:19"],
      },
    ],
    keyVerses: ["Daniel 7:13-14", "Mark 2:10", "Mark 10:45", "Hebrews 2:17"],
    raises: ["is-the-son-of-man-title-judgment-or-mercy", "why-did-jesus-tell-people-not-to-reveal-who-he-was", "what-does-the-title-christ-mean"],
    followsFrom: ["who-is-jesus", "what-does-it-mean-that-jesus-is-the-son-of-god"],
    related: ["what-does-it-mean-that-jesus-is-the-son-of-god"],
    planned: [],
    order: 16,
  },

  {
    slug: "where-is-jesus-now",
    question: "Where is Jesus now?",
    category: "jesus-christ",
    summary:
      "After His resurrection, Jesus ascended into heaven and is seated at the right hand of God the Father: reigning, interceding for His people, preparing a place for them, and waiting to return. He is Lord of all right now.",
    passages: [
      {
        book: "Acts",
        chapter: 1,
        title: "The ascension",
        lookFor: "Taken up before their eyes, and promised to come again in the same way.",
        focus: "1-11",
      },
      {
        book: "Hebrews",
        chapter: 7,
        title: "He always lives to intercede",
        lookFor: "Because He lives forever, His priesthood is permanent: He intercedes for His people.",
        focus: "23-28",
      },
      {
        book: "John",
        chapter: 14,
        title: "I go to prepare a place",
        lookFor: "His departure is not abandonment: it is preparation for our arrival.",
        focus: "1-6",
      },
      {
        book: "1 Thessalonians",
        chapter: 4,
        title: "The Lord himself will descend",
        lookFor: "Where He is and where He is going: He will return for His own.",
        focus: "13-18",
      },
    ],
    points: [
      {
        heading: "He ascended and is seated at God's right hand",
        body:
          "After His resurrection, Jesus was taken up into heaven, and Scripture says He 'sat down on the right hand of the Majesty on high.' The right hand is the place of honor, authority, and rule. He did not vanish into retirement; He was exalted to the throne.",
        verses: ["Acts 1:9-11", "Hebrews 1:3", "Mark 16:19"],
      },
      {
        heading: "He reigns as Lord now",
        body:
          "'He must reign until he has put all his enemies under his feet,' Peter preaching: 'God exalted him with his right hand… God has made him both Lord and Christ.' Raised 'far above all rule and authority,' He is head over all things, for the benefit of His church.",
        verses: ["1 Corinthians 15:25", "Acts 2:33", "Ephesians 1:20-23"],
      },
      {
        heading: "He intercedes for His people",
        body:
          "'He is also able to save to the uttermost those who draw near to God through him, seeing that he lives forever to make intercession for them.' The risen Christ is at the Father's right hand pleading for you, and He is our advocate when we sin.",
        verses: ["Hebrews 7:25", "Romans 8:34", "1 John 2:1"],
      },
      {
        heading: "He is preparing a place",
        body:
          "Jesus told His disciples not to be troubled: 'In my Father's house are many rooms. If it were not so, I would have told you. I go to prepare a place for you.' His absence from our sight is not His absence from our story; He is making ready for us.",
        verses: ["John 14:2-3"],
      },
      {
        heading: "He will return for His own",
        body:
          "The angels at the ascension promised: 'This Jesus, who was received up from you into the sky will come back in the same way as you saw him going into the sky.' At His return the dead in Christ will rise and he will gather His people, and so we wait for Him with hope.",
        verses: ["Acts 1:11", "1 Thessalonians 4:16-17", "Revelation 22:20"],
      },
    ],
    keyVerses: ["Acts 1:9-11", "Hebrews 7:25", "John 14:2-3", "Romans 8:34"],
    raises: ["will-jesus-return-literally", "what-is-the-church"],
    followsFrom: ["did-jesus-rise-from-the-dead"],
    related: ["what-happens-when-i-sin", "how-can-i-be-saved"],
    planned: ["What is the church's mission in the world?"],
    order: 17,
  },

  {
    slug: "what-should-i-do-now-that-im-saved",
    question: "What should I do now that I'm saved?",
    category: "our-walk",
    summary:
      "Now that you belong to Christ, the life of faith begins: follow Him, abide in Him, be changed into His likeness, love His people, bear witness to His grace, and grow in the knowledge of Christ. Not to earn salvation, but because of it.",
    passages: [
      {
        book: "John",
        chapter: 15,
        title: "Abide in the vine",
        lookFor: "The secret of the whole Christian life: remaining in Christ so His life flows through you.",
        focus: "1-8",
      },
      {
        book: "Colossians",
        chapter: 3,
        title: "Put on the new self",
        lookFor: "Seek the things above; put on compassion, kindness, humility, love.",
        focus: "1-14",
      },
      {
        book: "Matthew",
        chapter: 28,
        title: "Make disciples",
        lookFor: "The risen King sends His people out, and promises to be with them always.",
        focus: "16-20",
      },
      {
        book: "John",
        chapter: 13,
        title: "Love one another",
        lookFor: "The mark of discipleship: love that mirrors His.",
        focus: "34-35",
      },
    ],
    points: [
      {
        heading: "Follow Jesus daily",
        body:
          "Following is not a one-time decision but the shape of a whole life: 'If anyone desires to come after me, let him deny himself, take up his cross, and follow me.' His sheep 'hear his voice… and the sheep follow him.' It is a walk, not a moment.",
        verses: ["Luke 9:23", "John 10:27", "Matthew 16:24"],
      },
      {
        heading: "Abide in Him",
        body:
          "Jesus is the vine and we are the branches: 'Remain in me, and I in you… apart from me you can do nothing.' Abiding means staying connected to Christ, through His word, prayer, and obedience, so that His life flows through us and we bear fruit that remains.",
        verses: ["John 15:4-5", "John 15:7-8"],
      },
      {
        heading: "Be changed into His likeness",
        body:
          "The Spirit transforms us 'into the same image, from glory to glory.' In the gospel we are being renewed by the Spirit to reflect Christ, putting on compassion, kindness, humility, gentleness, and love, and being transformed by the renewing of our minds.",
        verses: ["2 Corinthians 3:18", "Colossians 3:12-14", "Romans 12:2"],
      },
      {
        heading: "Love His people",
        body:
          "Jesus gave us a new command: 'love one another, just like I have loved you,' and said that by this, everyone will know we are His disciples. We are not meant to walk alone. We gather, we encourage, we carry one another's burdens, and we do not forsake the assembly.",
        verses: ["John 13:34-35", "Hebrews 10:24-25", "Galatians 6:2"],
      },
      {
        heading: "Bear witness and grow",
        body:
          "The risen Christ sends us: 'Go, and make disciples of all nations.' And He tells us to 'grow in the grace and knowledge of our Lord and Savior Jesus Christ.' Saved people tell others about the Savior, and they keep growing in Him, all the way home.",
        verses: ["Matthew 28:19-20", "2 Peter 3:18", "Acts 1:8"],
      },
    ],
    keyVerses: ["John 15:4-5", "Luke 9:23", "Colossians 3:12-14", "2 Peter 3:18"],
    raises: ["how-do-i-fight-sin", "how-do-i-share-my-faith-with-others"],
    followsFrom: ["how-can-i-be-saved", "what-does-it-mean-to-be-born-again"],
    related: ["who-is-the-holy-spirit", "how-do-i-receive-the-holy-spirit", "why-do-i-need-the-church", "how-should-i-read-the-bible", "how-do-i-pray"],
    planned: ["What role does prayer play in sharing the gospel?"],
    order: 18,
  },

  {
    slug: "how-do-i-fight-sin",
    question: "How do I fight sin in my life?",
    category: "our-walk",
    summary:
      "You fight sin not by grit alone, but by reckoning yourself dead to sin and alive to God in Christ, and by walking in the Spirit. It is a battle of faith, winnable not because you are strong, but because He is.",
    passages: [
      {
        book: "Romans",
        chapter: 6,
        title: "Dead to sin, alive to God",
        lookFor: "The identity underneath the battle: reckon yourselves dead to sin and alive to God.",
        focus: "1-14",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "By the Spirit, put to death",
        lookFor: "The Spirit is the power; we fight in step with Him.",
        focus: "5-14",
      },
      {
        book: "Galatians",
        chapter: 5,
        title: "Walk by the Spirit",
        lookFor: "Walk by the Spirit and you will not gratify the desires of the flesh.",
        focus: "16-26",
      },
      {
        book: "Colossians",
        chapter: 3,
        title: "Put to death what is earthly",
        lookFor: "Fight specific sins specifically: put off, and put on.",
        focus: "1-10",
      },
    ],
    points: [
      {
        heading: "Fight from the identity Christ gave you",
        body:
          "Our 'old self' was crucified with Christ so that we would no longer be slaves to sin. Paul tells us to 'consider yourselves also to be dead to sin, but alive to God in Christ Jesus our Lord' and not to let sin reign. The battle begins with who He has made you: a freed person, not a slave.",
        verses: ["Romans 6:6", "Romans 6:11-14"],
      },
      {
        heading: "Walk in the Spirit, don't grind in the flesh",
        body:
          "'Walk by the Spirit, and you won't fulfill the lust of the flesh.' By the Spirit we 'put to death the deeds of the body.' The battle is not sheer willpower but dependence: the Spirit produces love, joy, peace, and self-control as we stay in step with Him.",
        verses: ["Galatians 5:16-17", "Romans 8:13", "Galatians 5:22-23"],
      },
      {
        heading: "Put to death, specifically",
        body:
          "Paul is practical: 'Put to death therefore your members which are on the earth,' and name them. 'Put off' anger, wrath, and malice; 'put on' Christ and make no provision for the flesh. Vague dislike of sin changes nothing; a specific fight, by the Spirit, does.",
        verses: ["Colossians 3:5", "Colossians 3:8", "Romans 13:14"],
      },
      {
        heading: "It's grace-driven, not a self-help project",
        body:
          "We come to God as we 'draw near with boldness to the throne of grace, that we may receive mercy, and may find grace for help in time of need.' Where we are weak, His grace is sufficient, and He provides a way of escape in every temptation. The fight is fought in His strength, not ours.",
        verses: ["Hebrews 4:16", "2 Corinthians 12:9", "1 Corinthians 10:13"],
      },
      {
        heading: "Don't fight alone",
        body:
          "Jesus told His disciples to 'watch and pray, that you may not enter into temptation.' We confess our struggles to one another, bear one another's burdens, and stay sober and watchful against the enemy. Victory grows where a brother or sister fights beside us.",
        verses: ["Matthew 26:41", "James 5:16", "Galatians 6:1-2", "1 Peter 5:8-9"],
      },
    ],
    keyVerses: ["Romans 6:11-14", "Galatians 5:16", "Colossians 3:5", "Hebrews 4:16"],
    raises: ["what-is-the-flesh-versus-the-spirit", "where-does-temptation-come-from", "what-is-the-difference-between-testing-and-temptation", "how-do-trials-make-us-more-like-christ"],
    followsFrom: ["what-happens-when-i-sin", "what-should-i-do-now-that-im-saved"],
    related: ["what-happens-when-i-sin"],
    planned: [],
    order: 19,
  },

  // ------------------------------------------------------------------
  // God the Father + faith & works
  // ------------------------------------------------------------------
  {
    slug: "who-is-the-father",
    question: "Who is God the Father?",
    category: "god-the-father",
    summary:
      "The Father is the first Person of the Trinity: fully God, the Creator and sovereign Lord, who loves the world so much that He gave His only Son, and who draws us into His own family as adopted children. Jesus came to reveal the Father to us.",
    passages: [
      {
        book: "John",
        chapter: 14,
        title: "Show us the Father",
        lookFor: "Philip asks to see the Father, and Jesus answers: he who has seen me has seen the Father.",
        focus: "1-14",
      },
      {
        book: "Matthew",
        chapter: 6,
        title: "Our Father in heaven",
        lookFor: "Jesus teaches us to pray to the Father, and to trust His care.",
        focus: "5-15",
      },
      {
        book: "Luke",
        chapter: 15,
        title: "The father's heart",
        lookFor: "The prodigal's father runs to embrace his returning son: a window into the Father's love.",
        focus: "11-24",
      },
      {
        book: "1 John",
        chapter: 3,
        title: "See what love the Father has given us",
        lookFor: "The staggering fact of the gospel: we are called children of God.",
        focus: "1-3",
      },
    ],
    points: [
      {
        heading: "The Father is the one true God",
        body:
          "Jesus' own definition of eternal life is this: 'that they should know you, the only true God, and him whom you sent, Jesus Christ.' For us there is one God, the Father, from whom all things come. He is not 'the god behind the gods'; He is the God.",
        verses: ["John 17:3", "1 Corinthians 8:6", "Isaiah 46:9-10"],
      },
      {
        heading: "He is revealed in Jesus",
        body:
          "Philip asked to see the Father, and Jesus replied, 'He who has seen me has seen the Father.' No one has ever seen God, but the only Son, who is at the Father's side, has made Him known. We do not guess at God's character; we look at Jesus and see the Father.",
        verses: ["John 14:8-9", "John 1:18", "Colossians 1:15"],
      },
      {
        heading: "His heart is love: He gave His Son",
        body:
          "'God so loved the world, that he gave his one and only Son.' This is not an abstract principle; it is the measure of the Father's heart. He shows His love for us in this: while we were still sinners, Christ died for us. Even when we wander, the Father runs to meet us.",
        verses: ["John 3:16", "1 John 3:1", "Romans 5:8", "Luke 15:20"],
      },
      {
        heading: "He has adopted us as His children",
        body:
          "In love He predestined us for adoption as sons through Jesus Christ. We are no longer slaves or strangers; through the Spirit we cry, 'Abba, Father.' 'See how great a love the Father has bestowed on us, that we should be called children of God!' And that is what we are.",
        verses: ["Galatians 4:4-7", "Ephesians 1:5", "1 John 3:1-2", "Matthew 6:9"],
      },
      {
        heading: "You come to the Father through Jesus",
        body:
          "Jesus is 'the way, the truth, and the life. No one comes to the Father except through me.' Through Him we both have access to the Father by one Spirit, and through Him we may ask the Father in His name, and the door is open. The Father who sent the Son welcomes all who come through the Son.",
        verses: ["John 14:6", "Ephesians 2:18", "John 14:13-14"],
      },
    ],
    keyVerses: ["John 14:9", "1 John 3:1", "John 3:16", "Matthew 6:9", "Ephesians 1:5"],
    raises: ["what-is-the-trinity", "who-is-jesus", "who-is-the-holy-spirit", "still-my-father-when-i-fail", "what-does-it-mean-that-god-is-love", "how-does-gods-love-differ-from-human-love"],
    followsFrom: ["what-is-the-trinity"],
    related: ["what-is-the-trinity", "who-is-jesus", "why-does-god-allow-suffering", "how-do-i-pray"],
    planned: [],
    order: 20,
  },

  {
    slug: "faith-or-works",
    question: "Does James contradict Paul? Is it faith or works?",
    category: "our-walk",
    summary:
      "No. Paul and James answer two different questions. Paul asks how a person is declared righteous before God, and answers: by faith alone. James asks how we can tell a faith is real, and answers: by the works that genuine faith produces. Far from contradicting, they complete each other: real saving faith always works.",
    passages: [
      {
        book: "Ephesians",
        chapter: 2,
        title: "Saved by grace through faith",
        lookFor: "Paul: not of works, yet created in Christ Jesus for good works. Both halves matter.",
        focus: "8-10",
      },
      {
        book: "Romans",
        chapter: 4,
        title: "Abraham justified by faith",
        lookFor: "Paul's argument: to the one who does not work but believes, faith is counted as righteousness.",
        focus: "1-8",
      },
      {
        book: "James",
        chapter: 2,
        title: "Faith without works is dead",
        lookFor: "James's answer, and his example of the very same Abraham.",
        focus: "14-26",
      },
      {
        book: "Galatians",
        chapter: 2,
        title: "Justified by faith in Christ",
        lookFor: "Even Paul: we know a person is not justified by works of the law, but by faith in Christ.",
        focus: "15-21",
      },
    ],
    points: [
      {
        heading: "They are answering different questions",
        body:
          "Paul is fighting self-righteousness, the idea that we can earn our place with God. His question: 'How is a sinner declared righteous before God?' James is fighting empty profession, the idea that agreeing with the facts is enough. His question: 'What does a real faith look like?' The Bible answers both, because we need both.",
        verses: ["Romans 3:28", "James 2:14-17"],
      },
      {
        heading: "Paul: justification is by faith, apart from works",
        body:
          "'By grace you have been saved through faith… not of works, that no one would boast.' To the one who does not work but believes, 'his faith is accounted for righteousness.' A person is not justified by works of the law but 'through faith in Jesus Christ.' This is the ground of salvation.",
        verses: ["Ephesians 2:8-9", "Romans 4:4-5", "Galatians 2:16", "Titus 3:5"],
      },
      {
        heading: "James: real faith cannot be a dead faith",
        body:
          "'What good is it if someone says he has faith, but he doesn't have works? Can that faith save him?' Faith by itself, if it has no works, is dead: 'as the body apart from the spirit is dead, even so faith apart from works is dead.' James is not teaching that works save; he is exposing a bare 'faith' that never produces fruit.",
        verses: ["James 2:14", "James 2:17", "James 2:26"],
      },
      {
        heading: "They both use Abraham: two sides of the same faith",
        body:
          "Paul points to Abraham 'believed God, and it was counted to him for righteousness.' James points to the same man when he offered Isaac: 'faith worked with his works, and by works faith was perfected;' One shows the ground (faith received); the other shows the fruit (faith perfected through obedience).",
        verses: ["Romans 4:1-3", "James 2:21-24"],
      },
      {
        heading: "They agree: grace creates good works",
        body:
          "Paul himself says we are 'created in Christ Jesus for good works, which God prepared before that we would walk in them,' and that what matters is 'faith working through love.' So the resolution is not 'faith or works' but 'faith alone, and authentic faith never remains alone.' The faith that saves is the faith that works.",
        verses: ["Ephesians 2:10", "Galatians 5:6", "Titus 2:14"],
      },
    ],
    keyVerses: ["Ephesians 2:8-10", "Romans 4:5", "James 2:17", "James 2:26", "Galatians 5:6"],
    raises: ["what-is-justification", "what-is-sanctification-and-how-does-it-happen"],
    followsFrom: ["how-can-i-be-saved"],
    related: ["how-can-i-be-saved", "what-does-it-mean-to-be-born-again", "what-should-i-do-now-that-im-saved", "what-is-the-gospel"],
    planned: ["How does growth in holiness happen over time?"],
    order: 21,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Gospel
  // ------------------------------------------------------------------
  {
    slug: "what-is-the-gospel",
    question: "What is the gospel?",
    category: "gospel",
    summary:
      "The gospel (the word means 'good news') is the announcement that God, in love, became man in Jesus Christ, died for our sins, was raised for our justification, and freely saves all who repent and believe. It is news to be believed, not a task to be performed.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 15,
        title: "The good news, defined",
        lookFor: "Paul's summary: Christ died for our sins, was buried, and rose the third day.",
        focus: "1-8",
      },
      {
        book: "Romans",
        chapter: 3,
        title: "Righteousness apart from the law",
        lookFor: "The heart of the gospel: a righteousness from God through faith in Christ Jesus.",
        focus: "21-26",
      },
      {
        book: "John",
        chapter: 3,
        title: "God so loved",
        lookFor: "Why the Son was sent: not to condemn but to save.",
        focus: "16-18",
      },
      {
        book: "Acts",
        chapter: 16,
        title: "The jailer's question",
        lookFor: "'What must I do to be saved?' And the one-sentence answer.",
        focus: "25-34",
      },
    ],
    points: [
      {
        heading: "It is good news, not good advice",
        body:
          "The gospel is not a list of instructions to improve yourself: it is an announcement of what God has done. Paul delivers what he received: 'that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day.' It is something to believe, not something to achieve.",
        verses: ["1 Corinthians 15:1-4", "Romans 1:16"],
      },
      {
        heading: "The message: a Person and His finished work",
        body:
          "The gospel centers on Jesus, not on our efforts. 'God so loved the world that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.' The good news is who He is and what He did for us.",
        verses: ["John 3:16", "1 Corinthians 15:3-4", "2 Corinthians 5:19"],
      },
      {
        heading: "What it gives: righteousness and eternal life",
        body:
          "By the gospel we are 'justified freely by his grace through the redemption that is in Christ Jesus.' The wages of sin is death, but 'the free gift of God is eternal life in Christ Jesus our Lord.' The gospel turns a verdict of death into a gift of life.",
        verses: ["Romans 3:24", "Romans 6:23", "John 5:24"],
      },
      {
        heading: "What it asks: repentance and faith",
        body:
          "The jailer asked what he must do, and the answer was: 'Believe in the Lord Jesus Christ, and you will be saved.' Jesus began His ministry, 'Repent, and believe in the Good News.' It is received, never earned.",
        verses: ["Acts 16:30-31", "Mark 1:15", "Ephesians 2:8-9"],
      },
      {
        heading: "It is for everyone",
        body:
          "The gospel is 'the power of God for salvation for everyone who believes.' God did not send the Son into the world to condemn the world, but that the world through Him might be saved. It is good news for all: the worst and the best alike.",
        verses: ["Romans 1:16", "John 3:17", "1 Timothy 2:4"],
      },
    ],
    keyVerses: ["1 Corinthians 15:3-4", "John 3:16", "Romans 3:24", "Romans 6:23"],
    raises: ["what-is-grace", "what-is-justification", "what-is-faith", "what-is-repentance", "how-can-i-be-saved", "what-is-the-kingdom-of-god"],
    followsFrom: [],
    related: ["who-is-jesus", "how-can-i-be-saved", "faith-or-works"],
    planned: ["What are the parables of the kingdom about?"],
    order: 22,
  },

  {
    slug: "what-is-grace",
    question: "What is grace?",
    category: "gospel",
    summary:
      "Grace is God's unearned, undeserved favor. Because we could not save ourselves, God freely gave us in Christ what we did not deserve: forgiveness, righteousness, and adoption. Grace is why the gospel is a gift.",
    passages: [
      {
        book: "Ephesians",
        chapter: 2,
        title: "Saved by grace",
        lookFor: "By grace through faith, not of works.",
        focus: "1-10",
      },
      {
        book: "Titus",
        chapter: 3,
        title: "The kindness and love of God",
        lookFor: "He saved us by mercy, not by deeds in righteousness.",
        focus: "3-7",
      },
      {
        book: "Romans",
        chapter: 5,
        title: "Grace abounded more",
        lookFor: "Where sin increased, grace abounded all the more.",
        focus: "15-21",
      },
      {
        book: "Luke",
        chapter: 15,
        title: "The grace of the Father",
        lookFor: "A gift to the utterly undeserving: the prodigal received more than he deserved.",
        focus: "11-32",
      },
    ],
    points: [
      {
        heading: "Grace is unearned favor",
        body:
          "'By grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.' Paul adds: if it is by grace, it is no longer of works; otherwise grace would no longer be grace. A gift that can be earned is not a gift.",
        verses: ["Ephesians 2:8-9", "Romans 11:6", "Romans 4:4"],
      },
      {
        heading: "God gives what we do not deserve",
        body:
          "We had all sinned and fallen short, yet we are 'justified freely by his grace through the redemption that is in Christ Jesus.' Grace runs to the undeserving, almost shockingly: the prodigal's father runs and embraces him while he is still a long way off.",
        verses: ["Romans 3:23-24", "Luke 15:20", "Ephesians 1:7"],
      },
      {
        heading: "Grace is a Person and a power, not just a feeling",
        body:
          "'The grace of God has appeared, bringing salvation to all.' Grace is embodied in Jesus, who came full of grace and truth, and it is the power that sustains us: 'My grace is sufficient for you, for my power is made perfect in weakness.' It saves, and it keeps.",
        verses: ["Titus 2:11", "2 Corinthians 12:9", "John 1:16"],
      },
      {
        heading: "Where sin abounded, grace abounded more",
        body:
          "'Where sin abounded, grace abounded more exceedingly: that as sin reigned in death, even so grace might reign through righteousness to eternal life.' Grace is not the license to sin; it is the power that frees us from sin's reign.",
        verses: ["Romans 5:20-21", "Romans 6:1-2", "Titus 2:12"],
      },
    ],
    keyVerses: ["Ephesians 2:8-9", "Romans 3:24", "2 Corinthians 12:9", "Titus 2:11"],
    raises: ["what-is-justification", "does-grace-mean-live-how-i-want", "what-is-the-difference-between-grace-and-mercy"],
    followsFrom: ["what-is-the-gospel"],
    related: ["what-is-the-gospel", "how-can-i-be-saved"],
    planned: ["What does it mean to grow in grace?"],
    order: 23,
  },

  {
    slug: "what-is-justification",
    question: "What does it mean to be justified?",
    category: "gospel",
    summary:
      "Justification is God's declaration that a person is righteous, not on the basis of who they are or what they have done, but on the basis of Christ. In it, the Judge accepts the sinner for Jesus' sake, pardoning their sins and crediting Christ's righteousness to them.",
    passages: [
      {
        book: "Romans",
        chapter: 3,
        title: "Justified freely by grace",
        lookFor: "God has set forth Jesus as a propitiation, that He might be just and the justifier.",
        focus: "21-26",
      },
      {
        book: "Romans",
        chapter: 4,
        title: "Abraham justified by faith",
        lookFor: "To him who does not work but believes, faith is counted as righteousness.",
        focus: "1-8",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "The great exchange",
        lookFor: "He became sin for us, that we might become the righteousness of God in Him.",
        focus: "17-21",
      },
      {
        book: "Romans",
        chapter: 5,
        title: "Peace with God",
        lookFor: "Justified by faith: we have peace with God through our Lord Jesus Christ.",
        focus: "1-11",
      },
    ],
    points: [
      {
        heading: "It is a legal declaration, not a moral change",
        body:
          "Justification is a courtroom word, the verdict of the Judge: 'righteous.' Paul says we are 'justified by faith apart from the works of the law,' and asks, 'Who is he who condemns? It is Christ who died… who is at the right hand of God.' God is the one who justifies; the verdict is His, and it is final.",
        verses: ["Romans 3:28", "Romans 8:33-34"],
      },
      {
        heading: "Its ground is Christ, not our record",
        body:
          "We are 'justified freely by his grace through the redemption that is in Christ Jesus.' God set Him forth as a propitiation, and 'being now justified by his blood, we will be saved from God's wrath through him.' The basis is the blood and righteousness of Christ, not anything in us.",
        verses: ["Romans 3:24-25", "Romans 5:9", "2 Corinthians 5:21"],
      },
      {
        heading: "Its instrument is faith: counted, not achieved",
        body:
          "'To him who doesn't work, but believes in him who justifies the ungodly, his faith is accounted for righteousness.' Blessed is the one 'whom the Lord will by no means charge with sin.' Faith is not the merit; it is the hand that receives what is freely given.",
        verses: ["Romans 4:5", "Romans 4:8", "Galatians 2:16"],
      },
      {
        heading: "It is the great exchange",
        body:
          "For 'him who knew no sin he made to be sin on our behalf; so that in him we might become the righteousness of God.' On the cross Christ bore our sin; through faith we receive His righteousness. Our condemnation is transferred to Him; His righteousness is credited to us.",
        verses: ["2 Corinthians 5:21", "Isaiah 53:6", "1 Peter 2:24"],
      },
      {
        heading: "Its fruit is peace and salvation",
        body:
          "'Being therefore justified by faith, we have peace with God through our Lord Jesus Christ.' Those He justifies, He glorifies, and we stand 'heirs according to the hope of eternal life.' Justification is not the end of the story; it is the peaceful foundation of everything that follows.",
        verses: ["Romans 5:1", "Romans 8:30", "Titus 3:7"],
      },
    ],
    keyVerses: ["Romans 3:28", "Romans 4:5", "2 Corinthians 5:21", "Romans 5:1"],
    raises: ["what-is-faith", "faith-or-works", "what-is-imputation", "how-are-justification-and-sanctification-related", "what-does-the-bible-mean-by-holy"],
    followsFrom: ["faith-or-works", "what-is-grace"],
    related: ["faith-or-works", "how-can-i-be-saved"],
    planned: [],
    order: 24,
  },

  {
    slug: "what-is-faith",
    question: "What is faith, exactly?",
    category: "gospel",
    summary:
      "Faith is not blind wishing: it is trust that rests on the character and promises of God. It believes God's testimony about Christ and entrusts the whole life to Him. Faith has a content (the gospel) and a confidence (God's faithfulness).",
    passages: [
      {
        book: "Hebrews",
        chapter: 11,
        title: "The great cloud of witnesses",
        lookFor: "What faith is, and what the people of faith actually did with it.",
        focus: "1-12",
      },
      {
        book: "Romans",
        chapter: 10,
        title: "Faith comes by hearing",
        lookFor: "Faith is anchored to the word: to hearing about Christ.",
        focus: "14-17",
      },
      {
        book: "John",
        chapter: 6,
        title: "The work of God is to believe",
        lookFor: "Belief is not a human achievement but the response God calls for.",
        focus: "28-29",
      },
      {
        book: "Romans",
        chapter: 4,
        title: "Abraham's faith",
        lookFor: "A faith that grew strong, fully convinced God could do what He promised.",
        focus: "18-25",
      },
    ],
    points: [
      {
        heading: "Faith is confidence grounded in something real",
        body:
          "'Faith is assurance of things hoped for, proof of things not seen,' and 'without faith it is impossible to be well pleasing to him, for he who comes to God must believe that he exists, and that he is a rewarder of those who seek him.' Faith trusts a God who has spoken.",
        verses: ["Hebrews 11:1", "Hebrews 11:6", "2 Corinthians 5:7"],
      },
      {
        heading: "Faith rests on its object: the gospel of Christ",
        body:
          "'Faith comes by hearing, and hearing by the word of God.' Saving faith is not generic optimism; it is trust in a Person: 'if you will confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.' The object is Jesus.",
        verses: ["Romans 10:17", "Romans 10:9-10", "John 20:31"],
      },
      {
        heading: "Faith is not a work we offer; it receives",
        body:
          "When they asked what they must do to do the works of God, Jesus answered: 'This is the work of God, that you believe in him whom he has sent.' Faith saves 'through faith… not of works,' as a gift. Faith is the empty hand stretched out to receive.",
        verses: ["John 6:28-29", "Ephesians 2:8-9", "Romans 4:4-5"],
      },
      {
        heading: "Faith entrusts the whole life",
        body:
          "Abraham 'didn't waver through unbelief, but grew strong through faith… being fully assured that what he had promised, he was also able to perform.' This is personal trust: 'I know him whom I have believed, and I am persuaded that he is able to guard that which I have committed to him against that day.' Faith commits everything to Him.",
        verses: ["Romans 4:20-21", "2 Timothy 1:12", "Hebrews 11:8"],
      },
      {
        heading: "Faith produces a life of following",
        body:
          "Faith is not mere agreement with facts; it is reliance that reshapes a life. 'Faith working through love,' and 'faith apart from works is dead.' To live by faith is to say with Paul, 'I have been crucified with Christ… I live by faith in the Son of God.'",
        verses: ["Galatians 2:20", "James 2:17", "Galatians 5:6"],
      },
    ],
    keyVerses: ["Hebrews 11:1", "Romans 10:17", "John 6:29", "2 Timothy 1:12"],
    raises: ["faith-or-works", "what-does-it-mean-to-be-born-again", "is-it-okay-to-doubt", "what-does-it-mean-to-walk-by-faith-and-not-by-sight"],
    followsFrom: ["can-i-lose-my-salvation", "what-is-justification"],
    related: ["faith-or-works", "how-can-i-be-saved", "what-does-it-mean-to-be-born-again"],
    planned: ["How do I grow in faith?"],
    order: 25,
  },

  {
    slug: "what-is-repentance",
    question: "What is repentance?",
    category: "gospel",
    summary:
      "Repentance is a change of mind that leads to a change of direction: turning from sin and turning to God. It is the necessary companion of faith: to believe the gospel is to turn from the sins it forgives. Repentance is God's gift and the doorway to a new life.",
    passages: [
      {
        book: "Luke",
        chapter: 13,
        title: "Unless you repent",
        lookFor: "Jesus: everyone is under judgment apart from repentance; no one is exempt.",
        focus: "1-9",
      },
      {
        book: "Acts",
        chapter: 3,
        title: "Repent, turn again",
        lookFor: "Repentance brings times of refreshing from the Lord.",
        focus: "17-21",
      },
      {
        book: "2 Corinthians",
        chapter: 7,
        title: "Godly sorrow",
        lookFor: "The sorrow that leads to repentance, and what it actually produces.",
        focus: "8-11",
      },
      {
        book: "Mark",
        chapter: 1,
        title: "Repent and believe",
        lookFor: "Jesus pairs repentance and faith as the two sides of one response.",
        focus: "14-15",
      },
    ],
    points: [
      {
        heading: "Repentance is a turn toward God",
        body:
          "Jesus' first word was 'repent, and believe in the Good News.' Paul declared that people should 'repent and turn to God, doing works worthy of repentance.' It is not just feeling sorry; it is changing direction, from sin and toward God.",
        verses: ["Mark 1:15", "Acts 26:20", "1 Thessalonians 1:9"],
      },
      {
        heading: "It is a gift, not a self-made resolution",
        body:
          "God exalted Jesus 'to give repentance to Israel, and remission of sins,' and the church rejoiced that 'God has also granted to the Gentiles repentance to life.' Repentance is not something we must produce by force of will; it is something God works in us.",
        verses: ["Acts 5:31", "Acts 11:18", "2 Timothy 2:25"],
      },
      {
        heading: "Godly sorrow fuels it",
        body:
          "'godly sorrow works repentance to salvation, which brings no regret,' unlike worldly sorrow that only grieved over being caught. It is sorrow over sin, toward God: the broken and contrite heart He will not despise.",
        verses: ["2 Corinthians 7:10", "Psalm 51:17", "Joel 2:13"],
      },
      {
        heading: "It is about turning, not just feeling",
        body:
          "'Repent therefore, and turn again, that your sins may be blotted out.' Ezekiel calls Israel to 'cast away from you all your transgressions… and make yourself a new heart and a new spirit.' Repentance that stops at emotion is not yet repentance; it must turn.",
        verses: ["Acts 3:19", "Ezekiel 18:30-31", "Proverbs 28:13"],
      },
      {
        heading: "Repentance and faith are two sides of one turn",
        body:
          "Paul preached 'repentance toward God, and faith toward our Lord Jesus.' Luke sums up the mission as 'repentance and remission of sins' proclaimed in His name. You cannot turn to Jesus while refusing to turn from what grieves Him.",
        verses: ["Acts 20:21", "Luke 24:47", "James 4:8-10"],
      },
    ],
    keyVerses: ["Acts 3:19", "2 Corinthians 7:10", "Mark 1:15", "Ezekiel 18:31"],
    raises: ["what-happens-when-i-sin", "how-do-i-fight-sin", "repentance-one-time-or-lifelong", "how-do-i-know-my-repentance-is-genuine"],
    followsFrom: ["what-is-the-gospel"],
    related: ["what-is-the-gospel", "what-happens-when-i-sin", "how-can-i-be-saved"],
    planned: ["What is the difference between repentance and turning over a new leaf?"],
    order: 26,
  },

  // ------------------------------------------------------------------
  // TRAIL: Suffering & God's Will
  // ------------------------------------------------------------------
  {
    slug: "why-does-god-allow-suffering",
    question: "Why does God allow suffering and evil?",
    category: "suffering-will",
    summary:
      "Scripture does not explain every instance, but it shows that evil entered the world through human rebellion, that God is so sovereign He can work even through evil for good, that He shares our suffering in Christ, and that one day He will wipe away every tear. Suffering is not meaningless to God.",
    passages: [
      {
        book: "Genesis",
        chapter: 3,
        title: "How evil entered the world",
        lookFor: "Creation was good; sin and its curse came through human rebellion.",
        focus: "1-19",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "Creation groans; God works all things for good",
        lookFor: "Hope in the middle of suffering, and the promise that all things work together for good.",
        focus: "18-28",
      },
      {
        book: "John",
        chapter: 9,
        title: "Not always from personal sin",
        lookFor: "Jesus rejects the easy answer: the man was born blind 'that the works of God might be revealed in him.'",
        focus: "1-7",
      },
      {
        book: "2 Corinthians",
        chapter: 1,
        title: "The God of all comfort",
        lookFor: "Suffering is not detached from God; He comforts us in all our affliction.",
        focus: "3-7",
      },
    ],
    points: [
      {
        heading: "Evil entered through human rebellion, not from God",
        body:
          "The world God made was good: 'God saw everything that he had made, and, behold, it was very good.' Sin and its curse entered through Adam's disobedience, and 'sin entered into the world through one man, and death through sin.' Suffering is an intruder into a good creation, not God's original design.",
        verses: ["Genesis 1:31", "Genesis 3:17-19", "Romans 5:12"],
      },
      {
        heading: "Much suffering is not punishment for personal sin",
        body:
          "When asked about a man born blind, Jesus said plainly: 'Neither did this man sin, nor his parents, but that the works of God might be revealed in him.' The world is broken, and 'time and chance happen to them all.' Not every pain is a verdict.",
        verses: ["John 9:2-3", "Ecclesiastes 9:11", "Matthew 5:45"],
      },
      {
        heading: "God works even through evil for good",
        body:
          "Joseph, betrayed and imprisoned, said of his brothers: 'As for you, you meant evil against me, but God meant it for good.' Paul assures us that 'all things work together for good for those who love God.' Suffering, to the believer, is never outside God's redeeming hand.",
        verses: ["Genesis 50:20", "Romans 8:28", "Romans 5:3-5"],
      },
      {
        heading: "God shares our suffering in Christ",
        body:
          "We do not serve a distant God. He was 'a man of suffering, and acquainted with disease'; He 'wept' at Lazarus's tomb; He is not a High Priest who 'can't be touched with the feeling of our infirmities,' having been tempted as we are. He is 'God of all comfort, who comforts us in all our affliction.'",
        verses: ["Isaiah 53:3", "John 11:35", "Hebrews 4:15", "2 Corinthians 1:3-4"],
      },
      {
        heading: "Suffering is not forever, and it is not meaningless",
        body:
          "One day God 'will wipe away from them every tear… Death will be no more; neither will there be mourning, nor crying, nor pain, any more.' Our present suffering works for us 'an eternal weight of glory' far beyond all comparison. The story does not end in the valley.",
        verses: ["Revelation 21:4", "2 Corinthians 4:17", "1 Peter 5:10", "Romans 8:18"],
      },
    ],
    keyVerses: ["Romans 8:28", "Genesis 50:20", "2 Corinthians 1:3-4", "Revelation 21:4"],
    raises: ["is-god-in-control", "where-is-god-in-my-pain", "what-does-it-look-like-to-suffer-well", "how-do-i-help-a-friend-who-is-suffering"],
    followsFrom: ["what-does-it-mean-that-the-world-hates-jesus"],
    related: ["who-is-the-father", "where-is-jesus-now", "why-does-god-seem-silent"],
    planned: [],
    order: 27,
  },

  {
    slug: "is-god-in-control",
    question: "Is God really in control?",
    category: "suffering-will",
    summary:
      "Yes. God rules over all things as sovereign Lord, working all things after the counsel of His will. Nothing happens outside His knowledge or permission, and even rebellion and evil are pressed into the service of His good purposes.",
    passages: [
      {
        book: "Daniel",
        chapter: 4,
        title: "The Most High rules",
        lookFor: "Nebuchadnezzar's confession: He does according to His will; none can stay His hand.",
        focus: "34-35",
      },
      {
        book: "Ephesians",
        chapter: 1,
        title: "The counsel of His will",
        lookFor: "God works all things according to the purpose of His will.",
        focus: "3-14",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "The cross, planned",
        lookFor: "Even the crucifixion was 'by the determined counsel and foreknowledge of God.'",
        focus: "22-24",
      },
      {
        book: "Matthew",
        chapter: 10,
        title: "The Father's care",
        lookFor: "Not a sparrow falls apart from your Father, and you are of more value.",
        focus: "28-31",
      },
    ],
    points: [
      {
        heading: "God rules over all",
        body:
          "'He does according to his will in the army of heaven and among the inhabitants of the earth; and no one can stay his hand, or ask him, What are you doing?' The final word in the universe is not chance or fate; it is God's sovereign rule.",
        verses: ["Daniel 4:34-35", "Psalm 115:3", "Isaiah 46:9-10"],
      },
      {
        heading: "He works all things according to His will",
        body:
          "We were 'foreordained according to the purpose of him who works all things after the counsel of his will.' From Him and through Him and to Him are all things; the whole course of history answers to His purpose.",
        verses: ["Ephesians 1:11", "Romans 11:36", "Proverbs 21:1"],
      },
      {
        heading: "He is sovereign even over evil and the cross",
        body:
          "The worst event in history was also the most planned: Jesus was 'delivered up by the determined counsel and foreknowledge of God,' and 'whatever your hand and your council foreordained to happen'; that took place. Evil is real, but it is never outside God's control and is always within His purpose.",
        verses: ["Acts 2:23", "Acts 4:27-28", "Genesis 50:20"],
      },
      {
        heading: "He is not a distant tyrant; He is a Father who cares",
        body:
          "Jesus grounds God's sovereignty in love: 'The very hairs of your head are all numbered. Therefore don't be afraid.' Not a sparrow falls apart from your Father, and 'you are of more value than many sparrows.' His control over the universe is exercised with a Father's heart for you.",
        verses: ["Matthew 10:29-31", "Psalm 139:16", "Romans 8:28"],
      },
      {
        heading: "His control is our anchor",
        body:
          "'All things work together for good for those who love God, to those who are called according to his purpose.' The sovereignty that can seem frightening becomes our deepest comfort: nothing can finally touch us that is not first passed through the loving, purposeful hand of our Father.",
        verses: ["Romans 8:28", "Lamentations 3:37-38", "Ephesians 1:12"],
      },
    ],
    keyVerses: ["Ephesians 1:11", "Daniel 4:35", "Romans 8:28", "Matthew 10:29-31"],
    raises: ["how-do-i-know-gods-will", "do-my-choices-matter", "does-god-change-his-mind"],
    followsFrom: ["why-does-god-allow-suffering"],
    related: ["who-is-the-father", "why-does-god-allow-suffering"],
    planned: ["What does it mean that God is faithful?"],
    order: 28,
  },

  {
    slug: "how-do-i-know-gods-will",
    question: "How do I know God's will?",
    category: "suffering-will",
    summary:
      "God's will is first and foremost revealed: in Scripture, in Christ, and through the Spirit. For daily decisions He guides through His Word, wisdom, godly counsel, prayer, and open doors, and He promises to make the path plain to those who trust and acknowledge Him.",
    passages: [
      {
        book: "Psalm",
        chapter: 119,
        title: "A lamp to my feet",
        lookFor: "God's word is the sure light on the path: start with what He has already said.",
        focus: "105-112",
      },
      {
        book: "Romans",
        chapter: 12,
        title: "Discerning God's will",
        lookFor: "Be transformed by the renewing of your mind, that you may prove the will of God.",
        focus: "1-2",
      },
      {
        book: "Proverbs",
        chapter: 3,
        title: "Trust, and He will direct",
        lookFor: "In all your ways acknowledge Him, and He will make your paths straight.",
        focus: "5-8",
      },
      {
        book: "James",
        chapter: 1,
        title: "Ask for wisdom",
        lookFor: "If any lacks wisdom, let him ask of God, who gives generously and without reproach.",
        focus: "5-8",
      },
    ],
    points: [
      {
        heading: "God's moral will is already revealed: in the Word",
        body:
          "Your word is 'a lamp to my feet and a light for my path.' The Scriptures 'are able to make you wise for salvation' and make us 'thoroughly equipped for every good work.' What God has already said is the sure foundation for knowing what He wants; 'the secret things belong to Yahweh our God, but the things that are revealed belong to us.'",
        verses: ["Psalm 119:105", "2 Timothy 3:16-17", "Deuteronomy 29:29"],
      },
      {
        heading: "His will for your character is clear",
        body:
          "'This is the will of God: your sanctification.' Rejoice always, pray without ceasing, give thanks in all circumstances: 'for this is the will of God in Christ Jesus toward you.' Much of what we call guidance is simply obedience to what God has already plainly commanded.",
        verses: ["1 Thessalonians 4:3", "1 Thessalonians 5:16-18", "1 Peter 2:15"],
      },
      {
        heading: "Be transformed, and you will discern it",
        body:
          "Don't be conformed to this world, but be transformed by the renewing of your mind, 'that you may prove what is the good, well-pleasing, and perfect will of God.' The mind renewed by the Spirit and the Word is the mind that learns to sense God's direction.",
        verses: ["Romans 12:2", "Psalm 25:12", "Colossians 1:9"],
      },
      {
        heading: "Ask for wisdom: He gives it generously",
        body:
          "'If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him.' Trust in the Lord with all your heart, lean not on your own understanding; in all your ways acknowledge Him, and He will make your paths straight.",
        verses: ["James 1:5", "Proverbs 3:5-6", "Proverbs 16:3"],
      },
      {
        heading: "Trust and walk, not fear and freeze",
        body:
          "God leads those who are walking, not those paralyzed by the fear of choosing wrong: 'Your ears will hear a voice behind you, saying, This is the way, walk in it.' He guides with His eye upon us, step by step, as we follow Him. If the Lord wills, you will do this or that.",
        verses: ["Isaiah 30:21", "Psalm 32:8", "James 4:15", "Galatians 5:25"],
      },
    ],
    keyVerses: ["Psalm 119:105", "Romans 12:2", "James 1:5", "Proverbs 3:5-6"],
    raises: ["what-if-i-make-the-wrong-decision", "does-god-have-one-plan-for-my-marriage", "how-do-i-balance-planning-with-trusting-god"],
    followsFrom: ["is-god-in-control"],
    related: ["what-should-i-do-now-that-im-saved", "who-is-the-holy-spirit"],
    planned: ["What is the difference between wise planning and worry?"],
    order: 29,
  },

  // ------------------------------------------------------------------
  // TRAIL: Prayer
  // ------------------------------------------------------------------
  {
    slug: "how-do-i-pray",
    question: "How do I pray?",
    category: "prayer",
    summary:
      "Prayer is simply talking with God through Jesus Christ, with the Spirit's help, trusting that He hears. Jesus gave us the shape of it in the Lord's Prayer: address God as Father, praise Him, ask for daily bread, forgiveness, and deliverance, and trust Him with the outcome.",
    passages: [
      { book: "Matthew", chapter: 6, title: "Jesus teaches us to pray", lookFor: "The model prayer and the warnings against showy praying.", focus: "5-13" },
      { book: "Luke", chapter: 11, title: "The disciples ask to be taught", lookFor: "Ask, seek, knock: the Father gives good gifts to those who ask.", focus: "1-13" },
      { book: "Philippians", chapter: 4, title: "Prayer and peace", lookFor: "In everything, with thanksgiving, and the peace of God guards the heart.", focus: "4-7" },
      { book: "1 Thessalonians", chapter: 5, title: "Pray without ceasing", lookFor: "Prayer woven into the whole of life, not a slot on the schedule.", focus: "16-18" },
    ],
    points: [
      {
        heading: "Prayer is conversation with a Father, not a performance",
        body: "Jesus warns us not to pray to be seen by others: go into your room, shut the door, and pray to your Father who sees in secret. He assumes we will pray; He simply tells us how not to corrupt it.",
        verses: ["Matthew 6:5-6", "Matthew 6:7-8"],
      },
      {
        heading: "The Spirit helps us pray",
        body: "We often do not know how to pray as we should, but the Spirit Himself intercedes for us with groanings too deep for words. And Jesus invites us to ask the Father in His name, promising that He will give what we ask.",
        verses: ["Romans 8:26-27", "John 14:13-14"],
      },
      {
        heading: "Pray with thanksgiving, and peace guards your heart",
        body: "In everything, by prayer and supplication with thanksgiving, let your requests be made known to God, and the peace of God, which surpasses all understanding, will guard your hearts and minds in Christ Jesus.",
        verses: ["Philippians 4:6-7", "1 Thessalonians 5:17-18"],
      },
      {
        heading: "Persist; He invites asking",
        body: "Jesus says ask, seek, knock, for everyone who asks receives, and how much more will the heavenly Father give the Holy Spirit to those who ask Him. He told a parable that we should always pray and not lose heart.",
        verses: ["Luke 11:9-13", "Luke 18:1"],
      },
    ],
    keyVerses: ["Matthew 6:9-13", "Philippians 4:6-7", "Romans 8:26-27", "Luke 11:9"],
    raises: ["what-does-the-lords-prayer-teach", "does-god-hear-my-prayers", "what-is-fasting", "to-whom-do-we-direct-our-prayers"],
    followsFrom: [],
    related: ["who-is-the-father", "what-should-i-do-now-that-im-saved"],
    planned: ["What is the relationship between prayer and giving?"],
    order: 30,
  },

  {
    slug: "what-does-the-lords-prayer-teach",
    question: "What does the Lord's Prayer teach?",
    category: "prayer",
    summary:
      "The prayer Jesus gave us is a pattern for all prayer: it begins with God (His name, His kingdom, His will), then brings our needs (daily bread, forgiveness, protection), and ends in praise. It teaches us what to pray for and how to pray for it, simply, trustingly, together.",
    passages: [
      { book: "Matthew", chapter: 6, title: "The model prayer", lookFor: "God first, then our needs, then praise.", focus: "9-13" },
      { book: "Luke", chapter: 11, title: "The same prayer, shorter", lookFor: "Jesus gives it again, even more briefly, in Luke.", focus: "1-4" },
    ],
    points: [
      {
        heading: "It starts with God, not us",
        body: "Our Father in heaven, hallowed be your name. We come as children to a Father, and we begin with His glory, not our agenda. Prayer puts God first, and then everything else falls into place.",
        verses: ["Matthew 6:9", "John 17:1"],
      },
      {
        heading: "His kingdom and His will come first",
        body: "Your kingdom come, your will be done, on earth as it is in heaven. Prayer aligns us with God's purposes before it asks anything for ourselves, and Jesus Himself modeled it in the garden: not my will, but yours.",
        verses: ["Matthew 6:10", "Matthew 26:39"],
      },
      {
        heading: "Daily bread: honest dependence",
        body: "Give us today our daily bread. Not hoarding, not anxiety, just enough for today, received from His hand. It is a request for provision and a discipline against worry in one.",
        verses: ["Matthew 6:11", "Matthew 6:25-26"],
      },
      {
        heading: "Forgiveness received and given",
        body: "Forgive us our debts, as we also forgive our debtors. Jesus underlines it: if you forgive others, your heavenly Father will also forgive you. The measure of our own forgiveness is the mercy we extend.",
        verses: ["Matthew 6:12", "Matthew 6:14-15", "Ephesians 4:32"],
      },
      {
        heading: "Deliverance and praise",
        body: "Lead us not into temptation, but deliver us from evil, for yours is the kingdom, the power, and the glory. It ends where it began: with God. He is able to keep us, and to Him belongs the praise.",
        verses: ["Matthew 6:13", "1 Corinthians 10:13"],
      },
    ],
    keyVerses: ["Matthew 6:9-13", "Luke 11:2-4"],
    raises: ["why-pray-your-will-be-done", "what-does-it-mean-to-pray-in-the-holy-spirit"],
    followsFrom: ["how-do-i-pray"],
    related: ["how-do-i-pray"],
    planned: ["How do I pray when I don't know what to say?"],
    order: 31,
  },

  {
    slug: "does-god-hear-my-prayers",
    question: "Does God really hear my prayers?",
    category: "prayer",
    summary:
      "Yes. Because of Jesus, believers pray with bold confidence that God hears them, not on the basis of their own worthiness but on the basis of Christ's. Scripture also calls us to pray in faith, in His will, with unconfessed sin dealt with, and with hearts that do not ask selfishly.",
    passages: [
      { book: "1 John", chapter: 5, title: "The confidence we have", lookFor: "If we ask anything according to his will, he hears us.", focus: "13-15" },
      { book: "John", chapter: 16, title: "Ask in my name", lookFor: "Asked in Jesus' name, so that your joy may be full.", focus: "23-24" },
      { book: "Hebrews", chapter: 4, title: "The throne of grace", lookFor: "Draw near with boldness to receive mercy and find grace.", focus: "14-16" },
      { book: "Psalm", chapter: 66, title: "If I had cherished sin", lookFor: "The heart that prays: purity and honesty before God.", focus: "16-20" },
    ],
    points: [
      {
        heading: "He hears those who come through Christ",
        body: "This is the confidence we have in Him: if we ask anything according to His will, He hears us, and if we know He hears us, we know we have what we asked. Because of Jesus we draw near to the throne of grace with boldness, to receive mercy and find grace to help in time of need.",
        verses: ["1 John 5:14-15", "Hebrews 4:16"],
      },
      {
        heading: "Ask in His name, and He answers with joy",
        body: "Whatever you ask the Father in my name, He will give you. Ask, and you will receive, that your joy may be made full. To ask in His name is to ask according to who He is and what He wants, and the Father delights to answer that.",
        verses: ["John 16:23-24", "John 15:7", "John 14:13-14"],
      },
      {
        heading: "Hindrances are real: unconfessed sin and selfish motives",
        body: "If I cherished sin in my heart, the Lord would not listen. You ask and do not receive, because you ask wrongly, to spend it on your pleasures. The Lord's hand is not too short to save, but your iniquities have made a separation.",
        verses: ["Psalm 66:18", "James 4:3", "Isaiah 59:1-2"],
      },
      {
        heading: "Faith and persistence are the posture",
        body: "Let him ask in faith, without doubting. Whatever you ask in prayer, believe that you have received it, and it will be yours. We keep what we ask in alignment with God's revealed will, and we ask in faith, because He rewards those who seek Him.",
        verses: ["James 1:6-7", "Mark 11:24", "1 John 3:22"],
      },
    ],
    keyVerses: ["1 John 5:14-15", "John 16:23-24", "Hebrews 4:16", "James 4:3"],
    raises: ["why-does-god-seem-silent", "what-does-it-mean-to-pray-in-jesus-name"],
    followsFrom: ["how-do-i-pray"],
    related: ["who-is-the-father"],
    planned: ["What does it mean to pray in faith?"],
    order: 32,
  },

  {
    slug: "why-does-god-seem-silent",
    question: "Why does God seem silent when I pray?",
    category: "prayer",
    summary:
      "God's silence is not His absence. Scripture shows that His delays are purposeful: He grows our faith, purifies our desires, and readies us for answers better than we asked. The Psalms model honest waiting, and Jesus taught that persistent prayer is rewarded.",
    passages: [
      { book: "Psalm", chapter: 13, title: "How long, Lord?", lookFor: "Honest complaint that ends in trust." },
      { book: "Luke", chapter: 18, title: "The persistent widow", lookFor: "Always pray and do not lose heart.", focus: "1-8" },
      { book: "Habakkuk", chapter: 2, title: "Wait for the vision", lookFor: "It will surely come; it will not delay.", focus: "1-3" },
      { book: "2 Corinthians", chapter: 12, title: "My grace is sufficient", lookFor: "Paul asked three times, and received a better answer.", focus: "7-10" },
    ],
    points: [
      {
        heading: "Silence is not absence; the Psalms say so",
        body: "How long, Lord? Will you forget me forever? Even the psalmist felt God's distance. But the psalm does not end in the silence; it ends in trust: I have trusted in your loving kindness; my heart will rejoice in your salvation.",
        verses: ["Psalm 13:1-2", "Psalm 13:5-6", "Psalm 22:1-2"],
      },
      {
        heading: "Sometimes the answer is wait, or no, I have something better",
        body: "The vision awaits its appointed time; though it tarries, wait for it, for it will surely come. Paul asked three times to remove the thorn, and the answer was: my grace is sufficient for you. A no can be a deeper yes.",
        verses: ["Habakkuk 2:3", "2 Corinthians 12:8-9", "Isaiah 55:8-9"],
      },
      {
        heading: "Delay grows faith and purifies desire",
        body: "Wait for the Lord; be strong, and let your heart take courage. The testing of your faith produces steadfastness, so that you may be perfect and complete. God often works in the waiting, not just in the answer.",
        verses: ["Psalm 27:14", "James 1:2-4", "1 Peter 1:6-7"],
      },
      {
        heading: "Persist, like the widow",
        body: "Jesus told a parable to show that we should always pray and not give up, and He reasoned from the lesser to the greater: if the unjust judge grants justice, will not God bring about justice for His elect who cry to Him day and night? Keep knocking.",
        verses: ["Luke 18:1-8", "Luke 11:5-8", "Matthew 7:7-8"],
      },
    ],
    keyVerses: ["Psalm 27:14", "Luke 18:1-8", "2 Corinthians 12:9", "Habakkuk 2:3"],
    raises: ["gods-voice-or-my-own-thoughts", "does-god-still-speak-today"],
    followsFrom: ["does-god-hear-my-prayers"],
    related: ["why-does-god-allow-suffering", "is-god-in-control"],
    planned: ["What should I do when God feels distant?"],
    order: 33,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Word of God
  // ------------------------------------------------------------------
  {
    slug: "can-i-trust-the-bible",
    question: "Can I trust the Bible?",
    category: "word-of-god",
    summary:
      "Yes. Scripture claims to be God's own word, and its testimony holds up: it is consistent across centuries and authors, historically grounded, confirmed by Christ Himself, and it has proven true in the lives of countless people. Jesus said heaven and earth will pass away, but His words will not.",
    passages: [
      { book: "2 Timothy", chapter: 3, title: "God-breathed Scripture", lookFor: "All Scripture is God-breathed and profitable for every good work.", focus: "14-17" },
      { book: "2 Peter", chapter: 1, title: "Men spoke from God", lookFor: "No prophecy came by human will, but men spoke from God as they were carried by the Spirit.", focus: "16-21" },
      { book: "Psalm", chapter: 19, title: "The testimony of the Lord", lookFor: "Perfect, sure, right, pure: the excellence of God's word.", focus: "7-11" },
      { book: "Matthew", chapter: 24, title: "His words will not pass away", lookFor: "Jesus' own verdict on the permanence of His word.", focus: "35" },
    ],
    points: [
      {
        heading: "Scripture claims to be God's word",
        body: "All Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for training in righteousness. No prophecy of Scripture came by the will of man, but men spoke from God, being carried along by the Holy Spirit.",
        verses: ["2 Timothy 3:16-17", "2 Peter 1:20-21"],
      },
      {
        heading: "Christ Himself trusted it",
        body: "Heaven and earth will pass away, but my words will not pass away. Jesus called Scripture the word of God and said it cannot be broken, and He continually grounded Himself in it, from the wilderness to the cross.",
        verses: ["Matthew 24:35", "John 10:35", "Luke 24:44-45"],
      },
      {
        heading: "Its testimony is coherent and true",
        body: "The law of the Lord is perfect, restoring the soul; the testimony of the Lord is sure, making wise the simple. The words of the Lord are pure words, like silver refined in a furnace. Every word of God proves true.",
        verses: ["Psalm 19:7-9", "Psalm 12:6", "Proverbs 30:5"],
      },
      {
        heading: "It is profitable for real life",
        body: "The sacred writings are able to make you wise for salvation through faith in Christ Jesus, and they equip the man of God for every good work. The word of God is living and active, sharper than any two-edged sword, discerning the thoughts of the heart.",
        verses: ["2 Timothy 3:15-17", "Hebrews 4:12", "1 Peter 1:23-25"],
      },
    ],
    keyVerses: ["2 Timothy 3:16-17", "Matthew 24:35", "2 Peter 1:21", "Psalm 19:7"],
    raises: ["how-should-i-read-the-bible", "is-the-whole-bible-about-jesus", "why-do-bible-translations-differ", "how-was-the-bible-written-down", "how-do-we-know-which-books-belong-in-the-bible", "did-jesus-treat-scripture-as-final"],
    followsFrom: [],
    related: [],
    planned: [],
    order: 34,
  },

  {
    slug: "how-should-i-read-the-bible",
    question: "How should I read the Bible?",
    category: "word-of-god",
    summary:
      "Read it to know God, not just to gain knowledge: pray for understanding, read the whole counsel of God, look for Jesus, obey what you learn, and be like the Bereans, who searched the Scriptures daily to check what they heard.",
    passages: [
      { book: "Acts", chapter: 17, title: "The Bereans", lookFor: "They received the word eagerly and searched the Scriptures daily.", focus: "10-12" },
      { book: "Luke", chapter: 24, title: "Jesus opens the Scriptures", lookFor: "Beginning with Moses and the prophets, he explained what concerned himself.", focus: "25-27" },
      { book: "2 Timothy", chapter: 2, title: "Rightly handling the word", lookFor: "Be diligent, approved, rightly handling the word of truth.", focus: "15" },
      { book: "Psalm", chapter: 119, title: "Open my eyes", lookFor: "Wonderful things from God's law, and a lamp for the path.", focus: "9-18" },
    ],
    points: [
      {
        heading: "Read to know the God who speaks",
        body: "You search the Scriptures because you think that in them you have eternal life, and these are they which testify about me. Jesus is the goal of the Book. Open my eyes, that I may see wonderful things out of your law.",
        verses: ["John 5:39", "Psalm 119:18"],
      },
      {
        heading: "Come with humility and prayer",
        body: "If any of you lacks wisdom, let him ask of God, who gives generously to all. Be diligent to present yourself approved to God, a worker who doesn't need to be ashamed, rightly handling the word of truth.",
        verses: ["James 1:5", "2 Timothy 2:15", "Psalm 119:105"],
      },
      {
        heading: "Look for Jesus on every page",
        body: "Beginning with Moses and all the prophets, Jesus explained to them what was in all the Scriptures concerning Himself. The prophets searched and inquired carefully about this salvation that was to come, revealed in Christ.",
        verses: ["Luke 24:27", "1 Peter 1:10-12", "Colossians 1:28"],
      },
      {
        heading: "Be a Berean: search and verify",
        body: "The Bereans received the word with all eagerness, examining the Scriptures daily to see whether these things were so. Test all things; hold fast that which is good. What you hear from any teacher is checked against the Word.",
        verses: ["Acts 17:11", "1 Thessalonians 5:21", "2 Timothy 3:16"],
      },
      {
        heading: "Do what it says",
        body: "Be doers of the word, and not hearers only, deceiving your own selves. The blessing is not in the reading but in the doing, for blessed are those who hear the word of God and keep it.",
        verses: ["James 1:22-25", "Luke 11:28", "John 14:21"],
      },
    ],
    keyVerses: ["Acts 17:11", "Luke 24:27", "2 Timothy 2:15", "James 1:22"],
    raises: ["daily-habit-of-reading-the-bible", "what-does-it-mean-to-meditate-on-scripture", "what-is-the-difference-between-reading-and-studying-the-bible"],
    followsFrom: ["can-i-trust-the-bible"],
    related: ["can-i-trust-the-bible", "what-should-i-do-now-that-im-saved"],
    planned: [],
    order: 35,
  },

  {
    slug: "is-the-whole-bible-about-jesus",
    question: "Is the whole Bible about Jesus?",
    category: "word-of-god",
    summary:
      "Jesus Himself said so: the Scriptures testify of Him, and He explained how Moses and all the prophets pointed to Him. The Old Testament prepares His coming through promise, type, and prophecy, and the New Testament declares that all the promises are yes in Christ.",
    passages: [
      { book: "Luke", chapter: 24, title: "He explained the Scriptures", lookFor: "Everything written about me must be fulfilled.", focus: "13-27" },
      { book: "John", chapter: 5, title: "The Scriptures testify of me", lookFor: "If you believed Moses, you would believe me.", focus: "39-47" },
      { book: "Hebrews", chapter: 1, title: "Spoken by the Son", lookFor: "God spoke by the prophets, and in these last days by His Son.", focus: "1-2" },
      { book: "2 Corinthians", chapter: 1, title: "Yes in him", lookFor: "Every promise of God is 'Yes' in Christ.", focus: "18-20" },
    ],
    points: [
      {
        heading: "Jesus said the Scriptures are about Him",
        body: "You search the Scriptures, and these are they which testify about me. Beginning from Moses and all the prophets, He interpreted the things concerning Himself, and He said everything written about Him must be fulfilled.",
        verses: ["John 5:39", "Luke 24:27", "Luke 24:44"],
      },
      {
        heading: "The Old Testament promised Him",
        body: "The offspring of the woman who bruises the serpent's head, the suffering Servant pierced for our transgressions, the King born in Bethlehem: God spoke long ago through the prophets, but in these last days He has spoken to us by His Son.",
        verses: ["Genesis 3:15", "Isaiah 53:5", "Hebrews 1:1-2"],
      },
      {
        heading: "The New Testament declares the promises are fulfilled",
        body: "All the promises of God find their 'Yes' in him. Philip could say, we have found him of whom Moses and the prophets wrote. The apostles preached that the words of the prophets were fulfilled in Jesus.",
        verses: ["2 Corinthians 1:20", "John 1:45", "Acts 13:27-29"],
      },
      {
        heading: "Why it matters: the whole Bible is God's testimony to Christ",
        body: "The prophets searched out the grace that was to come to you, which has now been revealed in the gospel preached through the Spirit. Christ in you, the hope of glory: the Book is one story, and He is the center of it.",
        verses: ["1 Peter 1:10-12", "Colossians 1:27", "John 20:31"],
      },
    ],
    keyVerses: ["Luke 24:27", "John 5:39", "2 Corinthians 1:20", "Genesis 3:15"],
    raises: ["how-do-i-find-christ-in-the-old-testament"],
    followsFrom: ["can-i-trust-the-bible"],
    related: ["who-is-jesus", "what-is-the-gospel"],
    planned: ["What are the greatest promises God made before Christ?"],
    order: 36,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Church
  // ------------------------------------------------------------------
  {
    slug: "why-do-i-need-the-church",
    question: "Why do I need the church?",
    category: "church",
    summary:
      "The church is not optional for the Christian: it is the family and body of Christ, the place where the Spirit works through word and sacrament, where gifts serve the whole, and where believers are built up and sent out. Lone Christianity is not biblical Christianity.",
    passages: [
      { book: "Hebrews", chapter: 10, title: "Do not forsake the gathering", lookFor: "Encourage one another, and all the more as the day approaches.", focus: "19-25" },
      { book: "Ephesians", chapter: 4, title: "The body grows in love", lookFor: "Each part working, the whole body builds itself up in love.", focus: "11-16" },
      { book: "Acts", chapter: 2, title: "The church at the start", lookFor: "Devoted to teaching, fellowship, the breaking of bread, and prayer.", focus: "42-47" },
      { book: "1 Corinthians", chapter: 12, title: "One body, many members", lookFor: "You are the body of Christ, and each one of you is a part of it.", focus: "12-27" },
    ],
    points: [
      {
        heading: "The church is the body of Christ",
        body: "You are the body of Christ, and members individually. We who are many are one body in Christ, and individually members of one another. The church is not a building or a meeting; it is the people in whom Christ dwells by His Spirit.",
        verses: ["1 Corinthians 12:27", "Romans 12:4-5", "Ephesians 1:22-23"],
      },
      {
        heading: "We need each other to grow",
        body: "The whole body grows and builds itself up in love as each part does its work. Do not forsake the assembling of yourselves together, but encourage one another, and all the more as you see the day approaching. Growth is communal.",
        verses: ["Ephesians 4:15-16", "Hebrews 10:24-25"],
      },
      {
        heading: "God's gifts are given for the church",
        body: "As each has received a gift, use it to serve one another, as good stewards of God's varied grace. To each is given the manifestation of the Spirit for the common good. Your gift was given to build the body, not to sit unused.",
        verses: ["1 Peter 4:10", "1 Corinthians 12:7", "Ephesians 4:12"],
      },
      {
        heading: "It is where the new life is lived out",
        body: "They devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and prayer. And the Lord added to the assembly day by day those who were being saved. The new life is lived together.",
        verses: ["Acts 2:42", "Acts 2:46-47", "Colossians 3:16"],
      },
    ],
    keyVerses: ["Hebrews 10:24-25", "Ephesians 4:15-16", "Acts 2:42", "1 Corinthians 12:27"],
    raises: ["what-is-baptism", "what-is-the-lords-supper", "what-is-a-healthy-church", "what-is-church-discipline"],
    followsFrom: ["made-for-relationship"],
    related: ["what-should-i-do-now-that-im-saved"],
    planned: [],
    order: 37,
  },

  {
    slug: "what-is-baptism",
    question: "What is baptism?",
    category: "church",
    summary:
      "Baptism is the sign and seal of the new covenant: the believer, having trusted Christ, is immersed into His death and resurrection, publicly identifying with Him and being joined to His people. It is commanded by Jesus and received through faith, not a way of earning salvation.",
    passages: [
      { book: "Matthew", chapter: 28, title: "Jesus commands baptism", lookFor: "Baptizing them in the name of the Father, Son, and Holy Spirit.", focus: "16-20" },
      { book: "Romans", chapter: 6, title: "Baptized into his death", lookFor: "Buried with him in baptism, raised to walk in newness of life.", focus: "1-14" },
      { book: "Acts", chapter: 2, title: "Repent and be baptized", lookFor: "The gift of the Spirit and the forgiveness of sins.", focus: "37-41" },
      { book: "Acts", chapter: 8, title: "The Ethiopian", lookFor: "See, here is water; what prevents me from being baptized?", focus: "26-40" },
    ],
    points: [
      {
        heading: "Jesus commanded it",
        body: "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. The early church obeyed immediately, baptizing three thousand on the day of Pentecost, and the Ethiopian asked for baptism the moment he believed.",
        verses: ["Matthew 28:19", "Acts 2:41", "Acts 8:36", "Acts 8:38"],
      },
      {
        heading: "It pictures union with Christ",
        body: "We who were baptized into Christ Jesus were baptized into his death, so that just as Christ was raised from the dead, we too might walk in newness of life. It is the visible picture of dying with Him and rising with Him.",
        verses: ["Romans 6:3-5", "Colossians 2:12", "Galatians 3:27"],
      },
      {
        heading: "It is the response of faith, not the work that saves",
        body: "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit. We are saved by grace through faith, not by works; baptism is the believer's obedient confession of that grace.",
        verses: ["Acts 2:38", "Ephesians 2:8-9", "1 Peter 3:21"],
      },
      {
        heading: "It joins you visibly to God's people",
        body: "Those who received his word were baptized, and there were added that day about three thousand souls. By one Spirit we were all baptized into one body. Baptism is not a private event; it is the doorway into the visible church.",
        verses: ["Acts 2:41", "1 Corinthians 12:13", "Acts 2:47"],
      },
    ],
    keyVerses: ["Matthew 28:19", "Romans 6:3-5", "Acts 2:38", "1 Peter 3:21"],
    raises: ["who-should-be-baptized", "what-is-the-difference-between-baptism-and-the-lords-supper"],
    followsFrom: ["why-do-i-need-the-church"],
    related: ["what-does-it-mean-to-be-born-again", "how-do-i-receive-the-holy-spirit"],
    planned: [],
    order: 38,
  },

  {
    slug: "what-is-the-lords-supper",
    question: "What is the Lord's Supper?",
    category: "church",
    summary:
      "The Lord's Supper is the meal Jesus gave His church in remembrance of Him: the bread and the cup proclaim His death until He comes, and believers share it in faith, examining themselves, receiving Christ, and renewing communion with Him and with one another.",
    passages: [
      { book: "Luke", chapter: 22, title: "Instituted by Jesus", lookFor: "This is my body, given for you; this cup is the new covenant in my blood.", focus: "14-20" },
      { book: "1 Corinthians", chapter: 11, title: "Proclaim the Lord's death", lookFor: "Examine yourself, and eat and drink in remembrance of him.", focus: "23-34" },
      { book: "Matthew", chapter: 26, title: "At the Last Supper", lookFor: "Until that day when I drink it anew with you in my Father's kingdom.", focus: "26-29" },
    ],
    points: [
      {
        heading: "Jesus instituted it at the Last Supper",
        body: "This is my body, which is given for you. Do this in remembrance of me. And he took the cup, saying, this cup is the new covenant in my blood, which is poured out for you. It is His gift to the church, given the night He was betrayed.",
        verses: ["Luke 22:19-20", "Matthew 26:26-28"],
      },
      {
        heading: "It proclaims the gospel",
        body: "As often as you eat this bread and drink this cup, you proclaim the Lord's death until he comes. It is a sermon in bread and wine, declaring the cross to ourselves, to the church, and to the watching world.",
        verses: ["1 Corinthians 11:26", "1 Corinthians 11:23-25"],
      },
      {
        heading: "It requires self-examination",
        body: "Whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of the body and blood of the Lord. Let a man examine himself, and so let him eat and drink. We come repentant, not perfect, but honest.",
        verses: ["1 Corinthians 11:27-29", "1 Corinthians 11:31"],
      },
      {
        heading: "It is communion with Christ and His people",
        body: "The cup of blessing which we bless, is it not a sharing of the blood of Christ? We, who are many, are one bread, one body, for we all partake of the one bread. It is a family meal around the one Table.",
        verses: ["1 Corinthians 10:16-17", "Acts 2:42"],
      },
    ],
    keyVerses: ["1 Corinthians 11:23-26", "Luke 22:19-20", "1 Corinthians 11:28"],
    raises: ["how-often-the-lords-supper", "who-may-take-the-lords-supper"],
    followsFrom: ["why-do-i-need-the-church"],
    related: ["why-do-i-need-the-church", "what-is-the-gospel"],
    planned: [],
    order: 39,
  },

  // ------------------------------------------------------------------
  // TRAIL: Our Hope
  // ------------------------------------------------------------------
  {
    slug: "what-happens-when-i-die",
    question: "What happens when I die?",
    category: "our-hope",
    summary:
      "For the believer, to die is to be with Christ: Scripture speaks of departing to be with Him as far better, and of being at home with the Lord. Then at His return comes the resurrection of the body. For those who reject Christ, death is separation, and judgment awaits.",
    passages: [
      { book: "2 Corinthians", chapter: 5, title: "At home with the Lord", lookFor: "Absent from the body, at home with the Lord.", focus: "1-9" },
      { book: "Philippians", chapter: 1, title: "To die is gain", lookFor: "To depart and be with Christ, which is far better.", focus: "19-24" },
      { book: "Luke", chapter: 23, title: "Today in paradise", lookFor: "Jesus' promise to the thief on the cross.", focus: "39-43" },
      { book: "Hebrews", chapter: 9, title: "Appointed once to die", lookFor: "After this, judgment: the solemnity of death.", focus: "27-28" },
    ],
    points: [
      {
        heading: "To be absent from the body is to be at home with the Lord",
        body: "We are always confident, and are willing rather to be absent from the body and at home with the Lord. For me to live is Christ, and to die is gain: my desire is to depart and be with Christ, which is far better.",
        verses: ["2 Corinthians 5:6-8", "Philippians 1:21-23"],
      },
      {
        heading: "Christ holds His own through death",
        body: "I am the resurrection and the life. Whoever believes in me will live even if he dies. Jesus told the dying thief, today you will be with me in paradise, and He told His disciples, I go to prepare a place for you.",
        verses: ["John 11:25-26", "Luke 23:43", "John 14:2-3"],
      },
      {
        heading: "Death is not the end of the body; the resurrection is coming",
        body: "We will all be changed, in a moment, in the twinkling of an eye, at the last trumpet, and the dead will be raised imperishable. God will bring with Jesus those who have fallen asleep in him. The body is not abandoned forever.",
        verses: ["1 Corinthians 15:51-53", "1 Thessalonians 4:14", "Romans 8:11"],
      },
      {
        heading: "For those apart from Christ, death is a solemn reality",
        body: "It is appointed for men to die once, and after this, judgment. Whoever does not believe is condemned already, because he has not believed in the name of the only Son of God. This is why the gospel is urgent.",
        verses: ["Hebrews 9:27", "John 3:18", "Revelation 20:12-13"],
      },
    ],
    keyVerses: ["2 Corinthians 5:8", "Philippians 1:21", "Luke 23:43", "Hebrews 9:27"],
    raises: ["what-is-the-resurrection", "will-jesus-return-literally", "what-is-heaven-like", "is-there-a-second-chance-after-death"],
    followsFrom: ["signs-before-jesus-returns"],
    related: ["where-is-jesus-now", "what-is-the-gospel"],
    planned: [],
    order: 40,
  },

  {
    slug: "will-jesus-return-literally",
    question: "Will Jesus return literally?",
    category: "our-hope",
    summary:
      "Yes. The New Testament promises that the same Jesus who ascended will return visibly and bodily, with power and great glory, to gather His people, raise the dead, judge the world, and bring the kingdom in full. Until then, we wait, watch, and work.",
    passages: [
      { book: "Acts", chapter: 1, title: "The promise at the ascension", lookFor: "This same Jesus will come in the same way you saw him go.", focus: "9-11" },
      { book: "1 Thessalonians", chapter: 4, title: "The Lord himself descends", lookFor: "The dead in Christ rise first, then we are caught up together to meet him.", focus: "13-18" },
      { book: "Matthew", chapter: 24, title: "The Son of Man coming", lookFor: "Coming on the clouds of heaven with power and great glory.", focus: "29-31" },
      { book: "Revelation", chapter: 1, title: "Every eye will see him", lookFor: "The one who was pierced, coming with the clouds.", focus: "7" },
    ],
    points: [
      {
        heading: "The angels promised it at the ascension",
        body: "This Jesus, who was taken up from you into heaven, will come in like manner as you saw him going into heaven: visibly, bodily, personally. The ascension was not the end of His appearing; it was the guarantee of His return.",
        verses: ["Acts 1:9-11", "Mark 13:26"],
      },
      {
        heading: "The Lord Himself will descend",
        body: "The Lord himself will descend from heaven with a shout, with the voice of the archangel and with God's trumpet. The dead in Christ will rise first, then we who are alive will be caught up together with them in the clouds, to meet the Lord in the air.",
        verses: ["1 Thessalonians 4:16-17", "1 Corinthians 15:51-52"],
      },
      {
        heading: "Every eye will see Him",
        body: "Behold, he is coming with the clouds, and every eye will see him, including those who pierced him. They will see the Son of Man coming on the clouds of heaven with power and great glory. His return is public, not private.",
        verses: ["Revelation 1:7", "Matthew 24:30", "Titus 2:13"],
      },
      {
        heading: "So we wait, watch, and work",
        body: "Since all these things will be dissolved, what kind of people ought you to be in holy conduct and godliness, waiting for the coming of the day of God? Stay awake, for you do not know on what day your Lord is coming.",
        verses: ["2 Peter 3:11-13", "Matthew 24:42", "Revelation 22:20"],
      },
    ],
    keyVerses: ["Acts 1:11", "1 Thessalonians 4:16-17", "Revelation 1:7", "2 Peter 3:12"],
    raises: ["signs-before-jesus-returns", "what-is-the-rapture"],
    followsFrom: ["what-happens-when-i-die", "where-is-jesus-now"],
    related: ["where-is-jesus-now", "what-is-the-resurrection"],
    planned: [],
    order: 41,
  },

  {
    slug: "what-is-the-resurrection",
    question: "What is the resurrection of the body?",
    category: "our-hope",
    summary:
      "The resurrection is God's raising of the believer's body to eternal life on the last day: a body like Christ's glorified body, imperishable, glorious, powerful, and spiritual. Because Christ rose as the firstfruits, those who belong to Him will rise too.",
    passages: [
      { book: "1 Corinthians", chapter: 15, title: "How are the dead raised?", lookFor: "Sown perishable, raised imperishable; sown in weakness, raised in power.", focus: "35-58" },
      { book: "Philippians", chapter: 3, title: "A body like his", lookFor: "He will transform our lowly body to be like his glorious body.", focus: "20-21" },
      { book: "Romans", chapter: 8, title: "Life to your mortal bodies", lookFor: "The Spirit who raised Jesus will give life to your bodies.", focus: "18-25" },
      { book: "John", chapter: 5, title: "Those who are in the tombs", lookFor: "A resurrection of life for those who have done good.", focus: "25-29" },
    ],
    points: [
      {
        heading: "Christ's resurrection is the firstfruits of ours",
        body: "Christ has been raised from the dead, the firstfruits of those who have fallen asleep. For as in Adam all die, so also in Christ all will be made alive. His resurrection is the guarantee and the pattern of ours.",
        verses: ["1 Corinthians 15:20-23", "Acts 26:8"],
      },
      {
        heading: "Our bodies will be raised and transformed",
        body: "He will transform the body of our humiliation to be conformed to the body of his glory. It is sown perishable, raised imperishable; sown in dishonor, raised in glory; sown in weakness, raised in power; sown a natural body, raised a spiritual body.",
        verses: ["Philippians 3:20-21", "1 Corinthians 15:42-44"],
      },
      {
        heading: "The Spirit guarantees it",
        body: "If the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you. God has given us the Spirit as a down payment.",
        verses: ["Romans 8:11", "2 Corinthians 5:4-5", "Ephesians 1:13-14"],
      },
      {
        heading: "It means death is truly defeated",
        body: "Death is swallowed up in victory. O death, where is your sting? The sting of death is sin, and the power of sin is the law, but thanks be to God, who gives us the victory through our Lord Jesus Christ. The last enemy is undone.",
        verses: ["1 Corinthians 15:54-57", "1 Corinthians 15:26", "Revelation 21:4"],
      },
    ],
    keyVerses: ["1 Corinthians 15:42-44", "Philippians 3:20-21", "Romans 8:11", "1 Corinthians 15:54-57"],
    raises: ["what-is-the-new-heaven-and-new-earth", "will-we-recognize-each-other-in-the-resurrection"],
    followsFrom: ["what-happens-when-i-die"],
    related: ["did-jesus-rise-from-the-dead"],
    planned: [],
    order: 42,
  },

  {
    slug: "what-is-the-new-heaven-and-new-earth",
    question: "What is the new heaven and new earth?",
    category: "our-hope",
    summary:
      "At the end of the story, God does not abandon creation: He renews it. The new heaven and new earth are the redeemed creation where God dwells with His people, sin and death are gone, every tear is wiped away, and the dwelling of God is with man forever.",
    passages: [
      { book: "Revelation", chapter: 21, title: "A new heaven and a new earth", lookFor: "God dwelling with men, every tear wiped away, the city that has no temple.", focus: "1-8" },
      { book: "Isaiah", chapter: 65, title: "The joy of the new creation", lookFor: "No more weeping; they build and inhabit; the wolf and the lamb feed together.", focus: "17-25" },
      { book: "2 Peter", chapter: 3, title: "Where righteousness dwells", lookFor: "We look for new heavens and a new earth, in which righteousness dwells.", focus: "10-13" },
      { book: "Romans", chapter: 8, title: "Creation set free", lookFor: "The creation itself will be delivered from its bondage to decay.", focus: "18-23" },
    ],
    points: [
      {
        heading: "God's plan is renewal, not abandonment",
        body: "I saw a new heaven and a new earth, for the first heaven and the first earth had passed away. We look for new heavens and a new earth, in which righteousness dwells. God does not scrap His creation; He restores it.",
        verses: ["Revelation 21:1-2", "2 Peter 3:13", "Isaiah 65:17"],
      },
      {
        heading: "God Himself will dwell with His people",
        body: "Behold, the tabernacle of God is with men, and he will dwell with them, and they will be his people. The Lord God Almighty and the Lamb are its temple, and the glory of God gives it light. The presence of God is the joy of the new creation.",
        verses: ["Revelation 21:3", "Revelation 21:22-23", "Zechariah 14:9"],
      },
      {
        heading: "Every tear is wiped away",
        body: "He will wipe away every tear from their eyes, and death will be no more, nor mourning, nor crying, nor pain, for the former things have passed away. The voice of weeping will be heard in it no more. The last enemy, death, is no more.",
        verses: ["Revelation 21:4", "Isaiah 65:19", "1 Corinthians 15:26"],
      },
      {
        heading: "It is the home we were made for",
        body: "They will build houses and inhabit them, and they will not labor in vain. The kings of the earth bring their glory into it. Creation itself will be set free from its bondage to decay. This is our hope: not escape from creation, but the healing of creation.",
        verses: ["Isaiah 65:21-23", "Revelation 21:24-26", "Romans 8:21"],
      },
    ],
    keyVerses: ["Revelation 21:3-4", "2 Peter 3:13", "Isaiah 65:17", "Revelation 21:22-23"],
    raises: ["what-will-we-do-in-the-new-creation"],
    followsFrom: ["what-is-the-resurrection"],
    related: ["where-is-jesus-now", "why-does-god-allow-suffering"],
    planned: ["Is the new creation a place or a state?"],
    order: 43,
  },

  // ------------------------------------------------------------------
  // TRAIL: Who We Are
  // ------------------------------------------------------------------
  {
    slug: "what-does-it-mean-to-be-made-in-gods-image",
    question: "What does it mean to be made in God's image?",
    category: "who-we-are",
    summary:
      "To be made in God's image means every human being reflects God: we have personality, reason, creativity, moral awareness, and the capacity for relationship, and we were made to rule the earth as God's representatives. The image is marred by sin but restored in Christ, who is the true image of God.",
    passages: [
      { book: "Genesis", chapter: 1, title: "Let us make man", lookFor: "In our image, after our likeness: the crown of creation.", focus: "26-28" },
      { book: "Psalm", chapter: 8, title: "Crowned with glory", lookFor: "What is man, that you are mindful of him?", focus: "3-8" },
      { book: "Genesis", chapter: 9, title: "The dignity of every person", lookFor: "Whoever sheds man's blood: for God made man in his own image.", focus: "5-6" },
      { book: "Colossians", chapter: 3, title: "Renewed in the image", lookFor: "The new man, renewed in knowledge after the image of its creator.", focus: "9-10" },
    ],
    points: [
      {
        heading: "Humanity was created to mirror God",
        body: "Let us make man in our image, after our likeness, and let them have dominion. Male and female he created them. You crowned him with glory and honor and made him ruler over the works of your hands. We were made to reflect God and represent Him on earth.",
        verses: ["Genesis 1:26-27", "Psalm 8:5-6", "Genesis 2:7"],
      },
      {
        heading: "The image gives dignity to every person",
        body: "Whoever sheds man's blood, by man his blood will be shed, for God made man in his own image. We bless God even while cursing those made in His likeness, which must not be. Every human being carries this dignity, without exception.",
        verses: ["Genesis 9:6", "James 3:9", "Acts 17:26"],
      },
      {
        heading: "The image is marred by sin, not erased",
        body: "All have sinned and fall short of the glory of God, and the fall distorted but did not destroy the image. God made mankind upright, but they have sought out many schemes. Even fallen humanity still bears the imprint and the dignity.",
        verses: ["Romans 3:23", "Genesis 3:6-7", "Ecclesiastes 7:29"],
      },
      {
        heading: "Christ is the perfect image, and in Him we are restored",
        body: "The Son is the image of the invisible God, the firstborn of all creation. Put on the new man, which is being renewed in knowledge after the image of its creator. We are being transformed into the same image, from glory to glory, by the Spirit.",
        verses: ["Colossians 1:15", "Colossians 3:9-10", "2 Corinthians 3:18", "Romans 8:29"],
      },
    ],
    keyVerses: ["Genesis 1:26-27", "Psalm 8:5-6", "Colossians 3:10", "2 Corinthians 3:18"],
    raises: ["what-is-sin", "made-for-relationship", "why-does-every-human-life-have-dignity-and-worth"],
    followsFrom: [],
    related: ["who-is-the-father"],
    planned: [],
    order: 44,
  },

  {
    slug: "what-is-sin",
    question: "What is sin, and where did it come from?",
    category: "who-we-are",
    summary:
      "Sin is any falling short of God's perfect standard, and at its root it is rebellion against God Himself. It entered the world through Adam's disobedience, it spreads to every person, and it brings death and separation. The good news is that where sin abounded, grace abounded much more in Christ.",
    passages: [
      { book: "Genesis", chapter: 3, title: "The first sin", lookFor: "The serpent, the tree, and the rupture of trust." },
      { book: "Romans", chapter: 5, title: "Sin entered through one man", lookFor: "Through one man sin entered the world, and death through sin.", focus: "12-21" },
      { book: "James", chapter: 1, title: "How temptation becomes sin", lookFor: "Desire conceived gives birth to sin, and sin brings forth death.", focus: "13-15" },
      { book: "1 John", chapter: 3, title: "Sin is lawlessness", lookFor: "The definition, and the cure: the Son of God came to take away sin.", focus: "4-10" },
    ],
    points: [
      {
        heading: "Sin is lawlessness and falling short",
        body: "Sin is lawlessness: transgression of God's revealed will. All have sinned and fall short of the glory of God. Whoever knows the right thing to do and does not do it, for him it is sin: sin is both what we do against God and what we refuse to do for Him.",
        verses: ["1 John 3:4", "Romans 3:23", "James 4:17"],
      },
      {
        heading: "It entered through one man's disobedience",
        body: "Through one man sin entered into the world, and death through sin, and so death passed to all men, because all sinned. The woman saw that the tree was desirable, and she took it and gave it to her husband, and the world broke.",
        verses: ["Romans 5:12", "Genesis 3:6-7", "Romans 5:19"],
      },
      {
        heading: "Its wages are death and separation",
        body: "The wages of sin is death. Your iniquities have separated you from your God, and your sins have hidden his face from you. You were dead in your trespasses and sins, children of wrath. Sin is not a small thing; it is cosmic rebellion with cosmic cost.",
        verses: ["Romans 6:23", "Isaiah 59:2", "Ephesians 2:1-3"],
      },
      {
        heading: "But grace abounded more",
        body: "Where sin increased, grace abounded all the more, so that grace might reign through righteousness to eternal life through Jesus Christ our Lord. If we confess our sins, he is faithful and righteous to forgive us the sins and to cleanse us from all unrighteousness. There is no condemnation for those in Christ.",
        verses: ["Romans 5:20-21", "1 John 1:9", "Romans 8:1"],
      },
    ],
    keyVerses: ["Romans 3:23", "Romans 5:12", "Romans 6:23", "1 John 3:4"],
    raises: ["does-everyone-deserve-gods-judgment", "how-does-god-judge-people-who-never-heard-of-jesus"],
    followsFrom: ["what-does-it-mean-to-be-made-in-gods-image"],
    related: ["why-did-jesus-have-to-die", "what-is-repentance", "what-happens-when-i-sin"],
    planned: [],
    order: 45,
  },

  {
    slug: "what-is-the-flesh-versus-the-spirit",
    question: "What is the flesh versus the Spirit?",
    category: "who-we-are",
    summary:
      "The flesh is the fallen human nature that opposes God, and the Spirit is God's own life at work in the believer. They are in conflict: the flesh desires what is against the Spirit, and the Spirit what is against the flesh. The believer's calling is to walk by the Spirit, who produces His fruit in us.",
    passages: [
      { book: "Galatians", chapter: 5, title: "The two natures at war", lookFor: "The works of the flesh, the fruit of the Spirit, and the walk.", focus: "16-26" },
      { book: "Romans", chapter: 8, title: "Flesh and Spirit", lookFor: "The mind of the flesh is death; the mind of the Spirit is life and peace.", focus: "1-17" },
      { book: "Romans", chapter: 7, title: "Paul's own struggle", lookFor: "The good I desire I do not do; who will deliver me?", focus: "14-25" },
      { book: "Colossians", chapter: 3, title: "Put off and put on", lookFor: "Set your minds on things above; put to death what is earthly.", focus: "1-10" },
    ],
    points: [
      {
        heading: "Two natures at war",
        body: "The flesh lusts against the Spirit, and the Spirit against the flesh, for these are contrary to one another. The mind of the flesh is death, but the mind of the Spirit is life and peace. Every believer knows the conflict from the inside.",
        verses: ["Galatians 5:17", "Romans 8:6-8"],
      },
      {
        heading: "The works of the flesh",
        body: "The works of the flesh are obvious: sexual immorality, idolatry, strife, jealousy, outbursts of anger, and the like. I warn you, as I did before, that those who practice such things will not inherit the kingdom of God. Paul names them so we can recognize the enemy.",
        verses: ["Galatians 5:19-21", "Mark 7:21-23", "1 Corinthians 6:9-10"],
      },
      {
        heading: "The fruit of the Spirit",
        body: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, self-control. Against such things there is no law. This is what the Spirit grows in a life that abides in Christ.",
        verses: ["Galatians 5:22-23", "John 15:4-5"],
      },
      {
        heading: "The battle is won by walking in the Spirit",
        body: "Walk by the Spirit, and you will not fulfill the lust of the flesh. By the Spirit put to death the deeds of the body, and you will live. If anyone is in Christ, he is a new creation; the old things have passed away. The victory is His work in us.",
        verses: ["Galatians 5:16", "Romans 8:13", "2 Corinthians 5:17"],
      },
    ],
    keyVerses: ["Galatians 5:16-17", "Galatians 5:22-23", "Romans 8:6", "Romans 8:13"],
    raises: ["body-soul-and-spirit", "what-is-the-difference-between-the-heart-soul-and-mind"],
    followsFrom: ["how-do-i-fight-sin"],
    related: ["how-do-i-fight-sin", "who-is-the-holy-spirit"],
    planned: [],
    order: 46,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Unseen Realm
  // ------------------------------------------------------------------
  {
    slug: "who-is-satan",
    question: "Who is Satan, and what does he do?",
    category: "unseen-realm",
    summary:
      "Satan is a real created being, a fallen angel who leads the powers of darkness in rebellion against God. Scripture calls him the tempter, the accuser, the deceiver, and a roaring lion seeking someone to devour, but it also declares that he is defeated by Christ and will be finally destroyed.",
    passages: [
      { book: "Genesis", chapter: 3, title: "The deceiver", lookFor: "Questioning God's word, denying God's warning.", focus: "1-15" },
      { book: "1 Peter", chapter: 5, title: "A roaring lion", lookFor: "Sober and watchful: your adversary the devil prowls.", focus: "8-9" },
      { book: "Job", chapter: 1, title: "Before the Lord", lookFor: "Satan is real and powerful, but he acts within God's permission.", focus: "6-12" },
      { book: "Revelation", chapter: 12, title: "The accuser defeated", lookFor: "Cast down, and his end is sure.", focus: "7-12" },
    ],
    points: [
      {
        heading: "He is a real person, not a symbol",
        body: "Be sober and watchful, because your adversary the devil, like a roaring lion, walks about seeking whom he may devour. Job's account shows him coming before the Lord among the sons of God. He is a person, and he is to be taken seriously.",
        verses: ["1 Peter 5:8", "Job 1:6-7", "John 8:44"],
      },
      {
        heading: "His work: deceive, tempt, accuse",
        body: "In the garden he questioned God's word and lied about the consequence. He is the accuser of our brothers, who accuses them before our God day and night. The thief comes only to steal, kill, and destroy. His strategy is doubt, temptation, and accusation.",
        verses: ["Genesis 3:1", "Genesis 3:4-5", "Revelation 12:10", "John 10:10"],
      },
      {
        heading: "He is powerful but limited",
        body: "The Lord said to Satan, all that he has is in your hand; only do not touch him. Jesus told Peter, Satan demanded to sift you like wheat, but I prayed for you. His activity is real, but it is always within God's permission, and his end is destruction.",
        verses: ["Job 1:12", "Luke 22:31-32", "2 Thessalonians 2:9-10"],
      },
      {
        heading: "He is defeated and doomed",
        body: "God disarmed the rulers and authorities and made a public spectacle of them, triumphing over them in the cross. Now the ruler of this world will be cast out. The devil who deceived them was thrown into the lake of fire. He has already lost the war.",
        verses: ["Colossians 2:15", "John 12:31", "Revelation 20:10", "Hebrews 2:14"],
      },
    ],
    keyVerses: ["1 Peter 5:8", "Revelation 12:10", "Colossians 2:15", "John 8:44"],
    raises: ["what-is-spiritual-warfare", "are-demons-real", "how-do-i-discern-demonic-influence-from-ordinary-struggles"],
    followsFrom: ["praying-against-the-enemy"],
    related: ["how-do-i-fight-sin"],
    planned: [],
    order: 47,
  },

  {
    slug: "what-are-angels",
    question: "What are angels, and what do they do?",
    category: "unseen-realm",
    summary:
      "Angels are spiritual beings created by God, ministering spirits sent to serve those who inherit salvation. They worship God, carry His messages, protect and minister to His people, and will accompany Christ at His return. They are glorious, but they are creatures: we are not to worship them.",
    passages: [
      { book: "Hebrews", chapter: 1, title: "Ministering spirits", lookFor: "Sent out to serve for the sake of those who will inherit salvation.", focus: "13-14" },
      { book: "Psalm", chapter: 103, title: "Angels who do his word", lookFor: "Excellent in strength, obeying the voice of his word.", focus: "19-21" },
      { book: "Luke", chapter: 1, title: "Gabriel's announcement", lookFor: "An angel carrying God's message to Mary.", focus: "26-38" },
      { book: "Revelation", chapter: 22, title: "Worship God, not the angel", lookFor: "The angel refuses John's worship: worship God.", focus: "8-9" },
    ],
    points: [
      {
        heading: "Angels are created spirits",
        body: "Are they not all ministering spirits, sent out to serve for the sake of those who will inherit salvation? Praise him, all his angels; for he commanded, and they were created. They are glorious creatures, but they are creatures, made by the word of God.",
        verses: ["Hebrews 1:14", "Psalm 148:2-5", "Colossians 1:16"],
      },
      {
        heading: "They worship and serve God",
        body: "I heard the voice of many angels around the throne, saying with a loud voice, worthy is the Lamb who was slain. Angels who excel in strength, who do his word, obeying the voice of his word. Their first occupation is worship and obedience.",
        verses: ["Revelation 5:11-12", "Psalm 103:20", "Isaiah 6:2-3"],
      },
      {
        heading: "They minister to God's people",
        body: "Gabriel flew swiftly and touched Daniel and gave him insight and understanding. An angel was sent to Mary with the announcement of the Christ. To Elisha: do not fear, for those who are with us are more than those who are with them.",
        verses: ["Hebrews 1:14", "Daniel 9:21-22", "2 Kings 6:16-17"],
      },
      {
        heading: "They are not to be worshipped",
        body: "When John fell to worship the angel, he said, do not do that; I am a fellow servant; worship God. Do not let anyone disqualify you by delighting in the worship of angels. Their service points to Christ, and our worship belongs to Him alone.",
        verses: ["Revelation 22:8-9", "Colossians 2:18", "Hebrews 1:5-6"],
      },
    ],
    keyVerses: ["Hebrews 1:14", "Psalm 103:20", "Revelation 22:8-9", "Daniel 9:21-22"],
    raises: ["do-believers-have-guardian-angels", "what-do-angels-look-like-and-can-believers-see-them"],
    followsFrom: ["do-believers-have-guardian-angels"],
    related: ["who-is-satan", "what-is-spiritual-warfare"],
    planned: [],
    order: 48,
  },

  {
    slug: "what-is-spiritual-warfare",
    question: "What is spiritual warfare?",
    category: "unseen-realm",
    summary:
      "Spiritual warfare is the real but unseen conflict between the kingdom of God and the kingdom of darkness, fought with spiritual weapons: the word of God, prayer, faith, truth, righteousness, and the gospel of peace. Our fight is not against people, and the victory is Christ's.",
    passages: [
      { book: "Ephesians", chapter: 6, title: "The armor of God", lookFor: "Our wrestling is not against flesh and blood, but against spiritual forces.", focus: "10-20" },
      { book: "2 Corinthians", chapter: 10, title: "Weapons of the Spirit", lookFor: "Divine power to pull down strongholds and arguments against the knowledge of God.", focus: "3-5" },
      { book: "James", chapter: 4, title: "Submit and resist", lookFor: "Resist the devil, and he will flee from you.", focus: "7-10" },
      { book: "Matthew", chapter: 4, title: "Jesus in the wilderness", lookFor: "He answered every temptation with Scripture.", focus: "1-11" },
    ],
    points: [
      {
        heading: "The battle is real, but not against people",
        body: "Our wrestling is not against flesh and blood, but against the principalities, the powers, and the rulers of the darkness of this world. Though we walk in the flesh, we do not wage war according to the flesh. Your enemy is not your neighbor; it is the enemy of your soul.",
        verses: ["Ephesians 6:12", "2 Corinthians 10:3-4"],
      },
      {
        heading: "The weapons are spiritual",
        body: "The armor of God: the belt of truth, the breastplate of righteousness, the shoes of the gospel of peace, the shield of faith, the helmet of salvation, and the sword of the Spirit, which is the word of God. Divine power pulls down arguments and every lofty thing raised against the knowledge of God.",
        verses: ["Ephesians 6:13-17", "2 Corinthians 10:4-5", "Hebrews 4:12"],
      },
      {
        heading: "Prayer is the engine",
        body: "With all prayer and supplication, pray at all times in the Spirit, staying watchful with all perseverance for all the saints. Watch and pray, that you may not enter into temptation. The armor is worn, and it is prayed on.",
        verses: ["Ephesians 6:18", "Matthew 26:41", "Luke 22:40"],
      },
      {
        heading: "Submit, resist, and he will flee",
        body: "Submit to God. Resist the devil, and he will flee from you. Resist him, steadfast in your faith, for greater is he who is in you than he who is in the world. Not by might nor by power, but by my Spirit, says the Lord. The victory is Christ's, and we fight in it.",
        verses: ["James 4:7", "1 Peter 5:8-9", "1 John 4:4", "Zechariah 4:6"],
      },
    ],
    keyVerses: ["Ephesians 6:12", "Ephesians 6:13-17", "James 4:7", "1 John 4:4"],
    raises: ["praying-against-the-enemy", "what-is-the-armor-of-god-piece-by-piece"],
    followsFrom: ["who-is-satan"],
    related: ["how-do-i-fight-sin", "who-is-satan"],
    planned: [],
    order: 49,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Holy Spirit (continued)
  // ------------------------------------------------------------------
  {
    slug: "why-jesus-calls-the-spirit-another-helper",
    question: "Why does Jesus call the Spirit 'another Helper'?",
    category: "holy-spirit",
    summary:
      "Jesus calls the Spirit 'another Helper' to tell us two things at once: the Spirit is a Person, not a force, and He is a Helper of the same kind as Jesus Himself. He is Jesus' continuing presence with His people: the One who teaches, testifies, and stays with us forever.",
    passages: [
      {
        book: "John",
        chapter: 14,
        title: "Another Helper is promised",
        lookFor: "Jesus promises 'another Counselor': a Person who will be with His disciples forever.",
        focus: "15-31",
      },
      {
        book: "John",
        chapter: 15,
        title: "The Helper from the Father",
        lookFor: "Jesus explains what the Helper does: He testifies about Jesus, alongside the disciples.",
        focus: "18-27",
      },
      {
        book: "Acts",
        chapter: 1,
        title: "Wait for the promise of the Father",
        lookFor: "Jesus tells them to wait in Jerusalem for the promise: they will be baptized with the Holy Spirit.",
        focus: "1-11",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "The Helper comes at Pentecost",
        lookFor: "The promised Helper arrives, and Peter explains that the promise is now open to everyone who repents.",
        focus: "1-21",
      },
    ],
    points: [
      {
        heading: "'Another' Helper: a Person just like Jesus",
        body:
          "In the upper room, Jesus promised 'another Counselor' and made clear that the Helper would be to His disciples what He Himself had been: a Teacher, a Friend, and a constant Presence who would abide with them forever. He is not a substitute for Jesus; He is Jesus' own gift of Himself, sent so that Jesus' presence would never leave them.",
        verses: ["John 14:16", "John 14:26"],
      },
      {
        heading: "The Helper is a Person, not an influence",
        body:
          "The Helper speaks, teaches, reminds, testifies, guides, and hears. Peter even charges Ananias with lying to the Holy Spirit, which only a Person can be. No one grieved an influence or was lied to by a power; the Helper is Someone to know, follow, and never grieve.",
        verses: ["John 14:26", "John 15:26", "John 16:13", "Acts 5:3", "Ephesians 4:30"],
      },
      {
        heading: "He is how Jesus stays with us",
        body:
          "The promise of the Helper is immediately followed by: 'I will not leave you orphans. I will come to you.' The Spirit is the presence of the risen Jesus with His people. Jesus even said it was to our advantage for Him to go away, so that the Helper could come and abide with us forever.",
        verses: ["John 14:18", "John 16:7", "John 14:23"],
      },
      {
        heading: "His one aim is to make Jesus known",
        body:
          "The Helper teaches all things and reminds us of what Jesus said. He testifies about Jesus, and He glorifies Jesus by taking what belongs to Christ and declaring it to us. Whenever the Spirit is genuinely at work, Jesus becomes more real, never less.",
        verses: ["John 14:26", "John 15:26", "John 16:13-14"],
      },
      {
        heading: "The promise is for everyone who repents",
        body:
          "Pentecost was the arrival of the Helper: the Spirit poured out on all flesh, young and old, sons and daughters. And Peter's invitation still stands: repent and be baptized in the name of Jesus Christ, and you will receive the gift of the Holy Spirit, for the promise is for you.",
        verses: ["Acts 2:17-18", "Acts 2:38-39"],
      },
    ],
    keyVerses: ["John 14:16-17", "John 14:18", "John 16:7", "John 15:26", "Acts 2:38-39"],
    raises: ["how-do-i-receive-the-holy-spirit", "who-is-the-holy-spirit", "how-do-i-know-the-spirit-is-leading-me", "what-is-the-unpardonable-sin"],
    followsFrom: ["who-is-the-holy-spirit"],
    related: ["who-is-the-holy-spirit", "is-the-holy-spirit-god", "what-are-spiritual-gifts"],
    planned: [],
    order: 16,
  },

  {
    slug: "holy-spirit-in-the-old-testament",
    question: "How is the Holy Spirit at work in the Old Testament?",
    category: "holy-spirit",
    summary:
      "The Spirit is not a New Testament arrival: He is present from the very first page of the Bible. In the Old Testament He creates, empowers judges and kings, inspires prophets, and can be grieved; and the prophets pointed to a day when He would be poured out on all flesh and put within God's people.",
    passages: [
      {
        book: "Genesis",
        chapter: 1,
        title: "The Spirit at creation",
        lookFor: "The Spirit of God is present at the very beginning, hovering over the deep.",
        focus: "1-3",
      },
      {
        book: "Numbers",
        chapter: 11,
        title: "The Spirit on the seventy elders",
        lookFor: "Moses wishes that all God's people had the Spirit on them: the whole people, not just leaders.",
        focus: "16-30",
      },
      {
        book: "1 Samuel",
        chapter: 16,
        title: "The Spirit comes on David",
        lookFor: "The anointing of David: the Spirit of Yahweh comes mightily on him from that day forward.",
        focus: "1-13",
      },
      {
        book: "Ezekiel",
        chapter: 37,
        title: "Dry bones and the Spirit's breath",
        lookFor: "The Spirit is the breath that brings the dead to life, and God promises to put His Spirit within His people.",
        focus: "1-14",
      },
      {
        book: "Joel",
        chapter: 2,
        title: "The promised outpouring",
        lookFor: "The prophecy Peter quoted at Pentecost: the Spirit poured out on all flesh, on sons and daughters and servants.",
        focus: "28-32",
      },
    ],
    points: [
      {
        heading: "The Spirit is present from the very beginning",
        body:
          "The second verse of the Bible shows the Spirit of God hovering over the face of the waters at creation. Job confesses, 'The Spirit of God has made me,' and the psalm praises God who sends out His Spirit to renew the face of the ground. The Spirit is no afterthought; He is woven into the world from the start.",
        verses: ["Genesis 1:2", "Job 33:4", "Psalm 104:30"],
      },
      {
        heading: "He empowers God's servants for God's work",
        body:
          "The Spirit came on judges like Othniel and Gideon to deliver Israel. He came mightily on Saul and on David at their anointing. He filled Bezalel with wisdom and skill for the tabernacle, and He filled prophets like Micah with power to declare the word of God. The work of God has always been the work of the Spirit.",
        verses: ["Judges 3:10", "Judges 6:34", "1 Samuel 10:6", "1 Samuel 16:13", "Exodus 31:3", "Micah 3:8", "2 Peter 1:21"],
      },
      {
        heading: "He could be grieved, and even depart",
        body:
          "The Spirit was not an impersonal blessing to be stored: He was a Person who could be sinned against. David, after his great fall, pleaded with God not to take His holy Spirit from him. Isaiah tells how God's people rebelled and grieved His holy Spirit, and Samson discovered that the Lord could depart from him. The Spirit's presence was real, and losing it was a real tragedy.",
        verses: ["Psalm 51:11", "Isaiah 63:10", "Judges 16:20"],
      },
      {
        heading: "The prophets looked forward to a far greater gift",
        body:
          "Moses could only wish for a day when all God's people would have the Spirit. Joel saw it coming: a pouring out on all flesh, on sons and daughters and servants alike. Ezekiel promised a new heart and God's own Spirit put within His people, causing them to walk in His statutes, and breath filling dry bones with life. The Old Testament ends leaning forward, waiting.",
        verses: ["Numbers 11:29", "Joel 2:28-29", "Ezekiel 36:26-27", "Ezekiel 37:14"],
      },
      {
        heading: "With them then, in them now",
        body:
          "Jesus Himself marked the change: He told the disciples the Spirit 'lives with you, and will be in you,' and John explains that the Spirit was not yet given because Jesus was not yet glorified. The Old Testament knew the Spirit with God's people, upon leaders and prophets; Pentecost began the age when the Spirit would be poured out on all flesh and dwell within every believer.",
        verses: ["John 14:17", "John 7:39", "Acts 2:16-18"],
      },
    ],
    keyVerses: ["Genesis 1:2", "Psalm 51:11", "Joel 2:28", "Ezekiel 36:26-27", "2 Peter 1:21"],
    raises: ["why-jesus-calls-the-spirit-another-helper", "how-do-i-receive-the-holy-spirit"],
    followsFrom: ["is-the-holy-spirit-god"],
    related: ["who-is-the-holy-spirit", "is-the-holy-spirit-god", "why-jesus-calls-the-spirit-another-helper"],
    planned: ["Why did the Old Testament Spirit come and go?"],
    order: 17,
  },

  {
    slug: "can-we-understand-the-trinity",
    question: "Can we really understand the Trinity?",
    category: "holy-spirit",
    summary:
      "Not exhaustively, no; but truly, yes. The Trinity is a revealed mystery, not a puzzle to be solved: God has shown us who He is, and He invites us to know Him. We can know the triune God truly, the way a child knows a father, without comprehending Him fully, the way no one can fathom the depths of God.",
    passages: [
      {
        book: "Deuteronomy",
        chapter: 29,
        title: "The secret things and the revealed things",
        lookFor: "God keeps His secrets, and gives us what He reveals: enough to know and obey Him.",
        focus: "29",
      },
      {
        book: "Job",
        chapter: 11,
        title: "Can you fathom God?",
        lookFor: "Zophar's question is a good one even if his application was wrong: God is beyond our measures.",
        focus: "7-9",
      },
      {
        book: "1 Corinthians",
        chapter: 2,
        title: "The Spirit reveals the deep things of God",
        lookFor: "We know God's depths because His Spirit has searched them and revealed them to us.",
        focus: "6-16",
      },
      {
        book: "Isaiah",
        chapter: 55,
        title: "Higher than the heavens",
        lookFor: "God's thoughts and ways tower over ours, and He calls us to come and listen.",
        focus: "8-11",
      },
      {
        book: "John",
        chapter: 17,
        title: "Jesus prays that we may know",
        lookFor: "Eternal life is knowing the Father and the Son, and Jesus prays for us to enter that love.",
        focus: "20-26",
      },
    ],
    points: [
      {
        heading: "God reveals what He wants us to know",
        body:
          "Moses drew the line honestly: 'The secret things belong to Yahweh our God; but the things that are revealed belong to us and to our children forever, that we may do all the words of this law.' God has not left us guessing. He spoke through the prophets, and in these last days He has spoken to us by His Son, inviting us to glory in the one thing that matters: knowing Him.",
        verses: ["Deuteronomy 29:29", "Hebrews 1:1-2", "Jeremiah 9:24"],
      },
      {
        heading: "The Trinity is received, not reasoned into existence",
        body:
          "No one sat down and invented the Trinity. The church confessed it because Scripture kept saying it: the Father and the Son and the Spirit all present at Jesus' baptism, all at work in redemption, all joined in one name at the Great Commission. We know it the way we know anything about God: because He showed us.",
        verses: ["Matthew 3:16-17", "Matthew 28:19", "2 Corinthians 13:14"],
      },
      {
        heading: "We can know God truly without comprehending Him fully",
        body:
          "'Can you fathom the mystery of God?' Job is asked; Paul answers, 'How unsearchable are his judgments, and his ways past tracing out!' Yet Jesus says that eternal life is knowing the only true God. Knowing a person is not the same as comprehending a person: a child knows his father truly, and has not yet begun to fathom him. So with God: we know Him truly, truly enough to love and trust and follow, and His greatness is unsearchable.",
        verses: ["Job 11:7", "Romans 11:33", "John 17:3", "Psalm 145:3"],
      },
      {
        heading: "The whole story of salvation is trinitarian",
        body:
          "The Bible does not teach the Trinity as a doctrine to memorize; it lives it. Creation and redemption move on three-fold rhythm: the Father sends the Son, the Son accomplishes the work, the Spirit applies it. We have access to the Father through the Son, in one Spirit; God's love has been poured into our hearts through the Holy Spirit; and the Spirit makes us cry, 'Abba, Father!'",
        verses: ["John 3:16", "Ephesians 2:18", "Romans 5:5", "Galatians 4:6"],
      },
      {
        heading: "The right response is worship, not frustration",
        body:
          "Paul does not end his survey of God's ways with a quiz; he ends in doxology: 'For of him, and through him, and to him, are all things. To him be the glory for ever! Amen.' He prays for us to be strengthened to comprehend the love of Christ, and his prayer ends with glory in the church to all generations. The mystery we cannot exhaust is the mystery we were made to praise.",
        verses: ["Romans 11:33-36", "Ephesians 3:18-21"],
      },
    ],
    keyVerses: ["Deuteronomy 29:29", "John 17:3", "Romans 11:33", "1 Corinthians 2:10-11", "Isaiah 55:9"],
    raises: [],
    followsFrom: ["what-is-the-trinity", "is-the-holy-spirit-god", "is-jesus-really-god"],
    related: ["what-is-the-trinity", "who-is-the-father"],
    planned: ["How is the Trinity like a family, and unlike a family?"],
    order: 18,
  },

  {
    slug: "how-do-i-know-the-spirit-is-leading-me",
    question: "How do I know the Spirit is leading me?",
    category: "holy-spirit",
    summary:
      "The Spirit leads every child of God, and His leading never whispers against His own Word. He guides through Scripture, through wisdom and godly counsel, through doors opened and closed in the course of obedience, and through a deepening inner witness of peace and fruit as we walk with Him.",
    passages: [
      {
        book: "Romans",
        chapter: 8,
        title: "Led by the Spirit",
        lookFor: "Being led by the Spirit is what it means to be a child of God; it is not a special elite calling.",
        focus: "1-17",
      },
      {
        book: "Galatians",
        chapter: 5,
        title: "Walk by the Spirit",
        lookFor: "The daily walk: keep in step with the Spirit, and His fruit grows in you.",
        focus: "16-26",
      },
      {
        book: "Acts",
        chapter: 15,
        title: "The church discerns together",
        lookFor: "The whole council seeks wisdom together, and concludes it seemed good to the Holy Spirit and to them.",
        focus: "22-29",
      },
      {
        book: "Acts",
        chapter: 16,
        title: "Open doors and closed doors",
        lookFor: "The Spirit forbids one path and opens another; the gospel moves forward through real decisions.",
        focus: "6-15",
      },
      {
        book: "1 John",
        chapter: 4,
        title: "Test the spirits",
        lookFor: "Not every impulse is the Spirit: there is a test, and the test is Christ.",
        focus: "1-6",
      },
    ],
    points: [
      {
        heading: "Being led is the normal Christian life",
        body:
          "Paul does not describe being led by the Spirit as an unusual experience for unusually spiritual people: 'as many as are led by the Spirit of God, these are children of God.' Every child of God is led by the Spirit. The call is simple and daily: walk by the Spirit, and you will not gratify the desires of the flesh.",
        verses: ["Romans 8:14", "Galatians 5:16", "Galatians 5:18", "Galatians 5:25"],
      },
      {
        heading: "The Spirit never leads against His own Word",
        body:
          "The Spirit who inspired Scripture does not contradict Scripture. John's test for any spirit is about Christ: every spirit that confesses Jesus Christ come in the flesh is of God. Paul urges us to test everything against the Word, and the Bereans were praised for examining the Scriptures to check what they were taught. A leading that fights the Bible is not the Spirit's leading.",
        verses: ["2 Timothy 3:16", "1 John 4:1-2", "Acts 17:11", "Psalm 119:105"],
      },
      {
        heading: "He works through wisdom, prayer, and the Body",
        body:
          "Direction is rarely a mystery dropped from heaven; it comes as wisdom sought, asked for, and weighed. James promises that God gives wisdom generously to all who ask. The early church made its great decisions together, and the council at Jerusalem could say, 'It seemed good to the Holy Spirit, and to us.' Listen for the Spirit in Scripture, in prayer, and in the counsel of godly brothers and sisters.",
        verses: ["James 1:5", "Proverbs 11:14", "Acts 15:28"],
      },
      {
        heading: "He opens doors and closes doors in the path of obedience",
        body:
          "Paul did not receive a blueprint for his journeys; he received a prohibition here and a door there. The Spirit closed the road into Asia and Bithynia, and opened a vision of a man in Macedonia calling for help. The leading came while they were already moving with the gospel, not standing still waiting. Obedience is the atmosphere in which guidance is given.",
        verses: ["Acts 16:6-10", "James 4:15"],
      },
      {
        heading: "The inner witness grows as we walk",
        body:
          "The Spirit testifies with our spirit that we are God's children, and His fruit grows in lives walked by Him. The peace of God rules in hearts that belong to His body, and His peace guards hearts and minds in Christ Jesus. The leading of the Spirit deepens with the walk of the Spirit: conviction moves toward settled peace as it lines up with the Word.",
        verses: ["Romans 8:16", "Galatians 5:22-23", "Colossians 3:15", "Philippians 4:7"],
      },
    ],
    keyVerses: ["Romans 8:14", "Galatians 5:16", "Acts 15:28", "1 John 4:1", "Colossians 3:15"],
    raises: [],
    followsFrom: ["how-do-i-receive-the-holy-spirit", "why-jesus-calls-the-spirit-another-helper"],
    related: ["who-is-the-holy-spirit", "how-do-i-receive-the-holy-spirit", "what-are-spiritual-gifts"],
    planned: ["How do I grow in sensitivity to the Spirit?"],
    order: 19,
  },

  // ------------------------------------------------------------------
  // TRAIL: Jesus Christ (continued)
  // ------------------------------------------------------------------
  {
    slug: "does-jesus-sharing-gods-nature-mean-two-gods",
    question: "Does Jesus sharing God's nature mean there are two Gods?",
    category: "jesus-christ",
    summary:
      "No. The Bible never presents Jesus as a second God; it teaches one God who exists as Father, Son, and Holy Spirit. Jesus claimed to be the one God of Israel come in the flesh, and the church confessed His deity precisely because the oneness of God is non-negotiable.",
    passages: [
      {
        book: "John",
        chapter: 10,
        title: "I and the Father are one",
        lookFor: "Jesus claims unity with the Father, and the crowd understands it as a claim to be God.",
        focus: "22-39",
      },
      {
        book: "John",
        chapter: 14,
        title: "Seeing Jesus, seeing the Father",
        lookFor: "Philip asks to see the Father, and Jesus answers that to see Him is to see the Father.",
        focus: "1-11",
      },
      {
        book: "Deuteronomy",
        chapter: 6,
        title: "The Lord our God, the Lord is one",
        lookFor: "The confession Israel recited daily, and the anchor for everything else about God.",
        focus: "4-9",
      },
      {
        book: "Isaiah",
        chapter: 44,
        title: "Besides me there is no God",
        lookFor: "God's own insistence on His uniqueness, again and again through Isaiah.",
        focus: "6-8",
      },
      {
        book: "1 Corinthians",
        chapter: 8,
        title: "One God, one Lord",
        lookFor: "Paul's careful words to a church surrounded by many gods: one Father, one Lord.",
        focus: "4-6",
      },
    ],
    points: [
      {
        heading: "The oneness of God is where the Bible begins",
        body:
          "Israel's daily confession was single-minded: 'Hear, Israel, the Lord our God, the Lord is one.' God insists on it through Isaiah: 'I am the first, and I am the last; and besides me there is no God.' Jesus Himself answered the scribes by quoting the same confession. The oneness of God is not up for revision.",
        verses: ["Deuteronomy 6:4", "Mark 12:29", "Isaiah 44:6", "Isaiah 45:21"],
      },
      {
        heading: "Jesus claimed to be the one God, not another god",
        body:
          "'Before Abraham came into existence, I AM,' He said, taking the name from the burning bush. 'I and the Father are one.' The crowd heard exactly what He meant: 'You, being a man, make yourself God.' Jesus did not announce a new deity; He revealed that the one God had come in the flesh.",
        verses: ["John 8:58", "John 10:30", "John 10:33", "John 10:38"],
      },
      {
        heading: "A second god would be idolatry, and Scripture allows none",
        body:
          "'Before me there was no God formed, neither will there be after me.' Paul, writing in a city full of gods, holds the line: 'there is no other God but one,' and yet in the same breath he names the Lord Jesus Christ through whom all things exist. The New Testament never flinches from calling Jesus God, and never lets go of the one God. Both are true at once.",
        verses: ["Isaiah 43:10", "1 Corinthians 8:4", "1 Corinthians 8:6", "Titus 2:13", "Romans 9:5"],
      },
      {
        heading: "Distinct Persons, one divine nature",
        body:
          "John 1 says both at once: the Word was with God, and the Word was God. The Son prays to the Father, and yet He and the Father are one: Jesus told Philip that whoever has seen Him has seen the Father, and said, 'In him all the fullness of the Godhead dwells bodily.' Jesus is not a second god alongside the Father; He is God the Son, distinct in Person, one in nature with the Father and the Spirit.",
        verses: ["John 1:1-2", "John 17:3", "John 10:30", "John 14:9", "Colossians 2:9"],
      },
      {
        heading: "The Trinity keeps the oneness intact",
        body:
          "The church did not invent three gods under a new name. Facing the very question you are asking, it confessed one God in three Persons, and it did so because Scripture forces both truths: the Lord is one, and Jesus is Lord. Jesus even commanded baptism into the single name of the Father, Son, and Holy Spirit. The Trinity is not a compromise with polytheism; it is the shape of the one God's own life.",
        verses: ["Matthew 28:19", "2 Corinthians 13:14", "John 17:1-3"],
      },
    ],
    keyVerses: ["John 10:30", "John 14:9", "John 1:1", "Isaiah 44:6", "1 Corinthians 8:6"],
    raises: ["what-does-it-mean-that-god-is-one", "are-there-other-gods"],
    followsFrom: ["is-jesus-really-god", "what-is-the-trinity", "can-we-understand-the-trinity"],
    related: ["is-jesus-really-god", "what-is-the-trinity", "is-the-holy-spirit-god"],
    planned: [],
    order: 18,
  },

  {
    slug: "between-the-cross-and-the-resurrection",
    question: "What happened between the cross and the resurrection?",
    category: "jesus-christ",
    summary:
      "Jesus died a real death, was buried, and descended into the realm of the dead; and in that hidden interval He was already Lord. The tomb was the proof of a finished work, and the resurrection morning was its announcement: death itself no longer had the keys.",
    passages: [
      {
        book: "Luke",
        chapter: 23,
        title: "The crucifixion, the thief, and the burial",
        lookFor: "The promise to the thief, the final words, and the careful burial: real death, real body.",
        focus: "32-56",
      },
      {
        book: "Matthew",
        chapter: 27,
        title: "Darkness, the torn veil, and the opened tombs",
        lookFor: "The earth's response to the death of its Maker, and the first signs of the resurrection already stirring.",
        focus: "45-61",
      },
      {
        book: "Ephesians",
        chapter: 4,
        title: "He descended into the lower parts of the earth",
        lookFor: "Paul reads the ascension back through a descent: He who ascended first descended.",
        focus: "7-10",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "Not abandoned to Hades",
        lookFor: "Peter's Pentecost sermon: the Christ's soul was not left in Hades, nor did His flesh see decay.",
        focus: "22-36",
      },
      {
        book: "1 Peter",
        chapter: 3,
        title: "Preaching to the spirits in prison",
        lookFor: "The mysterious passage: Christ went and made proclamation, alive in the spirit, in the days between death and resurrection.",
        focus: "18-22",
      },
    ],
    points: [
      {
        heading: "The work was finished on the cross",
        body:
          "Jesus' last word from the cross was not defeat; it was completion: 'It is finished.' In the same hour the veil of the temple was torn from top to bottom, the earth shook, and the centurion confessed, 'Truly this man was the Son of God!' And to the thief beside Him came the immediate promise: 'Today you will be with me in Paradise.'",
        verses: ["John 19:30", "Matthew 27:51", "Mark 15:39", "Luke 23:43"],
      },
      {
        heading: "He really died, and was really buried",
        body:
          "The earliest confession says it plainly: 'that he was buried.' Joseph of Arimathea and Nicodemus took the body down, wrapped it in linen with spices, and laid it in a new tomb. This was not an apparent death; the soldiers found Him already dead and did not break His legs, and the tomb was sealed and guarded. Whatever happened next, it began from a real grave.",
        verses: ["1 Corinthians 15:4", "John 19:38-42", "John 19:33", "Matthew 27:62-66"],
      },
      {
        heading: "He descended into the depths",
        body:
          "Paul reasons from the ascension to the descent: 'He who descended is the one who also ascended far above all the heavens.' Peter preached at Pentecost that Christ's soul was not left in Hades. Between Friday and Sunday the crucified Lord was active where death reigns, and 1 Peter says He went and preached to the spirits in prison. The exact scope of that proclamation is debated, but the direction is unmistakable: Christ went into the realm of the dead, and He was not its prisoner.",
        verses: ["Ephesians 4:9-10", "Acts 2:27", "Acts 2:31", "1 Peter 3:18-19"],
      },
      {
        heading: "He holds the keys of death",
        body:
          "The risen Christ could say of that weekend: 'I was dead, and behold, I am alive forever more. Amen. I have the keys of Death and of Hades.' And Paul draws the conclusion for everyone who ever asked where death leads: 'To this end Christ died, rose, and lived again, that he might be Lord of both the dead and the living.' Between the cross and the resurrection, death did not win a victory; it met its master.",
        verses: ["Revelation 1:18", "Romans 14:9"],
      },
      {
        heading: "The resurrection had already begun",
        body:
          "Matthew records that at the death of Jesus the tombs were opened, and after His resurrection many bodies of the saints who had fallen asleep were raised and appeared to many. The resurrection did not happen in spite of what came before; it was the firstfruits of the harvest for which everything before had been prepared. The cross to the tomb was the planting; Easter morning was the first harvest.",
        verses: ["Matthew 27:52-53", "1 Corinthians 15:20"],
      },
    ],
    keyVerses: ["John 19:30", "Luke 23:43", "Ephesians 4:9-10", "Acts 2:31", "Revelation 1:18"],
    raises: ["who-were-the-spirits-in-prison-and-what-did-christ-preach-to-them"],
    followsFrom: ["why-did-jesus-have-to-die", "did-jesus-rise-from-the-dead"],
    related: ["did-jesus-rise-from-the-dead", "where-is-jesus-now", "what-happens-when-i-die"],
    planned: [],
    order: 19,
  },

  {
    slug: "why-is-jesus-both-son-of-god-and-son-of-man",
    question: "Why is Jesus called both the Son of God and the Son of Man?",
    category: "jesus-christ",
    summary:
      "Jesus wears two titles that seem to pull in opposite directions: Son of God and Son of Man. One declares His divinity, the other His full humanity, and Scripture insists on both, because a Savior who can stand between God and us must be truly God and truly one of us. The church's confession of Christ has always been both at once.",
    passages: [
      {
        book: "John",
        chapter: 5,
        title: "The Son does the Father's works",
        lookFor: "Jesus speaks as the Son of God, and in the same breath calls Himself the Son of Man with authority to judge.",
        focus: "19-30",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "The Son: God's radiance and heir",
        lookFor: "The opening of Hebrews: the Son is the appointed heir of all things, the exact imprint of God's nature, addressed as God.",
        focus: "1-9",
      },
      {
        book: "Hebrews",
        chapter: 2,
        title: "Made like his brothers",
        lookFor: "The same Son is the man Jesus, crowned with glory through suffering, tasting death for everyone.",
        focus: "5-9",
      },
      {
        book: "Luke",
        chapter: 1,
        title: "The annunciation",
        lookFor: "Gabriel declares both: the child will be called the Son of the Most High, and the Holy Spirit will come on Mary so the holy one born will be called the Son of God.",
        focus: "30-35",
      },
      {
        book: "Mark",
        chapter: 14,
        title: "Before the high priest",
        lookFor: "The two titles meet in one answer: asked if He is the Son of the Blessed, Jesus answers that He is, and they will see the Son of Man coming with the clouds.",
        focus: "60-64",
      },
    ],
    points: [
      {
        heading: "Scripture gives Jesus both titles without apology",
        body:
          "Gabriel announces the child as the Son of the Most High, and in the next breath says He will sit on the throne of David. At the baptism, the Father calls Him 'my beloved Son.' And before the high priest, asked, 'Are you the Christ, the Son of the Blessed?' Jesus answered yes, and immediately named Himself the Son of Man coming with the clouds. The two titles belong to one Person.",
        verses: ["Luke 1:32", "Luke 1:35", "Mark 1:11", "Mark 14:61-62"],
      },
      {
        heading: "Son of God: His divine origin and majesty",
        body:
          "Hebrews opens with the Son as the appointed heir of all things, the radiance of God's glory, the exact imprint of God's nature, and it quotes the Father's own words to Him: 'Your throne, O God, is forever and ever.' Jesus taught that the Son does the Father's works and is honored just as the Father is honored. As the Son of God, He is God's equal.",
        verses: ["Hebrews 1:2-3", "Hebrews 1:5", "Hebrews 1:8", "John 5:19", "John 5:22", "John 5:23"],
      },
      {
        heading: "Son of Man: His full and real humanity",
        body:
          "The same Jesus is the Son of Man, as genuinely human as the title sounds. Hebrews applies the psalm to Him: made a little lower than the angels, crowned with glory and honor through suffering, tasting death for everyone. He shared in flesh and blood, was made like his brothers in every way, and was tempted in every way as we are, yet without sin. He is not a God pretending to be human; He is the God-man.",
        verses: ["Hebrews 2:6-9", "Hebrews 2:14", "Hebrews 2:17", "Hebrews 4:15", "Philippians 2:7-8"],
      },
      {
        heading: "Why both: only such a One can save us",
        body:
          "To reconcile God and man, the mediator must know both sides. If Jesus were only God, He could not die for men; if only a man, His death could not save. Paul names Him 'one mediator between God and men, the man Christ Jesus.' As the Son of Man He can suffer and die in our place; as the Son of God His death has infinite worth. The two titles are the two halves of the gospel's only bridge.",
        verses: ["1 Timothy 2:5", "Hebrews 4:14-15", "John 1:18", "1 John 2:1-2"],
      },
      {
        heading: "The church confesses both, because the Bible does",
        body:
          "Thomas met the risen Jesus and cried, 'My Lord and my God,' and the church has confessed Jesus as Lord and God ever since, without ever ceasing to confess that He is man. John saw Him as 'the one and only Son, who is in the bosom of the Father,' who lived among us full of grace and truth. Not a Jesus diminished to fit our categories: the fully divine Son of God who is also fully the Son of Man.",
        verses: ["John 20:28", "John 1:14", "John 1:18", "Philippians 2:9-11"],
      },
    ],
    keyVerses: ["Mark 14:61-62", "John 5:22-23", "Hebrews 1:3", "Hebrews 2:9", "1 Timothy 2:5"],
    raises: ["how-can-one-person-be-fully-god-and-fully-man"],
    followsFrom: ["what-does-it-mean-that-jesus-is-the-son-of-god", "who-is-jesus"],
    related: ["why-did-jesus-call-himself-son-of-man", "what-does-it-mean-that-jesus-is-the-son-of-god", "is-jesus-really-god", "does-jesus-sharing-gods-nature-mean-two-gods"],
    planned: [],
    order: 20,
  },

  {
    slug: "is-the-son-of-man-title-judgment-or-mercy",
    question: "Is the Son of Man title about judgment or mercy?",
    category: "jesus-christ",
    summary:
      "Both, and neither is half of the truth: the Son of Man is the Judge appointed by the Father, and He is the One who came to seek and save the lost. Judgment is real, and it is His; mercy is His first movement, and it is real. The two meet at the cross, where the Judge took our condemnation so that those who trust Him need not fear the day of judgment.",
    passages: [
      {
        book: "Daniel",
        chapter: 7,
        title: "The judgment is set, and one like a son of man draws near",
        lookFor: "The ancient scene behind everything: the court is seated, the books are opened, and the Son of Man receives the everlasting kingdom.",
        focus: "9-14",
      },
      {
        book: "Matthew",
        chapter: 25,
        title: "The Son of Man gathers the nations",
        lookFor: "Jesus spells out the judgment: the Son of Man on his throne separates the sheep from the goats.",
        focus: "31-46",
      },
      {
        book: "Luke",
        chapter: 19,
        title: "Zacchaeus meets the seeking Son of Man",
        lookFor: "The same Jesus who is the Judge stops at the tree, invites Himself to dinner, and says He came to seek and save.",
        focus: "1-10",
      },
      {
        book: "John",
        chapter: 5,
        title: "The Son judges; the believer has already passed from death to life",
        lookFor: "Judgment is given to the Son; and hearing His word with faith brings eternal life now.",
        focus: "19-30",
      },
      {
        book: "John",
        chapter: 3,
        title: "Lifted up, like the serpent in the wilderness",
        lookFor: "The Son of Man is lifted up so that whoever believes in Him should not perish: the judgment and the mercy in one act.",
        focus: "14-18",
      },
    ],
    points: [
      {
        heading: "The title carries both notes from the start",
        body:
          "In Daniel's vision, the Son of Man approaches the Ancient of Days as the court is seated and the books are opened, and to Him is given an everlasting kingdom: the figure of Daniel 7 is a judge receiving a crown. And in the Gospels the same Jesus says the Son of Man came to seek and to save the lost. Judgment and rescue are not two different characters; they are two works of the same Lord.",
        verses: ["Daniel 7:10", "Daniel 7:13-14", "Luke 19:10", "Matthew 18:11"],
      },
      {
        heading: "Judgment is real, and it belongs to Him",
        body:
          "John is blunt: 'The Father judges no one, but he has given all judgment to the Son... because he is a son of man.' Paul preached that God has appointed this man to judge the world in righteousness, and Jesus described that day: the Son of Man on his throne, the nations gathered, the sheep and the goats separated, and the eternal outcome declared. No one will face that judgment but through Him, and no one will miss it.",
        verses: ["John 5:22", "John 5:27", "Acts 10:42", "Acts 17:31", "Matthew 25:31-32", "Matthew 25:34", "Matthew 25:41", "Matthew 25:46"],
      },
      {
        heading: "Mercy is His first movement",
        body:
          "Before He ever speaks of the judgment seat, Jesus speaks of being lifted up so that whoever believes in Him will not perish. 'God didn't send his Son into the world to judge the world, but that the world should be saved through him.' To the woman caught in sin He said, 'Neither do I condemn you. Go your way. From now on, sin no more.' The mercy is not a door He opens reluctantly; it is why He came.",
        verses: ["John 3:16-17", "John 12:47", "John 8:11", "Luke 19:10"],
      },
      {
        heading: "The two meet at the cross",
        body:
          "In John 3, the mercy and the judgment are one act: the Son of Man is lifted up on the cross, and whoever believes in Him is not condemned, while whoever does not believe stands already condemned. Paul says the record that stood against us was nailed to the cross, taken out of the way. The Judge bore the judgment. The mercy cost Him everything, and the judgment is finished for everyone who trusts Him.",
        verses: ["John 3:14-15", "John 3:17-18", "Colossians 2:14", "Romans 8:1"],
      },
      {
        heading: "So how do we face the Judge?",
        body:
          "The answer Scripture gives is not fear or presumption; it is faith. Jesus said whoever hears His word and believes the Father has eternal life and does not come into judgment, but has passed out of death into life. John adds that love gives us boldness in the day of judgment, because we are in Christ. The same Judge who will one day separate the nations is the Brother who was tempted as we are. Draw near to His throne of grace now, and you will find mercy.",
        verses: ["John 5:24", "1 John 4:17", "Hebrews 4:15-16", "Romans 8:1"],
      },
    ],
    keyVerses: ["John 5:22", "Luke 19:10", "John 3:17", "Romans 8:1", "1 John 4:17"],
    raises: ["what-is-the-final-judgment-and-who-will-be-there"],
    followsFrom: ["why-did-jesus-call-himself-son-of-man", "why-is-jesus-both-son-of-god-and-son-of-man"],
    related: ["why-did-jesus-call-himself-son-of-man", "what-happens-when-i-die", "is-god-in-control"],
    planned: [],
    order: 21,
  },

  // ------------------------------------------------------------------
  // TRAIL: Our Walk with Him (continued)
  // ------------------------------------------------------------------
  {
    slug: "born-again-and-baptism",
    question: "What is the difference between being born again and being baptized?",
    category: "our-walk",
    summary:
      "Being born again is the Spirit's work of giving new life within; baptism is the water sign of that new life, given to believers, by which they are publicly joined to Christ in His death and resurrection. One is the reality God does in the heart; the other is the sign that declares it to the world.",
    passages: [
      {
        book: "John",
        chapter: 3,
        title: "Nicodemus and the new birth",
        lookFor: "Jesus is clear: the new birth is from above, by water and the Spirit, and it is mysterious, like the wind.",
        focus: "1-21",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "Repent and be baptized",
        lookFor: "Peter joins them: repent, be baptized in the name of Jesus Christ, and receive the gift of the Holy Spirit.",
        focus: "37-41",
      },
      {
        book: "Acts",
        chapter: 8,
        title: "Samaria believes and is baptized",
        lookFor: "The pattern in one account: they believe the gospel preached, they are baptized, and the Spirit comes upon them.",
        focus: "4-17",
      },
      {
        book: "Acts",
        chapter: 10,
        title: "Cornelius: the Spirit first, then water",
        lookFor: "The order is flexible: here the Spirit falls on believers before the water, and Peter baptizes them at once.",
        focus: "44-48",
      },
      {
        book: "Romans",
        chapter: 6,
        title: "Baptized into Christ's death",
        lookFor: "What baptism means: union with Christ, buried with Him, raised to walk in newness of life.",
        focus: "1-11",
      },
    ],
    points: [
      {
        heading: "The new birth is the Spirit's work in the heart",
        body:
          "Jesus told Nicodemus that no one can see or enter the kingdom of God without being born again: born of water and the Spirit, like the wind, unseen and real. John adds that God's children are born not of blood or human will, but of God. Nothing you do produces it; it is a birth you receive.",
        verses: ["John 3:3", "John 3:5-6", "John 3:8", "John 1:12-13"],
      },
      {
        heading: "Baptism is the sign and confession of that new life",
        body:
          "Peter preached: 'Repent, and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of sins, and you will receive the gift of the Holy Spirit.' Those who received the word were baptized the same day. Baptism is the water sign of cleansing and of being joined to Christ: Paul describes it as being buried with Christ and raised to walk in newness of life, and as putting on Christ.",
        verses: ["Acts 2:38", "Acts 2:41", "Romans 6:3-4", "Colossians 2:12", "Galatians 3:27"],
      },
      {
        heading: "Faith comes first; baptism follows",
        body:
          "Everywhere in Acts, faith leads and baptism follows. The Samaritans believed the good news and were baptized; even there, the Spirit came upon them only afterward. The eunuch asked what could keep him from the water after believing; and Cornelius and his household received the Spirit while Peter was still speaking and were baptized immediately after. The order can flex, but the direction never does: baptism is for those who have believed.",
        verses: ["Acts 8:12", "Acts 8:16", "Acts 8:36", "Acts 10:44", "Acts 10:47-48", "Acts 19:5"],
      },
      {
        heading: "The sign points to the reality, it does not replace it",
        body:
          "Peter explains: baptism is a symbol that saves you, 'not the putting away of the filth of the flesh, but the answer of a good conscience toward God.' The water does not wash away sin; it pictures the cleansing Christ gives through faith in His death and resurrection. When Paul speaks of being saved through the washing of regeneration and renewal by the Holy Spirit, it is the Spirit's renewing work, not the water, that washes. The sign is precious; the reality it declares is what saves.",
        verses: ["1 Peter 3:21", "Romans 6:4", "Titus 3:5"],
      },
      {
        heading: "One new life, one baptism",
        body:
          "Paul names the great unities of the faith: 'one Lord, one faith, one baptism.' There are not many ways to be born again, and there is not one baptism for one kind of person and another for a different kind. All who belong to Christ share the same new birth and confess it in the same baptism, into the same body by the same Spirit.",
        verses: ["Ephesians 4:5", "1 Corinthians 12:13", "Galatians 3:27"],
      },
    ],
    keyVerses: ["John 3:5-6", "Acts 2:38", "Romans 6:3-4", "1 Peter 3:21", "Colossians 2:12"],
    raises: [],
    followsFrom: ["what-does-it-mean-to-be-born-again", "how-can-i-be-saved"],
    related: ["what-is-baptism", "what-does-it-mean-to-be-born-again", "how-do-i-receive-the-holy-spirit"],
    planned: ["Does baptism wash away sin?"],
    order: 20,
  },

  {
    slug: "what-the-new-life-looks-like",
    question: "What does the new life look like day to day?",
    category: "our-walk",
    summary:
      "The new life is a new direction more than an instant perfection: it is daily abiding in Christ, walking by the Spirit, feeding on the Word, praying, belonging to the church, and getting back up when we fall. It looks like a life that is being renewed, not a life that has already arrived.",
    passages: [
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "A new creation in Christ",
        lookFor: "The old has passed away; everything has become new. This is where the new life begins.",
        focus: "14-21",
      },
      {
        book: "Colossians",
        chapter: 3,
        title: "Set your minds on things above",
        lookFor: "Paul's portrait of the new life: put off the old self, put on the new, and let the word of Christ dwell richly.",
        focus: "1-17",
      },
      {
        book: "John",
        chapter: 15,
        title: "The vine and the branches",
        lookFor: "Jesus shows the daily secret: remain in Him, and you bear fruit; apart from Him, nothing.",
        focus: "1-8",
      },
      {
        book: "Ephesians",
        chapter: 4,
        title: "Put off the old, put on the new",
        lookFor: "The concrete shape of change: speech that builds up, and a heart that forgives as it has been forgiven.",
        focus: "17-32",
      },
      {
        book: "1 John",
        chapter: 1,
        title: "Walk in the light",
        lookFor: "A realistic picture of daily life: we walk in the light, and when we stumble we confess and are cleansed.",
        focus: "5-10",
      },
    ],
    points: [
      {
        heading: "A new direction, not instant perfection",
        body:
          "Paul does not promise that a believer wakes up flawless. He says that in Christ you are a new creation: the old things have passed away, and in Christ they have truly become new, and are being renewed day by day. He who began a good work in you will carry it on, and even Paul himself said, 'Not that I have already obtained, or am already made perfect; but I press on.'",
        verses: ["2 Corinthians 5:17", "Colossians 3:9-10", "Philippians 1:6", "Philippians 3:12"],
      },
      {
        heading: "The daily secret is abiding",
        body:
          "Jesus gave the whole new life in one picture: remain in Him, and He in you, for He said, 'apart from me you can do nothing.' The branch does not strain to make fruit; it stays joined to the vine. So the daily walk is not grim effort but remaining in Christ and walking by His Spirit, even as the flesh pulls the other way.",
        verses: ["John 15:4-5", "John 15:8", "John 15:16", "Galatians 5:16", "Galatians 5:17"],
      },
      {
        heading: "It feeds on the Word and renews the mind",
        body:
          "The new life is shaped from the inside. Paul tells us to set our minds on the things that are above, and to be transformed by the renewing of the mind. The word of Christ is meant to dwell in us richly, teaching and admonishing one another in all wisdom. What fills the mind day by day slowly becomes what fills the life.",
        verses: ["Colossians 3:1-2", "Colossians 3:16", "Romans 12:2"],
      },
      {
        heading: "It keeps the practices that feed the flame",
        body:
          "The new life is lived in ordinary, repeatable habits. Rejoice always, pray without ceasing, give thanks in everything. Do not neglect meeting together, but stir one another to love and good works. Seek first His kingdom, and present your body as a living sacrifice. These are not the fuel of salvation; they are the steady breathing of a life that already belongs to God.",
        verses: ["1 Thessalonians 5:16-18", "Hebrews 10:24-25", "Matthew 6:33", "Romans 12:1-2"],
      },
      {
        heading: "It is dressed in Christ's character, and it gets back up",
        body:
          "Paul names the new clothes: compassion, kindness, humility, gentleness, patience, and, over them all, love. He puts away bitterness and slander, and he both receives and gives forgiveness: 'as Christ forgave you, so you also do.' And when a believer falls, the new life does not end: he who confesses is forgiven and cleansed. A righteous man falls seven times and rises again, and every morning God's mercies are new.",
        verses: ["Colossians 3:12-14", "Ephesians 4:29", "Ephesians 4:31-32", "1 John 1:7-9", "Proverbs 24:16", "Lamentations 3:22-23"],
      },
    ],
    keyVerses: ["2 Corinthians 5:17", "John 15:4-5", "Colossians 3:12-14", "1 John 1:9", "Galatians 5:16"],
    raises: ["how-do-i-fight-sin"],
    followsFrom: ["what-does-it-mean-to-be-born-again", "born-again-and-baptism"],
    related: ["born-again-and-baptism", "how-do-i-fight-sin", "how-do-i-pray", "who-is-the-holy-spirit", "what-are-spiritual-gifts"],
    planned: ["How do I grow in Christlikeness?"],
    order: 22,
  },

  {
    slug: "spirits-witness-or-my-own-feelings",
    question: "How do I know the Spirit's witness from my own feelings?",
    category: "our-walk",
    summary:
      "The Spirit's witness is a fact grounded in God's promise, not a mood to be chased. He testifies with our spirit that we are God's children; we hold that testimony by faith in what God has said, not by the shifting temperature of our feelings. Feelings are real, but the Word is the anchor.",
    passages: [
      {
        book: "Romans",
        chapter: 8,
        title: "The Spirit of adoption",
        lookFor: "The Spirit himself testifies with our spirit that we are children of God: the witness, and no more bondage to fear.",
        focus: "1-17",
      },
      {
        book: "Galatians",
        chapter: 4,
        title: "The Spirit crying 'Abba, Father'",
        lookFor: "Because we are sons, God sent the Spirit of His Son into our hearts, crying 'Abba, Father!'",
        focus: "4-7",
      },
      {
        book: "2 Corinthians",
        chapter: 1,
        title: "Sealed, with the Spirit as the down payment",
        lookFor: "God has sealed us and given us the Spirit as the down payment: assurance rooted in His doing, not our feeling.",
        focus: "18-22",
      },
      {
        book: "1 John",
        chapter: 3,
        title: "When our heart condemns us",
        lookFor: "The honest cases: when our hearts condemn us, God is greater than our hearts and knows all things.",
        focus: "19-24",
      },
      {
        book: "Hebrews",
        chapter: 10,
        title: "Draw near in full assurance of faith",
        lookFor: "The invitation: draw near with a true heart, fully assured, because of what Christ has done.",
        focus: "19-25",
      },
    ],
    points: [
      {
        heading: "The witness is a fact, not a feeling",
        body:
          "Paul does not tell the Romans to check their emotional weather: he tells them 'the Spirit himself testifies with our spirit that we are children of God.' It is an ongoing testimony, anchored in God's own doing. God has sealed us and given us the Spirit as the down payment of our inheritance: a pledge, not a pulse.",
        verses: ["Romans 8:16", "2 Corinthians 1:22", "Ephesians 1:13-14"],
      },
      {
        heading: "It is about who you belong to, not what you feel",
        body:
          "The Spirit's presence is what marks you as Christ's: 'if any man doesn't have the Spirit of Christ, he is not his.' And the Spirit you have received is not a spirit of slavery leading back into fear, but the Spirit of adoption, by whom you cry, 'Abba, Father!' The question is not how full of feeling you are right now, but whose child you are.",
        verses: ["Romans 8:9", "Romans 8:15", "Galatians 4:6"],
      },
      {
        heading: "Feelings are real, but they are not the test",
        body:
          "John assumes believers sometimes feel condemned: 'if our heart condemns us, God is greater than our heart, and knows all things' and when our hearts do not condemn us, we have boldness toward God. Your feelings about yourself are not the final word, because God's knowledge of you is truer than your feelings about you. Paul's test is objective: test whether Christ is in you, by the reality of faith and the Spirit, not by the strength of an emotion.",
        verses: ["1 John 3:19-20", "2 Corinthians 13:5", "1 John 3:21"],
      },
      {
        heading: "We hold the witness by faith in the promise",
        body:
          "John ties the testimony to belief: 'He who believes in the Son of God has the testimony in himself.' The way to hold the Spirit's witness when feelings dip is not to manufacture a feeling but to believe what God has promised. God's love has been poured into our hearts through the Holy Spirit, and we draw near to Him with a true heart in full assurance of faith.",
        verses: ["1 John 5:10", "Romans 5:5", "Hebrews 10:22"],
      },
      {
        heading: "Fear and assurance cannot live in the same house",
        body:
          "John says perfect love casts out fear, and that God's love gives us boldness on the day of judgment; and he writes so that we may know we have eternal life, for he who has the Son has the life. Certainty, not guesswork: the Spirit's witness does not make you conceited; it makes you safe. When the heart grows loud, the Word is louder.",
        verses: ["1 John 4:18", "1 John 4:17", "1 John 5:13", "1 John 5:12"],
      },
    ],
    keyVerses: ["Romans 8:16", "2 Corinthians 1:22", "Galatians 4:6", "1 John 5:10", "1 John 5:13"],
    raises: [],
    followsFrom: ["can-i-lose-my-salvation", "who-is-the-holy-spirit", "how-do-i-receive-the-holy-spirit"],
    related: ["can-i-lose-my-salvation", "what-is-faith", "how-do-i-know-the-spirit-is-leading-me"],
    planned: ["What does holy living have to do with assurance?"],
    order: 23,
  },

  {
    slug: "does-god-use-our-failures",
    question: "Does God use our failures for our good?",
    category: "our-walk",
    summary:
      "Yes. Scripture's own story is full of people whose worst hours God worked into something good: Joseph's betrayal, Peter's denial, Paul's thorn. The promise of Romans 8 is that God works all things, even our failures, for good for those who love Him, and the good He is working is our growth into the likeness of Christ.",
    passages: [
      {
        book: "Genesis",
        chapter: 50,
        title: "Joseph: 'You meant evil against me, but God meant it for good'",
        lookFor: "Joseph looks back over years of betrayal and prison and sees God's hand: evil meant against him, worked for good.",
        focus: "14-21",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "All things work for good",
        lookFor: "The great promise, and its definition of 'good': being conformed to the image of God's Son.",
        focus: "18-30",
      },
      {
        book: "2 Corinthians",
        chapter: 12,
        title: "Paul's thorn and God's grace",
        lookFor: "Paul's humbling weakness, three prayerful appeals, and the answer: my grace is sufficient for you.",
        focus: "1-10",
      },
      {
        book: "Luke",
        chapter: 22,
        title: "Peter's denial, and the prayer that held him",
        lookFor: "Jesus foretells Peter's fall, prays that his faith not fail, and sends him to strengthen his brothers after he turns back.",
        focus: "24-34",
      },
      {
        book: "Philippians",
        chapter: 1,
        title: "In prison, the gospel advances",
        lookFor: "Even Paul's chains 'have turned out rather to the progress of the Good News': confinement became opportunity.",
        focus: "12-21",
      },
    ],
    points: [
      {
        heading: "God has done this before",
        body:
          "Joseph's brothers sold him into slavery, lied about it, and left him for dead; years later Joseph looked them in the eye and said, 'You meant evil against me, but God meant it for good.' It is one of the most hopeful sentences in the Bible, and it is not a theory: it is what had actually happened in a real family, over decades.",
        verses: ["Genesis 50:20", "Genesis 37:26-28", "Genesis 39:21-23"],
      },
      {
        heading: "The promise is wide, and the good is specific",
        body:
          "Paul writes that all things work together for good for those who love God and are called according to His purpose: not that every event is good in itself, but that God works them all into His good. And the good is named: that we might be conformed to the image of His Son. The goal is not merely our happiness; it is our Christlikeness, and that is worth suffering for.",
        verses: ["Romans 8:28", "Romans 8:29", "Romans 8:18", "Romans 5:3-5"],
      },
      {
        heading: "Our failures do not have the last word",
        body:
          "Peter swore he would never deny Jesus, and then did it three times, in the very courtyard Jesus had warned him about. But Jesus had prayed for him: 'that your faith wouldn't fail. You, when once you have turned again, establish your brothers.' The failure was real, and so was the grace. There is no condemnation for those in Christ, and confession brings cleansing.",
        verses: ["Luke 22:31-32", "Romans 8:1", "1 John 1:9"],
      },
      {
        heading: "Even our humbling is made to serve us",
        body:
          "Paul was given 'a thorn in the flesh' to keep him humble, and he begged three times for it to be removed. God's answer was not an explanation; it was grace: 'My grace is sufficient for you, for my power is made perfect in weakness.' Paul then wrote that believers are pressed on every side, yet not crushed. The weakness we wish away is often the very place God's strength is seen.",
        verses: ["2 Corinthians 12:7-9", "2 Corinthians 4:8-9", "2 Corinthians 12:10"],
      },
      {
        heading: "He weaves our falls into growth and usefulness",
        body:
          "After the suffering, 1 Peter promises that the God of all grace himself perfects, establishes, strengthens, and settles us. The psalmist learned from his affliction, and Paul could say his imprisonment advanced the gospel. The failures are not the whole story, and they are not wasted: God works them into the character of Christ in us and into usefulness for His kingdom.",
        verses: ["1 Peter 5:10", "Psalm 119:71", "Philippians 1:12", "Romans 8:28-29"],
      },
    ],
    keyVerses: ["Genesis 50:20", "Romans 8:28", "Romans 8:29", "2 Corinthians 12:9", "Luke 22:32"],
    raises: [],
    followsFrom: ["what-happens-when-i-sin", "why-does-god-allow-suffering"],
    related: ["what-happens-when-i-sin", "can-i-lose-my-salvation", "why-does-god-allow-suffering"],
    planned: ["What if I keep repeating the same sin?"],
    order: 24,
  },

  {
    slug: "where-does-temptation-come-from",
    question: "Where does temptation come from?",
    category: "our-walk",
    summary:
      "Temptation rises from within, from our own desires, and it is also pressed on us from without, by a real enemy who distorts God's word. It never comes from God. Temptation itself is not sin, and its power is broken by the Word, by faith, and by the way of escape God promises to provide.",
    passages: [
      {
        book: "Genesis",
        chapter: 3,
        title: "The serpent and the fall",
        lookFor: "The first temptation: a question that distorts what God said, aimed at desire and doubt.",
        focus: "1-7",
      },
      {
        book: "James",
        chapter: 1,
        title: "Trials, temptation, and the Giver of good gifts",
        lookFor: "James separates testing from temptation, names the source within us, and clears God of any blame.",
        focus: "1-18",
      },
      {
        book: "Matthew",
        chapter: 4,
        title: "Jesus tempted in the wilderness",
        lookFor: "The devil tempts the Son of God directly, and Jesus answers every assault with the Word.",
        focus: "1-11",
      },
      {
        book: "1 Corinthians",
        chapter: 10,
        title: "No temptation beyond what you can bear",
        lookFor: "Israel's history as a warning, and the promise of a way of escape.",
        focus: "1-13",
      },
      {
        book: "Luke",
        chapter: 22,
        title: "The hour of trial",
        lookFor: "Jesus warns the disciples to pray so they will not enter temptation, even as He faces His own hour.",
        focus: "39-46",
      },
    ],
    points: [
      {
        heading: "It rises from our own desires",
        body:
          "James is wonderfully honest: 'each one is tempted, when he is drawn away by his own lust, and enticed.' The bait is usually an unholy desire we already carry, not an idea dropped from nowhere. That is why the fight begins in the heart: the lust, when it has conceived, bears sin, and sin, full grown, produces death.",
        verses: ["James 1:14", "James 1:15"],
      },
      {
        heading: "It is pressed on us from without",
        body:
          "There is a real enemy who wants you to fall. He is the one who came to Eve and asked whether God had really said; Paul warns that Satan masquerades as an angel of light and that the serpent deceived Eve by his craftiness; and Peter pictures him as 'a roaring lion' seeking someone to devour. Temptation is not only internal wrestling; it is also a battle with a personal foe.",
        verses: ["Genesis 3:1", "2 Corinthians 11:3", "2 Corinthians 11:14", "1 Peter 5:8"],
      },
      {
        heading: "It never comes from God",
        body:
          "James rules it out completely: no one should say, when tempted, that they are being tempted by God, for God cannot be tempted by evil, and He Himself tempts no one. God tests and refines, but He never entices anyone to sin. When temptation comes, it has another source: our own desires and the enemy who feeds them.",
        verses: ["James 1:13", "James 1:2", "James 1:3"],
      },
      {
        heading: "Being tempted is not the same as sinning",
        body:
          "Jesus Himself was tempted, yet without sin, which proves that temptation in itself is not the fall; sin begins when we yield and the lust conceives. This matters: you cannot always stop the tempting thought from knocking, but you are not guilty for the knock, only for opening the door. He who was tempted now helps those who are tempted.",
        verses: ["Hebrews 4:15", "Hebrews 2:18", "James 1:14-15", "Matthew 4:1"],
      },
      {
        heading: "The way out is the Word, faith, and the escape He provides",
        body:
          "Jesus answered every temptation with 'It is written,' not by matching the devil's cleverness but by resting on the word. James urges: resist the devil, and he will flee. And Paul gives the anchor promise: God is faithful, He will not allow you to be tempted beyond what you can bear, and He will provide the way of escape. Watch and pray, and take up the shield of faith.",
        verses: ["Matthew 4:4", "James 4:7", "1 Corinthians 10:13", "Mark 14:38", "Ephesians 6:16", "1 Peter 5:9"],
      },
    ],
    keyVerses: ["James 1:13-15", "1 Corinthians 10:13", "Hebrews 4:15", "Matthew 4:4", "James 4:7"],
    raises: [],
    followsFrom: ["how-do-i-fight-sin", "what-happens-when-i-sin"],
    related: ["how-do-i-fight-sin", "who-is-satan", "what-is-the-flesh-versus-the-spirit", "who-is-the-father"],
    planned: ["How can I help someone caught in sin without falling myself?"],
    order: 25,
  },

  // ------------------------------------------------------------------
  // TRAIL: God the Father (continued)
  // ------------------------------------------------------------------
  {
    slug: "still-my-father-when-i-fail",
    question: "Why does He still call me son/daughter when I fail?",
    category: "god-the-father",
    summary:
      "Because belonging to God as a child rests on His adopting love and His promise, not on your performance. When His children fail, He does not stop being Father: He is the Father who runs to His returning child, who disciplines because He loves, and whose claim on you is a covenant, not a balance sheet.",
    passages: [
      {
        book: "Luke",
        chapter: 15,
        title: "The father runs to his son",
        lookFor: "The prodigal's failure changes everything about his condition, and nothing about whose son he is: the father runs to embrace him.",
        focus: "11-32",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "The Spirit of adoption",
        lookFor: "You received the Spirit of adoption, not a spirit of slavery to fear: you cry 'Abba, Father,' and the Spirit witnesses that you are God's child.",
        focus: "12-17",
      },
      {
        book: "Galatians",
        chapter: 4,
        title: "God sent His Son, that we might receive adoption",
        lookFor: "Adoption is something God did, not something you earned: He sent His Son and His Spirit so we could be called children.",
        focus: "4-7",
      },
      {
        book: "Hebrews",
        chapter: 12,
        title: "The Lord disciplines those He loves",
        lookFor: "Discipline is the mark of a son, not proof of being disowned: He treats us as children because He loves us.",
        focus: "5-11",
      },
      {
        book: "1 John",
        chapter: 3,
        title: "See what love the Father has given us",
        lookFor: "That we should be called children of God: a love that names us, whatever the world or our conscience says.",
        focus: "1-3",
      },
    ],
    points: [
      {
        heading: "Sonship is a gift of adoption, not a wage",
        body:
          "You were not adopted because you were good enough; you were adopted because God chose to. Paul says God sent His Son and poured out His Spirit so that we might receive adoption as children. The invitation is not 'prove yourself, and then I will call you son.' It is the opposite: because we are children of God, the Spirit cries out, 'Abba, Father!'",
        verses: ["Galatians 4:4-6", "Romans 8:15", "1 John 3:1", "Ephesians 1:5"],
      },
      {
        heading: "His love for you is a covenant, not a balance sheet",
        body:
          "Human parents can be a poor picture; God's love is not running on your record. 'We love him, because he first loved us.' Even when a mother could forget her nursing child, God says He will not forget us; His compassion is on those who fear Him. He does not keep a tally of your failures against the love He has pledged.",
        verses: ["1 John 4:10", "1 John 4:19", "Isaiah 49:15-16", "Psalm 103:13", "Romans 5:8"],
      },
      {
        heading: "The Father runs toward the returning child",
        body:
          "The prodigal rehearsed a speech about being treated as a hired servant, but he never got to the punchline. While he was still far off, his father saw him, was moved with compassion, ran to him, and embraced him. The robe, the ring, and the shoes came before any lecture. Failure did not make him less a son; the father received him still calling him 'this, my son,' and to the elder son's complaint he answered, 'Son, you are always with me, and all that is mine is yours': the son's place never depended on what he earned.",
        verses: ["Luke 15:20", "Luke 15:22-24", "Luke 15:31-32"],
      },
      {
        heading: "Discipline is the mark of a son, not proof of being disowned",
        body:
          "Hebrews tackles the very worry you have when you fail: it can feel like God has turned His back. But the Word says the Lord disciplines the one He loves, and chastises every son He receives. God deals with you as with children. It is painful for the moment, but it yields the peaceful fruit of righteousness; a father who does not discipline is not showing love, and He does discipline because you are His.",
        verses: ["Hebrews 12:6", "Hebrews 12:7", "Hebrews 12:10-11"],
      },
      {
        heading: "His voice still calls you His, and His forgiveness is complete",
        body:
          "When you fail, the enemy wants you to doubt the name; God points you back to the deed. 'Who is a God like you, who pardons iniquity... He will again have compassion on us. He will tread our iniquities under foot.' And if you sin, John reminds you: we have an advocate with the Father, Jesus Christ the righteous, the atoning sacrifice for our sins. And because Jesus was tempted in every way like us, yet without sin, we can draw near to the throne of grace and find mercy in time of need. You are not the one who holds your place in His family; He is.",
        verses: ["Micah 7:18-19", "1 John 2:1-2", "Romans 8:16-17", "Hebrews 4:15-16"],
      },
    ],
    keyVerses: ["1 John 3:1", "Romans 8:15", "Luke 15:20", "Hebrews 12:6", "Micah 7:19"],
    raises: ["does-god-use-our-failures", "how-does-god-discipline-his-children"],
    followsFrom: ["who-is-the-father", "does-god-use-our-failures"],
    related: ["who-is-the-father", "does-god-use-our-failures", "what-happens-when-i-sin", "can-i-lose-my-salvation"],
    planned: [],
    order: 21,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Gospel (continued)
  // ------------------------------------------------------------------
  {
    slug: "does-grace-mean-live-how-i-want",
    question: "Does grace mean I can live however I want?",
    category: "gospel",
    summary:
      "No. Grace does not loosen the grip of sin; it breaks it. The same grace that forgives is the grace that teaches: it frees us from slavery to sin, not from loyalty to Christ. To turn grace into a license to sin is to misunderstand what grace is for.",
    passages: [
      {
        book: "Romans",
        chapter: 6,
        title: "Shall we continue in sin that grace may abound?",
        lookFor: "Paul anticipates the very question and answers it bluntly: those who died to sin cannot live in it.",
        focus: "1-14",
      },
      {
        book: "Titus",
        chapter: 2,
        title: "Grace teaches us to say no",
        lookFor: "Grace is not silent about conduct: it has appeared, bringing salvation, and it instructs us to deny ungodliness.",
        focus: "11-14",
      },
      {
        book: "Galatians",
        chapter: 5,
        title: "Freedom, for love",
        lookFor: "You were called for freedom, but not freedom for the flesh: freedom that serves one another through love.",
        focus: "13-26",
      },
      {
        book: "1 Peter",
        chapter: 2,
        title: "Free, yet servants of God",
        lookFor: "Peter says live as free people, but never use your freedom as a cloak for wickedness.",
        focus: "9-16",
      },
      {
        book: "Jude",
        chapter: 1,
        title: "Turning grace into indecency",
        lookFor: "Jude's warning about those who twist the grace of God into a cover for loose living.",
        focus: "1-4",
      },
    ],
    points: [
      {
        heading: "The question is as old as the gospel",
        body:
          "Paul did not wait for someone to ask; he asked it for us: 'What shall we say then? Shall we continue in sin, that grace may abound?' And his answer is flat: 'May it never be! We who died to sin, how could we live in it any longer?' Grace is not a smaller view of sin; it is the power that took us out of sin's grip.",
        verses: ["Romans 6:1-2", "Romans 6:15"],
      },
      {
        heading: "Grace unites you to Christ, and that union changes everything",
        body:
          "Why can't a Christian keep sinning? Because of what grace did: you were baptized into Christ Jesus and into His death, so that the old self was crucified and you are no longer a slave of sin. Christ died for all, 'that those who live should no longer live to themselves, but to him who for their sakes died and rose again.' Under grace does not mean free to sin; it means free from it.",
        verses: ["Romans 6:2-6", "Romans 6:14", "2 Corinthians 5:15"],
      },
      {
        heading: "Grace is not permission; it is teaching",
        body:
          "Paul's own description of grace is anything but permissive: 'the grace of God has appeared, bringing salvation... instructing us... that denying ungodliness and worldly lusts, we would live soberly, righteously, and godly in this present world.' Grace forgives the past and trains the present. And Jude warns against 'turning the grace of our God into indecency.'",
        verses: ["Titus 2:11-12", "Jude 1:4"],
      },
      {
        heading: "Freedom is for love, not from love",
        body:
          "The freedom grace gives is freedom to love, not freedom from God. Paul says you were called to freedom; only do not use your freedom to indulge the flesh, but through love serve one another. Peter echoes it: live as free people, 'and not using your freedom for a cloak of wickedness, but as bondservants of God.' Paul adds a guardrail: 'all things are lawful for me,' but not all things are expedient, and he will not be brought under the power of anything. The freest man in the world is the one who is free to serve.",
        verses: ["Galatians 5:13", "1 Peter 2:16", "1 Corinthians 6:12"],
      },
      {
        heading: "The same grace forgives and re-creates",
        body:
          "Grace is one gift with two motions. It saves you: 'by grace you have been saved through faith.' And the very same grace re-creates you: 'we are his workmanship, created in Christ Jesus for good works, which God prepared before that we would walk in them.' Where sin once shaped you, grace now reshapes you. Forgiven and being remade: that is the life grace actually produces.",
        verses: ["Ephesians 2:8-10", "2 Corinthians 5:17", "Romans 6:23"],
      },
    ],
    keyVerses: ["Romans 6:1-2", "Romans 6:14", "Titus 2:11-12", "Galatians 5:13", "Ephesians 2:8-10"],
    raises: [],
    followsFrom: ["what-is-grace", "what-is-the-gospel"],
    related: ["what-is-grace", "what-is-justification", "how-do-i-fight-sin", "what-is-repentance"],
    planned: ["What does it mean to be a slave of righteousness?"],
    order: 27,
  },

  {
    slug: "what-is-imputation",
    question: "What does it mean that Christ's righteousness is 'imputed' to us?",
    category: "gospel",
    summary:
      "Imputation is the great exchange at the heart of the gospel: our sin laid on Christ at the cross, and His righteousness credited to our account. He took what we deserved; we receive what He earned. It is a legal transaction of grace, and it is the only ground on which a sinner can stand before God.",
    passages: [
      {
        book: "Genesis",
        chapter: 15,
        title: "Abraham believed, and it was credited to him",
        lookFor: "The first great picture of imputation: Abraham believes God, and it is reckoned to him as righteousness.",
        focus: "1-6",
      },
      {
        book: "Romans",
        chapter: 4,
        title: "Credited righteousness and forgiven sins",
        lookFor: "Paul unpacks imputation: God counts righteousness to the ungodly who believe, and David calls the man blessed whose sins are not counted.",
        focus: "1-25",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "The great exchange",
        lookFor: "God made Him who knew no sin to be sin for us, so that in Him we might become the righteousness of God.",
        focus: "17-21",
      },
      {
        book: "Philippians",
        chapter: 3,
        title: "Not my own righteousness",
        lookFor: "Paul counts everything as loss to have a righteousness that is not his own, but God's through faith in Christ.",
        focus: "4-11",
      },
      {
        book: "Isaiah",
        chapter: 53,
        title: "The righteous servant justifies many",
        lookFor: "The suffering servant bears our iniquities, and by His wounds many are accounted righteous.",
        focus: "4-12",
      },
    ],
    points: [
      {
        heading: "The word is about what is credited to your account",
        body:
          "'Imputed' is an accounting word: to reckon, to credit, to charge to an account. The Bible's first use is God crediting righteousness to Abraham: 'Abraham believed God, and it was accounted to him for righteousness.' Paul insists it is not a wage for work but a gift received by faith, credited to the one who believes in Him who justifies the ungodly.",
        verses: ["Genesis 15:6", "Romans 4:3", "Romans 4:5", "Romans 4:22"],
      },
      {
        heading: "Left to our own record, we stand condemned",
        body:
          "The account we bring to God on our own is a debt, not an asset: all have sinned and fall short of His glory, and the wages of sin is death. If we are judged on what we have done, no one is righteous, no not one. The clearing of that record is not something we can achieve; it must be done for us.",
        verses: ["Romans 3:23", "Romans 6:23", "Romans 3:10"],
      },
      {
        heading: "Christ came under our charge at the cross",
        body:
          "The other half of the exchange is ours to Him: God made Him who knew no sin to be sin on our behalf. Isaiah said Yahweh has laid on Him the iniquity of us all, and Peter that He bore our sins in His body on the tree. On the cross our guilt was charged to Christ, not canceled: He paid it, so it could not be charged to us.",
        verses: ["2 Corinthians 5:21", "Isaiah 53:6", "1 Peter 2:24", "Romans 4:25"],
      },
      {
        heading: "His righteousness is credited to our account",
        body:
          "Paul's yearning is to be found in Christ, 'not having a righteousness of my own, that which is of the law, but that which is through faith in Christ, the righteousness which is from God by faith.' David pronounced blessed the man to whom God credits righteousness apart from works, and the prophets even gave the coming King the name 'Yahweh our righteousness.' In Christ, God counts us righteous.",
        verses: ["Philippians 3:9", "Romans 4:6-8", "Romans 4:23-24", "Jeremiah 23:6", "1 Corinthians 1:30"],
      },
      {
        heading: "Why it matters: a full standing, no room to boast, real peace",
        body:
          "Imputation gives a whole standing before God: not a partial improvement but a complete righteousness received by faith. It rules out boasting, because the righteousness is not our own. And it gives peace: being justified by faith, we have peace with God through our Lord Jesus Christ. The one who could have held our debt against us has washed the record clean and credited us with His own.",
        verses: ["Romans 5:1", "Romans 3:27", "Romans 8:1", "Romans 4:7-8"],
      },
    ],
    keyVerses: ["2 Corinthians 5:21", "Romans 4:3", "Philippians 3:9", "Isaiah 53:6", "Romans 5:1"],
    raises: ["what-price-can-buy-forgiveness"],
    followsFrom: ["what-is-justification", "faith-or-works", "what-is-grace"],
    related: ["what-is-justification", "faith-or-works", "how-can-i-be-saved", "what-is-grace"],
    planned: ["If I am already credited righteous, why does obedience matter?"],
    order: 28,
  },

  {
    slug: "is-it-okay-to-doubt",
    question: "Is it okay to have doubts sometimes?",
    category: "gospel",
    summary:
      "Yes. Doubt is not the same as unbelief: unbelief is a settled refusal of Christ, while doubt is a question that still wants Him. Scripture shows believers struggling, asking, even demanding answers, and Jesus met them with gentleness, not distance. Bring your doubts to Him, and hold the promise while the feelings waver.",
    passages: [
      {
        book: "John",
        chapter: 20,
        title: "Thomas doubts, and believes",
        lookFor: "Thomas refuses to believe without seeing, and Jesus meets him where he is and blesses those who believe without seeing.",
        focus: "24-31",
      },
      {
        book: "Mark",
        chapter: 9,
        title: "Help my unbelief",
        lookFor: "A father's honest cry: 'I believe. Help my unbelief!' and Jesus' ready answer to his boy.",
        focus: "14-29",
      },
      {
        book: "Matthew",
        chapter: 11,
        title: "John's question from prison",
        lookFor: "Even the Baptist, who had pointed to Jesus, asks if He is the Coming One, and Jesus answers with grace.",
        focus: "2-19",
      },
      {
        book: "Psalm",
        chapter: 73,
        title: "Asaph's struggle with God's ways",
        lookFor: "A psalmist's honest doubt about the prosperity of the wicked, resolved only when he goes into the sanctuary.",
        focus: "1-28",
      },
      {
        book: "2 Timothy",
        chapter: 1,
        title: "I know whom I have believed",
        lookFor: "Paul's confidence: not that he knows all the answers, but that he knows the One he has trusted.",
        focus: "6-14",
      },
    ],
    points: [
      {
        heading: "Doubt is not the same as unbelief",
        body:
          "Unbelief is a settled decision that Christ is not worth trusting; doubt is an open question that is still reaching for Him. The father in Mark 9 brought both at once: 'I believe. Help my unbelief!' and Jesus did not scold him for the honesty; He healed his son. A struggling faith is still faith, so long as it is still looking to Christ.",
        verses: ["Mark 9:24", "Mark 9:22-23"],
      },
      {
        heading: "Honest doubt brought to Jesus is welcomed",
        body:
          "Thomas demanded to see the nail marks, yet he stayed with the disciples, and Jesus came to him and offered exactly what he asked for. Even John the Baptist, from a prison cell, asked through his disciples, 'Are you he who comes, or should we look for another?' Jesus answered by pointing to His works, and blessed the one who finds no occasion for stumbling in Him. Doubt is safe in His hands.",
        verses: ["John 20:27", "John 20:29", "Matthew 11:3", "Matthew 11:6"],
      },
      {
        heading: "God is not threatened by our questions",
        body:
          "Asaph ended envious and confused about why the wicked prosper, and he said plainly that his feet had almost slipped. Yet he brought it into the sanctuary, into the presence of God, and there his understanding cleared. James tells the one who lacks wisdom to ask God, who gives generously without reproach. Bring the hard questions to Him rather than burying them or letting them drive you away.",
        verses: ["Psalm 73:2", "Psalm 73:16-17", "James 1:5"],
      },
      {
        heading: "Faith finally rests on a Person, not on answers",
        body:
          "Paul's confidence was not that he had resolved every question but that he knew the One he had trusted: 'I know him whom I have believed, and I am persuaded that he is able to guard that which I have committed to him.' Faith is assurance of things hoped for: it holds to Christ when the answers are slow. And nothing, Paul insists, can separate us from His love.",
        verses: ["2 Timothy 1:12", "Hebrews 11:1", "Romans 8:38-39", "Proverbs 3:5"],
      },
      {
        heading: "The danger is a doubt that refuses Christ, not one that seeks Him",
        body:
          "The warning in Scripture is not against asking questions; it is against a double-mindedness that will not commit, a faith tossed like a wave. Doubt that drives you back to Christ is an invitation; doubt that keeps you away from Him is a danger to resist. Keep returning to the Word, to the Body of Christ, and to His table, and bring the wavering heart to the One who strengthens the weak, holding the faith that, though tested by fire, is more precious than gold.",
        verses: ["James 1:6", "Jude 1:22", "1 Peter 1:6-7"],
      },
    ],
    keyVerses: ["Mark 9:24", "John 20:29", "Matthew 11:6", "2 Timothy 1:12", "Hebrews 11:1"],
    raises: ["why-does-god-seem-silent", "what-is-faith"],
    followsFrom: ["what-is-faith", "can-i-lose-my-salvation"],
    related: ["what-is-faith", "can-i-lose-my-salvation", "spirits-witness-or-my-own-feelings", "why-does-god-seem-silent"],
    planned: ["Why does God seem to hide Himself sometimes?"],
    order: 29,
  },

  {
    slug: "repentance-one-time-or-lifelong",
    question: "Is repentance a one-time decision or a lifelong posture?",
    category: "gospel",
    summary:
      "Both. Repentance begins with a decisive turning at conversion, and it continues as a lifelong posture of turning back whenever we wander. The same word covers the once-for-all turn and the daily re-turn; both are real, both are the work of grace, and heaven rejoices over each one.",
    passages: [
      {
        book: "Matthew",
        chapter: 3,
        title: "Produce fruit worthy of repentance",
        lookFor: "John's baptism of repentance, and his demand that real repentance show in the fruit of a changed life.",
        focus: "1-12",
      },
      {
        book: "Luke",
        chapter: 15,
        title: "Joy over one sinner who repents",
        lookFor: "The parables of the lost sheep and the lost coin: each one is a picture of the joy of a sinner's repentance.",
        focus: "1-10",
      },
      {
        book: "Acts",
        chapter: 26,
        title: "Repent, and turn to God",
        lookFor: "Paul's testimony to Agrippa: he preached repentance toward God, with works worthy of repentance.",
        focus: "12-23",
      },
      {
        book: "Revelation",
        chapter: 2,
        title: "The churches called to repent",
        lookFor: "The risen Christ calls whole churches to repent, and to repent again: 'repent, and do the first works.'",
        focus: "1-7",
      },
      {
        book: "Mark",
        chapter: 1,
        title: "Repent, and believe the Good News",
        lookFor: "Jesus begins His own preaching with the call to repent and believe: the doorway and the path.",
        focus: "1-15",
      },
    ],
    points: [
      {
        heading: "Repentance begins with a decisive turning",
        body:
          "Jesus' first words in Mark are 'Repent, and believe in the Good News.' Peter's summons is explicit: 'Repent therefore, and turn again, that your sins may be blotted out.' There is a first repentance, a turning around that marks the start of the journey with Christ, and the New Testament takes it with a seriousness that leaves no room for delay.",
        verses: ["Mark 1:15", "Acts 3:19", "Luke 13:3"],
      },
      {
        heading: "It continues as a lifelong posture",
        body:
          "The risen Christ does not tell the Ephesian church to repent once and be finished; He tells this already-begun church, 'repent and do the first works.' And to another He says, 'I gave her time to repent.' Repentance is not only the door a believer walks through; it is the way they keep walking, turning back whenever they recognize they have wandered.",
        verses: ["Revelation 2:5", "Revelation 2:21", "2 Peter 3:9"],
      },
      {
        heading: "Real repentance shows in fruit",
        body:
          "John the Baptist refused to accept claimed repentance without evidence: 'Produce fruit worthy of repentance!' Paul preached the same, that people 'should repent and turn to God, doing works worthy of repentance.' Repentance is not a feeling of regret that goes nowhere; it is a turning that changes direction, and a changed direction shows.",
        verses: ["Matthew 3:8", "Acts 26:20", "Luke 19:8-9"],
      },
      {
        heading: "It is the doorway, and it is also the path",
        body:
          "Hebrews calls repentance a foundational principle: 'repentance from dead works' is part of the foundation, not the building itself. And yet believers are told to go on repenting when they stray. Repentance opens the door to the kingdom, and it is also the road by which the kingdom's citizens keep coming home. It is not the whole of the Christian life; it is the turning at its heart.",
        verses: ["Hebrews 6:1", "Luke 24:47", "Acts 20:21"],
      },
      {
        heading: "Each turning is met by an open Father",
        body:
          "Nothing makes repentance bitter: 'godly sorrow works repentance to salvation, which brings no regret.' And heaven is not grudging about it: 'there will be more joy in heaven over one sinner who repents' over ninety-nine who need no repentance. To repent is not to grovel; it is to come home, and every time you turn, the Father is already running toward you.",
        verses: ["2 Corinthians 7:10", "Luke 15:7", "1 John 1:9", "Luke 15:20"],
      },
    ],
    keyVerses: ["Matthew 3:8", "Acts 26:20", "2 Corinthians 7:10", "Revelation 2:5", "Luke 15:7"],
    raises: ["what-happens-when-i-sin", "does-god-use-our-failures"],
    followsFrom: ["what-is-repentance", "what-is-the-gospel"],
    related: ["what-is-repentance", "what-happens-when-i-sin", "how-do-i-fight-sin", "does-grace-mean-live-how-i-want"],
    planned: ["What is the difference between godly sorrow and worldly regret?"],
    order: 30,
  },

  // ------------------------------------------------------------------
  // TRAIL: Suffering & God's Will (continued)
  // ------------------------------------------------------------------
  {
    slug: "where-is-god-in-my-pain",
    question: "Where is God in my specific pain?",
    category: "suffering-will",
    summary:
      "God is not distant from your pain; He is near to it. He knows your specific tears, He is with you in the valley, and He has entered suffering Himself in Christ. His presence in pain is not a vague comfort but a covenant promise, and He is working even the deepest valley toward good.",
    passages: [
      {
        book: "Psalm",
        chapter: 34,
        title: "Yahweh is near to the brokenhearted",
        lookFor: "The nearness of God to those who are crushed in spirit, and the invitation to taste and see that He is good.",
        focus: "15-22",
      },
      {
        book: "Psalm",
        chapter: 23,
        title: "Through the valley of the shadow of death",
        lookFor: "The Shepherd walks through the valley with his sheep; the comfort is not escape but presence.",
      },
      {
        book: "John",
        chapter: 16,
        title: "In the world you have trouble, but I have overcome",
        lookFor: "Jesus is honest about the trouble His people face, and promises His peace and His victory.",
        focus: "25-33",
      },
      {
        book: "2 Corinthians",
        chapter: 1,
        title: "The God of all comfort",
        lookFor: "The Father of mercies comforts us in all our affliction, so that we can comfort others.",
        focus: "3-11",
      },
      {
        book: "1 Peter",
        chapter: 4,
        title: "Suffer as a Christian, entrusting your soul to a faithful Creator",
        lookFor: "Peter's frame for suffering: rejoice to share Christ's sufferings, and entrust your soul to the faithful Creator.",
        focus: "12-19",
      },
    ],
    points: [
      {
        heading: "God draws near to the broken",
        body:
          "The psalmist says it plainly: 'Yahweh is near to those who have a broken heart, and saves those who have a crushed spirit.' God does not wait for you to be whole before He comes close; He is nearest when you are most broken. He heals the broken in heart and binds up their wounds, and He says He dwells with the contrite and humble to revive their spirit.",
        verses: ["Psalm 34:18", "Psalm 147:3", "Isaiah 57:15"],
      },
      {
        heading: "He knows your specific pain",
        body:
          "Your suffering is not anonymous to God. The psalmist could say to Him, 'You number my wanderings. You put my tears into your bottle.' Jesus taught that the very hairs of your head are numbered. This is not a God who handles suffering in general; this is a God who knows exactly what you are carrying, and who has counted it.",
        verses: ["Psalm 56:8", "Matthew 10:30", "Psalm 139:1-4"],
      },
      {
        heading: "He is with you in the valley",
        body:
          "The twenty-third psalm does not promise we will never walk through the valley; it promises the Shepherd is there: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.' God's word through Isaiah is the same: 'When you pass through the waters, I will be with you.' And He adds, 'Don't you be afraid, for I am with you. Don't be dismayed, for I am your God. I will strengthen you.' His presence is the promise: He is with you always, even to the end of the age, a stronghold in the day of trouble who knows those who take refuge in Him.",
        verses: ["Psalm 23:4", "Isaiah 41:10", "Isaiah 43:2", "Matthew 28:20", "Nahum 1:7"],
      },
      {
        heading: "Christ entered our suffering Himself",
        body:
          "In Gethsemane, Jesus said His soul was exceedingly sorrowful even to death, and He prayed that the cup might pass. He was 'a man of suffering, and acquainted with disease,' and at the tomb of His friend the Scriptures record two words: 'Jesus wept.' He does not watch our pain from a distance; He has known it, and He is able to help those who are suffering and tempted.",
        verses: ["Matthew 26:38-39", "Isaiah 53:3", "John 11:35", "Hebrews 2:18", "Hebrews 4:15-16"],
      },
      {
        heading: "He is working it toward good, and one day He will wipe every tear",
        body:
          "For those who love God, all things work together for good, even the things that feel nothing like good today. God is 'the Father of mercies and God of all comfort; who comforts us in all our affliction' so that we can comfort others. And the end is not vague; it is a promise: 'He will wipe away from them every tear from their eyes... The first things have passed away.' Even on the darkest day, He does not cast off forever; though He cause grief, He will have compassion, and He does not afflict willingly. Courage: in the world you have trouble, but He has overcome the world.",
        verses: ["Romans 8:28", "2 Corinthians 1:3-4", "Revelation 21:4", "John 16:33", "Lamentations 3:31-33"],
      },
    ],
    keyVerses: ["Psalm 34:18", "Psalm 23:4", "Isaiah 41:10", "2 Corinthians 1:3-4", "John 16:33"],
    raises: ["is-god-in-control", "why-does-god-seem-silent", "does-god-use-our-failures"],
    followsFrom: ["why-does-god-allow-suffering"],
    related: ["why-does-god-allow-suffering", "who-is-the-father", "why-does-god-seem-silent", "is-god-in-control"],
    planned: ["How long will this suffering last?"],
    order: 30,
  },

  {
    slug: "do-my-choices-matter",
    question: "If God controls everything, do my choices matter?",
    category: "suffering-will",
    summary:
      "Yes, and more than they would if God were not in control. Scripture holds God's sovereign plan and our real choices together without embarrassment: His plan undergirds our freedom rather than erasing it. He ordains the end, yet He calls us to choose, repent, and obey, and our choices have real consequences.",
    passages: [
      {
        book: "Acts",
        chapter: 2,
        title: "The cross: God's plan and men's hands",
        lookFor: "Peter holds both in one sentence: delivered up by God's determined plan, yet killed by the hand of lawless men.",
        focus: "22-41",
      },
      {
        book: "Acts",
        chapter: 4,
        title: "Whatever your hand and your counsel foreordained",
        lookFor: "The church's prayer: Herod, Pilate, and the nations did whatever God's hand and counsel had foreordained.",
        focus: "23-31",
      },
      {
        book: "Genesis",
        chapter: 50,
        title: "You meant evil, but God meant it for good",
        lookFor: "Joseph's brothers acted freely and wrongly, and God overruled their choice for good.",
        focus: "14-21",
      },
      {
        book: "Joshua",
        chapter: 24,
        title: "Choose this day whom you will serve",
        lookFor: "God's people are summoned to a real, consequential choice, with no hint that it is a formality.",
        focus: "1-28",
      },
      {
        book: "Philippians",
        chapter: 2,
        title: "Work out, for God works in you",
        lookFor: "Paul joins the urgency of our effort with the reality of God's working, in the same sentence.",
        focus: "12-13",
      },
    ],
    points: [
      {
        heading: "Scripture holds both together without embarrassment",
        body:
          "Peter states it in a single verse: Jesus was 'delivered up by the determined counsel and foreknowledge of God,' and yet was 'taken by the hand of lawless men,' crucified and killed. The church's prayer says the same: Herod, Pilate, the Gentiles, and Israel gathered together to do whatever God's hand and counsel had foreordained. Scripture does not see a conflict; it affirms both.",
        verses: ["Acts 2:23", "Acts 4:27-28"],
      },
      {
        heading: "The cross proves that God works through real choices",
        body:
          "The worst act ever done, the murder of the Son of God, was at once foreordained by God and freely committed by responsible men who were held accountable. And God wove that evil into the very salvation of the world. Joseph said it of his brothers' betrayal: 'You meant evil against me, but God meant it for good.' If God can do that with the worst free choice, your choices under His care are far from meaningless.",
        verses: ["Acts 2:23", "Acts 4:27-28", "Genesis 50:20"],
      },
      {
        heading: "God summons you to real choices",
        body:
          "Joshua did not tell Israel their decision was predetermined but irrelevant; he commanded them: 'Choose this day whom you will serve.' Moses set life and death before the people and urged, 'choose life.' Peter's sermon at Pentecost did not say no one could decide; it called on them to repent and be baptized. The urgency of such calls only makes sense if our decisions are real and matter.",
        verses: ["Joshua 24:15", "Deuteronomy 30:19", "Acts 2:38", "2 Peter 3:9"],
      },
      {
        heading: "Our choices have real consequences",
        body:
          "The farmer who sows to his flesh will reap corruption; the one who sows to the Spirit will reap eternal life. Jesus wept over Jerusalem, crying that He had longed to gather her children 'and you would not!' Ezekiel pleads with the wicked: 'turn yourselves, and live,' for God takes no pleasure in their death. Judgment and blessing treat our decisions as significant rather than as theater.",
        verses: ["Galatians 6:7-8", "Matthew 23:37", "Ezekiel 18:30-32", "2 Corinthians 5:10"],
      },
      {
        heading: "God's sovereignty undergirds, not undermines, our effort",
        body:
          "Paul puts our responsibility and God's work in the closest possible relationship: 'work out your own salvation with fear and trembling, for it is God who works in you both to will and to work, for his good pleasure.' God's working is not the reason to slacken; it is the ground of our confidence and the power behind every good choice. He works all things for good for those who are called, even conforming them to Christ.",
        verses: ["Philippians 2:12-13", "Romans 8:28", "Romans 8:29-30"],
      },
    ],
    keyVerses: ["Acts 2:23", "Genesis 50:20", "Philippians 2:12-13", "Galatians 6:7", "Deuteronomy 30:19"],
    raises: ["how-do-i-know-gods-will", "what-does-it-mean-that-god-is-sovereign"],
    followsFrom: ["is-god-in-control", "why-does-god-allow-suffering"],
    related: ["is-god-in-control", "why-does-god-allow-suffering", "faith-or-works"],
    planned: [],
    order: 31,
  },

  {
    slug: "what-if-i-make-the-wrong-decision",
    question: "What if I make the wrong decision?",
    category: "suffering-will",
    summary:
      "God is not thrown off course by your wrong turns. He guides His people, He works all things for good for those who love Him, and even our mistaken choices fall within His sovereign care. Ask for wisdom, own the mistake before Him, and keep trusting the One who will complete the good work He began.",
    passages: [
      {
        book: "Proverbs",
        chapter: 3,
        title: "Trust in Yahweh with all your heart",
        lookFor: "The promise that God makes straight the paths of those who acknowledge Him in all their ways.",
        focus: "1-12",
      },
      {
        book: "Psalm",
        chapter: 37,
        title: "Commit your way to the Lord",
        lookFor: "The Lord establishes a good man's steps, and holds him up even when he stumbles.",
        focus: "1-9",
      },
      {
        book: "Jeremiah",
        chapter: 29,
        title: "Plans of peace to give you hope and a future",
        lookFor: "God's word to exiles in a wrong turn of their own history: He has thoughts of peace and a future for them.",
        focus: "4-14",
      },
      {
        book: "James",
        chapter: 1,
        title: "If any of you lacks wisdom",
        lookFor: "The open invitation to ask God for wisdom, who gives generously and without reproach.",
        focus: "1-8",
      },
      {
        book: "Philippians",
        chapter: 3,
        title: "Forgetting what is behind, press on",
        lookFor: "Paul's posture after his own life of wrong turns: forget what is behind, and press on toward the goal.",
        focus: "7-14",
      },
    ],
    points: [
      {
        heading: "You are not left to guess alone",
        body:
          "James promises that if any of you lacks wisdom, let him ask of God, who gives liberally and without reproach. Proverbs ties trusting God to straight paths: trust in Yahweh with all your heart, and do not lean on your own understanding; acknowledge Him in all your ways, and He will make your paths straight. A man plans his course, but the Lord directs his steps.",
        verses: ["James 1:5", "Proverbs 3:5-6", "Proverbs 16:9"],
      },
      {
        heading: "God is sovereign over the outcome",
        body:
          "You do not carry the weight of the future alone. For those who love God, all things work together for good. He who began a good work in you will carry it on to completion. Even God's word to exiled Israel in a season of their own failure was a plan for good: 'thoughts of peace, and not of evil, to give you hope and a future.' Your wrong turn is not the end of His purposes.",
        verses: ["Romans 8:28", "Philippians 1:6", "Jeremiah 29:11", "Genesis 50:20"],
      },
      {
        heading: "His guidance is usually wisdom, not a hidden map",
        body:
          "God has already told us most of what we need to decide well. Micah sums it up: 'to act justly, to love mercy, and to walk humbly with your God.' Jesus adds: seek first His kingdom and His righteousness. The difficult decisions are usually made in the same way as the easy ones: by wisdom, Scripture, prayer, and godly counsel, trusting that a heart set on Him is being guided by Him.",
        verses: ["Micah 6:8", "Matthew 6:33", "Proverbs 3:5-6", "Romans 12:2"],
      },
      {
        heading: "Even a wrong step can be redeemed",
        body:
          "The psalm promises that though a good man stumbles, he shall not fall, because the Lord holds him up with His hand. God's track record is written in redemptive detours: Joseph's brothers meant evil, but God meant it for good. Your choice is not beyond His reach; He has a long history of bending fallen choices toward His purposes, not because the wrong was right, but because His grace is larger.",
        verses: ["Psalm 37:23-24", "Genesis 50:20", "Romans 8:28"],
      },
      {
        heading: "The way forward after a mistake",
        body:
          "When you realize you chose wrongly, do not spiral or freeze: own it before God, for He is faithful to forgive and cleanse when we confess. Ask for the wisdom you lacked, and then press on. Paul, who had made ruinously wrong choices in his past, said it best: forgetting what is behind and straining toward what is ahead, I press on toward the goal. One step of faithfulness after a fall is still faithfulness.",
        verses: ["1 John 1:9", "James 1:5", "Philippians 3:13-14", "Lamentations 3:22-23"],
      },
    ],
    keyVerses: ["Proverbs 3:5-6", "Romans 8:28", "James 1:5", "Psalm 37:23-24", "Philippians 3:13-14"],
    raises: ["how-do-i-know-gods-will", "does-god-use-our-failures"],
    followsFrom: ["how-do-i-know-gods-will", "do-my-choices-matter"],
    related: ["how-do-i-know-gods-will", "do-my-choices-matter", "does-god-use-our-failures", "is-it-okay-to-doubt"],
    planned: ["How do I recover from a decision I deeply regret?"],
    order: 32,
  },

  {
    slug: "does-god-have-one-plan-for-my-marriage",
    question: "Does God have one specific plan for who I marry?",
    category: "suffering-will",
    summary:
      "The Bible does not teach that there is one hidden 'soulmate' you must discover, as if missing them meant missing God's will. It does teach that marriage is a covenant of great weight, entered with wisdom, holiness, and faith, and it gives clear counsel: marry a believer, marry in the Lord, and build the marriage on Christ. The choice is yours, made in faith under His guidance.",
    passages: [
      {
        book: "Genesis",
        chapter: 2,
        title: "The first marriage",
        lookFor: "It is not good for the man to be alone; the two become one flesh, a covenant of leaving and cleaving.",
        focus: "18-25",
      },
      {
        book: "2 Corinthians",
        chapter: 6,
        title: "Do not be unequally yoked",
        lookFor: "The clearest single principle for choosing a spouse: what fellowship has light with darkness?",
        focus: "14-18",
      },
      {
        book: "1 Corinthians",
        chapter: 7,
        title: "Married only in the Lord",
        lookFor: "Paul's counsel on marriage and singleness: the freedom and gift of the unmarried, and marriage 'only in the Lord.'",
        focus: "25-40",
      },
      {
        book: "Proverbs",
        chapter: 31,
        title: "The worthy wife",
        lookFor: "What Scripture holds up in a spouse: character, diligence, kindness, and the fear of the Lord.",
        focus: "10-31",
      },
      {
        book: "Matthew",
        chapter: 19,
        title: "What God has joined together",
        lookFor: "Jesus upholds the permanence of the marriage covenant, and honors singleness as a gift.",
        focus: "1-12",
      },
    ],
    points: [
      {
        heading: "Scripture gives principles, not a 'soulmate' map",
        body:
          "Nowhere does the Bible say God has secretly chosen one specific person for you to find, and that your whole future hinges on finding the exact one. It speaks of marriage in terms of wisdom, character, faithfulness, and covenant. The weight is placed not on decoding a hidden plan but on choosing with wisdom and holiness a person you can honor in the lifelong covenant of marriage.",
        verses: ["Genesis 2:24", "Proverbs 18:22", "Matthew 19:6"],
      },
      {
        heading: "The clearest command: marry 'in the Lord'",
        body:
          "Paul is direct: 'Don't be unequally yoked with unbelievers, for what fellowship have righteousness and iniquity?' And a widow is free to remarry, 'only in the Lord.' Amos asks, 'Do two walk together, unless they have agreed?' There is wisdom for every generation in that limit: a husband and wife are fellow travelers, and if they are walking two different directions, the journey fractures.",
        verses: ["2 Corinthians 6:14", "1 Corinthians 7:39", "Amos 3:3"],
      },
      {
        heading: "Character is the measure, not romance alone",
        body:
          "Scripture's portrait of a good spouse is a portrait of character. The worthy wife is praised not for beauty but because 'charm is deceitful, and beauty is vain; but a woman who fears Yahweh, she shall be praised.' Whoever finds a wife finds a good thing and obtains favor from the Lord. Look for a fearer of God, someone kind, faithful, and wise whom you can love and serve for a lifetime.",
        verses: ["Proverbs 31:10", "Proverbs 31:30", "Proverbs 18:22"],
      },
      {
        heading: "Marriage is a covenant of weight, not a transaction",
        body:
          "Marriage is not a romantic transaction God merely blesses; it is a covenant He joins. 'Therefore a man will leave his father and his mother, and will join with his wife, and they will be one flesh,' and Jesus adds, 'what therefore God has joined together, don't let man tear apart.' Husbands are called to love their wives as Christ loved the church. The 'specific plan' for marriage is to honor this covenant faithfully, with the person you have chosen, in the Lord.",
        verses: ["Genesis 2:24", "Matthew 19:6", "Ephesians 5:25"],
      },
      {
        heading: "Trust God with the person, and honor Him with the path",
        body:
          "Seek first His kingdom, and trust Him with the rest: 'trust in Yahweh with all your heart... and he will make your paths straight.' And remember that marriage is a gift, not the measure of a life: Paul affirms that the unmarried, like the married, can devote themselves to the Lord's things, and that each has his own gift from God. You are not required to solve a divine riddle; you are called to walk faithfully and let God order your steps.",
        verses: ["Matthew 6:33", "Proverbs 3:5-6", "1 Corinthians 7:32-34", "1 Corinthians 7:7"],
      },
    ],
    keyVerses: ["2 Corinthians 6:14", "1 Corinthians 7:39", "Genesis 2:24", "Proverbs 31:10", "Matthew 19:6"],
    raises: [],
    followsFrom: ["how-do-i-know-gods-will", "what-if-i-make-the-wrong-decision"],
    related: ["how-do-i-know-gods-will", "who-is-the-father", "what-the-new-life-looks-like"],
    planned: ["What makes a marriage glorify God?"],
    order: 33,
  },

  // ------------------------------------------------------------------
  // TRAIL: Prayer (continued)
  // ------------------------------------------------------------------
  {
    slug: "why-pray-your-will-be-done",
    question: "Why pray 'your will be done' if God already has a will?",
    category: "prayer",
    summary:
      "Praying 'your will be done' is not an attempt to bend the future around God's hesitation; it is the shape of trust itself. God's will stands regardless, but the prayer changes us, aligning our hearts with His, inviting us to ask within His will, and freeing us from the fear of outcomes.",
    passages: [
      {
        book: "Matthew",
        chapter: 6,
        title: "Jesus teaches us to pray it",
        lookFor: "The prayer Christ gave has 'let your will be done' at its center; it is not an appendix but the heart of the prayer.",
        focus: "5-15",
      },
      {
        book: "Matthew",
        chapter: 26,
        title: "Jesus prays it in Gethsemane",
        lookFor: "The Son pours out His honest desire and then submits: 'not what I desire, but what you desire.'",
        focus: "36-46",
      },
      {
        book: "1 John",
        chapter: 5,
        title: "Asking according to his will",
        lookFor: "We have boldness to ask God anything according to His will, and He listens.",
        focus: "13-21",
      },
      {
        book: "Acts",
        chapter: 21,
        title: "The Lord's will be done",
        lookFor: "When His people see that His will may mean hard things, they trust it anyway: 'The Lord's will be done.'",
        focus: "1-14",
      },
      {
        book: "Isaiah",
        chapter: 55,
        title: "My word will accomplish what I please",
        lookFor: "God's purposes are not fragile; His word goes out and accomplishes what He sends it to do.",
        focus: "10-11",
      },
    ],
    points: [
      {
        heading: "Jesus taught us to pray it, and then He lived it",
        body:
          "This phrase is not a footnote to the Lord's Prayer; it is its hinge: 'Let your Kingdom come. Let your will be done, as in heaven, so on earth.' And in Gethsemane Jesus prayed the very same thing in the agonies of His own soul: 'let this cup pass away from me; nevertheless, not what I desire, but what you desire.' He did not pray it reluctantly; He taught us to pray it expectantly.",
        verses: ["Matthew 6:10", "Matthew 26:39", "Luke 22:42"],
      },
      {
        heading: "God's will is not at risk; it stands",
        body:
          "The prayer assumes nothing about God being undecided. Proverbs says there are many plans in a man's heart, but Yahweh's counsel will prevail. Isaiah pictures God's word going out and accomplishing what He pleases, never returning empty. Daniel declares that God does according to His will in heaven and on earth, and no one can stay His hand. His will is not waiting on our approval; James even tells us to plan no further than 'if the Lord wills.'",
        verses: ["Proverbs 19:21", "Isaiah 55:11", "Daniel 4:35", "James 4:15"],
      },
      {
        heading: "Praying it aligns us to Him",
        body:
          "Honest prayer includes our real desires, exactly as Jesus voiced His. But it also hands them over: 'not my will, but yours, be done.' The prayer does not create God's will; it creates in us a heart that wants what He wants. Every time we pray it, we are saying, in effect, that His way is better than ours, and we lean our whole weight onto His wisdom.",
        verses: ["Luke 22:42", "Matthew 26:39", "Matthew 26:42"],
      },
      {
        heading: "He invites us to ask within His will",
        body:
          "Far from making prayer pointless, God makes it meaningful: 'if we ask anything according to his will, he listens to us.' The Spirit Himself helps us pray when we do not know how, making intercession for the saints according to God. Asking is not resistance to His rule; it is the way His will works through His people. He commands us to bring our requests, and He welcomes them.",
        verses: ["1 John 5:14", "1 John 5:15", "Romans 8:26-27", "Philippians 4:6"],
      },
      {
        heading: "It frees us to trust the outcome",
        body:
          "When the believers saw that God's will for Paul meant chains, they stopped trying to control the future and said, 'The Lord's will be done.' That was not resignation without hope; it was peace that had found a center. To pray 'your will be done' is to hand the outcome to the One who is both sovereign and good, and it is the prayer that turns our anxiety into resting in Him.",
        verses: ["Acts 21:13-14", "Philippians 4:6-7"],
      },
    ],
    keyVerses: ["Matthew 6:10", "Luke 22:42", "1 John 5:14", "Romans 8:27", "Proverbs 19:21"],
    raises: ["does-god-hear-my-prayers", "does-prayer-change-gods-mind"],
    followsFrom: ["what-does-the-lords-prayer-teach"],
    related: ["what-does-the-lords-prayer-teach", "how-do-i-pray", "does-god-hear-my-prayers", "how-do-i-know-gods-will"],
    planned: [],
    order: 34,
  },

  {
    slug: "gods-voice-or-my-own-thoughts",
    question: "How do I know God's voice from my own thoughts?",
    category: "prayer",
    summary:
      "God's voice comes to us today chiefly through His word, illumined by His Spirit, and confirmed by wisdom and the Body of Christ. His voice never contradicts Scripture, always points to Christ, and produces humility, holiness, and peace. Test every inner impression by the Word and by the fruit it bears, the way the Bereans tested even the teaching of the apostles.",
    passages: [
      {
        book: "John",
        chapter: 10,
        title: "The Shepherd's voice",
        lookFor: "Jesus pictures His people as sheep who recognize the Shepherd's voice and follow it.",
        focus: "1-30",
      },
      {
        book: "1 Corinthians",
        chapter: 2,
        title: "Spiritually discerned",
        lookFor: "The things of God are spiritually discerned: the Spirit searches the deep things of God and gives the mind of Christ.",
        focus: "6-16",
      },
      {
        book: "1 Thessalonians",
        chapter: 5,
        title: "Do not quench the Spirit; test all things",
        lookFor: "Paul joins the two: do not quench the Spirit, and test all things, holding firmly to what is good.",
        focus: "16-24",
      },
      {
        book: "2 Timothy",
        chapter: 3,
        title: "All Scripture is God-breathed",
        lookFor: "The place where God has most certainly spoken: every Scripture is breathed out by God and profitable for teaching.",
        focus: "10-17",
      },
      {
        book: "1 John",
        chapter: 4,
        title: "Test the spirits",
        lookFor: "We are told not to believe every spirit, but to test the spirits, because not every voice is from God.",
        focus: "1-6",
      },
    ],
    points: [
      {
        heading: "God's clearest voice is His word",
        body:
          "If you want to know God's voice, begin where He has certainly spoken. Paul says all Scripture is God-breathed and useful for teaching, reproof, correction, and training in righteousness. The psalmist calls it a lamp to the feet and a light to the path. And Jesus describes His people as sheep who hear His voice and follow: the Shepherd speaks, God spoke through the prophets, and in these last days He has spoken through His Son.",
        verses: ["2 Timothy 3:16-17", "Psalm 119:105", "John 10:27", "Hebrews 1:1-2"],
      },
      {
        heading: "His voice never contradicts His word",
        body:
          "John warns us plainly: 'don't believe every spirit, but test the spirits.' Even in the Old Testament, a prophet who turned the people from God was to be refused regardless of signs and wonders. The Bereans examined the Scriptures daily to check even the apostles' teaching, and Paul said that even an angel preaching a different gospel was to be rejected. Any impression that fights the Bible is not His voice.",
        verses: ["1 John 4:1", "Deuteronomy 13:1-3", "Acts 17:11", "Galatians 1:8"],
      },
      {
        heading: "The Spirit illumines the word in our hearts",
        body:
          "The natural person does not receive the things of the Spirit, for they are spiritually discerned; but the Spirit searches the deep things of God and gives us the mind of Christ. Jesus promised the Spirit would guide His people into all truth and glorify Him. The same Spirit who inspired the word also opens it to us, so that what is read becomes heard.",
        verses: ["1 Corinthians 2:10", "1 Corinthians 2:14", "1 Corinthians 2:16", "John 16:13", "John 16:14"],
      },
      {
        heading: "He confirms through wisdom, counsel, and peace",
        body:
          "God's leading is not usually a lone, unverifiable impression. James says if you lack wisdom, ask. Paul tells us not to quench the Spirit, yet also to test all things and hold firmly to what is good. Plan to weigh an impression against the wisdom of mature believers, and notice the fruit: what is true, honorable, and pure, letting the peace of Christ rule in your heart.",
        verses: ["James 1:5", "1 Thessalonians 5:19-21", "Philippians 4:8-9", "Colossians 3:15"],
      },
      {
        heading: "The test is what it produces",
        body:
          "The Spirit's voice glorifies Christ, and it produces His fruit: love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. God's voice never whispers you into pride, fear, or sin; it leads to humble obedience. We know that we know Him, John says, if we keep His commandments. The voice that tells you to walk as Christ walked, toward love and holiness, is the voice worth following.",
        verses: ["John 16:14", "Galatians 5:22-23", "1 John 2:3", "1 John 2:6"],
      },
    ],
    keyVerses: ["John 10:27", "2 Timothy 3:16-17", "1 Corinthians 2:14", "1 Thessalonians 5:19-21", "1 John 4:1"],
    raises: ["how-do-i-know-the-spirit-is-leading-me"],
    followsFrom: ["why-does-god-seem-silent", "how-do-i-pray"],
    related: ["why-does-god-seem-silent", "how-do-i-know-the-spirit-is-leading-me", "can-i-trust-the-bible", "is-it-okay-to-doubt"],
    planned: ["What should I do when God's voice is quiet?"],
    order: 35,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Word of God (continued)
  // ------------------------------------------------------------------
  {
    slug: "why-do-bible-translations-differ",
    question: "Why do Bible translations differ?",
    category: "word-of-god",
    summary:
      "Translations differ because the Bible came to us in Hebrew and Greek and has always been a translated book, and because translators make faithful choices: some versions aim for a more literal rendering, others for a clearer thought-for-thought one. The differences are matters of wording, not of message. Scripture itself shows the word being read, explained, and trusted: it is God-breathed, it endures, it is clear in what is essential, and from start to finish it speaks of Jesus. Because God has preserved and spoken His word, we can trust any faithful translation to give us His truth.",
    passages: [
      {
        book: "Nehemiah",
        chapter: 8,
        title: "Reading the law, giving the sense",
        lookFor: "Ezra and the Levites read the law and gave the sense of it, so the people understood: God's people have always needed the word made plain.",
        focus: "1-8",
      },
      {
        book: "Acts",
        chapter: 8,
        title: "The Ethiopian reading Isaiah",
        lookFor: "A man reading the Scriptures still needed help to understand, and Philip 'beginning from this Scripture, preached to him Jesus.'",
        focus: "26-40",
      },
      {
        book: "Luke",
        chapter: 24,
        title: "Jesus opens the Scriptures",
        lookFor: "Beginning from Moses and all the prophets, Jesus explained the things concerning Himself in all the Scriptures.",
        focus: "25-32",
      },
      {
        book: "2 Timothy",
        chapter: 3,
        title: "All Scripture is God-breathed",
        lookFor: "Whatever translation we read, it is this book that is God-breathed and profitable for teaching and training.",
        focus: "14-17",
      },
      {
        book: "John",
        chapter: 5,
        title: "The Scriptures testify about Jesus",
        lookFor: "The written word has one great subject: 'these are they which testify about me.'",
        focus: "36-40",
      },
    ],
    points: [
      {
        heading: "God's word is meant to be understood",
        body:
          "From the pages of Scripture itself, the word of God is read and explained so that people understand it. In Nehemiah, the Levites 'read in the book, in the law of God, distinctly; and they gave the sense, so that they understood the reading.' And on the road to Gaza, Philip found an official reading Isaiah aloud and asked, 'Do you understand what you are reading?' then explained it to him. God's word is not meant to stay locked in one language; it is meant to reach the heart of every reader.",
        verses: ["Nehemiah 8:8", "Acts 8:30", "Acts 8:35"],
      },
      {
        heading: "God's word endures through every faithful telling",
        body:
          "The message does not depend on one fragile copy or one perfect rendering. Isaiah declares that while grass withers and flowers fade, 'the word of our God stands forever'; Peter says the Lord's word endures forever. Jesus even insisted that not the smallest stroke of the law would pass away. Whatever faithful translation you hold, you are holding the enduring word of the God who has kept it across every age and every language.",
        verses: ["Isaiah 40:8", "1 Peter 1:25", "Matthew 5:18"],
      },
      {
        heading: "The word is clear in what matters most",
        body:
          "The Bible does not say its message is hidden and hard to find; it says the word is near, in your mouth and in your heart, that you may do it. Scripture is able to make a person wise for salvation through faith in Christ Jesus, and God's law, sure testimony, is 'making wise the simple.' The essentials of the faith, the gospel itself, are plain in every faithful translation; differences of rendering do not blur them.",
        verses: ["Deuteronomy 30:11", "Deuteronomy 30:14", "2 Timothy 3:15", "Psalm 19:7"],
      },
      {
        heading: "Every rendering points to one Person",
        body:
          "The whole book has a single subject. Jesus said, 'You search the Scriptures... and these are they which testify about me.' On the road to Emmaus, beginning from Moses and all the prophets, He explained the things concerning Himself in all the Scriptures. Translation can shift the shade of a word, but it cannot lose the central message: the Scriptures, in any faithful translation, are telling you about Jesus.",
        verses: ["John 5:39", "Luke 24:27"],
      },
      {
        heading: "We read with help, as the word has always been opened",
        body:
          "Understanding comes as the word is read with help, the way it has always been opened. The people in Ezra's day needed the law read distinctly and explained; the Ethiopian needed Philip to show him that the passage was about Jesus. The Spirit who inspired the word also opens it to us: the things of God are spiritually discerned. A good translation brings the word to you; reading it with an open heart, and with the Body of Christ, lets you hear the voice behind it.",
        verses: ["Nehemiah 8:8", "Acts 8:30", "Acts 8:35", "1 Corinthians 2:14"],
      },
    ],
    keyVerses: ["Nehemiah 8:8", "Acts 8:35", "2 Timothy 3:15", "John 5:39", "Luke 24:27"],
    raises: ["how-should-i-read-the-bible", "is-the-whole-bible-about-jesus"],
    followsFrom: ["can-i-trust-the-bible"],
    related: ["can-i-trust-the-bible", "how-should-i-read-the-bible", "is-the-whole-bible-about-jesus", "gods-voice-or-my-own-thoughts"],
    planned: ["What is the difference between the Old and New Testaments?"],
    order: 37,
  },

  {
    slug: "daily-habit-of-reading-the-bible",
    question: "How do I build a daily habit of reading the Bible?",
    category: "word-of-god",
    summary:
      "A daily Bible habit is built on grace, not guilt. Reading the word is a way of knowing Christ, and it grows the way such things do: by small, faithful steps, a simple plan, reading to obey, and company along the way. We read not to earn God's favor but because His word is a lamp to our feet and the voice of the One we love.",
    passages: [
      {
        book: "Psalm",
        chapter: 1,
        title: "Delight in the law, day and night",
        lookFor: "The blessed life begins with delight in God's word, meditated on day and night, like a tree planted by water.",
      },
      {
        book: "Psalm",
        chapter: 119,
        title: "Your word is a lamp to my feet",
        lookFor: "A whole psalm of love for God's word, including hiding it in the heart and finding light for the path.",
        focus: "9-16",
      },
      {
        book: "Deuteronomy",
        chapter: 6,
        title: "These words on your heart",
        lookFor: "God's words are to live in ordinary rhythms: when you sit, walk, lie down, and rise up. The habit is a whole-life posture.",
        focus: "1-9",
      },
      {
        book: "Joshua",
        chapter: 1,
        title: "Meditate on it day and night, so you do it",
        lookFor: "God tells Joshua the book must not leave his mouth: meditate and observe it, and his way will prosper.",
        focus: "1-9",
      },
      {
        book: "Acts",
        chapter: 17,
        title: "Examining the Scriptures daily",
        lookFor: "The Bereans received the word eagerly and examined the Scriptures daily to check what they were taught.",
        focus: "10-12",
      },
    ],
    points: [
      {
        heading: "Reading grows from delight, not from duty alone",
        body:
          "The blessed man does not merely schedule the word; he delights in it, meditating on God's law day and night like a tree planted by the streams of water. Psalm 119 is a love song to the word: the psalmist hides God's word in his heart so that he might not sin against Him, and calls it a lamp to his feet and a light to his path. A habit rooted in delight lasts; one kept only by guilt does not.",
        verses: ["Psalm 1:2", "Psalm 119:11", "Psalm 119:105"],
      },
      {
        heading: "Make it small, steady, and woven into your day",
        body:
          "Moses told Israel that God's words were to be on their hearts and spoken of when they sat at home and walked along the way, when they lay down and when they rose. Joshua was told to let the book not depart from his mouth, meditating on it day and night. The habit does not need to be long or spectacular; it needs to be faithful, a few minutes every day finding their way into the ordinary turns of your life.",
        verses: ["Deuteronomy 6:6-7", "Joshua 1:8"],
      },
      {
        heading: "Read with a plan, and let the word build the habit",
        body:
          "A simple plan helps: a book at a time, or a passage a day, read slowly and prayed over. What sustains the habit is not resolve alone but the word itself, which is living and active, able to discern the thoughts and intentions of the heart. Jesus said the Scriptures testify about Him, so the more you read with Him in view, the more you will want to keep reading. The habit feeds on the hunger it creates.",
        verses: ["Hebrews 4:12", "John 5:39"],
      },
      {
        heading: "Read to obey",
        body:
          "A Bible read rightly is a Bible lived. James warns against being hearers only, who see their face in the mirror and then forget, and commends the one who looks into the perfect law and continues in it. Paul says Scripture is profitable for teaching, reproof, correction, and training in righteousness, so that the man of God may be complete. Reading changes you when you do what you read.",
        verses: ["James 1:22-25", "2 Timothy 3:16-17"],
      },
      {
        heading: "Do it with others, and start again tomorrow",
        body:
          "The Bereans examined the Scriptures daily, checking what they were taught, and they were commended for it. Hebrews urges us not to neglect gathering together, to stir one another to love and good works. When a day is missed, do not let one miss become a week: start again. The word is not a mountain you must summit in one season; it is a path you walk in, step by step, for a lifetime.",
        verses: ["Acts 17:11", "Hebrews 10:24-25"],
      },
    ],
    keyVerses: ["Psalm 1:2", "Psalm 119:105", "Joshua 1:8", "Acts 17:11", "James 1:22"],
    raises: ["how-should-i-read-the-bible", "why-do-bible-translations-differ", "is-the-whole-bible-about-jesus"],
    followsFrom: ["how-should-i-read-the-bible"],
    related: ["how-should-i-read-the-bible", "why-do-bible-translations-differ", "can-i-trust-the-bible", "what-the-new-life-looks-like"],
    planned: ["How can I understand hard passages in the Bible?"],
    order: 38,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Church (continued)
  // ------------------------------------------------------------------
  {
    slug: "what-is-a-healthy-church",
    question: "What does a healthy church look like?",
    category: "church",
    summary:
      "A healthy church is not a perfect church; it is one that keeps the apostolic marks: faithful teaching of the word, the gospel at its center, love among its members as a real body, prayer and the Table practiced together, and care that reaches both inward and outward. It grows as every part does its work under Christ the head.",
    passages: [
      {
        book: "Acts",
        chapter: 2,
        title: "The marks of the first church",
        lookFor: "They devoted themselves to the apostles' teaching, fellowship, the breaking of bread, and prayer; and the Lord added to them daily.",
        focus: "42-47",
      },
      {
        book: "Ephesians",
        chapter: 4,
        title: "Growing up into Christ the head",
        lookFor: "The church is a body being built up in love, as each part works so that it grows into Christ.",
        focus: "1-16",
      },
      {
        book: "1 Corinthians",
        chapter: 12,
        title: "One body, many members",
        lookFor: "The church is not an audience but a body: every member has a place, and none is unnecessary.",
        focus: "12-27",
      },
      {
        book: "Acts",
        chapter: 20,
        title: "Guard the flock",
        lookFor: "Paul entrusts the church to elders who are to shepherd the flock God purchased with His own blood.",
        focus: "17-32",
      },
      {
        book: "Revelation",
        chapter: 2,
        title: "What Christ commends",
        lookFor: "Christ's own words to a church: your deeds, your labor, your endurance, and this, that you have not grown weary.",
        focus: "1-7",
      },
    ],
    points: [
      {
        heading: "It is a word-and-grace community",
        body:
          "The first church kept four clear marks: 'the apostles' teaching and fellowship, in the breaking of bread, and prayer.' Paul entrusted the elders to God 'and to the word of his grace, which is able to build up,' and he told a young pastor to preach the word in season and out of season. A healthy church is built on the teaching of Scripture and on the gospel of grace; when the word is faithful, the church has a spine.",
        verses: ["Acts 2:42", "Acts 20:32", "2 Timothy 4:2", "2 Timothy 3:16"],
      },
      {
        heading: "It is a body, not a crowd",
        body:
          "Paul is blunt: 'Now you are the body of Christ, and members individually.' When one member suffers, all suffer with it; when one is honored, all rejoice. Christ gave shepherds and teachers to the church so that the whole body, fitted and knit together, grows up into Him who is the head. A healthy church is not a room of spectators; it is a working body in which every member has a place.",
        verses: ["1 Corinthians 12:12", "1 Corinthians 12:26", "1 Corinthians 12:27", "Ephesians 4:11-12", "Ephesians 4:15-16"],
      },
      {
        heading: "Love is its defining mark",
        body:
          "Jesus gave one sign by which His disciples would be known: 'By this everyone will know that you are my disciples, if you have love for one another.' Paul names what that love looks like in the church, bearing with one another and forgiving as Christ forgave. And the greatest of the three enduring things, Paul insists, is love. Programs may come and go, but a church that loves is unmistakably Christ's.",
        verses: ["John 13:34-35", "Colossians 3:12-14", "1 Corinthians 13:13"],
      },
      {
        heading: "It gathers to practice the means of grace",
        body:
          "Healthy churches keep gathering. The first church broke bread and prayed together, praising God, and 'the Lord added to the assembly day by day those who were being saved.' Hebrews urges us not to forsake meeting together but to stir one another to love and good works. And Paul pictures the word of Christ dwelling richly in the assembly, teaching and admonishing with song. The gathered life matters.",
        verses: ["Acts 2:46-47", "Hebrews 10:24-25", "Colossians 3:16"],
      },
      {
        heading: "It shepherds the flock and reaches out",
        body:
          "Paul's charge is weighty: elders are to shepherd the flock of God, the assembly 'which he purchased with his own blood.' And the church's mission is outward as well as inward: Jesus sent His disciples to make disciples of all nations, baptizing and teaching all that He commanded. A healthy church cares for its own and does not forget the world; it guards the sheep and goes to the lost.",
        verses: ["Acts 20:28", "1 Peter 5:2", "Matthew 28:19-20"],
      },
    ],
    keyVerses: ["Acts 2:42", "1 Corinthians 12:27", "John 13:35", "Hebrews 10:24-25", "Ephesians 4:15-16"],
    raises: ["what-is-baptism", "what-is-the-lords-supper", "what-does-a-church-need-from-its-leaders"],
    followsFrom: ["why-do-i-need-the-church"],
    related: ["why-do-i-need-the-church", "what-should-i-do-now-that-im-saved", "what-the-new-life-looks-like"],
    planned: [],
    order: 40,
  },

  {
    slug: "who-should-be-baptized",
    question: "Should infants be baptized, or only believers?",
    category: "church",
    summary:
      "In the New Testament, baptism is given to those who repent and believe, following a profession of faith: the Gospels and Acts consistently show belief leading to baptism. Some faithful churches, seeing the covenant as one sign given from infancy, baptize the young children of believers as well. This is an honest difference among godly Christians, tried since the early church. Follow Scripture, your church, and a clear conscience, and hold the shared center: baptism belongs to those who belong to Christ.",
    passages: [
      {
        book: "Acts",
        chapter: 2,
        title: "Repent, and be baptized",
        lookFor: "The pattern Peter gives: repent and be baptized in the name of Jesus Christ, and those who received his word were baptized that day.",
        focus: "37-41",
      },
      {
        book: "Acts",
        chapter: 8,
        title: "The eunuch's confession",
        lookFor: "A man reading Scripture is baptized after hearing and believing the good news about Jesus.",
        focus: "26-39",
      },
      {
        book: "Acts",
        chapter: 16,
        title: "The jailer's household",
        lookFor: "The question, the answer, and the baptism: 'Believe in the Lord Jesus Christ, and you will be saved, you and your household'; he was baptized that very hour.",
        focus: "25-34",
      },
      {
        book: "Colossians",
        chapter: 2,
        title: "Baptism as the new covenant sign",
        lookFor: "Paul links baptism to circumcision: a circumcision not made with hands, buried with Christ in baptism.",
        focus: "11-14",
      },
      {
        book: "Genesis",
        chapter: 17,
        title: "The old covenant sign given to infants",
        lookFor: "God's covenant sign was received by children at eight days old: the background some churches draw on for infant baptism.",
        focus: "9-14",
      },
    ],
    points: [
      {
        heading: "In the New Testament, faith leads to baptism",
        body:
          "The consistent New Testament picture is a person believing and then being baptized. Peter tells the crowd, 'Repent, and be baptized, every one of you,' and 'those who gladly received his word were baptized.' The eunuch is baptized after believing; the jailer is told to believe in the Lord Jesus and is baptized immediately, he and his whole household, having believed in God. Wherever Acts shows people baptized, faith has come first.",
        verses: ["Acts 2:38", "Acts 2:41", "Acts 8:36", "Acts 16:31", "Acts 16:33", "Acts 16:34"],
      },
      {
        heading: "Baptism is for disciples",
        body:
          "Jesus' command links baptism to discipleship: make disciples of all nations, baptizing them and teaching them to observe all that He commanded. Baptism is the sign given to those who are being made disciples, who have heard the word, believed, and come. In the pages of the New Testament, it is the mark of a person who has entered the school of Christ, not merely a stamp on a birth.",
        verses: ["Matthew 28:19-20", "Acts 8:38"],
      },
      {
        heading: "The households that were baptized",
        body:
          "The Gospels and Acts speak of whole households being baptized: Lydia and her household, the jailer and all his, the household of Stephanas. Faithful readers understand these differently. Some see in them entire families, including little children, baptized with the believing head. Others point out that in the accounts the household 'believed' and 'rejoiced greatly, with all his household, having believed in God,' and so see believers baptized with their believing children and household. The text is read both ways, and has been for centuries.",
        verses: ["Acts 16:15", "Acts 16:33-34", "1 Corinthians 1:16"],
      },
      {
        heading: "The covenant view: the sign from infancy",
        body:
          "Those who baptize infants point to the covenant. In the Old Testament, God's sign was given to children at eight days old, as a token of the covenant with their parents (Genesis 17:11-12). Paul links baptism to circumcision as the New Testament counterpart, a circumcision 'not made with hands' in Christ, and Peter says 'the promise is to you, and to your children.' On this reading, the sign belongs to believers and their covenant children, as circumcision did.",
        verses: ["Genesis 17:11-12", "Colossians 2:11-12", "Acts 2:39"],
      },
      {
        heading: "How to hold this difference as a family of God",
        body:
          "This is a question the church has never settled into one answer, and both sides have loved the Lord and His word. What Scripture does make plain is that the heart of baptism is union with Christ, that its proper recipients are those who belong to Him through faith, and that the patterns of preaching and conversion lead to water. Where faithful churches differ on the timing, Paul's spirit rules: 'Let each man be fully assured in his own mind.' Seek your church's teaching, examine Scripture yourself, and do not make the age of baptism the dividing line of fellowship.",
        verses: ["Romans 14:5", "Galatians 3:26-27", "Ephesians 4:5"],
      },
    ],
    keyVerses: ["Acts 2:38", "Acts 8:36", "Matthew 28:19", "Colossians 2:11-12", "Genesis 17:11-12"],
    raises: ["what-is-baptism", "does-baptism-save-a-person"],
    followsFrom: ["what-is-baptism", "why-do-i-need-the-church"],
    related: ["what-is-baptism", "born-again-and-baptism", "who-is-the-father"],
    planned: [],
    order: 41,
  },

  {
    slug: "how-often-the-lords-supper",
    question: "How often should the church celebrate the Lord's Supper?",
    category: "church",
    summary:
      "The New Testament does not fix an exact frequency. Its own words are 'as often as' you eat the bread and drink the cup, so that you proclaim the Lord's death until He comes. The first church broke bread regularly and gathered to do so on the first day of the week, and Paul's warning to examine oneself governs how we come more than when. Celebrate it often, worthily, and in remembrance of Him.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 11,
        title: "The Supper and the self-examination",
        lookFor: "Paul hands down what he received from the Lord: 'do this in memory of me... for as often as you eat and drink, you proclaim the Lord's death.'",
        focus: "23-34",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "Devoted to the breaking of bread",
        lookFor: "The first church kept teaching, fellowship, the breaking of bread, and prayer: the Table belongs to the gathered life.",
        focus: "42-47",
      },
      {
        book: "Acts",
        chapter: 20,
        title: "Breaking bread on the first day of the week",
        lookFor: "The disciples gathered on the first day of the week to break bread: a picture of the church's gathered rhythm.",
        focus: "7-12",
      },
      {
        book: "Luke",
        chapter: 22,
        title: "Do this in memory of me",
        lookFor: "Jesus takes the bread and the cup and gives one command: do this in memory of me.",
        focus: "14-20",
      },
      {
        book: "Matthew",
        chapter: 26,
        title: "The institution of the Supper",
        lookFor: "At the last meal, Christ gives thanks, breaks the bread, and gives it to His disciples with the cup of the new covenant.",
        focus: "26-29",
      },
    ],
    points: [
      {
        heading: "The command is to remember",
        body:
          "At the last supper, Jesus took bread, gave thanks, broke it, and said, 'This is my body... Do this in memory of me.' The word He left is a word of remembrance, and there is no record of Him dictating a calendar. What He commands is that His people keep coming to the bread and the cup, doing this, in memory of Him, until He comes.",
        verses: ["Luke 22:19", "1 Corinthians 11:24-25"],
      },
      {
        heading: "'As often as' leaves the rhythm open",
        body:
          "Paul's own words about the Supper point to regularity, not to a number: 'For as often as you eat this bread and drink this cup, you proclaim the Lord's death until he comes.' The emphasis is on the doing and the proclaiming, and the frequency is left to the church's faithful ordering. The New Testament is far more concerned that we come than that we count.",
        verses: ["1 Corinthians 11:26"],
      },
      {
        heading: "The first church came often",
        body:
          "The earliest believers devoted themselves to 'the breaking of bread' as one of the steady marks of their life together, and Luke says they broke bread at home day by day. When the disciples gathered on the first day of the week, it was to break bread. The New Testament's trajectory leans toward frequent celebration, woven into the ordinary rhythm of the church's gathering.",
        verses: ["Acts 2:42", "Acts 2:46", "Acts 20:7"],
      },
      {
        heading: "How we come matters more than when",
        body:
          "Paul's warning is not about a schedule but about readiness: those who eat and drink 'in a way unworthy of the Lord' are guilty of the body and blood of the Lord, and each one is to examine himself and discern the body. If we discerned ourselves, he says, we would not be judged. The Lord's Supper is for those who come in faith, confession, and love, not merely for those who show up.",
        verses: ["1 Corinthians 11:27", "1 Corinthians 11:28", "1 Corinthians 11:29", "1 Corinthians 11:31"],
      },
      {
        heading: "So churches celebrate often and worthily",
        body:
          "Given the New Testament's open rhythm and early practice, churches faithfully order the Supper on their own gathered pattern, many weekly and others at intervals, all in remembrance and proclamation. The point is not to maximize frequency for its own sake but to keep doing this until He comes, in faith and love, so that the Table remains a living center where the church remembers its Savior and proclaims His death until He returns.",
        verses: ["1 Corinthians 11:26", "Acts 20:7", "Acts 2:42"],
      },
    ],
    keyVerses: ["1 Corinthians 11:24-26", "Luke 22:19", "Acts 20:7", "1 Corinthians 11:27-28", "Acts 2:42"],
    raises: ["what-is-the-lords-supper", "how-is-christ-present-in-the-lords-supper"],
    followsFrom: ["what-is-the-lords-supper", "why-do-i-need-the-church"],
    related: ["what-is-the-lords-supper", "what-is-the-gospel", "what-is-a-healthy-church"],
    planned: [],
    order: 42,
  },

  // ------------------------------------------------------------------
  // TRAIL: Our Hope (continued)
  // ------------------------------------------------------------------
  {
    slug: "signs-before-jesus-returns",
    question: "What signs should we look for before Jesus returns?",
    category: "our-hope",
    summary:
      "Jesus gave signs of the age, not a date: the gospel preached to all nations, wars and troubles as 'birth pains,' and false christs who would deceive many. Yet He was just as clear that no one knows the day or hour. The call is not to calculate but to watch, to be found faithful, and to live ready for His coming.",
    passages: [
      {
        book: "Matthew",
        chapter: 24,
        title: "Signs and the end",
        lookFor: "Jesus describes the birth pains of the age, the gospel preached to all nations, and then His own warning: no one knows the day or hour.",
        focus: "1-44",
      },
      {
        book: "Mark",
        chapter: 13,
        title: "Watch, keep alert, and pray",
        lookFor: "The parallel account of the signs, ending with the same command to watch and keep alert.",
        focus: "1-13",
      },
      {
        book: "1 Thessalonians",
        chapter: 5,
        title: "The day of the Lord comes like a thief",
        lookFor: "The day comes suddenly for those in darkness, but for those who belong to the day it is something to watch for soberly.",
        focus: "1-11",
      },
      {
        book: "2 Thessalonians",
        chapter: 2,
        title: "The man of lawlessness",
        lookFor: "Paul warns of a coming rebellion and the revelation of the man of lawlessness, and tells the church not to be shaken.",
        focus: "1-12",
      },
      {
        book: "Acts",
        chapter: 1,
        title: "It is not for you to know the times",
        lookFor: "The risen Lord forbids speculation about the timeline and redirects His disciples to be His witnesses.",
        focus: "6-11",
      },
    ],
    points: [
      {
        heading: "The age is marked by 'birth pains'",
        body:
          "Jesus did not hide the shape of the age: 'You will hear of wars and rumors of wars… nation will rise against nation, and kingdom against kingdom… famines and troubles. These things are the beginning of birth pains.' He calls them birth pains, not the end itself: the world's troubles are the groaning of an age about to give way, and the end is not yet.",
        verses: ["Matthew 24:6-8", "Mark 13:7-8"],
      },
      {
        heading: "Watch for counterfeits",
        body:
          "Jesus warned that many would come in His name claiming to be the Christ, deceiving many, and that false christs and false prophets would show great signs and wonders so as to lead even the chosen astray, if possible. Paul warns of the man of lawlessness who exalts himself against all that is called God. The great sign of the age is not only trouble but deception, and we are called to know the true voice well enough not to be fooled.",
        verses: ["Matthew 24:4-5", "Matthew 24:24", "2 Thessalonians 2:3-4"],
      },
      {
        heading: "The gospel must first go to all nations",
        body:
          "Jesus tied the end to the spread of the good news: 'This Good News of the Kingdom will be preached in the whole world for a testimony to all the nations, and then the end will come.' Before the end, the mission runs its course, and the gospel that has been going out to every people is itself a sign that the King is coming. Every believer sent into the world with the good news is living in that sign.",
        verses: ["Matthew 24:14", "Mark 13:10"],
      },
      {
        heading: "But no one knows the day or hour",
        body:
          "For all the signs, Jesus is emphatic: 'But no one knows of that day and hour, not even the angels of heaven, but my Father only.' After His resurrection He told the disciples it was not for them to know the times set by the Father's own authority. Paul adds that the day of the Lord comes 'like a thief in the night.' The signs should stir us to readiness, never to the pride of a date.",
        verses: ["Matthew 24:36", "Acts 1:7", "1 Thessalonians 5:2", "Mark 13:32"],
      },
      {
        heading: "So we watch and live ready",
        body:
          "The point of the signs is not calculation but vigilance. Jesus commands, 'Watch therefore, for you don't know in what hour your Lord comes,' and Peter asks what kind of people we ought to be, 'in holy living and godliness, looking for and earnestly desiring the coming of the day of God.' We are to stay awake and sober, faithful in our work, looking for our Lord, with our lamps trimmed and our lives ready.",
        verses: ["Matthew 24:42", "Mark 13:33", "1 Thessalonians 5:6", "2 Peter 3:11-12"],
      },
    ],
    keyVerses: ["Matthew 24:14", "Matthew 24:36", "Mark 13:33", "1 Thessalonians 5:2", "Acts 1:7", "2 Peter 3:12"],
    raises: ["what-happens-when-i-die", "what-is-the-great-tribulation"],
    followsFrom: ["will-jesus-return-literally", "what-happens-when-i-die"],
    related: ["will-jesus-return-literally", "where-is-jesus-now", "what-is-the-resurrection", "what-is-the-new-heaven-and-new-earth"],
    planned: [],
    order: 44,
  },

  {
    slug: "what-will-we-do-in-the-new-creation",
    question: "What will we do in the new creation?",
    category: "our-hope",
    summary:
      "The new creation is not an endless rest with nothing to do; it is the healing and renewal of all things. Scripture shows God dwelling with His people, every tear wiped away, the curse gone, and His people serving Him, reigning with Him, seeing His face, and living in a world of righteousness, abundance, and joy without end.",
    passages: [
      {
        book: "Revelation",
        chapter: 21,
        title: "God dwells with His people",
        lookFor: "A new heaven and a new earth, God's dwelling with people, no more death, mourning, or pain, and the One on the throne making all things new.",
        focus: "1-7",
      },
      {
        book: "Revelation",
        chapter: 22,
        title: "The river of life and the throne",
        lookFor: "No more curse, the servants of God serving Him and seeing His face, reigning forever, with the river and tree of life.",
        focus: "1-7",
      },
      {
        book: "Isaiah",
        chapter: 65,
        title: "New heavens and a new earth",
        lookFor: "The prophets' picture: no more weeping, people building and planting, and a renewed world where nothing hurts or destroys.",
        focus: "17-25",
      },
      {
        book: "Revelation",
        chapter: 7,
        title: "Before the throne, serving without ceasing",
        lookFor: "A great multitude before the throne, serving God day and night, with every tear wiped from their eyes.",
        focus: "9-17",
      },
      {
        book: "1 Corinthians",
        chapter: 2,
        title: "What God has prepared",
        lookFor: "Eyes have not seen and ears have not heard what God has prepared for those who love Him: the new creation outruns our imagination.",
        focus: "6-10",
      },
    ],
    points: [
      {
        heading: "It is the healing of the world, not a leaving of it",
        body:
          "John saw 'a new heaven and a new earth,' and the prophets pictured the same: God says, 'I create new heavens and a new earth,' and Peter says we look for a new heavens and earth 'in which righteousness dwells.' The earth is not to be discarded; it is to be renewed, the fallen world made whole and set free at last.",
        verses: ["Revelation 21:1", "Isaiah 65:17", "2 Peter 3:13"],
      },
      {
        heading: "God Himself will dwell with us",
        body:
          "The center of the new creation is not a place but a presence: 'God's dwelling is with people, and he will dwell with them, and they will be his people, and God himself will be with them as their God.' And He will wipe away every tear; there will be no more death, mourning, crying, or pain, for the first things have passed away. The One on the throne declares, 'Behold, I am making all things new.' The God we have loved from afar will at last be with us face to face.",
        verses: ["Revelation 21:3", "Revelation 21:4", "Revelation 21:5"],
      },
      {
        heading: "We will serve Him and reign with Him",
        body:
          "The new creation is full of purpose, not of empty time. In the new Jerusalem there is 'no curse any more. The throne of God and of the Lamb will be in it, and his servants serve him,' and John says, 'They will reign forever and ever.' The great multitude is 'before the throne of God, they serve him day and night in his temple.' Our created purpose, to know God and serve Him, finds its full, unbroken expression there.",
        verses: ["Revelation 22:3", "Revelation 22:5", "Revelation 7:15"],
      },
      {
        heading: "We will see His face",
        body:
          "Scripture's highest promise is intimacy, not scenery: 'They will see his face, and his name will be on their foreheads.' Where we now 'see in a mirror, dimly,' then we shall see face to face and know even as we are known. To see God, to be with Him, to bear His name: this is the deep rest and the deep joy that no earthly happiness can satisfy, and that the new creation will give fully.",
        verses: ["Revelation 22:4", "1 Corinthians 13:12", "Revelation 21:3"],
      },
      {
        heading: "A world of abundance and peace",
        body:
          "The prophets paint a renewed world of real life: people build houses and inhabit them, plant vineyards and eat their fruit, and 'the wolf and the lamb shall feed together... They shall not hurt nor destroy in all my holy mountain.' The river of the water of life flows from the throne, and the tree of life bears its fruit for the healing of the nations. Scripture says that no eye has seen and no ear has heard what God has prepared for those who love Him. We will work without exhaustion, delight without decay, and live in a world where nothing is broken anymore.",
        verses: ["Isaiah 65:21", "Isaiah 65:25", "Revelation 22:1-2", "1 Corinthians 2:9"],
      },
    ],
    keyVerses: ["Revelation 21:3-4", "2 Peter 3:13", "Isaiah 65:17", "Revelation 22:4-5", "1 Corinthians 2:9"],
    raises: ["what-is-the-resurrection"],
    followsFrom: ["what-is-the-new-heaven-and-new-earth"],
    related: ["what-is-the-new-heaven-and-new-earth", "what-happens-when-i-die", "where-is-jesus-now", "why-does-god-allow-suffering"],
    planned: ["What does the Bible mean by 'God all in all'?"],
    order: 45,
  },

  {
    slug: "what-does-the-bible-say-about-animals-and-heaven",
    question: "What does the Bible say about animals and heaven?",
    category: "our-hope",
    summary:
      "The Bible never promises that a specific animal is raised or restored in heaven, and it is honest about that silence. What it does say is clear: God made the animals and called them good, He cares for them and keeps covenant with them, the animal world shares in the groaning of a fallen creation and will be set free with it, and the healed new creation ends the violence of the animal kingdom, so that every creature can praise God together.",
    passages: [
      {
        book: "Genesis",
        chapter: 1,
        title: "God makes the animals and calls them good",
        lookFor: "God creates the living creatures, blesses them, and declares everything He made 'very good.'",
        focus: "20-31",
      },
      {
        book: "Genesis",
        chapter: 9,
        title: "God's covenant with every living creature",
        lookFor: "God's promise after the flood is made not only with Noah but with the birds, the livestock, and every animal of the earth.",
        focus: "8-17",
      },
      {
        book: "Psalms",
        chapter: 104,
        title: "God feeds and renews all creatures",
        lookFor: "God gives the animals their food, renews the face of the ground, and takes away and gives back their breath.",
        focus: "24-30",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "Creation set free",
        lookFor: "Paul says the creation itself was subjected to vanity and will be delivered from its bondage to decay.",
        focus: "18-25",
      },
      {
        book: "Isaiah",
        chapter: 65,
        title: "The joy of the new creation",
        lookFor: "In God's new heavens and new earth, the wolf and the lamb feed together and nothing hurts or destroys.",
        focus: "17-25",
      },
      {
        book: "Revelation",
        chapter: 5,
        title: "Every creature praises God and the Lamb",
        lookFor: "Every created thing in heaven and on earth and under the earth joins in blessing God and the Lamb.",
        focus: "11-14",
      },
    ],
    points: [
      {
        heading: "God made the animals and called them good",
        body:
          "God called the living creatures into being out of the ground and the sea, blessed them, and when He finished, 'God saw everything that he had made, and behold, it was very good.' Animals are not an accident or an afterthought; they are God's deliberate, good creation, made before sin entered the world.",
        verses: ["Genesis 1:24", "Genesis 1:25", "Genesis 1:31"],
      },
      {
        heading: "God cares for animals and keeps covenant with them",
        body:
          "After the flood, God's covenant, His bound promise, was made not only with Noah but 'with every living creature that is with you: the birds, the livestock, and every animal of the earth.' Jesus says the heavenly Father feeds the birds, and the righteous are marked by respect for the life of their animal. God's care for animals runs through all of Scripture.",
        verses: ["Genesis 9:10", "Genesis 9:12", "Matthew 6:26", "Proverbs 12:10"],
      },
      {
        heading: "The animal world shares in the groaning of a fallen creation",
        body:
          "Paul says the creation was subjected to vanity and 'groans and travails in pain together until now,' waiting to be set free from its bondage to decay. Animals suffer in our fallen world, and they are not written out of the story of redemption; the creation itself waits for the revealing of the children of God.",
        verses: ["Romans 8:20", "Romans 8:22", "Romans 8:21"],
      },
      {
        heading: "The new creation heals the animal world",
        body:
          "The prophets picture the healed creation in unmistakably animal terms: 'The wolf will live with the lamb, and the leopard will lie down with the young goat,' and 'the wolf and the lamb shall feed together... They shall not hurt nor destroy in all my holy mountain.' The violence of the animal kingdom is undone. God does not scrap His creation; He renews it, and animals are part of that renewal.",
        verses: ["Isaiah 11:6", "Isaiah 65:25", "2 Peter 3:13", "Revelation 21:1"],
      },
      {
        heading: "Every creature will praise God",
        body:
          "John heard 'every created thing which is in heaven, on the earth, under the earth, on the sea, and everything in them' saying blessing, honor, glory, and dominion to God and to the Lamb. The psalmists call the wild animals, livestock, and creeping things to praise the Lord. The animal creation is part of the music of the new heavens and new earth.",
        verses: ["Revelation 5:13", "Psalm 148:7", "Psalm 148:10"],
      },
      {
        heading: "And here is what the Bible does not say",
        body:
          "The Bible never promises that a specific, individual animal is raised or restored in heaven. The clear promises of resurrection and eternal life belong to people made in God's image, to those who believe in Christ. This silence is not denial; it is honesty. We can trust a God who cares for animals and who heals creation, even for the part of the story He does not spell out for us.",
        verses: ["John 11:25-26", "1 Corinthians 15:42-44", "Genesis 9:10"],
      },
    ],
    keyVerses: ["Genesis 1:31", "Genesis 9:10", "Romans 8:21", "Isaiah 11:6", "Revelation 5:13"],
    raises: ["why-does-god-allow-suffering", "what-does-it-mean-to-be-made-in-gods-image"],
    followsFrom: ["what-is-the-new-heaven-and-new-earth", "what-will-we-do-in-the-new-creation"],
    related: ["what-is-the-new-heaven-and-new-earth", "what-will-we-do-in-the-new-creation", "why-does-god-allow-suffering"],
    planned: ["Will we recognize our beloved animals in the new creation?"],
    order: 46,
  },

  // ------------------------------------------------------------------
  // TRAIL: Who We Are (continued)
  // ------------------------------------------------------------------
  {
    slug: "made-for-relationship",
    question: "What does it mean that we were made for relationship?",
    category: "who-we-are",
    summary:
      "We were not made to be alone. We bear the image of a God who is love and who lives in relationship, and He made us for relationship: with Himself and with one another. Scripture moves from 'it is not good for the man to be alone' to the gospel, in which we are brought into the very fellowship of God and called to love one another. Our deepest loneliness is healed in belonging to God through Christ and to His people.",
    passages: [
      {
        book: "Genesis",
        chapter: 1,
        title: "Made in the image of a relational God",
        lookFor: "'Let us make man in our image...' and 'male and female he created them': we are made in the image of a God who is relationship.",
        focus: "26-31",
      },
      {
        book: "Genesis",
        chapter: 2,
        title: "It is not good for man to be alone",
        lookFor: "The very first thing God calls 'not good' is isolation; He makes a helper, and the two become one flesh.",
        focus: "18-25",
      },
      {
        book: "Mark",
        chapter: 3,
        title: "Appointed to be with Him",
        lookFor: "Jesus appointed the twelve first of all 'that they might be with him': discipleship begins in a company, not in isolation.",
        focus: "13-19",
      },
      {
        book: "John",
        chapter: 15,
        title: "Friends and vines",
        lookFor: "Jesus calls His disciples friends and abides in them, telling them to love one another as He has loved them.",
        focus: "9-17",
      },
      {
        book: "1 John",
        chapter: 1,
        title: "Fellowship with the Father and the Son",
        lookFor: "The gospel is fellowship: what the apostles saw and heard, they declare so that we share in fellowship with the Father and the Son.",
        focus: "1-4",
      },
    ],
    points: [
      {
        heading: "We bear the image of a God who is love",
        body:
          "'Let us make man in our image,' God said, and He created them male and female in His image. We are made like a God who is love and who, before the foundation of the world, lived in the love of Father and Son. To be made in His image is to be made for love and for relationship: the capacity for communion is not an add-on to being human; it is what being human is for.",
        verses: ["Genesis 1:26", "Genesis 1:27", "1 John 4:8", "John 17:24"],
      },
      {
        heading: "'It is not good for the man to be alone'",
        body:
          "The first thing God pronounced 'not good' in all of creation was solitude: 'It is not good for the man to be alone. I will make him a helper comparable to him.' And so woman was made, and the two, leaving father and mother, become one flesh. The wise man agreed that two are better than one, and that a threefold cord is not quickly broken. From the very beginning, we are created for companionship, first in marriage and by extension in the family of humanity and the family of God.",
        verses: ["Genesis 2:18", "Genesis 2:24", "Ecclesiastes 4:9", "Ecclesiastes 4:12"],
      },
      {
        heading: "Jesus chose us for companionship",
        body:
          "Mark records that Jesus 'appointed twelve, that they might be with him.' Before He sent them out, He called them in. And He told His disciples, 'No longer do I call you servants... But I have called you friends,' and He commanded them to love one another as He loved them. Following Christ is not a solitary ascent; it is life in His company and in His family.",
        verses: ["Mark 3:14", "John 15:15", "John 13:34-35"],
      },
      {
        heading: "The gospel is fellowship with God",
        body:
          "John declares what he saw and heard 'that you also may have fellowship with us. Yes, and our fellowship is with the Father, and with his Son, Jesus Christ.' This is the heart of the gospel: not only forgiveness, but communion. Jesus says that those who love Him will be loved by the Father, and that He and the Father will come and make their home with them. We love, because He first loved us: our capacity for love is our maker's gift, and He has acted in Christ to give us the relationship we were made for.",
        verses: ["1 John 1:3", "John 14:23", "1 John 4:19"],
      },
      {
        heading: "And into the family of God",
        body:
          "Because we are made for relationship, God does not save us into isolation but into a household. We are 'fellow citizens with the saints, and of the household of God,' and John writes that as many as received Christ were given the right to become children of God. The end of it all is a wedding: the marriage of the Lamb has come and His bride has made herself ready, and 'blessed are those who are invited to the marriage supper of the Lamb.' We were made for love, and God has been working from the first page to the last to bring us home to it.",
        verses: ["Ephesians 2:19", "John 1:12-13", "Revelation 19:7", "Revelation 19:9"],
      },
    ],
    keyVerses: ["Genesis 1:27", "Genesis 2:18", "John 15:15", "1 John 1:3", "Ephesians 2:19"],
    raises: ["why-do-i-need-the-church", "who-is-the-father", "what-is-the-lords-supper", "why-do-i-still-feel-lonely"],
    followsFrom: ["what-does-it-mean-to-be-made-in-gods-image", "who-is-jesus"],
    related: ["what-does-it-mean-to-be-made-in-gods-image", "who-is-the-father", "why-do-i-need-the-church", "what-is-the-new-heaven-and-new-earth"],
    planned: [],
    order: 47,
  },

  {
    slug: "does-everyone-deserve-gods-judgment",
    question: "Does everyone deserve God's judgment?",
    category: "who-we-are",
    summary:
      "In the honest witness of Scripture, yes: all have sinned and fall short of God's glory, the wages of sin is death, and every mouth is silenced before God. No one is righteous on their own, so judgment is not arbitrary but just. Yet this verdict is not the end of the story: it is the very verdict for which Christ died, and there is no condemnation for those who are in Him.",
    passages: [
      {
        book: "Romans",
        chapter: 3,
        title: "All have sinned",
        lookFor: "Paul's verdict against the whole world: no one is righteous, all have sinned, and every mouth is silenced before God.",
        focus: "9-26",
      },
      {
        book: "Psalm",
        chapter: 14,
        title: "There is no one who does good",
        lookFor: "David's bleak assessment of humanity apart from God: they have all turned aside, and no one does good.",
      },
      {
        book: "Isaiah",
        chapter: 53,
        title: "All we like sheep have gone astray",
        lookFor: "The confession of every one of us: each has turned to his own way, and the LORD laid our iniquity on the Servant.",
        focus: "4-12",
      },
      {
        book: "Revelation",
        chapter: 20,
        title: "The judgment and the book of life",
        lookFor: "The dead stand before the throne and are judged by what is written; whoever is not found in the book of life is cast into the lake of fire.",
        focus: "11-15",
      },
      {
        book: "John",
        chapter: 3,
        title: "Condemned already, or saved through Him",
        lookFor: "Whoever does not believe is condemned already; whoever believes in the Son is not condemned but has eternal life.",
        focus: "16-21",
      },
    ],
    points: [
      {
        heading: "The diagnosis reaches everyone",
        body:
          "Paul is not gentle with us about our condition: 'all have sinned, and fall short of the glory of God.' The psalmist says there is no one who does good, not even one, and Isaiah has us all confess: 'All we like sheep have gone astray. Everyone has turned to his own way.' This is not a few bad people; it is the diagnosis of the whole world.",
        verses: ["Romans 3:23", "Psalm 14:3", "Isaiah 53:6"],
      },
      {
        heading: "The verdict is just, not arbitrary",
        body:
          "God's judgment falls on every mouth and silences it: the whole world is accountable to God, and none has an excuse. David, after his own great sin, said his sin was 'against you, and you only... that you may be proved right when you speak, and justified when you judge.' The judgment that rightly falls on sin is what a holy God must do; it is not cruelty but justice. The wages of sin is death.",
        verses: ["Romans 3:19", "Romans 1:20", "Psalm 51:4", "Romans 6:23"],
      },
      {
        heading: "No one escapes by comparison",
        body:
          "It is tempting to hope we escape judgment because we are not as bad as others. Paul dismantles that: whoever judges another condemns himself, for the same things are practiced. And Jesus said that not everyone who calls Him 'Lord' will enter the kingdom, but the one who does the will of His Father, and to those whom He never knew He will say, 'I never knew you. Depart from me, you who work iniquity.' We are not saved by being better than someone else; none of us is righteous enough on our own.",
        verses: ["Romans 2:1", "Romans 2:3", "Matthew 7:21", "Matthew 7:23"],
      },
      {
        heading: "The judgment is real, and its end is solemn",
        body:
          "Revelation does not soften the outcome: the dead stand before the throne and are judged by what is written in the books, and 'if anyone was not found written in the book of life, he was cast into the lake of fire.' John adds that whoever does not believe 'has been judged already,' and Hebrews that after death comes judgment. These are not words meant to frighten us into denial but to be honest about the stakes.",
        verses: ["Revelation 20:12", "Revelation 20:15", "John 3:18", "Hebrews 9:27"],
      },
      {
        heading: "And that verdict is what grace answers",
        body:
          "The point of the verdict is not despair but the cross. Because we all deserve judgment, God did what we could not: 'God didn't send his Son into the world to judge the world, but that the world should be saved through him.' For those who are in Christ Jesus there is no condemnation: He who knew no sin became sin for us, so that in Him we might become the righteousness of God. And Paul says we are justified freely by His grace, through the redemption that is in Christ Jesus, so that God is both just and the justifier. The judgment is real, and it has been carried by Another for all who trust Him.",
        verses: ["Romans 8:1", "John 3:16-17", "2 Corinthians 5:21", "Romans 3:24", "Romans 3:26"],
      },
    ],
    keyVerses: ["Romans 3:23", "Romans 6:23", "Romans 3:19", "Psalm 51:4", "Romans 8:1"],
    raises: ["why-did-jesus-have-to-die", "how-can-i-be-saved", "what-is-justification", "what-is-hell"],
    followsFrom: ["what-is-sin", "what-does-it-mean-to-be-made-in-gods-image"],
    related: ["what-is-sin", "why-did-jesus-have-to-die", "what-happens-when-i-die", "is-god-in-control"],
    planned: [],
    order: 48,
  },

  {
    slug: "body-soul-and-spirit",
    question: "What is the body, soul, and spirit?",
    category: "who-we-are",
    summary:
      "Scripture presents the human person as a unity made by God: dust that He breathed into living being. It speaks of body, soul, and spirit to describe the whole person in relation to God and to eternity, not to divide us into detachable parts. We are embodied souls, meant to be whole, and destined not to shed our bodies but to have them raised and renewed.",
    passages: [
      {
        book: "Genesis",
        chapter: 2,
        title: "Dust and the breath of life",
        lookFor: "God forms man from the dust and breathes into him the breath of life, and the man becomes a living being: body and spirit from His hand.",
        focus: "1-7",
      },
      {
        book: "Psalm",
        chapter: 139,
        title: "Fearfully and wonderfully made",
        lookFor: "The psalmist marvels at being woven together in the womb and known by God to the depths of his being.",
        focus: "1-18",
      },
      {
        book: "1 Thessalonians",
        chapter: 5,
        title: "Spirit, soul, and body",
        lookFor: "Paul's prayer that the whole person, spirit, soul, and body, be kept blameless until the Lord's coming.",
        focus: "16-24",
      },
      {
        book: "1 Corinthians",
        chapter: 15,
        title: "Raised a spiritual body",
        lookFor: "The body is not discarded but transformed: sown a natural body, raised a spiritual body, the perishable putting on the imperishable.",
        focus: "35-58",
      },
      {
        book: "1 Corinthians",
        chapter: 6,
        title: "Your body is the Lord's",
        lookFor: "Your body is a temple of the Holy Spirit, the body is for the Lord, and you are to glorify God in your body.",
        focus: "12-20",
      },
    ],
    points: [
      {
        heading: "We are dust and breath from God's hand",
        body:
          "Genesis gives the shape of the human person: 'Yahweh God formed man from the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.' We are not a spirit trapped in a body, nor a body that happens to think; we are a created unity, earth and breath joined by the hand of God, fearfully and wonderfully made.",
        verses: ["Genesis 2:7", "Psalm 139:14", "Job 33:4"],
      },
      {
        heading: "Body, soul, and spirit name the whole person",
        body:
          "When Scripture lists 'spirit, soul, and body,' it is praying for the whole person to be kept blameless, not drawing a diagram of detachable parts. Jesus said to love God with all your heart, soul, mind, and strength: the whole of who we are, in every dimension, is to be His. These words describe our life from the inside out and under God, every part belonging to Him.",
        verses: ["1 Thessalonians 5:23", "Mark 12:30", "Luke 10:27"],
      },
      {
        heading: "At death, body and spirit are parted for a season",
        body:
          "At death the dust returns to the earth as it was, and the spirit returns to God who gave it. For the believer, this is not the end but a going home: to be absent from the body is to be at home with the Lord. On the cross Jesus Himself committed His spirit into the Father's hands, and Paul said that to depart is to be with Christ, which is far better.",
        verses: ["Ecclesiastes 12:7", "2 Corinthians 5:8", "Luke 23:46", "Philippians 1:23"],
      },
      {
        heading: "But we are destined for a raised, whole body",
        body:
          "The Christian hope is not a disembodied eternity but a resurrection. It is sown a natural body, Paul says, and raised a spiritual body; this perishable must put on the imperishable. The Spirit who raised Jesus will give life to our mortal bodies. Our bodies are not garbage to be shed but God's creation to be redeemed, and we await their renewal, not their loss.",
        verses: ["1 Corinthians 15:44", "1 Corinthians 15:53", "Romans 8:11", "Philippians 3:21"],
      },
      {
        heading: "So we honor God in the body as well as the soul",
        body:
          "Because our bodies belong to the Lord, the whole of embodied life is worship. Your body is a temple of the Holy Spirit, and you were bought with a price, so you are to glorify God in your body. Do not let sin reign in your mortal body, Paul urges, but present your members to God as instruments of righteousness. Our hands, our words, our physical lives, our unseen hearts: all of it is His.",
        verses: ["1 Corinthians 6:19", "1 Corinthians 6:20", "Romans 6:12", "Romans 6:13"],
      },
    ],
    keyVerses: ["Genesis 2:7", "1 Thessalonians 5:23", "Ecclesiastes 12:7", "2 Corinthians 5:8", "1 Corinthians 6:19-20"],
    raises: ["what-is-the-resurrection", "what-is-the-flesh-versus-the-spirit"],
    followsFrom: ["what-is-the-flesh-versus-the-spirit", "what-happens-when-i-die"],
    related: ["what-is-the-flesh-versus-the-spirit", "what-happens-when-i-die", "what-is-the-resurrection", "how-do-i-fight-sin"],
    planned: ["How should I care for my body as a Christian?"],
    order: 49,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Unseen Realm (continued)
  // ------------------------------------------------------------------
  {
    slug: "are-demons-real",
    question: "Are demons real and active today?",
    category: "unseen-realm",
    summary:
      "Yes. The New Testament treats demons as real personal spirits, fallen angels in service of evil, who oppose God and deceive people. Jesus cast them out, and the apostles met them in the open. But their power is not ultimate: the Son of God was revealed to destroy the works of the devil, and His people resist them through the Word, prayer, and faith, without fear.",
    passages: [
      {
        book: "Mark",
        chapter: 5,
        title: "Legion is set free",
        lookFor: "Jesus meets a man possessed by many demons, speaks to them as persons, and sets him free; the demons are real and He is their master.",
        focus: "1-20",
      },
      {
        book: "Luke",
        chapter: 10,
        title: "Even the demons are subject to us",
        lookFor: "The seventy return rejoicing that evil spirits are subject to them in Jesus' name, and Jesus speaks of seeing Satan fallen like lightning.",
        focus: "17-24",
      },
      {
        book: "Acts",
        chapter: 16,
        title: "A spirit expelled in Philippi",
        lookFor: "Paul commands a spirit of divination out of a girl in the name of Jesus Christ, and it leaves that very hour.",
        focus: "16-24",
      },
      {
        book: "Ephesians",
        chapter: 6,
        title: "Our wrestling is not against flesh and blood",
        lookFor: "Paul names our real opponents: the rulers of the darkness of this world, spiritual forces of wickedness, and the armor to stand against them.",
        focus: "10-20",
      },
      {
        book: "1 John",
        chapter: 3,
        title: "He came to destroy the works of the devil",
        lookFor: "The devil sins from the beginning, and the Son of God was revealed to destroy his works.",
        focus: "4-10",
      },
    ],
    points: [
      {
        heading: "The New Testament treats demons as real persons",
        body:
          "This is not myth or metaphor; the Gospels show Jesus speaking to demons as persons. He asked one man's unclean spirit its name, and it replied, 'My name is Legion, for we are many.' The seventy reported with astonishment, 'Lord, even the demons are subject to us in your name!' When evening came, the people brought the demon-possessed to Jesus, and 'he cast out the spirits with a word.' Demons speak, choose, and act.",
        verses: ["Mark 5:9", "Luke 10:17", "Matthew 8:16"],
      },
      {
        heading: "They are fallen angels, not rivals of God",
        body:
          "Demons are created spirits who rebelled. Peter says God did not spare angels when they sinned but cast them into pits of darkness, held for judgment, and Jude speaks of angels who did not keep their own domain, kept in everlasting bonds. Revelation calls the dragon's angels thrown down with him. They are powerful, but they are creatures under God's judgment, never His equals.",
        verses: ["2 Peter 2:4", "Jude 1:6", "Revelation 12:9", "Ephesians 6:12"],
      },
      {
        heading: "They are active in deception and false teaching",
        body:
          "Their work today is often subtle. Paul warns that in later times some will fall away from the faith, 'paying attention to seducing spirits and doctrines of demons.' He adds that Satan himself masquerades as an angel of light. John tells us to test the spirits, because not every voice is from God. The enemy's activity is real, and much of it is aimed at lies, division, and falsehood within reach of the church.",
        verses: ["1 Timothy 4:1", "2 Corinthians 11:14", "1 John 4:1"],
      },
      {
        heading: "Jesus is their conqueror",
        body:
          "Demons fled from Jesus, and He saw Satan fallen like lightning. John's summary is decisive: 'To this end the Son of God was revealed, that he might destroy the works of the devil.' Paul says Christ 'stripped the principalities and the powers' and made a public spectacle of them, triumphing over them at the cross. Whatever demons are, they are a defeated enemy whose Leader has already won the war.",
        verses: ["Luke 10:17", "Luke 10:18", "1 John 3:8", "Colossians 2:15"],
      },
      {
        heading: "So the believer resists, not fears",
        body:
          "Because demons are real, so is the call to resist them. James says, 'Resist the devil, and he will flee from you,' and Peter urges us to be watchful and to withstand him steadfast in faith. Even the demons believe and shudder, yet they do not control those who are in Christ: 'greater is he who is in you than he who is in the world.' We are not to be naive, and we are not to be afraid.",
        verses: ["James 4:7", "James 2:19", "1 Peter 5:8-9", "1 John 4:4", "Ephesians 6:11"],
      },
    ],
    keyVerses: ["Mark 5:9", "Luke 10:17", "Ephesians 6:12", "James 2:19", "1 John 3:8"],
    raises: ["what-is-spiritual-warfare", "can-a-christian-be-tormented-by-demons"],
    followsFrom: ["who-is-satan"],
    related: ["who-is-satan", "what-is-spiritual-warfare", "how-do-i-fight-sin", "gods-voice-or-my-own-thoughts"],
    planned: [],
    order: 50,
  },

  {
    slug: "do-believers-have-guardian-angels",
    question: "Do believers have guardian angels?",
    category: "unseen-realm",
    summary:
      "The Bible does not teach a rigid doctrine of one assigned 'guardian angel' per person, but it does show angels sent by God to guard and serve His people. Scripture speaks of angels who watch over the little ones, minister to those who will inherit salvation, and are deployed by God for our protection. The comfort is not that we each have a personal guardian, but that the God we serve commands His angels to help us, whether or not we ever see them.",
    passages: [
      {
        book: "Psalm",
        chapter: 91,
        title: "He will command his angels concerning you",
        lookFor: "The promise that God puts His angels in charge of those who dwell in His shelter, to guard them in all their ways.",
        focus: "9-13",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "Ministering spirits for the heirs of salvation",
        lookFor: "Angels are sent to serve the people of God: 'sent out to do service for the sake of those who will inherit salvation.'",
        focus: "13-14",
      },
      {
        book: "Daniel",
        chapter: 6,
        title: "The angel shuts the lions' mouths",
        lookFor: "God sends His angel to protect Daniel in the den, and Daniel testifies to it plainly.",
        focus: "16-24",
      },
      {
        book: "Acts",
        chapter: 12,
        title: "An angel opens the prison",
        lookFor: "Peter is sleeping in chains, and an angel of the Lord wakes him and leads him out of prison.",
        focus: "1-19",
      },
      {
        book: "Matthew",
        chapter: 18,
        title: "Their angels always see the Father's face",
        lookFor: "Jesus speaks of little ones whose angels are always before the Father: the strongest 'guardian angel' language in the New Testament.",
        focus: "1-14",
      },
    ],
    points: [
      {
        heading: "Angels are ministering spirits for God's people",
        body:
          "Hebrews asks about the angels: 'Aren't they all serving spirits, sent out to do service for the sake of those who will inherit salvation?' And the psalmist says the angel of the Lord encamps around those who fear Him and delivers them. Angels serve God by serving His people; that is their work, and it is for us, even when we cannot see it.",
        verses: ["Hebrews 1:14", "Psalm 34:7", "Psalm 103:20"],
      },
      {
        heading: "God sends them to guard His people",
        body:
          "Again and again in Scripture, angels are sent for protection. Daniel could say, 'My God has sent his angel, and has shut the lions' mouths.' An angel woke Peter and led him out of prison, his chains falling off. Paul was told in a storm by an angel of the God he served that he and all who sailed with him would be safe. This is the consistent pattern: God's care, carried by His holy angels.",
        verses: ["Daniel 6:22", "Acts 12:7", "Acts 27:23-24", "Psalm 91:11-12"],
      },
      {
        heading: "Jesus speaks of angels watching over the little ones",
        body:
          "Jesus gave the closest thing to 'guardian angel' language in all of Scripture: 'See that you don't despise one of these little ones, for I tell you that in heaven their angels always see the face of my Father who is in heaven.' And Psalm 91 promises that God will put His angels in charge of those who take refuge in Him, to guard them in all their ways. The protection is real, and its source is the Father's care.",
        verses: ["Matthew 18:10", "Psalm 91:11-12"],
      },
      {
        heading: "But angels are servants, not objects of worship",
        body:
          "The Bible keeps angels firmly in their place. When John fell down to worship the angel who showed him the revelation, he was told, 'See you don't do it!... Worship God.' Paul also warns against a false humility that worships angels. Angels are mighty, but they are creatures, sent by God and pointing beyond themselves; our trust belongs to God, not to any creature, however glorious.",
        verses: ["Revelation 22:8-9", "Colossians 2:18", "Psalm 103:20"],
      },
      {
        heading: "So we rest in God's care, with or without seeing",
        body:
          "We are not promised to see the unseen realm, but we are promised its reality. When Elisha's servant was afraid, Elisha prayed that his eyes would be opened, and he saw the mountain full of horses and chariots of fire. The writer of Hebrews even adds that by showing hospitality, some have entertained angels without knowing it. God's care is not limited to what we can perceive: whether He sends angels or simply watches, He is with His people.",
        verses: ["2 Kings 6:17", "Hebrews 13:2", "Psalm 91:11"],
      },
    ],
    keyVerses: ["Psalm 91:11-12", "Hebrews 1:14", "Matthew 18:10", "Psalm 34:7", "Daniel 6:22"],
    raises: ["what-are-angels"],
    followsFrom: ["what-are-angels", "who-is-satan"],
    related: ["what-are-angels", "who-is-satan", "where-is-jesus-now"],
    planned: ["What is the difference between angels and the Holy Spirit in guarding us?"],
    order: 51,
  },

  {
    slug: "praying-against-the-enemy",
    question: "How do I pray against the enemy without fearing him?",
    category: "unseen-realm",
    summary:
      "Praying against the enemy is not a dramatic duel with an equal; it is humble, confident prayer that keeps its eyes on Christ, who has already won. Jesus taught us to ask the Father to deliver us from the evil one, and the Scriptures call us to submit to God, resist, put on the armor, and pray in the Spirit, resting in the greater One who is in us. Fear comes from forgetting the victory; faith comes from remembering who has conquered.",
    passages: [
      {
        book: "Matthew",
        chapter: 6,
        title: "Deliver us from the evil one",
        lookFor: "Toward the close of the prayer Jesus taught, the daily cry: lead us not into temptation, but deliver us from the evil one.",
        focus: "9-13",
      },
      {
        book: "Ephesians",
        chapter: 6,
        title: "The armor, and praying in the Spirit",
        lookFor: "After the armor, the engine: praying always with all prayer and supplication in the Spirit, watchful and persevering.",
        focus: "10-20",
      },
      {
        book: "Luke",
        chapter: 10,
        title: "Authority in Jesus' name",
        lookFor: "The seventy find demons subject to them in Jesus' name, and Jesus declares He saw Satan fall: the victory behind the authority.",
        focus: "17-20",
      },
      {
        book: "James",
        chapter: 4,
        title: "Submit, resist, and draw near",
        lookFor: "The order that matters: submit to God, resist the devil and he will flee, draw near to God and He will draw near to you.",
        focus: "6-10",
      },
      {
        book: "2 Thessalonians",
        chapter: 3,
        title: "The Lord guards you from the evil one",
        lookFor: "Paul's prayer trust: the Lord is faithful, who will establish you and guard you from the evil one.",
        focus: "1-5",
      },
    ],
    points: [
      {
        heading: "Jesus made it an ordinary prayer",
        body:
          "The battle is real, but the prayer is not exotic. In the prayer He taught, Jesus put it on our lips every day: lead us not into temptation, but deliver us from the evil one. And Paul grounds the whole fight in the Lord's faithfulness: 'the Lord is faithful, who will establish you, and guard you from the evil one.' John adds that the one born of God is kept, and the evil one does not touch him. We do not need a special ceremony; we need a daily, trusting cry.",
        verses: ["Matthew 6:13", "2 Thessalonians 3:3", "1 John 5:18"],
      },
      {
        heading: "The posture is submission, then resistance",
        body:
          "James gives the order: submit to God, and resist the devil, and he will flee from you. Peter adds the watchfulness: be sober and watchful, resist the devil steadfast in your faith. We do not wrestle in panic or on our own strength; we stand in Christ, and from that standing we resist. The enemy flees not from our fury but from our place in God.",
        verses: ["James 4:7", "1 Peter 5:8-9", "Matthew 26:41"],
      },
      {
        heading: "Prayer is how the armor is worn",
        body:
          "Paul lists the whole armor of God, and then names what moves it all: praying at all times in the Spirit with all prayer and requests, watchful and persevering. Faith holds the shield, the word is the sword, and prayer is the breath of the battle. Lay the armor on and pray it on: the two belong together.",
        verses: ["Ephesians 6:11", "Ephesians 6:16", "Ephesians 6:18", "2 Corinthians 10:4"],
      },
      {
        heading: "The enemy is already defeated",
        body:
          "When the seventy told Jesus that even the demons were subject to them, He answered that He saw Satan fallen like lightning, and He gave them authority to tread on serpents and scorpions, over all the power of the enemy, with nothing able to harm them. At the cross Christ stripped the principalities and powers and made a public spectacle of them. We do not fight for a victory yet to be won; we fight from Christ's already-won victory, and 'greater is he who is in you than he who is in the world.'",
        verses: ["Luke 10:17", "Luke 10:18", "Luke 10:19", "Colossians 2:15", "1 John 4:4", "John 16:33"],
      },
      {
        heading: "So we pray with calm courage",
        body:
          "Fear and prayer cannot both rule the same heart. Cast all your worries on Him, because He cares for you; and in all these things, Paul says, we are more than conquerors through Him who loved us. We watch and pray because the enemy is real, and we do not fear because the victory is Christ's. A prayer that fears Him who is in us more than him who is in the world is a prayer prayed in its right mind.",
        verses: ["1 Peter 5:7", "Romans 8:37", "Matthew 26:41", "1 John 4:4"],
      },
    ],
    keyVerses: ["Matthew 6:13", "Ephesians 6:18", "James 4:7", "1 John 4:4", "Luke 10:19"],
    raises: ["what-is-spiritual-warfare", "how-do-i-fight-sin", "who-is-satan"],
    followsFrom: ["what-is-spiritual-warfare", "who-is-satan", "are-demons-real"],
    related: ["what-is-spiritual-warfare", "who-is-satan", "are-demons-real", "how-do-i-pray"],
    planned: ["How does spiritual warfare relate to mental health?"],
    order: 52,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Holy Spirit (continued: gifts)
  // ------------------------------------------------------------------
  {
    slug: "are-sign-gifts-active",
    question: "Are the 'sign' gifts still active today?",
    category: "holy-spirit",
    summary:
      "Faithful Christians have answered this question differently. Some see the spectacular gifts of healing, prophecy, and tongues as continuing today as the Spirit distributes them; others read 1 Corinthians 13 as pointing to their ceasing once the apostolic foundation and the completed Word arrived. Scripture is clear that the Spirit gives gifts to build up the church, that love is the greatest gift and the test of all gifts, and that we are not to forbid what the Spirit does nor quench His work. Seek love, desire the Spirit, and test all things by the Word.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 12,
        title: "Varieties of gifts, one Spirit",
        lookFor: "Paul's catalogue of gifts, from wisdom and faith to healings, miracles, prophecy, kinds of languages, and interpretation, all given by one Spirit.",
        focus: "1-31",
      },
      {
        book: "1 Corinthians",
        chapter: 13,
        title: "Love is the greatest gift",
        lookFor: "The most excellent way: love never fails, while prophecies, tongues, and knowledge pass away; the greatest of the three is love.",
        focus: "1-13",
      },
      {
        book: "1 Corinthians",
        chapter: 14,
        title: "Desire prophecy; don't forbid tongues",
        lookFor: "Paul urges the church to earnestly desire spiritual gifts, to prefer prophecy, and not to forbid speaking in tongues, all in order.",
        focus: "1-5",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "The Spirit poured out at Pentecost",
        lookFor: "The coming of the Spirit is announced in tongues and prophecy, as Peter explains the promise of Joel poured out on all flesh.",
        focus: "1-21",
      },
      {
        book: "Ephesians",
        chapter: 4,
        title: "Gifts to equip the saints",
        lookFor: "Christ gave apostles, prophets, evangelists, shepherds, and teachers to equip the saints and build the body of Christ.",
        focus: "7-16",
      },
    ],
    points: [
      {
        heading: "The New Testament church was richly gifted",
        body:
          "Paul describes a church in which the Spirit distributed a wide range of gifts: the word of wisdom, the word of knowledge, faith, gifts of healings, workings of miracles, prophecy, discerning of spirits, various kinds of languages, and the interpretation of languages. 'To each one is given the manifestation of the Spirit for the profit of all.' The same Spirit did the same at Pentecost, filling the believers and giving them to speak with other languages as He gave them utterance. These were normal enough that Paul could list them and expect the church to recognize them.",
        verses: ["1 Corinthians 12:8-10", "1 Corinthians 12:7", "1 Corinthians 12:11", "Acts 2:4"],
      },
      {
        heading: "The apostles told the church to desire them",
        body:
          "Paul's posture toward the gifts is eager and orderly, not suspicious. He says, 'Follow after love, and earnestly desire spiritual gifts, but especially that you may prophesy,' and 'desire earnestly to prophesy, and don't forbid speaking with other languages.' The New Testament does not tell the church to be afraid of the Spirit's gifts.",
        verses: ["1 Corinthians 14:1", "1 Corinthians 14:39", "1 Corinthians 12:31"],
      },
      {
        heading: "But there is a genuine disagreement about today",
        body:
          "Paul also wrote that love never fails, while 'where there are prophecies, they will be done away with... where there is knowledge, it will be done away with,' because 'when that which is complete has come, then that which is partial will be done away with.' Some see that completion in the finished apostolic Word, noting that the church is 'built on the foundation of the apostles and prophets,' a foundation laid once. Others see 'the perfect' as the return of Christ and believe the Spirit continues to give these gifts today, distributing to each as He wills. Both views are held by earnest, Bible-loving Christians, and both deserve charity.",
        verses: ["1 Corinthians 13:8", "1 Corinthians 13:9", "1 Corinthians 13:10", "Ephesians 2:20", "1 Corinthians 12:11", "1 Corinthians 13:12"],
      },
      {
        heading: "Love is the greatest gift and the test of every gift",
        body:
          "Whatever a person believes about the sign gifts, Paul is unambiguous about the central thing: if someone speaks with the languages of men and of angels but has not love, they are nothing; love is greater than prophecy, miracles, and every sign. 'But now faith, hope, and love remain... the greatest of these is love.' However the spectacular gifts are understood, their worth is judged by whether they are exercised in love and for the building up of the church.",
        verses: ["1 Corinthians 13:1", "1 Corinthians 13:2", "1 Corinthians 13:13", "1 Corinthians 14:12"],
      },
      {
        heading: "The posture for both views: seek love, test, and don't despise",
        body:
          "Where faithful Christians differ, Scripture still points the way: do not quench the Spirit, and do not despise prophecies, but test all things and hold fast to what is good. Test the spirits, because not every voice is from God. And remember that gifts, however humble or spectacular, are given to build up the body for maturity in Christ. Whether you believe the sign gifts continue or passed with the apostles, you can honor the Spirit's work, test everything by the Word, and love.",
        verses: ["1 Thessalonians 5:19", "1 Thessalonians 5:20", "1 Thessalonians 5:21", "1 John 4:1", "Ephesians 4:12", "Ephesians 4:13"],
      },
    ],
    keyVerses: ["1 Corinthians 12:8-10", "1 Corinthians 13:13", "1 Corinthians 14:1", "1 Corinthians 12:11", "1 Corinthians 13:8"],
    raises: ["what-are-spiritual-gifts"],
    followsFrom: ["what-are-spiritual-gifts", "how-do-i-receive-the-holy-spirit"],
    related: ["what-are-spiritual-gifts", "how-do-i-know-the-spirit-is-leading-me", "how-does-the-spirit-convict-the-world", "is-it-okay-to-doubt"],
    planned: ["How can I test a claimed prophecy or miracle?"],
    order: 21,
  },

  {
    slug: "discovering-my-gift",
    question: "How do I discover my gift?",
    category: "holy-spirit",
    summary:
      "You discover your gift the way God has always grown His servants: by serving, with the Body, in love. The New Testament says every believer has received a gift to use for the good of all, that the gifts are diverse and mostly ordinary, and that they are given to build up the church. Look at what Scripture names, see what God has already placed in your hands, serve where you can, and let the Body of Christ affirm what it sees in you. Gift discovery grows out of faithfulness, not revelation.",
    passages: [
      {
        book: "Romans",
        chapter: 12,
        title: "Diverse gifts, each used in service",
        lookFor: "Paul lists the practical gifts after the call to surrender: prophecy, service, teaching, exhorting, giving, leading, showing mercy, each used soberly.",
        focus: "1-8",
      },
      {
        book: "1 Peter",
        chapter: 4,
        title: "Good stewards of God's varied grace",
        lookFor: "Each has received a gift; use it to serve one another, that in all things God may be glorified.",
        focus: "7-11",
      },
      {
        book: "1 Corinthians",
        chapter: 12,
        title: "One Spirit, many gifts, one body",
        lookFor: "The Spirit distributes to each as He wills, and each member is placed in the body just as God desired.",
        focus: "1-11",
      },
      {
        book: "1 Corinthians",
        chapter: 14,
        title: "Seek to build up the church",
        lookFor: "Whatever gift you pursue, the goal is the same: 'seek that you may abound to the building up of the assembly.'",
        focus: "1-12",
      },
      {
        book: "Matthew",
        chapter: 25,
        title: "The talents put to work",
        lookFor: "The master gives each servant something and expects them to use it; faithfulness over a little is what is rewarded.",
        focus: "14-30",
      },
    ],
    points: [
      {
        heading: "Every believer has received a gift",
        body:
          "Peter assumes it: 'As each has received a gift, employ it in serving one another, as good managers of the grace of God in its various forms.' Paul says to each one is given the manifestation of the Spirit for the common good, and the same Spirit distributes to each one separately as He wills. Even receipt of the gift is grace: 'to each one of us was the grace given according to the measure of the gift of Christ.' You are not a bystander in the body.",
        verses: ["1 Peter 4:10", "1 Corinthians 12:7", "1 Corinthians 12:11", "Ephesians 4:7"],
      },
      {
        heading: "The gifts are diverse and mostly ordinary",
        body:
          "When Paul lists the gifts, most of them are not spectacular: prophecy, serving, teaching, exhorting, giving, leading, and showing mercy. In the longer list, alongside miracles and tongues, he includes helps and governments. God places each member in the body just as He desires, and most of us are placed in humble, daily service. So look where God has already fitted you, in capacities and opportunities He has given, not only at the flashy.",
        verses: ["Romans 12:6-8", "1 Corinthians 12:28", "1 Corinthians 12:18"],
      },
      {
        heading: "Gifts are for building up, not for display",
        body:
          "The measure of a gift is what it does for others. Paul says, since you are zealous for spiritual gifts, 'seek that you may abound to the building up of the assembly,' and Peter says that whether one speaks or serves, the aim is 'that in all things God may be glorified through Jesus Christ.' A gift is a channel for grace, not a trophy for the self. The test of your gift is not how impressive it looks but how much it serves.",
        verses: ["1 Corinthians 14:12", "1 Corinthians 12:7", "1 Peter 4:11"],
      },
      {
        heading: "You find it by serving",
        body:
          "Gift discovery is not primarily a revelation; it is discovery in action. In the parable, the master gave each servant something and then expected faithfulness with it; the faithful servant, not the idle one, heard 'well done, good and faithful servant.' Serve where the need is, use what is in your hand, try what Scripture names, and let the Body of Christ confirm what it sees in you. Gifts become known as they are used.",
        verses: ["Matthew 25:21", "Romans 12:6", "1 Peter 4:10"],
      },
      {
        heading: "Love and character are the foundation",
        body:
          "Above all things, Peter says, be earnest in your love, for love covers a multitude of sins. The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control, and Paul's whole chapter on gifts ends by showing the still more excellent way of love. A gift without love is nothing. Pursue Christlikeness, and your gift will find its proper place in a life that loves.",
        verses: ["1 Peter 4:8", "Galatians 5:22-23", "1 Corinthians 13:13", "1 Corinthians 14:1"],
      },
    ],
    keyVerses: ["1 Peter 4:10", "Romans 12:6-8", "1 Corinthians 12:7", "1 Corinthians 12:11", "1 Corinthians 14:12"],
    raises: ["what-are-spiritual-gifts", "are-sign-gifts-active"],
    followsFrom: ["what-are-spiritual-gifts", "how-do-i-receive-the-holy-spirit"],
    related: ["what-are-spiritual-gifts", "are-sign-gifts-active", "what-the-new-life-looks-like", "who-is-the-holy-spirit"],
    planned: ["How do I grow in the fruit of the Spirit?"],
    order: 22,
  },

  // ------------------------------------------------------------------
  // TRAIL: Jesus Christ (continued: the world's hostility)
  // ------------------------------------------------------------------
  {
    slug: "what-does-it-mean-that-the-world-hates-jesus",
    question: "What does it mean that the world hates Jesus?",
    category: "jesus-christ",
    summary:
      "The world's hatred of Jesus is not accidental; it is the moral response of darkness to light. Because Jesus exposes the works of the world as evil, and because those who belong to Him are no longer of the world, the world that rejected Him will also reject His people. Jesus warned His followers plainly and called them blessed in the face of it, because His victory, and theirs, is assured.",
    passages: [
      {
        book: "John",
        chapter: 15,
        title: "If the world hates you, it hated me first",
        lookFor: "Jesus' plain warning to His disciples: if the world hates you, know that it hated me before it hated you, and it will persecute you as it persecuted me.",
        focus: "18-27",
      },
      {
        book: "John",
        chapter: 16,
        title: "Persecution promised, and the victory promised",
        lookFor: "The hour when killing believers will seem like serving God; and the same chapter's word of peace: I have overcome the world.",
        focus: "1-4",
      },
      {
        book: "John",
        chapter: 3,
        title: "Loved darkness rather than light",
        lookFor: "The root of the hatred: everyone who does evil hates the light and will not come to it, lest his works be exposed.",
        focus: "16-21",
      },
      {
        book: "1 John",
        chapter: 3,
        title: "Do not be surprised if the world hates you",
        lookFor: "John tells believers not to be astonished: the world's hostility is the family likeness it shows to those who belong to Christ.",
        focus: "11-18",
      },
      {
        book: "Matthew",
        chapter: 5,
        title: "Blessed are those who are persecuted for my sake",
        lookFor: "Jesus pronounces blessing, not curse, on those who are reproached and persecuted on His account.",
        focus: "10-12",
      },
    ],
    points: [
      {
        heading: "The root of the hatred is the light's exposure of darkness",
        body:
          "John gives the reason the world rejects Jesus: 'This is the judgment, that the light has come into the world, and men loved the darkness rather than the light; for their works were evil. For everyone who does evil hates the light, and doesn't come to the light, lest his works would be exposed.' Jesus said plainly, 'the world can't hate you, but it hates me, because I testify about it, that its works are evil.' The world does not hate brightness in the abstract; it hates being exposed.",
        verses: ["John 3:19", "John 3:20", "John 7:7"],
      },
      {
        heading: "Jesus told His followers to expect the same",
        body:
          "There was no ambiguity in the warning. 'If the world hates you, you know that it has hated me before it hated you,' Jesus said, and 'if they persecuted me, they will also persecute you.' He prayed that His disciples would be kept from the evil one, and He said plainly that the world hates them because they are not of the world, even as He is not of the world. Following Christ means facing some measure of the world's disapproval.",
        verses: ["John 15:18", "John 15:20", "John 17:14"],
      },
      {
        heading: "Because His people belong to another world",
        body:
          "The reason for the collision is identity. John explains that if you were of the world, the world would love its own; but because you are not of the world, since Christ chose you out of the world, therefore the world hates you. John's brotherly word is measured and calm: 'Don't be surprised, my brothers, if the world hates you.' The world's friendship is not the Christian's home, and that is why the cross-shaped life can feel at odds with it.",
        verses: ["John 15:19", "1 John 3:13", "John 17:14"],
      },
      {
        heading: "And it can cost real suffering",
        body:
          "This was never a theoretical warning. Jesus told His disciples the hour would come when those who killed them would think they were offering service to God, and Paul states his expectation plainly: 'all who desire to live godly in Christ Jesus will suffer persecution.' Down through the centuries, from the first martyr to believers facing hostility today, following the One whom the world rejected has often carried a real cost. Jesus prepared His people for it, not to frighten them but to steady them.",
        verses: ["John 16:2", "2 Timothy 3:12", "Matthew 5:12"],
      },
      {
        heading: "Yet He calls it blessed, and claims the victory",
        body:
          "Jesus does not frame the world's hatred as a curse but as a beatitude: 'Blessed are you when people reproach you, persecute you, and say all kinds of evil against you falsely, for my sake. Rejoice, and be exceedingly glad, for great is your reward in heaven.' Peter echoes it for the insulted. This is not a call to provoke the world, but an honest and joyful promise for those who are faithful when the world turns against them and their Lord; for in this world we have trouble, but He has overcome the world.",
        verses: ["Matthew 5:11", "Matthew 5:12", "1 Peter 4:14", "John 16:33"],
      },
    ],
    keyVerses: ["John 15:18-19", "John 3:19-20", "John 17:14", "Matthew 5:11-12", "2 Timothy 3:12"],
    raises: ["why-does-god-allow-suffering", "is-god-in-control", "how-can-i-be-saved"],
    followsFrom: ["how-does-the-spirit-convict-the-world", "who-is-jesus"],
    related: ["who-is-jesus", "why-does-god-allow-suffering", "between-the-cross-and-the-resurrection", "spirits-witness-or-my-own-feelings"],
    planned: ["How do I stand firm when following Jesus costs me?"],
    order: 22,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Holy Spirit (continued: fruit)
  // ------------------------------------------------------------------
  {
    slug: "what-is-the-fruit-of-the-spirit",
    question: "What is the fruit of the Spirit?",
    category: "holy-spirit",
    summary:
      "The fruit of the Spirit is Christlike character grown in the believer by the Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. It is not produced by anxious effort but grows as we walk by the Spirit, abide in Christ, and keep in step with Him. It is the character of the kingdom, and the evidence that the Spirit's life is at work in us.",
    passages: [
      {
        book: "Galatians",
        chapter: 5,
        title: "The fruit of the Spirit",
        lookFor: "Paul's great list: against such fruit there is no law, over against the works of the flesh.",
        focus: "16-26",
      },
      {
        book: "John",
        chapter: 15,
        title: "Abide in me, and bear fruit",
        lookFor: "The vine and the branches: fruit grows by abiding, not by striving, and it glorifies the Father.",
        focus: "1-17",
      },
      {
        book: "Romans",
        chapter: 14,
        title: "The kingdom is righteousness, peace, and joy in the Spirit",
        lookFor: "The ways of the kingdom are not food and drink but the Spirit's character: righteousness, peace, and joy.",
        focus: "17-19",
      },
      {
        book: "1 Corinthians",
        chapter: 13,
        title: "The greatest of these is love",
        lookFor: "Love, the first and fullest of the fruit, described in concrete action, the most excellent way.",
        focus: "1-13",
      },
      {
        book: "Colossians",
        chapter: 3,
        title: "Put on the new self",
        lookFor: "The character of Christ 'put on' like clothes, with love as the bond that holds it all.",
        focus: "12-17",
      },
    ],
    points: [
      {
        heading: "It is the Spirit's work in our character",
        body:
          "Paul names it as one fruit with many graces: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control, and adds, 'against such things there is no law.' Paul elsewhere calls it 'the fruit of the Spirit' in all goodness, righteousness, and truth. This is not a to-do list of behaviors we manufacture; it is the character Christ produces through His Spirit in those who belong to Him.",
        verses: ["Galatians 5:22", "Galatians 5:23", "Ephesians 5:9"],
      },
      {
        heading: "It grows as we abide in Christ",
        body:
          "Jesus gave the secret: remain in me, and I in you; 'As the branch can't bear fruit by itself, unless it remains in the vine, so neither can you, unless you remain in me.' Fruit is not forced from a branch; it grows out of a living connection. And Jesus said, 'in this is my Father glorified, that you bear much fruit': the fruit is real, and it glorifies the Father.",
        verses: ["John 15:4", "John 15:5", "John 15:8", "Galatians 5:25"],
      },
      {
        heading: "Its center is love",
        body:
          "The fruit list begins with love, and Paul's whole portrait of it is love in action: love is patient and kind, does not envy, does not brag, is not proud. 'But now faith, hope, and love remain... the greatest of these is love.' Jesus made love the mark of His disciples. All the other graces grow in the soil of love: we are patient and kind because we love.",
        verses: ["1 Corinthians 13:4", "1 Corinthians 13:13", "John 13:34-35", "Colossians 3:14"],
      },
      {
        heading: "It is cultivated by walking by the Spirit",
        body:
          "Paul sets the fruit of the Spirit against the works of the flesh, and then tells us how it grows: 'walk by the Spirit, and you won't fulfill the lust of the flesh,' and 'if we live by the Spirit, let's also walk by the Spirit.' He pictures it as putting on Christlike character like clothes, with love as the binding, and letting the peace of Christ rule in the heart. The Spirit does the growing; our part is to keep in step with Him.",
        verses: ["Galatians 5:16", "Galatians 5:19", "Galatians 5:21", "Galatians 5:25", "Colossians 3:12", "Colossians 3:14"],
      },
      {
        heading: "It is the character of the kingdom and the evidence of the Spirit",
        body:
          "Paul says the kingdom of God is not about eating and drinking, but 'righteousness, peace, and joy in the Holy Spirit.' The fruit is the shape of the life to come, already being formed in us. And it is evidence: where the Spirit is truly at work, this character appears, gently and over time. It is not instant and it is not cheap; it is a life grown by repeated dependence on Jesus, and it is the surest evidence that He is alive in us.",
        verses: ["Romans 14:17", "Galatians 5:22-23", "John 15:8", "Galatians 5:25"],
      },
    ],
    keyVerses: ["Galatians 5:22-23", "John 15:5", "1 Corinthians 13:13", "Romans 14:17", "Galatians 5:16"],
    raises: ["discovering-my-gift", "what-are-spiritual-gifts", "how-do-i-fight-sin"],
    followsFrom: ["is-the-holy-spirit-god", "who-is-the-holy-spirit"],
    related: ["who-is-the-holy-spirit", "is-the-holy-spirit-god", "what-the-new-life-looks-like", "what-is-the-flesh-versus-the-spirit"],
    planned: ["How are the fruit of the Spirit and the gifts of the Spirit different?"],
    order: 23,
  },

  {
    slug: "what-does-it-mean-to-be-baptized-with-the-holy-spirit",
    question: "What does it mean to be baptized with the Holy Spirit?",
    category: "holy-spirit",
    summary:
      "'Baptized in the Holy Spirit' is Jesus' own phrase for the Spirit coming upon His people in power. It came at Pentecost, when the church was filled with the Spirit and empowered to be Christ's witnesses, and it is how every believer is joined by the Spirit into the one body of Christ. Believers receive this gift at the beginning of the Christian life, and they are filled again and again as they walk with God.",
    passages: [
      {
        book: "Mark",
        chapter: 1,
        title: "He will baptize you in the Holy Spirit",
        lookFor: "John sets his water baptism over against the one to come: Jesus would baptize in the Holy Spirit.",
        focus: "1-11",
      },
      {
        book: "Acts",
        chapter: 1,
        title: "You will receive power",
        lookFor: "Jesus tells the disciples to wait in Jerusalem for the promise: they will be baptized in the Holy Spirit, and receive power to be His witnesses.",
        focus: "1-11",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "The promise comes at Pentecost",
        lookFor: "The Spirit comes in power on the gathered church, and Peter declares that the promise is for you, your children, and all who are far off.",
        focus: "1-21",
      },
      {
        book: "1 Corinthians",
        chapter: 12,
        title: "Baptized into one body by one Spirit",
        lookFor: "Paul's explanation of what the Spirit's baptism does: in one Spirit we were all baptized into one body, Jews and Greeks, bond and free.",
        focus: "12-13",
      },
      {
        book: "Acts",
        chapter: 19,
        title: "The disciples at Ephesus receive the Spirit",
        lookFor: "Believers who had known only John's baptism hear of Jesus, believe, and receive the Holy Spirit.",
        focus: "1-7",
      },
    ],
    points: [
      {
        heading: "It is Jesus' own promise, set over against John's water",
        body:
          "John the Baptist drew the contrast: 'I baptized you in water, but he will baptize you in the Holy Spirit.' Jesus repeated it to His disciples before His ascension: 'you will be baptized in the Holy Spirit not many days from now.' The phrase is not a modern slogan; it is Jesus' own description of what was about to happen, and what He had come to give.",
        verses: ["Mark 1:8", "Acts 1:5", "Luke 3:16"],
      },
      {
        heading: "It came at Pentecost, in power",
        body:
          "The promise was fulfilled at Pentecost: 'They were all filled with the Holy Spirit, and began to speak with other languages, as the Spirit gave them the ability to speak.' And Jesus had told them what the power was for: 'You will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.' The baptism of the Spirit is not power for display but power for mission.",
        verses: ["Acts 2:4", "Acts 1:8", "Acts 2:38-39"],
      },
      {
        heading: "It unites believers into the one body of Christ",
        body:
          "Paul explains what the Spirit's baptism does: 'For in one Spirit we were all baptized into one body, whether Jews or Greeks, whether bond or free; and were all given to drink into one Spirit.' The baptism of the Spirit is how God joins every believer, regardless of background, into the single body of Christ. It is not an experience some have and others miss; it is the Spirit's own work at the heart of belonging to Christ.",
        verses: ["1 Corinthians 12:13", "1 Corinthians 12:12"],
      },
      {
        heading: "It comes to believers as they receive the word",
        body:
          "The gift belongs to the household of faith. Peter promised the Spirit to every one who repents and is baptized, 'for the promise is to you, and to your children, and to all who are far off.' The Samaritans who believed were baptized, and later received the Holy Spirit. And at Ephesus, disciples who knew only John's baptism heard of Jesus, believed, and the Holy Spirit came on them. The way to the Spirit's baptism is through faith in Christ.",
        verses: ["Acts 2:38", "Acts 2:39", "Acts 8:14-17", "Acts 19:4", "Acts 19:6"],
      },
      {
        heading: "And believers are filled again and again",
        body:
          "Pentecost was once; the filling is ongoing. The same believers who were filled at Pentecost, after prayer, 'were all filled with the Holy Spirit, and they spoke the word of God with boldness.' Paul commands us to keep being filled with the Spirit. The Spirit's baptism places us in Christ once and for all; the Spirit's filling renews and empowers us for each new day, and both are gifts of the same gracious God.",
        verses: ["Acts 2:4", "Acts 4:31", "Ephesians 5:18", "Acts 1:8"],
      },
    ],
    keyVerses: ["Acts 1:5", "1 Corinthians 12:13", "Acts 2:38-39", "Mark 1:8", "Acts 1:8"],
    raises: ["what-are-spiritual-gifts", "who-is-the-holy-spirit", "how-do-i-know-the-spirit-is-leading-me", "what-is-speaking-in-tongues-and-is-it-for-today"],
    followsFrom: ["how-do-i-receive-the-holy-spirit", "who-is-the-holy-spirit"],
    related: ["how-do-i-receive-the-holy-spirit", "who-is-the-holy-spirit", "holy-spirit-in-the-old-testament", "what-are-spiritual-gifts"],
    planned: [],
    order: 24,
  },

  // ------------------------------------------------------------------
  // TRAIL: Jesus Christ (continued: incarnation)
  // ------------------------------------------------------------------
  {
    slug: "why-did-god-become-a-man",
    question: "Why did God become a man?",
    category: "jesus-christ",
    summary:
      "God the Son became a man because only One who is both fully God and fully man could save us. He came to reveal the Father, to share our nature and take our place in death, to be a high priest who sympathizes with our weakness, and to bring us into God's family as children. The incarnation is not a detour; it is the only road to our salvation.",
    passages: [
      {
        book: "John",
        chapter: 1,
        title: "The Word became flesh",
        lookFor: "The eternal Word, who was God, took on flesh and dwelt among us, full of grace and truth, and made the Father known.",
        focus: "1-18",
      },
      {
        book: "Philippians",
        chapter: 2,
        title: "He emptied Himself, taking the form of a servant",
        lookFor: "Christ, being in the form of God, emptied Himself and became obedient to death, even death on a cross.",
        focus: "5-11",
      },
      {
        book: "Hebrews",
        chapter: 2,
        title: "He had to be made like his brothers",
        lookFor: "Why the Son shared our flesh and blood: to taste death for everyone, to destroy the devil, and to become a merciful high priest.",
        focus: "5-18",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "God sent His own Son in the likeness of sinful flesh",
        lookFor: "What the law could not do, God did: sending His Son, He condemned sin in the flesh and set us free.",
        focus: "1-17",
      },
      {
        book: "Galatians",
        chapter: 4,
        title: "Born to redeem, that we might be adopted",
        lookFor: "God sent His Son, born of a woman, to redeem those under the law, that we might receive adoption as children.",
        focus: "4-7",
      },
    ],
    points: [
      {
        heading: "He came to reveal God and to give us life",
        body:
          "John opens with the deepest reason: 'The Word became flesh, and lived among us. We saw his glory... full of grace and truth.' No one has seen God at any time, but the only Son, who is in the bosom of the Father, has made Him known. And John names the outcome: God sent His one and only Son into the world 'that we might live through him.' God became man so that we could see Him and so that we could live.",
        verses: ["John 1:14", "John 1:18", "1 John 4:9"],
      },
      {
        heading: "He came to take our place",
        body:
          "Paul puts it in a sentence: 'what the law couldn't do, in that it was weak through the flesh, God did, sending his own Son in the likeness of sinful flesh and for sin, he condemned sin in the flesh.' The Son who had known no sin came into the world, as Hebrews says, to do the Father's will and to offer Himself. A true substitute must share our nature, and He did.",
        verses: ["Romans 8:3", "2 Corinthians 5:21", "Hebrews 10:5", "Hebrews 10:7"],
      },
      {
        heading: "He had to be truly man, and truly God",
        body:
          "Only God could save, and only a man could die in a man's place. Hebrews explains the necessity: 'Since then the children have shared in flesh and blood, he also himself in the same way partook of the same, that through death he might bring to nothing him who had the power of death.' And he had to be made like his brothers so that he could become a merciful and faithful high priest. Paul names the One who did it: Christ Jesus, who was in the form of God and emptied Himself to take the form of a servant, and who is the one mediator between God and men, the man Christ Jesus. The incarnation is what makes both true: He is the man who can represent us, and the God who can save us.",
        verses: ["Hebrews 2:14", "Hebrews 2:17", "1 Timothy 2:5", "Philippians 2:6-8"],
      },
      {
        heading: "He became man to sympathize with our weakness",
        body:
          "Because He became man, Christ was tempted in every way that we are, yet without sin, and because He suffered when He was tempted, He is able to help those who are being tempted. This is why we can draw near to the throne of grace with confidence, to find mercy and grace in time of need. God became man not only to atone for our sins but to feel our grief, so that His mercy would come to us as a brother's, not a stranger's.",
        verses: ["Hebrews 2:18", "Hebrews 4:15", "Hebrews 4:16"],
      },
      {
        heading: "And to bring us into His family",
        body:
          "The end of the incarnation is family. God sent His Son, born of a woman, 'that he might redeem those who were under the law, that we might receive the adoption of children.' To as many as received Christ, He gave the right to become children of God, and Paul says we have received the Spirit of adoption, by whom we cry 'Abba! Father!' And Hebrews adds the astonishing note: because He sanctified us, 'he is not ashamed to call them brothers.' The eternal Son took our humanity so that, in Him, we might share His sonship.",
        verses: ["Galatians 4:4-5", "John 1:12", "Hebrews 2:11", "Romans 8:15"],
      },
    ],
    keyVerses: ["John 1:14", "Hebrews 2:14-17", "Romans 8:3", "1 Timothy 2:5", "Galatians 4:4-5"],
    raises: ["why-did-jesus-have-to-die", "why-is-jesus-both-son-of-god-and-son-of-man", "who-is-the-father"],
    followsFrom: ["is-jesus-really-god", "who-is-jesus"],
    related: ["is-jesus-really-god", "who-is-jesus", "why-is-jesus-both-son-of-god-and-son-of-man", "who-is-the-father"],
    planned: ["What was the world waiting for before Jesus came?"],
    order: 23,
  },

  // ------------------------------------------------------------------
  // TRAIL: Our Walk with Him (continued: the new heart)
  // ------------------------------------------------------------------
  {
    slug: "what-is-the-new-heart-that-god-promised",
    question: "What is the new heart that God promised?",
    category: "our-walk",
    summary:
      "God promised through the prophets to give His people a new heart: not just better behavior but a changed inner life, with the heart of stone replaced by a heart of flesh, His law written on the heart, and His Spirit put within to enable obedience. That promise is fulfilled in the new covenant in Christ, where God gives us new hearts and puts His Spirit in us, working in us both to will and to do His good pleasure.",
    passages: [
      {
        book: "Ezekiel",
        chapter: 36,
        title: "A new heart and a new spirit",
        lookFor: "God promises to cleanse His people, give them a new heart, put a new spirit within them, and set His Spirit within them to cause them to walk in His statutes.",
        focus: "22-32",
      },
      {
        book: "Ezekiel",
        chapter: 11,
        title: "The heart of stone replaced by a heart of flesh",
        lookFor: "The same promise: one new heart, the stony heart taken out, a heart of flesh given, so that they walk in God's statutes as His people.",
        focus: "14-21",
      },
      {
        book: "Jeremiah",
        chapter: 31,
        title: "The new covenant written on the heart",
        lookFor: "God will make a new covenant, writing His law on the heart, so that all know Him and their sin is remembered no more.",
        focus: "31-34",
      },
      {
        book: "Psalm",
        chapter: 51,
        title: "Create in me a clean heart",
        lookFor: "David, after his sin, begs God to do the very thing Ezekiel promised: create a clean heart, renew a right spirit within him.",
        focus: "1-12",
      },
      {
        book: "Deuteronomy",
        chapter: 30,
        title: "The circumcision of the heart",
        lookFor: "Moses points forward: the Lord your God will circumcise your heart so that you love Him with all your heart and soul.",
        focus: "1-14",
      },
    ],
    points: [
      {
        heading: "God promised a changed heart, not just changed rules",
        body:
          "Ezekiel declares the promise in God's own voice: 'I will also give you a new heart, and I will put a new spirit within you; and I will take away the stony heart out of your flesh, and I will give you a heart of flesh.' The new covenant is written deeper than tablets of stone: 'I will put my law in their inward parts, and in their heart will I write it.' The promise is not a better list of rules but a transformed inner life.",
        verses: ["Ezekiel 36:26", "Jeremiah 31:33"],
      },
      {
        heading: "It is a divine gift, not self-improvement",
        body:
          "Everything about the promise is what God will do: 'I will give them one heart... I will take the stony heart out of their flesh, and will give them a heart of flesh.' When David begged for a clean heart after his fall, he prayed the same way, 'create in me a clean heart, O God. Renew a right spirit within me.' We cannot manufacture a new heart; it has to be given.",
        verses: ["Ezekiel 11:19", "Psalm 51:10"],
      },
      {
        heading: "It is the shape of the new covenant",
        body:
          "Jeremiah calls it by name: 'Behold, the days come, says Yahweh, that I will make a new covenant with the house of Israel.' And its heart is inward and forgiving: God writes His law on the heart, all know Him from the least to the greatest, and 'I will forgive their iniquity, and their sin will I remember no more.' Ezekiel joins cleansing and the Spirit to the same promise: God washes, gives a new heart, and puts His Spirit within.",
        verses: ["Jeremiah 31:31", "Jeremiah 31:33", "Jeremiah 31:34", "Ezekiel 36:25-27"],
      },
      {
        heading: "It comes to be in Christ",
        body:
          "The new covenant promised through the prophets is inaugurated in Christ. Jesus told Nicodemus that to enter the kingdom you must be born of water and the Spirit, and in Christ, Paul says, 'if anyone is in Christ, he is a new creation.' The heart of stone replaced by a heart of flesh is what regeneration is: God giving us a new heart in the new birth, and it is God who works in us 'both to will and to work, for his good pleasure.' The promise comes true in everyone He makes new.",
        verses: ["John 3:5", "2 Corinthians 5:17", "Philippians 2:13"],
      },
      {
        heading: "Its fruit is hearts that love God",
        body:
          "The new heart is for relationship. Moses pointed to the end: 'Yahweh your God will circumcise your heart... to love Yahweh your God with all your heart.' Ezekiel says the Spirit within 'cause you to walk in my statutes... and do them,' and David's prayer moves from a clean heart to the joy and ready spirit of salvation. The change of heart is not an end in itself; it is new hearts, enabled by the Spirit, that love God, obey Him, and find their joy in Him.",
        verses: ["Deuteronomy 30:6", "Ezekiel 36:27", "Psalm 51:10", "Psalm 51:12"],
      },
    ],
    keyVerses: ["Ezekiel 36:26-27", "Jeremiah 31:33", "Psalm 51:10", "Ezekiel 11:19", "Deuteronomy 30:6"],
    raises: ["what-does-it-mean-to-be-born-again", "how-do-i-receive-the-holy-spirit"],
    followsFrom: ["how-can-i-be-saved", "what-is-repentance"],
    related: ["how-can-i-be-saved", "what-does-it-mean-to-be-born-again", "what-is-repentance", "spirits-witness-or-my-own-feelings"],
    planned: ["How do I know God has given me a new heart?"],
    order: 26,
  },

  {
    slug: "why-did-the-disciples-not-recognize-him-after-he-rose",
    question: "Why did the disciples not recognize Him after He rose?",
    category: "jesus-christ",
    summary:
      "A number of the resurrection accounts tell us that the risen Jesus was not immediately recognized: the two on the road, Mary, the disciples on the shore. He was always the same Jesus, now risen and glorious, and recognition came as He revealed Himself, by His word, at the breaking of bread, in calling a name. The appearances teach us that we recognize our risen Lord by faith, through the means He has given, not by sight alone.",
    passages: [
      {
        book: "Luke",
        chapter: 24,
        title: "The road to Emmaus",
        lookFor: "Two disciples walk with the risen Jesus without recognizing Him, until He opens the Scriptures and takes bread, and then their eyes are opened.",
        focus: "13-43",
      },
      {
        book: "John",
        chapter: 20,
        title: "Mary at the tomb",
        lookFor: "Mary does not know it is Jesus standing before her until He calls her name.",
        focus: "11-18",
      },
      {
        book: "John",
        chapter: 21,
        title: "On the shore of the sea",
        lookFor: "The disciples have fished all night and do not recognize the figure on the beach, until the catch of fish and the cry, 'It's the Lord.'",
        focus: "1-14",
      },
      {
        book: "Mark",
        chapter: 16,
        title: "He appeared in another form",
        lookFor: "Mark notes that Jesus appeared in a different form to two of them as they walked, and later upbraided the eleven for their unbelief.",
        focus: "9-14",
      },
      {
        book: "John",
        chapter: 20,
        title: "Show me, and I will believe",
        lookFor: "Even the doubter is met with grace: reach here your finger, see my hands, and do not be unbelieving but believing.",
        focus: "24-31",
      },
    ],
    points: [
      {
        heading: "The accounts are honest: sometimes He was not recognized at first",
        body:
          "The witnesses do not hide it. The two on the road to Emmaus 'were kept from recognizing him.' Mary stood before the risen Jesus and 'didn't know that it was Jesus.' The disciples on the shore 'didn't know that it was Jesus,' and in the upper room they were terrified, thinking they saw a spirit. Whatever the reason, it was the disciples' eyes and minds that failed to see at first, not the reality of the risen Lord before them.",
        verses: ["Luke 24:16", "John 20:14", "John 21:4", "Luke 24:37"],
      },
      {
        heading: "Yet it was always the same Jesus, now risen and glorious",
        body:
          "The risen Jesus insisted on continuity with the crucified One. He showed them His hands and feet: 'See my hands and my feet, that it is truly me. Touch me and see, for a spirit doesn't have flesh and bones, as you see that I have.' He ate with them, and He offered His wounds to Thomas. The glory did not erase His identity; it fulfilled it. He is the same Lord, risen, bodily, and present.",
        verses: ["Luke 24:39", "Luke 24:42-43", "John 20:27"],
      },
      {
        heading: "Recognition came as He revealed Himself",
        body:
          "In every case, the blindness was lifted when Jesus acted. On the road, it was when He took bread, blessed it, and broke it that their eyes were opened and they recognized Him. To Mary, it was when He said her name: 'Jesus said to her, Mary.' At the sea, it was the miraculous catch that led John to say, 'It's the Lord.' The disciples did not find Him by their own insight; He made Himself known.",
        verses: ["Luke 24:30-31", "John 20:16", "John 21:6", "John 21:7"],
      },
      {
        heading: "He opened their minds through the Scriptures",
        body:
          "On the Emmaus road, before their eyes were opened, their hearts were burning as He opened the Scriptures to them; even after the empty tomb, they had not yet understood the Scripture that He must rise from the dead. Later, He 'opened their minds, that they might understand the Scriptures.' The risen Jesus connects His resurrection to the whole word of God, from Moses and all the prophets to everything written about Him. Recognition came through the word He had given, and it still does: He makes Himself known as He opens the Scriptures to His people.",
        verses: ["Luke 24:25-27", "Luke 24:32", "Luke 24:44-45", "John 20:9"],
      },
      {
        heading: "So we recognize Him by faith, not by sight",
        body:
          "Jesus told Thomas, 'Because you have seen me, you have believed. Blessed are those who have not seen, and have believed.' Peter celebrates that those who have not seen Him love Him and rejoice in Him with inexpressible joy, and Paul says we walk by faith, not by sight. The risen Lord is with His people, making Himself known in His word, at His table, and in His care; and like the disciples, we recognize Him not by seeing with our eyes but by believing with our hearts.",
        verses: ["John 20:29", "1 Peter 1:8", "2 Corinthians 5:7", "Matthew 28:20"],
      },
    ],
    keyVerses: ["Luke 24:16", "Luke 24:30-31", "John 20:16", "John 20:29", "2 Corinthians 5:7"],
    raises: ["did-jesus-rise-from-the-dead", "what-is-faith", "where-is-jesus-now", "why-did-jesus-appear-only-to-certain-people-after-his-resurrection"],
    followsFrom: ["did-jesus-rise-from-the-dead", "where-is-jesus-now"],
    related: ["did-jesus-rise-from-the-dead", "is-it-okay-to-doubt", "what-is-faith", "where-is-jesus-now"],
    planned: [],
    order: 24,
  },

  {
    slug: "what-does-it-mean-that-jesus-is-the-son-of-david",
    question: "What does it mean that Jesus is the Son of David?",
    category: "jesus-christ",
    summary:
      "Son of David is the title of the promised Messiah: the King God promised to David, whose throne would be established forever. Jesus is that King by descent, born of David's line, and He fulfills the Davidic covenant. Yet He is more than David's son, as Jesus Himself showed: He is also David's Lord. As Son of David, Jesus is our promised, merciful, never-ending King.",
    passages: [
      {
        book: "2 Samuel",
        chapter: 7,
        title: "The promise to David",
        lookFor: "God promises David that his offspring will have an everlasting kingdom and an eternal throne: the covenant of the King to come.",
        focus: "1-17",
      },
      {
        book: "Psalm",
        chapter: 110,
        title: "David's Lord",
        lookFor: "Yahweh says to my Lord, sit at my right hand: the oracle Jesus used to show the Christ is David's son and David's Lord.",
      },
      {
        book: "Matthew",
        chapter: 22,
        title: "Whose son is the Christ?",
        lookFor: "Jesus asks the question that points beyond a human line: if David calls the Messiah Lord, how is he his son?",
        focus: "41-46",
      },
      {
        book: "Luke",
        chapter: 18,
        title: "Son of David, have mercy on me",
        lookFor: "The blind man greets Jesus as Son of David and receives sight: the Messiah-King comes with mercy and healing.",
        focus: "35-43",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "God made him both Lord and Christ",
        lookFor: "Peter links David's promise to the risen Jesus: David's throne fulfilled, and the risen Christ made both Lord and Christ.",
        focus: "29-36",
      },
    ],
    points: [
      {
        heading: "God promised David a King whose throne would never end",
        body:
          "Through Nathan, God promised David: 'I will set up your seed after you... and I will establish his kingdom,' and 'I will establish the throne of his kingdom forever.' The angel told Mary that the child would be given 'the throne of his father David' and that of His Kingdom, 'There will be no end to his Kingdom.' and Jeremiah looked for the day when God would raise to David a righteous Branch who would reign as king. This is the promise Jesus came to fulfill.",
        verses: ["2 Samuel 7:12", "2 Samuel 7:13", "2 Samuel 7:16", "Luke 1:32", "Luke 1:33", "Jeremiah 23:5"],
      },
      {
        heading: "Jesus is David's son by descent",
        body:
          "Matthew opens with the claim of the royal line: 'The book of the genealogy of Jesus Christ, the son of David, the son of Abraham.' Paul says Christ was born 'of the seed of David according to the flesh,' and Joseph was of the house and family of David, so Jesus, born in Bethlehem, the city of David, was the promised descendant of the king. The title rests on real ancestry.",
        verses: ["Matthew 1:1", "Romans 1:3", "Luke 2:4"],
      },
      {
        heading: "The Son of David comes with mercy and healing",
        body:
          "The Gospels show people crying to this King in their need: the blind beggar by the road cried, 'Jesus, you son of David, have mercy on me,' and Jesus gave him back his sight. The Messiah-King does not come to rule from a distance; He comes near to the broken, showing mercy and healing, and His kingdom is made of such rescue.",
        verses: ["Luke 18:38", "Luke 18:40", "Matthew 9:27"],
      },
      {
        heading: "Yet David's son is also David's Lord",
        body:
          "Jesus pressed the deeper mystery: 'What do you think of the Christ? Whose son is he?' They said, 'Of David.' Then He asked how David, in the Spirit, calls Him Lord, quoting the psalm: 'The Lord said to my Lord, Sit at my right hand.' If the Messiah were only David's son, David would not call Him Lord. Jesus is the son of David by birth and the Son of God by nature, the root and the offspring of David, David's son and David's Lord.",
        verses: ["Matthew 22:42", "Matthew 22:43", "Matthew 22:45", "Psalm 110:1", "Acts 2:34", "Revelation 22:16"],
      },
      {
        heading: "So we greet Him as our everlasting King",
        body:
          "Peter's Pentecost sermon brings the promise home: David's throne is fulfilled in the risen Jesus, whom 'God has made him both Lord and Christ,' 'this Jesus whom you crucified.' Jesus, the Son of David, is the King who was raised from the dead and declared the Son of God in power. His is a kingdom that will not pass away, and to follow Him is to belong to a King whose throne lasts forever.",
        verses: ["Acts 2:34", "Acts 2:36", "2 Samuel 7:16", "Romans 1:3-4", "Luke 1:33"],
      },
    ],
    keyVerses: ["2 Samuel 7:12-13", "Psalm 110:1", "Matthew 22:42-45", "Romans 1:3", "Luke 18:38"],
    raises: ["who-is-jesus", "why-is-jesus-both-son-of-god-and-son-of-man"],
    followsFrom: ["what-does-it-mean-that-jesus-is-the-son-of-god", "who-is-jesus"],
    related: ["what-does-it-mean-that-jesus-is-the-son-of-god", "who-is-jesus", "why-did-god-become-a-man"],
    planned: ["What does it mean that Jesus is our King?"],
    order: 25,
  },

  // ------------------------------------------------------------------
  // TRAIL: Our Walk with Him (continued: children of God)
  // ------------------------------------------------------------------
  {
    slug: "what-does-it-mean-to-be-a-child-of-god",
    question: "What does it mean to be a child of God?",
    category: "our-walk",
    summary:
      "To be a child of God is to be brought, by the new birth and by adoption, into the family of God: given the right to be God's child through faith in Christ, sealed with the Spirit of adoption by whom we cry 'Abba, Father,' made heirs with Christ, and called to live as children who resemble their Father. It is the deepest belonging a person can have, and it is permanent.",
    passages: [
      {
        book: "John",
        chapter: 1,
        title: "Born of God",
        lookFor: "To as many as received Him, He gave the right to become children of God: born not of blood or human will, but of God.",
        focus: "1-18",
      },
      {
        book: "1 John",
        chapter: 3,
        title: "See what love the Father has given us",
        lookFor: "That we should be called children of God; and what we will be has not yet appeared, for we shall be like Him.",
        focus: "1-10",
      },
      {
        book: "Galatians",
        chapter: 4,
        title: "Adoption as sons",
        lookFor: "God sent His Son to redeem us, that we might receive adoption, and sent the Spirit of His Son into our hearts crying 'Abba, Father.'",
        focus: "4-7",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "The Spirit of adoption and fellow heirs",
        lookFor: "Led by the Spirit, crying 'Abba, Father,' witnessed as God's children, heirs of God and joint heirs with Christ.",
        focus: "12-17",
      },
      {
        book: "Matthew",
        chapter: 5,
        title: "Called children of God",
        lookFor: "In the Beatitudes Jesus names the family likeness: the peacemakers, the pure, and the merciful are called children of God.",
        focus: "1-16",
      },
    ],
    points: [
      {
        heading: "It is a gift of adoption, not a status we earn",
        body:
          "Sonship is given, not achieved. John says that to as many as received Christ, He gave the right to become children of God, born not of blood nor human will but of God. Paul says God sent His Son, born of a woman, 'that we might receive the adoption of children.' And John marvels at it: 'See how great a love the Father has bestowed on us, that we should be called children of God.' We do not become God's children by effort; we are given the name.",
        verses: ["John 1:12", "John 1:13", "Galatians 4:5", "1 John 3:1"],
      },
      {
        heading: "It is sealed by the Spirit of adoption",
        body:
          "God does not merely call us His children; He marks us with the Spirit who cries out in our hearts. Paul says you received 'the Spirit of adoption, by whom we cry, Abba, Father,' and that the Spirit Himself witnesses with our spirit that we are children of God. Galatians says the same: 'God sent out the Spirit of his Son into your hearts, crying, Abba, Father.' The Spirit is the evidence and the experience of our sonship.",
        verses: ["Romans 8:15", "Romans 8:16", "Galatians 4:6"],
      },
      {
        heading: "It makes us heirs with Christ",
        body:
          "Being God's child is not only a name; it is an inheritance. Paul writes, 'if children, then heirs; heirs of God, and joint heirs with Christ,' and 'if a son, then an heir of God through Christ.' Whatever belongs to the Father through the Son is shared with all who are in the Son. We are not servants earning a wage but sons and daughters who inherit, and the inheritance is everything that is Christ's.",
        verses: ["Romans 8:17", "Galatians 4:7"],
      },
      {
        heading: "It shapes our family likeness",
        body:
          "Children bear the family resemblance. Jesus says the peacemakers shall be called children of God, and Paul urges us to be imitators of God as beloved children. God's own promise runs through the prophets: 'I will be to you a Father. You will be to me sons and daughters.' To be a child of God is to be called, and to grow, into a life that mirrors the Father's mercy, purity, and love.",
        verses: ["Matthew 5:9", "Ephesians 5:1", "2 Corinthians 6:18"],
      },
      {
        heading: "It is already true, and still becoming",
        body:
          "John holds both together: 'Now we are children of God, and it is not yet revealed what we will be.' We are already, truly, God's children; and what that will finally look like is still coming, for when Christ appears we shall be like Him, for we shall see Him as He is. Sonship is our standing now and our destiny forever, the deepest identity a soul can carry: called, and finally made, children of God.",
        verses: ["1 John 3:1", "1 John 3:2"],
      },
    ],
    keyVerses: ["John 1:12", "1 John 3:1", "Romans 8:15-16", "Galatians 4:6", "Romans 8:17"],
    raises: ["spirits-witness-or-my-own-feelings", "still-my-father-when-i-fail"],
    followsFrom: ["what-does-it-mean-to-be-born-again", "born-again-and-baptism", "who-is-the-father"],
    related: ["what-does-it-mean-to-be-born-again", "who-is-the-father", "still-my-father-when-i-fail", "spirits-witness-or-my-own-feelings"],
    planned: ["What does it look like to love God as a Father?"],
    order: 27,
  },

  {
    slug: "what-does-it-mean-to-be-sealed-with-the-holy-spirit",
    question: "What does it mean to be sealed with the Holy Spirit?",
    category: "our-walk",
    summary:
      "To be sealed with the Holy Spirit is God's mark of ownership upon us and His guarantee of our inheritance. When we believed the gospel, God sealed us with the Holy Spirit of promise, who is the down payment of what is coming. The seal means we belong to God and are secure until the day of redemption. It is God's doing, not ours, and it is the ground of our assurance.",
    passages: [
      {
        book: "Ephesians",
        chapter: 1,
        title: "Sealed with the Spirit of promise",
        lookFor: "Having believed the gospel, you were sealed with the Holy Spirit of promise, who is the guarantee of the inheritance.",
        focus: "3-14",
      },
      {
        book: "2 Corinthians",
        chapter: 1,
        title: "God sealed us and gave us the Spirit",
        lookFor: "He establishes us in Christ, anoints us, seals us, and puts the Spirit in our hearts as the down payment.",
        focus: "18-22",
      },
      {
        book: "Ephesians",
        chapter: 4,
        title: "Sealed for the day of redemption",
        lookFor: "Do not grieve the Holy Spirit, in whom you were sealed for the day of redemption.",
        focus: "25-32",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "The Spirit witnesses with our spirit",
        lookFor: "The Spirit of adoption testifies that we are God's children, and nothing can separate us from His love.",
        focus: "1-17",
      },
      {
        book: "2 Timothy",
        chapter: 2,
        title: "The firm foundation that stands",
        lookFor: "The seal on God's foundation: the Lord knows those who are His, and let everyone who names His name depart from unrighteousness.",
        focus: "19-21",
      },
    ],
    points: [
      {
        heading: "The seal is given when we believe the gospel",
        body:
          "The seal is bound to faith. Paul writes that in Christ, 'having heard the word of the truth, the Good News of your salvation, in whom, having also believed, you were sealed with the Holy Spirit of promise.' It is not a second stage for the spiritually elite; it is what happens when a person hears and believes the gospel. At the very start of the Christian life, God puts His mark upon the believer.",
        verses: ["Ephesians 1:13", "Galatians 3:2"],
      },
      {
        heading: "It is God's mark of ownership and His guarantee",
        body:
          "A seal marks a thing as belonging to its owner, and the Spirit is exactly that. God establishes us in Christ and anoints us, and He 'also sealed us, and gave us the down payment of the Spirit in our hearts.' Paul calls the Spirit 'the pledge of our inheritance, to the redemption of God's own possession.' God has marked us as His, and the Spirit is the first installment of everything He has promised, a guarantee that the rest is coming.",
        verses: ["2 Corinthians 1:21", "2 Corinthians 1:22", "Ephesians 1:14"],
      },
      {
        heading: "Assurance rests on God's act, not our moods",
        body:
          "Because the seal is God's doing, our assurance does not rise and fall with our feelings. The Spirit witnesses with our spirit that we are God's children, and the Spirit of adoption enables us to cry 'Abba, Father.' John says that he who believes in the Son of God has the testimony in himself. The Spirit is the constant witness, the down payment already given; assurance is believing what God has done, even when our emotions waver.",
        verses: ["Romans 8:15", "Romans 8:16", "1 John 5:10"],
      },
      {
        heading: "The seal can be grieved",
        body:
          "Paul's warning keeps the seal from presumption: 'Don't grieve the Holy Spirit of God, in whom you were sealed for the day of redemption.' The seal is not a license to sin carelessly; it is the presence of a Person who lives in us and can be grieved by what we do. The same Spirit who is the guarantee of our redemption is the Spirit we can wound, and the day of redemption that secures us is also the day toward which we are to live in holiness.",
        verses: ["Ephesians 4:30", "Isaiah 63:10"],
      },
      {
        heading: "So we are secure, and we live toward the day",
        body:
          "The ground of our security is laid by God: His firm foundation stands, having this seal, 'the Lord knows those who are his.' For those in Christ there is no condemnation, and nothing can separate us from the love of God. And precisely because we are sealed for the day of redemption, we live expectantly and carefully, bearing the mark of Him who owns us until the day He brings us fully home. The seal is the promise that the redemption is certain, and it is already begun.",
        verses: ["2 Timothy 2:19", "Romans 8:1", "Romans 8:38-39"],
      },
    ],
    keyVerses: ["Ephesians 1:13-14", "2 Corinthians 1:21-22", "Ephesians 4:30", "Romans 8:16", "2 Timothy 2:19"],
    raises: ["spirits-witness-or-my-own-feelings", "can-i-lose-my-salvation"],
    followsFrom: ["can-i-lose-my-salvation", "how-do-i-receive-the-holy-spirit"],
    related: ["can-i-lose-my-salvation", "spirits-witness-or-my-own-feelings", "what-does-it-mean-to-be-a-child-of-god", "who-is-the-holy-spirit"],
    planned: ["What does it mean to grieve the Holy Spirit?"],
    order: 28,
  },

  {
    slug: "can-gods-grace-really-cover-my-worst-sins",
    question: "Can God's grace really cover my worst sins?",
    category: "our-walk",
    summary:
      "Yes. The gospel is made for the worst of us. Scripture's own story includes David, Peter, and Paul the self-called chief of sinners, all met by grace. Where sin abounded, grace abounded much more; God promises that sins as scarlet become white as snow and that our transgressions are removed as far as the east from the west. Christ is able to save to the uttermost, and there is no sin His blood cannot cleanse and no repentant sinner beyond His reach.",
    passages: [
      {
        book: "1 Timothy",
        chapter: 1,
        title: "Christ came to save sinners, of whom I am chief",
        lookFor: "Paul's own confession: the worst of sinners saved by the mercy of Christ, as an example of God's great patience.",
        focus: "12-17",
      },
      {
        book: "Romans",
        chapter: 5,
        title: "Where sin abounded, grace abounded much more",
        lookFor: "Paul's great contrast: the trespass brought death, but grace far overflows through the one man Jesus Christ.",
        focus: "12-21",
      },
      {
        book: "Psalm",
        chapter: 103,
        title: "Forgiveness as far as the east from the west",
        lookFor: "The Lord forgives all your iniquities and removes your transgressions from you, as far as east from west.",
        focus: "8-13",
      },
      {
        book: "1 John",
        chapter: 1,
        title: "The blood cleanses us from all sin",
        lookFor: "If we confess our sins, He is faithful and just to forgive and cleanse; the blood of Jesus cleanses from all sin.",
        focus: "5-10",
      },
      {
        book: "Hebrews",
        chapter: 7,
        title: "Able to save to the uttermost",
        lookFor: "Christ, who lives forever, is able to save completely those who draw near to God through Him.",
        focus: "23-28",
      },
    ],
    points: [
      {
        heading: "Scripture's worst stories end in grace",
        body:
          "The Bible is honest about the depth of human failure: David, after adultery and murder, begs, 'Have mercy on me, God... Wash me thoroughly from my iniquity.' Peter, who denied the Lord three times, was forgiven and sent to strengthen his brothers. And Paul, who had persecuted the church, calls himself the chief of sinners. If grace can reach them, it can reach anyone, because it is made for sinners.",
        verses: ["Psalm 51:1", "Psalm 51:2", "1 Timothy 1:15"],
      },
      {
        heading: "Grace is greater than our sin",
        body:
          "Paul measures the two: 'where sin abounded, grace abounded more exceedingly.' The prophet Micah pictures God treading our iniquities underfoot and casting all our sins into the depths of the sea; the psalmist sings that God does not deal with us according to our sins, but removes our transgressions from us 'as far as the east is from the west.' Your worst sin is not bigger than His grace.",
        verses: ["Romans 5:20", "Micah 7:19", "Psalm 103:10", "Psalm 103:12"],
      },
      {
        heading: "Christ can save to the uttermost",
        body:
          "Hebrews gives the widest promise in the New Testament: Christ, who lives forever to intercede, 'is also able to save to the uttermost those who draw near to God through him.' John adds the sweeping clause: the blood of Jesus 'cleanses us from all sin,' and 'if we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.' No sin is left off the list that His blood cannot handle.",
        verses: ["Hebrews 7:25", "1 John 1:7", "1 John 1:9"],
      },
      {
        heading: "Because the penalty was truly paid",
        body:
          "God's grace is not a waving aside of sin; it is a payment that satisfies. Paul declares there is 'no condemnation to those who are in Christ Jesus,' and John shows us why: 'we have a Counselor with the Father, Jesus Christ, the righteous, and he is the atoning sacrifice for our sins.' God made Him who knew no sin to be sin for us. The sin is covered because it was carried, and the grace is real because it cost everything.",
        verses: ["Romans 8:1", "1 John 2:1", "1 John 2:2", "2 Corinthians 5:21"],
      },
      {
        heading: "Grace that covers also transforms",
        body:
          "Mercy is never a license to keep sinning. The same grace that forgives is the grace that changes: the chief of sinners became the apostle who preached Christ with his life, and David's prayer for a clean heart was a prayer for a renewed life. When we are forgiven much, we love much, and we confess our sins because we belong to the light, not because we fear losing the forgiveness. Grace covers the repentant, and it sets them walking toward Jesus.",
        verses: ["1 Timothy 1:15", "1 Timothy 1:16", "1 John 1:7", "Romans 8:1"],
      },
    ],
    keyVerses: ["1 Timothy 1:15", "Romans 5:20", "Hebrews 7:25", "1 John 1:9", "Psalm 103:12"],
    raises: ["spirits-witness-or-my-own-feelings", "what-is-justification", "does-god-use-our-failures"],
    followsFrom: ["what-happens-when-i-sin", "spirits-witness-or-my-own-feelings"],
    related: ["what-happens-when-i-sin", "can-i-lose-my-salvation", "what-is-justification", "does-god-use-our-failures"],
    planned: ["What if I don't feel forgiven?"],
    order: 29,
  },

  // ------------------------------------------------------------------
  // TRAIL: Jesus Christ (continued: the hidden Christ)
  // ------------------------------------------------------------------
  {
    slug: "why-did-jesus-tell-people-not-to-reveal-who-he-was",
    question: "Why did Jesus often tell people not to reveal who He was?",
    category: "jesus-christ",
    summary:
      "Jesus set strict limits on how and when His identity was made known, at times telling the healed, the demons, and even His own disciples not to say who He was. This was not secrecy for its own sake. Jesus came to reveal Himself, but on His own timing and terms, keeping the confession of His name tied to the cross and resurrection, so that the Christ would not be reduced to a rumor of a wonder-worker before the work was finished.",
    passages: [
      {
        book: "Mark",
        chapter: 1,
        title: "A quiet beginning",
        lookFor: "Jesus tells the healed leper to say nothing to anybody and silences the demons who knew Him: the revelation is kept under His control.",
        focus: "21-45",
      },
      {
        book: "Mark",
        chapter: 3,
        title: "He sternly ordered them not to make Him known",
        lookFor: "The unclean spirits cry out that He is the Son of God, and Jesus strictly orders them not to make Him known.",
        focus: "7-12",
      },
      {
        book: "Mark",
        chapter: 8,
        title: "Do not tell anyone",
        lookFor: "After Peter's confession, Jesus commands the disciples to tell no one, and immediately begins to teach that the Son of Man must suffer.",
        focus: "27-38",
      },
      {
        book: "Mark",
        chapter: 9,
        title: "Until the Son of Man has risen",
        lookFor: "After the transfiguration, Jesus tells them to keep silent until after He rises from the dead: the full unveiling is tied to the cross.",
        focus: "1-10",
      },
      {
        book: "Matthew",
        chapter: 16,
        title: "Then He began to speak of His suffering",
        lookFor: "He tells them not to say He is the Christ, and from that same moment begins to teach plainly that He must suffer and die and rise.",
        focus: "13-28",
      },
    ],
    points: [
      {
        heading: "Jesus repeatedly silenced talk about who He was",
        body:
          "The pattern is unmistakable. Jesus did not allow the demons to speak 'because they knew him.' When the unclean spirits cried that He was the Son of God, 'he sternly warned them that they should not make him known.' He told the healed leper, 'See you say nothing to anybody.' And after Peter confessed Him as the Christ, Jesus 'commanded them that they should tell no one about him.'",
        verses: ["Mark 1:34", "Mark 3:12", "Mark 1:44", "Mark 8:30"],
      },
      {
        heading: "Even the demons were silenced",
        body:
          "Jesus would not accept testimony from the unclean spirits, however accurate their confession. They knew who He was and cried, 'You are the Christ, the Son of God!' but Jesus rebuked them and 'didn't allow them to speak.' Truth from the wrong source at the wrong time would have fed the very rumors He was not there to spread. Jesus alone, on His own terms, controls how His name is proclaimed.",
        verses: ["Mark 3:11", "Luke 4:41"],
      },
      {
        heading: "The full unveiling was tied to the cross",
        body:
          "Again and again, the silence is broken by the cross. At the pivotal moment of Peter's confession, Jesus turns from concealment to the cross: He began to teach that the Son of Man must suffer many things, be killed, and rise again. At the transfiguration He charges them to tell no one 'until after the Son of Man had risen from the dead.' Matthew notes that from the moment He told them not to say He was the Christ, He began to speak plainly of His death and resurrection. The revelation of who He is comes through what He came to do.",
        verses: ["Mark 8:31", "Mark 9:9", "Matthew 16:20", "Matthew 16:21"],
      },
      {
        heading: "So the Christ would not be made a rumor",
        body:
          "Left unchecked, word of miracles would have made Jesus a spectacle before the work was done, a wonder-worker the crowds wanted on their terms, not a Savior who must suffer and die. By guarding the confession of His name, Jesus was guarding the meaning of who He is: He would not let His identity be detached from the cross. The hiddenness was the holiness of His mission, keeping Him free to do what He came to do.”",
        verses: ["Matthew 12:16", "Isaiah 42:2-3", "John 6:15"],
      },
      {
        heading: "Yet the veiled King now calls us to open confession",
        body:
          "The season of secrecy served its purpose; it ended at the cross, the resurrection, and Pentecost. Now Jesus openly warns that whoever is ashamed of Him and His words in this generation, the Son of Man will be ashamed of when He comes in His Father's glory. He sends His disciples to make disciples of all nations and to let their light shine before others. The One who guarded His name until the work was finished now freely entrusts His name to us, and calls us to confess it boldly.",
        verses: ["Mark 8:38", "Matthew 28:19", "Matthew 5:16", "Luke 24:45-47"],
      },
    ],
    keyVerses: ["Mark 3:11-12", "Mark 9:9", "Mark 8:30", "Matthew 16:20-21", "Mark 8:38"],
    raises: ["who-is-jesus", "what-does-it-mean-that-jesus-is-the-son-of-god", "why-did-jesus-have-to-die"],
    followsFrom: ["why-did-jesus-call-himself-son-of-man", "what-does-it-mean-that-jesus-is-the-son-of-god"],
    related: ["why-did-jesus-call-himself-son-of-man", "who-is-jesus", "what-does-it-mean-that-jesus-is-the-son-of-god", "between-the-cross-and-the-resurrection"],
    planned: ["How much did the disciples understand while Jesus was with them?"],
    order: 26,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Church (continued: identity)
  // ------------------------------------------------------------------
  {
    slug: "what-is-the-church",
    question: "What is the church?",
    category: "church",
    summary:
      "The church is not a building or a program; it is the people of God, the whole company of those joined to Christ by faith. Scripture calls it the body of Christ, the bride of Christ, the household and temple of the living God, and the assembly Christ is building. It is the community that belongs to Him and grows into Him, lived out in local gatherings now and gathered in fullness when He returns.",
    passages: [
      {
        book: "Matthew",
        chapter: 16,
        title: "I will build my church",
        lookFor: "Jesus speaks of His assembly being built on the rock of His identity, and the gates of Hades not prevailing against it.",
        focus: "13-20",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "The marks of the first church",
        lookFor: "The first believers devoted to teaching, fellowship, the breaking of bread, and prayer, with the Lord adding to them daily those being saved.",
        focus: "42-47",
      },
      {
        book: "Ephesians",
        chapter: 1,
        title: "The body of Christ",
        lookFor: "Christ is head over all things for the church, which is His body, the fullness of Him who fills all in all.",
        focus: "15-23",
      },
      {
        book: "1 Timothy",
        chapter: 3,
        title: "The pillar and ground of the truth",
        lookFor: "The church is the household of God and the assembly of the living God, the pillar and ground of the truth.",
        focus: "14-16",
      },
      {
        book: "Ephesians",
        chapter: 5,
        title: "The bride of Christ",
        lookFor: "Christ loved the church and gave Himself up for her, to present her to Himself without spot or wrinkle.",
        focus: "25-32",
      },
    ],
    points: [
      {
        heading: "The church is a people, not a place",
        body:
          "Jesus called it His assembly, and the word in the Greek is the called-out gathering of people, not bricks and mortar. He promised, 'I will build my assembly, and the gates of Hades will not prevail against it.' In Acts, the living picture is people: as they believed and were saved, 'the Lord added to the assembly day by day those who were being saved.' The church is the company of the redeemed, wherever they gather.",
        verses: ["Matthew 16:18", "Acts 2:47", "Acts 2:42"],
      },
      {
        heading: "It is the body of Christ",
        body:
          "Paul's favorite image is a body. God put all things in subjection under Christ's feet and 'gave him to be head over all things for the assembly, which is his body, the fullness of him who fills all in all.' Colossians echoes it: Christ is 'the head of the body, the assembly.' And each believer is a member, 'the body of Christ, and members individually,' joined to the Head and to one another.",
        verses: ["Ephesians 1:22", "Ephesians 1:23", "Colossians 1:18", "1 Corinthians 12:27"],
      },
      {
        heading: "It is the bride of Christ",
        body:
          "The deepest picture is a wedding. Paul says Christ loved the assembly and gave Himself up for it, 'that he might present the assembly to himself gloriously, not having spot or wrinkle or any such thing,' but holy and without defect. The church is not an organization Christ runs from a distance; she is the bride He died for, is cleansing, and will one day present to Himself. The end of all history is 'the marriage of the Lamb' when the bride is made ready.",
        verses: ["Ephesians 5:25-27", "Revelation 19:7", "Ephesians 5:27"],
      },
      {
        heading: "It is the household and temple of the living God",
        body:
          "The church is God's family and God's dwelling. Paul calls it 'the assembly of the living God, the pillar and ground of the truth,' and says believers are built together, on the foundation of the apostles and prophets with Christ as the cornerstone, into 'a holy temple in the Lord,' 'a habitation of God in the Spirit.' Peter pictures believers as living stones being built into a spiritual house. The place where God dwells is His people.",
        verses: ["1 Timothy 3:15", "Ephesians 2:20", "Ephesians 2:21", "Ephesians 2:22", "1 Peter 2:5"],
      },
      {
        heading: "It is a present reality and a future hope",
        body:
          "The church is lived out today in local gatherings, devoted to word, fellowship, the Table, and prayer, as in Acts. And it is headed toward a consummation: the writer of Hebrews speaks of our having come to 'the general assembly and assembly of the firstborn who are enrolled in heaven,' and Revelation shows the holy city, New Jerusalem, 'prepared like a bride adorned for her husband,' where God dwells with His people forever. The church on earth is the beginning of that city, and its end is glorious.",
        verses: ["Acts 2:42", "Acts 2:46", "Hebrews 12:23", "Revelation 21:2", "Revelation 21:3"],
      },
    ],
    keyVerses: ["Matthew 16:18", "Ephesians 1:22-23", "1 Timothy 3:15", "Ephesians 5:25-27", "Acts 2:47"],
    raises: ["why-do-i-need-the-church", "what-is-a-healthy-church"],
    followsFrom: ["where-is-jesus-now", "why-do-i-need-the-church"],
    related: ["why-do-i-need-the-church", "what-is-a-healthy-church", "what-is-baptism", "what-is-the-lords-supper"],
    planned: ["What is the difference between the universal church and the local church?"],
    order: 43,
  },

  {
    slug: "how-do-i-share-my-faith-with-others",
    question: "How do I share my faith with others?",
    category: "our-walk",
    summary:
      "Sharing faith is less about a perfect script and more about a prepared life and a ready answer. Scripture calls us to be ready to give a reason for the hope within us, to walk in wisdom toward outsiders, to let our speech be gracious, to tell what the Lord has done for us, and to trust God with the results, who alone opens hearts and doors for the gospel.",
    passages: [
      {
        book: "1 Peter",
        chapter: 3,
        title: "Always be ready to give an answer",
        lookFor: "Sanctify the Lord in your hearts, always ready to answer anyone who asks about the hope in you, with humility and a good conscience.",
        focus: "8-17",
      },
      {
        book: "Colossians",
        chapter: 4,
        title: "Wisdom toward outsiders, gracious speech",
        lookFor: "Walk in wisdom toward those who are outside, redeeming the time, and let your speech be with grace, seasoned with salt.",
        focus: "2-6",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "Ambassadors of reconciliation",
        lookFor: "God reconciled us to Himself and committed to us the message of reconciliation; we are ambassadors for Christ.",
        focus: "14-21",
      },
      {
        book: "Acts",
        chapter: 1,
        title: "You will be my witnesses",
        lookFor: "You will receive power when the Holy Spirit comes upon you, and you will be my witnesses to the ends of the earth.",
        focus: "6-11",
      },
      {
        book: "John",
        chapter: 4,
        title: "Come, see a man who told me everything",
        lookFor: "The Samaritan woman tells her town about Jesus, and many believe because of her simple testimony.",
        focus: "1-42",
      },
    ],
    points: [
      {
        heading: "Be ready to give an answer",
        body:
          "Peter lays the groundwork: sanctify the Lord God in your hearts, 'and always be ready to give an answer to everyone who asks you a reason concerning the hope that is in you, with humility and fear.' Paul adds the tone: 'Let your speech always be with grace, seasoned with salt, that you may know how you ought to answer each one.' You do not need a script for every debate; you need a ready heart and graced words.",
        verses: ["1 Peter 3:15", "Colossians 4:6"],
      },
      {
        heading: "Back the words with a life",
        body:
          "The message is carried by the messenger. Peter says to give the answer 'with humility,' keeping a good conscience, 'that, while you are spoken against as evildoers, they may be disappointed who curse your good way of life in Christ.' Paul says to walk in wisdom toward outsiders, redeeming the time. A life changed by the gospel makes the gospel believable; the fruit of the Spirit is the background music of the witness.",
        verses: ["1 Peter 3:15", "1 Peter 3:16", "Colossians 4:5"],
      },
      {
        heading: "Tell what the Lord has done for you",
        body:
          "Jesus sent the healed man home with a simple assignment: 'Go to your house, to your friends, and tell them what great things the Lord has done for you, and how he had mercy on you.' And the Samaritan woman needed no theology degree: she told her town, and John records that 'many of the Samaritans believed in him because of the word of the woman.' Your story of encounter with Jesus is a legitimate and powerful part of your witness.",
        verses: ["Mark 5:19", "John 4:39", "Acts 4:20"],
      },
      {
        heading: "You are carrying God's own message",
        body:
          "The gospel is not your opinion; it is a message entrusted to you. Paul writes that God reconciled us to Himself through Christ 'and gave to us the ministry of reconciliation,' and 'we are therefore ambassadors on behalf of Christ, as though God were entreating by us: we beg you on behalf of Christ, be reconciled to God.' He also asks how people will believe without hearing, and how they will hear without a preacher, and calls the feet of those who bring the good news beautiful. When you share, God speaks through you.",
        verses: ["2 Corinthians 5:18", "2 Corinthians 5:19", "2 Corinthians 5:20", "Romans 10:14", "Romans 10:15"],
      },
      {
        heading: "Trust God with the results",
        body:
          "The outcome never rests on your eloquence. Jesus promised the Holy Spirit's power and the role of witness to the ends of the earth, and the apostles, forbidden to speak, said they could not help telling what they had seen and heard. Paul urged prayer for open doors: 'praying together for us also, that God may open to us a door for the word.' You plant and water, and God gives the growth. Share faithfully, pray boldly, and leave the harvest to Him.",
        verses: ["Acts 1:8", "Acts 4:20", "Colossians 4:2", "Colossians 4:3", "1 Corinthians 3:6"],
      },
    ],
    keyVerses: ["1 Peter 3:15", "Colossians 4:6", "2 Corinthians 5:20", "Romans 10:14-15", "Acts 1:8"],
    raises: ["what-is-the-gospel", "how-can-i-be-saved", "does-god-hear-my-prayers"],
    followsFrom: ["what-should-i-do-now-that-im-saved", "what-is-the-gospel"],
    related: ["what-is-the-gospel", "what-should-i-do-now-that-im-saved", "is-it-okay-to-doubt", "why-do-i-need-the-church"],
    planned: ["How do I respond when someone rejects the gospel?"],
    order: 30,
  },

  {
    slug: "what-is-the-difference-between-testing-and-temptation",
    question: "What is the difference between testing and temptation?",
    category: "our-walk",
    summary:
      "Scripture uses related but distinct words: testing is what God allows to prove and strengthen us, while temptation is the enticement to sin, which never comes from God. James makes the difference explicit: God tempts no one. The same difficulty can be, by grace, a test that builds endurance, or, if yielded to, a temptation that becomes sin. We can face trials with joy and resist temptation by relying on God's faithfulness and His way of escape.",
    passages: [
      { book: "James", chapter: 1, title: "Trials and temptation", lookFor: "James separates the two: count it all joy in trials, and never blame God for temptation, for He tempts no one.", focus: "1-18" },
      { book: "Genesis", chapter: 22, title: "God tested Abraham", lookFor: "The clearest old testament test: God tests Abraham by asking him to offer Isaac, and Abraham's faith is proved.", focus: "1-19" },
      { book: "Deuteronomy", chapter: 8, title: "Testing in the wilderness", lookFor: "God led Israel forty years to humble and test them, to know what was in their hearts.", focus: "1-10" },
      { book: "1 Peter", chapter: 1, title: "Trials prove your faith", lookFor: "The testing of your faith, more precious than gold, is meant to praise and honor Christ.", focus: "3-9" },
      { book: "1 Corinthians", chapter: 10, title: "The way of escape", lookFor: "Temptation is common and God is faithful: He will not allow beyond what you can bear, and provides the way out.", focus: "1-13" },
    ],
    points: [
      {
        heading: "Testings build endurance",
        body:
          "James sets the frame for trials: 'Count it all joy, my brothers, when you fall into various temptations, knowing that the testing of your faith produces endurance.' The word here is not enticement to sin but a proving. Peter says trials come 'that the proof of your faith... may be found to result in praise, glory, and honor at the revelation of Jesus Christ.' God allows trials so that our faith, tested, would be shown real and become strong.",
        verses: ["James 1:2", "James 1:3", "1 Peter 1:6", "1 Peter 1:7"],
      },
      {
        heading: "Temptation entices toward sin",
        body:
          "Temptation has the opposite aim. James describes it from the inside: 'each one is tempted, when he is drawn away by his own lust, and enticed. Then the lust, when it has conceived, bears sin; and the sin, when it is full grown, produces death.' Where the test is meant to prove us toward good, temptation is the bait toward evil, and its end, left unmet, is death.",
        verses: ["James 1:14", "James 1:15"],
      },
      {
        heading: "God never tempts, but He does test",
        body:
          "James draws the hard line: 'Let no man say when he is tempted, I am tempted by God, for God can't be tempted by evil, and he himself tempts no one.' Yet Scripture is equally clear that God tests: 'God tested Abraham,' and Moses recalled how God led Israel through the wilderness 'that he might humble you, to prove you, to know what was in your heart.' The test comes from God's hand for our good; temptation rises from our own desires and the enemy who feeds them.",
        verses: ["James 1:13", "Genesis 22:1", "Deuteronomy 8:2", "Hebrews 11:17"],
      },
      {
        heading: "The same moment can be either",
        body:
          "A hardship is not automatically one or the other; it becomes what we do with it. Peter urges the fiery trial not to be treated as strange, 'to test you' and show faith real. Paul warns that 'no temptation has taken you except what is common to man,' and promises God will not allow beyond what you can bear and will make the way of escape. The enemy turns what God means as a test into an occasion of temptation; God turns even the temptation into a place where His faithfulness is seen.",
        verses: ["1 Peter 4:12", "1 Corinthians 10:13", "1 Peter 1:7"],
      },
      {
        heading: "So we meet trials with joy and resist temptation",
        body:
          "Because a trial is a testing that builds endurance, we can 'count it all joy' and ask for the wisdom to pass through it. Because temptation is enticement to sin, we resist the devil, draw near to God, and trust the way of escape God provides. Abraham, when he was tested, trusted that God could raise even the dead. The trial and the temptation may touch the same moment, but the responses differ: joy and perseverance in the testing, resistance and dependence in the temptation.",
        verses: ["James 1:2", "James 1:5", "James 4:7", "1 Corinthians 10:13", "Hebrews 11:19"],
      },
    ],
    keyVerses: ["James 1:2-3", "James 1:13", "James 1:14-15", "Genesis 22:1", "1 Corinthians 10:13"],
    raises: ["where-does-temptation-come-from", "how-do-i-fight-sin", "why-does-god-allow-suffering", "how-do-trials-make-us-more-like-christ"],
    followsFrom: ["how-do-i-fight-sin", "where-does-temptation-come-from"],
    related: ["how-do-i-fight-sin", "where-does-temptation-come-from", "why-does-god-allow-suffering", "is-it-okay-to-doubt"],
    planned: [],
    order: 31,
  },

  {
    slug: "what-does-it-mean-that-god-is-love",
    question: "What does it mean that God is love?",
    category: "god-the-father",
    summary: "God is love is not a sentimental claim; it is a statement about who God is in Himself. Before anything was created, God was love, for love exists eternally in the relationship of Father, Son, and Holy Spirit. And God's love is shown in action: He loved us and sent His Son as the atoning sacrifice for our sins, while we were still sinners and enemies. Because God is love, His love is holy, self-giving, steadfast, and made known to us in Christ.",
    passages: [{ book: "1 John", chapter: 4, title: "God is love", lookFor: "He who does not love does not know God, for God is love; and His love is shown in sending His Son as the atoning sacrifice.", focus: "7-21" }, { book: "John", chapter: 3, title: "God so loved the world", lookFor: "God gave His one and only Son, that whoever believes in Him should not perish but have eternal life.", focus: "16-21" }, { book: "Romans", chapter: 5, title: "God showed His love while we were sinners", lookFor: "Christ died for the ungodly; while we were still sinners and enemies, we were reconciled by His death.", focus: "6-11" }, { book: "John", chapter: 15, title: "Abide in my love", lookFor: "As the Father has loved me, I have also loved you; abide in my love, and love one another as I have loved you.", focus: "9-17" }, { book: "Jeremiah", chapter: 31, title: "An everlasting love", lookFor: "I have loved you with an everlasting love; therefore with loving kindness I have drawn you.", focus: "1-3" }],
    points: [{ heading: "God is love in Himself", body: "John states it twice as a fact of God's own being: God is love. This is not first about how God treats us; it is who He is. Before creation there was love, because the Father loves the Son, as Jesus prayed, 'for you loved me before the foundation of the world.' The triune God has always been a God of love, in the eternal fellowship of Father, Son, and Holy Spirit. Love is not something God fell into when we appeared; it is His nature.", verses: ["1 John 4:8", "1 John 4:16", "John 17:24"] }, { heading: "His love is shown in action", body: "John defines God's love by what it did: 'In this is love, not that we loved God, but that he loved us, and sent his Son as the atoning sacrifice for our sins.' And 'God so loved the world, that he gave his one and only Son.' Paul says it plainly: 'God commends his own love toward us, in that while we were yet sinners, Christ died for us.' God's love is not an abstraction; it gave, it sent, it sacrificed.", verses: ["1 John 4:10", "John 3:16", "Romans 5:8"] }, { heading: "It reaches the unlovely and the enemy", body: "The measure of God's love is not how lovable we are but how lost we were. Paul presses the point: 'while we were yet sinners, Christ died for us,' and 'while we were enemies, we were reconciled to God through the death of his Son.' John says plainly, 'not that we loved God, but that he loved us.' God's love did not wait for us to be good; it came to us in our sin and our enmity, and that is the gospel.", verses: ["Romans 5:8", "Romans 5:10", "1 John 4:10"] }, { heading: "It is holy, not sentimental", body: "Because God is love, and because He is holy, His love never makes light of sin. The very verse that says God is love speaks of His Son 'as the atoning sacrifice for our sins.' And the love of God shows itself in us by obedience: 'this is the love of God, that we keep his commandments,' and 'he who doesn't love his brother whom he has seen, how can he love God whom he has not seen?' God's love is a purifying, commanding love, not an indulgence.", verses: ["1 John 4:10", "1 John 5:3", "1 John 4:20"] }, { heading: "It is steadfast and never ends", body: "God's love is not fickle. Through Jeremiah He declares, 'I have loved you with an everlasting love: therefore with loving kindness have I drawn you.' Lamentations sings that His steadfast love never ceases and His mercies are new every morning. And Paul's great conclusion is that neither death nor life nor anything in all creation 'will be able to separate us from the love of God, which is in Christ Jesus our Lord.' The love that is God's very nature is forever.", verses: ["Jeremiah 31:3", "Lamentations 3:22", "Lamentations 3:23", "Romans 8:38-39"] }],
    keyVerses: ["1 John 4:8", "1 John 4:10", "John 3:16", "Romans 5:8", "Jeremiah 31:3"],
    raises: ["still-my-father-when-i-fail", "who-is-the-father", "does-god-use-our-failures", "how-do-i-experience-the-love-of-god-day-to-day"],
    followsFrom: ["who-is-the-father", "what-is-the-trinity"],
    related: ["who-is-the-father", "still-my-father-when-i-fail", "what-is-the-trinity", "can-gods-grace-really-cover-my-worst-sins"],
    planned: [],
    order: 22,
  },

  {
    slug: "what-is-sanctification-and-how-does-it-happen",
    question: "What is sanctification, and how does it happen?",
    category: "our-walk",
    summary:
      "Sanctification is the lifelong work of the Holy Spirit by which God makes us progressively holy, conforming us to the likeness of Christ. It is rooted in our union with Christ, who became to us sanctification; it is worked in us by the Spirit through the Word; and it calls for our active participation. By grace, God sets us apart and is at work changing us from one degree of glory to another, so that our lives increasingly reflect our holy calling.",
    passages: [
      { book: "1 Thessalonians", chapter: 4, title: "This is the will of God: your sanctification", lookFor: "God's will is our holiness, and the path is spelled out in how we live, especially in purity.", focus: "1-8" },
      { book: "1 Thessalonians", chapter: 5, title: "Sanctify you completely", lookFor: "The prayer that the God of peace would sanctify us entirely, spirit, soul, and body, blameless.", focus: "16-24" },
      { book: "2 Corinthians", chapter: 3, title: "Transformed into the same image", lookFor: "With unveiled face we behold the glory of the Lord and are transformed into the same image, from glory to glory, by the Spirit.", focus: "12-18" },
      { book: "1 Peter", chapter: 1, title: "You shall be holy, for I am holy", lookFor: "As He who called you is holy, be holy in all your behavior.", focus: "13-16" },
      { book: "John", chapter: 17, title: "Sanctify them in your truth", lookFor: "Jesus prays for His people to be sanctified and set apart by the truth of His word.", focus: "14-19" },
    ],
    points: [
      {
        heading: "Sanctification is God's will and His setting-apart",
        body:
          "Paul does not present holiness as an optional extra: 'this is the will of God: your sanctification.' And he prays that 'the God of peace himself sanctify you completely,' that your whole spirit, soul, and body be kept blameless. Sanctification begins as God's own purpose and action: He sets His people apart as His own and intends to make them holy, a work He does rather than a project we volunteer for.",
        verses: ["1 Thessalonians 4:3", "1 Thessalonians 5:23"],
      },
      {
        heading: "It flows from our union with Christ",
        body:
          "Our holiness is not something we import into our relationship with Christ; it grows out of it. Paul says Christ 'was made to us wisdom from God, and righteousness and sanctification, and redemption,' and Hebrews adds that both He who sanctifies and those who are sanctified are all of one. Because we belong to the holy Christ, we are being made holy; sanctification is the working out of our union with Him.",
        verses: ["1 Corinthians 1:30", "Hebrews 2:11"],
      },
      {
        heading: "It is the Spirit's work of transformation",
        body:
          "Sanctification is the Spirit's labor in us. Paul writes that 'we all, with unveiled face seeing the glory of the Lord as in a mirror, are transformed into the same image from glory to glory, even as from the Lord, the Spirit.' God's purpose is that we be 'conformed to the image of his Son.' Little by little, degree by degree, the Spirit is reshaping us into the likeness of Christ.",
        verses: ["2 Corinthians 3:18", "Romans 8:29"],
      },
      {
        heading: "It happens through the Word and prayer",
        body:
          "Jesus names the instrument: 'Sanctify them in your truth. Your word is truth.' Paul pictures Christ cleansing His own by 'the washing of water with the word.' And the calling is urgent and concrete: 'as he who called you is holy, you yourselves also be holy in all of your behavior; because it is written, you shall be holy, for I am holy.' The Word is how the Spirit works holiness into daily life.",
        verses: ["John 17:17", "Ephesians 5:26", "1 Peter 1:15", "1 Peter 1:16"],
      },
      {
        heading: "And it calls for our participation",
        body:
          "Sanctification is neither passive nor self-powered. Paul joins the two together: 'work out your own salvation with fear and trembling, for it is God who works in you both to will and to work, for his good pleasure.' We are to follow after 'the sanctification without which no man will see the Lord.' The growth is God's work in us, and our calling is to respond: to pursue it, to live it out, and to keep walking in the holiness He gives.",
        verses: ["Philippians 2:12", "Philippians 2:13", "Hebrews 12:14"],
      },
    ],
    keyVerses: ["1 Thessalonians 4:3", "1 Corinthians 1:30", "2 Corinthians 3:18", "1 Peter 1:15-16", "Philippians 2:12-13"],
    raises: ["what-the-new-life-looks-like", "what-is-justification", "how-do-i-fight-sin"],
    followsFrom: ["faith-or-works", "what-is-justification"],
    related: ["faith-or-works", "what-is-justification", "what-the-new-life-looks-like", "how-do-i-fight-sin"],
    planned: ["What does holiness look like in daily life?"],
    order: 32,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Gospel (continued: kingdom)
  // ------------------------------------------------------------------
  {
    slug: "what-is-the-kingdom-of-god",
    question: "What is the kingdom of God?",
    category: "gospel",
    summary:
      "The kingdom of God is God's reign: His rule and salvation arriving in Jesus Christ. Jesus announced it as breaking into the world, called people to enter it through repentance and faith, and taught its surprising way of growth, like a seed and leaven, belonging to the poor in spirit. The kingdom is both already present in Christ and not yet complete, and it is the good news at the center of the gospel.",
    passages: [
      {
        book: "Mark",
        chapter: 1,
        title: "The kingdom of God is at hand",
        lookFor: "Jesus begins His preaching with the announcement of the kingdom and the call to repent and believe.",
        focus: "14-15",
      },
      {
        book: "Matthew",
        chapter: 5,
        title: "Blessed are the poor in spirit, for theirs is the kingdom",
        lookFor: "The Beatitudes name who belongs to the kingdom: the humble, the merciful, the pure, the peacemakers.",
        focus: "3-12",
      },
      {
        book: "Matthew",
        chapter: 13,
        title: "The parables of the kingdom",
        lookFor: "The kingdom grows like seed and leaven, and is worth everything, like a hidden treasure and a priceless pearl.",
        focus: "1-46",
      },
      {
        book: "Luke",
        chapter: 17,
        title: "The kingdom is among you",
        lookFor: "Asked when the kingdom would come, Jesus points to His own presence: it is not observed with signs, it is among you.",
        focus: "20-21",
      },
      {
        book: "Romans",
        chapter: 14,
        title: "Righteousness, peace, and joy in the Spirit",
        lookFor: "The kingdom is not food and drink but the way of Christ's rule: righteousness, peace, and joy in the Holy Spirit.",
        focus: "17-19",
      },
    ],
    points: [
      {
        heading: "The kingdom is God's reign breaking into the world",
        body:
          "Jesus opened His ministry with the announcement: 'The time is fulfilled, and the Kingdom of God is at hand! Repent, and believe in the Good News.' The kingdom is not primarily a place; it is God reigning, God's rule arriving in Jesus. When He casts out demons by the finger of God, He says the kingdom of God has come upon men. In Jesus, the reign of God was breaking into history.",
        verses: ["Mark 1:15", "Luke 11:20", "Luke 17:21"],
      },
      {
        heading: "It is entered through repentance and faith",
        body:
          "The call to the kingdom is a call to turn: 'The time is fulfilled, and the Kingdom of God is at hand! Repent, and believe in the Good News.' Jesus taught that blessing belongs to 'the poor in spirit, for theirs is the Kingdom of Heaven.' The kingdom is not stormed by the self-sufficient but received by the humble, who repent of self and trust the King.",
        verses: ["Mark 1:15", "Matthew 4:17", "Matthew 5:3"],
      },
      {
        heading: "It grows in hidden, surprising ways",
        body:
          "Jesus kept comparing the kingdom to things that start small and become great: a mustard seed that grows into a tree, leaven that works through the whole loaf, seed that sprouts while the farmer sleeps. It is 'like a treasure hidden in the field... in his joy, he goes and sells all that he has, and buys that field.' The kingdom comes quietly, and it is worth everything.",
        verses: ["Matthew 13:31", "Matthew 13:33", "Mark 4:26", "Matthew 13:44", "Matthew 13:45"],
      },
      {
        heading: "It is already here, and not yet complete",
        body:
          "The kingdom has come in Christ and is still to come in fullness. Jesus told the disciples the kingdom of God was 'within you,' present in their midst, and He taught them to pray, 'your Kingdom come.' At the end, 'the end comes, when he will deliver up the Kingdom to God... when he will have abolished all rule and all authority and power.' We live between the kingdom's arrival and its completion, receiving it by faith now and awaiting it in glory.",
        verses: ["Luke 17:21", "Matthew 6:10", "1 Corinthians 15:24", "Luke 12:32"],
      },
      {
        heading: "It is the good news that reshapes a life",
        body:
          "The kingdom is not only a future hope; it is a present way of life under Christ's rule. Paul says 'the Kingdom of God is not eating and drinking, but righteousness, peace, and joy in the Holy Spirit.' Jesus calls us to seek first His kingdom and His righteousness, for it is the Father's good pleasure to give it to us. To enter the kingdom is to come under the rule of a gracious King, and to live in the world as citizens of His reign.",
        verses: ["Romans 14:17", "Matthew 6:33", "Luke 12:32"],
      },
    ],
    keyVerses: ["Mark 1:15", "Matthew 5:3", "Romans 14:17", "Matthew 6:33", "Matthew 13:44"],
    raises: ["how-can-i-be-saved", "what-does-it-mean-to-be-born-again", "signs-before-jesus-returns"],
    followsFrom: ["what-is-the-gospel", "who-is-jesus"],
    related: ["what-is-the-gospel", "who-is-jesus", "signs-before-jesus-returns", "what-will-we-do-in-the-new-creation"],
    planned: ["What does it mean to pray 'your kingdom come'?"],
    order: 31,
  },

  {
    slug: "what-is-the-difference-between-grace-and-mercy",
    question: "What is the difference between grace and mercy?",
    category: "gospel",
    summary:
      "Mercy and grace are God's twin compassion, and they are closely related. Mercy withholds what we deserve, the punishment our sin has earned; grace gives what we do not deserve, forgiveness, salvation, and every blessing. Both are rooted in God's love and meet at the cross, where the punishment for sin was carried by Christ and righteousness is freely given. Neither is something we earn, and both change how we live.",
    passages: [
      {
        book: "Ephesians",
        chapter: 2,
        title: "Rich in mercy, saved by grace",
        lookFor: "God, being rich in mercy and full of love, made us alive together with Christ; by grace you have been saved.",
        focus: "1-10",
      },
      {
        book: "Psalm",
        chapter: 103,
        title: "Mercy and forgiveness",
        lookFor: "The LORD is merciful and gracious, and does not deal with us according to our sins or repay us for our iniquities.",
        focus: "8-13",
      },
      {
        book: "Romans",
        chapter: 9,
        title: "I will have mercy on whom I have mercy",
        lookFor: "God's mercy is His own to give, rooted in His character, not in anything in us.",
        focus: "14-26",
      },
      {
        book: "Romans",
        chapter: 6,
        title: "The free gift of God",
        lookFor: "The wages of sin is death, but the free gift of God is eternal life in Christ Jesus.",
        focus: "20-23",
      },
      {
        book: "Titus",
        chapter: 3,
        title: "Saved according to His mercy",
        lookFor: "He saved us, not by works of righteousness we had done, but according to His mercy.",
        focus: "4-7",
      },
    ],
    points: [
      {
        heading: "Mercy withholds what we deserve",
        body:
          "Mercy is God's compassion that does not give us what our sin deserves. The psalmist celebrates it: God 'has not dealt with us according to our sins, nor repaid us for our iniquities,' though He is merciful and gracious. Lamentations sings that His loving kindness does not cease and His compassions never fail, but are new every morning. Mercy is the hand of God not falling on us as it might, judgment withheld because of love.",
        verses: ["Psalm 103:10", "Psalm 103:8", "Lamentations 3:22", "Lamentations 3:23"],
      },
      {
        heading: "Grace gives what we do not deserve",
        body:
          "If mercy holds back the punishment we earned, grace goes further: it gives us the blessing we could never earn. Paul writes, 'by grace you have been saved through faith, and that not of yourselves; it is the gift of God,' not of works. The same chapter contrasts the wages of sin, death, with 'the free gift of God… eternal life in Christ Jesus our Lord.' Grace is undeserved favor, lavished on sinners who merit nothing.",
        verses: ["Ephesians 2:8", "Ephesians 2:9", "Romans 6:23"],
      },
      {
        heading: "They meet together in salvation",
        body:
          "Mercy and grace work as one in our salvation. Paul writes of God, 'being rich in mercy, for his great love with which he loved us... made us alive together with Christ (by grace you have been saved).' Titus joins them: he saved us, not by works of righteousness that we ourselves had done, but according to His mercy, through the washing of regeneration and renewal by the Holy Spirit Mercy spares us; grace raises us to new life in Christ. Both are free, both are loving, and both are His.",
        verses: ["Ephesians 2:4", "Ephesians 2:5", "Titus 3:5"],
      },
      {
        heading: "Both are given on God's own terms",
        body:
          "Neither mercy nor grace can be claimed as a right; they are given by God's free determination. Paul cites God's word to Moses: 'I will have mercy on whom I have mercy, and I will have compassion on whom I have compassion.' David, after his great sin, cast himself entirely on God: 'Have mercy on me, God, according to your loving kindness... blot out my transgressions.' We ask for mercy because we cannot demand it, and we receive grace because we cannot earn it.",
        verses: ["Romans 9:15", "Psalm 51:1"],
      },
      {
        heading: "And both are meant to shape our lives",
        body:
          "Those who have received mercy and grace are called to extend them. Jesus says, 'Therefore be merciful, even as your Father is also merciful.' Paul urges us to 'be kind to one another, tender hearted, forgiving each other, just as God also in Christ forgave you.' The mercy we did not deserve makes us slow to exact our pound of flesh from others, and the grace that has saved us makes us gracious. The forgiven become forgivers, and the remembered grace makes us kind.",
        verses: ["Luke 6:36", "Ephesians 4:32", "Colossians 3:12", "Colossians 3:13"],
      },
    ],
    keyVerses: ["Ephesians 2:8-9", "Psalm 103:10", "Romans 6:23", "Titus 3:5", "Lamentations 3:22-23"],
    raises: ["what-is-justification", "can-gods-grace-really-cover-my-worst-sins", "does-grace-mean-live-how-i-want"],
    followsFrom: ["what-is-grace", "what-is-the-gospel"],
    related: ["what-is-grace", "what-is-justification", "does-grace-mean-live-how-i-want", "can-gods-grace-really-cover-my-worst-sins"],
    planned: ["How do God's mercy and justice work together?"],
    order: 32,
  },

  {
    slug: "how-are-justification-and-sanctification-related",
    question: "How are justification and sanctification related?",
    category: "gospel",
    summary:
      "Justification and sanctification are two distinct works of God's grace that belong inseparably together. Justification is God declaring us righteous through Christ, a finished verdict received once by faith. Sanctification is God making us holy, a lifelong work of the Spirit. Both come from union with Christ and both are gifts of grace, and they are to be distinguished without being separated: we are justified in order to be sanctified, and sanctification is the fruit of justification.",
    passages: [
      {
        book: "Romans",
        chapter: 5,
        title: "Justified by faith, at peace with God",
        lookFor: "Through the one act of Christ's obedience, many are made righteous; through Him we have peace with God.",
        focus: "1-2",
      },
      {
        book: "Romans",
        chapter: 6,
        title: "Free from condemnation, now servants of righteousness",
        lookFor: "Because we are united to Christ, we are not to continue in sin but are to present ourselves as servants of righteousness.",
        focus: "1-19",
      },
      {
        book: "1 Corinthians",
        chapter: 6,
        title: "Washed, sanctified, justified",
        lookFor: "Paul names what God did for believers: they were washed, sanctified, and justified in the name of Jesus Christ.",
        focus: "9-11",
      },
      {
        book: "1 Corinthians",
        chapter: 1,
        title: "Christ is our righteousness and sanctification",
        lookFor: "Christ 'was made to us wisdom from God, and righteousness and sanctification, and redemption': both flow from Him.",
        focus: "26-31",
      },
      {
        book: "Hebrews",
        chapter: 10,
        title: "Perfected, and being sanctified",
        lookFor: "By one offering He has perfected forever those who are being sanctified: the finished work and the ongoing work held together.",
        focus: "10-14",
      },
    ],
    points: [
      {
        heading: "Justification is a verdict; sanctification is a work in us",
        body:
          "Justification is God's declaration: through Christ's one act of righteousness, many are made righteous, and being justified by faith, we have peace with God. It is a verdict pronounced over us, once received by faith and complete in Christ. Sanctification is different in kind: it is the Spirit's gradual work within us, transforming us from glory to glory, a growth that is begun and carried on, not a single finished moment.",
        verses: ["Romans 5:18", "Romans 5:19", "Romans 5:1", "2 Corinthians 3:18", "Philippians 1:6"],
      },
      {
        heading: "Both flow from union with Christ",
        body:
          "Neither is a separate achievement; both are ours by being in Christ. Paul says Christ 'was made to us wisdom from God, and righteousness and sanctification, and redemption.' And for the Corinthians who had been forgiven of much, he says, 'you were washed. But you were sanctified. But you were justified in the name of the Lord Jesus, and in the Spirit of our God.' Justification and sanctification spring from the same fountain: our union with Jesus.",
        verses: ["1 Corinthians 1:30", "1 Corinthians 6:11", "Romans 6:3", "Romans 6:4"],
      },
      {
        heading: "They must be distinguished, not separated",
        body:
          "The two belong to different kinds of grace, and confusing them damages both. Justification is the once-for-all gift that gives us a standing before God; sanctification is the lifelong growth by which we become like Him. Paul connects them without blurring them: 'by one offering he has perfected forever those who are being sanctified.' Those who are perfected in Christ are being sanctified in Him, and those who are being sanctified rest on the perfection Christ has already secured.",
        verses: ["Hebrews 10:14", "Romans 5:1", "Romans 8:1"],
      },
      {
        heading: "Justification produces holiness, never license",
        body:
          "A right grasp of justification makes us holy, not careless. Paul asks the question everyone fears: 'What shall we say then? Shall we continue in sin, that grace may abound?' and answers flatly, by no means, because we who died to sin are united to Christ and no longer servants of sin. He urges us, freed from the law's condemnation, to present our members as servants of righteousness for sanctification. Grace received properly always bears the fruit of growing holiness.",
        verses: ["Romans 6:1", "Romans 6:2", "Romans 6:14", "Romans 6:19", "Titus 2:11-12"],
      },
      {
        heading: "Why it matters: we stand on one and walk in the other",
        body:
          "The distinction gives both security and growth. We do not earn our standing by our progress; we are justified by faith, at peace with God through Christ, with no condemnation for those in Him. And because that standing is secure, we are free to pursue holiness without fear: to grow in grace, to become like Him, knowing He who began a good work will complete it. Justification is the ground beneath our feet; sanctification is the path we walk, and both have been given to us by the same gracious Lord.",
        verses: ["Romans 5:1", "Romans 8:1", "Philippians 1:6", "2 Corinthians 5:21", "Romans 8:30"],
      },
    ],
    keyVerses: ["Romans 5:1", "1 Corinthians 6:11", "Hebrews 10:14", "1 Corinthians 1:30", "Romans 8:30"],
    raises: ["what-is-sanctification-and-how-does-it-happen", "what-is-justification", "faith-or-works"],
    followsFrom: ["what-is-justification", "what-is-grace"],
    related: ["what-is-justification", "what-is-sanctification-and-how-does-it-happen", "faith-or-works", "does-grace-mean-live-how-i-want"],
    planned: ["What does it mean to be a new creation in Christ?"],
    order: 33,
  },

  {
    slug: "what-does-it-mean-to-walk-by-faith-and-not-by-sight",
    question: "What does it mean to walk by faith and not by sight?",
    category: "gospel",
    summary:
      "To walk by faith and not by sight is to live our lives trusting God's word and promises rather than what we can currently see or feel. It is the normal posture of the whole Christian life, rooted in the assurance of things hoped for, lived out in daily trust and obedience, and held patiently because we will one day see what we now believe. Faith does not ignore reality; it interprets it by God's promises.",
    passages: [
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "We walk by faith, not by sight",
        lookFor: "Paul's frame for life: at home in the body, away from the Lord, we walk by faith, aiming to please Him.",
        focus: "1-10",
      },
      {
        book: "Hebrews",
        chapter: 11,
        title: "The faith of the ancients",
        lookFor: "Faith is the assurance of things hoped for, and the heroes of faith acted on the unseen, from Abraham to those who never saw the promise in full.",
        focus: "1-13",
      },
      {
        book: "Romans",
        chapter: 1,
        title: "The righteous shall live by faith",
        lookFor: "The gospel reveals a righteousness that is received, and the way of life that follows: faith.",
        focus: "16-17",
      },
      {
        book: "Galatians",
        chapter: 2,
        title: "The life I live, I live by faith",
        lookFor: "Paul's own walk: no longer I who live, but Christ in me; the life I live, I live by faith in the Son of God.",
        focus: "20-21",
      },
      {
        book: "John",
        chapter: 20,
        title: "Blessed are those who have not seen and have believed",
        lookFor: "Thomas needed to see; Jesus pronounces the blessing on those who believe without seeing.",
        focus: "24-31",
      },
    ],
    points: [
      {
        heading: "Walking by faith is God's call for the whole life",
        body:
          "Faith is not only how we begin the Christian life; it is how we live it. Paul says flatly, 'we walk by faith, not by sight.' The gospel reveals that 'the righteous shall live by faith,' the very words the prophet Habakkuk used and that the New Testament returns to again and again. From first to last, from the moment of salvation to the end of the road, faith is the way God's people relate to Him.",
        verses: ["2 Corinthians 5:7", "Romans 1:17", "Habakkuk 2:4", "Galatians 3:11"],
      },
      {
        heading: "Faith is assurance of things not seen",
        body:
          "The writer of Hebrews defines it: 'Now faith is assurance of things hoped for, proof of things not seen.' And he adds the urgency of it: 'without faith it is impossible to be well pleasing to him, for he who comes to God must believe that he exists, and that he is a rewarder of those who seek him.' Faith lays hold of what is real but unseen, and makes it the ground of how we live.",
        verses: ["Hebrews 11:1", "Hebrews 11:6"],
      },
      {
        heading: "Abraham walked without seeing the way",
        body:
          "The great example is Abraham. 'By faith, Abraham, when he was called, obeyed to go out to the place which he was to receive for an inheritance. He went out, not knowing where he went,' looking for a city whose builder and maker is God. When the promise seemed impossible, he did not waver in unbelief but was fully assured that God was able to do what He had promised. Walking by faith means obeying God even when we cannot see the road ahead.",
        verses: ["Hebrews 11:8", "Hebrews 11:10", "Romans 4:20", "Romans 4:21"],
      },
      {
        heading: "Faith lives by the Son of God",
        body:
          "The object of this walk is a Person. Paul describes it at its center: 'It is no longer I that live, but Christ living in me. That life which I now live in the flesh, I live by faith in the Son of God, who loved me, and gave himself up for me.' And Jesus pronounces blessed 'those who have not seen, and have believed.' Our faith is not confidence in an idea but trust in a Person who gave Himself for us, and whom we love though we have not seen Him.",
        verses: ["Galatians 2:20", "John 20:29", "1 Peter 1:8"],
      },
      {
        heading: "It means living for the unseen, in daily obedience",
        body:
          "Walking by faith looks like a daily choice to live for what is eternal rather than what is merely seen. Paul says we fix our eyes not on the seen but on the unseen, for the seen is temporary and the unseen eternal, and he makes his aim, whether at home or away, to please the Lord. And John says this is the victory that overcomes the world, our faith. When feelings and circumstances say otherwise, faith holds to God's promise and obeys Him.",
        verses: ["2 Corinthians 4:18", "2 Corinthians 5:9", "James 1:6", "1 John 5:4"],
      },
    ],
    keyVerses: ["2 Corinthians 5:7", "Hebrews 11:1", "Romans 1:17", "Galatians 2:20", "Hebrews 11:6"],
    raises: ["what-is-faith", "is-it-okay-to-doubt", "spirits-witness-or-my-own-feelings"],
    followsFrom: ["what-is-faith", "what-is-justification"],
    related: ["what-is-faith", "is-it-okay-to-doubt", "where-is-god-in-my-pain", "spirits-witness-or-my-own-feelings"],
    planned: ["What is the difference between faith and certainty?"],
    order: 34,
  },

  {
    slug: "how-do-i-know-my-repentance-is-genuine",
    question: "How do I know my repentance is genuine?",
    category: "gospel",
    summary:
      "Genuine repentance shows itself in fruit. Scripture distinguishes real repentance from mere regret: godly sorrow works repentance to salvation and brings no regret, while worldly sorrow works death. Real repentance is a turning from sin to God that changes direction and, over time, produces the evidence of a changed life. We can examine ourselves by the Word: has my heart turned, has my life changed, am I bearing the fruit of repentance?",
    passages: [
      {
        book: "2 Corinthians",
        chapter: 7,
        title: "Godly sorrow and worldly sorrow",
        lookFor: "Paul separates the two: godly sorrow works repentance to salvation, but worldly sorrow works death, and the Corinthians' sorrow produced earnest change.",
        focus: "8-11",
      },
      {
        book: "Matthew",
        chapter: 3,
        title: "Produce fruit worthy of repentance",
        lookFor: "John refuses to accept claimed repentance without evidence: it must bear fruit.",
        focus: "1-12",
      },
      {
        book: "Luke",
        chapter: 19,
        title: "Zacchaeus makes it right",
        lookFor: "The tax collector's repentance is shown in restitution, and Jesus says salvation came to his house.",
        focus: "1-10",
      },
      {
        book: "Psalm",
        chapter: 51,
        title: "A broken and contrite heart",
        lookFor: "After his fall, David pleads for a clean heart, and names the sacrifice God accepts: a broken and contrite heart.",
        focus: "1-17",
      },
      {
        book: "Acts",
        chapter: 26,
        title: "Repent, turn, and do works worthy",
        lookFor: "Paul's summary of his preaching: they should repent and turn to God, doing works worthy of repentance.",
        focus: "12-23",
      },
    ],
    points: [
      {
        heading: "Real repentance is godly sorrow, not mere regret",
        body:
          "Paul draws a line that helps us check our own hearts: 'godly sorrow works repentance to salvation, which brings no regret. But the sorrow of the world works death.' Regret is sorry for being caught or for the consequences; repentance is sorrow over the sin itself that turns us to God. Paul rejoiced that the Corinthians' sorry had been 'to repentance' in a godly way, and he could point to what it worked: 'what earnest care... what defense, indignation, fear, longing, zeal!' The proof of genuine sorrow was the change it worked.",
        verses: ["2 Corinthians 7:10", "2 Corinthians 7:9", "2 Corinthians 7:11"],
      },
      {
        heading: "It produces fruit",
        body:
          "John the Baptist met claimed repentance with a demand: 'Produce fruit worthy of repentance!' When the crowds asked what they should do, he pointed to concrete changes, giving to the needy and turning from greed. Genuine repentance is not a feeling that goes nowhere; it is a turning that changes what a person actually does, and the changed behavior is its evidence.",
        verses: ["Matthew 3:8", "Luke 3:11", "Acts 26:20"],
      },
      {
        heading: "It makes right what it can",
        body:
          "Where repentance can restore, it does. Zacchaeus, after meeting Jesus, declared, 'half of my goods I give to the poor. If I have wrongfully exacted anything of anyone, I restore four times as much,' and Jesus replied, 'Today, salvation has come to this house.' And James summons us to confess our offenses to one another and pray, that we may be healed. The man who had grown rich by cheating turned and set things right, and that visible turning, confessed and restored, was the sign that his heart had genuinely changed.",
        verses: ["Luke 19:8", "Luke 19:9", "James 5:16"],
      },
      {
        heading: "It humbles us, with a broken heart before God",
        body:
          "Real repentance does not defend itself; it casts itself on God. David, after his terrible fall, prayed, 'Create in me a clean heart, O God. Renew a right spirit within me,' and he named the thing God accepts: 'a broken and contrite heart, O God, you will not despise.' Jesus said the tax collector who cried, 'God, be merciful to me, a sinner!' went home justified, while the self-justifying man did not. The humble are the ones who truly repent.",
        verses: ["Psalm 51:10", "Psalm 51:17", "Luke 18:13", "Luke 18:14"],
      },
      {
        heading: "And it turns to God and keeps going",
        body:
          "Repentance is measured by its direction. Paul preached that people should 'repent and turn to God, doing works worthy of repentance,' and John wrote that if we confess our sins, God is faithful to forgive and cleanse. Repentance is not a single burst of feeling but a turning that continues: we own our sin honestly, we turn from it, we make it right where we can, and over time the fruit of a changed life confirms that it was real, because the one who turns to God keeps walking toward Him.",
        verses: ["Acts 26:20", "1 John 1:9", "2 Corinthians 7:11", "Matthew 3:8"],
      },
    ],
    keyVerses: ["2 Corinthians 7:10", "Matthew 3:8", "Psalm 51:17", "Luke 19:8", "Acts 26:20"],
    raises: ["what-is-repentance", "what-happens-when-i-sin", "how-do-i-fight-sin"],
    followsFrom: ["what-is-repentance", "what-is-the-gospel"],
    related: ["what-is-repentance", "what-is-the-gospel", "can-gods-grace-really-cover-my-worst-sins", "what-happens-when-i-sin"],
    planned: ["Can someone repent and still struggle with the same sin?"],
    order: 35,
  },

  // ------------------------------------------------------------------
  // TRAIL: Suffering & God's Will (continued: suffering well)
  // ------------------------------------------------------------------
  {
    slug: "what-does-it-look-like-to-suffer-well",
    question: "What does it look like to suffer well?",
    category: "suffering-will",
    summary:
      "Suffering well does not mean feeling no pain; it means suffering in a way that glorifies God. Scripture pictures it as entrusting ourselves to our faithful Creator, keeping our eyes on the eternal glory that suffering is working, rejoicing that we share Christ's own sufferings, and drawing near to God in our weakness. It is not a stoic endurance but a trust-filled, prayerful, hope-shaped way of facing pain.",
    passages: [
      {
        book: "1 Peter",
        chapter: 2,
        title: "Christ, the example of patient suffering",
        lookFor: "Christ suffered for us, leaving an example: when reviled he did not revile, but committed himself to the righteous Judge.",
        focus: "19-25",
      },
      {
        book: "1 Peter",
        chapter: 4,
        title: "Do not be surprised at the fiery trial",
        lookFor: "Rejoice insofar as you share Christ's sufferings, and entrust your soul to the faithful Creator who does good.",
        focus: "12-19",
      },
      {
        book: "2 Corinthians",
        chapter: 4,
        title: "An eternal weight of glory",
        lookFor: "Our light, momentary affliction works for us an eternal weight of glory, as we look at the unseen, not the seen.",
        focus: "16-18",
      },
      {
        book: "Romans",
        chapter: 5,
        title: "Suffering produces endurance, character, and hope",
        lookFor: "We rejoice in our sufferings, because God uses them to grow an unshakable hope in Christ.",
        focus: "1-5",
      },
      {
        book: "1 Peter",
        chapter: 5,
        title: "Cast your worries on Him",
        lookFor: "The God of all grace will restore, establish, and strengthen you after you have suffered a little while.",
        focus: "6-11",
      },
    ],
    points: [
      {
        heading: "Suffering well follows Christ's example",
        body:
          "Peter roots suffering well in Jesus: 'Christ also suffered for us, leaving you an example, that you should follow his steps.' When He was reviled, He did not revile; when He suffered, He did not threaten, 'but committed himself to him who judges righteously.' It is a gracious thing, mindful of God, to endure unjust suffering patiently. Suffering well looks like Jesus: unretaliating, patient, and entrusting the outcome to God.",
        verses: ["1 Peter 2:21", "1 Peter 2:23", "1 Peter 2:19"],
      },
      {
        heading: "Do not be surprised; rejoice in sharing Christ's sufferings",
        body:
          "Suffering for Christ is not an accident but a sharing in Him. Peter urges, 'don't be astonished at the fiery trial which has come upon you, to test you, as though a strange thing happened to you. But because you are partakers of Christ's sufferings, rejoice; that at the revelation of his glory you also may rejoice with exceeding joy.' And 'if you are insulted for the name of Christ, you are blessed.' Suffering well finds in pain a fellowship with Jesus and a promise of joy.",
        verses: ["1 Peter 4:12", "1 Peter 4:13", "1 Peter 4:14"],
      },
      {
        heading: "Entrust yourself to the faithful Creator",
        body:
          "The end of the posture is surrender to God. Peter says that those who suffer according to God's will 'entrust their souls to him, as to a faithful Creator,' and cast all their worries on Him because He cares for them. The God of all grace, after you have suffered a little while, will himself restore, establish, strengthen, and settle you. Suffering well holds its pain in the hands of a faithful, caring God, and waits for His strengthening.",
        verses: ["1 Peter 4:19", "1 Peter 5:7", "1 Peter 5:10"],
      },
      {
        heading: "Keep your eyes on the glory it is working",
        body:
          "Paul gives suffering an eternal horizon: our outer man is wasting away, but our inner man is renewed day by day, for 'our light affliction, which is for the moment, works for us more and more exceedingly an eternal weight of glory,' as we look not at the seen but at the unseen. He even rejoices in sufferings because they produce endurance, character, and hope that will not disappoint. Suffering well looks through the pain to the glory God is working in us.",
        verses: ["2 Corinthians 4:16", "2 Corinthians 4:17", "2 Corinthians 4:18", "Romans 5:3", "Romans 5:4"],
      },
      {
        heading: "And it is marked by patience and prayer",
        body:
          "Suffering well is a sustained posture, not a single heroic moment. We are called to rejoice in hope, to be patient in tribulation, and to continue steadfastly in prayer. James says to count it all joy when we fall into trials, letting endurance have its perfect work, and to ask God for wisdom. Grace is sufficient in our weakness, and His strength is made perfect there. Suffering well is done one day at a time, in patience, in prayer, and in the daily strength He gives.",
        verses: ["Romans 12:12", "James 1:2", "James 1:3", "James 1:5", "2 Corinthians 12:9"],
      },
    ],
    keyVerses: ["1 Peter 2:23", "1 Peter 4:12-13", "2 Corinthians 4:17-18", "1 Peter 5:7", "1 Peter 5:10"],
    raises: ["where-is-god-in-my-pain", "does-god-use-our-failures", "why-does-god-seem-silent", "what-does-god-promise-those-who-suffer-for-him"],
    followsFrom: ["why-does-god-allow-suffering", "what-does-it-mean-that-the-world-hates-jesus"],
    related: ["why-does-god-allow-suffering", "where-is-god-in-my-pain", "does-god-use-our-failures", "is-it-okay-to-doubt"],
    planned: [],
    order: 34,
  },

  {
    slug: "does-god-change-his-mind",
    question: "Does God change His mind?",
    category: "suffering-will",
    summary:
      "Scripture says both, without contradiction: God is unchanging in His character and purposes, 'I, Yahweh, don't change,' and yet He responds to people, relenting from threatened judgment when they repent and turning in mercy. The Bible uses the language of God 'repenting' to describe His faithful, gracious response to human change, while insisting that His nature, His faithfulness, and His eternal purposes stand firm. God may be trusted never to change.",
    passages: [
      {
        book: "Malachi",
        chapter: 3,
        title: "I, the LORD, do not change",
        lookFor: "God's own declaration of His unchanging nature, and the mercy it implies.",
        focus: "6",
      },
      {
        book: "Numbers",
        chapter: 23,
        title: "God is not a man, that he should repent",
        lookFor: "Balaam's word of God's faithfulness: He is not fickle like a man; has He said, and will He not do it?",
        focus: "19",
      },
      {
        book: "Exodus",
        chapter: 32,
        title: "The LORD relents at Moses' plea",
        lookFor: "Moses intercedes after the golden calf, and the text says the LORD repented of the evil He said He would do.",
        focus: "11-14",
      },
      {
        book: "Jonah",
        chapter: 3,
        title: "God relents when Nineveh repents",
        lookFor: "The threatened judgment was real, and when the people turned, God relented of the disaster He had said He would do.",
        focus: "1-10",
      },
      {
        book: "James",
        chapter: 1,
        title: "The Father of lights, with no variation",
        lookFor: "Every good gift comes from the Father of lights, with whom there is no variation or turning shadow.",
        focus: "17",
      },
    ],
    points: [
      {
        heading: "God's character and purposes never change",
        body:
          "Scripture is emphatic that God is not fickle. He declares, 'For I, Yahweh, don't change; therefore you, sons of Jacob, are not consumed.' James says that with the Father of lights 'can be no variation, nor turning shadow.' And through Balaam comes the ancient word: 'God is not a man, that he should lie, nor the son of man, that he should repent.' God's word stands; His purposes do not shift with the wind like ours.",
        verses: ["Malachi 3:6", "James 1:17", "Numbers 23:19"],
      },
      {
        heading: "Yet Scripture plainly speaks of God relenting",
        body:
          "The Bible is also honest that God responds. At the golden calf, after Moses pleaded, 'Yahweh repented of the evil which he said he would do to his people.' When Nineveh repented in sackcloth and ashes, 'God relented of the disaster which he said he would do to them, and he didn't do it.' And God said of Saul, 'It grieves me that I have set up Saul to be king.' The same Scriptures that say God does not change also show Him turning in response to people.",
        verses: ["Exodus 32:14", "Jonah 3:10", "1 Samuel 15:11"],
      },
      {
        heading: "They hold together in God's faithful consistency",
        body:
          "There is no contradiction, because the God who does not change is the God who has always been merciful to the repentant. Jonah knew this about Him: 'you are a gracious God, and merciful, slow to anger, and abundant in loving kindness, and you relent of doing harm.' The threatened judgment was real; the mercy toward those who turn is equally real and never changes. Because God is unchangingly merciful, He responds to genuine repentance in exactly the way He always has.",
        verses: ["Jonah 4:2", "Jonah 3:9", "Jonah 3:10", "Exodus 32:12"],
      },
      {
        heading: "God's 'repenting' is not a change as a man changes",
        body:
          "The Bible uses the language of God repenting to speak of His real grief and His real turning, but it guards the meaning: 'the Strength of Israel will not lie nor repent; for he is not a man, that he should repent.' When God relents, He is not being persuaded against His nature; He is being consistent with His nature, responding to our change in the way His unchanging character has always promised. We can plead with God, as Moses did, and He hears, because He is a person, not a machine.",
        verses: ["1 Samuel 15:29", "Numbers 23:19", "Exodus 32:11", "Exodus 32:12"],
      },
      {
        heading: "What this means for us: pray boldly, trust forever",
        body:
          "Because God responds, our prayers matter: Moses interceded and the Lord relented, and we are invited to bring our requests to a God who hears. Because God does not change, our hope is secure: 'the counsel of Yahweh stands fast forever,' and 'Jesus Christ is the same yesterday, today, and forever.' He who began a good work in you will complete it. We can pray with boldness to a God who is responsive, and trust without fear a God who is unchanging in His faithfulness and love.",
        verses: ["Exodus 32:14", "Psalm 33:11", "Hebrews 13:8", "Philippians 1:6", "James 1:17"],
      },
    ],
    keyVerses: ["Malachi 3:6", "Numbers 23:19", "James 1:17", "Jonah 3:10", "Exodus 32:14"],
    raises: ["how-do-i-pray", "does-god-hear-my-prayers", "is-god-in-control"],
    followsFrom: ["is-god-in-control", "how-do-i-know-gods-will"],
    related: ["is-god-in-control", "how-do-i-pray", "does-god-hear-my-prayers", "why-pray-your-will-be-done"],
    planned: ["If God doesn't change, why does prayer matter?"],
    order: 35,
  },

  {
    slug: "how-do-i-balance-planning-with-trusting-god",
    question: "How do I balance planning with trusting God?",
    category: "suffering-will",
    summary:
      "Scripture calls us to the balance of faithful planning and humble trust: make plans, work diligently, and use wisdom, while holding our plans loosely before a sovereign God, saying with James, 'if the Lord wills.' Planning without trust becomes anxious control; trust without planning becomes lazy passivity. God honors faithful stewardship and directs the steps of those who commit their way to Him.",
    passages: [
      {
        book: "James",
        chapter: 4,
        title: "If the Lord wills",
        lookFor: "James warns against planning as if the future were ours, and shows how to plan humbly: 'if the Lord wills.'",
        focus: "13-17",
      },
      {
        book: "Proverbs",
        chapter: 16,
        title: "Commit your works to the LORD",
        lookFor: "Plan, but commit your deeds to God, for a man plans his course yet the LORD directs his steps.",
        focus: "1-9",
      },
      {
        book: "Psalm",
        chapter: 37,
        title: "Commit your way to the LORD",
        lookFor: "Delight in the LORD and commit your way to Him, trusting Him to act.",
        focus: "1-9",
      },
      {
        book: "Matthew",
        chapter: 6,
        title: "Seek first the kingdom",
        lookFor: "Do not be anxious about tomorrow; seek first God's kingdom and His righteousness, and trust Him for each day.",
        focus: "25-34",
      },
      {
        book: "Luke",
        chapter: 12,
        title: "The fool who stored up treasure",
        lookFor: "The prosperous man who planned for years and forgot God is called a fool: plans, yes, but not as though life were ours.",
        focus: "16-34",
      },
    ],
    points: [
      {
        heading: "Plan as a faithful steward, with open hands",
        body:
          "James does not forbid planning; he forbids the spirit that plans as though the future were guaranteed and self-made. He warns those who say, 'today or tomorrow we'll go into this city... trade, and make a profit,' because 'you don't know what your life will be like tomorrow.' The right way is to say, 'If the Lord wills, we will both live, and do this or that.' Plan well, and hold the plan in an open hand before God.",
        verses: ["James 4:13", "James 4:14", "James 4:15"],
      },
      {
        heading: "Commit your work to the Lord",
        body:
          "Planning is done in dependence. The proverb promises, 'Commit your deeds to Yahweh, and your plans shall succeed,' and 'a man's heart plans his course, but Yahweh directs his steps.' David sang, 'Commit your way to Yahweh. Trust also in him, and he will do this.' We are not to abandon planning for passivity; we are to plan within a deeper trust, offering our plans to the God who directs and overrules.",
        verses: ["Proverbs 16:3", "Proverbs 16:9", "Psalm 37:5", "Proverbs 19:21"],
      },
      {
        heading: "But do not boast as though the future were yours",
        body:
          "The warning is against presumption. James calls such confident planning what it is when God is left out: 'you glory in your boasting. All such boasting is evil.' And Jesus told of a man who had abundant crops and planned years of ease, saying to his soul, 'you have many goods laid up for many years,' only to hear, 'You foolish one, tonight your soul is required of you.' We plan, and we remember that we do not own tomorrow.",
        verses: ["James 4:16", "Luke 12:19", "Luke 12:20", "James 4:14"],
      },
      {
        heading: "Seek first the kingdom, not anxious security",
        body:
          "Trust keeps planning from becoming worry. Jesus tells us not to be anxious about what we will eat, drink, or wear, 'for your heavenly Father knows that you need all these things. But seek first God's Kingdom, and his righteousness; and all these things will be given to you as well,' and not to be anxious about tomorrow, for each day has enough of its own trouble. We work and plan, but our security is in the Father, not in our arrangements.",
        verses: ["Matthew 6:33", "Matthew 6:34", "Matthew 6:8", "Luke 12:29"],
      },
      {
        heading: "The wise balance: work hard, trust fully",
        body:
          "The balance is not a compromise; it is wholehearted in both directions. Work with all your might, as the Preacher urges, whatever your hand finds to do, because that is the stewardship God gives. Trust in the Lord with all your heart and do not lean on your own understanding, and in all your ways acknowledge Him. Let your requests be made known to God in everything, and do not set your hope on uncertain riches but on the living God. Plan diligently, pray constantly, and rest in the God who holds all steps.",
        verses: ["Ecclesiastes 9:10", "Proverbs 3:5", "Proverbs 3:6", "Philippians 4:6", "1 Timothy 6:17"],
      },
    ],
    keyVerses: ["James 4:15", "Proverbs 16:3", "Proverbs 16:9", "Matthew 6:33", "Psalm 37:5"],
    raises: ["how-do-i-know-gods-will", "is-god-in-control", "do-my-choices-matter"],
    followsFrom: ["how-do-i-know-gods-will", "does-god-change-his-mind"],
    related: ["how-do-i-know-gods-will", "does-god-change-his-mind", "what-if-i-make-the-wrong-decision", "do-my-choices-matter"],
    planned: ["What if my plans keep failing?"],
    order: 36,
  },

  // ------------------------------------------------------------------
  // TRAIL: Prayer (continued: fasting)
  // ------------------------------------------------------------------
  {
    slug: "what-is-fasting",
    question: "What is fasting, and does it belong with prayer?",
    category: "prayer",
    summary:
      "Fasting is the deliberate giving up of food, usually for a season, in order to devote ourselves to God. Scripture shows it joined to prayer, humility, and seeking the Lord, and Jesus assumed His followers would fast even as He assumed they would pray and give. Fasting is not a way to earn favor or twist God's arm; it is a discipline of dependence, an expression of hunger for God Himself, that belongs naturally with prayer.",
    passages: [
      {
        book: "Matthew",
        chapter: 6,
        title: "When you fast",
        lookFor: "Jesus speaks of fasting as a normal practice, to be done before God in secret, not for show.",
        focus: "16-18",
      },
      {
        book: "Luke",
        chapter: 5,
        title: "The days will come when they will fast",
        lookFor: "Jesus says His disciples will fast after He is taken away: fasting belongs to life in this age.",
        focus: "33-35",
      },
      {
        book: "Acts",
        chapter: 13,
        title: "Fasting and prayer in Antioch",
        lookFor: "As the church served the Lord and fasted, the Spirit spoke; they fasted, prayed, and sent out missionaries.",
        focus: "1-3",
      },
      {
        book: "Isaiah",
        chapter: 58,
        title: "The fast God chooses",
        lookFor: "God's word on fasting: it must be more than afflicting the soul, reaching outward to the hungry and the poor.",
        focus: "3-7",
      },
      {
        book: "Joel",
        chapter: 2,
        title: "Return to me with fasting",
        lookFor: "The prophet calls God's people, with fasting, weeping, and mourning, to turn to the LORD with all their heart.",
        focus: "12-13",
      },
    ],
    points: [
      {
        heading: "Fasting is giving up food to give ourselves to God",
        body:
          "Fasting is not dieting or penance; it is the deliberate setting aside of food for a time to seek God. Jesus spoke of it as a normal part of devotion, 'when you fast,' alongside when you pray and when you give, and He taught it to be done before the Father in secret, not to impress people. Paul and the earliest church fasted while they worshiped and prayed. It is a way of turning our natural hunger toward God.",
        verses: ["Matthew 6:16", "Matthew 6:18", "Acts 13:2", "Acts 13:3"],
      },
      {
        heading: "It belongs with prayer and seeking the Lord",
        body:
          "In Scripture, fasting is rarely alone; it is joined to prayer, humility, and seeking. The church in Antioch 'served the Lord and fasted' when the Spirit spoke, and 'had fasted and prayed' when they sent out Barnabas and Saul. Elders were appointed after they 'had prayed with fasting.' Moses and Elijah fasted on the mountain as they drew near to God. Fasting empties us of distraction that we might be full of God, and so it pairs naturally with prayer.",
        verses: ["Acts 13:2", "Acts 13:3", "Acts 14:23", "Matthew 4:2"],
      },
      {
        heading: "It is a sign of our dependence and hunger for God",
        body:
          "When we fast, we are saying with our bodies what we believe with our hearts: that we need God more than we need bread. Moses said of Israel in the wilderness, God humbled you and let you hunger 'that he might teach you that man does not live by bread only, but man lives by every word that proceeds out of Yahweh's mouth.' Jesus, fasting in the wilderness, answered the tempter with exactly these words. Fasting is the discipline of living by every word of God.",
        verses: ["Deuteronomy 8:3", "Matthew 4:4", "Matthew 4:2"],
      },
      {
        heading: "It must be more than outward abstaining",
        body:
          "God's word through Isaiah rebukes a fasting that is merely a ritual of self-denial while hearts remain hard: the people ask why God does not notice their fasting, yet in it they still oppress and quarrel. The fast God chooses is one that loosens the bonds of wickedness, feeds the hungry, shelters the poor, and covers the naked. Fasting that does not lead to love is hollow; the discipline of self-denial is meant to make us more like the self-giving God.",
        verses: ["Isaiah 58:3", "Isaiah 58:6", "Isaiah 58:7", "Joel 2:12"],
      },
      {
        heading: "It is for emphatic seasons and for the ordinary walk",
        body:
          "Jesus said that His disciples would fast 'in those days' after the Bridegroom was taken away, marking life in this present age as a time for such dependence. Fasting may be for special seasons of seeking, for confession, for major decisions, or for the church's united prayer, and it is joined to humility of heart. Like all disciplines, it is not a way to earn God's favor but a way to receive more of Him, and it is never a substitute for love.",
        verses: ["Luke 5:35", "Joel 2:12", "Matthew 6:18", "Isaiah 58:7"],
      },
    ],
    keyVerses: ["Matthew 6:16-18", "Acts 13:2-3", "Isaiah 58:6-7", "Matthew 4:4", "Luke 5:35"],
    raises: ["how-do-i-pray", "does-god-hear-my-prayers"],
    followsFrom: ["how-do-i-pray", "what-does-the-lords-prayer-teach"],
    related: ["how-do-i-pray", "what-does-the-lords-prayer-teach", "who-is-the-father", "what-the-new-life-looks-like"],
    planned: ["How do I pray when I am desperate?"],
    order: 36,
  },

  {
    slug: "what-does-it-mean-to-pray-in-the-holy-spirit",
    question: "What does it mean to pray in the Holy Spirit?",
    category: "prayer",
    summary:
      "To pray in the Spirit is to pray in dependence on the Holy Spirit and in line with His work. He helps our weakness when we do not know how to pray, He intercedes for us according to God's will, He dwells in us making us children who cry 'Abba, Father,' and He empowers the church's prayer. It is not a special technique for the few; it is the Spirit-empowered prayer of every believer, prayed through Christ and aligned with God's will.",
    passages: [
      {
        book: "Romans",
        chapter: 8,
        title: "The Spirit helps us pray",
        lookFor: "The Spirit helps our weakness and makes intercession for the saints according to the will of God.",
        focus: "26-27",
      },
      {
        book: "Galatians",
        chapter: 4,
        title: "The Spirit cries 'Abba, Father'",
        lookFor: "Because we are children, God sent the Spirit of His Son into our hearts, crying 'Abba, Father.'",
        focus: "4-7",
      },
      {
        book: "Ephesians",
        chapter: 6,
        title: "Praying in the Spirit",
        lookFor: "With all prayer, pray at all times in the Spirit, watchful and persevering for all the saints.",
        focus: "18-20",
      },
      {
        book: "Jude",
        chapter: 1,
        title: "Build yourselves up, praying in the Holy Spirit",
        lookFor: "Jude links prayer in the Spirit to being built up in most holy faith and kept in the love of God.",
        focus: "20-21",
      },
      {
        book: "Zechariah",
        chapter: 12,
        title: "A spirit of grace and supplication",
        lookFor: "God promises to pour out a spirit of grace and of supplication, enabling His people to pray and turn to Him.",
        focus: "10",
      },
    ],
    points: [
      {
        heading: "The Spirit helps our weakness in prayer",
        body:
          "Praying in the Spirit begins with dependence. Paul writes, 'the Spirit also helps our weaknesses, for we don't know how to pray as we ought. But the Spirit himself makes intercession for us with groanings which can't be uttered.' When we do not know how to ask, the Spirit prays in us and for us. Prayer in the Spirit is not a perfected technique but a Spirit-carried dependence.",
        verses: ["Romans 8:26", "Romans 8:27"],
      },
      {
        heading: "It is prayer surrendered to God's will",
        body:
          "The Spirit who intercedes 'makes intercession for the saints according to God.' John says that if we ask anything according to His will, He hears us. To pray in the Spirit is to have our asking drawn into the Spirit's own alignment with God's will, so that our prayer grows from 'what I want' toward 'what God wills,' the deepest and truest thing we could ever pray.",
        verses: ["Romans 8:27", "1 John 5:14"],
      },
      {
        heading: "It flows from the Spirit of adoption",
        body:
          "The Spirit who teaches us to pray is the Spirit who makes us children. Paul says, 'you didn't receive the spirit of bondage again to fear, but you received the Spirit of adoption, by whom we cry, Abba, Father.' Galatians adds, 'God sent out the Spirit of his Son into your hearts, crying, Abba, Father.' And God has promised to pour out a spirit of grace and supplication. The Spirit both makes us sons and empowers the prayer of sons.",
        verses: ["Romans 8:15", "Galatians 4:6", "Zechariah 12:10"],
      },
      {
        heading: "It is the Spirit-empowered prayer of the church",
        body:
          "Praying in the Spirit is built into ordinary believing prayer, not a rare elevation. Paul urges the Ephesians to pray at all times in the Spirit with all prayer and requests, watchful and persevering for all the saints, and Jude calls believers to build themselves up in most holy faith, 'praying in the Holy Spirit,' keeping themselves in the love of God. It is the normal prayer of the church, in the Spirit's power, for the saints and for the world.",
        verses: ["Ephesians 6:18", "Jude 1:20", "Jude 1:21"],
      },
      {
        heading: "It uses the whole self, mind and heart",
        body:
          "Praying in the Spirit is not opposed to understanding. Paul says, 'I will pray with the spirit, and I will pray with the understanding also.' The Spirit indwells every believer, and to pray in the Spirit is simply to pray as a Christian, with our whole selves, mind and heart, depending on the Spirit who lives in us and who prays the will of God in us. It is the Spirit-worked prayer of a child of God, through Christ, to the Father.",
        verses: ["1 Corinthians 14:15", "1 Corinthians 12:13", "Romans 8:15"],
      },
    ],
    keyVerses: ["Romans 8:26-27", "Galatians 4:6", "Ephesians 6:18", "Jude 1:20", "Zechariah 12:10"],
    raises: ["how-do-i-pray", "does-god-hear-my-prayers", "who-is-the-holy-spirit"],
    followsFrom: ["what-does-the-lords-prayer-teach", "how-do-i-pray"],
    related: ["how-do-i-pray", "what-does-the-lords-prayer-teach", "who-is-the-holy-spirit", "what-is-the-fruit-of-the-spirit"],
    planned: ["What is the role of the Spirit in public worship?"],
    order: 37,
  },

  {
    slug: "what-does-it-mean-to-pray-in-jesus-name",
    question: "What does it mean to pray in Jesus' name?",
    category: "prayer",
    summary:
      "To pray in Jesus' name is not to add a magic phrase to the end of a prayer; it is to pray in the authority and person of Christ, on the basis of what He has done, and in line with His will. Jesus promised that whatever we ask in His name, He will do, that the Father may be glorified in the Son. To pray in Jesus' name is to come to the Father through the Son, asking what honors Him and aligns with His purposes.",
    passages: [
      {
        book: "John",
        chapter: 14,
        title: "Whatever you ask in my name",
        lookFor: "Jesus promises that prayer in His name will be done, so that the Father may be glorified in the Son.",
        focus: "12-14",
      },
      {
        book: "John",
        chapter: 16,
        title: "Ask the Father in my name",
        lookFor: "Whatever you ask of the Father in my name, He will give you, that your joy may be full.",
        focus: "23-27",
      },
      {
        book: "1 John",
        chapter: 5,
        title: "Ask according to his will",
        lookFor: "We have confidence that if we ask anything according to His will, He hears us.",
        focus: "13-15",
      },
      {
        book: "Colossians",
        chapter: 3,
        title: "Do all in the name of the Lord Jesus",
        lookFor: "Whatever you do, in word or deed, do all in the name of the Lord Jesus, with thanksgiving.",
        focus: "15-17",
      },
      {
        book: "Acts",
        chapter: 4,
        title: "No other name",
        lookFor: "Salvation is in no other name, and the church prays to God in the name of His holy Servant Jesus for boldness.",
        focus: "7-12",
      },
    ],
    points: [
      {
        heading: "Praying in Jesus' name is praying on His authority",
        body:
          "To ask in Jesus' name is not to append His name as a spell but to come to the Father through Him, on the ground of who He is and what He has done. Jesus said, 'Whatever you will ask in my name, that will I do, that the Father may be glorified in the Son.' Paul speaks of our access to the Father through Christ in one Spirit, and the promise is that whatever we ask of the Father in Jesus' name, He will give. The name of Jesus is our access, not our incantation.",
        verses: ["John 14:13", "John 14:14", "John 16:23", "Ephesians 2:18"],
      },
      {
        heading: "It is the prayer of one who abides in Him",
        body:
          "The promise of answered prayer in His name is given to Jesus' disciples, to those who remain in Him. He said, 'If you remain in me, and my words remain in you, you will ask whatever you desire, and it will be done for you,' and 'You didn't choose me, but I chose you... that whatever you will ask of the Father in my name, he may give it to you.' Praying in Jesus' name grows out of a life that abides in His word and His purpose.",
        verses: ["John 15:7", "John 15:16"],
      },
      {
        heading: "It is to pray in line with His will",
        body:
          "Praying in Jesus' name is not asking for whatever we want and stamping His name on it; it is asking what He would ask. John gives the guard and the confidence in one clause: 'if we ask anything according to his will, he listens to us.' And Jesus said that His answer in His name is given 'that the Father may be glorified in the Son.' A prayer in Jesus' name seeks the glory of the Father and the purposes of the Son, not simply our own comfort.",
        verses: ["1 John 5:14", "John 14:13", "John 16:23"],
      },
      {
        heading: "It extends to our whole life in Him",
        body:
          "The name of Jesus is not only for our prayers; it governs our whole lives. Paul writes, 'Whatever you do, in word or in deed, do all in the name of the Lord Jesus, giving thanks to God the Father, through him,' and to give thanks to God in the name of our Lord Jesus Christ. Our lives are to be lived in His name, which means our prayers and our actions both are to bear His character and give Him thanks.",
        verses: ["Colossians 3:17", "Ephesians 5:20"],
      },
      {
        heading: "So we pray boldly, because of who He is",
        body:
          "Because Jesus has that name, we are bold to pray. 'There is salvation in none other, for neither is there any other name under heaven... by which we must be saved,' and the church, threatened and afraid, prayed to God in the name of His holy Servant Jesus for boldness, and the place was shaken and they were filled with the Holy Spirit. Praying in Jesus' name is praying to the Father through the Son, confident because He is the one name given, and certain that He hears and will do what He has promised.",
        verses: ["Acts 4:12", "Acts 4:29", "Acts 4:31", "1 John 5:14", "John 16:23"],
      },
    ],
    keyVerses: ["John 14:13-14", "John 15:16", "1 John 5:14", "Colossians 3:17", "Acts 4:12"],
    raises: ["how-do-i-pray", "does-god-hear-my-prayers", "what-does-it-mean-to-pray-in-the-holy-spirit"],
    followsFrom: ["does-god-hear-my-prayers", "what-does-it-mean-to-pray-in-the-holy-spirit"],
    related: ["does-god-hear-my-prayers", "how-do-i-pray", "what-does-it-mean-to-pray-in-the-holy-spirit", "why-does-god-seem-silent"],
    planned: ["What does it mean to approach God with boldness?"],
    order: 38,
  },

  {
    slug: "does-god-still-speak-today",
    question: "Does God still speak today?",
    category: "prayer",
    summary:
      "Yes. God has spoken, and God still speaks. He spoke through the prophets and has spoken finally and fully in His Son; He speaks through His word, which is God-breathed; He speaks by the Holy Spirit, who opens the word and guides God's people into truth; and He speaks to the hearts of those who hear His voice and follow. God is not silent today: He speaks in Christ, in Scripture, and by His Spirit.",
    passages: [
      {
        book: "Hebrews",
        chapter: 1,
        title: "God has spoken to us by His Son",
        lookFor: "God spoke through the prophets in the past, and in these last days has spoken to us by His Son.",
        focus: "1-4",
      },
      {
        book: "2 Timothy",
        chapter: 3,
        title: "All Scripture is God-breathed",
        lookFor: "Every Scripture is breathed out by God, profitable for teaching, so the man of God may be complete.",
        focus: "14-17",
      },
      {
        book: "John",
        chapter: 10,
        title: "My sheep hear my voice",
        lookFor: "Jesus' people hear His voice and follow; the Shepherd speaks, and His sheep know Him.",
        focus: "1-30",
      },
      {
        book: "John",
        chapter: 16,
        title: "The Spirit guides into all truth",
        lookFor: "The Spirit of truth will guide you into all truth and glorify Christ, declaring what is His.",
        focus: "5-15",
      },
      {
        book: "Psalm",
        chapter: 95,
        title: "Today, if you hear his voice",
        lookFor: "God's word is 'today': hear His voice, and do not harden your heart.",
        focus: "7-8",
      },
    ],
    points: [
      {
        heading: "God has spoken, and finally in His Son",
        body:
          "The Bible opens the question of whether God still speaks by showing how much He has already said. Hebrews begins, 'God, having in the past spoken to the fathers through the prophets at many times and in various ways, has at the end of these days spoken to us by his Son.' God is not a distant God who has gone quiet; He has spoken through prophets, and He has spoken fully and finally in Christ, and all of it is gathered in the word He has given us.",
        verses: ["Hebrews 1:1", "Hebrews 1:2"],
      },
      {
        heading: "God still speaks through His word today",
        body:
          "The word God has given is not a museum piece; it is living. Paul says all Scripture is 'God-breathed' and profitable for teaching, reproof, correction, and training in righteousness, so that the man of God may be complete. The writer of Hebrews calls the word of God 'living, and active.' Peter calls the prophetic word 'the more sure word of prophecy,' a lamp shining in a dark place. When we read Scripture, the living God speaks to us.",
        verses: ["2 Timothy 3:16", "2 Timothy 3:17", "Hebrews 4:12", "2 Peter 1:19"],
      },
      {
        heading: "God speaks by His Spirit",
        body:
          "The Spirit who inspired the word is the Spirit who brings it home. Jesus promised, 'when he, the Spirit of truth, has come, he will guide you into all truth,' and 'he will glorify me, for he will take from what is mine, and will declare it to you.' Paul speaks of words 'which the Holy Spirit teaches,' and Jesus pictures His people as sheep who hear His voice and follow. The Spirit makes the written word heard in the heart.",
        verses: ["John 16:13", "John 16:14", "1 Corinthians 2:13", "John 10:27"],
      },
      {
        heading: "God speaks today, and we are to hear",
        body:
          "Psalm 95 frames God's speaking as a present address: 'Today, oh that you would hear his voice!' Hear His voice, and do not harden the heart, as at Meribah in the wilderness. The writer of Hebrews applies it directly to the church: 'as the Holy Spirit says, Today if you will hear his voice, don't harden your hearts.' And John writes that God's people hear what the Spirit says to the churches. God's speaking is not only in the past; He speaks now, and the first response is to hear and not to harden the heart.",
        verses: ["Psalm 95:7", "Psalm 95:8", "Hebrews 3:7", "Hebrews 3:8", "Revelation 2:7"],
      },
      {
        heading: "So we listen to the word God has given",
        body:
          "Because God has spoken completely in Christ and in Scripture, we do not wait for new words to be added to the Bible. But we are to listen, and listen well: to study the word He has given, to hear it preached, to test what is claimed in His name by the Scriptures as the Bereans did, to ask for the Spirit to open our eyes, and to obey what we hear. Faithful Christians differ about whether God grants new prophetic words today, but we all agree on this: God has spoken, and His word is sufficient, and by His Spirit He is still speaking to every heart that will hear.",
        verses: ["Proverbs 30:5-6", "Psalm 119:18", "Acts 17:11", "1 John 4:1", "James 1:22"],
      },
    ],
    keyVerses: ["Hebrews 1:1-2", "2 Timothy 3:16", "John 10:27", "Psalm 95:7-8", "John 16:13"],
    raises: ["gods-voice-or-my-own-thoughts", "can-i-trust-the-bible", "what-does-it-mean-to-pray-in-the-holy-spirit"],
    followsFrom: ["why-does-god-seem-silent", "can-i-trust-the-bible"],
    related: ["why-does-god-seem-silent", "can-i-trust-the-bible", "gods-voice-or-my-own-thoughts", "how-do-i-know-the-spirit-is-leading-me"],
    planned: ["What does it mean to hear God speak through His word?"],
    order: 39,
  },

  // ------------------------------------------------------------------
  // TRAIL: The Word of God (continued: its origin)
  // ------------------------------------------------------------------
  {
    slug: "how-was-the-bible-written-down",
    question: "How was the Bible written down?",
    category: "word-of-god",
    summary:
      "The Bible was written over many centuries by many human authors, yet Scripture insists these writings are not merely human products; they are God-breathed. God spoke through the prophets, moved holy men to write by the Holy Spirit, and had His words written down in books, until in these last days He spoke finally through His Son and the Spirit guided the apostles to write the gospel down. The Bible is God's message, written by men whom He carried along.",
    passages: [
      {
        book: "2 Peter",
        chapter: 1,
        title: "Men spoke from God, moved by the Holy Spirit",
        lookFor: "No prophecy of Scripture came by human will, but holy men spoke from God as they were carried along by the Spirit.",
        focus: "16-21",
      },
      {
        book: "2 Timothy",
        chapter: 3,
        title: "All Scripture is God-breathed",
        lookFor: "Every Scripture is breathed out by God, profitable for teaching, correction, and training in righteousness.",
        focus: "14-17",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "God spoke through the prophets, and by His Son",
        lookFor: "God spoke at many times and in various ways through the prophets, and in these last days through His Son.",
        focus: "1-4",
      },
      {
        book: "Jeremiah",
        chapter: 36,
        title: "Write in a book all the words I have spoken",
        lookFor: "God tells Jeremiah to take a scroll and write down the words He had spoken: prophecy connected to writing from the beginning.",
        focus: "1-8",
      },
      {
        book: "Luke",
        chapter: 1,
        title: "An orderly account from eyewitnesses",
        lookFor: "Luke writes an accurate, orderly account of what was delivered by eyewitnesses, so the reader may be certain.",
        focus: "1-4",
      },
    ],
    points: [
      {
        heading: "God spoke, and had His words written down",
        body:
          "From the very beginning, God's speaking was joined to writing. The LORD said to Moses, 'Write you these words: for in accordance with these words I have made a covenant with you,' and Moses wrote the words of the law in a book. God told Jeremiah, 'Take a scroll of a book, and write therein all the words that I have spoken to you.' The spoken word of God was preserved in written form, because He intended it to endure for His people.",
        verses: ["Exodus 34:27", "Deuteronomy 31:24", "Jeremiah 36:2"],
      },
      {
        heading: "The prophets wrote as men moved by the Spirit",
        body:
          "Scripture is honest about its human writers and clear about its divine origin. Peter writes, 'no prophecy ever came by the will of man, but holy men of God spoke, being moved by the Holy Spirit,' and that 'no prophecy of Scripture is of private interpretation.' The human authors were real men in real circumstances, and the Holy Spirit carried them along, so that what they wrote is at once their words and God's.",
        verses: ["2 Peter 1:21", "2 Peter 1:20"],
      },
      {
        heading: "All Scripture is God-breathed",
        body:
          "The Bible's own account of itself is that its breath comes from God: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness.' Paul could say of his own writings that they were 'the commandment of the Lord,' and Hebrews traces the whole thing back: God spoke through the prophets, and in these last days through His Son. The book is God's own word to us.",
        verses: ["2 Timothy 3:16", "1 Corinthians 14:37", "Hebrews 1:1", "Hebrews 1:2"],
      },
      {
        heading: "The New Testament was written by eyewitnesses",
        body:
          "The New Testament claims the anchor of testimony. Luke wrote 'having traced the course of all things accurately from the first,' an orderly account of what eyewitnesses delivered, that the reader might know the certainty of what was taught. Peter declared, 'we did not follow cunningly devised fables... but we were eyewitnesses of his majesty.' John wrote so that his readers might believe that Jesus is the Christ. These writings rest on those who saw and heard.",
        verses: ["Luke 1:3", "Luke 1:4", "2 Peter 1:16", "John 20:31"],
      },
      {
        heading: "Many writers, one Author",
        body:
          "The Bible was written over centuries by prophets, kings, a shepherd, fishermen, a tax collector, a physician, and an apostle, in different lands and languages; yet it is one book with one Author. God spoke at 'many times and in various ways' through the prophets, and holy men wrote as they were carried along by the Holy Spirit, so that all of it is 'God-breathed.' The many careful human hands are all guided by the one Spirit, and the whole library is the word of the one God.",
        verses: ["Hebrews 1:1", "2 Peter 1:21", "2 Timothy 3:16", "1 Peter 1:10-11"],
      },
    ],
    keyVerses: ["2 Peter 1:20-21", "2 Timothy 3:16", "Hebrews 1:1-2", "1 Corinthians 14:37", "John 20:31"],
    raises: ["can-i-trust-the-bible", "why-do-bible-translations-differ", "how-should-i-read-the-bible", "what-does-it-mean-that-the-bible-is-both-human-and-divine"],
    followsFrom: ["can-i-trust-the-bible"],
    related: ["can-i-trust-the-bible", "why-do-bible-translations-differ", "is-the-whole-bible-about-jesus", "how-should-i-read-the-bible"],
    planned: [],
    order: 39,
  },

  {
    slug: "what-does-it-mean-to-meditate-on-scripture",
    question: "What does it mean to meditate on Scripture?",
    category: "word-of-god",
    summary:
      "Biblical meditation is not emptying the mind but filling it: a thoughtful, prayerful dwelling on the word of God, chewing it over until it sinks from the head into the heart and shapes the life. The psalmist delights in the law and meditates on it day and night, and the blessed man is 'like a tree planted by the streams of water.' Meditation is how the word we read becomes the word we live.",
    passages: [
      {
        book: "Psalm",
        chapter: 1,
        title: "Meditates on the law day and night",
        lookFor: "The blessed man delights in God's law and meditates on it day and night, like a tree planted by the streams of water.",
        focus: "1-3",
      },
      {
        book: "Psalm",
        chapter: 119,
        title: "I will meditate on your precepts",
        lookFor: "A psalm of heartfelt love for God's word: meditating on His precepts, statutes, and wonders.",
        focus: "15-48",
      },
      {
        book: "Joshua",
        chapter: 1,
        title: "Meditate on it day and night, so you do it",
        lookFor: "God tells Joshua to let the book not depart from his mouth, meditating on it day and night, that he may be careful to do all that is written.",
        focus: "1-9",
      },
      {
        book: "1 Timothy",
        chapter: 4,
        title: "Be diligent in these things; give yourself wholly to them",
        lookFor: "Paul urges Timothy to devote himself to the reading, teaching, and meditating on the word, that his progress may be evident.",
        focus: "11-16",
      },
      {
        book: "Philippians",
        chapter: 4,
        title: "Think about these things",
        lookFor: "Believers are to fill their minds with what is true, honorable, just, pure, lovely, and praiseworthy.",
        focus: "8-9",
      },
    ],
    points: [
      {
        heading: "Meditation is filling the mind, not emptying it",
        body:
          "Unlike the world's meditation, biblical meditation is not a blanking of the mind but a deliberate filling of it with the word of God. The psalmist speaks of meditating on God's precepts and considering His ways, delighting in the law and pondering it day and night. Jesus' mother Mary 'kept all these sayings, pondering them in her heart.' It is the slow, thoughtful chewing of Scripture until it saturates the mind and heart.",
        verses: ["Psalm 119:15", "Psalm 1:2", "Luke 2:19"],
      },
      {
        heading: "It is delight, not mere duty",
        body:
          "Meditation grows out of love. The psalmist cries, 'How I love your law! It is my meditation all day,' and 'I reach out my hands for your commandments, which I love. I will meditate on your statutes.' The blessed man's delight in the law is the soil in which his pondering grows, 'like a tree planted by the streams of water.' We do not meditate because we must, but because we treasure the word.",
        verses: ["Psalm 119:97", "Psalm 119:48", "Psalm 1:2", "Psalm 1:3"],
      },
      {
        heading: "It is the way the word becomes a life",
        body:
          "Meditation carries the word from the page into the walk. God told Joshua to let the book not depart from his mouth, meditating on it day and night, 'for then you shall make your way prosperous, and then you shall have good success.' Biblical meditation is aimed at doing: the word is pondered so it can be obeyed. David even links it to life change, praying, 'Open my eyes, that I may see wondrous things out of your law.'",
        verses: ["Joshua 1:8", "Psalm 119:18", "Psalm 119:11"],
      },
      {
        heading: "It is a skill to be practiced and devoted to",
        body:
          "Paul tells Timothy to be devoted to the Scriptures, to 'pay attention to reading, to exhortation, and to teaching,' and to be diligent in these things, giving himself wholly to them, that his progress may be evident to all. Meditation is not a gift only for the spiritually mature; it is a practice to be learned, a discipline of pausing over the word, asking what it says, what it means, and how it changes us.",
        verses: ["1 Timothy 4:13", "1 Timothy 4:15"],
      },
      {
        heading: "It fills the heart with what is true",
        body:
          "A life is shaped by what it dwells on. Paul urges us to think about whatever is true, honorable, just, pure, lovely, and of good report, and then names the result: 'the God of peace will be with you.' The psalmist says the man who meditates on the word is blessed and fruitful, and David's desire to hide the word in his heart was so that he might not sin against God. What we meditate on steadily, we become.",
        verses: ["Philippians 4:8", "Philippians 4:9", "Psalm 1:3", "Psalm 119:11"],
      },
    ],
    keyVerses: ["Psalm 1:2", "Psalm 119:97", "Joshua 1:8", "Philippians 4:8", "Psalm 119:15"],
    raises: ["daily-habit-of-reading-the-bible", "gods-voice-or-my-own-thoughts", "what-is-the-difference-between-reading-and-studying-the-bible"],
    followsFrom: ["how-should-i-read-the-bible", "daily-habit-of-reading-the-bible"],
    related: ["how-should-i-read-the-bible", "daily-habit-of-reading-the-bible", "what-the-new-life-looks-like", "gods-voice-or-my-own-thoughts"],
    planned: [],
    order: 40,
  },

  {
    slug: "how-do-i-find-christ-in-the-old-testament",
    question: "How do I find Christ in the Old Testament?",
    category: "word-of-god",
    summary:
      "The Old Testament is not a separate book about a different God; it is the first half of the one story that is about Jesus. Jesus Himself said the Scriptures testify of Him, and on the Emmaus road He opened the law, the prophets, and the psalms and explained the things concerning Himself. We find Christ in the Old Testament in its promises and prophecies, its types and patterns, its covenants and sacrifices, and its expectation of a coming King, all of which He came to fulfill.",
    passages: [
      {
        book: "Luke",
        chapter: 24,
        title: "The road to Emmaus",
        lookFor: "Beginning from Moses and all the prophets, Jesus explained the things concerning Himself in all the Scriptures, and their hearts burned.",
        focus: "13-32",
      },
      {
        book: "John",
        chapter: 5,
        title: "The Scriptures testify about me",
        lookFor: "Jesus tells those who search the Scriptures that they are the ones that testify about Him.",
        focus: "36-40",
      },
      {
        book: "Matthew",
        chapter: 5,
        title: "I came to fulfill the law and the prophets",
        lookFor: "Jesus did not come to destroy the Law or the Prophets but to fulfill them.",
        focus: "17-20",
      },
      {
        book: "1 Corinthians",
        chapter: 10,
        title: "The rock was Christ",
        lookFor: "Paul reads the wilderness history as pointing to Christ: the rock that followed them was Christ, and the exodus was a warning for us.",
        focus: "1-13",
      },
      {
        book: "1 Peter",
        chapter: 1,
        title: "The prophets searched for the Christ",
        lookFor: "The Spirit of Christ was in the prophets, predicting the sufferings of Christ and the glories that would follow.",
        focus: "10-12",
      },
    ],
    points: [
      {
        heading: "Jesus Himself told us where to find Him",
        body:
          "The key to the Old Testament is Christ, and Jesus gave it to us Himself. He said, 'You search the Scriptures... and these are they which testify about me.' On the road to Emmaus, 'beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself.' And later He said that everything written in the law of Moses, the prophets, and the psalms concerning Him must be fulfilled. Jesus is the subject the whole book has been waiting for.",
        verses: ["John 5:39", "Luke 24:27", "Luke 24:44"],
      },
      {
        heading: "The Old Testament is promise; Christ is fulfillment",
        body:
          "Jesus said plainly, 'Don't think that I came to destroy the law or the prophets. I didn't come to destroy, but to fulfill.' Paul says that however many the promises of God are, 'in him is the Yes'; Peter announces that what God foretold through all the prophets, that the Christ should suffer, He has fulfilled. The Old Testament raises the expectation; Christ is the one who meets it, so that reading the promise without Him is reading a story without its ending.",
        verses: ["Matthew 5:17", "2 Corinthians 1:20", "Acts 3:18", "Luke 24:44"],
      },
      {
        heading: "It is full of types and patterns that point to Him",
        body:
          "The Old Testament is thick with anticipations of Christ. Paul could read the wilderness and say, 'the rock was Christ,' and speak of the exodus as a warning pointing to ourselves. John saw in the Passover lamb the one who takes away the sin of the world. Hebrews says the law had 'a shadow of the good to come,' and Colossians calls the festivals and holy days a shadow, 'but the body is Christ's.' The sacrifices of the tabernacle, the lamb, the rock, the bread: each is a finger pointing to Christ.",
        verses: ["1 Corinthians 10:4", "John 1:29", "Hebrews 10:1", "Colossians 2:17", "1 Corinthians 10:1"],
      },
      {
        heading: "It holds a lineage of expectation: King and Suffering Servant",
        body:
          "From the beginning, the Old Testament is a waiting room for Christ. It promises a son of David whose throne lasts forever, a child to be born whose name is Wonderful Counselor and Prince of Peace, a righteous Branch who will reign. And it portrays a Suffering Servant, pierced for our transgressions, whose cry the crucified Jesus took on His own lips: 'My God, my God, why have you forsaken me?' Peter says the Spirit of Christ in the prophets predicted 'the sufferings of Christ, and the glories that would follow them.'",
        verses: ["Matthew 1:1", "Luke 1:32", "Jeremiah 23:5", "Isaiah 9:6", "Isaiah 53:5", "Psalm 22:1", "1 Peter 1:11"],
      },
      {
        heading: "And we read it with Christ in view and the gospel in hand",
        body:
          "To find Christ in the Old Testament, we read it with Him in view: asking of each part how it anticipates Him, how it promises Him, how it is fulfilled in Him, and how it prepares the way for the gospel. The veil is removed when we turn to the Lord, as Paul says; the same Scriptures that seemed hidden are opened when Christ is seen. Whatever was written in earlier times was written for our instruction. Read the Old Testament with Jesus on the page, and it becomes what it always was: the gospel before the cross.",
        verses: ["2 Corinthians 3:14", "2 Corinthians 3:16", "Romans 15:4", "Luke 24:32", "Luke 24:27"],
      },
    ],
    keyVerses: ["John 5:39", "Luke 24:27", "Matthew 5:17", "1 Peter 1:11", "2 Corinthians 1:20"],
    raises: ["who-is-jesus", "why-did-jesus-have-to-die", "can-i-trust-the-bible"],
    followsFrom: ["is-the-whole-bible-about-jesus", "who-is-jesus"],
    related: ["is-the-whole-bible-about-jesus", "who-is-jesus", "what-is-the-gospel", "how-should-i-read-the-bible"],
    planned: ["How should I read the Psalms?"],
    order: 41,
  },

  // ------------------------------------------------------------------
  // NEW: theological load-bearers and the biggest gap in each trail
  // ------------------------------------------------------------------
  {
    slug: "how-do-the-persons-of-the-trinity-relate",
    question: "How do the Persons of the Trinity relate to one another?",
    category: "holy-spirit",
    summary:
      "The Father, the Son, and the Holy Spirit are one God in three Persons, and the Bible shows them relating to one another in love and in distinct roles. They are not three gods and not three parts of one being: they are one God, and each Person is fully God. Their relationship is not an abstract theory; it is the shape of our salvation, because the Father sends, the Son redeems, and the Spirit applies.",
    passages: [
      {
        book: "John",
        chapter: 14,
        title: "The Father, the Son, and the Spirit at work",
        lookFor: "Jesus promises the Helper whom the Father will send in His name: watch how all three Persons are named and how they relate to one another.",
        focus: "15-31",
      },
      {
        book: "John",
        chapter: 17,
        title: "Jesus prays to the Father",
        lookFor: "The whole prayer is full of the Father's relationship with the Son: glory given and received, and love shared before the world existed.",
      },
      {
        book: "Matthew",
        chapter: 3,
        title: "All three Persons at Jesus' baptism",
        lookFor: "The Son is baptized, the Spirit descends like a dove, and the Father speaks from heaven: all three present at once.",
        focus: "13-17",
      },
      {
        book: "Galatians",
        chapter: 4,
        title: "The sending God",
        lookFor: "Paul compresses the whole plan into a few lines: the Father sends the Son, and the Spirit cries 'Abba, Father.'",
        focus: "4-7",
      },
    ],
    points: [
      {
        heading: "One God in three Persons, with one name",
        body:
          "Baptism is into 'the name of the Father and of the Son and of the Holy Spirit': one name, and yet the Father, Son, and Spirit are each named. Paul's benediction commends 'the grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit,' and Israel's oldest confession declares that 'Yahweh is one.' The Persons are distinct, but the God is one: three Persons sharing one divine being and one name.",
        verses: ["Matthew 28:19", "2 Corinthians 13:14", "Deuteronomy 6:4", "1 Corinthians 8:6"],
      },
      {
        heading: "The Father sends; the Son comes; the Spirit brings us in",
        body:
          "When the fullness of time came, 'God sent out his Son,' and because we are children, 'God sent out the Spirit of his Son into your hearts, crying, Abba, Father.' Jesus promised that the Father would send the Helper 'in my name,' and that the Spirit of truth 'proceeds from the Father' and testifies about Him. The roles differ because the Persons differ, yet each is fully God at work in our salvation.",
        verses: ["Galatians 4:4-6", "John 14:26", "John 15:26", "John 14:16"],
      },
      {
        heading: "They know, love, and glorify one another",
        body:
          "At the Jordan the Father said, 'This is my beloved Son, with whom I am well pleased,' and Jesus prayed that His disciples would see His glory, 'for you loved me before the foundation of the world.' The Father loves the Son and has given all things into His hand; the Son loves the Father and does what He commands; the Spirit takes what belongs to Christ and declares it to us. The life of God is not lonely; it is a relationship of eternal love.",
        verses: ["Matthew 3:17", "John 17:24", "John 3:35", "John 14:31", "John 16:14"],
      },
      {
        heading: "They work together in our salvation",
        body:
          "Paul blesses the church with 'the grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit,' and Peter describes believers chosen by the foreknowledge of God the Father, sanctified by the Spirit, and sprinkled with the blood of Jesus Christ. Titus says we were saved by mercy through 'the washing of regeneration and renewing by the Holy Spirit, whom he poured out on us richly, through Jesus Christ our Savior,' and Paul adds that we were sealed with 'the Holy Spirit of promise,' the pledge of our inheritance. Every Person is at work in every stage of our salvation.",
        verses: ["2 Corinthians 13:14", "1 Peter 1:2", "Titus 3:4-6", "Ephesians 1:13-14", "2 Corinthians 1:21-22"],
      },
      {
        heading: "Different roles do not mean unequal worth",
        body:
          "When Jesus told the disciples, 'the Father is greater than I,' He was not denying His deity; He was speaking of His sending and His incarnate obedience. Paul can say that the head of Christ is God, and yet also that all the fullness of God dwells in Christ bodily. The ordering is the pattern of love: the Son submits to the Father and the Spirit serves both, not because they are less, but because love has a shape. The truest greatness in God is the loving order of three Persons who are one.",
        verses: ["John 14:28", "1 Corinthians 11:3", "Colossians 2:9", "Philippians 2:6-7"],
      },
    ],
    keyVerses: ["Matthew 28:19", "2 Corinthians 13:14", "Galatians 4:4-6", "John 17:24", "Ephesians 1:13-14"],
    raises: ["can-we-understand-the-trinity", "who-is-the-father", "who-is-the-holy-spirit"],
    followsFrom: ["what-is-the-trinity", "can-we-understand-the-trinity"],
    related: ["what-is-the-trinity", "can-we-understand-the-trinity", "is-the-holy-spirit-god", "is-jesus-really-god", "does-jesus-sharing-gods-nature-mean-two-gods"],
    planned: ["How does the Trinity shape the way we worship and pray?"],
    order: 25,
  },

  {
    slug: "how-can-one-person-be-fully-god-and-fully-man",
    question: "How can one Person be fully God and fully man at once?",
    category: "jesus-christ",
    summary:
      "The Bible never explains the incarnation by thinning either side: Jesus Christ is fully God and fully man in one Person. He did not stop being God when He became man, and He was a real man, not God wearing a costume. This is the mystery to which Scripture constantly points, and it is the foundation of our redemption and our hope.",
    passages: [
      {
        book: "Philippians",
        chapter: 2,
        title: "The mind of Christ",
        lookFor: "Paul puts the incarnation before us: existing in the form of God, He emptied Himself and took the form of a servant.",
        focus: "5-11",
      },
      {
        book: "Hebrews",
        chapter: 2,
        title: "The Son made like His brothers",
        lookFor: "Why the eternal Son had to share flesh and blood: to destroy death and to become a merciful and faithful high priest.",
      },
      {
        book: "John",
        chapter: 1,
        title: "The Word became flesh",
        lookFor: "John's prologue holds both truths together: the Word was God, and the Word became flesh and lived among us.",
        focus: "1-18",
      },
      {
        book: "Matthew",
        chapter: 4,
        title: "Tempted as a man",
        lookFor: "Jesus is truly human: He is hungry after fasting and is tempted, yet He answers the tempter with Scripture.",
        focus: "1-11",
      },
    ],
    points: [
      {
        heading: "He is fully God",
        body:
          "John opens with two truths side by side: 'In the beginning was the Word, and the Word was with God, and the Word was God,' and Paul says that 'in him all the fullness of the Godhead dwells bodily.' He is 'the image of the invisible God,' the one through whom all things were created, 'the radiance of his glory' and 'the very image of his substance.' To Abraham He said, 'before Abraham came into existence, I AM,' taking the divine name for Himself.",
        verses: ["John 1:1", "Colossians 2:9", "Colossians 1:15-16", "Hebrews 1:3", "John 8:58"],
      },
      {
        heading: "He is fully man",
        body:
          "'The Word became flesh, and lived among us,' and the child grew, increasing in wisdom and stature and in favor with God and men. Hebrews says He shared in flesh and blood and was made like His brothers, so that He could become a merciful and faithful high priest. He was hungry after fasting, wept at a grave, and was 'in all points tempted like we are, yet without sin.' He is not a ghost in human clothing; He is a man.",
        verses: ["John 1:14", "Luke 2:52", "Hebrews 2:14", "Hebrews 2:17", "Hebrews 4:15"],
      },
      {
        heading: "He emptied Himself without ceasing to be God",
        body:
          "Paul describes the miracle: being 'in the form of God,' Christ 'didn't consider equality with God a thing to be grasped, but emptied himself, taking the form of a servant... he humbled himself, becoming obedient to death, yes, the death of the cross.' When He washed the disciples' feet, John notes that Jesus knew 'that the Father had given all things into his hands,' and He laid aside His garments and served. The humiliation was real, but it was the act of the One who remained God: He poured Himself out, and He showed what God is like.",
        verses: ["Philippians 2:6-8", "John 13:3-4", "2 Corinthians 8:9", "John 20:28"],
      },
      {
        heading: "Both natures, one Person",
        body:
          "The New Testament never sets the two truths side by side reluctantly; it assumes them at once. 'The Word was God' and 'the Word became flesh' are two clauses of one confession, and there is 'one mediator between God and men, the man Christ Jesus,' who is also 'God was revealed in the flesh.' Thomas fell before the risen man and cried, 'My Lord and my God!' The church has always confessed one Person, Jesus Christ, with two natures: truly God and truly man, without confusion and without division.",
        verses: ["John 1:1", "John 1:14", "1 Timothy 2:5", "1 Timothy 3:16", "John 20:28"],
      },
      {
        heading: "Why it matters: our salvation and our hope",
        body:
          "Only God could bear the weight of sin and save us; only a man could stand in our place and die our death. Paul says that by the trespass of one man death reigned, 'so much more will those who receive the abundance of grace and of the gift of righteousness reign in life through the one, Jesus Christ.' Because He is our brother, He is a merciful high priest who helps the tempted; because He is God, His one offering avails for all. 'Though he was rich, yet for your sakes he became poor, that you through his poverty might become rich': the whole gospel stands on this one Person, fully God and fully man.",
        verses: ["Romans 5:15-17", "Hebrews 4:15-16", "Hebrews 2:17-18", "Galatians 4:4-5", "2 Corinthians 8:9"],
      },
    ],
    keyVerses: ["John 1:14", "Philippians 2:6-7", "Colossians 2:9", "Hebrews 4:15", "1 Timothy 2:5"],
    raises: ["why-did-god-become-a-man", "who-is-jesus", "is-jesus-really-god"],
    followsFrom: ["why-is-jesus-both-son-of-god-and-son-of-man", "who-is-jesus"],
    related: ["is-jesus-really-god", "why-did-god-become-a-man", "does-jesus-sharing-gods-nature-mean-two-gods", "can-we-understand-the-trinity"],
    planned: ["What does it mean that Jesus is both our brother and our Lord?"],
    order: 27,
  },

  {
    slug: "what-does-the-creed-mean-by-he-descended-into-hell",
    question: "What does the creed mean by 'he descended into hell'?",
    category: "jesus-christ",
    summary:
      "The Apostles' Creed says Jesus 'descended into hell,' but the word behind it is Hades, the realm of the dead, not the final lake of fire. Scripture's emphasis is that Christ really died, really entered the place of the dead, and was not abandoned there: He rose victorious. The line confesses the completeness of His death and the depth of His victory.",
    passages: [
      {
        book: "Acts",
        chapter: 2,
        title: "Peter preaches the resurrection",
        lookFor: "Peter quotes David: God would not leave His Holy One in Hades, and he says this was fulfilled when God raised Jesus up.",
        focus: "22-36",
      },
      {
        book: "Ephesians",
        chapter: 4,
        title: "He who descended also ascended",
        lookFor: "Paul ties the giving of gifts to a descent and an ascent. What does the descent mean, and where did it reach?",
        focus: "7-10",
      },
      {
        book: "1 Peter",
        chapter: 3,
        title: "Preaching to the spirits in prison",
        lookFor: "The most debated lines on this subject: what did Christ do between His death and resurrection?",
        focus: "18-22",
      },
      {
        book: "Luke",
        chapter: 23,
        title: "The crucifixion",
        lookFor: "Watch the final hours: 'today you will be with me in Paradise' and 'Father, into your hands I commit my spirit.'",
        focus: "32-46",
      },
    ],
    points: [
      {
        heading: "What the creed says: He went to Hades, the realm of the dead",
        body:
          "The creed's 'descended into hell' translates the earlier 'descended into Hades,' the realm of the dead, what the Old Testament calls Sheol. Paul says that the Christ who ascended 'first descended into the lower parts of the earth,' and Jesus compared His own death to Jonah's three days and nights 'in the heart of the earth.' The confession testifies that His death was real: He did not merely appear to die; He went where the dead go.",
        verses: ["Ephesians 4:9-10", "Matthew 12:40"],
      },
      {
        heading: "Hades is the grave and the realm of the dead, not the final hell",
        body:
          "Peter's Pentecost sermon quotes David: 'You will not leave my soul in Hades,' and he applies it to Christ. Like Sheol, Hades in the New Testament is the place of the dead, sometimes pictured with the ungodly in torment and the righteous in comfort; it is not the lake of fire at the final judgment. Jesus Himself told the dying thief, 'Today you will be with me in Paradise,' and in the same hour committed His spirit into His Father's hands. Death was not heaven for Him then; it was the doorway through which He trusted His Father.",
        verses: ["Acts 2:27", "Psalm 16:10", "Luke 23:43", "Luke 23:46"],
      },
      {
        heading: "He was not held there; He rose holding the keys",
        body:
          "Peter says God raised Him up, 'having freed him from the agony of death, because it was not possible that he should be held by it.' Death did its worst and could not contain Him. The risen Christ announces, 'I was dead, and behold, I am alive forever more... I have the keys of Death and of Hades.' The descent is not a defeat; it is the moment in the heart of the earth before the grave gave way.",
        verses: ["Acts 2:24", "Acts 2:31", "Revelation 1:18"],
      },
      {
        heading: "What about 'the spirits in prison'?",
        body:
          "First Peter says the Spirit-anointed Christ 'went and preached to the spirits in prison,' the disobedient of the days of Noah, and 1 Peter 4 adds that the gospel 'was preached even to the dead.' Interpreters differ: some hear a proclamation of victory to fallen spirits, others an offer of grace to the dead, and the church has never made one reading a test of faith. What is certain from the whole passage is that after His death Christ was active, triumphant, and 'at the right hand of God… angels and authorities and powers being made subject to him.'",
        verses: ["1 Peter 3:18-22", "1 Peter 4:6"],
      },
      {
        heading: "The point is the completeness of His victory",
        body:
          "Hebrews says He shared our flesh and blood 'that through death he might bring to nothing him who had the power of death, that is, the devil.' Paul pictures the cross itself as the triumph: Christ 'stripped the principalities and the powers, he made a show of them openly, triumphing over them in it.' The descent into Hades tells us how low love went to save us, and the resurrection tells us how complete the victory is. That is why the creed does not end in the tomb; it moves from 'descended into hell' straight to the third day and the resurrection.",
        verses: ["Hebrews 2:14-15", "Colossians 2:15", "Romans 10:6-7"],
      },
    ],
    keyVerses: ["Acts 2:27", "Acts 2:31", "Ephesians 4:9-10", "Hebrews 2:14-15", "Revelation 1:18"],
    raises: ["between-the-cross-and-the-resurrection", "did-jesus-rise-from-the-dead"],
    followsFrom: ["why-did-jesus-have-to-die", "between-the-cross-and-the-resurrection"],
    related: ["between-the-cross-and-the-resurrection", "did-jesus-rise-from-the-dead", "where-is-jesus-now", "what-happens-when-i-die"],
    planned: ["Why does the Bible call death a sleep?"],
    order: 28,
  },

  {
    slug: "what-is-hell",
    question: "What is hell?",
    category: "who-we-are",
    summary:
      "Hell is the place God has appointed for the devil, his angels, and all who are not written in the book of life: eternal punishment described in Scripture as fire, darkness, destruction, and the second death. Jesus spoke of it more than anyone, so we cannot treat it as an embarrassment or an exaggeration. Its reality is terrible, and that is exactly why the gospel is such good news.",
    passages: [
      {
        book: "Matthew",
        chapter: 25,
        title: "The King separates the sheep and the goats",
        lookFor: "The King's sentence to those on the left: 'the eternal fire which is prepared for the devil and his angels.'",
        focus: "31-46",
      },
      {
        book: "Mark",
        chapter: 9,
        title: "The cost of sin",
        lookFor: "The strongest language in all the Gospels: Gehenna, the unquenchable fire, the worm that does not die.",
        focus: "43-48",
      },
      {
        book: "Luke",
        chapter: 16,
        title: "The rich man and Lazarus",
        lookFor: "A window into the afterlife: comfort and torment, and a great gulf fixed between them.",
        focus: "19-31",
      },
      {
        book: "Revelation",
        chapter: 20,
        title: "The great white throne",
        lookFor: "The lake of fire, the second death, and who is written in the book of life.",
        focus: "11-15",
      },
    ],
    points: [
      {
        heading: "Jesus spoke of it more than anyone",
        body:
          "The word Jesus used most was Gehenna, the valley outside Jerusalem whose history of judgment made it a picture of God's final wrath. He said it is better to enter life maimed than to be cast 'into Gehenna, into the unquenchable fire, where their worm doesn't die and the fire is not quenched,' and He warned against anger and lust in the same terms. He spoke this way because He loved people enough to tell them the truth about where sin leads.",
        verses: ["Mark 9:43-48", "Matthew 5:22", "Matthew 5:29-30"],
      },
      {
        heading: "The Bible's pictures: fire, darkness, destruction",
        body:
          "Scripture piles image upon image to make us feel the weight: the 'eternal fire' prepared for the devil and his angels, the 'outer darkness' where there is 'weeping and gnashing of teeth,' and 'eternal destruction from the face of the Lord.' Each picture is a different angle on the same reality: separation from God's presence and blessing, experienced by a person who was made to know Him.",
        verses: ["Matthew 25:41", "Matthew 8:12", "2 Thessalonians 1:9"],
      },
      {
        heading: "It is for the devil and his angels, and for the unrighteous",
        body:
          "Hell was not made for people; Jesus calls it the fire 'prepared for the devil and his angels.' But those who love unrighteousness share the destination: everyone 'not found written in the book of life' is cast into the lake of fire. In the story of the rich man, there is torment, thirst, memory, and a 'great gulf fixed' that no one can cross. It is a place of conscious separation, of anguish, and of regret.",
        verses: ["Matthew 25:41", "Revelation 20:15", "Luke 16:23-26", "Revelation 21:8"],
      },
      {
        heading: "It is eternal: the second death",
        body:
          "Revelation calls the lake of fire 'the second death,' and Jesus says the condemned 'will go away into eternal punishment' just as the righteous enter 'eternal life': the same word modifies both destinies. Daniel saw those who awake 'to shame and everlasting contempt.' Scripture means an endless ruin, not a quick end; judgment carries the weight of the infinite One who is rejected.",
        verses: ["Revelation 20:14-15", "Matthew 25:46", "Daniel 12:2", "Revelation 21:8"],
      },
      {
        heading: "God does not delight in it; that is why the gospel is urgent",
        body:
          "God declares, 'I have no pleasure in the death of the wicked,' and Peter says He is patient, 'not wishing that any should perish, but that all should come to repentance.' He 'desires all people to be saved.' Hell is real, and its reality is the measure of the rescue: the cross is where Jesus bore what our sins deserved, so that whoever believes in Him 'should not perish, but have eternal life.' We flee from the wrath to come by running to the One who was judged in our place.",
        verses: ["Ezekiel 33:11", "2 Peter 3:9", "1 Timothy 2:4", "John 3:16"],
      },
    ],
    keyVerses: ["Matthew 25:41", "Mark 9:47-48", "Revelation 20:15", "Luke 16:24", "2 Thessalonians 1:9"],
    raises: ["what-is-the-final-judgment-and-who-will-be-there", "how-does-god-judge-people-who-never-heard-of-jesus", "what-happens-when-i-die", "what-is-hell-eternal-punishment-or-annihilation"],
    followsFrom: ["does-everyone-deserve-gods-judgment", "what-is-sin"],
    related: ["what-is-the-final-judgment-and-who-will-be-there", "does-everyone-deserve-gods-judgment", "why-did-jesus-have-to-die", "what-is-the-new-heaven-and-new-earth"],
    planned: [],
    order: 50,
  },

  {
    slug: "what-is-the-final-judgment-and-who-will-be-there",
    question: "What is the final judgment, and who will be there?",
    category: "jesus-christ",
    summary:
      "On the last day every person will stand before the judgment seat of Christ, and the Judge on the throne is Jesus. The books are opened: what each person has done, and whether that name is written in the book of life. For those in Christ, judgment is not condemnation but the revealing of redeemed lives and their reward; for the rest, it is the just sentence of the King. Everyone will be there, and everyone will be fully known.",
    passages: [
      {
        book: "Revelation",
        chapter: 20,
        title: "The great white throne",
        lookFor: "The dead, great and small, stand before the throne; books are opened, and the book of life is opened too.",
        focus: "11-15",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "Judgment by the Lord",
        lookFor: "We must all appear before the judgment seat of Christ, to receive what is due for what was done in the body.",
        focus: "1-10",
      },
      {
        book: "Matthew",
        chapter: 25,
        title: "The Son of Man in glory",
        lookFor: "The same Jesus who was judged in our place now sits as Judge, separating the nations as a shepherd separates the sheep from the goats.",
        focus: "31-46",
      },
      {
        book: "Romans",
        chapter: 2,
        title: "The righteous judgment of God",
        lookFor: "Paul insists God judges by truth and without partiality, and that the day comes by Christ Jesus.",
        focus: "1-16",
      },
    ],
    points: [
      {
        heading: "Everyone will stand before the Judge",
        body:
          "Paul writes that 'we must all be revealed before the judgment seat of Christ,' and to the Romans: 'we will all stand before the judgment seat of Christ... each one of us will give account of himself to God.' Revelation sees 'the dead, the great and the small, standing before the throne,' with the sea, Death, and Hades giving up their dead. No one is exempt, no one is forgotten, and no one can change the record.",
        verses: ["2 Corinthians 5:10", "Romans 14:10-12", "Revelation 20:12-13", "Hebrews 9:27"],
      },
      {
        heading: "The Judge is Jesus Christ",
        body:
          "The Father 'has given all judgment to the Son,' and gave Him authority 'to execute judgment, because he is a son of man.' Paul told Athens that God 'has appointed a day in which he will judge the world in righteousness by the man whom he has ordained.' The One who was judged for sinners is the One who judges: the Shepherd-King of Matthew 25 sits on the throne of His glory with all the nations gathered before Him.",
        verses: ["John 5:22-27", "Acts 17:31", "2 Timothy 4:1", "Matthew 25:31-32"],
      },
      {
        heading: "The books are opened",
        body:
          "Daniel saw 'the judgment was set, and the books were opened,' and John sees the same: 'they opened books. Another book was opened, which is the book of life. The dead were judged out of the things which were written in the books, according to their works.' The works are read because deeds reveal what a life actually was; the book of life is read because salvation is a gift, not a wage. Both books are open, and God misses nothing.",
        verses: ["Daniel 7:10", "Revelation 20:12-13"],
      },
      {
        heading: "For those in Christ: judgment without condemnation",
        body:
          "Jesus said plainly that whoever hears His word and believes the Father 'has eternal life, and doesn't come into judgment, but has passed out of death into life.' For believers the judgment seat is still real: Paul says each man's work will be tested by fire, and though it may be burned up, 'he himself will be saved, but as through fire.' There is no condemnation for those in Christ Jesus; the question at the judgment seat is not whether we are His, but how His grace was spent.",
        verses: ["John 5:24", "Romans 8:1", "1 Corinthians 3:10-15"],
      },
      {
        heading: "The sentence is just, and it reveals the heart",
        body:
          "The King separates the sheep from the goats by what was done 'to one of the least of these my brothers': the love that faith produced. Paul says God will pay back everyone according to their works, and James insists that faith without works is dead. Judgment is not a surprise test; it is the exposure of what was truly loved. That is why the summons is urgent: now God 'commands that all people everywhere should repent,' because He has fixed the day and has given the assurance of it in the resurrection of Christ.",
        verses: ["Matthew 25:34-46", "Romans 2:5-6", "James 2:14-17", "Acts 17:30-31"],
      },
    ],
    keyVerses: ["2 Corinthians 5:10", "John 5:22", "Revelation 20:12", "Romans 14:12", "Matthew 25:32"],
    raises: ["what-is-hell", "what-is-the-resurrection", "what-happens-when-i-die", "what-will-believers-be-rewarded-for-if-salvation-is-by-grace-alone"],
    followsFrom: ["is-the-son-of-man-title-judgment-or-mercy", "what-is-hell"],
    related: ["is-the-son-of-man-title-judgment-or-mercy", "what-is-hell", "does-everyone-deserve-gods-judgment", "what-is-justification"],
    planned: [],
    order: 29,
  },

  {
    slug: "what-is-the-unpardonable-sin",
    question: "What is the unpardonable sin?",
    category: "holy-spirit",
    summary:
      "Blasphemy against the Holy Spirit is what Jesus called the sin that will not be forgiven: seeing the Spirit's clear witness to Christ and calling it the work of the devil. It is not a careless word; it is a settled, final rejection of the only One who can forgive. The very fear that you have committed it is itself strong evidence that you have not.",
    passages: [
      {
        book: "Matthew",
        chapter: 12,
        title: "Jesus accused of casting out demons by Beelzebul",
        lookFor: "The context of the warning: the Spirit's power is called satanic to Jesus' face.",
        focus: "22-37",
      },
      {
        book: "Mark",
        chapter: 3,
        title: "The unforgivable sin",
        lookFor: "Mark gives the saying in its rawest form, with the reason attached: they said He had an unclean spirit.",
        focus: "20-30",
      },
      {
        book: "Hebrews",
        chapter: 6,
        title: "The danger of falling away",
        lookFor: "Those once enlightened who fall away: why renewal is impossible, and what that means for us.",
        focus: "4-12",
      },
      {
        book: "1 John",
        chapter: 5,
        title: "A sin leading to death",
        lookFor: "John distinguishes a sin that leads to death from a sin that does not.",
        focus: "14-21",
      },
    ],
    points: [
      {
        heading: "The scene: the Spirit's work called evil",
        body:
          "Jesus healed a demon-possessed man by the Spirit of God, and the Pharisees said, 'This man does not cast out demons, except by Beelzebul, the prince of the demons.' Jesus answered that if He cast out demons by the Spirit, 'the Kingdom of God has come upon you.' The religious leaders were not confused; they could see the Spirit's fingerprint on Jesus, and they named it as the devil.",
        verses: ["Matthew 12:24-28", "Mark 3:22-23", "Matthew 12:28"],
      },
      {
        heading: "The warning: the Spirit's witness rejected is unforgivable",
        body:
          "Jesus said, 'every sin and blasphemy will be forgiven men, but the blasphemy against the Spirit will not be forgiven men.' Speaking against the Son of Man can be forgiven, 'but whoever speaks against the Holy Spirit, it will not be forgiven him, neither in this age, nor in that which is to come.' Mark's version adds the bitter reason: 'because they said, he has an unclean spirit.' The sin is not any insult; it is the determined refusal of the Spirit's testimony that Jesus is Lord.",
        verses: ["Matthew 12:31-32", "Mark 3:28-30"],
      },
      {
        heading: "Why it cannot be forgiven: it rejects the only way",
        body:
          "Hebrews describes people who were once enlightened and tasted the good word of God, then fell away: 'it is impossible to renew them again to repentance; seeing they crucify the Son of God for themselves again, and put him to open shame.' A person can only be forgiven through the Christ the Spirit reveals; to blaspheme the Spirit is to insist the witness is a lie, and so to cut oneself off from the only source of cleansing. There remains 'no more a sacrifice for sins,' because the only sacrifice stands rejected.",
        verses: ["Hebrews 6:4-6", "Hebrews 10:26-29"],
      },
      {
        heading: "It is final rejection, not a random mistake or a struggle",
        body:
          "John writes that there is 'a sin leading to death' and 'a sin not leading to death,' and Stephen's accusers were stiff-necked, always resisting the Holy Spirit. The Spirit's own work is to 'convict the world about sin, about righteousness, and about judgment'; to resist Him again and again is to close the door to the only light. A passing doubt, a bitter word, an angry heart: none of these is the unpardonable sin, because none of them is a settled sentence against the Spirit's testimony.",
        verses: ["1 John 5:16-17", "Acts 7:51", "John 16:8-11"],
      },
      {
        heading: "If you fear you have committed it, you probably have not",
        body:
          "Those who have finally rejected the Spirit do not agonize over His work; they have stopped caring. The person who fears they have blasphemed the Spirit is, in that very moment, being convicted by the Spirit about sin and righteousness. Hebrews is written to reassure its readers: 'we are persuaded of better things for you, and things that accompany salvation,' and it urges them to press on to the end. The Spirit is still working in you; receive His witness to Christ, and the door is not shut.",
        verses: ["Hebrews 6:9-12", "1 John 5:13", "John 16:8", "1 John 5:16"],
      },
    ],
    keyVerses: ["Matthew 12:31-32", "Mark 3:29", "Hebrews 6:4-6", "1 John 5:16", "John 16:8"],
    raises: ["can-i-lose-my-salvation", "how-does-the-spirit-convict-the-world", "can-gods-grace-really-cover-my-worst-sins", "what-is-the-difference-between-resisting-and-grieving-the-spirit"],
    followsFrom: ["why-jesus-calls-the-spirit-another-helper", "who-is-the-holy-spirit"],
    related: ["why-jesus-calls-the-spirit-another-helper", "can-i-lose-my-salvation", "how-does-the-spirit-convict-the-world", "can-gods-grace-really-cover-my-worst-sins"],
    planned: [],
    order: 26,
  },

  {
    slug: "how-does-gods-love-differ-from-human-love",
    question: "How does God's love differ from human love?",
    category: "god-the-father",
    summary:
      "Human love is often conditional, fickle, and spent on what is already lovable. God's love is the opposite: it chose us when we were unlovely, it never fails, and it disciplines for our good. John's whole point is that God does not merely love in the way we do; He is the source of love, and our loving is a faint reflection of His.",
    passages: [
      {
        book: "Hosea",
        chapter: 11,
        title: "The Father's heart for His wayward child",
        lookFor: "God's love for Israel that will not give up: 'How can I give you up, Ephraim?'",
        focus: "1-11",
      },
      {
        book: "1 John",
        chapter: 4,
        title: "God is love",
        lookFor: "John's great chapter on love's origin: we love because He first loved us.",
        focus: "7-21",
      },
      {
        book: "Romans",
        chapter: 5,
        title: "Love while we were enemies",
        lookFor: "The demonstration of love: Christ died for the ungodly, while we were still sinners.",
        focus: "1-11",
      },
      {
        book: "Luke",
        chapter: 15,
        title: "The waiting father",
        lookFor: "The father who runs to his son: the very picture of God's love for the undeserving.",
        focus: "11-32",
      },
    ],
    points: [
      {
        heading: "God's love is unconditional; it does not wait to be earned",
        body:
          "Moses told Israel that God did not choose them because they were great, 'but because Yahweh loves you.' Jeremiah heard the same heart: 'I have loved you with an everlasting love.' In the parable, the father loves the younger son before the son has said a word of repentance; he saw him 'while he was still far off' and ran to meet him. God's love is not a reward; it is a choice He made in Himself.",
        verses: ["Deuteronomy 7:7-8", "Jeremiah 31:3", "Luke 15:20", "Luke 15:22"],
      },
      {
        heading: "It initiates while we are still sinners and enemies",
        body:
          "Paul writes that Christ died for the ungodly, and 'God commends his own love toward us, in that while we were yet sinners, Christ died for us.' John says, 'In this is love, not that we loved God, but that he loved us, and sent his Son as the atoning sacrifice for our sins,' and that we were dead through our trespasses when He made us alive. Human love is usually a response to something attractive; God's love is the cause, not the effect, of our being loved.",
        verses: ["Romans 5:6-8", "1 John 4:10", "Ephesians 2:4-5", "1 John 4:19"],
      },
      {
        heading: "It is faithful; it does not fail or fade",
        body:
          "Lamentations says, 'It is because of Yahweh's loving kindnesses that we are not consumed... They are new every morning; great is your faithfulness.' Paul is persuaded that nothing, neither death nor life nor anything in all creation, 'will be able to separate us from the love of God, which is in Christ Jesus our Lord.' Hosea's God cannot give up Ephraim: 'How can I give you up? ... my compassion is aroused.' Human love can grow cold or run out; God's love is the one thing that never will.",
        verses: ["Lamentations 3:22-23", "Romans 8:38-39", "Hosea 11:8-9", "Psalm 103:13"],
      },
      {
        heading: "It disciplines for our good, which love must do",
        body:
          "Hebrews quotes the Father's words: 'My son, don't take lightly the chastening of the Lord... For whom the Lord loves, he chastens, and scourges every son whom he receives,' and it warns that to be without discipline is to be treated as an intruder, not as a child. Human love that never corrects is indulgence, not love; God's love cares enough about who we become to train us in holiness. The same hand that holds us is the hand that shapes us.",
        verses: ["Hebrews 12:5-6", "Hebrews 12:8", "Proverbs 3:11-12"],
      },
      {
        heading: "God is the source; our love is the reflection",
        body:
          "John's logic runs one way: 'God is love,' and everyone who loves 'has been born of God, and knows God,' while 'we love him, because he first loved us.' The Father's love is the very ground of our identity: 'See how great a love the Father has bestowed on us, that we should be called children of God!' We do not climb up to a god who barely tolerated us; we are welcomed into a family whose Father runs to meet us, and whose love gave His one and only Son so that whoever believes 'should not perish, but have eternal life.'",
        verses: ["1 John 4:7-8", "1 John 4:19", "1 John 3:1", "John 3:16"],
      },
    ],
    keyVerses: ["Romans 5:8", "1 John 4:10", "Jeremiah 31:3", "Romans 8:39", "Hebrews 12:6"],
    raises: ["what-does-it-mean-that-god-is-love", "who-is-the-father", "made-for-relationship", "how-can-i-know-gods-affection-for-me-is-real"],
    followsFrom: ["who-is-the-father", "what-does-it-mean-that-god-is-love"],
    related: ["who-is-the-father", "what-does-it-mean-that-god-is-love", "made-for-relationship", "how-can-i-be-saved"],
    planned: [],
    order: 23,
  },

  {
    slug: "what-is-speaking-in-tongues-and-is-it-for-today",
    question: "What is speaking in tongues, and is it for today?",
    category: "holy-spirit",
    summary:
      "At Pentecost, tongues were Spirit-given speech in languages the speakers had not learned, so that everyone heard 'the mighty works of God' in his own language. Paul treats tongues as one gift among many, to be used for building the church, ordered and interpreted in the assembly. Whether the sign gifts continue today is a question on which faithful Christians differ, but the Bible's priorities are clear: love is greater, and everything is for edification.",
    passages: [
      {
        book: "Acts",
        chapter: 2,
        title: "Pentecost",
        lookFor: "The first tongues: ordinary Galileans praised God in the languages of every nation present.",
        focus: "1-21",
      },
      {
        book: "1 Corinthians",
        chapter: 12,
        title: "Gifts of the Spirit",
        lookFor: "Tongues and their interpretation listed among the gifts, all distributed by the one Spirit as He wills.",
        focus: "4-11",
      },
      {
        book: "1 Corinthians",
        chapter: 14,
        title: "Prophecy and tongues in the church",
        lookFor: "Paul's priorities: edification for all, order in worship, and love as the goal.",
        focus: "1-25",
      },
      {
        book: "Acts",
        chapter: 10,
        title: "The Spirit falls on Gentiles",
        lookFor: "The same gift marks the Gentiles: evidence that they had received the Spirit just as the Jews had.",
        focus: "44-48",
      },
    ],
    points: [
      {
        heading: "At Pentecost, tongues were real languages",
        body:
          "The disciples 'began to speak with other languages, as the Spirit gave them the ability to speak,' and the pilgrims from every nation were bewildered, 'because everyone heard them speaking in his own language.' They heard the speakers declare 'the mighty works of God' in the languages of Parthians, Medes, Egyptians, Romans, and Cretans. These were not ecstatic noises; they were known human languages, given by the Spirit so the gospel could be heard.",
        verses: ["Acts 2:4-11", "Acts 2:6", "Acts 2:8"],
      },
      {
        heading: "Tongues is one gift among many, from the same Spirit",
        body:
          "Paul lists 'different kinds of languages' and 'the interpretation of languages' alongside prophecy and healings: 'the one and the same Spirit works all of these, distributing to each one separately as he desires.' His rhetorical questions make the point: 'Do all speak with various languages? Do all interpret?' No gift is mandatory for every believer, and none is proof of the Spirit's arrival: the same Spirit gives, and He gives 'as he desires', to whomever He wills.",
        verses: ["1 Corinthians 12:8-11", "1 Corinthians 12:29-30", "1 Corinthians 12:11"],
      },
      {
        heading: "Its purposes: a sign to unbelievers and prayer to God",
        body:
          "Paul says the one who speaks in a tongue 'speaks not to men, but to God... in the Spirit he speaks mysteries,' and that tongues are 'a sign, not to those who believe, but to the unbelieving,' fulfilling Isaiah's word about speaking to this people 'with stammering lips and in another language.' He prays and sings 'with the spirit' and 'with the understanding also,' insisting that the mind not be left unfruitful. The gift is real, and it is also bounded: it serves faith, and it is not its own end.",
        verses: ["1 Corinthians 14:2-4", "1 Corinthians 14:22", "Isaiah 28:11", "1 Corinthians 14:14-15"],
      },
      {
        heading: "In the assembly: ordered, limited, interpreted",
        body:
          "Paul's rule is stark: 'Let all things be done to build each other up,' with at most two or three speaking and one interpreting, and 'if there is no interpreter, let him keep silent in the assembly.' God is 'not a God of confusion, but of peace.' Whatever place tongues has in private prayer, the public worship of the church is the arena of the understandable word, so that even outsiders can hear and say that God is really among you.",
        verses: ["1 Corinthians 14:26-28", "1 Corinthians 14:33", "1 Corinthians 14:23-25"],
      },
      {
        heading: "Is it for today? The text's priorities endure",
        body:
          "Paul says love never fails and that tongues 'will cease' when that which is complete has come. Whether that fullness has arrived now or awaits Christ's return is debated among faithful believers who read the same chapters. What is not debated is the text's priority: the gift must be tested, love must govern, and everything must build the church. So the practical answer is the biblical one: pursue love, desire the greater gifts, and let the Spirit's own order rule the church.",
        verses: ["1 Corinthians 13:8-10", "1 Corinthians 12:11", "1 Corinthians 13:1", "Hebrews 2:4"],
      },
    ],
    keyVerses: ["Acts 2:4-8", "1 Corinthians 14:2-4", "1 Corinthians 13:8-9", "1 Corinthians 12:11", "1 Corinthians 14:26"],
    raises: ["are-sign-gifts-active", "what-does-it-mean-to-pray-in-the-holy-spirit", "discovering-my-gift"],
    followsFrom: ["what-does-it-mean-to-be-baptized-with-the-holy-spirit", "who-is-the-holy-spirit"],
    related: ["are-sign-gifts-active", "what-does-it-mean-to-be-baptized-with-the-holy-spirit", "what-are-spiritual-gifts", "what-does-it-mean-to-pray-in-the-holy-spirit"],
    planned: ["How should a church decide which gifts to pursue in worship?"],
    order: 27,
  },

  {
    slug: "what-did-jesus-teach-about-the-kingdom-of-god",
    question: "What did Jesus teach about the kingdom of God?",
    category: "jesus-christ",
    summary:
      "Jesus' first message was a single announcement: 'Repent! For the Kingdom of Heaven is at hand.' He taught that the kingdom is God's reign breaking into the world in Him, arriving in word and deed, growing secretly like seed, and coming fully only at the end of the age. Entering it requires repentance and childlike faith, and everything He said about it orbits one center: the King is among us.",
    passages: [
      {
        book: "Matthew",
        chapter: 13,
        title: "The kingdom parables",
        lookFor: "Jesus teaches in parables: the sower, the weeds, the mustard seed, the hidden treasure, and the net.",
      },
      {
        book: "Mark",
        chapter: 4,
        title: "More kingdom parables",
        lookFor: "The seed growing secretly: the kingdom's quiet, unstoppable growth toward harvest.",
      },
      {
        book: "Luke",
        chapter: 17,
        title: "When the kingdom comes",
        lookFor: "'The Kingdom of God is within you,' and the day when it is revealed like lightning from one end of heaven to the other.",
        focus: "20-37",
      },
      {
        book: "Luke",
        chapter: 19,
        title: "The nobleman who went to receive a kingdom",
        lookFor: "The king goes away and returns: the kingdom is present now, but it will come in full.",
        focus: "11-27",
      },
    ],
    points: [
      {
        heading: "The kingdom is God's reign, present in Jesus",
        body:
          "Jesus came preaching, 'Repent! For the Kingdom of Heaven is at hand,' and He told the Pharisees, 'The Kingdom of God doesn't come with observation... for behold, the Kingdom of God is within you.' When He cast out demons 'by the Spirit of God,' He drew the conclusion: 'the Kingdom of God has come upon you.' The kingdom is not a territory or a program; it is the reign of God arriving wherever the King is at work.",
        verses: ["Matthew 4:17", "Luke 17:20-21", "Matthew 12:28"],
      },
      {
        heading: "It arrives in word and deed",
        body:
          "Jesus answered John's messengers with the kingdom's evidence: 'the blind receive their sight, the lame walk, the lepers are cleansed, the deaf hear, the dead are raised up, and the poor have good news preached to them.' Matthew sums up His rounds: teaching in the synagogues, 'preaching the Good News of the Kingdom, and healing every disease and every sickness.' The kingdom speaks and it acts; it forgives sin and it bends creation back toward its Maker.",
        verses: ["Luke 7:22", "Matthew 9:35", "Matthew 4:23"],
      },
      {
        heading: "It grows like seed: small, hidden, certain",
        body:
          "The kingdom 'is like a grain of mustard seed,' the smallest of seeds that grows into a tree where birds lodge; it is like yeast that leavens the whole lump; it is a treasure hidden in a field and a pearl of great price for which a man sells all he has. Jesus tells this so His followers will not despise small beginnings: the seed springs up and grows while the farmer sleeps, 'he doesn't know how,' until the harvest comes. The weeds grow with the wheat until the end; the harvest is the King's, and it cannot fail.",
        verses: ["Matthew 13:31-33", "Matthew 13:44-46", "Mark 4:26-29", "Matthew 13:24-30"],
      },
      {
        heading: "It has come, and it is still coming",
        body:
          "Jesus taught His disciples to pray, 'Let your Kingdom come,' even as He told the Pharisees it had already come upon them. He told the parable of the nobleman who went 'to receive for himself a kingdom, and to return' because His disciples supposed the kingdom would appear immediately. The kingdom is present in the King's works and in His church now, and it will be revealed in glory at His return, when the King separates the sheep from the goats.",
        verses: ["Matthew 6:10", "Matthew 12:28", "Luke 19:11-12", "Matthew 25:31-34"],
      },
      {
        heading: "Entrance is by repentance and childlike faith",
        body:
          "Jesus told Nicodemus, 'unless one is born anew, he can't see the Kingdom of God,' and His disciples, 'unless you turn, and become as little children, you will in no way enter into the Kingdom of Heaven.' He blessed the poor in spirit, 'for theirs is the Kingdom of Heaven,' and received the children with the words, 'whoever doesn't receive the Kingdom of God like a little child, he will in no way enter into it.' The kingdom's door is not raised for the accomplished; it is opened for the humble.",
        verses: ["John 3:3", "John 3:5", "Matthew 18:3", "Matthew 5:3", "Luke 18:16-17"],
      },
    ],
    keyVerses: ["Matthew 4:17", "Luke 17:20-21", "Matthew 13:31-33", "Matthew 18:3", "John 3:3"],
    raises: ["what-is-the-kingdom-of-god", "will-jesus-return-literally", "what-is-the-final-judgment-and-who-will-be-there"],
    followsFrom: ["who-is-jesus", "what-is-the-kingdom-of-god"],
    related: ["what-is-the-kingdom-of-god", "who-is-jesus", "what-does-it-mean-that-jesus-is-the-son-of-david", "is-the-son-of-man-title-judgment-or-mercy"],
    planned: ["How does the kingdom grow in a human heart?"],
    order: 30,
  },

  {
    slug: "how-is-the-new-covenant-different-from-the-old-one",
    question: "How is the new covenant different from the old one?",
    category: "jesus-christ",
    summary:
      "The old covenant was written on stone, conditional on obedience, and broken by its people. The promised new covenant is written on hearts by the Spirit, sealed with the blood of Christ, and founded on the forgiveness of sins that God remembers no more. Its promises are better because its Mediator is better: not a book to keep, but a Savior who keeps us.",
    passages: [
      {
        book: "Jeremiah",
        chapter: 31,
        title: "The promise of a new covenant",
        lookFor: "The Old Testament promise God makes to Israel: a covenant not like the one made at Sinai.",
        focus: "27-34",
      },
      {
        book: "Hebrews",
        chapter: 8,
        title: "The superior covenant",
        lookFor: "Hebrews quotes Jeremiah at length and argues the new covenant is better than the old.",
      },
      {
        book: "Hebrews",
        chapter: 9,
        title: "The blood of the covenant",
        lookFor: "Why a death was needed to inaugurate the new covenant, and how Christ fulfills every shadow.",
        focus: "15-28",
      },
      {
        book: "Luke",
        chapter: 22,
        title: "The institution of the Lord's Supper",
        lookFor: "Jesus takes the cup and calls it 'the new covenant in my blood.'",
        focus: "14-20",
      },
    ],
    points: [
      {
        heading: "The old covenant: law on stone, broken by the people",
        body:
          "Moses read the book of the covenant and sprinkled the people with blood, saying, 'Look, this is the blood of the covenant, which Yahweh has made with you,' and the people answered, 'All that Yahweh has spoken will we do, and be obedient.' But Jeremiah records God's verdict over that history: 'my covenant they broke.' Paul calls that ministry one 'written engraved on stones,' the letter that kills because flesh cannot keep it. The old covenant showed what God requires; it did not give the power to do it.",
        verses: ["Exodus 24:7-8", "Jeremiah 31:32", "2 Corinthians 3:6-7", "2 Corinthians 3:3"],
      },
      {
        heading: "The promise: the law written on hearts",
        body:
          "Jeremiah's new covenant is inward: 'I will put my law in their inward parts, and in their heart will I write it; and I will be their God, and they shall be my people.' Everyone will know the Lord, 'from their least to their greatest,' because the knowledge will no longer depend on teachers alone. Hebrews quotes these very verses as the shape of the covenant Christ inaugurated: a people whose God is with them, written from the inside out.",
        verses: ["Jeremiah 31:33-34", "Hebrews 8:10-12", "2 Corinthians 3:3"],
      },
      {
        heading: "Better promises, better Mediator, better sacrifice",
        body:
          "Christ is 'the mediator of a better covenant, which on better promises has been given as law,' and His ministry is more excellent than the Levitical one. The old sacrifices purified copies of heavenly things, but the heavenly things themselves needed better sacrifices, which Christ offered once, 'to put away sin by the sacrifice of himself.' Where the high priest entered year by year with blood not his own, Christ entered once into heaven itself, 'now to appear in the presence of God for us.'",
        verses: ["Hebrews 8:6", "Hebrews 9:23-26", "Hebrews 9:24", "Hebrews 9:28"],
      },
      {
        heading: "Sealed by blood: His blood, at the cross",
        body:
          "At the Supper Jesus took the cup and said, 'This cup is the new covenant in my blood, which is poured out for you,' and Paul repeats the words by the Lord's own authority. Hebrews explains the necessity: 'a death has occurred for the redemption of the transgressions that were under the first covenant,' for the law warns that 'apart from shedding of blood there is no remission.' The old covenant was sealed with the blood of animals; the new is sealed with the blood of the Son, and so its forgiveness is final: 'there is no more offering for sin.'",
        verses: ["Luke 22:20", "1 Corinthians 11:25", "Hebrews 9:15", "Hebrews 9:22", "Hebrews 10:17-18"],
      },
      {
        heading: "What it gives us: a changed heart, boldness, and assurance",
        body:
          "Because the covenant is inward, Paul says we are letters of Christ, 'written not with ink, but with the Spirit of the living God,' being transformed 'from glory to glory' into His image. Because the veil is torn, we have 'boldness to enter into the holy place by the blood of Jesus,' drawing near with a true heart. And because God says 'I will remember their sins and their iniquities no more,' we are no longer defined by our record but by His mercy. The new covenant is not a better list of rules; it is a new heart, a new standing, and a new certainty.",
        verses: ["2 Corinthians 3:3", "2 Corinthians 3:18", "Hebrews 10:19-22", "Hebrews 10:16-17", "Hebrews 8:12"],
      },
    ],
    keyVerses: ["Jeremiah 31:33-34", "Hebrews 8:10-12", "Luke 22:20", "Hebrews 9:15", "2 Corinthians 3:6"],
    raises: ["what-is-grace", "what-happens-when-i-sin", "can-i-lose-my-salvation"],
    followsFrom: ["how-can-i-be-saved", "why-did-jesus-have-to-die"],
    related: ["how-can-i-be-saved", "what-is-imputation", "what-is-justification", "what-is-grace"],
    planned: ["How does Christ fulfill the law without abolishing it?"],
    order: 31,
  },

  {
    slug: "what-is-the-difference-between-assurance-and-presumption",
    question: "What is the difference between assurance and presumption?",
    category: "our-walk",
    summary:
      "Assurance is the confidence the Spirit gives through God's promise and the fruit He produces in a life that trusts Christ. Presumption is confidence with nothing behind it: a claim to belong to Jesus that a look at the life does not support. The difference is not in the strength of the feeling but in its basis: one rests on the testimony of God, the other on a wish.",
    passages: [
      {
        book: "1 John",
        chapter: 5,
        title: "The testimony of God",
        lookFor: "John explains why we can know: God's testimony about His Son, and the life that testimony gives.",
        focus: "9-21",
      },
      {
        book: "2 Peter",
        chapter: 1,
        title: "Confirming your calling",
        lookFor: "Peter's ladder of growth, and why diligence makes calling and election sure.",
        focus: "3-11",
      },
      {
        book: "Hebrews",
        chapter: 6,
        title: "Confidence in the promise",
        lookFor: "God's unchangeable promise gives strong encouragement to those who have fled for refuge.",
        focus: "9-20",
      },
      {
        book: "James",
        chapter: 2,
        title: "Faith that works",
        lookFor: "James on the faith that saves versus the faith that is no more than a claim.",
        focus: "14-26",
      },
    ],
    points: [
      {
        heading: "Assurance rests on God's testimony, not on our feelings",
        body:
          "John states his purpose plainly: 'These things I have written to you who believe in the name of the Son of God, that you may know that you have eternal life.' The ground is the testimony of God concerning His Son, which the Spirit confirms: 'The Spirit himself testifies with our spirit that we are children of God.' Assurance is not a mood; it is faith leaning on a promise that cannot be broken.",
        verses: ["1 John 5:13", "1 John 5:10-11", "Romans 8:15-16"],
      },
      {
        heading: "Presumption claims what it has not been given",
        body:
          "Jesus warns of people on the last day who say, 'Lord, Lord, didn't we prophesy in your name... do many mighty works?' and He answers, 'I never knew you. Depart from me, you who work iniquity.' A claim to Christ without the will of the Father is presumption, however confident or impressive it sounds. The Pharisee who thanked God he was not like other men went home unjustified; the tax collector who begged for mercy went home forgiven.",
        verses: ["Matthew 7:21-23", "Luke 18:9-14"],
      },
      {
        heading: "Assurance obeys; presumption excuses",
        body:
          "John ties knowing to doing: 'This is how we know that we know him: if we keep his commandments,' and 'whoever says, I know him, and doesn't keep his commandments, is a liar.' James adds that faith without works is dead, and Paul names people who 'profess that they know God, but by their works they deny him.' Assurance produces likeness to the one trusted; presumption produces a slogan. You can tell the difference, over time, by the direction of a life.",
        verses: ["1 John 2:3-4", "1 John 2:6", "James 2:17", "Titus 1:16"],
      },
      {
        heading: "Assurance perseveres; presumption is caught unprepared",
        body:
          "Peter urges us to make our 'calling and election sure' by adding the virtues to faith, promising that when these are yours and abound 'you will never stumble.' The ten virgins are separated by what they actually brought; the foolish find the door shut and hear, 'I don't know you.' Paul's caution cuts both ways: 'let him who thinks he stands be careful that he doesn't fall.' Assurance lives in the present tense of trust; presumption banks on the past.",
        verses: ["2 Peter 1:10-11", "2 Peter 1:5-8", "Matthew 25:1-13", "1 Corinthians 10:12"],
      },
      {
        heading: "The test: believe the promise, examine the fruit",
        body:
          "John gives a threefold test: we know He remains in us 'by the Spirit which he gave us,' we know we have passed out of death into life 'because we love the brothers,' and when our heart condemns us, 'God is greater than our heart.' The anchor is the promise: by two unchangeable things, in which it is impossible for God to lie, we have 'strong encouragement' and 'an anchor of the soul.' If your confidence is built on Christ's finished work and is producing love, it is assurance; if it is built on a wish, repentance is the door to the real thing.",
        verses: ["1 John 3:24", "1 John 3:14", "1 John 3:19-20", "Hebrews 6:18-19"],
      },
    ],
    keyVerses: ["1 John 5:13", "Romans 8:16", "Matthew 7:21-23", "2 Peter 1:10", "1 John 2:3-4"],
    raises: ["spirits-witness-or-my-own-feelings", "how-do-i-know-my-repentance-is-genuine", "can-i-lose-my-salvation"],
    followsFrom: ["can-i-lose-my-salvation", "spirits-witness-or-my-own-feelings"],
    related: ["can-i-lose-my-salvation", "spirits-witness-or-my-own-feelings", "what-is-justification", "is-it-okay-to-doubt"],
    planned: ["How do I test whether my confidence comes from faith or from pride?"],
    order: 33,
  },

  {
    slug: "how-do-i-help-a-friend-who-is-suffering",
    question: "How do I help a friend who is suffering?",
    category: "suffering-will",
    summary:
      "The best help begins with presence, not explanation: Job's friends were right to sit with him in silence, and Jesus wept before He raised Lazarus. Scripture calls us to weep with those who weep, to bear one another's burdens, and to point to the God of all comfort rather than to our theories. Love that stays, listens, serves, and prays is the shape of help God Himself uses.",
    passages: [
      {
        book: "Job",
        chapter: 2,
        title: "The friends who came to comfort",
        lookFor: "Why the seven days of silence were the right beginning, and what they did that was truly kind.",
        focus: "11-13",
      },
      {
        book: "John",
        chapter: 11,
        title: "Jesus at Bethany",
        lookFor: "Jesus at the tomb of a friend: He groans, He weeps, and then He acts.",
        focus: "1-44",
      },
      {
        book: "2 Corinthians",
        chapter: 1,
        title: "The God of all comfort",
        lookFor: "How God's comfort in our own affliction equips us to comfort others in theirs.",
        focus: "3-11",
      },
      {
        book: "Galatians",
        chapter: 6,
        title: "Bearing burdens",
        lookFor: "Restoring the fallen, carrying one another's loads, and doing good without growing weary.",
        focus: "1-10",
      },
    ],
    points: [
      {
        heading: "Presence first: sit with them, like Job's friends at first",
        body:
          "When Job's friends heard of his calamity they came from their own places, and when they saw him they wept aloud, and then 'they sat down with him on the ground seven days and seven nights, and no one spoke a word to him, for they saw that his grief was very great.' That is the model: to show up, to stay, to mourn with the mourner. Paul commands it directly: 'Rejoice with those who rejoice. Weep with those who weep.'",
        verses: ["Job 2:11-13", "Romans 12:15"],
      },
      {
        heading: "Listen before you counsel; resist the rush to explain",
        body:
          "Jesus' comfort at Bethany began with groaning and tears: 'Jesus wept,' and the bystanders read it rightly: 'See how much affection he had for him.' The failure of Job's friends came later, when they traded silence for theories and were told, 'You are all physicians of no value' who had proved that silence would have been wiser. Proverbs warns against answering before hearing, and James says to be 'swift to hear, slow to speak.' Suffering people need to be known before they need to be fixed.",
        verses: ["John 11:33-35", "John 11:36", "Job 13:4-5", "Proverbs 18:13", "James 1:19"],
      },
      {
        heading: "Point to the God of all comfort, not to clichés",
        body:
          "Paul blesses 'the Father of mercies and God of all comfort, who comforts us in all our affliction, that we may be able to comfort those who are in any affliction.' The psalmist sings that the Lord is near to those who have a broken heart, and Peter tells sufferers to cast 'all your worries on him, because he cares for you.' We cannot explain every pain, but we can hand the person to the One who is near and who cares, gently, in our own words, with our own tears mixed in.",
        verses: ["2 Corinthians 1:3-4", "Psalm 34:18", "1 Peter 5:7", "2 Corinthians 1:5"],
      },
      {
        heading: "Serve them practically; carry real burdens",
        body:
          "Galatians commands, 'Bear one another's burdens, and so fulfill the law of Christ,' and James exposes the hollow word: telling the naked and hungry brother 'Go in peace, be warmed and filled' while giving nothing is no love at all. John says our help must be 'in deed and truth,' not in word and tongue. A meal, a ride, a task handled, a visit repeated: these are the words the grieving hear best, because they are spoken with hands.",
        verses: ["Galatians 6:2", "James 2:15-16", "1 John 3:17-18", "Galatians 6:9-10"],
      },
      {
        heading: "Pray with them and keep company over time",
        body:
          "James says, 'Is any among you suffering? Let him pray,' and calls us to pray for one another 'that you may be healed,' because 'the insistent prayer of a righteous person is powerfully effective.' Paul's pattern was to pray without ceasing for those he loved, rejoicing in hope, enduring in troubles, 'continuing steadfastly in prayer.' Suffering is a road, not an event; the friend who stays for the whole road is the friend God uses.",
        verses: ["James 5:13-16", "Romans 12:12", "Colossians 1:9-12", "John 11:33"],
      },
    ],
    keyVerses: ["Job 2:13", "Romans 12:15", "2 Corinthians 1:3-4", "Galatians 6:2", "James 5:16"],
    raises: ["where-is-god-in-my-pain", "what-does-it-look-like-to-suffer-well", "why-does-god-allow-suffering"],
    followsFrom: ["why-does-god-allow-suffering", "where-is-god-in-my-pain"],
    related: ["why-does-god-allow-suffering", "where-is-god-in-my-pain", "what-does-it-look-like-to-suffer-well", "made-for-relationship"],
    planned: ["What should I say to someone who is grieving?"],
    order: 37,
  },

  {
    slug: "does-prayer-change-gods-mind",
    question: "Does prayer change God's mind?",
    category: "prayer",
    summary:
      "God does not change, but He does relate to us in real time, and Scripture repeatedly shows prayer changing what happens. Several prayers in the Bible are answered by an evident turn in God's announced course, and Jeremiah teaches that God's word of warning or promise is conditioned on how people respond. Prayer does not move an unmoved God; it is the appointed means by which a loving God does His moving work.",
    passages: [
      {
        book: "Exodus",
        chapter: 32,
        title: "Moses pleads for Israel",
        lookFor: "God threatens to consume Israel; Moses intercedes, and 'Yahweh repented of the evil which he said he would do.'",
        focus: "7-14",
      },
      {
        book: "Jeremiah",
        chapter: 18,
        title: "The potter and the clay",
        lookFor: "God's explicit rule: He declares judgment or good, and both can be turned by repentance.",
        focus: "1-12",
      },
      {
        book: "Numbers",
        chapter: 14,
        title: "Moses again intercedes",
        lookFor: "The same pattern at the edge of the promised land: judgment announced, intercession, mercy.",
        focus: "11-25",
      },
      {
        book: "Luke",
        chapter: 18,
        title: "The persistent widow",
        lookFor: "Jesus teaches that we must always pray and not give up, and that God will avenge His elect who cry to Him day and night.",
        focus: "1-8",
      },
    ],
    points: [
      {
        heading: "God is unchangeable in His character",
        body:
          "Malachi records the ground of all hope: 'I, Yahweh, don't change; therefore you, sons of Jacob, are not consumed,' and Balaam confesses that God 'is not a man, that he should lie... Has he spoken, and will he not make it good?' James adds that with the Father of lights there is 'no variation, nor turning shadow.' God's nature, His promises, and His love do not fluctuate like moods. That is why prayer is possible at all: we plead with a Person who keeps His word.",
        verses: ["Malachi 3:6", "Numbers 23:19", "James 1:17"],
      },
      {
        heading: "Yet Scripture shows prayer changing what was announced",
        body:
          "After the golden calf, God told Moses He would consume Israel, but Moses pleaded, and 'Yahweh repented of the evil which he said he would do to his people.' Hezekiah was told, 'You will die, and not live,' and after his prayer God answered, 'I have heard your prayer. I have seen your tears. Behold, I will add fifteen years to your life.' Jeremiah's rule explains it: when a nation I spoke to destroy turns from its evil, then 'I will repent of the evil that I thought to do to them.' The announced sentence and the promised blessing are both real, and both are conditioned on the response.",
        verses: ["Exodus 32:10-14", "Isaiah 38:1-5", "Jeremiah 18:7-10", "Ezekiel 33:11"],
      },
      {
        heading: "God has appointed prayer as a real means, not a formality",
        body:
          "James points to Elijah, 'a man with a nature like ours,' who prayed and no rain fell for three years and six months, and prayed again and the sky gave rain; he concludes that 'the insistent prayer of a righteous person is powerfully effective.' Jesus tells the parable of the persistent widow so that His disciples should always pray and not give up, promising that God will avenge His chosen ones 'who are crying out to him day and night.' If prayer were a theater, these texts would be a cruel joke; they are the Father's invitation to be part of His work.",
        verses: ["James 5:16-18", "Luke 18:1-8", "Luke 22:42"],
      },
      {
        heading: "Prayer also changes us",
        body:
          "When we pray, we step into the presence of the One who is sovereign and good, and the shape of our wanting is re-formed. Jesus prayed in Gethsemane, 'Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done,' and He walked to the cross. Paul prayed three times for the removal of his thorn and received grace sufficient to bear it, discovering that weakness is where Christ's power rests. Prayer rarely leaves us where it found us, because it first turns us toward the One who is the answer.",
        verses: ["Luke 22:42", "2 Corinthians 12:7-10", "Philippians 4:6-7", "James 4:6"],
      },
      {
        heading: "Both are true: His will is wise, and our asking matters",
        body:
          "There is no contradiction, because God's will is not a rigid list but a wise plan that includes our prayers. Jesus says, 'Keep asking, and it will be given you,' for the Father gives good gifts to those who ask, and the Spirit Himself helps our weakness, making intercession for us with groanings that cannot be uttered. So pray with confidence: the God who does not change has chosen to answer the cries of His children, and He has never failed anyone who cast their cares on Him.",
        verses: ["Luke 11:9", "Luke 11:13", "Romans 8:26-27", "1 Peter 5:7", "Isaiah 45:11"],
      },
    ],
    keyVerses: ["Exodus 32:14", "Jeremiah 18:7-8", "Malachi 3:6", "James 5:16", "Luke 22:42"],
    raises: ["does-god-change-his-mind", "why-pray-your-will-be-done", "how-do-i-pray"],
    followsFrom: ["why-pray-your-will-be-done", "does-god-change-his-mind"],
    related: ["why-pray-your-will-be-done", "does-god-change-his-mind", "does-god-hear-my-prayers", "how-do-i-know-gods-will"],
    planned: ["If God knows what I need, why ask at all?"],
    order: 40,
  },

  {
    slug: "how-do-we-know-which-books-belong-in-the-bible",
    question: "How do we know which books belong in the Bible?",
    category: "word-of-god",
    summary:
      "The church did not invent the Bible's contents by vote; it recognized the books God had already given and the apostles had already used. The Old Testament Jesus quoted was settled in its shape, and the New Testament books were written and circulated by apostles and their close associates, read aloud in the churches from the first. The canon is a matter of testimony: books the Spirit-breathed witness of the apostles stamped with authority before any council ever met.",
    passages: [
      {
        book: "2 Timothy",
        chapter: 3,
        title: "The sacred writings",
        lookFor: "Paul's own statement about Scripture: what it is, what it is for, and what it makes possible.",
        focus: "14-17",
      },
      {
        book: "Luke",
        chapter: 24,
        title: "Jesus' Bible",
        lookFor: "Jesus sums up the whole Old Testament He received and read: the law of Moses, the prophets, and the psalms.",
        focus: "44-49",
      },
      {
        book: "Colossians",
        chapter: 4,
        title: "Letters that circulate and are read",
        lookFor: "How apostolic letters came to the churches: read aloud, exchanged, and collected.",
        focus: "15-16",
      },
      {
        book: "2 Peter",
        chapter: 3,
        title: "Paul's letters classed with Scripture",
        lookFor: "Peter places the letters of 'our beloved brother Paul' alongside 'the other Scriptures.'",
        focus: "14-18",
      },
    ],
    points: [
      {
        heading: "The Old Testament: the Bible Jesus received",
        body:
          "Jesus spoke of 'the law of Moses, the prophets, and the psalms,' the threefold shape of the Hebrew Scriptures, and said the things written there concerning Him must be fulfilled. He could say, 'Don't think that I came to destroy the law or the prophets. I didn't come to destroy, but to fulfill,' for not one pen stroke passes from the law until all is accomplished. The books Israel treasured as Scripture were settled before Jesus came, and He never once questioned their authority; He quoted them as the living word of God.",
        verses: ["Luke 24:44", "Luke 24:46", "Matthew 5:17-18", "2 Timothy 3:15"],
      },
      {
        heading: "The New Testament books came from the apostles themselves",
        body:
          "The Gospels and letters carry apostolic authority from the start: Paul wrote as an apostle by the command of God and solemnly charged that his letters 'be read to all the holy brothers,' and he had churches exchange them so the word was gathered and shared. Paul could quote the Gospel of Luke as Scripture ('the laborer is worthy of his wages'), and Peter already classed all of Paul's letters with 'the other Scriptures.' The books came bearing the apostles' own stamp; the church simply received what it had been given.",
        verses: ["1 Thessalonians 5:27", "1 Timothy 1:1", "Colossians 4:16", "1 Timothy 5:18", "2 Peter 3:15-16", "1 Thessalonians 2:13"],
      },
      {
        heading: "The church recognized what the Spirit had already given",
        body:
          "As letters and gospels circulated, the churches recognized books with apostolic origin, universal acceptance, and doctrine consistent with the faith delivered once for all. Paul's test was blunt: even if an angel from heaven should preach a different gospel, 'let him be cursed.' Luke wrote 'that you might know the certainty concerning the things in which you were instructed,' and John blessed the one who reads and hears the words of the prophecy. Books without apostolic authority, however edifying, were not received as canon; the rule was simple, the Spirit wrote through the apostles, and the church could recognize His voice.",
        verses: ["Galatians 1:8-9", "Luke 1:1-4", "Revelation 1:3", "2 Thessalonians 2:15"],
      },
      {
        heading: "The canon was recognized, then confirmed",
        body:
          "The core of the New Testament, four Gospels, Acts, the letters of Paul, and the works of his associates, was in use across the churches long before any council. Later lists and councils, from Athanasius onward, did not add or subtract by vote; they confirmed what the churches had already been reading from the beginning. History does not show a council choosing the books of the Bible; it shows churches everywhere recognizing the books that had always carried the apostles' voice, and rejecting the rest.",
        verses: ["2 Peter 3:15-16", "Colossians 4:16", "1 Thessalonians 1:5"],
      },
      {
        heading: "We can trust that God has given His people His book",
        body:
          "Paul says every Scripture is 'God-breathed,' profitable for teaching, reproof, correction, and instruction in righteousness, so that the man of God may be complete and thoroughly equipped for every good work. Peter says prophecy never came by the will of man, but men spoke 'being moved by the Holy Spirit.' If God could breathe His word through prophets and apostles, He could also preserve and gather the books that carry it, and He has: the Bible in your hands is the book the church has always received, able to make you 'wise for salvation through faith, which is in Christ Jesus' and living and active by the Spirit who wrote it.",
        verses: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "2 Timothy 3:15", "Hebrews 4:12", "Isaiah 40:8"],
      },
    ],
    keyVerses: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "Luke 24:44", "2 Peter 3:15-16", "Hebrews 4:12"],
    raises: ["can-i-trust-the-bible", "how-was-the-bible-written-down", "why-do-bible-translations-differ"],
    followsFrom: ["can-i-trust-the-bible", "is-the-whole-bible-about-jesus"],
    related: ["can-i-trust-the-bible", "how-was-the-bible-written-down", "why-do-bible-translations-differ", "is-the-whole-bible-about-jesus"],
    planned: ["What is the Apocrypha, and why isn't it Scripture?"],
    order: 42,
  },

  {
    slug: "what-is-church-discipline",
    question: "What is church discipline?",
    category: "church",
    summary:
      "Church discipline is the loving, orderly way the church helps its members turn from sin and stay in the way of Christ: private appeal first, then witnesses, then the church, and for the unrepentant, the last step of removal from fellowship. Its goal is never punishment; it is restoration, the purity of the church, and the saving of souls. Jesus commanded it, and the New Testament expects it.",
    passages: [
      {
        book: "Matthew",
        chapter: 18,
        title: "The steps Jesus gave",
        lookFor: "Jesus' own procedure for a brother who sins: one-on-one, then witnesses, then the assembly.",
        focus: "15-20",
      },
      {
        book: "1 Corinthians",
        chapter: 5,
        title: "Purge the yeast",
        lookFor: "Paul's actual case: unrepentant sin in the church, and what the whole assembly must do.",
      },
      {
        book: "Galatians",
        chapter: 6,
        title: "Restore the fallen",
        lookFor: "The spirit in which discipline is done: gentleness, self-watch, and burden-bearing.",
        focus: "1-5",
      },
      {
        book: "2 Thessalonians",
        chapter: 3,
        title: "Withdrawing from the disorderly",
        lookFor: "The kindest discipline of all: not treating the erring as an enemy, but admonishing them as a brother.",
        focus: "6-15",
      },
    ],
    points: [
      {
        heading: "Jesus commanded a specific order",
        body:
          "Jesus gave the steps: 'If your brother sins against you, go, show him his fault between you and him alone. If he listens to you, you have gained back your brother.' If he refuses, take one or two witnesses, 'that at the mouth of two or three witnesses every word may be established,' and if he still refuses, 'tell it to the assembly.' The order matters: private before public, gentle before severe, one person seeking one soul before the whole church is ever involved.",
        verses: ["Matthew 18:15-17", "Matthew 18:16", "1 Timothy 5:19"],
      },
      {
        heading: "Its goal is restoration, not punishment",
        body:
          "Galatians says, 'Brothers, even if a man is caught in some fault, you who are spiritual must restore such a one in a spirit of gentleness, looking to yourself so that you also aren't tempted.' Paul's sharpest case was aimed at salvation: deliver the sinning man to Satan 'for the destruction of the flesh, that the spirit may be saved in the day of the Lord Jesus.' James cheers the one who turns a wanderer back, for he will 'save a soul from death and will cover a multitude of sins.' Even the severest step is a rescue.",
        verses: ["Galatians 6:1", "1 Corinthians 5:5", "James 5:19-20"],
      },
      {
        heading: "It protects the church's holiness",
        body:
          "Paul warns that 'a little yeast leavens the whole lump,' so the church must purge out the old yeast that it may be a new lump; he commands the Corinthians to put away the wicked man from among themselves and to have no company with a brother living unrepentantly in sin. Discipline keeps the gospel visible: the world watches how the church treats sin in its own house. The purity of the assembly is not coldness; it is truthfulness about the holiness of the God we serve.",
        verses: ["1 Corinthians 5:6-8", "1 Corinthians 5:11-13", "1 Corinthians 5:5"],
      },
      {
        heading: "It is done in love, humility, and hope of return",
        body:
          "When the Corinthians acted, the next command was to forgive and comfort the penitent, 'lest by any means such a one should be swallowed up with his excessive sorrow,' and to confirm love toward him. Paul tells Timothy to reprove those who sin in public 'that the rest also may be in fear,' and to avoid a factious man after a first and second warning. Even the withdrawal of 2 Thessalonians carries the aim: 'Don't count him as an enemy, but admonish him as a brother.' Discipline is the church taking its brother as seriously as Jesus takes him.",
        verses: ["2 Corinthians 2:6-8", "1 Timothy 5:20", "Titus 3:10-11", "2 Thessalonians 3:14-15"],
      },
      {
        heading: "It rests on Jesus' authority and presence",
        body:
          "Jesus binds His church's discipline to heaven itself: 'whatever things you bind on earth will have been bound in heaven,' and He anchors it in His presence: 'where two or three are gathered together in my name, there I am in their midst.' The church's authority is not its own opinion but the word of its King, applied in His name and in the power of 'our Lord Jesus Christ' when the assembly is gathered. When the church acts in that name, it acts with the confidence of a family doing business in the presence of its Head.",
        verses: ["Matthew 18:18-20", "1 Corinthians 5:4", "Matthew 18:20"],
      },
    ],
    keyVerses: ["Matthew 18:15-17", "1 Corinthians 5:5", "Galatians 6:1", "2 Corinthians 2:7", "Titus 3:10"],
    raises: ["what-is-a-healthy-church", "what-is-the-church", "why-do-i-need-the-church"],
    followsFrom: ["why-do-i-need-the-church", "what-is-a-healthy-church"],
    related: ["why-do-i-need-the-church", "what-is-a-healthy-church", "what-is-the-church", "what-is-baptism"],
    planned: ["How do I forgive someone who has hurt me in the church?"],
    order: 44,
  },

  {
    slug: "what-is-the-rapture",
    question: "What is the rapture?",
    category: "our-hope",
    summary:
      "The word 'rapture' comes from the Latin for 'caught up' in 1 Thessalonians 4: the Lord descends, the dead in Christ rise, and believers who are alive are caught up together with them to meet Him in the air. The Bible's emphasis is not the timing but the certainty and the comfort: we will be with the Lord forever, and we are not appointed to wrath. Whatever the precise schedule, the point of the promise is hope, readiness, and an unmovable union with Christ.",
    passages: [
      {
        book: "1 Thessalonians",
        chapter: 4,
        title: "The coming of the Lord",
        lookFor: "The classic text: the shout, the archangel, the trumpet, the dead rising first, and the living caught up.",
        focus: "13-18",
      },
      {
        book: "1 Corinthians",
        chapter: 15,
        title: "The last trumpet",
        lookFor: "The transformation: in a moment, at the last trumpet, the perishable puts on the imperishable.",
        focus: "50-58",
      },
      {
        book: "Matthew",
        chapter: 24,
        title: "No one knows the day",
        lookFor: "Jesus' answer to the question of when: preparation, not speculation, is the point.",
        focus: "36-44",
      },
      {
        book: "2 Thessalonians",
        chapter: 2,
        title: "Do not be shaken",
        lookFor: "Paul warns against false claims that the day has already come, and anchors the church in the truth already delivered.",
        focus: "1-12",
      },
    ],
    points: [
      {
        heading: "The word and the text",
        body:
          "Paul writes that 'the Lord himself will descend from heaven with a shout, with the voice of the archangel, and with God's trumpet,' then 'the dead in Christ will rise first,' and 'we who are alive, who are left, will be caught up together with them in the clouds, to meet the Lord in the air.' 'Rapture' is simply the Latin translation of that phrase, 'caught up.' The promise is one event with two parts: resurrection for the dead in Christ, transformation for the living, and together we meet Him.",
        verses: ["1 Thessalonians 4:16-17", "1 Thessalonians 4:15"],
      },
      {
        heading: "The transformation: in a moment",
        body:
          "At the last trumpet, 'we will all be changed, in a moment, in the twinkling of an eye... the dead will be raised incorruptible, and we will be changed,' for 'this perishable body must become imperishable, and this mortal must put on immortality.' Paul echoes it in Philippians: the Savior 'will change the body of our humiliation to be conformed to the body of his glory.' The meeting is not a trip to the air; it is the moment our humanity is remade to match His.",
        verses: ["1 Corinthians 15:51-53", "Philippians 3:20-21", "1 Corinthians 15:54"],
      },
      {
        heading: "The promise is comfort, not a schedule",
        body:
          "Paul gives the whole passage its purpose: 'Therefore comfort one another with these words,' and urges that we not grieve like those who have no hope. The Thessalonians were grieving Christians who had died; the answer was not a calendar but a certainty, that God 'will bring with him those who have fallen asleep in Jesus.' Jesus Himself refused the schedule: 'no one knows of that day and hour,' so watch, 'for you don't know in what hour your Lord comes.'",
        verses: ["1 Thessalonians 4:13-14", "1 Thessalonians 4:18", "Matthew 24:36-42", "Matthew 24:44"],
      },
      {
        heading: "We are not appointed to wrath",
        body:
          "Paul's assurance runs to the end: 'God didn't appoint us to wrath, but to the obtaining of salvation through our Lord Jesus Christ,' and the Thessalonians are always waiting for His Son from heaven, 'Jesus, who delivers us from the wrath to come.' Whatever tribulation the world must pass through, the believer's destiny is joined to Christ, who has already taken the judgment of our sins. The coming is a rescue, not a threat, to His own, and Jesus Himself promised, 'I will come again, and will receive you to myself; that where I am, you may be there also.'",
        verses: ["1 Thessalonians 5:9-10", "1 Thessalonians 1:10", "John 14:2-3", "Matthew 24:42"],
      },
      {
        heading: "Honest differences about timing; unity about the truths",
        body:
          "Christians differ over when the gathering happens in relation to tribulation, and 2 Thessalonians 2 exists because some had even claimed the day had already come; Paul answers, 'Let no one deceive you in any way,' and anchors the church in the truth it had already received. What the text makes certain, whatever the timetable: the Lord will return, the dead in Christ will rise, we will be with Him forever, and we are to live ready. The practical response is the same for every view: watch, pray, work, and comfort one another.",
        verses: ["2 Thessalonians 2:1-3", "2 Thessalonians 2:15", "Acts 1:7", "1 Thessalonians 4:18", "1 Corinthians 15:58"],
      },
    ],
    keyVerses: ["1 Thessalonians 4:16-17", "1 Corinthians 15:51-52", "Philippians 3:20-21", "1 Thessalonians 5:9", "Matthew 24:42-44"],
    raises: ["signs-before-jesus-returns", "will-jesus-return-literally", "what-is-the-resurrection"],
    followsFrom: ["will-jesus-return-literally", "signs-before-jesus-returns"],
    related: ["will-jesus-return-literally", "signs-before-jesus-returns", "what-is-the-resurrection", "what-happens-when-i-die"],
    planned: ["How should the promise of His return change my daily life?"],
    order: 47,
  },

  {
    slug: "how-does-god-judge-people-who-never-heard-of-jesus",
    question: "How does God judge people who never heard of Jesus?",
    category: "who-we-are",
    summary:
      "God judges by truth, without partiality, and everyone has already been given real revelation: creation speaks, conscience testifies, and no one is neutral before God. Scripture insists that no one is saved except through Christ, and that faith comes by hearing, so the gospel must be carried. We can trust the Judge to be perfectly just, and we can let His justice drive us to the one work He has given: making the name that saves heard.",
    passages: [
      {
        book: "Romans",
        chapter: 1,
        title: "What everyone knows",
        lookFor: "God's visible revelation in creation, and the human response that leaves no one without excuse.",
        focus: "18-32",
      },
      {
        book: "Romans",
        chapter: 2,
        title: "Judged by truth",
        lookFor: "God's impartial judgment, and the law written on hearts, with conscience accusing or excusing.",
        focus: "11-16",
      },
      {
        book: "Acts",
        chapter: 17,
        title: "Paul in Athens",
        lookFor: "A nation that did not know God: its poets, its altar, and the call to repent because a day of judgment is fixed.",
        focus: "22-31",
      },
      {
        book: "Psalms",
        chapter: 19,
        title: "The heavens declare",
        lookFor: "The speech that has gone out through all the earth, before any missionary ever arrives.",
        focus: "1-6",
      },
    ],
    points: [
      {
        heading: "God judges by truth and without partiality",
        body:
          "Paul states the judge's character first: 'there is no partiality with God,' and He will judge the secrets of men 'according to my Good News, by Jesus Christ.' Abraham's question stands over every version of this worry: 'Shouldn't the Judge of all the earth do right?' We can ask how God judges because we already know who He is: perfectly just, perfectly merciful, and incapable of wronging anyone.",
        verses: ["Romans 2:11", "Romans 2:16", "Romans 2:6", "Genesis 18:25"],
      },
      {
        heading: "General revelation leaves no one without excuse",
        body:
          "Paul's answer to the question begins with what everyone has heard: 'the invisible things of him since the creation of the world are clearly seen, being perceived through the things that are made... that they may be without excuse.' The heavens 'pour out speech' with a voice that has gone out 'through all the earth,' and God did not leave Himself without witness, giving rains and fruitful seasons and filling hearts with food and gladness. No one starts from zero; every person has stood under the open sky of the Creator's glory and chosen what to do with it.",
        verses: ["Romans 1:19-20", "Psalm 19:1-4", "Acts 14:16-17"],
      },
      {
        heading: "The law on the heart: conscience accuses or excuses",
        body:
          "Paul adds the inner witness: when Gentiles who do not have the law do by nature the things of the law, 'they show the work of the law written in their hearts, their conscience testifying with them, and their thoughts among themselves accusing or else excusing them.' God judges the secrets of men by Christ on that day. Conscience is not salvation, but it is real knowledge, and it prepares the verdict that every human heart already knows about God's right.",
        verses: ["Romans 2:12-16", "Romans 2:15", "Romans 2:16"],
      },
      {
        heading: "Yet no one is saved except through Christ",
        body:
          "Revelation does not provide a second way for the unevangelized; it names one: 'There is salvation in none other, for neither is there any other name under heaven, that is given among men, by which we must be saved.' Jesus said, 'No one comes to the Father, except through me,' and John adds that whoever does not believe in the name of the only Son 'has been judged already.' The wonder of Scripture is not that God found a back door; it is that the only door was flung open for the whole world, and that 'whoever will call on the name of the Lord will be saved.'",
        verses: ["Acts 4:12", "John 14:6", "John 3:18", "Romans 10:13"],
      },
      {
        heading: "The response: confidence in the Judge and urgency in the mission",
        body:
          "Paul's logic runs from God's justice to the gospel's necessity: 'How then will they call on him in whom they have not believed? How will they believe in him whom they have not heard? How will they hear without a preacher? ... So faith comes by hearing, and hearing by the word of God.' God has appointed a day and a Judge and 'commands that all people everywhere should repent,' as Paul declared to people who genuinely had never heard. We cannot calculate the verdicts of the final day, and we do not need to: we can trust the Judge, and we can obey the mission, because the answer to the question is the same as the answer to the world's need: proclaim Christ.",
        verses: ["Romans 10:14-15", "Romans 10:17", "Acts 17:30-31", "1 Timothy 2:4"],
      },
    ],
    keyVerses: ["Romans 1:20", "Romans 2:15", "Acts 17:30-31", "Romans 10:14-15", "Acts 4:12"],
    raises: ["what-is-hell", "how-do-i-share-my-faith-with-others", "what-is-sin"],
    followsFrom: ["what-is-sin", "does-everyone-deserve-gods-judgment"],
    related: ["what-is-sin", "does-everyone-deserve-gods-judgment", "what-is-hell", "how-do-i-share-my-faith-with-others"],
    planned: ["How should the doctrine of judgment motivate our witness?"],
    order: 51,
  },

  {
    slug: "can-a-christian-be-tormented-by-demons",
    question: "Can a Christian be tormented by demons?",
    category: "unseen-realm",
    summary:
      "Scripture never says a demon can dwell in someone the Spirit of God indwells, but it is clear that believers can be attacked from outside: tempted, accused, harassed, and hindered. The difference is the one Jesus drew: possession is being seized by a power that rules you, while the Christian is ruled by the Spirit and stands against the enemy with armor and the name of Christ. The battle is real; the victory is already decisive.",
    passages: [
      {
        book: "Luke",
        chapter: 8,
        title: "The man with the legion",
        lookFor: "What possession looks like at its worst, and what Jesus' word alone does to an army of demons.",
        focus: "26-39",
      },
      {
        book: "Acts",
        chapter: 19,
        title: "The sons of Sceva",
        lookFor: "The limits of spiritual authority: demons yield to Jesus and Paul, and mock everyone else.",
        focus: "11-20",
      },
      {
        book: "Ephesians",
        chapter: 6,
        title: "The believer's battle",
        lookFor: "Paul's description of the fight: not against flesh and blood, and the armor for standing.",
        focus: "10-20",
      },
      {
        book: "2 Corinthians",
        chapter: 12,
        title: "The thorn in the flesh",
        lookFor: "A messenger of Satan allowed to torment a faithful apostle, and the grace that sustains him.",
        focus: "7-10",
      },
    ],
    points: [
      {
        heading: "Scripture's possessed are outside Christ; His word frees them",
        body:
          "The demonized man of the Gadarenes lived among the tombs, wore no clothes, and was driven by demons into the desert; at Jesus' word, 'Legion' left him, and the city found him 'sitting at Jesus' feet, clothed and in his right mind.' They saw the power of the demons in his bondage and the greater power of the Son of God in his freedom. Where Jesus is Lord, demons do not own the house.",
        verses: ["Luke 8:27-29", "Luke 8:35", "Luke 8:39"],
      },
      {
        heading: "Believers are the temple of the Spirit, and greater is He in us",
        body:
          "Paul makes the boundary a matter of residence: 'You are not in the flesh but in the Spirit, if it is so that the Spirit of God dwells in you,' and he asks, 'Don't you know that your body is a temple of the Holy Spirit... which you have from God?' John's word for the whole church is decisive: 'You are of God, little children, and have overcome them; because greater is he who is in you than he who is in the world.' A spirit of darkness cannot share the temple the Spirit of God has claimed; that is not a promise of comfort but a fact of ownership.",
        verses: ["Romans 8:9", "1 Corinthians 6:19", "1 John 4:4", "1 Corinthians 3:16"],
      },
      {
        heading: "But they can attack from outside: tempt, accuse, hinder",
        body:
          "The same New Testament that promises the Spirit's residence warns that 'our wrestling is not against flesh and blood, but against the principalities, against the powers... against the spiritual forces of wickedness in the heavenly places,' and Peter pictures the devil as a roaring lion walking about, 'seeking whom he may devour.' Even Paul had 'a thorn in the flesh, a messenger of Satan to torment me.' The believer's battle is real; the question is not whether the enemy attacks, but whether he rules.",
        verses: ["Ephesians 6:12", "1 Peter 5:8-9", "2 Corinthians 12:7", "Ephesians 6:11"],
      },
      {
        heading: "The response: resist in faith, with the armor, not in raw power",
        body:
          "James gives the two-part move: submit to God, and 'resist the devil, and he will flee from you.' Peter links resistance to faith: 'Withstand him steadfast in your faith,' knowing the same sufferings are shared across the world. Paul's armor is the counter-terror: truth, righteousness, the gospel of peace, faith, salvation, and the word of God, with all prayer. Jude adds the humility of Michael the archangel, who dared not bring an abusive condemnation against the devil but said, 'May the Lord rebuke you!' We do not fight the enemy in our own authority; we fight in the name and word of the One who has already defeated him.",
        verses: ["James 4:7", "1 Peter 5:9", "Ephesians 6:13-17", "Jude 1:9", "Ephesians 6:18"],
      },
      {
        heading: "The victory is Christ's, and it is finished",
        body:
          "The cross was the defeat: through death He brought to nothing 'him who had the power of death, that is, the devil,' and having stripped the principalities and the powers, He 'made a show of them openly, triumphing over them in it.' John's reason for the incarnation is blunt: 'To this end the Son of God was revealed, that he might destroy the works of the devil.' So the believer's posture is not foreboding but perseverance: stand, pray, resist, and rest in the One whose resurrection is the final word. The devils had their hour; it ended at the cross and the empty tomb.",
        verses: ["Hebrews 2:14-15", "Colossians 2:15", "1 John 3:8", "2 Timothy 4:18"],
      },
    ],
    keyVerses: ["1 John 4:4", "Ephesians 6:12", "James 4:7", "2 Corinthians 12:9", "Colossians 2:15"],
    raises: ["what-is-spiritual-warfare", "praying-against-the-enemy", "who-is-satan"],
    followsFrom: ["are-demons-real", "who-is-satan"],
    related: ["are-demons-real", "what-is-spiritual-warfare", "praying-against-the-enemy", "body-soul-and-spirit"],
    planned: ["What should I do if I am afraid of demonic attack?"],
    order: 53,
  },

  // ------------------------------------------------------------------
  // Next-priority batch: finish the threads and cover the thinnest gaps
  // ------------------------------------------------------------------
  {
    slug: "what-is-hell-eternal-punishment-or-annihilation",
    question: "Is hell eternal punishment or annihilation?",
    category: "who-we-are",
    summary:
      "The Bible clearly teaches that the lost perish and are destroyed, and it also speaks of eternal punishment; faithful Christians have read those two threads differently. The historic majority view is eternal conscious punishment; others, reading the destruction language, hold that the lost cease to exist. Both views agree on what matters most: hell is real, final, and terrible, and the gospel is the only way out.",
    passages: [
      {
        book: "Matthew",
        chapter: 25,
        title: "Eternal punishment and eternal life",
        lookFor: "Jesus sets the two destinies side by side with the same word: eternal punishment and eternal life.",
        focus: "41-46",
      },
      {
        book: "2 Thessalonians",
        chapter: 1,
        title: "The penalty of eternal destruction",
        lookFor: "Paul describes the fate of the lost as eternal destruction from the face of the Lord.",
        focus: "5-10",
      },
      {
        book: "Revelation",
        chapter: 20,
        title: "The lake of fire",
        lookFor: "The second death, and who is cast into the lake of fire.",
        focus: "11-15",
      },
      {
        book: "Matthew",
        chapter: 3,
        title: "The unquenchable fire",
        lookFor: "John the Baptist's picture of judgment: the chaff burned up with unquenchable fire.",
        focus: "10-12",
      },
    ],
    points: [
      {
        heading: "Why the question matters",
        body:
          "Jesus spoke of hell more than anyone, describing the fire 'prepared for the devil and his angels,' where 'their worm doesn't die, and the fire is not quenched.' Isaiah pictured the same: 'their worm shall not die, neither shall their fire be quenched.' Whatever view we take, this is not a question to handle carelessly, because it is about the final destiny of real people, and about the seriousness with which we take the One who warns us.",
        verses: ["Matthew 25:41", "Mark 9:48", "Isaiah 66:24", "Matthew 10:28"],
      },
      {
        heading: "The 'eternal' language points to endlessness",
        body:
          "Jesus says the condemned 'will go away into eternal punishment, but the righteous into eternal life,' using one word for both destinies. Daniel speaks of waking 'to shame and everlasting contempt,' and Revelation says of those who worship the beast that 'the smoke of their torment goes up forever and ever.' On this reading, the punishment is endless because the same adjective that guarantees endless life guarantees endless judgment.",
        verses: ["Matthew 25:46", "Daniel 12:2", "Revelation 14:11", "Revelation 20:10"],
      },
      {
        heading: "The 'destruction' language points to an end",
        body:
          "Other texts stress the finality of ruin: the lost 'will pay the penalty: eternal destruction from the face of the Lord,' and Jesus warns us to fear the One 'who is able to destroy both soul and body in Gehenna.' Paul names those 'whose end is destruction,' and John the Baptist pictures the chaff he 'will burn up with unquenchable fire.' Those who hold annihilation read these as describing the complete ceasing of the lost, not endless torment.",
        verses: ["2 Thessalonians 1:9", "Matthew 10:28", "Philippians 3:19", "Matthew 3:12"],
      },
      {
        heading: "How the two readings are held together",
        body:
          "This is one of the places where the church has disagreed while taking the same verses seriously. The majority historic view is eternal conscious punishment: the 'eternal' and 'forever and ever' language carries its full weight, and the rich man in torment pleads for relief. Annihilationism sees the 'destruction,' 'perish,' and 'burned up' language as describing an end, and takes God's warnings about death and perishing at face value. Both camps honor Scripture and both are sobered by it; neither would relax the urgency of the gospel.",
        verses: ["Matthew 25:46", "Revelation 20:14-15", "Luke 16:24", "2 Peter 3:7", "Jude 1:7"],
      },
      {
        heading: "What is certain, whatever the view",
        body:
          "No reading makes hell a small thing. Scripture agrees it is real, final, just, and dreadful, and that the only escape is the gospel: 'God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.' The day is coming when God judges the world in righteousness by Christ. So we neither presume nor despair; we take the warning as love, and we run to the Savior who has already faced our judgment on the cross.",
        verses: ["John 3:16", "Acts 17:31", "Revelation 20:15", "2 Thessalonians 1:6-7"],
      },
    ],
    keyVerses: ["Matthew 25:46", "Revelation 20:10", "2 Thessalonians 1:9", "Daniel 12:2", "Matthew 10:28"],
    raises: ["what-happens-when-i-die", "does-everyone-deserve-gods-judgment", "is-it-okay-to-doubt"],
    followsFrom: ["what-is-hell", "what-is-the-final-judgment-and-who-will-be-there"],
    related: ["what-is-hell", "what-is-the-final-judgment-and-who-will-be-there", "does-everyone-deserve-gods-judgment"],
    planned: ["Does the Bible teach that the soul is immortal, or is it a gift?"],
    order: 52,
  },

  {
    slug: "what-was-it-like-to-see-the-risen-jesus",
    question: "What was it like to see the risen Jesus?",
    category: "jesus-christ",
    summary:
      "The risen Jesus appeared bodily and really, not as a ghost: He showed His hands and feet, ate broiled fish, and made breakfast for His friends by the lake. Yet He was also changed, walking through locked doors and vanishing from sight, and His own often failed to recognize Him at first. Those who saw Him moved from fear and unbelief to joy and worship, and their eyewitness testimony became the church's foundation.",
    passages: [
      {
        book: "Luke",
        chapter: 24,
        title: "The Emmaus road and the upper room",
        lookFor: "Watch the walking and talking on the road, the opened eyes, and the meal Jesus shares with the eleven.",
      },
      {
        book: "John",
        chapter: 20,
        title: "Mary, the locked room, and Thomas",
        lookFor: "The first witnesses and the week-later appearance: Mary's tears, the locked doors, and Thomas' confession.",
      },
      {
        book: "John",
        chapter: 21,
        title: "Breakfast by the sea",
        lookFor: "The risen Jesus serving His tired friends fish and bread on the shore.",
      },
      {
        book: "1 Corinthians",
        chapter: 15,
        title: "The list of witnesses",
        lookFor: "Paul's early creed: Christ appeared to Cephas, the twelve, over five hundred, James, and lastly Paul himself.",
        focus: "3-11",
      },
    ],
    points: [
      {
        heading: "He was bodily and real, not a ghost",
        body:
          "When the disciples thought they saw a spirit, Jesus said, 'See my hands and my feet, that it is truly me. Touch me and see, for a spirit doesn't have flesh and bones, as you see that I have,' and He ate broiled fish and honeycomb in front of them. John records that He showed His hands and His side to the frightened disciples in the locked room, and later, on the shore, He took the fish and bread and gave it to them. The resurrection was no vision; it was the same Jesus, in a real body, alive.",
        verses: ["Luke 24:37-43", "John 20:19-20", "John 21:12-13", "John 20:27"],
      },
      {
        heading: "Yet He was changed, and often unrecognized at first",
        body:
          "On the Emmaus road 'their eyes were kept from recognizing him,' and He vanished when their eyes were opened. Mary turned around at the tomb and 'saw Jesus standing, and didn't know that it was Jesus'; by the lake His friends 'didn't know that it was Jesus' until He called to them. He came through locked doors and was not always known by sight, but He was always known by His voice and His breaking of bread, and by the scars He showed them.",
        verses: ["Luke 24:16", "Luke 24:31", "John 20:14", "John 21:4", "John 20:19"],
      },
      {
        heading: "He turned their fear into joy and their unbelief into worship",
        body:
          "The disciples in the locked room were afraid, and when Jesus appeared they 'didn't believe for joy, and wondered' at the wonder of it. When He showed them His hands and His side, 'the disciples therefore were glad when they saw the Lord.' And Thomas, who had refused to believe, answered the risen Jesus and cried, 'My Lord and my God!' Seeing the risen Christ did not leave anyone cold; it remade sorrow into joy and doubt into confession.",
        verses: ["Luke 24:41", "John 20:20", "John 20:28", "Luke 24:52"],
      },
      {
        heading: "He opened the Scriptures on the way",
        body:
          "To the two on the road He said, 'Foolish men, and slow of heart to believe in all that the prophets have spoken!' and then, 'Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself.' Later He 'opened their minds, that they might understand the Scriptures.' The risen Jesus did not leave His friends merely stunned; He taught them to read the whole Bible as His story, so their joy would rest on truth, not spectacle.",
        verses: ["Luke 24:25-27", "Luke 24:45", "Luke 24:31-32"],
      },
      {
        heading: "He appeared to chosen witnesses, and the testimony endures",
        body:
          "Paul hands down the earliest summary: 'that he was raised on the third day according to the Scriptures, and that he appeared to Cephas, then to the twelve,' then to over five hundred at once, then to James, and 'last of all... he appeared to me also.' To the men who saw Him, He 'showed himself alive after he suffered, by many proofs... over a period of forty days.' These witnesses became the church's foundation, and their testimony is why we too can say, 'The Lord is risen indeed.'",
        verses: ["1 Corinthians 15:4-8", "Acts 1:3", "John 20:30-31", "1 John 1:1-3", "Luke 24:34"],
      },
    ],
    keyVerses: ["Luke 24:39", "John 20:27-28", "1 Corinthians 15:5-6", "Luke 24:16", "John 20:29"],
    raises: ["where-is-jesus-now", "did-jesus-rise-from-the-dead", "what-is-the-resurrection"],
    followsFrom: ["did-jesus-rise-from-the-dead", "why-did-the-disciples-not-recognize-him-after-he-rose"],
    related: ["did-jesus-rise-from-the-dead", "between-the-cross-and-the-resurrection", "where-is-jesus-now", "what-is-the-resurrection"],
    planned: ["Why did the risen Jesus still have scars?"],
    order: 32,
  },

  {
    slug: "why-did-jesus-appear-only-to-certain-people-after-his-resurrection",
    question: "Why did Jesus appear only to certain people after His resurrection?",
    category: "jesus-christ",
    summary:
      "Jesus rose and was seen, but not by everyone: He appeared to witnesses God had chosen beforehand, who were to carry the news to the world. The appearances were for the founding of the church, not for a public spectacle. We who have not seen are given their testimony, the word, and the Spirit, and Jesus calls those who believe without seeing blessed.",
    passages: [
      {
        book: "Acts",
        chapter: 1,
        title: "Witnesses chosen before",
        lookFor: "The risen Jesus spends forty days with the apostles and tells them they will be His witnesses to the ends of the earth.",
        focus: "1-11",
      },
      {
        book: "1 Corinthians",
        chapter: 15,
        title: "The appearances to witnesses",
        lookFor: "Paul's list shows the witnesses and their role: those who saw are those who preach.",
        focus: "3-11",
      },
      {
        book: "Luke",
        chapter: 24,
        title: "The two who saw him on the road",
        lookFor: "A private appearance to two discouraged disciples, with a specific purpose in view.",
        focus: "13-35",
      },
      {
        book: "John",
        chapter: 20,
        title: "Show me, then blessed are those who believe",
        lookFor: "Thomas demands to see; Jesus grants it and pronounces a blessing on those who believe without seeing.",
        focus: "19-29",
      },
    ],
    points: [
      {
        heading: "He appeared to chosen witnesses for a purpose",
        body:
          "Peter tells Cornelius that God 'raised him up the third day' and that God 'gave him to be revealed, not to all the people, but to witnesses who were chosen before by God.' The appearances were not random displays; they were given to specific people whose testimony would carry the gospel. Luke says Jesus 'showed himself alive... by many proofs, appearing to them over a period of forty days, and speaking about God's Kingdom,' teaching these witnesses what they would then proclaim.",
        verses: ["Acts 10:40-41", "Acts 1:3", "1 Corinthians 15:5-8", "John 20:30-31"],
      },
      {
        heading: "The witnesses were sent to testify",
        body:
          "Jesus told the eleven, 'You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth,' and Peter's first sermon stakes everything on it: 'This Jesus God raised up, to which we all are witnesses.' Paul says the risen Christ appeared to the twelve, to over five hundred, to James, and to himself, 'so we preach, and so you believed.' To see the risen Jesus was to be entrusted with a message and a mission.",
        verses: ["Acts 1:8", "Acts 2:32", "1 Corinthians 15:5-8", "1 Corinthians 15:11"],
      },
      {
        heading: "Blessed are those who believe without seeing",
        body:
          "Thomas demanded to see the nail prints before he would believe, and Jesus met him in his doubt, then said, 'Because you have seen me, you have believed. Blessed are those who have not seen, and have believed.' This is the word for every generation after the apostles: we walk by faith, not by sight, and Peter writes that though we have not seen Him, 'believing, you rejoice greatly with joy unspeakable and full of glory.' Your faith is not second-class because you came late.",
        verses: ["John 20:27-29", "2 Corinthians 5:7", "1 Peter 1:8-9", "John 20:31"],
      },
      {
        heading: "The appearances were for the foundation of the church",
        body:
          "The risen Christ's appearances served the founding of the church: they equipped apostles who, with the prophets, form the foundation on which the church is built, with Christ as the chief cornerstone. The season of seeing was forty days and then it closed, because the age of the Spirit's witness had begun; Paul, the last of the apostles, was 'last of all' to see Him, 'as to the child born at the wrong time.' The foundation was laid once, and the witnesses were commissioned, and then the sending continued through them.",
        verses: ["Acts 1:3", "Ephesians 2:20", "1 Corinthians 15:8", "Matthew 28:19-20"],
      },
      {
        heading: "We now have their testimony and the Spirit",
        body:
          "John writes that 'that which we have heard, that which we have seen with our eyes... concerning the Word of life' he declares to us 'that you also may have fellowship with us.' And John's gospel was written 'that you may believe that Jesus is the Christ, the Son of God, and that believing you may have life in his name.' We do not need to have been in the upper room, because we have the eyewitnesses' word in our hands and the Spirit in our hearts giving us belief.",
        verses: ["1 John 1:1-3", "John 20:30-31", "Luke 1:1-4", "Acts 2:32"],
      },
    ],
    keyVerses: ["Acts 10:40-41", "John 20:29", "1 Peter 1:8-9", "1 Corinthians 15:5-8", "Acts 1:8"],
    raises: ["where-is-jesus-now", "what-is-faith", "did-jesus-rise-from-the-dead"],
    followsFrom: ["why-did-the-disciples-not-recognize-him-after-he-rose", "did-jesus-rise-from-the-dead"],
    related: ["did-jesus-rise-from-the-dead", "what-was-it-like-to-see-the-risen-jesus", "what-is-faith", "is-the-whole-bible-about-jesus"],
    planned: ["How can we be sure the resurrection really happened?"],
    order: 33,
  },

  {
    slug: "who-were-the-spirits-in-prison-and-what-did-christ-preach-to-them",
    question: "Who were 'the spirits in prison', and what did Christ preach to them?",
    category: "jesus-christ",
    summary:
      "First Peter tells us that the Spirit-anointed Christ 'went and preached to the spirits in prison,' those who were disobedient in the days of Noah. The church has understood this in more than one way, and none of them is a test of faith. What the passage makes certain is that after His death Christ was active and triumphant, and that the powers that oppose Him are made subject to Him.",
    passages: [
      {
        book: "1 Peter",
        chapter: 3,
        title: "The spirits in prison",
        lookFor: "The most discussed lines in Scripture on Christ between His death and resurrection, tied to Noah and baptism.",
        focus: "18-22",
      },
      {
        book: "Genesis",
        chapter: 6,
        title: "The world before the flood",
        lookFor: "The wickedness and the 'God's sons' of Noah's day that 1 Peter points back to.",
        focus: "1-8",
      },
      {
        book: "2 Peter",
        chapter: 2,
        title: "The example of the fall and the flood",
        lookFor: "Peter's parallel: angels who sinned, and the world that was judged by the flood.",
        focus: "4-10",
      },
      {
        book: "1 Peter",
        chapter: 4,
        title: "The gospel preached even to the dead",
        lookFor: "Why the Good News 'was preached even to the dead,' and what that does and does not mean.",
        focus: "1-7",
      },
    ],
    points: [
      {
        heading: "The verses in their context",
        body:
          "First Peter says Christ, 'put to death in the flesh, but made alive in the spirit,' went and 'preached to the spirits in prison, who before were disobedient, when God waited patiently in the days of Noah, while the ship was being built.' The passage links this to the salvation of 'eight souls' through water, and calls that a symbol of baptism. So the text itself ties whatever Christ did to Noah's day, and to the victory His resurrection secured.",
        verses: ["1 Peter 3:18-20", "1 Peter 3:21", "1 Peter 3:22"],
      },
      {
        heading: "Are they fallen angels or the people of Noah's flood?",
        body:
          "Interpreters divide here. Some, noting that 'spirits' can mean angels and that 2 Peter and Jude speak of angels held 'in everlasting bonds,' read this as Christ proclaiming victory to fallen angels imprisoned since before the flood. Others note the parallel with Noah and with 1 Peter 4, and read it as the souls of the flood-generation, to whom Christ proclaimed the gospel. It is precisely because the text is not obvious that the church has held both readings in its history.",
        verses: ["1 Peter 3:19-20", "2 Peter 2:4", "Jude 1:6", "1 Peter 4:6"],
      },
      {
        heading: "What Christ's preaching was, one of two ways",
        body:
          "If the 'spirits' are fallen angels, Christ's 'preaching' to them is a declaration of His victory, the pronouncement of judgment to the imprisoned rebels. If they are the dead of Noah's generation, the preaching is Christ's proclamation to them, and 1 Peter 4:6, 'the Good News was preached even to the dead,' is cited in support; as the next point makes clear, this is never read as an offer of a second chance after death. The church has never settled this into a single required reading, and the text does not command one. What it does command is humility before a mystery we see in part.",
        verses: ["1 Peter 3:19", "1 Peter 4:6", "Colossians 2:15", "1 Peter 3:22"],
      },
      {
        heading: "What it does not mean",
        body:
          "No responsible reading of this passage teaches a second chance after death. Nothing here says the gospel is offered to the dead in general or that the lost can be saved later; 1 Peter 4:6 explains that the gospel was preached even to the dead so that 'they might be judged indeed as men in the flesh, but live as to God in the spirit,' speaking of those who had heard it and died, not a post-mortem offer. Hebrews stands against any second chance: 'it is appointed for men to die once, and after this, judgment.'",
        verses: ["1 Peter 4:6", "Hebrews 9:27", "Luke 16:26"],
      },
      {
        heading: "The certain truth: Christ is victorious over death and every power",
        body:
          "Everything in the passage serves one great certainty: 'Christ... is at the right hand of God, having gone into heaven, angels and authorities and powers being made subject to him.' When He died and went to the place of the dead, He was not conquered; He came out holding the keys, having stripped the principalities and powers and triumphed over them in the cross. That is the gospel in the text, and it is enough. The rest we can hold with open hands and an open Bible.",
        verses: ["1 Peter 3:22", "Revelation 1:18", "Colossians 2:15", "Hebrews 2:14-15"],
      },
    ],
    keyVerses: ["1 Peter 3:19-20", "2 Peter 2:4", "Jude 1:6", "Colossians 2:15", "1 Peter 3:22"],
    raises: ["what-does-the-creed-mean-by-he-descended-into-hell", "did-jesus-rise-from-the-dead", "what-happens-when-i-die"],
    followsFrom: ["between-the-cross-and-the-resurrection", "what-does-the-creed-mean-by-he-descended-into-hell"],
    related: ["between-the-cross-and-the-resurrection", "what-does-the-creed-mean-by-he-descended-into-hell", "did-jesus-rise-from-the-dead"],
    planned: ["Did anyone enter heaven before Jesus rose?"],
    order: 34,
  },

  {
    slug: "what-is-the-great-tribulation",
    question: "What is the great tribulation?",
    category: "our-hope",
    summary:
      "Jesus warned of 'great oppression' such as the world has never seen, drawing on Daniel's 'time of trouble,' and tied it to the abomination of desolation and the coming of the Son of Man. Bible readers differ over when this period falls in relation to Christ's return. What the texts make certain is that it comes, the saints are called to endure and be watchful, the chosen are kept, and the Son of Man will appear in glory at its end.",
    passages: [
      {
        book: "Matthew",
        chapter: 24,
        title: "The coming of the Son of Man",
        lookFor: "Jesus' prophecy of the great tribulation, the abomination of desolation, and the gathering of the elect.",
        focus: "15-31",
      },
      {
        book: "Mark",
        chapter: 13,
        title: "The same warning, for endurance",
        lookFor: "Mark's version, with Jesus' call to take heed, watch, and endure to the end.",
        focus: "14-27",
      },
      {
        book: "Daniel",
        chapter: 12,
        title: "The time of trouble",
        lookFor: "The Old Testament source of the phrase: a time of trouble, and those written in the book delivered.",
        focus: "1-7",
      },
      {
        book: "Revelation",
        chapter: 13,
        title: "The beast and the saints",
        lookFor: "The persecution of God's people under the beast, and the endurance and faith of the saints.",
      },
    ],
    points: [
      {
        heading: "Jesus predicted an unprecedented oppression",
        body:
          "Jesus said, 'for then there will be great oppression, such as has not been from the beginning of the world until now, no, nor ever will be,' and Mark echoes, 'such as there has not been the like from the beginning of the creation.' He points to Daniel's 'abomination of desolation... standing in the holy place' as the signal to flee. These are not the ordinary hardships of every age; they are a distinct, cosmic-scale pressure that Jesus Himself named and told us to expect.",
        verses: ["Matthew 24:21", "Mark 13:19", "Matthew 24:15", "Matthew 24:22"],
      },
      {
        heading: "Its source is Daniel's 'time of trouble' and the beast",
        body:
          "Jesus reaches back to Daniel: 'at that time shall Michael stand up... and there shall be a time of trouble, such as never was since there was a nation.' Jesus is describing the same final period. In Revelation this tribulation is carried out through the beast, who causes those who will not worship its image to be killed and forces the mark so that 'no one would be able to buy or to sell.' Paul calls the same figure 'the man of sin,' who 'sits as God in the temple of God.'",
        verses: ["Daniel 12:1", "Revelation 13:15-17", "2 Thessalonians 2:3-4", "Matthew 24:15"],
      },
      {
        heading: "The saints are summoned to endurance and watchfulness",
        body:
          "Jesus makes endurance the test: 'he who endures to the end, the same will be saved.' Revelation applies the warning to the church: 'Here is the endurance and the faith of the saints,' and Paul pleads, 'Let no one deceive you in any way.' The tribulation does not remove the need for faithful, watchful living; it confronts it. Perseverance through the pressure, not escape from every hardship, is what the texts call the church to.",
        verses: ["Matthew 24:13", "Revelation 13:10", "2 Thessalonians 2:1-3", "Mark 13:23"],
      },
      {
        heading: "The chosen and the gathered",
        body:
          "Jesus balances the severity with the keeping: 'unless those days had been shortened, no flesh would have been saved. But for the sake of the chosen ones, those days will be shortened.' And when the Son of Man appears, 'he will send out his angels... and they will gather together his chosen ones from the four winds.' John sees a great multitude 'who came out of the great tribulation... they washed their robes, and made them white in the Lamb's blood.' God's people are not lost in the storm; they are kept and gathered.",
        verses: ["Matthew 24:22", "Matthew 24:30-31", "Revelation 7:14", "Daniel 12:1"],
      },
      {
        heading: "The certainties that hold despite timing differences",
        body:
          "Christians differ over whether the tribulation precedes, accompanies, or in some views is largely past, and over how the prophecies fit Israel and the church. But the texts agree on what cannot be moved: the tribulation comes, it is the world's darkest hour and not the church's undoing, the Son of Man will be revealed in glory immediately after, and the church is called to watch and be ready 'in an hour that you don't expect.' The promise is that heaven is on the way, and the Judge is on His throne.",
        verses: ["Matthew 24:29-30", "Matthew 24:44", "Acts 1:7", "Matthew 24:31"],
      },
    ],
    keyVerses: ["Matthew 24:21", "Matthew 24:13", "Daniel 12:1", "Revelation 13:10", "Matthew 24:30"],
    raises: ["signs-before-jesus-returns", "what-is-the-rapture", "will-jesus-return-literally", "what-is-the-abomination-of-desolation"],
    followsFrom: ["signs-before-jesus-returns", "what-is-the-rapture"],
    related: ["signs-before-jesus-returns", "what-is-the-rapture", "will-jesus-return-literally", "what-is-the-final-judgment-and-who-will-be-there"],
    planned: [],
    order: 48,
  },
  {
    slug: "what-is-the-difference-between-resisting-and-grieving-the-spirit",
    question: "What is the difference between resisting the Spirit and grieving the Spirit?",
    category: "holy-spirit",
    summary:
      "Grieving the Spirit is the believer's sin that wounds the Holy Spirit within them, often through unkind words and ungodly conduct. Resisting the Spirit is the opposition of unbelief, a will set against His work pointing to Christ. Quenching the Spirit is smothering His work in the church. The first is the failure of those who belong to God; the latter two are the push-back of those who do not yet yield, and the way forward for any of them is repentance and walking by the Spirit.",
    passages: [
      {
        book: "Ephesians",
        chapter: 4,
        title: "Do not grieve the Holy Spirit",
        lookFor: "The command sits among warnings about our words and how we treat one another; watch the whole context.",
        focus: "25-32",
      },
      {
        book: "Acts",
        chapter: 7,
        title: "You always resist the Holy Spirit",
        lookFor: "Stephen's charge to those who opposed God's messengers: what resisting the Spirit looks like.",
        focus: "51-60",
      },
      {
        book: "1 Thessalonians",
        chapter: 5,
        title: "Do not quench the Spirit",
        lookFor: "The command to not quench the Spirit, beside not despising prophecies and testing all things.",
        focus: "16-22",
      },
      {
        book: "Isaiah",
        chapter: 63,
        title: "They grieved his holy Spirit",
        lookFor: "The Old Testament picture: God's people rebelled and grieved His holy Spirit.",
        focus: "7-10",
      },
    ],
    points: [
      {
        heading: "Grieving the Spirit is the believer's wound",
        body:
          "Paul's command is personal and pointed: 'Don't grieve the Holy Spirit of God, in whom you were sealed for the day of redemption.' The word is the grief of a Person who loves you; you cannot grieve an impersonal force. Isaiah uses the same word of Israel: 'they rebelled, and grieved his holy Spirit.' Grieving assumes a relationship: the Spirit is near and has been sinned against, as when a friend is hurt by the one he loves.",
        verses: ["Ephesians 4:30", "Isaiah 63:10", "Ephesians 4:31"],
      },
      {
        heading: "Resisting the Spirit is the opposition of unbelief",
        body:
          "Stephen's word to his accusers is blunt: 'You stiff-necked and uncircumcised in heart and ears, you always resist the Holy Spirit! As your fathers did, so you do.' To resist is to fight against the Spirit's testimony, to refuse the Christ He points to, to oppose Him from outside rather than grieve Him from within. John says the Spirit's work is to convict the world 'about sin, about righteousness, and about judgment'; resisting is hardening the heart against that conviction.",
        verses: ["Acts 7:51", "Acts 7:52", "John 16:8", "Acts 5:32"],
      },
      {
        heading: "Quenching the Spirit is smothering His work",
        body:
          "Paul adds a third image in one short command: 'Don't quench the Spirit.' To quench is to put out a flame, to stifle and suppress. In the same breath Paul links it to the life of the gathered church: 'Don't despise prophesies. Test all things, and hold firmly that which is good.' Quenching happens when we smother the Spirit's gifts and His word among us out of fear, disorder, or lovelessness, when we put out the fire instead of fanning it.",
        verses: ["1 Thessalonians 5:19", "1 Thessalonians 5:20-21", "1 Thessalonians 5:22"],
      },
      {
        heading: "How the three differ",
        body:
          "Grieve, resist, quench: one is the sorrow of a child who has hurt his Father, one is the defiance of an enemy, and one is the negligence of a church that banks the fire. Grieving is possible only for those who are sealed, who belong: believers wound the Spirit by their conduct and words. Resisting and quenching are the push-back of the world and of careless assemblies against the Spirit's work. The warning of grief calls believers to live worthy of the Spirit who lives in them.",
        verses: ["Ephesians 4:30", "Acts 7:51", "1 Thessalonians 5:19", "John 16:9"],
      },
      {
        heading: "The way back is repentance and walking by the Spirit",
        body:
          "None of these is the unpardonable sin; God's help is always for the one who returns. Paul follows the command with the path: put away bitterness and anger and slander, and 'be kind to one another, tender hearted, forgiving each other, just as God also in Christ forgave you.' And the way to stop grieving and quenching is to be filled and led: 'But I say, walk by the Spirit, and you won't fulfill the lust of the flesh.' Grieve no more; walk in step with Him instead.",
        verses: ["Ephesians 4:31-32", "Galatians 5:16", "1 Thessalonians 5:16-17", "Galatians 5:25"],
      },
    ],
    keyVerses: ["Ephesians 4:30", "1 Thessalonians 5:19", "Acts 7:51", "Ephesians 4:31-32", "Galatians 5:16"],
    raises: ["what-is-the-unpardonable-sin", "how-do-i-know-the-spirit-is-leading-me", "can-i-lose-my-salvation"],
    followsFrom: ["what-is-the-unpardonable-sin", "how-do-i-know-the-spirit-is-leading-me"],
    related: ["what-is-the-unpardonable-sin", "how-do-i-know-the-spirit-is-leading-me", "who-is-the-holy-spirit", "what-does-it-mean-to-be-sealed-with-the-holy-spirit"],
    planned: ["How do I walk by the Spirit day by day?"],
    order: 28,
  },

  {
    slug: "how-do-trials-make-us-more-like-christ",
    question: "How do trials make us more like Christ?",
    category: "our-walk",
    summary:
      "God uses trials not to break us but to shape us: testing produces endurance, endurance produces proven character, and proven character produces hope. Through suffering we are conformed into the image of Christ, depend on His grace, and grow in the holiness that belongs to Him. No trial feels good in the moment, but God works through it for our good and His glory.",
    passages: [
      {
        book: "James",
        chapter: 1,
        title: "The testing of faith",
        lookFor: "Count it all joy: how testing produces endurance, and the crown for those who endure.",
        focus: "1-18",
      },
      {
        book: "Romans",
        chapter: 5,
        title: "Suffering, character, and hope",
        lookFor: "Paul's chain: suffering works perseverance, perseverance proven character, proven character hope.",
        focus: "1-5",
      },
      {
        book: "Hebrews",
        chapter: 12,
        title: "The discipline that yields righteousness",
        lookFor: "Run with endurance; the Lord's discipline yields the peaceful fruit of righteousness.",
        focus: "1-13",
      },
      {
        book: "1 Peter",
        chapter: 1,
        title: "The tested proof of faith",
        lookFor: "Trials test faith like gold tested by fire, to praise, glory, and honor at Christ's revelation.",
        focus: "3-9",
      },
    ],
    points: [
      {
        heading: "Trials work endurance, and endurance works character",
        body:
          "James says, 'Count it all joy, my brothers, when you fall into various temptations, knowing that the testing of your faith produces endurance,' and he adds, 'Let endurance have its perfect work, that you may be perfect and complete, lacking in nothing.' Paul traces the same chain: 'suffering works perseverance; and perseverance, proven character; and proven character, hope.' The trial itself is not the goal; what it grows in us is.",
        verses: ["James 1:2-4", "Romans 5:3-4", "James 1:12"],
      },
      {
        heading: "They test and prove our faith like gold",
        body:
          "Peter writes of believers put 'to grief in various trials' so that 'the proof of your faith, which is more precious than gold that perishes even though it is tested by fire, may be found to result in praise, glory, and honor at the revelation of Jesus Christ.' The fire does not create the faith; it reveals and refines it, burning away the dross and showing what is real. Genuine faith, under pressure, is shown to be genuine.",
        verses: ["1 Peter 1:6-7", "James 1:3", "1 Peter 1:7"],
      },
      {
        heading: "God uses them to conform us to Christ",
        body:
          "Paul's great promise is that 'all things work together for good for those who love God,' and the good is defined: 'he also predestined to be conformed to the image of his Son.' Hebrews adds that the Lord's chastening is 'for our profit, that we may be partakers of his holiness,' yielding 'the peaceful fruit of righteousness' to those trained by it. Suffering is not random; it is the Father's means of making us like His Son.",
        verses: ["Romans 8:28-29", "Hebrews 12:10", "Hebrews 12:11", "2 Corinthians 4:17"],
      },
      {
        heading: "They teach us to depend on His grace",
        body:
          "In the hard places we learn what Paul learned: 'My grace is sufficient for you, for my power is made perfect in weakness,' so that he glories in his weaknesses because when he is weak, then he is strong. Paul even traces the purpose of a crushing trial: 'that we should not trust in ourselves, but in God who raises the dead.' Trials strip away self-reliance and teach us to lean on the God whose strength is made perfect in our need.",
        verses: ["2 Corinthians 12:9-10", "2 Corinthians 1:8-9", "2 Corinthians 12:9"],
      },
      {
        heading: "So we can even rejoice in them",
        body:
          "This is why Scripture repeatedly connects suffering and joy: James says to count it all joy, Paul says we 'rejoice in our sufferings,' and Peter says believers 'greatly rejoice' even while grieved by trials, because the outcome is certain. We rejoice not in the pain itself but in what God is doing through it. Christ Himself 'learned obedience by the things which he suffered,' and we are being conformed to Him, one tested step at a time.",
        verses: ["James 1:2", "Romans 5:3", "1 Peter 1:6", "Hebrews 5:8"],
      },
    ],
    keyVerses: ["Romans 5:3-5", "James 1:2-4", "1 Peter 1:6-7", "Hebrews 12:11", "Romans 8:28-29"],
    raises: ["where-is-god-in-my-pain", "what-does-it-look-like-to-suffer-well", "does-god-use-our-failures"],
    followsFrom: ["what-is-the-difference-between-testing-and-temptation", "how-do-i-fight-sin"],
    related: ["what-is-the-difference-between-testing-and-temptation", "how-do-i-fight-sin", "where-is-god-in-my-pain", "what-does-it-look-like-to-suffer-well"],
    planned: ["How do I see God's purpose in my suffering?"],
    order: 34,
  },

  {
    slug: "what-is-the-difference-between-reading-and-studying-the-bible",
    question: "What is the difference between reading the Bible and studying it?",
    category: "word-of-god",
    summary:
      "Reading the Bible feeds the soul; studying it digs into the riches beneath the surface. Reading takes in the word broadly and habitually; studying concentrates on a passage, asks questions of it, and compares Scripture with Scripture. The Bereans model the difference: they received the word eagerly and were 'examining the Scriptures daily,' and Ezra set his heart to seek the law of God, to do it, and to teach it.",
    passages: [
      {
        book: "Acts",
        chapter: 17,
        title: "The Bereans searched the Scriptures",
        lookFor: "What distinguished the Bereans from others: they received the word eagerly and examined the Scriptures daily.",
        focus: "10-15",
      },
      {
        book: "Ezra",
        chapter: 7,
        title: "Ezra set his heart to study",
        lookFor: "The pattern: Ezra set his heart to seek the law of the Lord, to do it, and to teach it.",
        focus: "1-10",
      },
      {
        book: "Psalms",
        chapter: 119,
        title: "Meditating on God's word",
        lookFor: "Loving the law, hiding it in the heart, and meditating on it all day.",
        focus: "9-16",
      },
      {
        book: "Proverbs",
        chapter: 2,
        title: "Searching out wisdom",
        lookFor: "The effort involved: call out for understanding and search for it as for hidden treasures.",
        focus: "1-6",
      },
    ],
    points: [
      {
        heading: "Reading feeds the soul; studying searches the passage",
        body:
          "Reading takes in the word in breadth, so that the whole counsel of God shapes us; studying takes a portion and opens it, asking what it says, what it means, and how it applies. The Bereans show the merger: they 'received the word with all readiness of the mind, examining the Scriptures daily to see whether these things were so.' Openness is reading; the daily examination, the checking of claims against the text, is studying.",
        verses: ["Acts 17:11", "Acts 17:12", "Colossians 3:16"],
      },
      {
        heading: "Study is diligent and takes effort",
        body:
          "Paul calls Timothy to 'give diligence to present yourself approved by God, a workman who doesn't need to be ashamed, properly handling the Word of Truth.' Proverbs pictures the work: 'call out for discernment... if you seek her as silver, and search for her as for hidden treasures, then you will understand the fear of Yahweh.' Reading can be a quick meal; study is mining for treasure, and the effort is its own reward.",
        verses: ["2 Timothy 2:15", "Proverbs 2:3-5", "Proverbs 2:4", "Colossians 3:16"],
      },
      {
        heading: "Study is a discipline of the heart, set before the digging",
        body:
          "The pattern from Ezra is decisive: 'For Ezra had set his heart to seek Yahweh's law, and to do it, and to teach in Israel statutes and ordinances.' The heart is set first, then the law is sought, then it is done and taught. Study without a heart to obey becomes mere information, and a heart without study becomes shallow. Real study begins with a resolved heart asking God to teach, and the Spirit is the one who leads us into truth.",
        verses: ["Ezra 7:10", "John 14:26", "1 Corinthians 2:10-12", "James 1:22"],
      },
      {
        heading: "The goal is transformation, not information",
        body:
          "The psalmist's purpose for treasuring the word is obedience: 'I have hidden your word in my heart, that I might not sin against you,' and he prays in the law 'on his law he meditates day and night' so that he may observe all that is written. James warns against being 'doers of the word, and not only hearers, deluding your own selves.' Reading and studying both serve one end: that the word would dwell richly and change how we live.",
        verses: ["Psalm 119:11", "Psalm 1:2", "Colossians 3:16", "James 1:22"],
      },
      {
        heading: "Both belong together in a healthy habit",
        body:
          "Reading gives studying its breadth, and studying gives reading its depth; the same Scripture is 'profitable for teaching, for reproof, for correction, and for instruction in righteousness' whether we read it widely or mine it closely. A steady daily reading keeps the whole story in view, while a focused study lets one truth take root deeply. 'How I love your law!' the psalmist sings, 'It is my meditation all day,' and the same love can fill both our wide reading and our deep study.",
        verses: ["2 Timothy 3:16-17", "Psalm 119:97", "Psalm 19:7", "Joshua 1:8"],
      },
    ],
    keyVerses: ["Acts 17:11", "2 Timothy 2:15", "Ezra 7:10", "Psalm 119:11", "Proverbs 2:3-5"],
    raises: ["how-should-i-read-the-bible", "what-does-it-mean-to-meditate-on-scripture", "daily-habit-of-reading-the-bible"],
    followsFrom: ["how-should-i-read-the-bible", "what-does-it-mean-to-meditate-on-scripture"],
    related: ["how-should-i-read-the-bible", "what-does-it-mean-to-meditate-on-scripture", "daily-habit-of-reading-the-bible", "can-i-trust-the-bible"],
    planned: ["How do I study the Bible when I'm short on time?"],
    order: 43,
  },

  {
    slug: "what-does-it-mean-that-god-is-one",
    question: "What does it mean that God is one?",
    category: "jesus-christ",
    summary:
      "To say God is one is the Bible's first confession: 'Hear, Israel: Yahweh is our God. Yahweh is one.' It means there is one true and living God, not many, and that He is wholly Himself, undivided. This 'one' does not contradict the Trinity: the one God is Father, Son, and Holy Spirit, so that when Jesus claims divine honor and the Spirit is poured out, we have not added a second or third God but have met the one God revealed in His fullness.",
    passages: [
      {
        book: "Deuteronomy",
        chapter: 6,
        title: "The great confession",
        lookFor: "The Shema: the Lord our God is one, and the love that the whole heart owes Him.",
        focus: "4-9",
      },
      {
        book: "Mark",
        chapter: 12,
        title: "Jesus quotes the Shema",
        lookFor: "Jesus calls the oneness of God the greatest commandment and builds love for God on it.",
        focus: "28-34",
      },
      {
        book: "Isaiah",
        chapter: 44,
        title: "I am the first and the last",
        lookFor: "God's own witness: there is no God besides Him, and He alone is the Rock.",
        focus: "6-8",
      },
      {
        book: "1 Corinthians",
        chapter: 8,
        title: "One God, one Lord",
        lookFor: "Against many idols: to us there is one God the Father and one Lord Jesus Christ.",
        focus: "4-8",
      },
    ],
    points: [
      {
        heading: "The first confession of the faith",
        body:
          "The Shema is Israel's creed: 'Hear, Israel: Yahweh is our God. Yahweh is one,' and Jesus calls it the first and greatest of all, saying we must love the Lord our God with all our heart, soul, mind, and strength. Over and against the many gods of the nations, Israel confessed one God. James affirms the same belief and adds a warning: 'The demons also believe, and shudder.' To confess that God is one is to know who deserves all of our allegiance.",
        verses: ["Deuteronomy 6:4", "Mark 12:29-30", "James 2:19"],
      },
      {
        heading: "There is no other God",
        body:
          "Isaiah records God's own testimony: 'I am the first, and I am the last; and besides me there is no God,' and again, 'I am Yahweh, and there is no one else. Besides me, there is no God.' Paul applies it to the idols of Corinth: 'we know that no idol is anything in the world, and that there is no other God but one,' though there are many so-called gods and lords. The first commandment follows: 'You shall have no other gods before me,' because there are none to have.",
        verses: ["Isaiah 44:6", "Isaiah 45:5-6", "1 Corinthians 8:4", "Exodus 20:3"],
      },
      {
        heading: "The one God is triune: this does not divide Him",
        body:
          "The confession that God is one is not undone by the appearing of the Father, Son, and Holy Spirit, because these are not three gods but one God revealed in three Persons. Paul, right in the middle of guarding God's oneness, writes: 'to us there is one God, the Father... and one Lord, Jesus Christ,' and in the same breath he calls Jesus divine, the one 'through whom are all things.' Jesus and the Father are one, John hears Him say, and yet He is the Son of the only true God; the 'one' describes the being, not a loneliness.",
        verses: ["1 Corinthians 8:6", "John 17:3", "John 10:30", "Matthew 28:19"],
      },
      {
        heading: "Why it is good news, not a cold arithmetic",
        body:
          "The oneness of God is not an abstract fact; it is the ground of our security. Because He is one, He cannot waver or split: the God who made a promise and the God who keeps it are the same. Because He is one, we are called to one whole-hearted love, with no rival in our affections. And because the one God is Father, Son, and Spirit, the deity we confess is not a solitary reign but the God who sent His Son to save us and His Spirit to dwell in us.",
        verses: ["Deuteronomy 6:5", "James 2:19", "Mark 12:30", "Ephesians 4:4-6"],
      },
      {
        heading: "First commandment means first love",
        body:
          "The confession of one God immediately becomes a command: 'You shall love Yahweh your God with all your heart, with all your soul, and with all your might.' Jesus folds the whole law of love for God and neighbor out of the oneness of God. To believe in one God is not merely to win an argument; it is to give one undivided heart. When rivals are gone, the whole person can turn to the only God, and that is the shape of true worship and the beginning of rest.",
        verses: ["Deuteronomy 6:5", "Mark 12:29-30", "Exodus 20:3", "Ephesians 4:4-6"],
      },
    ],
    keyVerses: ["Deuteronomy 6:4", "Mark 12:29", "1 Corinthians 8:6", "Isaiah 44:6", "Matthew 28:19"],
    raises: ["how-do-the-persons-of-the-trinity-relate", "can-we-understand-the-trinity", "is-jesus-really-god", "are-there-other-gods"],
    followsFrom: ["does-jesus-sharing-gods-nature-mean-two-gods", "what-is-the-trinity"],
    related: ["does-jesus-sharing-gods-nature-mean-two-gods", "what-is-the-trinity", "how-do-the-persons-of-the-trinity-relate", "can-we-understand-the-trinity", "are-there-other-gods"],
    planned: ["Why does the Bible so fiercely forbid idols and images of God?"],
    order: 35,
  },

  {
    slug: "what-does-it-mean-that-god-is-sovereign",
    question: "What does it mean that God is sovereign?",
    category: "suffering-will",
    summary:
      "God is sovereign: He is the King who rules over all creation and history, and He works all things according to the counsel of His will. This is not a cold fate but the rule of a wise and loving Father, who works even evil into good for His people. His sovereignty and our real choices are both true, and its comfort is that nothing is outside His control and nothing can separate us from His love.",
    passages: [
      {
        book: "Isaiah",
        chapter: 40,
        title: "Who has measured the Spirit of Yahweh?",
        lookFor: "The nations are like a drop in a bucket before the one who sits above the circle of the earth.",
        focus: "12-31",
      },
      {
        book: "Daniel",
        chapter: 4,
        title: "The Most High rules",
        lookFor: "Nebuchadnezzar humbled: 'he does according to his will in the army of heaven,' and the King restored.",
        focus: "28-37",
      },
      {
        book: "Ephesians",
        chapter: 1,
        title: "According to the counsel of his will",
        lookFor: "Our blessing traced to God who 'works all things after the counsel of his will.'",
        focus: "3-14",
      },
      {
        book: "Psalms",
        chapter: 103,
        title: "His kingdom rules over all",
        lookFor: "The Lord has established His throne in heaven, and His kingdom rules over all.",
        focus: "19-22",
      },
    ],
    points: [
      {
        heading: "God is King over all things",
        body:
          "The psalmist confesses, 'Yahweh has established his throne in the heavens. His kingdom rules over all,' and Paul blesses 'the God and Father of our Lord Jesus Christ' through whom we were chosen and were 'assigned an inheritance... having been foreordained according to the purpose of him who works all things after the counsel of his will.' From the throne of the universe to the details of our salvation, God rules. There is no corner of existence outside His kingship.",
        verses: ["Psalm 103:19", "Ephesians 1:3", "Ephesians 1:11", "1 Chronicles 29:11-12", "Psalm 115:3"],
      },
      {
        heading: "He does as He pleases, and none can stay His hand",
        body:
          "Nebuchadnezzar, after his pride was broken, confessed of God: 'he does according to his will in the army of heaven, and among the inhabitants of the earth; and no one can stay his hand, or ask him, What are you doing?' Isaiah sets the scale: 'All the nations are like nothing before him. They are regarded by him as less than nothing, and vanity.' God is not one ruler among many; He is the King to whom every throne and every heart is answerable.",
        verses: ["Daniel 4:35", "Isaiah 40:15-17", "Psalm 115:3", "Psalm 103:19"],
      },
      {
        heading: "He works all things for the good of His people",
        body:
          "Sovereignty is not distant fate; it is the rule of a Father with a purpose. Paul's promise spans both: 'We know that all things work together for good for those who love God, to those who are called according to his purpose.' Joseph says the same over the worst betrayal imaginable: 'You meant evil against me, but God meant it for good.' Even that which is evil in itself, God bends toward His people's good and His glory.",
        verses: ["Romans 8:28", "Genesis 50:20", "Ephesians 1:11", "Acts 4:27-28"],
      },
      {
        heading: "His sovereignty and our choices are both true",
        body:
          "The Bible never pits God's rule against human responsibility; it holds both without flinching. At Pentecost, Peter says Jesus was 'delivered up by the determined counsel and foreknowledge of God' and yet was taken 'by the hand of lawless men,' crucified and killed: God's plan, human guilt, both fully real. Paul commands us to 'work out your own salvation with fear and trembling,' and adds, 'For it is God who works in you both to will and to work, for his good pleasure.' Our choosing is real precisely because God is at work.",
        verses: ["Acts 2:23", "Acts 4:27-28", "Philippians 2:12-13", "Genesis 50:20"],
      },
      {
        heading: "Its comfort: nothing is out of His control",
        body:
          "Jesus grounds our fearlessness in the Father's sovereign care: 'the very hairs of your head are all numbered,' and not even a sparrow falls to the ground apart from the Father's will. If God rules the sparrows and numbers our hairs, then every circumstance of our lives is held by Him. Paul's confidence is the last word: nothing, 'neither death, nor life… nor any other created thing, will be able to separate us from the love of God, which is in Christ Jesus our Lord.' The One who rules all things loves us.",
        verses: ["Matthew 10:29-31", "Romans 8:38-39", "Acts 17:26-27", "1 Peter 5:7"],
      },
    ],
    keyVerses: ["Daniel 4:35", "Ephesians 1:11", "Isaiah 40:15", "Romans 8:28", "Acts 2:23"],
    raises: ["do-my-choices-matter", "is-god-in-control", "how-do-i-know-gods-will"],
    followsFrom: ["do-my-choices-matter", "is-god-in-control"],
    related: ["do-my-choices-matter", "is-god-in-control", "how-do-i-know-gods-will", "does-god-change-his-mind"],
    planned: ["Does God control evil as well as good?"],
    order: 38,
  },
  {
    slug: "what-will-believers-be-rewarded-for-if-salvation-is-by-grace-alone",
    question: "What will believers be rewarded for, if salvation is by grace alone?",
    category: "jesus-christ",
    summary:
      "Salvation is a free gift, but faithful service is still rewarded. At the judgment seat of Christ, believers are not examined for whether they are saved but for what they have built on the foundation: their works are tested by fire, and those that remain receive reward. Rewards are not wages for earning God's favor; they are God's happy celebration of grace-empowered faithfulness, and the crowns we receive are cast before His throne.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 3,
        title: "The work and the fire",
        lookFor: "Each builder's work tested by fire: reward for what remains, loss and yet salvation for what burns.",
        focus: "10-15",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "The judgment seat of Christ",
        lookFor: "We must all be revealed before Christ's judgment seat, to receive what is due for what we did in the body.",
        focus: "6-10",
      },
      {
        book: "Matthew",
        chapter: 25,
        title: "The talents",
        lookFor: "The master rewards the faithful servants: 'I will set you over many things; enter into the joy of your lord.'",
        focus: "14-30",
      },
      {
        book: "Ephesians",
        chapter: 2,
        title: "Saved by grace, created for good works",
        lookFor: "Grace saves us without works, then appoints us to walk in the good works God prepared.",
        focus: "8-10",
      },
    ],
    points: [
      {
        heading: "Salvation is a gift; rewards are for faithful stewards",
        body:
          "Paul is emphatic about the gift: 'for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.' Yet the same Paul writes of reward: 'if any man's work remains which he built on it, he will receive a reward.' The two are not in tension, because reward is not payment for earning salvation; it is God honoring the faithful use of the grace He gave. We are saved by grace, and we are rewarded for stewarding grace.",
        verses: ["Ephesians 2:8-9", "1 Corinthians 3:14", "Luke 17:10"],
      },
      {
        heading: "The judgment seat tests our work, not our standing",
        body:
          "Paul says plainly, 'we must all be revealed before the judgment seat of Christ, that each one may receive the things in the body, according to what he has done, whether good or bad.' He means the same for believers: 'The fire itself will test what sort of work each man's work is. If any man's work is burned, he will suffer loss, but he himself will be saved, but as through fire.' The foundation, Christ, never moves; it is the quality of our building that the fire reveals.",
        verses: ["2 Corinthians 5:10", "1 Corinthians 3:13-15", "1 Corinthians 3:11"],
      },
      {
        heading: "God rewards faithful stewardship of what He gave",
        body:
          "In Jesus' parable, the servants are not judged for how much they started with but for how faithfully they used it: 'Well done, good and faithful servant. You have been faithful over a few things, I will set you over many things. Enter into the joy of your lord.' Paul tells slaves, 'from the Lord you will receive the reward of the inheritance; for you serve the Lord Christ.' God measures faithfulness, not raw output, and He never forgets the cup of cold water given in His name.",
        verses: ["Matthew 25:21", "Matthew 10:42", "Colossians 3:23-24", "Matthew 25:23", "1 Corinthians 4:5"],
      },
      {
        heading: "The crowns belong to grace and are cast before the throne",
        body:
          "The Bible speaks of crowns: 'the crown of righteousness' for those who love His appearing, 'the crown of glory' for faithful shepherds, 'the crown of life' for those who endure. Yet in Revelation the elders who hold crowns 'fall down before him who sits on the throne... and throw their crowns before the throne, saying, Worthy are you, our Lord and God.' Even our rewards are a gift of grace, and in glory they redound to the worthiness of the Lamb, who won them for us.",
        verses: ["2 Timothy 4:8", "1 Peter 5:4", "James 1:12", "Revelation 4:10-11"],
      },
      {
        heading: "So we serve with zeal, since our labor is not in vain",
        body:
          "The doctrine of rewards is not a debt-meter that makes us anxious; it is a comfort that makes us diligent. 'Therefore, my beloved brothers, be steadfast, immovable, always abounding in the Lord's work, because you know that your labor is not in vain in the Lord.' Jesus points the same way: 'lay up for yourselves treasures in heaven, where neither moth nor rust consume.' Because grace saves and grace rewards, we can work not to be saved but from being saved, storing treasure that will not rust.",
        verses: ["1 Corinthians 15:58", "Matthew 6:19-20", "Colossians 3:24", "2 Corinthians 5:9"],
      },
    ],
    keyVerses: ["1 Corinthians 3:13-15", "2 Corinthians 5:10", "Matthew 25:21", "1 Corinthians 15:58", "Ephesians 2:8-9"],
    raises: ["what-is-the-final-judgment-and-who-will-be-there", "can-i-lose-my-salvation", "what-should-i-do-now-that-im-saved"],
    followsFrom: ["what-is-the-final-judgment-and-who-will-be-there", "faith-or-works"],
    related: ["what-is-the-final-judgment-and-who-will-be-there", "faith-or-works", "what-is-justification", "what-should-i-do-now-that-im-saved"],
    planned: ["What is the difference between rewards in heaven and salvation itself?"],
    order: 36,
  },

  {
    slug: "does-baptism-save-a-person",
    question: "Does baptism save a person?",
    category: "church",
    summary:
      "Baptism is commanded and precious, but Scripture is clear that the water does not save apart from faith in Christ. Salvation is by grace through faith, and baptism is the sign and seal of that salvation: it pictures dying and rising with Christ and expresses the faith that trusts Him. The New Testament ties baptism to the response of faith and forgiveness, but it never makes the rite the ground of salvation.",
    passages: [
      {
        book: "Acts",
        chapter: 2,
        title: "Repent and be baptized",
        lookFor: "The day of Pentecost: Peter's call to repent and be baptized for the forgiveness of sins, and the response of faith.",
        focus: "36-41",
      },
      {
        book: "Romans",
        chapter: 6,
        title: "Baptized into his death",
        lookFor: "What baptism pictures: union with Christ in His death and resurrection, and newness of life.",
        focus: "1-11",
      },
      {
        book: "Ephesians",
        chapter: 2,
        title: "Saved by grace through faith",
        lookFor: "The ground of salvation stated plainly: grace through faith, not works.",
        focus: "4-9",
      },
      {
        book: "1 Peter",
        chapter: 3,
        title: "The answer of a good conscience",
        lookFor: "Peter's careful words: baptism saves 'not the putting away of the filth of the flesh, but the answer of a good conscience toward God.'",
        focus: "18-22",
      },
    ],
    points: [
      {
        heading: "Scripture ties baptism to repentance and faith",
        body:
          "Peter's call is vivid: 'Repent, and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of sins, and you will receive the gift of the Holy Spirit,' and the response is storied: 'those who gladly received his word were baptized.' Ananias said to Paul, 'Arise, be baptized, and wash away your sins, calling on the name of the Lord.' In every case, baptism is joined to repentance, to the calling on the name of the Lord, to faith that has already received the word.",
        verses: ["Acts 2:38", "Acts 2:41", "Acts 22:16", "Mark 16:16"],
      },
      {
        heading: "But salvation is by grace through faith, not a rite",
        body:
          "The ground of salvation is stated without ambiguity: 'for by grace you have been saved through faith... it is the gift of God, not of works, that no one would boast.' Paul insists that God 'justifies the ungodly' who believes apart from works, and Christ sent him 'not to baptize, but to preach the Good News,' so the heart of the gospel is not the water but the cross. If the water saved by its own power, salvation would be a work, and grace would not be grace.",
        verses: ["Ephesians 2:8-9", "Romans 4:5", "1 Corinthians 1:17", "Romans 6:23"],
      },
      {
        heading: "Baptism is the sign and seal of what faith receives",
        body:
          "Peter's much-quoted line is careful: baptism 'saves' us, 'not the putting away of the filth of the flesh, but the answer of a good conscience toward God, through the resurrection of Jesus Christ.' Baptism does not save by washing dirt from the body; it answers God with a good conscience through faith in the risen Christ. Romans pictures it as union with Christ: 'we were buried therefore with him through baptism to death, that just like Christ was raised... so we also might walk in newness of life.' The water is the sign; Christ and faith are the reality.",
        verses: ["1 Peter 3:21", "Romans 6:3-4", "Colossians 2:12", "Galatians 3:27"],
      },
      {
        heading: "Faith, not the rite, is the instrument of grace",
        body:
          "Paul's order is unmistakable: 'you are all children of God, through faith in Christ Jesus,' and then, 'for as many of you as were baptized into Christ have put on Christ.' Faith first, baptism as its expression, and where the order is reversed Scripture never places the rite before the heart. At Cornelius' house the Holy Spirit fell on the Gentiles as they heard the word, before they were baptized, and Peter asked, 'Can anyone forbid these people from being baptized... They have received the Holy Spirit just like us.' The Spirit's coming and the believers' faith preceded the water.",
        verses: ["Galatians 3:26-27", "Acts 10:44-48", "Acts 10:47", "Acts 2:41"],
      },
      {
        heading: "So baptism is obedience, not a magical act",
        body:
          "Baptism is not to be despised or neglected: it is the Lord's own command, the visible pledge of our union with Him, and a public confession of faith. But it does not confer grace on the unrepentant, and it does not save apart from trust in Christ. The thief on the cross was promised paradise the same day, never having been baptized, while millions who were baptized in water stand condemned if they did not know the Savior. The water is real and meaningful; the gospel is the power of God unto salvation.",
        verses: ["Luke 23:42-43", "Romans 10:13", "Mark 16:16", "Acts 2:38"],
      },
    ],
    keyVerses: ["Ephesians 2:8-9", "Acts 2:38", "1 Peter 3:21", "Mark 16:16", "Romans 6:3-4"],
    raises: ["what-is-baptism", "who-should-be-baptized", "what-is-the-lords-supper"],
    followsFrom: ["who-should-be-baptized", "what-is-baptism"],
    related: ["who-should-be-baptized", "what-is-baptism", "born-again-and-baptism", "what-is-the-lords-supper"],
    planned: ["When should a new believer be baptized?"],
    order: 45,
  },

  {
    slug: "how-does-god-discipline-his-children",
    question: "How does God discipline His children?",
    category: "god-the-father",
    summary:
      "God disciplines those He loves, not to punish but to train His children in holiness. He does this through His word's conviction, through the natural consequences built into sin, and through the circumstances He weaves together for our good. His discipline is proof, not disproof, of sonship, and its aim is that we share His holiness and yield the peaceful fruit of righteousness. In it we hear the voice of a Father, not the anger of a judge.",
    passages: [
      {
        book: "Hebrews",
        chapter: 12,
        title: "The Lord disciplines his son",
        lookFor: "The great passage: whom the Lord loves he chastens, and it yields the peaceful fruit of righteousness.",
        focus: "1-13",
      },
      {
        book: "2 Samuel",
        chapter: 12,
        title: "David confronted in his sin",
        lookFor: "Nathan comes to David with the word, and the consequences of sin are pronounced and begin.",
        focus: "1-14",
      },
      {
        book: "Psalms",
        chapter: 32,
        title: "The heaviness of hidden sin",
        lookFor: "When David kept silent, his bones wasted away; when he confessed, he was forgiven.",
        focus: "1-7",
      },
      {
        book: "Revelation",
        chapter: 3,
        title: "Those I love I reprove",
        lookFor: "The risen Christ to the lukewarm church: 'As many as I love, I reprove and chasten. Be zealous therefore, and repent.'",
        focus: "14-22",
      },
    ],
    points: [
      {
        heading: "Discipline is a proof of being a child",
        body:
          "Hebrews turns discipline into a family marker: 'My son, don't take lightly the chastening of the Lord, nor faint when you are reproved by him; for whom the Lord loves, he chastens, and scourges every son whom he receives.' And the warning cuts the other way: 'If you are without discipline... then are you illegitimate, and not children.' A child's misbehavior is met by a father's discipline; the absence of love's correction is the sign of not belonging.",
        verses: ["Hebrews 12:5-6", "Hebrews 12:7-8", "Proverbs 3:11-12"],
      },
      {
        heading: "Its forms: the word, consequences, and our circumstances",
        body:
          "God disciplines His children through the conviction of His word, as Nathan brought to David: 'You are the man,' and through the consequences that sin carries in its own wake, as David reaped what he had sown. Psalm 32 shows the working of hidden sin: 'When I kept silence, my bones wasted away through my groaning all day long; for day and night your hand was heavy on me.' Sometimes the discipline is the word that stops us cold; sometimes it is the weight of our own unconfessed sin and the world's consequences pressing down.",
        verses: ["2 Samuel 12:7", "Psalm 32:3-4", "Psalm 32:5", "2 Samuel 12:13"],
      },
      {
        heading: "It is always for our good, never vindictive",
        body:
          "Hebrews names the aim: God disciplines us 'for our profit, that we may be partakers of his holiness,' and though 'all chastening seems for the present to be not joyous but grievous; yet afterward it yields the peaceful fruit of righteousness to those who have been exercised thereby.' The psalmist looks back and says the same: 'Before I was afflicted, I went astray; but now I observe your word.' The discipline is a recovery, not a revenge, a Father retrieving His child from the way of death.",
        verses: ["Hebrews 12:10", "Hebrews 12:11", "Psalm 119:67", "Psalm 119:71"],
      },
      {
        heading: "How we should respond",
        body:
          "Hebrews warns against the two wrong responses: don't 'take lightly' the Lord's chastening, as if it does not matter, and don't 'faint' under it, as if His love had gone. The right response is to be 'exercised' by it, to learn, to submit. God's goal is that 'we may be partakers of his holiness' and that we may 'not be condemned with the world.' Believers are judged by the Lord in this life so that the final condemnation is taken away, and that mercy shapes our response to His hand.",
        verses: ["Hebrews 12:5", "Hebrews 12:11", "1 Corinthians 11:32", "Revelation 3:19"],
      },
      {
        heading: "Behind it is the heart of a Father",
        body:
          "The deepest comfort of discipline is its Author. Proverbs says, 'for whom Yahweh loves, he reproves; even as a father reproves the son in whom he delights,' and Hebrews calls on us to 'be in subjection to the Father of spirits, and live,' noting that human fathers chastened us and we respected them. Revelation holds the key: 'As many as I love, I reprove and chasten. Be zealous therefore, and repent.' The hard word and the hard road are not God turning away; they are the Father drawing near to reclaim His own.",
        verses: ["Proverbs 3:12", "Hebrews 12:9", "Revelation 3:19", "Hebrews 12:10"],
      },
    ],
    keyVerses: ["Hebrews 12:6-7", "Proverbs 3:12", "Hebrews 12:10-11", "Psalm 32:3-5", "Revelation 3:19"],
    raises: ["does-god-use-our-failures", "what-happens-when-i-sin", "can-i-lose-my-salvation", "what-is-the-difference-between-gods-discipline-and-the-devils-accusation"],
    followsFrom: ["still-my-father-when-i-fail", "does-god-use-our-failures"],
    related: ["still-my-father-when-i-fail", "does-god-use-our-failures", "what-happens-when-i-sin", "who-is-the-father"],
    planned: [],
    order: 24,
  },

  {
    slug: "how-do-i-experience-the-love-of-god-day-to-day",
    question: "How do I experience the love of God day to day?",
    category: "god-the-father",
    summary:
      "God's love is not something we must earn fresh each morning; it was given once and for all at the cross, and the Spirit pours it into our hearts. We experience it day to day in the Shepherd's care, in the Father's delight sung over us, and by renewing our minds to His tender affection, then we live out of that love toward others. It is received, remembered, and reflected.",
    passages: [
      {
        book: "Romans",
        chapter: 5,
        title: "God's love poured into our hearts",
        lookFor: "The ground: Christ died for us while we were sinners, and the Spirit pours God's love into our hearts.",
        focus: "1-11",
      },
      {
        book: "Psalms",
        chapter: 23,
        title: "The Lord is my shepherd",
        lookFor: "The daily care of the Shepherd: provision, leading, comfort, and goodness and mercy following all our days.",
      },
      {
        book: "Zephaniah",
        chapter: 3,
        title: "He will rejoice over you with singing",
        lookFor: "God in the midst of His people, quieting them with His love and rejoicing over them with singing.",
        focus: "14-20",
      },
      {
        book: "Ephesians",
        chapter: 3,
        title: "Rooted and grounded in love",
        lookFor: "Paul prays we would be strengthened to comprehend the breadth, length, height, and depth of Christ's love.",
        focus: "14-21",
      },
    ],
    points: [
      {
        heading: "Receive it as already given, not daily re-earned",
        body:
          "Paul locates the proof of love in the past, finished work of Christ: 'God commends his own love toward us, in that while we were yet sinners, Christ died for us,' and John says, 'In this is love, not that we loved God, but that he loved us.' We do not experience God's love by making ourselves lovable today; we experience it by believing the love He showed once at the cross, which never recedes. The feeling may fluctuate; the fact does not.",
        verses: ["Romans 5:6-8", "1 John 4:10", "John 3:16", "Romans 5:8"],
      },
      {
        heading: "The Spirit pours it into our hearts",
        body:
          "Paul adds the dimension of felt experience: 'hope doesn't disappoint us, because God's love has been poured out into our hearts through the Holy Spirit who was given to us.' The love is not only a doctrine to be studied but a gift to be savored, and the Spirit is the one who makes it vivid. Paul prays that we would be 'strengthened with power through his Spirit in the inward man,' so that Christ dwells in our hearts by faith and we may 'know Christ's love which surpasses knowledge,' filled with all the fullness of God.",
        verses: ["Romans 5:5", "Ephesians 3:16-19", "Romans 5:8"],
      },
      {
        heading: "See it in the Shepherd's daily care",
        body:
          "Psalm 23 is the hymn of a life held by love: 'Yahweh is my shepherd: I shall lack nothing... He restores my soul,' and 'surely goodness and loving kindness shall follow me all the days of my life.' Jesus tells us not to be anxious because our Father feeds the birds and 'Aren't you of much more value than they?' The everyday mercies of sleep, food, and breath, the people and graces we did not earn, are the love of God in a low and constant key, present every single day.",
        verses: ["Psalm 23:1-3", "Psalm 23:6", "Matthew 6:25-26", "Lamentations 3:22-23"],
      },
      {
        heading: "Renew your mind to His affection and delight",
        body:
          "Zephaniah gives a staggering picture of God's nearness: 'Yahweh, your God, is in your midst... He will rejoice over you with joy. He will calm you in his love. He will rejoice over you with singing.' Not a distant approval but a rejoicing, singing delight over His people. We experience this as we preach it to ourselves and 'be still, and know that I am God,' letting the truth of God's delight settle where our fears have lived.",
        verses: ["Zephaniah 3:17", "Psalm 46:10", "Jeremiah 31:3", "Lamentations 3:22-23"],
      },
      {
        heading: "Live it out, and it comes alive",
        body:
          "The love we receive is meant to become the love we give. John's chain is the rule of the Christian life: 'We love him, because he first loved us,' and, 'Beloved, let us love one another, for love is of God.' Paul calls us to 'walk in love, even as Christ also loved you.' We experience God's love day to day as we receive it at the cross, savor it by the Spirit, see it in daily mercies, preach its delight to our hearts, and spill it over onto the people God puts in our path.",
        verses: ["1 John 4:19", "1 John 4:7", "Ephesians 5:1-2", "1 John 4:11"],
      },
    ],
    keyVerses: ["Romans 5:5", "Zephaniah 3:17", "Psalm 23:1", "Ephesians 3:18-19", "1 John 4:19"],
    raises: ["made-for-relationship", "who-is-the-father", "what-does-it-mean-that-god-is-love", "what-does-it-mean-to-abide-in-christs-love"],
    followsFrom: ["what-does-it-mean-that-god-is-love", "who-is-the-father"],
    related: ["what-does-it-mean-that-god-is-love", "who-is-the-father", "made-for-relationship", "how-does-gods-love-differ-from-human-love"],
    planned: [],
    order: 25,
  },

  {
    slug: "how-can-i-know-gods-affection-for-me-is-real",
    question: "How can I know God's affection for me is real and not just a doctrine?",
    category: "god-the-father",
    summary:
      "You can know God's affection is real because it is anchored in facts, not feelings: He did not spare His own Son for you, and nothing can separate you from His love. Jesus is the exact picture of the Father's heart, and the Father rejoices over you with singing. Feelings lag behind the promise; so we ground ourselves in the cross, the Word, and the Spirit's witness, and we let that love become the love we live from.",
    passages: [
      {
        book: "Romans",
        chapter: 8,
        title: "More than conquerors through him who loved us",
        lookFor: "He who did not spare His own Son; and nothing in all creation can separate us from His love.",
        focus: "31-39",
      },
      {
        book: "Luke",
        chapter: 15,
        title: "The loving father",
        lookFor: "The father who runs to his son: the clearest picture Jesus gives of the Father's heart toward the undeserving.",
        focus: "11-32",
      },
      {
        book: "Zephaniah",
        chapter: 3,
        title: "He rejoices over you with singing",
        lookFor: "God in the midst of His people, calming them with His love and rejoicing over them with singing.",
        focus: "14-20",
      },
      {
        book: "1 John",
        chapter: 3,
        title: "Children of God",
        lookFor: "See what great love the Father has given us, that we should be called children of God.",
        focus: "1-3",
      },
    ],
    points: [
      {
        heading: "The cross is proof, not just a claim",
        body:
          "Paul argues from the greater to the greater: 'He who didn't spare his own Son, but delivered him up for us all, how would he not also with him freely give us all things?' You look at the cross not for a vague assurance but for a settled verdict: God so loved you that He gave. John puts it in the perfect tense: 'In this is love, not that we loved God, but that he loved us, and sent his Son as the atoning sacrifice for our sins.' The affection was demonstrated in an event, and events do not need our feelings to remain true.",
        verses: ["Romans 8:32", "John 3:16", "1 John 4:10", "Romans 5:8"],
      },
      {
        heading: "Jesus is the picture of the Father's heart",
        body:
          "When Philip asked to see the Father, Jesus answered, 'He who has seen me has seen the Father.' The tenderness Jesus showed to sinners is the Father's own tenderness: in the parable, the father sees his son 'while he was still far off,' runs to him, and throws his arms around him; and Jesus said that even evil parents know how to give good gifts, 'how much more will your Father who is in heaven give good things to those who ask him!' Whatever you fear about God, check it against the face of Jesus, who is the mirror of the Father's love.",
        verses: ["John 14:9", "Luke 15:20", "Matthew 7:11", "Luke 15:22"],
      },
      {
        heading: "Nothing can pry you out of His love",
        body:
          "Paul's confidence is total: 'I am persuaded, that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come... will be able to separate us from the love of God, which is in Christ Jesus our Lord.' Jesus says of His sheep that no one 'will snatch them out of my hand,' and 'No one is able to snatch them out of my Father's hand.' Your sin, your failure, your weakness, your darkest day: none of them can separate you. The love is held by God, not by your grip.",
        verses: ["Romans 8:38-39", "John 10:27-29", "Romans 8:35", "John 10:28-29"],
      },
      {
        heading: "Feelings lag; ground yourself in the promise",
        body:
          "Affection can feel absent on a hard Monday. So God gives us promises to stand on, not moods to chase: 'I will in no way leave you, neither will I in any way forsake you,' and, 'See how great a love the Father has bestowed on us, that we should be called children of God.' And He has 'predestined us for adoption as children,' so that the Spirit in our hearts cries, 'Abba, Father,' testifying with our spirit that we are His. When feelings lie, the promise and the Spirit tell the truth.",
        verses: ["Hebrews 13:5", "1 John 3:1", "Ephesians 1:5", "Romans 8:15-16"],
      },
      {
        heading: "Receive it, and you will reflect it",
        body:
          "The love is meant to be tasted and lived. 'Oh taste and see that Yahweh is good,' the psalmist invites, and John draws the inevitable line: 'We love him, because he first loved us.' The person who is certain of God's affection is freed to love others from it rather than grasping for love from them. Paul's prayer is that we would be 'rooted and grounded in love,' able to 'comprehend with all the saints what is the breadth and length and height and depth' of Christ's love. That is how you know it is real: it changes you.",
        verses: ["Psalm 34:8", "1 John 4:19", "Ephesians 3:17-18", "1 John 4:11"],
      },
    ],
    keyVerses: ["Romans 8:32", "Romans 8:38-39", "1 John 3:1", "Zephaniah 3:17", "John 14:9"],
    raises: ["what-does-it-mean-that-god-is-love", "made-for-relationship", "how-do-i-experience-the-love-of-god-day-to-day", "how-do-i-receive-love-when-i-dont-feel-lovable"],
    followsFrom: ["how-does-gods-love-differ-from-human-love", "what-does-it-mean-that-god-is-love"],
    related: ["how-does-gods-love-differ-from-human-love", "what-does-it-mean-that-god-is-love", "who-is-the-father", "made-for-relationship"],
    planned: [],
    order: 26,
  },

// ------------------------------------------------------------------
  // TRAIL: The Unseen Realm
  // ------------------------------------------------------------------
  {
    slug: "how-do-i-discern-demonic-influence-from-ordinary-struggles",
    question: "How do I discern demonic influence from ordinary struggles?",
    category: "unseen-realm",
    summary:
      "Scripture never blames every struggle on demons. It maps our battles into three sources, the world, the flesh, and the devil, and it gives us tests to tell them apart, because each battle is fought with the right weapon. Discerning the source of a struggle is the first act of the fight.",
    passages: [
      {
        book: "Ephesians",
        chapter: 6,
        title: "The enemy and the armor",
        lookFor: "Paul names the real enemy and then gives the armor for the fight: truth, righteousness, peace, faith, salvation, and the word.",
        focus: "10-20",
      },
      {
        book: "James",
        chapter: 4,
        title: "The wars within us",
        lookFor: "Notice where James says our fights come from: desires, not demons. Then note the one sentence on the devil: resist him, and he will flee.",
        focus: "1-10",
      },
      {
        book: "1 John",
        chapter: 4,
        title: "Testing the spirits",
        lookFor: "John gives the test for spiritual influence: does the spirit confess Jesus Christ incarnate, or does it deny Him?",
        focus: "1-6",
      },
      {
        book: "Matthew",
        chapter: 4,
        title: "The temptations of Jesus",
        lookFor: "Watch how Jesus answers the devil: not with special powers, but with the written word, Scripture quoted aloud.",
        focus: "1-11",
      },
    ],
    points: [
      {
        heading: "Scripture maps the fight into three fronts",
        body: "The Bible names three sources of our struggles: the world, the flesh, and the devil. John writes that all that is in the world with its desires is passing away, James says each person is drawn away by his own desires, and Peter says the devil prowls like a roaring lion. Most of our daily battles are world-shaped or flesh-shaped. To call every temptation demonic is to misdiagnose it, and a misdiagnosed battle is fought with the wrong remedy.",
        verses: ["1 John 2:16", "James 1:13-15", "1 Peter 5:8", "Ephesians 2:1-3"],
      },
      {
        heading: "The enemy's fingerprints are specific",
        body: "Scripture shows the devil working in distinct ways: accusation, deception, and a hunger for worship. He is called the accuser who accuses the brothers day and night, and Jesus calls him the father of lies, while Paul warns that he can masquerade as an angel of light. When a struggle is driven by constant accusation, lies about who God is or who we are, or pressure toward false worship, the enemy's hand is near.",
        verses: ["Revelation 12:10", "John 8:44", "2 Corinthians 11:14", "2 Corinthians 2:11", "Matthew 4:9"],
      },
      {
        heading: "Ordinary struggles are usually ordinary",
        body: "James is blunt: where do wars and fights come from? From your own pleasures that war in your members. Even the apostle Paul describes a very ordinary inward battle between what he wants to do and what he does. Paul does not blame demons for his struggle; he names the flesh. Normal temptations are human, and the remedy for them is the ordinary means of grace: repentance, fellowship, and the word. Blaming demons can become an excuse to avoid the painful work of killing our own desires.",
        verses: ["James 4:1-2", "Romans 7:18-19", "Galatians 5:16-17", "2 Timothy 2:22"],
      },
      {
        heading: "The test is Jesus, not the experience",
        body: "John gives the test for spirits: every spirit that confesses Jesus Christ come in the flesh is of God, and every spirit that denies Him is not. Paul adds that no one speaking by God's Spirit says Jesus is accursed, and no one can say Jesus is Lord except by the Holy Spirit. Whatever a voice or impulse does with Jesus tells you what spirit stands behind it.",
        verses: ["1 John 4:1-3", "1 John 4:6", "1 Corinthians 12:3", "1 John 2:22"],
      },
      {
        heading: "Discerning how to fight the battle you are in",
        body: "Paul discerned a spirit of divination in a slave girl and cast it out in Jesus' name, yet he never treated every hostile crowd or beating as demonic; he endured them as suffering for Christ. Discernment tells you which battle you are in: what to resist, what to endure, and what to repent of. Resist the devil, and he will flee; submit to God in everything else, and you will find His grace sufficient for the rest.",
        verses: ["Acts 16:16-18", "James 4:7", "2 Corinthians 12:9-10", "Ephesians 6:18", "1 Peter 5:9"],
      },
    ],
    keyVerses: ["1 John 4:1", "James 4:7", "1 Peter 5:8-9", "Ephesians 6:12", "1 John 4:4"],
    raises: ["what-is-spiritual-warfare", "praying-against-the-enemy", "how-do-i-fight-sin", "how-do-i-help-a-friend-who-is-suffering"],
    followsFrom: ["who-is-satan", "can-a-christian-be-tormented-by-demons"],
    related: ["who-is-satan", "are-demons-real", "can-a-christian-be-tormented-by-demons", "how-do-i-fight-sin"],
    planned: ["What does it mean that the whole world lies in the evil one?"],
    order: 54,
  },
  {
    slug: "what-is-the-armor-of-god-piece-by-piece",
    question: "What is the armor of God, piece by piece?",
    category: "unseen-realm",
    summary:
      "The armor of God is God's provision for standing in the fight: truth, righteousness, the good news of peace, faith, salvation, the word of God, and prayer. It is not a call to try harder on our own. It is the way we are strong in the Lord and in the strength of His might, piece by piece, standing where Christ has already won.",
    passages: [
      {
        book: "Ephesians",
        chapter: 6,
        title: "The whole armor",
        lookFor: "Read the passage slowly and name each piece: belt, breastplate, shoes, shield, helmet, sword. Then notice the command that frames it all: be strong in the Lord.",
        focus: "10-20",
      },
      {
        book: "2 Corinthians",
        chapter: 10,
        title: "The weapons of the warfare",
        lookFor: "Paul says the weapons are not of the flesh: what does it mean to fight with truth and obedience instead of anger and manipulation?",
        focus: "3-5",
      },
      {
        book: "1 Thessalonians",
        chapter: 5,
        title: "Children of the day, armed",
        lookFor: "Paul puts on the breastplate of faith and love and the helmet of hope: the same armor from a different angle, worn by people who live in the light.",
        focus: "4-11",
      },
      {
        book: "Luke",
        chapter: 4,
        title: "The sword in action",
        lookFor: "Watch Jesus use the word of God as a sword against the tempter: the weapon of the Spirit being wielded in its clearest form.",
        focus: "1-13",
      },
    ],
    points: [
      {
        heading: "The strength comes from the Lord first",
        body: "Paul's command is not first 'put on the armor' but 'be strong in the Lord': the armor is how we lean into His strength, not a list of self-improvement tasks. David sang that the Lord is his rock and his shield, and Paul boasted that when he was weak, then he was strong in Christ's power. Every piece of armor is a gift to be received before it is a discipline to be worn.",
        verses: ["Ephesians 6:10-11", "Psalm 18:2", "2 Corinthians 12:9-10", "Philippians 4:13"],
      },
      {
        heading: "The belt of truth and the breastplate of righteousness",
        body: "Truth is what everything else hangs on: Jesus says He is the truth, and the Psalmist asks God for truth in the inward parts. The breastplate guards the heart with righteousness, which in the gospel is first Christ's righteousness credited to us and then His righteousness worked in us. When the accuser aims at your heart, the breastplate answers with what God says is true about the one who is in Christ.",
        verses: ["Ephesians 6:14", "John 14:6", "Psalm 51:6", "1 Corinthians 1:30", "Philippians 3:9", "Isaiah 59:17"],
      },
      {
        heading: "The shoes of peace and the shield of faith",
        body: "The shoes make us ready to go with the good news of peace, free to move even in hostile territory, carrying reconciliation rather than our own resentments. The shield of faith is taken up above all, because faith receives what God has promised and quenches the fiery darts of doubt, fear, and accusation. Faith does not mean feeling strong; it means holding onto the stronger one who has already overcome the world.",
        verses: ["Ephesians 6:15-16", "Romans 10:15", "1 John 5:4", "1 Peter 1:8-9", "1 John 4:4"],
      },
      {
        heading: "The helmet of salvation and the sword of the Spirit",
        body: "The helmet protects the mind with the certainty of salvation: hope set on what God has done and promised. The sword of the Spirit is the word of God, the only offensive weapon in the list, and Jesus wielded it against the tempter by quoting Scripture, not by arguing in His own strength. The word is living and active, able to cut through lies and to be the sword we carry into every fight.",
        verses: ["Ephesians 6:17", "1 Thessalonians 5:8", "Hebrews 4:12", "Matthew 4:4", "Luke 4:4"],
      },
      {
        heading: "Prayer is the motion of the whole armor",
        body: "Paul ends with prayer at all times in the Spirit, with all perseverance, for all the saints: the armor is worn standing still, but prayer is the breathing in which the soldier lives and moves. We put on the armor and then we pray, because the battle is the Lord's and we ask Him to fight it. None of the pieces work apart from reliance on the one who gives them.",
        verses: ["Ephesians 6:18", "Matthew 26:41", "Colossians 4:2-3", "Luke 18:1"],
      },
    ],
    keyVerses: ["Ephesians 6:10-11", "Ephesians 6:14", "Ephesians 6:16", "Ephesians 6:17", "Ephesians 6:18"],
    raises: ["how-do-i-pray", "praying-against-the-enemy", "what-is-faith", "how-do-i-fight-sin"],
    followsFrom: ["what-is-spiritual-warfare"],
    related: ["what-is-spiritual-warfare", "who-is-satan", "how-do-i-fight-sin", "what-is-faith"],
    planned: ["What does it mean to take every thought captive?"],
    order: 55,
  },
  {
    slug: "what-do-angels-look-like-and-can-believers-see-them",
    question: "What do angels look like, and can believers see them?",
    category: "unseen-realm",
    summary:
      "Scripture shows angels in two kinds of appearances: overwhelming glory that terrifies, wings, fire, light, and ordinary human form doing quiet service. Believers are never commanded to seek angelic visions, and Scripture warns against preoccupation with angels: they serve, and they always point to God. Whether we see them or not, they are real servants sent for those who will inherit salvation.",
    passages: [
      {
        book: "Hebrews",
        chapter: 1,
        title: "Christ above the angels",
        lookFor: "See what angels are in the opening chapters of Hebrews: ministers and flames of fire, serving God and serving His heirs; and see how Jesus towers over them all.",
        focus: "1-14",
      },
      {
        book: "2 Kings",
        chapter: 6,
        title: "The mountain full of horses and chariots",
        lookFor: "The prophet prays for his servant's eyes to be opened, and the unseen becomes visible: the hills around them are full of horses and chariots of fire.",
        focus: "15-17",
      },
      {
        book: "Luke",
        chapter: 2,
        title: "The night glory shone",
        lookFor: "Watch the shepherds' reaction when the angel appears: terror first, then the message of great joy. Glory announces good news, not trivia.",
        focus: "8-15",
      },
      {
        book: "Revelation",
        chapter: 22,
        title: "The angel who refuses worship",
        lookFor: "John falls down to worship the angel, and the angel commands him to rise: worship God alone. Angels themselves would have it no other way.",
        focus: "8-9",
      },
    ],
    points: [
      {
        heading: "Angels are beings, not metaphors",
        body: "Scripture speaks of angels as real servants: spirits sent out to serve those who will inherit salvation, mighty ones who do God's word and obey His voice. When Elisha's servant saw the hills full of horses and chariots of fire, he was not seeing a nice feeling: he was seeing what was really there all along. The unseen realm is not imaginary, and its inhabitants act in real history.",
        verses: ["Hebrews 1:14", "Psalm 103:20", "2 Kings 6:17", "Psalm 34:7"],
      },
      {
        heading: "In glory, angels are overwhelming",
        body: "When angels appear in their heavenly glory, the usual human response is terror: the shepherds were terrified when the glory of the Lord shone around them, and the guards at the tomb shook with fear. The prophets describe cherubim and seraphim with wings covering face and feet, wheels full of eyes, and voices that shake the thresholds. That is the heavenly reality veiled from everyday sight, and it is not meant to be stared at casually.",
        verses: ["Luke 2:9", "Isaiah 6:2", "Ezekiel 1:5-14", "Revelation 4:8", "Matthew 28:2-4"],
      },
      {
        heading: "In service, angels look like ordinary people",
        body: "The same beings who appear in glory often appear as ordinary men: Abraham fed three visitors who were God's messengers, and the writer of Hebrews warns, do not forget to show hospitality, for some have entertained angels without knowing it. The angel who freed Peter looked like a bright presence, but the jailers saw a man walking out. Angels are not always dazzling; sometimes they simply knock on the door.",
        verses: ["Genesis 18:2-8", "Hebrews 13:2", "Acts 12:7-10", "Judges 13:6", "Acts 1:10"],
      },
      {
        heading: "Seeing them is never the point",
        body: "Scripture never tells us to seek visions of angels, and it warns against obsessing over angelic worship: Paul rebukes a false humility that grows out of paying attention to angels, and John was told to worship God, not the angel who spoke to him. When Elisha's servant saw the chariots, he kept serving; the sight changed his courage, not his calling. Angels point to God, and anyone who turns them into a spectacle has already missed what they are for.",
        verses: ["Colossians 2:18", "Revelation 22:8-9", "Acts 12:7", "Luke 1:11-14", "2 Corinthians 11:14"],
      },
      {
        heading: "What they do matters more than what they look like",
        body: "Angels guard, minister, and carry God's people: they camp around those who fear the Lord, they are sent to help those who will inherit salvation, and they carried Lazarus to Abraham's side. Their service is real and constant, seen or unseen. We do not need to see them to be surrounded by them; we need only to fear God, pray, and receive His servants' ministry with the same readiness Jesus showed when they came to strengthen Him.",
        verses: ["Psalm 91:11-12", "Hebrews 1:14", "Luke 16:22", "2 Kings 6:17", "Matthew 4:11"],
      },
    ],
    keyVerses: ["Hebrews 1:14", "Psalm 91:11-12", "Revelation 22:9", "2 Kings 6:17", "Hebrews 13:2"],
    raises: ["do-believers-have-guardian-angels", "what-are-angels", "what-happens-when-i-die", "who-is-satan"],
    followsFrom: ["what-are-angels"],
    related: ["what-are-angels", "do-believers-have-guardian-angels", "who-is-satan"],
    planned: ["What does the Bible say about cherubim and seraphim?"],
    order: 56,
  },

  // ------------------------------------------------------------------
  // TRAIL: Our Hope
  // ------------------------------------------------------------------
  {
    slug: "what-is-heaven-like",
    question: "What is heaven like?",
    category: "our-hope",
    summary:
      "Heaven is not a distant fog of floating spirits: it is the presence of God, and it leads to the new heaven and new earth where God dwells among His people forever. The Bible paints it in pictures, a city, a garden, a feast, a river, a wedding, because it is too good for plain words, and at its center is always the Lamb on the throne, not the scenery.",
    passages: [
      {
        book: "John",
        chapter: 14,
        title: "A place prepared",
        lookFor: "Jesus speaks of the Father's house with many homes and a place He is preparing: heaven is a destination He went ahead to make ready.",
        focus: "1-6",
      },
      {
        book: "Revelation",
        chapter: 21,
        title: "God dwells with people",
        lookFor: "The new creation descends out of heaven, and the loud voice says the heart of it all: God himself will be with them, and every tear is wiped away.",
        focus: "1-8",
      },
      {
        book: "Revelation",
        chapter: 22,
        title: "The garden city",
        lookFor: "The river of life, the tree of life, the throne: heaven is a garden and a city at once, and its citizens see His face and reign with Him.",
        focus: "1-5",
      },
      {
        book: "1 Thessalonians",
        chapter: 4,
        title: "With the Lord forever",
        lookFor: "Paul's great comfort for the grieving: the dead in Christ will rise, and we will be caught up together to meet the Lord, and so be with the Lord forever.",
        focus: "13-18",
      },
    ],
    points: [
      {
        heading: "Heaven is first about God's presence",
        body: "The heart of heaven is not a place but a Person: in your presence is fullness of joy and pleasures forevermore, and Jesus prays that we may see His glory and be with Him where He is. In the new creation the loud voice announces the whole point: the dwelling of God is with people, and God himself will be with them. If heaven were only a perfect beach or a golden city without God, it would not be heaven at all.",
        verses: ["Psalm 16:11", "John 17:24", "Revelation 21:3", "Revelation 22:4"],
      },
      {
        heading: "It is a real place, prepared for us",
        body: "Jesus calls it the Father's house with many homes and says He goes to prepare a place for us. The heroes of faith sought a better country, a heavenly one, and God is not ashamed to be called their God because He has prepared a city for them. Heaven is not a mood or a state of mind: it is somewhere we go, with rooms, a city, and foundations.",
        verses: ["John 14:2-3", "Hebrews 11:16", "Hebrews 11:10", "Revelation 21:2"],
      },
      {
        heading: "It is bodily and whole, not disembodied",
        body: "The final hope is not escape from creation but its renewal: a new heaven and a new earth where righteousness dwells, and our lowly bodies are transformed to be like His glorious one. Paul says this perishable body must put on the imperishable, and creation itself waits for its liberation. Heaven begins at death as being with Christ, and it is completed at the resurrection in a whole new creation.",
        verses: ["2 Peter 3:13", "Philippians 3:20-21", "1 Corinthians 15:53", "Romans 8:21-23", "Revelation 21:1"],
      },
      {
        heading: "It is rest, feasting, and restoration",
        body: "The images Scripture stacks up are images of abundance and rest: a feast of rich food and choice wine, springs of living water, the tree of life with fruit and healing, and the promise that death, mourning, crying, and pain are gone forever because the first things have passed away. God himself wipes away every tear, and His servants serve Him without weariness. Heaven restores what sin broke and satisfies what we were made for.",
        verses: ["Isaiah 25:6-8", "Revelation 7:15-17", "Revelation 22:1-2", "Revelation 21:4", "Matthew 11:28-29"],
      },
      {
        heading: "What we know now is only a glimpse",
        body: "Paul says no eye has seen or ear heard what God has prepared for those who love Him, and John says it is not yet revealed what we will be. The pictures in Revelation are true pictures, but they are pictures: the reality is greater than the words can carry. We do not need a full map of heaven to live in its hope, because the hope is a person, and He is already risen: we await Him, and His appearing is the whole of our inheritance.",
        verses: ["1 Corinthians 2:9", "1 John 3:2", "1 Corinthians 13:12", "Titus 2:13", "Revelation 22:20"],
      },
    ],
    keyVerses: ["Revelation 21:3-4", "John 14:2-3", "Revelation 22:4", "1 Thessalonians 4:17", "2 Corinthians 5:8"],
    raises: ["what-is-the-new-heaven-and-new-earth", "what-will-we-do-in-the-new-creation", "will-we-recognize-each-other-in-the-resurrection", "what-happens-when-i-die"],
    followsFrom: ["what-happens-when-i-die"],
    related: ["what-happens-when-i-die", "what-is-the-new-heaven-and-new-earth", "what-is-the-resurrection"],
    planned: ["What will worship be like in the new creation?"],
    order: 49,
  },
  {
    slug: "will-we-recognize-each-other-in-the-resurrection",
    question: "Will we recognize each other in the resurrection?",
    category: "our-hope",
    summary:
      "The Bible never answers this question with a single proof-text, and honest study starts there. But it gives strong grounds to answer yes: resurrection is renewal, not replacement; the risen Jesus was recognized by His friends; Moses and Elijah appeared known on the mountain; and Scripture's picture of the new creation is people gathered, not souls dissolved. Our knowing deepens in glory, it does not dissolve.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 15,
        title: "Sown and raised",
        lookFor: "Paul's farming picture: what is sown becomes a new plant, changed and glorified, yet continuous with what was sown. This is the grammar for every question about our future bodies.",
        focus: "35-49",
      },
      {
        book: "Matthew",
        chapter: 17,
        title: "Moses and Elijah on the mountain",
        lookFor: "The disciples see Moses and Elijah talking with Jesus and know exactly who they are. Glory does not erase identity: it reveals it.",
        focus: "1-8",
      },
      {
        book: "Luke",
        chapter: 24,
        title: "Known in the breaking of bread",
        lookFor: "On the road to Emmaus the risen Jesus is first hidden from their eyes, then their eyes are opened and they know Him in the breaking of the bread.",
        focus: "13-35",
      },
      {
        book: "1 Thessalonians",
        chapter: 4,
        title: "Comfort for those who mourn",
        lookFor: "Paul writes so that the grieving will not sorrow without hope: those who sleep in Jesus God will bring with Him, and we will be with the Lord forever, together.",
        focus: "13-18",
      },
    ],
    points: [
      {
        heading: "Honest about the silence",
        body: "The Scriptures do not give us a verse that says 'yes, you will know everyone in heaven.' What they give us is something better: a God who makes all things new rather than throwing them away, and a hope that turns our knowledge toward fullness. We should not manufacture confidence the text does not give, but neither should we quietly drop what it does give.",
        verses: ["1 John 3:2", "1 Corinthians 13:12", "Philippians 1:6", "Isaiah 43:19"],
      },
      {
        heading: "Resurrection is renewal, not replacement",
        body: "Paul answers how the dead are raised with a seed: what you sow is not the body that will be, but God gives it a body as He pleases. The plant is not a different thing from the seed; it is the seed fulfilled. Our bodies are sown perishable and raised imperishable, and our lowly body is changed to be like His glorious body. If our bodies are continuous with what we were, our persons surely are too.",
        verses: ["1 Corinthians 15:36-38", "1 Corinthians 15:42-44", "Philippians 3:20-21", "1 Corinthians 15:49"],
      },
      {
        heading: "The risen Jesus was known by name",
        body: "The risen Christ was not a stranger: Mary knew His voice when He called her name, the disciples on the road knew Him in the breaking of bread, and John knew Him on the shore before anyone else spoke. He showed them His hands and His feet and ate with them. Resurrection did not erase friendship or memory; it restored them and filled them with joy.",
        verses: ["John 20:16", "Luke 24:31", "John 21:7", "Luke 24:39-41"],
      },
      {
        heading: "Glory reveals identity, it does not dissolve it",
        body: "On the mount of transfiguration, Peter instantly knew the two men with Jesus and called them Moses and Elijah, though they appeared in glory. Names were not lost in the brightness; they were confirmed in it. If the disciples could know two saints who had been dead for centuries, the family and friends we have known in the flesh will hardly be unknowable to us in the kingdom where every name is written in the Lamb's book of life.",
        verses: ["Matthew 17:3-4", "Luke 9:30-33", "Matthew 8:11", "Revelation 21:27"],
      },
      {
        heading: "Our relationships are transformed, not unmade",
        body: "Jesus says that in the resurrection people neither marry nor are given in marriage: the old form of union passes, and in its place Scripture sets the marriage supper of the Lamb, where the whole church is the bride. We will not need marriage to hold love together, because love itself will be perfect and unbreakable. The people we loved will still be the people we loved, now fully themselves, and we will be with them and with the Lord forever.",
        verses: ["Matthew 22:30", "Revelation 19:7-9", "1 Thessalonians 4:16-17", "Revelation 21:4", "John 11:25-26"],
      },
    ],
    keyVerses: ["1 Corinthians 15:42-44", "1 Corinthians 13:12", "1 Thessalonians 4:17", "1 John 3:2", "Revelation 21:4"],
    raises: ["what-is-heaven-like", "what-is-the-new-heaven-and-new-earth", "what-will-we-do-in-the-new-creation", "what-does-it-mean-to-be-a-child-of-god"],
    followsFrom: ["what-is-the-resurrection"],
    related: ["what-is-the-resurrection", "what-happens-when-i-die", "what-is-the-new-heaven-and-new-earth"],
    planned: ["What did Jesus mean that in the resurrection there is no marriage?"],
    order: 50,
  },
  {
    slug: "what-is-the-abomination-of-desolation",
    question: "What is the abomination of desolation?",
    category: "our-hope",
    summary:
      "The abomination of desolation is Daniel's phrase for a desecration that leaves the holy place desolate. Jesus took it up as the sign of Jerusalem's destruction and as a pattern for the last days. It calls us to watch, to flee when the sign appears, and to stand in faith, rather than to build confident timetables out of a phrase the Bible itself does not decode completely.",
    passages: [
      {
        book: "Daniel",
        chapter: 9,
        title: "Seventy weeks and the desolator",
        lookFor: "Daniel's prophecy ends with one who makes sacrifices cease and sets up the abomination that makes desolate, until the decreed end is poured out on the desolator.",
        focus: "24-27",
      },
      {
        book: "Daniel",
        chapter: 11,
        title: "The one who defiles the sanctuary",
        lookFor: "A coming king takes away the continual burnt offering and sets up the abomination that makes desolate; wise people who know their God will be strong and act.",
        focus: "31-35",
      },
      {
        book: "Matthew",
        chapter: 24,
        title: "Jesus takes up the phrase",
        lookFor: "Jesus tells the disciples the abomination of desolation is the sign to flee to the mountains: watchfulness and urgency, not curiosity.",
        focus: "15-28",
      },
      {
        book: "2 Thessalonians",
        chapter: 2,
        title: "The man of lawlessness",
        lookFor: "Paul describes the rebellion and the one who exalts himself against God and takes his seat in the temple of God: the final form of the same apostasy.",
        focus: "1-12",
      },
    ],
    points: [
      {
        heading: "Daniel's oracle is the source",
        body: "Daniel first uses the phrase: the desolator makes a covenant, stops the sacrifice, and sets up the abomination that makes desolate; from the time it is set up, 1,290 days are decreed. History saw a first fulfillment when a Seleucid king desecrated the temple in the years before the Maccabees, and Jesus treats that history as a pattern still pointing forward. The phrase names a real sacrilege with a real aftermath: a holy place left empty of worship and filled with defiance.",
        verses: ["Daniel 9:27", "Daniel 11:31", "Daniel 12:11", "Daniel 8:11-13"],
      },
      {
        heading: "Jesus applies it to Jerusalem's fall",
        body: "Standing in the temple courts, Jesus says when you see the abomination of desolation standing in the holy place, let those in Judea flee to the mountains. Luke's parallel makes the sign concrete: when you see Jerusalem surrounded by armies, know her desolation is near. Within a generation the city and temple fell, and the church fled to the hills, exactly as Jesus had said. The phrase has a past tense it has already fulfilled; this gives us confidence that its future tense will be fulfilled too.",
        verses: ["Matthew 24:15-16", "Mark 13:14", "Luke 21:20-21", "Luke 21:24"],
      },
      {
        heading: "It also looks toward the last days",
        body: "Paul warns that before the Lord's coming there will come a rebellion and the man of lawlessness, who opposes and exalts himself against every so-called god, taking his seat in the temple of God, proclaiming himself to be God. John's Revelation shows the same pattern: the beast and its image demanding worship, deceiving the earth with signs. The abomination is not only a past event; it is a pattern that ripens to its fullest at the end, when the world's last rebellion is embodied in one who claims the place of God.",
        verses: ["2 Thessalonians 2:3-4", "Revelation 13:14-15", "Daniel 7:25", "Revelation 14:9-11"],
      },
      {
        heading: "Its proper response is watchfulness and flight, not a calendar",
        body: "Jesus does not give us a date; He gives us a posture: when you see it, flee without delay, and pray your flight is not on a Sabbath or in winter. The church's response to desolation is not to build timelines but to be ready to move, to pray, and to endure. Whatever the sign looks like in its final form, the command stands the same: do not go back for your cloak, do not linger, and hold fast to the word you have heard.",
        verses: ["Matthew 24:16-20", "Mark 13:15-16", "Luke 21:36", "Matthew 24:42-44"],
      },
      {
        heading: "The desolate place is not the last word",
        body: "Daniel himself ends the vision with hope: at that time your people shall be delivered, everyone found written in the book, and the wise shall shine like the stars. Jesus says that for the sake of the elect those days will be cut short, and the one who endures to the end will be saved. The abomination makes a place desolate, but it cannot make God's people desolate: the sheep hear His voice, and no power of earth or hell can snatch them from His hand.",
        verses: ["Daniel 12:1-3", "Matthew 24:13", "Matthew 24:22", "John 10:27-29", "Revelation 14:12"],
      },
    ],
    keyVerses: ["Daniel 9:27", "Matthew 24:15", "2 Thessalonians 2:3-4", "Daniel 12:1-3", "Matthew 24:22"],
    raises: ["what-is-the-great-tribulation", "what-is-the-rapture", "signs-before-jesus-returns", "will-jesus-return-literally"],
    followsFrom: ["what-is-the-great-tribulation"],
    related: ["what-is-the-great-tribulation", "signs-before-jesus-returns", "what-is-the-rapture", "what-is-the-final-judgment-and-who-will-be-there"],
    planned: ["What is the image of the beast?"],
    order: 51,
  },


  // ------------------------------------------------------------------
  // Batch: finish the thinnest trails (God the Father, church, who we are)
  // ------------------------------------------------------------------
  {
    slug: "what-is-the-difference-between-gods-discipline-and-the-devils-accusation",
    question: "What is the difference between God's discipline and the devil's accusation?",
    category: "god-the-father",
    summary:
      "God's discipline comes from the heart of a Father who loves His child and aims at repentance and restoration; the devil's accusation comes from an enemy who wants to destroy and drive to despair. One says 'turn, turn from your evil ways,' the other says 'you're finished.' The distinguishing mark is what each does with our sin: discipline calls us to confess and return, accusation tries to convince us there is no return. The Father's voice restores; the accuser's voice condemns, and in Christ the accuser is silenced.",
    passages: [
      {
        book: "Zechariah",
        chapter: 3,
        title: "Joshua the high priest accused",
        lookFor: "Satan stands at Joshua's right hand to accuse him, and the Lord rebukes the accuser and clothes Joshua.",
        focus: "1-7",
      },
      {
        book: "Revelation",
        chapter: 12,
        title: "The accuser is thrown down",
        lookFor: "The accuser of the brothers, who accuses them day and night, is cast out and overcome by the Lamb's blood.",
        focus: "7-12",
      },
      {
        book: "Hebrews",
        chapter: 12,
        title: "The Lord's discipline",
        lookFor: "Whom the Lord loves He chastens, and it yields the peaceful fruit of righteousness.",
        focus: "1-11",
      },
      {
        book: "Psalms",
        chapter: 32,
        title: "Confession and forgiveness",
        lookFor: "Unconfessed sin weighs heavy; confession brings forgiveness and a hiding place.",
        focus: "1-7",
      },
    ],
    points: [
      {
        heading: "The accuser's voice names, shames, and condemns",
        body:
          "Revelation names his work: 'the accuser of our brothers has been thrown down, who accuses them before our God day and night.' In Zechariah, 'Satan standing at his right hand to be his adversary' accuses Joshua the high priest. Jesus calls him 'a murderer from the beginning' and 'a liar, and its father.' His goal is not to make you holy but to make you hopeless: he takes true sins and uses them to convince you that God could never want you.",
        verses: ["Revelation 12:10", "Zechariah 3:1", "John 8:44", "Zechariah 3:3"],
      },
      {
        heading: "God's discipline calls you to repent and return",
        body:
          "God's correction never leaves you without a way back. 'For whom the Lord loves, he chastens, and scourges every son whom he receives,' and the risen Christ says, 'As many as I love, I reprove and chasten. Be zealous therefore, and repent.' The discipline of Psalm 32 is bounded: 'I acknowledged my sin to you... and you forgave the iniquity of my sin.' The Father's word is always, turn and live, because discipline is for restoration, not destruction.",
        verses: ["Hebrews 12:6", "Revelation 3:19", "Psalm 32:5", "Proverbs 3:12"],
      },
      {
        heading: "Look at what each does with your sin",
        body:
          "The difference is in the direction of the voice. Godly sorrow 'works repentance to salvation, which brings no regret,' and it moves you toward confession and change; the sorrow of the world 'works death,' and it moves you toward despair and giving up. God's discipline exposes sin to fix it; the accuser exposes sin to trap you in it. One produces brokenness that repents; the other produces shame that hides. The true test is which of the two is driving you.",
        verses: ["2 Corinthians 7:10", "Psalm 32:3-4", "Psalm 32:5", "Zechariah 3:4"],
      },
      {
        heading: "In Christ the accuser is silenced",
        body:
          "Paul closes the door on the accuser with a question: 'Who could bring a charge against God's chosen ones? It is God who justifies. Who is he who condemns? It is Christ who died, yes rather, who was raised from the dead, who is at the right hand of God, who also makes intercession for us.' Revelation says the saints 'overcame him because of the Lamb's blood, and because of the word of their testimony.' Whatever the accuser says is answered by the blood of Christ and the One who pleads for us.",
        verses: ["Romans 8:33-34", "Revelation 12:11", "Zechariah 3:2", "1 John 2:1"],
      },
      {
        heading: "How to tell them apart and respond",
        body:
          "God's discipline leads you to say, 'I have sinned; forgive me and restore me,' as David did, and it ends in the Father cleansing and re-clothing you, as Joshua was given 'rich clothing.' The accuser's voice leads you to say, 'God could never forgive someone like me,' and it ends in hiding. So respond to the convicting of the Holy Spirit, take your sin to the Father and confess it, and greet the accuser's lies with the word: 'there is therefore now no condemnation to those who are in Christ Jesus.' The Father disciplines to restore; the enemy accuses to destroy; you know a Father's voice from an enemy's.",
        verses: ["Psalm 51:1", "Psalms 51:12", "Zechariah 3:4", "Romans 8:1"],
      },
    ],
    keyVerses: ["Revelation 12:10", "Romans 8:33-34", "Hebrews 12:6", "Zechariah 3:4", "Romans 8:1"],
    raises: ["does-god-use-our-failures", "what-happens-when-i-sin", "how-do-i-know-my-repentance-is-genuine"],
    followsFrom: ["how-does-god-discipline-his-children", "does-god-use-our-failures"],
    related: ["how-does-god-discipline-his-children", "does-god-use-our-failures", "what-happens-when-i-sin", "can-gods-grace-really-cover-my-worst-sins"],
    planned: ["What does it mean that we have an advocate with the Father?"],
    order: 27,
  },

  {
    slug: "what-does-it-mean-to-abide-in-christs-love",
    question: "What does it mean to abide in Christ's love?",
    category: "god-the-father",
    summary:
      "To abide in Christ's love is not to climb toward it but to remain in it: to stay connected to Jesus as a branch stays in the vine, to live out of the love He already gives rather than trying to earn it. Jesus abided in the Father's love by keeping His commandments, and He calls us to do the same. The fruit of abiding is not a feeling but a life: joy, fruit, and love for others that flow from remaining in Him.",
    passages: [
      {
        book: "John",
        chapter: 15,
        title: "The vine and the branches",
        lookFor: "Abide in me, and I in you; the branch bears fruit only as it remains in the vine.",
        focus: "1-17",
      },
      {
        book: "1 John",
        chapter: 4,
        title: "God is love",
        lookFor: "We have known and believed the love God has for us, and love is the proof we abide in Him.",
        focus: "7-21",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "Nothing can separate us",
        lookFor: "Neither height nor depth nor anything in creation can separate us from God's love in Christ.",
        focus: "31-39",
      },
      {
        book: "Psalms",
        chapter: 36,
        title: "Your loving kindness",
        lookFor: "How precious is God's loving kindness; men take refuge under the shadow of His wings.",
        focus: "5-10",
      },
    ],
    points: [
      {
        heading: "Abiding means remaining, not achieving",
        body:
          "Jesus commands a rest, not a struggle: 'Remain in me, and I in you. As the branch can't bear fruit by itself, unless it remains in the vine, so neither can you, unless you remain in me.' He says, 'I am the vine. You are the branches. He who remains in me, and I in him, the same bears much fruit, for apart from me you can do nothing.' To abide is to stay connected to the source, to live from the life He gives rather than producing it ourselves.",
        verses: ["John 15:4", "John 15:5", "John 15:9"],
      },
      {
        heading: "It begins with the love you are given",
        body:
          "The command is built on a gift already given: 'Even as the Father has loved me, I also have loved you. Remain in my love.' John makes the same point: 'We know and have believed the love which God has for us,' and 'he who remains in love remains in God, and God remains in him.' Abiding is not earning His love by staying good; it is remaining in the love He has already poured out on us in Christ, the love nothing can separate us from.",
        verses: ["John 15:9", "1 John 4:16", "Romans 8:38-39", "Psalm 36:7"],
      },
      {
        heading: "We abide by keeping His commandments and His word",
        body:
          "Jesus grounds abiding in obedience: 'If you keep my commandments, you will remain in my love; even as I have kept my Father's commandments, and remain in his love.' He also says, 'If you remain in me, and my words remain in you,' you will ask and receive. Abiding is sustained by the word dwelling in us and by walking in obedience, not as a way to be loved but as the staying place of the already-loved.",
        verses: ["John 15:10", "John 15:7", "John 15:12", "1 John 4:12"],
      },
      {
        heading: "Its fruit is joy, fruitfulness, and love",
        body:
          "Jesus names the harvest of abiding: 'I have spoken these things to you, that my joy may remain in you, and that your joy may be made full,' and 'in this is my Father glorified, that you bear much fruit; and so you will be my disciples.' The first fruit of remaining in the Vine is love for the brothers: 'This is my commandment, that you love one another, even as I have loved you.' Abiding is not a private feeling; it is a life that bears the fruit of love.",
        verses: ["John 15:11", "John 15:8", "John 15:12", "John 15:5"],
      },
      {
        heading: "It is the environment of the whole Christian life",
        body:
          "Paul describes our standing as 'rooted and grounded in love,' able to 'comprehend with all the saints what is the breadth and length and height and depth' of Christ's love, and John insists that 'God is love, and he who remains in love remains in God.' To abide in Christ's love is to live consciously in the truth that you are loved, held, and welcomed by the Father through the Son, and to let that love shape every obedience, every word, and every relationship. It is the air the Christian breathes.",
        verses: ["Ephesians 3:17-18", "1 John 4:16", "Psalm 36:7", "Romans 8:39"],
      },
    ],
    keyVerses: ["John 15:9-10", "John 15:4-5", "1 John 4:16", "John 15:11", "Romans 8:38-39"],
    raises: ["how-do-i-experience-the-love-of-god-day-to-day", "what-does-it-mean-that-god-is-love", "made-for-relationship"],
    followsFrom: ["how-do-i-experience-the-love-of-god-day-to-day", "how-can-i-know-gods-affection-for-me-is-real"],
    related: ["how-do-i-experience-the-love-of-god-day-to-day", "how-can-i-know-gods-affection-for-me-is-real", "what-does-it-mean-that-god-is-love", "who-is-the-father"],
    planned: ["How do I know when I am abiding in Christ?"],
    order: 28,
  },

  {
    slug: "how-do-i-receive-love-when-i-dont-feel-lovable",
    question: "How do I receive love when I don't feel lovable?",
    category: "god-the-father",
    summary:
      "God's love for you is grounded in Christ, not in your loveliness. He loved you while you were still a sinner, He gave His Son for you, and nothing you have done can make Him love you less. When you feel unlovable, the answer is not to become more worthy but to receive the love that is already yours by faith, and to remember that the Father runs to meet even the child who has wandered far.",
    passages: [
      {
        book: "Romans",
        chapter: 8,
        title: "Nothing separates us from His love",
        lookFor: "He did not spare His own Son; and no created thing can separate you from His love.",
        focus: "31-39",
      },
      {
        book: "Luke",
        chapter: 15,
        title: "The loving father",
        lookFor: "The father who runs to the son who has wasted everything, and celebrates his return.",
        focus: "11-32",
      },
      {
        book: "Psalms",
        chapter: 51,
        title: "David after his great sin",
        lookFor: "The man whose sin was public and terrible, pleading for mercy and restoration.",
        focus: "1-12",
      },
      {
        book: "1 John",
        chapter: 4,
        title: "He loved us first",
        lookFor: "Not that we loved God, but that He loved us and sent His Son.",
        focus: "9-19",
      },
    ],
    points: [
      {
        heading: "God loves you because of Christ, not because you are lovable",
        body:
          "Paul states the order so we can't miss it: 'God commends his own love toward us, in that while we were yet sinners, Christ died for us.' John agrees: 'In this is love, not that we loved God, but that he loved us, and sent his Son as the atoning sacrifice for our sins.' Your lovableness was never the basis. The basis is God's character and Christ's finished work, both of which are settled whether or not you feel worthy.",
        verses: ["Romans 5:8", "1 John 4:10", "John 3:16", "Galatians 2:20"],
      },
      {
        heading: "The cross is the measure, not your worthiness",
        body:
          "Look at what His love has already cost: 'He who didn't spare his own Son, but delivered him up for us all, how would he not also with him freely give us all things?' Paul's own confidence was personal: 'I live by faith in the Son of God, who loved me, and gave himself up for me.' If God loved you enough to give His Son, then no assessment of your current worthiness can subtract from a love that was given while you were at your worst.",
        verses: ["Romans 8:32", "Galatians 2:20", "1 John 4:9", "Romans 5:8"],
      },
      {
        heading: "Even after failure, the Father still runs",
        body:
          "In the parable, the son has squandered everything and deserves nothing, yet 'while he was still far off, his father saw him, and was moved with compassion, and ran.' David, after the greatest moral collapse in his story, prays 'Have mercy on me, God, according to your loving kindness,' and is forgiven and restored. John assures us that 'if we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.' Your worst moment is not beyond His love; it is exactly where His love runs to find you.",
        verses: ["Luke 15:20", "Psalm 51:1", "1 John 1:9", "Luke 15:22-24"],
      },
      {
        heading: "Receive it by faith as a fact, not as a feeling",
        body:
          "Feeling unlovable is a feeling; it is not the truth. Scripture commands us to believe what is true, and what is true is Paul's settled persuasion that nothing 'will be able to separate us from the love of God, which is in Christ Jesus our Lord,' and God's promise, 'I will in no way leave you, neither will I in any way forsake you.' Zephaniah pictures God rejoicing over His people and calming them 'in his love.' Let the promise anchor you when the feeling says otherwise.",
        verses: ["Romans 8:38-39", "Hebrews 13:5", "Zephaniah 3:17", "1 John 4:16"],
      },
      {
        heading: "His love is what makes you His beloved child",
        body:
          "The deepest cure for feeling unlovable is your new identity: 'See how great a love the Father has bestowed on us, that we should be called children of God!' You are not asking a stranger to like you; you are a son or daughter, chosen 'for adoption as children through Jesus Christ... according to the good pleasure of his desire.' The Spirit in your heart cries 'Abba, Father,' testifying that you belong. Receive the love you were given as a child, not the approval you could never earn as a stranger.",
        verses: ["1 John 3:1", "Ephesians 1:5", "Romans 8:15-16", "John 15:9"],
      },
    ],
    keyVerses: ["Romans 5:8", "Luke 15:20", "1 John 1:9", "Zephaniah 3:17", "1 John 3:1"],
    raises: ["how-do-i-experience-the-love-of-god-day-to-day", "what-does-it-mean-to-be-a-child-of-god", "made-for-relationship"],
    followsFrom: ["how-can-i-know-gods-affection-for-me-is-real", "how-do-i-experience-the-love-of-god-day-to-day"],
    related: ["how-can-i-know-gods-affection-for-me-is-real", "what-does-it-mean-to-be-a-child-of-god", "made-for-relationship", "can-gods-grace-really-cover-my-worst-sins"],
    planned: ["How do I stop measuring God's love by my performance?"],
    order: 29,
  },

  {
    slug: "what-is-the-difference-between-baptism-and-the-lords-supper",
    question: "What is the difference between baptism and the Lord's Supper?",
    category: "church",
    summary:
      "Baptism and the Lord's Supper are the two ordinances Jesus gave His church, and each is rooted in His command. Baptism happens once, at the beginning, and pictures entering into union with Christ in His death and resurrection. The Lord's Supper is repeated, and keeps the church returning to remember the body and blood of Christ until He comes. One marks the start of the Christian walk; the other sustains it along the way.",
    passages: [
      {
        book: "Matthew",
        chapter: 28,
        title: "Go, make disciples, and baptize",
        lookFor: "Jesus commissions the church and joins baptism to making disciples.",
        focus: "16-20",
      },
      {
        book: "Luke",
        chapter: 22,
        title: "The institution of the Supper",
        lookFor: "Jesus takes bread and cup and gives them to the disciples to remember Him.",
        focus: "14-20",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "Baptized, then breaking bread",
        lookFor: "The response on Pentecost: those who received the word were baptized, then continued in the breaking of bread.",
        focus: "38-47",
      },
      {
        book: "Romans",
        chapter: 6,
        title: "What baptism pictures",
        lookFor: "Baptized into Christ, buried with Him, raised to walk in newness of life.",
        focus: "1-11",
      },
    ],
    points: [
      {
        heading: "Both are commandments of Jesus",
        body:
          "Jesus commanded baptism as part of making disciples: 'Go, and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.' He commanded the Supper in the same way: 'Do this in memory of me,' and 'as often as you drink, in memory of me.' Neither is an optional decoration of the church; both come from the Lord's own word and have been kept by the church from the beginning.",
        verses: ["Matthew 28:19", "Luke 22:19", "1 Corinthians 11:24-25", "Matthew 28:20"],
      },
      {
        heading: "Baptism happens once; the Supper is repeated",
        body:
          "Baptism is a one-time act of initiation, showing our once-for-all union with Christ: 'all we who were baptized into Christ Jesus were baptized into his death.' The Supper, by contrast, is for a lifetime: Jesus says, 'as often as you eat this bread and drink this cup, you proclaim the Lord's death until he comes.' Baptism points to the doorway into the Christian life; the Supper is the repeated meal that sustains us on the way.",
        verses: ["Romans 6:3", "1 Corinthians 11:25-26", "Matthew 28:19", "1 Corinthians 11:26"],
      },
      {
        heading: "Each pictures something different",
        body:
          "Baptism pictures death and resurrection with Christ: 'We were buried therefore with him through baptism to death... so we also might walk in newness of life,' and Paul says we were 'buried with him in baptism, in which you were also raised with him through faith.' The Supper pictures our sharing, or communion, in Christ: 'The cup of blessing which we bless, isn't it a sharing of the blood of Christ? The bread which we break, isn't it a sharing of the body of Christ?' Entry into the risen life, and ongoing fellowship with the crucified Lord.",
        verses: ["Romans 6:4", "Colossians 2:12", "1 Corinthians 10:16", "1 Corinthians 10:17"],
      },
      {
        heading: "They have different moments and meanings",
        body:
          "In Scripture the order is clear: those who received the word 'were baptized,' and then 'they continued steadfastly in the apostles' teaching and fellowship, in the breaking of bread, and prayer.' Baptism is the public beginning of following Christ; the Supper is the regular remembrance of Christ by the gathered church. The one is administered to the new believer once, in the presence of the church; the other is shared repeatedly, as the church is built up and remembers together.",
        verses: ["Acts 2:41", "Acts 2:42", "Acts 2:41-42", "Matthew 26:26-28"],
      },
      {
        heading: "Neither saves; both point to the One who does",
        body:
          "Both ordinances are visible words that point beyond themselves to Christ. Peter is careful about baptism, that it saves 'not the putting away of the filth of the flesh, but the answer of a good conscience toward God' through the resurrection of Jesus. And Paul warns that the Supper must be taken with self-examination 'if he doesn't discern the Lord's body.' Whether we are baptized once or take the bread repeatedly, the power is never in the rite but in the Christ they proclaim, and in the faith that lays hold of Him.",
        verses: ["1 Peter 3:21", "1 Corinthians 11:27-29", "Romans 6:4", "1 Corinthians 11:28"],
      },
    ],
    keyVerses: ["Matthew 28:19", "Luke 22:19-20", "Romans 6:3-4", "1 Corinthians 11:25-26", "1 Corinthians 10:16"],
    raises: ["what-is-baptism", "who-may-take-the-lords-supper", "how-often-the-lords-supper"],
    followsFrom: ["what-is-baptism", "what-is-the-lords-supper"],
    related: ["what-is-baptism", "what-is-the-lords-supper", "does-baptism-save-a-person", "who-may-take-the-lords-supper"],
    planned: ["Why does the church practice these two and not more?"],
    order: 46,
  },

  {
    slug: "who-may-take-the-lords-supper",
    question: "Who may take the Lord's Supper?",
    category: "church",
    summary:
      "The Lord's Supper is for those who belong to Jesus and come in faith: believers who examine themselves and discern the Lord's body. It does not require perfection, but it does require confession, since Paul warns against taking it in an unworthy manner. The table is for the church, the body of Christ, and its participants are called to come with humility, repentance, and love for the brothers.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 11,
        title: "Take it worthily",
        lookFor: "Examine yourself, discern the body, and the warning about taking it unworthily.",
        focus: "17-34",
      },
      {
        book: "1 Corinthians",
        chapter: 10,
        title: "The table of the Lord",
        lookFor: "The cup and bread are a sharing in Christ's body; you cannot share the Lord's table and the table of demons.",
        focus: "14-22",
      },
      {
        book: "Matthew",
        chapter: 26,
        title: "The first Supper",
        lookFor: "Jesus gives the bread and cup to His disciples, the community of those who followed Him.",
        focus: "26-30",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "The church at the table",
        lookFor: "Those who received the word were baptized and continued in the breaking of bread.",
        focus: "42-47",
      },
    ],
    points: [
      {
        heading: "It is for believers, not the world",
        body:
          "The Supper belongs to those who are in Christ. Jesus gave it to His disciples, and in Acts it is those who 'gladly received his word' and were baptized who 'continued steadfastly… in the breaking of bread.' Paul's warnings assume those at the table are part of the Christian community, and he calls on them to 'discern the Lord's body.' The table is not a general meal for anyone present; it is the communion of the church with its Lord.",
        verses: ["Matthew 26:26", "Acts 2:41-42", "1 Corinthians 11:29", "Acts 2:46"],
      },
      {
        heading: "It does not require perfection, but it requires examination",
        body:
          "Paul's instruction is not that only the sinless come but that each one come examining: 'Let a man examine himself, and so let him eat of the bread, and drink of the cup.' He adds, 'For if we discerned ourselves, we wouldn't be judged.' The table is for repentant sinners, not the self-righteous, and the examination is the honest bringing of ourselves, confessing our sin and trusting the body broken for us. It calls for preparation of heart, not manufactured sinlessness.",
        verses: ["1 Corinthians 11:28", "1 Corinthians 11:31", "1 Corinthians 11:27-28"],
      },
      {
        heading: "Taking it unworthily is a warning, not a bar",
        body:
          "Paul warns: 'whoever eats this bread or drinks the Lord's cup in a way unworthy of the Lord will be guilty of the body and the blood of the Lord,' and that he who eats and drinks in an unworthy way 'eats and drinks judgment to himself.' He even says some among them were weak and sick because of it. The warning is real, and it points to the answer: come examining, discerning the body, turning from sin. It is a call to worthy participation, not an excuse to stay away because you are imperfect.",
        verses: ["1 Corinthians 11:27", "1 Corinthians 11:29", "1 Corinthians 11:30", "1 Corinthians 11:28"],
      },
      {
        heading: "It is for the body of Christ, in unity and love",
        body:
          "The Supper is shared by the one body: 'Because there is one loaf of bread, we, who are many, are one body; for we all partake of the one loaf of bread.' Paul rebukes the Corinthians for dividing at the table, which is not to 'discern the Lord's body.' And he warns against mixing the table with idolatry: 'You can't both drink the cup of the Lord and the cup of demons.' Those who come are those who belong to the one Lord and, for His sake, to one another.",
        verses: ["1 Corinthians 10:17", "1 Corinthians 11:18", "1 Corinthians 10:21", "1 Corinthians 11:33"],
      },
      {
        heading: "Who then should come",
        body:
          "Come if you are trusting in Christ and belong to His church: examine yourself, confess any sin, receive the bread and cup in faith, 'proclaiming the Lord's death until he comes.' Come in love for the brothers, in forgiveness toward any who have wronged you, and in dependence on the One whose body was broken and blood poured out for you. Paul's closing word for the assembly is grace: the table is the place where forgiven sinners meet their Lord and are strengthened for the road ahead.",
        verses: ["1 Corinthians 11:26", "1 Corinthians 11:28", "1 Corinthians 11:33-34", "Matthew 26:26-28"],
      },
    ],
    keyVerses: ["1 Corinthians 11:27-29", "1 Corinthians 11:28", "1 Corinthians 10:16-17", "Matthew 26:26", "1 Corinthians 11:26"],
    raises: ["what-is-the-lords-supper", "how-often-the-lords-supper", "how-is-christ-present-in-the-lords-supper"],
    followsFrom: ["what-is-the-lords-supper", "what-is-the-difference-between-baptism-and-the-lords-supper"],
    related: ["what-is-the-lords-supper", "what-is-the-difference-between-baptism-and-the-lords-supper", "how-is-christ-present-in-the-lords-supper", "what-is-the-church"],
    planned: ["Why do some churches close the table and others open it to all?"],
    order: 47,
  },

  {
    slug: "how-is-christ-present-in-the-lords-supper",
    question: "How is Christ present in the Lord's Supper?",
    category: "church",
    summary:
      "At the Supper Jesus said, 'This is my body' and 'This is my blood,' and the church has always recognized a real presence of Christ at His table, while describing it differently. The historic views range from the bread and wine becoming His body and blood to a spiritual presence received by faith to a memorial of His once-for-all sacrifice. All agree on what matters: Christ is the host and the gift, the Supper is communion with Him, and His sacrifice is not repeated but proclaimed.",
    passages: [
      {
        book: "1 Corinthians",
        chapter: 11,
        title: "The words of institution",
        lookFor: "This is my body; this cup is the new covenant in my blood; you proclaim the Lord's death until he comes.",
        focus: "23-29",
      },
      {
        book: "1 Corinthians",
        chapter: 10,
        title: "A participation in Christ",
        lookFor: "The cup is a sharing in Christ's blood and the bread a sharing in His body.",
        focus: "14-22",
      },
      {
        book: "Luke",
        chapter: 22,
        title: "The institution in the upper room",
        lookFor: "The body given and the blood poured out, and the command to do it in memory of Him.",
        focus: "14-20",
      },
      {
        book: "Luke",
        chapter: 24,
        title: "He was known in the breaking of bread",
        lookFor: "The risen Jesus is recognized by His disciples in the breaking of the bread.",
        focus: "28-35",
      },
    ],
    points: [
      {
        heading: "The words Jesus spoke",
        body:
          "At the table Jesus took bread and said, 'This is my body, which is broken for you. Do this in memory of me,' and the cup, 'This cup is the new covenant in my blood, which is poured out for you.' Matthew records, 'this is my blood of the new covenant, which is poured out for many for the remission of sins.' These are the anchor words, and every view of the Supper is an attempt to take them seriously.",
        verses: ["Luke 22:19-20", "1 Corinthians 11:24-25", "Matthew 26:26-28", "1 Corinthians 11:23"],
      },
      {
        heading: "The historic readings of the presence",
        body:
          "The church has described Christ's presence in four main ways. The Catholic view holds that the bread and wine become His body and blood (transubstantiation). Luther held Christ is truly present 'in, with, and under' the elements (consubstantiation). The Reformed view holds a spiritual presence received by faith, not in the physical elements. And the memorialist view sees the Supper chiefly as a remembrance of a Christ who is present in His church by His Spirit. Each has honored the text and sought to guard the reality of Christ's presence and the once-for-allness of His sacrifice.",
        verses: ["Luke 22:19-20", "Matthew 26:26-28", "1 Corinthians 11:24", "Luke 22:19"],
      },
      {
        heading: "What is beyond dispute: it is a communion with Christ",
        body:
          "Whatever the precise mode, Paul is clear about the meaning: 'The cup of blessing which we bless, isn't it a sharing of the blood of Christ? The bread which we break, isn't it a sharing of the body of Christ?' The word means participation and fellowship. At the Supper the believer genuinely communes with the crucified and risen Christ, receiving Him by faith. And because 'we, who are many, are one body,' the table is also communion with the whole church, the body of Christ.",
        verses: ["1 Corinthians 10:16", "1 Corinthians 10:17", "1 Corinthians 11:29", "Acts 2:42"],
      },
      {
        heading: "It is not a re-sacrifice of Christ",
        body:
          "The Supper proclaims a sacrifice that is already finished, not one that is repeated. Christ 'did this once for all, when he offered up himself,' and 'he, when he had offered one sacrifice for sins forever, sat down on the right hand of God.' Paul says that 'as often as you eat this bread and drink this cup, you proclaim the Lord's death until he comes': the Supper announces the once-offered sacrifice and brings us into its benefit; it does not reoffer Christ.",
        verses: ["Hebrews 7:27", "Hebrews 10:12", "1 Corinthians 11:26", "Hebrews 9:26"],
      },
      {
        heading: "A real presence, received by faith, held in humility",
        body:
          "The safest and most biblical summary is reverence before a mystery. Paul says those who take the bread 'discern the Lord's body,' which is why he warns against coming carelessly. In the breaking of bread on the Emmaus road, the risen Lord made Himself known to His own; it is the table where the church meets its risen and present Lord. We may describe the mode differently, but we agree that Christ Himself is the host and the gift, that He is truly present to His people by faith, and that we approach His table with love, faith, and a thankful heart.",
        verses: ["1 Corinthians 11:29", "Luke 24:30-31", "1 Corinthians 11:27-28", "1 Corinthians 11:26"],
      },
    ],
    keyVerses: ["Luke 22:19-20", "1 Corinthians 10:16-17", "1 Corinthians 11:26", "Hebrews 7:27", "1 Corinthians 11:29"],
    raises: ["who-may-take-the-lords-supper", "what-is-the-lords-supper", "how-often-the-lords-supper"],
    followsFrom: ["how-often-the-lords-supper", "what-is-the-lords-supper"],
    related: ["who-may-take-the-lords-supper", "what-is-the-lords-supper", "what-is-the-difference-between-baptism-and-the-lords-supper", "what-is-the-church"],
    planned: ["How does the Lord's Supper strengthen us?"],
    order: 48,
  },
  {
    slug: "what-does-a-church-need-from-its-leaders",
    question: "What does a church need from its leaders?",
    category: "church",
    summary:
      "A church needs leaders whose character is fit for the calling, who shepherd the flock like the Chief Shepherd rather than lording over it, who teach the word and guard the flock from error. Scripture puts far more weight on character and on shepherding than on worldly ability, and it measures leaders by Christ's pattern of humble service. Such leaders are a gift of God to His church.",
    passages: [
      {
        book: "1 Timothy",
        chapter: 3,
        title: "The qualifications of an overseer",
        lookFor: "The list is about character: above reproach, sober, gentle, able to teach, managing his house well.",
        focus: "1-7",
      },
      {
        book: "Acts",
        chapter: 20,
        title: "Paul's farewell to the elders",
        lookFor: "Shepherd the church of God, and watch because wolves are coming.",
        focus: "17-38",
      },
      {
        book: "1 Peter",
        chapter: 5,
        title: "Shepherd the flock of God",
        lookFor: "Not under compulsion but willingly, not for gain, not lording it over, but as examples.",
        focus: "1-5",
      },
      {
        book: "Titus",
        chapter: 1,
        title: "Elders who hold to the word",
        lookFor: "Leaders must hold the faithful word, to exhort and to convict those who contradict.",
        focus: "5-9",
      },
    ],
    points: [
      {
        heading: "Qualified character above any gift",
        body:
          "Scripture's lists for leaders are lists of character, not of ability. An overseer 'must be without reproach, the husband of one wife, temperate, sensible, modest, hospitable, good at teaching... not greedy for money, but gentle, not quarrelsome,' and 'not a new convert.' Titus adds 'blameless, as God's steward; not self-pleasing, not easily angered... given to hospitality, sober minded, fair, holy, self-controlled.' The church needs leaders you can trust to be what they claim: people whose lives match the gospel they teach.",
        verses: ["1 Timothy 3:2-3", "1 Timothy 3:6", "Titus 1:7-8", "1 Timothy 3:4-5"],
      },
      {
        heading: "Shepherds who lead by feeding and example",
        body:
          "The calls to church leadership are calls to shepherd. Paul tells the elders, 'Take heed, therefore, to yourselves, and to all the flock, in which the Holy Spirit has made you overseers, to shepherd the assembly of the Lord and God which he purchased with his own blood.' Peter says, 'Shepherd the flock of God which is among you, exercising the oversight, not under compulsion, but voluntarily,' and 'making yourselves examples to the flock.' A shepherd feeds, guards, leads, and goes before the sheep by his own life.",
        verses: ["Acts 20:28", "1 Peter 5:2", "1 Peter 5:3", "Acts 20:31"],
      },
      {
        heading: "Teachers who hold and guard the word",
        body:
          "The church needs leaders who can teach. An overseer must be 'good at teaching,' and Titus says an elder must hold 'the faithful word which is according to the teaching, that he may be able to exhort in the sound doctrine, and to convict those who contradict him.' Paul warns the elders that 'vicious wolves will enter in among you, not sparing the flock,' and men will arise 'speaking perverse things' to draw disciples away; therefore leaders must be watchful, guarding the church by the word.",
        verses: ["1 Timothy 3:2", "Titus 1:9", "Acts 20:29-30", "Acts 20:31"],
      },
      {
        heading: "Servants who do not lord it over the flock",
        body:
          "Jesus set the pattern against worldly leadership: 'whoever wants to become great among you shall be your servant… The Son of Man also came not to be served, but to serve, and to give his life as a ransom for many.' And He said, 'I am in your midst as one who serves.' Peter applies it directly to pastors: 'neither as lording it over those entrusted to you, but making yourselves examples to the flock.' The greatest in the church is the one who serves, and the church needs leaders who lead as Christ did, by laying themselves down.",
        verses: ["Matthew 20:25-28", "Luke 22:26-27", "1 Peter 5:3", "Luke 22:27"],
      },
      {
        heading: "A gift of God, and a responsibility of the church",
        body:
          "Good leaders are a gift to be recognized and received, not a crown to be grasped: 'if a man seeks the office of an overseer, he desires a good work.' The church is told to honor its leaders and test them carefully, for they watch over souls 'as those who will give account.' And the promise for faithful shepherds is great: 'When the chief Shepherd is revealed, you will receive the crown of glory that doesn't fade away.' The measure of a church's leadership is whether it holds to the Chief Shepherd, values the flock He bought, and serves like the One who gave Himself for it.",
        verses: ["1 Timothy 3:1", "Hebrews 13:17", "1 Peter 5:4", "Acts 20:28"],
      },
    ],
    keyVerses: ["1 Timothy 3:2", "Acts 20:28", "1 Peter 5:2-3", "Titus 1:9", "Matthew 20:26-28"],
    raises: ["what-is-a-healthy-church", "what-is-the-church", "what-is-church-discipline", "what-authority-did-jesus-give-his-leaders"],
    followsFrom: ["what-is-a-healthy-church", "why-do-i-need-the-church"],
    related: ["what-is-a-healthy-church", "what-is-the-church", "why-do-i-need-the-church", "what-is-church-discipline"],
    planned: ["How do we choose and recognize good church leaders?"],
    order: 49,
  },

  {
    slug: "why-does-every-human-life-have-dignity-and-worth",
    question: "Why does every human life have dignity and worth?",
    category: "who-we-are",
    summary:
      "Every human life has dignity and worth because every person is made in the image of God. This standing does not depend on ability, age, usefulness, or performance; it is a gift given at creation. From the unborn to the elderly, from every nation and condition, each person bears God's image, and the life Jesus gave Himself for confirms its value.",
    passages: [
      {
        book: "Genesis",
        chapter: 1,
        title: "Made in the image of God",
        lookFor: "Let us make man in our image; male and female He created them, the crown of creation.",
        focus: "26-31",
      },
      {
        book: "Psalms",
        chapter: 8,
        title: "Crowned with glory and honor",
        lookFor: "What is man that you care for him? You have made him a little lower than God and crowned him with glory.",
        focus: "1-9",
      },
      {
        book: "Genesis",
        chapter: 9,
        title: "The sacredness of life after the fall",
        lookFor: "Whoever sheds man's blood, for God made man in his own image.",
        focus: "1-7",
      },
      {
        book: "Psalms",
        chapter: 139,
        title: "Fearfully and wonderfully made",
        lookFor: "You formed my inmost being and knit me together in my mother's womb.",
        focus: "13-16",
      },
    ],
    points: [
      {
        heading: "We bear the image of God",
        body:
          "The ground of human dignity is settled in the first pages of the Bible: 'God created man in his own image. In God's image he created him; male and female he created them.' David marvels at the same truth: 'For you have made him a little lower than God, and crowned him with glory and honor.' This is what makes a person a person: not usefulness or ability, but the image of the Creator stamped on every human being.",
        verses: ["Genesis 1:27", "Psalm 8:5", "Genesis 1:26", "Psalm 8:4"],
      },
      {
        heading: "The image carries a steward's calling",
        body:
          "God made us in His image to bear His likeness in the world: 'Let them have dominion over the fish of the sea... and over all the earth,' and He blessed them, 'Be fruitful, multiply, fill the earth, and subdue it.' Psalm 8 echoes it: 'You make him ruler over the works of your hands. You have put all things under his feet.' Human worth is bound up with human vocation: we are the image-bearers placed in creation to reflect God's rule as His representatives.",
        verses: ["Genesis 1:26", "Genesis 1:28", "Psalm 8:6", "Psalm 8:5"],
      },
      {
        heading: "The image and the sacredness of life survive the fall",
        body:
          "After the fall, with all its wickedness, God upholds the sanctity of life on the same ground: 'Whoever sheds man's blood, his blood will be shed by man, for God made man in his own image.' The image is not erased by sin; it remains the reason human life is sacred, and James still appeals to it: we are not to curse 'men, who are made in the image of God.' Sin spoils the likeness but does not strip the dignity.",
        verses: ["Genesis 9:6", "James 3:9", "Genesis 9:6", "Psalm 139:14"],
      },
      {
        heading: "It covers every human being",
        body:
          "Because the image is given at creation, dignity is universal. Psalm 139 celebrates the person 'in my mother's womb,' 'fearfully and wonderfully made,' and 'woven together' by God, so even the unborn bear His handiwork and worth. James refuses to bless God while cursing any man 'who are made in the image of God,' and Revelation pictures the redeemed as 'a great multitude... out of every nation and of all tribes, peoples, and languages.' From the womb to every people and condition, the image holds.",
        verses: ["Psalm 139:13-14", "Psalm 139:15", "Psalm 139:16", "James 3:9", "Revelation 7:9"],
      },
      {
        heading: "Its ultimate weight: Christ died for each person",
        body:
          "The deepest proof of human worth is the price God paid to redeem it. Paul says Christ 'died for all, that those who live should no longer live to themselves, but to him who for their sakes died and rose again,' and God 'didn't spare his own Son, but delivered him up for us all.' Jesus asked, 'What will it profit a man, if he gains the whole world, and forfeits his life? Or what will a man give in exchange for his life?' A soul is worth more than the world, because the Son of God died to save it.",
        verses: ["2 Corinthians 5:15", "Romans 8:32", "Matthew 16:26", "Matthew 10:31"],
      },
    ],
    keyVerses: ["Genesis 1:27", "Psalm 8:4-5", "Genesis 9:6", "Psalm 139:13-14", "Matthew 16:26"],
    raises: ["what-is-sin", "what-does-it-mean-to-be-made-in-gods-image", "made-for-relationship"],
    followsFrom: ["what-does-it-mean-to-be-made-in-gods-image", "what-is-sin"],
    related: ["what-does-it-mean-to-be-made-in-gods-image", "what-is-sin", "made-for-relationship", "what-is-the-resurrection"],
    planned: ["How should the image of God shape how I treat the poor and the unborn?"],
    order: 53,
  },

  {
    slug: "what-is-the-difference-between-the-heart-soul-and-mind",
    question: "What is the difference between the heart, soul, and mind?",
    category: "who-we-are",
    summary:
      "The Bible uses heart, soul, and mind not as separable compartments of a person but as ways of describing the whole person in our various aspects. The heart is the inner center of a person, the seat of will and affection; the soul is the whole self, the living person; the mind is our understanding and thought life. Scripture calls us to love God with all of them, not as parts but as the whole self given wholly to Him.",
    passages: [
      {
        book: "Deuteronomy",
        chapter: 6,
        title: "Love the Lord with all you are",
        lookFor: "With all your heart, with all your soul, and with all your might: the whole person in love.",
        focus: "4-9",
      },
      {
        book: "Matthew",
        chapter: 22,
        title: "The greatest commandment",
        lookFor: "Jesus joins heart, soul, and mind in the one command to love God.",
        focus: "34-40",
      },
      {
        book: "1 Thessalonians",
        chapter: 5,
        title: "Whole spirit, soul, and body",
        lookFor: "Paul prays the whole person, spirit, soul, and body, be preserved blameless.",
        focus: "16-24",
      },
      {
        book: "Mark",
        chapter: 7,
        title: "Out of the heart",
        lookFor: "Jesus traces the defilement of the whole person to what comes out of the heart.",
        focus: "14-23",
      },
    ],
    points: [
      {
        heading: "The Bible describes one person from several angles",
        body:
          "When Scripture lists heart, soul, and mind, it is not teaching that we are made of three detachable parts; it is describing the whole person in our depths, our life, and our thinking. The command is single: 'You shall love Yahweh your God with all your heart, with all your soul, and with all your might,' and Jesus repeats it with heart, soul, and mind. Paul prays that 'your whole spirit, soul, and body be preserved blameless.' These are windows into the same self, calling us to love God with everything we are.",
        verses: ["Deuteronomy 6:5", "Matthew 22:37", "1 Thessalonians 5:23", "Mark 12:30"],
      },
      {
        heading: "The heart: the center of the person",
        body:
          "In Scripture the heart is the inner wellspring of the person, where will, desire, and character meet. Proverbs says, 'Keep your heart with all diligence, for out of it is the wellspring of life,' and Jesus teaches that 'out of the heart come evil thoughts, murders, adulteries... false testimony.' Jeremiah warns that 'the heart is deceitful above all things,' and God's new-covenant promise is to write His law on the heart. The heart is who we truly are before God, and He looks on it.",
        verses: ["Proverbs 4:23", "Matthew 15:18-19", "Jeremiah 17:9", "Matthew 15:19"],
      },
      {
        heading: "The soul: the whole self, the living person",
        body:
          "The word for soul often means the whole person, one's very life. At creation 'man became a living soul,' and Jesus asks, 'What will it profit a man, if he gains the whole world, and forfeits his life?' He says those who lose their soul for His sake will save it, and He lays down His life a ransom for many. When the soul is at stake, the whole person is at stake, and God's care reaches to the whole person He made.",
        verses: ["Genesis 2:7", "Matthew 16:26", "1 Thessalonians 5:23", "Mark 8:36"],
      },
      {
        heading: "The mind: the understanding and the thought life",
        body:
          "The mind is the theatre of our thoughts and understanding, and Scripture calls for its renewal and surrender. Paul commands, 'Don't be conformed to this world, but be transformed by the renewing of your mind,' and he urges us to think on 'whatever things are true... whatever things are honorable' and to bring 'every thought into captivity to the obedience of Christ.' Loving God with the mind means letting our thinking be formed by truth and our reason bow to Christ.",
        verses: ["Romans 12:2", "Philippians 4:8", "2 Corinthians 10:5", "Matthew 22:37"],
      },
      {
        heading: "One person, given wholly to God",
        body:
          "These words are not rival parts to be balanced but the whole self to be given. The heart without the mind can drift into superstition, and the mind without the heart into coldness; so Jesus commands love with all of both, and Paul's prayer is for 'your whole spirit, soul, and body' to be kept blameless. To love God with the heart is to love with the whole center of our being; with the soul, with our very life; with the mind, with our best thinking, and with the body, with our actual obedience. It is one consecration of one person to one God.",
        verses: ["Matthew 22:37", "1 Thessalonians 5:23", "Deuteronomy 6:5", "Romans 12:1"],
      },
    ],
    keyVerses: ["Matthew 22:37", "Proverbs 4:23", "1 Thessalonians 5:23", "Romans 12:2", "Matthew 16:26"],
    raises: ["what-is-the-flesh-versus-the-spirit", "how-do-i-fight-sin", "what-is-the-resurrection"],
    followsFrom: ["what-is-the-flesh-versus-the-spirit", "body-soul-and-spirit"],
    related: ["what-is-the-flesh-versus-the-spirit", "body-soul-and-spirit", "what-does-it-mean-to-be-made-in-gods-image", "what-the-new-life-looks-like"],
    planned: ["How do emotions fit into being made in God's image?"],
    order: 54,
  },

  {
    slug: "why-do-i-still-feel-lonely",
    question: "Why do I still feel lonely?",
    category: "who-we-are",
    summary:
      "Loneliness is not a failure of faith; it is a real and human ache, felt by the psalmist and even by Jesus. We were made for relationship with God and with one another, so isolation stings by design. God has not left you alone: He promises to be near, He gave His Son to be with us and His Spirit to indwell us, and He gathers His people as a family. Loneliness is real, but it is not the final word.",
    passages: [
      {
        book: "Psalms",
        chapter: 42,
        title: "The longing soul",
        lookFor: "My soul thirsts for God; my tears have been my food day and night.",
        focus: "1-11",
      },
      {
        book: "Isaiah",
        chapter: 43,
        title: "I am with you",
        lookFor: "When you pass through the waters, I will be with you; you are mine.",
        focus: "1-7",
      },
      {
        book: "John",
        chapter: 14,
        title: "I will not leave you as orphans",
        lookFor: "Jesus promises to be with us and to send the Spirit so we are never left alone.",
        focus: "1-18",
      },
      {
        book: "Matthew",
        chapter: 11,
        title: "Come to me and find rest",
        lookFor: "Come, all who labor and are heavy laden, and I will give you rest.",
        focus: "25-30",
      },
    ],
    points: [
      {
        heading: "Loneliness is real, and it is not a failure",
        body:
          "The psalmist knows it: 'My tears have been my food day and night,' and 'Why have you forgotten me? Why do I go mourning?' The prophet Elijah felt utterly alone: 'I, even I only, am left.' Even Jesus, in His most human hour, cried out in desolation and said to His disciples, 'you will leave me alone,' and yet, 'I am not alone, because the Father is with me.' Feeling lonely is part of living as a person in a fallen world; it does not mean God has abandoned you or that your faith is weak.",
        verses: ["Psalm 42:3", "Psalm 42:9", "1 Kings 19:10", "John 16:32"],
      },
      {
        heading: "We were made for relationship, so isolation aches",
        body:
          "The ache is built into us because we were made for communion. In the garden God said, 'It is not good for the man to be alone,' and Ecclesiastes observes that 'two are better than one,' for if one falls, 'the one will lift up his fellow' and a threefold cord is not quickly broken. We were made in the image of a relational God, made for Him and for one another, so a life cut off from intimacy runs against the grain of our design. The loneliness is the echo of that design, not a mistake.",
        verses: ["Genesis 2:18", "Ecclesiastes 4:9-10", "Ecclesiastes 4:12", "Genesis 1:27"],
      },
      {
        heading: "God promises to be with you",
        body:
          "Over and over, Scripture meets loneliness with presence. God says, 'When you pass through the waters, I will be with you; and through the rivers, they will not overflow you.' He is 'near to those who have a broken heart,' and He says, 'I will in no way leave you, neither will I in any way forsake you.' When you feel alone, you are not actually alone: the Father has promised His nearness to His children, and He has never once broken that promise.",
        verses: ["Isaiah 43:2", "Psalm 34:18", "Hebrews 13:5", "Matthew 28:20"],
      },
      {
        heading: "Jesus is with us, and His Spirit dwells in us",
        body:
          "God's answer to our aloneness is ultimate: He came to be with us. Jesus said, 'I am with you always, even to the end of the age,' and He promised, 'I will not leave you orphans. I will come to you.' He asked the Father to give us 'another Counselor... that he may be with you forever,' the Spirit who lives in us. And He said that He and the Father 'will come to him, and make our home with him.' The God of the universe has made His home with the lonely believer.",
        verses: ["Matthew 28:20", "John 14:18", "John 14:16-17", "John 14:23"],
      },
      {
        heading: "He also gathers us into a family",
        body:
          "God intended to meet our loneliness through His people as well as His own presence. The church from the beginning 'continued steadfastly in the apostles' teaching and fellowship,' breaking bread together with gladness, so that 'the Lord added to the assembly day by day.' We are to 'bear one another's burdens,' 'weep with those who weep,' and not forsake 'assembling together.' When loneliness presses in, God's remedy is both a Person to trust and a people to join, and He invites you into both.",
        verses: ["Acts 2:42-47", "Galatians 6:2", "Romans 12:15", "Hebrews 10:24-25"],
      },
    ],
    keyVerses: ["Isaiah 43:2", "Psalm 34:18", "John 14:16-18", "Hebrews 13:5", "Matthew 28:20"],
    raises: ["made-for-relationship", "why-do-i-need-the-church", "who-is-the-father"],
    followsFrom: ["made-for-relationship", "what-does-it-mean-to-be-made-in-gods-image"],
    related: ["made-for-relationship", "what-does-it-mean-to-be-made-in-gods-image", "why-do-i-need-the-church", "what-is-the-church"],
    planned: ["How do I find real friendship and community in the church?"],
    order: 55,
  },

  {
    slug: "what-does-it-mean-that-the-bible-is-both-human-and-divine",
    question: "What does it mean that the Bible is both human and divine?",
    category: "word-of-god",
    summary:
      "Scripture is divine: it is God-breathed, the very word of God, living and active. And it is human: it came through real authors, real languages, real circumstances, and real writing. Like Christ Himself, who is fully God and fully man, the Bible is one book with two natures, so that to read these human words is to hear God speaking, and to trust God's word is to trust the words He breathed through His messengers.",
    passages: [
      {
        book: "2 Timothy",
        chapter: 3,
        title: "Every Scripture is God-breathed",
        lookFor: "The word that comes from God's own breath, profitable for teaching, reproof, correction, and training.",
        focus: "14-17",
      },
      {
        book: "2 Peter",
        chapter: 1,
        title: "Men spoke from God",
        lookFor: "No prophecy came by human will, but men spoke from God as they were moved by the Holy Spirit.",
        focus: "16-21",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "God has spoken",
        lookFor: "God spoke through the prophets in the past, and at the end of the days by His Son.",
        focus: "1-4",
      },
      {
        book: "1 Thessalonians",
        chapter: 2,
        title: "The word of God",
        lookFor: "You received it not as the word of men, but as it is in truth, the word of God, which works in you.",
        focus: "9-13",
      },
    ],
    points: [
      {
        heading: "It is divine: the very word of God",
        body:
          "Scripture claims a divine origin Paul puts plainly: 'Every Scripture is God-breathed and profitable for teaching.' The Thessalonians received the apostolic message 'not as the word of men, but, as it is in truth, the word of God, which also works in you who believe.' Hebrews tells us of God 'having in the past spoken to the fathers through the prophets,' and Jesus could say of the written text, 'the Scripture can't be broken.' When the Bible speaks, God speaks.",
        verses: ["2 Timothy 3:16", "1 Thessalonians 2:13", "Hebrews 1:1", "John 10:35"],
      },
      {
        heading: "It is human: written by real people in real ways",
        body:
          "The divine authorship never erased the human. Peter says, 'no prophecy ever came by the will of man,' yet it came as 'holy men of God spoke, being moved by the Holy Spirit,' and the same verse insists holy men were the speakers. Luke writes as a careful historian who 'traced the course of all things accurately,' and David could say, 'The Spirit of Yahweh spoke by me. His word was on my tongue.' Paul distinguishes his own counsel, 'not the Lord,' from the Lord's command, showing the writers' real human voices. The Bible is fully human and fully the word of God at once.",
        verses: ["2 Peter 1:21", "Luke 1:1-3", "2 Samuel 23:2", "1 Corinthians 7:12"],
      },
      {
        heading: "Two natures, one book, like the Word made flesh",
        body:
          "The church has long seen a likeness between Christ and Scripture: in both, the divine and the human meet without confusion. As the Word became flesh and was truly both God and man, so the God-breathed Scriptures came to us through human authors and are truly both divine and human. We do not have to choose between trusting the words as God's and honoring them as human; Scripture is one word with a divine breath and a human voice, and both are real.",
        verses: ["2 Timothy 3:16", "2 Peter 1:21", "Hebrews 1:1-2", "1 Thessalonians 2:13"],
      },
      {
        heading: "So the Bible is living, trustworthy, and authoritative",
        body:
          "Because it is God-breathed, it is living: 'the word of God is living, and active, and sharper than any two-edged sword,' able to discern the thoughts and intentions of the heart. Because it is the word of God, it is our authority: 'Man shall not live by bread alone, but by every word that proceeds out of the mouth of God,' and Peter calls it 'a lamp shining in a dark place.' We can trust the Bible and submit to it precisely because it is God's own word to us, however human the pens that wrote it.",
        verses: ["Hebrews 4:12", "Matthew 4:4", "2 Peter 1:19", "2 Timothy 3:16-17"],
      },
      {
        heading: "We read it as God speaking to us",
        body:
          "The practical meaning is simple and profound: when we open the Bible, we are not reading merely ancient human opinion but the enduring word of the living God. Peter quotes the promise, 'the Lord's word endures forever,' and says 'this is the word of Good News which was preached to you,' and Isaiah declares, 'the word of our God stands forever.' Because it is both human and divine, it is both a book we can study as literature and history and a word we must obey as the voice of God. Read it as such: hear the human authors, and through them, the God who breathes.",
        verses: ["1 Peter 1:24-25", "Isaiah 40:8", "Hebrews 4:12", "2 Timothy 3:16"],
      },
    ],
    keyVerses: ["2 Timothy 3:16", "2 Peter 1:20-21", "1 Thessalonians 2:13", "Hebrews 4:12", "Hebrews 1:1-2"],
    raises: ["can-i-trust-the-bible", "how-was-the-bible-written-down", "why-do-bible-translations-differ"],
    followsFrom: ["how-was-the-bible-written-down", "can-i-trust-the-bible"],
    related: ["how-was-the-bible-written-down", "can-i-trust-the-bible", "why-do-bible-translations-differ", "how-should-i-read-the-bible"],
    planned: ["What does it mean that Scripture is infallible?"],
    order: 44,
  },

  {
    slug: "what-does-god-promise-those-who-suffer-for-him",
    question: "What does God promise those who suffer for Him?",
    category: "suffering-will",
    summary:
      "To suffer for Christ is, in Scripture, a blessing and a privilege, because it is suffering for His sake and in union with Him. God's promises to those who suffer for Him are sure: He is with them, He will never leave them, He will work it for their good and glory, He gives present grace and endurance, and He has stored up a reward and a future where every tear is wiped away.",
    passages: [
      {
        book: "Matthew",
        chapter: 5,
        title: "Blessed are the persecuted",
        lookFor: "Blessed are those persecuted for righteousness, for great is their reward in heaven.",
        focus: "1-12",
      },
      {
        book: "1 Peter",
        chapter: 4,
        title: "Suffering as a Christian",
        lookFor: "Do not be surprised at the fiery trial; rejoice and share in Christ's suffering, and the Spirit of glory rests on you.",
        focus: "12-19",
      },
      {
        book: "Romans",
        chapter: 8,
        title: "Heirs with Christ in suffering and glory",
        lookFor: "If we suffer with him, we may be glorified with him; present suffering is not worth comparing with that glory.",
        focus: "17-30",
      },
      {
        book: "2 Timothy",
        chapter: 4,
        title: "The course finished",
        lookFor: "I have fought the good fight; there is stored up for me the crown of righteousness.",
        focus: "6-8",
      },
    ],
    points: [
      {
        heading: "Suffering for Christ is a blessing, not a curse",
        body:
          "Jesus flips our instinct: 'Blessed are those who have been persecuted for righteousness' sake, for theirs is the Kingdom of Heaven,' and 'Blessed are you when people reproach you, persecute you... for my sake... for great is your reward in heaven.' Paul calls it a gift: 'it has been granted to you on behalf of Christ, not only to believe in him, but also to suffer on his behalf.' The earliest church rejoiced that its members 'were counted worthy to suffer dishonor for Jesus' name.' To suffer for Him is to share His lot and to be honored by Him.",
        verses: ["Matthew 5:10-12", "Philippians 1:29", "Acts 5:41", "Matthew 5:12"],
      },
      {
        heading: "He is with you and will not abandon you",
        body:
          "The promise at the heart of suffering is presence. 'When you pass through the waters, I will be with you; and through the rivers, they will not overflow you.' For the sake of Christ we may be 'pressed on every side, yet not crushed; perplexed, yet not to despair; pursued, yet not forsaken; struck down, yet not destroyed.' Peter urges, 'casting all your worries on him, because he cares for you,' and God has said, 'I will in no way leave you.' The deepest comfort is not that the suffering is removed but that He is with you in it.",
        verses: ["Isaiah 43:2", "2 Corinthians 4:8-9", "1 Peter 5:7", "Hebrews 13:5"],
      },
      {
        heading: "He works it for glory, beyond all comparison",
        body:
          "Paul weighs present suffering against the future and finds it light: 'I consider that the sufferings of this present time are not worthy to be compared with the glory which will be revealed toward us.' And suffering for Christ is union with Him: 'if indeed we suffer with him, that we may also be glorified with him,' and our light affliction 'works for us more and more exceedingly an eternal weight of glory.' To suffer for Him is not wasted; it is joined to His story and turned into glory by His hand.",
        verses: ["Romans 8:18", "Romans 8:17", "2 Corinthians 4:17", "Romans 8:28"],
      },
      {
        heading: "He gives grace to endure and a crown to receive",
        body:
          "God does not only promise a future; He gives strength for the present. When Paul cried out under his thorn, the Lord answered, 'My grace is sufficient for you, for my power is made perfect in weakness.' And He promises a reward: 'Blessed is the man who endures temptation, for when he has been approved, he will receive the crown of life.' Paul's testimony near the end is full of it: 'I have fought the good fight... there is stored up for me the crown of righteousness,' which the Lord will give to all who love His appearing. Grace now, crown then.",
        verses: ["2 Corinthians 12:9", "James 1:12", "2 Timothy 4:7-8", "2 Timothy 4:8"],
      },
      {
        heading: "The final promise: every tear wiped away",
        body:
          "God's promise to those who suffer for Him ends not in endurance alone but in resurrection joy. 'May the God of all grace, who called you to his eternal glory by Christ Jesus, after you have suffered a little while, perfect, establish, strengthen, and settle you.' And the saints who come 'out of the great tribulation' stand before the throne, where 'God will wipe away every tear from their eyes,' and where 'death will be no more; neither will there be mourning, nor crying, nor pain, any more.' The suffering is for a little while; the glory is forever.",
        verses: ["1 Peter 5:10", "Revelation 7:14-17", "Revelation 21:4", "Matthew 5:12"],
      },
    ],
    keyVerses: ["Romans 8:17-18", "Matthew 5:10-12", "2 Timothy 4:7-8", "1 Peter 5:10", "Revelation 21:4"],
    raises: ["where-is-god-in-my-pain", "what-does-it-look-like-to-suffer-well", "what-is-heaven-like"],
    followsFrom: ["what-does-it-look-like-to-suffer-well", "where-is-god-in-my-pain"],
    related: ["what-does-it-look-like-to-suffer-well", "where-is-god-in-my-pain", "how-do-trials-make-us-more-like-christ", "why-does-god-allow-suffering"],
    planned: ["What is the difference between suffering for Christ and suffering for my own mistakes?"],
    order: 39,
  },

  // ------------------------------------------------------------------
  // SECTION: The five points of the doctrine of grace
  // ------------------------------------------------------------------
  {
    slug: "can-i-seek-god-on-my-own",
    question: "Can I seek God on my own?",
    category: "who-we-are",
    summary:
      "Scripture's answer is humbling: left to ourselves, no one truly seeks God. Sin has touched every part of us: the heart is corrupt, the mind is hostile to God, and we are dead in trespasses. This is why salvation must begin with God's grace acting on us, not with our own goodness reaching up to Him.",
    passages: [
      {
        book: "Romans",
        chapter: 3,
        title: "No one seeks God",
        lookFor: "Paul's verdict against the whole world: no one is righteous, no one understands, no one seeks after God.",
        focus: "9-20",
      },
      {
        book: "Psalm",
        chapter: 14,
        title: "The search from heaven",
        lookFor: "God looks down to see if anyone seeks Him, and finds none: they have all turned aside, and no one does good.",
      },
      {
        book: "Ephesians",
        chapter: 2,
        title: "Dead in trespasses",
        lookFor: "Paul's diagnosis: we were dead in sins and by nature children of wrath, and grace alone made us alive.",
        focus: "1-10",
      },
      {
        book: "Genesis",
        chapter: 6,
        title: "The verdict before the flood",
        lookFor: "God sees that every imagination of man's heart is only evil continually: the corruption is deep and early.",
        focus: "5-13",
      },
      {
        book: "Jeremiah",
        chapter: 17,
        title: "The heart beyond our fixing",
        lookFor: "The heart is deceitful above all things and exceedingly corrupt; only God can search and heal it.",
        focus: "5-10",
      },
    ],
    points: [
      {
        heading: "No one seeks God",
        body:
          "Paul quotes the Psalms as a worldwide verdict: 'There is no one righteous; no, not one. There is no one who understands. There is no one who seeks after God.' The psalmist has God look down from heaven to see if anyone seeks Him, and the search finds no one. Left to our own momentum, our movement is away from God, not toward Him.",
        verses: ["Romans 3:10-12", "Psalm 14:2-3"],
      },
      {
        heading: "The corruption reaches every part",
        body:
          "Sin is not a stain we picked up on the surface; it reaches the heart where everything else comes from. Jeremiah: 'The heart is deceitful above all things, and it is exceedingly corrupt: who can know it?' Isaiah adds that even our best is tainted: 'all our righteousness is as a polluted garment.' And before the flood, God saw that 'every imagination of the thoughts of man's heart was continually only evil.' This is not that everyone is as bad as they could be, but that sin touches every part: the mind, the will, and the affections.",
        verses: ["Jeremiah 17:9", "Isaiah 64:6", "Genesis 6:5"],
      },
      {
        heading: "The mind is hostile, not merely mistaken",
        body:
          "Paul is blunt about the depth: 'the mind of the flesh is hostile towards God; for it is not subject to God's law, neither indeed can it be. Those who are in the flesh can't please God.' And the natural man 'doesn't receive the things of God's Spirit, for they are foolishness to him, and he can't know them, because they are spiritually discerned.' The problem is not information but direction: our natural selves are pointed against God, and we cannot reverse the direction by deciding harder.",
        verses: ["Romans 8:7-8", "1 Corinthians 2:14"],
      },
      {
        heading: "Dead, not merely sick",
        body:
          "Paul chooses the strongest word available: 'You were made alive when you were dead in transgressions and sins.' Not weakened, not slowed down: dead. And he makes the condition shared and inborn: that we 'were by nature children of wrath, even as the rest.' Death is what Scripture uses when the power to respond is gone, which is exactly the point: the dead cannot reach out, so the life must come from outside.",
        verses: ["Ephesians 2:1-3", "Ephesians 2:5", "Colossians 2:13"],
      },
      {
        heading: "It is why grace is grace",
        body:
          "The diagnosis humbles us, and it also points to rescue. Because we could not seek Him, God sought us: 'But God, being rich in mercy, for his great love with which he loved us, even when we were dead through our trespasses, made us alive together with Christ (by grace you have been saved).' John says the new birth comes 'not of blood, nor of the will of the flesh, nor of the will of man, but of God.' Where sin abounded, grace abounded more exceedingly. The point of knowing our inability is not despair; it is emptying our hands to receive what we could never reach for.",
        verses: ["Ephesians 2:4-5", "Ephesians 2:8-9", "John 1:12-13", "Romans 5:20"],
      },
    ],
    keyVerses: ["Romans 3:10-12", "Romans 8:7", "Ephesians 2:1", "Isaiah 64:6", "John 1:13"],
    raises: ["why-did-jesus-have-to-die", "did-god-choose-me", "can-anyone-resist-gods-grace"],
    followsFrom: ["what-is-sin", "does-everyone-deserve-gods-judgment"],
    related: ["what-is-sin", "does-everyone-deserve-gods-judgment", "what-is-the-flesh-versus-the-spirit"],
    planned: ["Why does God still hold us responsible if we cannot seek Him alone?"],
    order: 56,
  },

  {
    slug: "did-god-choose-me",
    question: "Did God choose me to be saved before I chose Him?",
    category: "gospel",
    summary:
      "Yes. Scripture says God chose His people in Christ before the foundation of the world, and it never bases that choice on foreseen merit. Election is unconditional: it rests on God's mercy and the good pleasure of His will, not on anything in us. Far from being cold, it is the deepest ground of our assurance and our praise.",
    passages: [
      {
        book: "Ephesians",
        chapter: 1,
        title: "Chosen before the foundation of the world",
        lookFor: "Paul's doxology: we were chosen in Christ, predestined for adoption, according to the good pleasure of his will.",
        focus: "3-14",
      },
      {
        book: "Romans",
        chapter: 9,
        title: "Jacob and Esau",
        lookFor: "Paul faces the hard question head-on: God chose Jacob over Esau before they were born, that the purpose of God according to election might stand.",
        focus: "6-24",
      },
      {
        book: "John",
        chapter: 15,
        title: "You did not choose me",
        lookFor: "Jesus' own words to His disciples: I chose you and appointed you; the choosing began with Him.",
        focus: "1-16",
      },
      {
        book: "Acts",
        chapter: 13,
        title: "Appointed to eternal life",
        lookFor: "The preaching at Pisidian Antioch: as many as were appointed to eternal life believed; election and the preached word work together.",
        focus: "44-52",
      },
      {
        book: "1 Peter",
        chapter: 1,
        title: "Elect according to the foreknowledge of God",
        lookFor: "Peter greets believers as God's elect: chosen by the Father, sanctified by the Spirit, for obedience to Jesus Christ.",
        focus: "1-12",
      },
    ],
    points: [
      {
        heading: "The choice is real, and it came first",
        body:
          "Paul blesses God for our salvation in a single sweep: 'he chose us in him before the foundation of the world, that we would be holy and without defect before him in love, having predestined us for adoption as children through Jesus Christ to himself, according to the good pleasure of his desire.' Jesus says it as plainly: 'You didn't choose me, but I chose you.' The initiative in salvation does not begin with us climbing up to God; it begins with God reaching down.",
        verses: ["Ephesians 1:4-5", "Ephesians 1:11", "John 15:16"],
      },
      {
        heading: "It is not based on anything in us",
        body:
          "Paul makes the point with the twins: before Jacob and Esau were born or had done anything good or bad, 'that the purpose of God according to election might stand, not of works, but of him who calls.' He draws the conclusion plainly: 'So then it is not of him who wills, nor of him who runs, but of God who has mercy.' God does not look down the corridor of time and choose the promising ones, because there are none promising enough; He chooses as mercy chooses, freely.",
        verses: ["Romans 9:11-12", "Romans 9:16", "2 Timothy 1:9"],
      },
      {
        heading: "Is God unjust to choose?",
        body:
          "Paul asks the objection himself: 'What shall we say then? Is there unrighteousness with God? May it never be!' Mercy is God's to give: 'I will have mercy on whom I have mercy,' and He is the potter with power over the clay. He even shows that His patience with vessels of wrath and His glory shown to vessels of mercy are both woven into one purpose, 'that he might make known the riches of his glory on vessels of mercy, which he prepared beforehand for glory.' The choice is not cruel; it is how a God who is owed nothing shows grace to anyone at all.",
        verses: ["Romans 9:14", "Romans 9:15", "Romans 9:21-23"],
      },
      {
        heading: "Election works through the preached gospel",
        body:
          "The election Scripture describes is never a whisper outside history; it works through the word that is preached. At Antioch, 'as many as were appointed to eternal life believed': no one is appointed apart from believing, and believing is the response election produces through the message. Peter greets the scattered churches as 'elect... in sanctification of the Spirit, that you may obey Jesus Christ'; the chosen are known by the obedience of faith. Paul can say he knows the Thessalonians are chosen, because the gospel came to them 'not in word only, but also in power, and in the Holy Spirit.'",
        verses: ["Acts 13:48", "1 Peter 1:2", "1 Thessalonians 1:4-5"],
      },
      {
        heading: "No one is told, 'You are not elect'",
        body:
          "Nowhere does the Bible say to any seeker, 'You are not chosen.' The secret things belong to the Lord; what is revealed is the open call: 'whoever believes in him should not perish, but have eternal life,' and 'he who comes to me I will in no way throw out.' Peter's instruction is the one that concerns us: 'be more diligent to make your calling and election sure' by faith, obedience, and growth. We do not begin with the hidden decree; we begin with Christ, and in Him election becomes our security, not our speculation.",
        verses: ["Deuteronomy 29:29", "John 3:16", "John 6:37", "2 Peter 1:10"],
      },
    ],
    keyVerses: ["Ephesians 1:4", "Romans 9:16", "John 15:16", "Acts 13:48", "2 Peter 1:10"],
    raises: ["for-whom-did-christ-die", "can-anyone-resist-gods-grace", "what-is-the-difference-between-assurance-and-presumption"],
    followsFrom: ["what-does-it-mean-that-god-is-sovereign", "do-my-choices-matter", "can-i-seek-god-on-my-own"],
    related: ["what-does-it-mean-that-god-is-sovereign", "is-god-in-control", "do-my-choices-matter", "how-can-i-be-saved"],
    planned: ["What does it mean that God hardened Pharaoh's heart?"],
    order: 57,
  },

  {
    slug: "for-whom-did-christ-die",
    question: "For whom did Christ die?",
    category: "jesus-christ",
    summary:
      "The Bible answers by showing what His death actually accomplishes: the Good Shepherd lays down His life for His sheep, and the sheep are kept. Christ's death cannot fail to save those it was given to save, because He paid for sins, not merely for a possibility. At the same time the gospel offer goes out freely to all, and the worth of the sacrifice is more than enough for the whole world.",
    passages: [
      {
        book: "John",
        chapter: 10,
        title: "The Good Shepherd and His sheep",
        lookFor: "Jesus lays down His life for the sheep, and no one can snatch them from His hand.",
        focus: "11-30",
      },
      {
        book: "John",
        chapter: 17,
        title: "The prayer of the night before",
        lookFor: "On the night before He died, Jesus prays for those the Father gave Him, and He does not pray for the world.",
        focus: "6-26",
      },
      {
        book: "Isaiah",
        chapter: 53,
        title: "The Servant bears the sin of many",
        lookFor: "The portrait written centuries before: He will justify many and bear their iniquities.",
      },
      {
        book: "Hebrews",
        chapter: 9,
        title: "Offered once to bear sins",
        lookFor: "Christ entered heaven itself with His own blood, offered once to bear the sins of many.",
        focus: "11-28",
      },
      {
        book: "2 Corinthians",
        chapter: 5,
        title: "One died for all",
        lookFor: "The love of Christ compels us: one died for all, and God was in Christ reconciling the world to Himself.",
        focus: "14-21",
      },
    ],
    points: [
      {
        heading: "The Shepherd dies for the sheep",
        body:
          "Jesus defines the circle of His death from the inside: 'I am the good shepherd. The good shepherd lays down his life for the sheep.' He knows His sheep, He calls them, He gives them eternal life, and 'they will never perish, and no one will snatch them out of my hand.' The Shepherd's death is not a wish expressed generally; it is the price paid for the sheep, and because it was paid, they are kept. The same chapter adds, 'I have other sheep, which are not of this fold': the flock is not yet complete, but it is known to Him.",
        verses: ["John 10:11", "John 10:15", "John 10:27-28", "John 10:16"],
      },
      {
        heading: "He died to save His people from their sins",
        body:
          "The angel's announcement at the very beginning is definite, not conditional: 'it is he who shall save his people from their sins.' Hebrews adds what the offering accomplishes: 'Christ also, having been offered once to bear the sins of many, will appear a second time, without sin, to those who are eagerly waiting for him for salvation.' If He bore their sins, those sins are truly carried away, and Paul can ask the triumphant question: 'Who could bring a charge against God's chosen ones?' and answer with the death itself.",
        verses: ["Matthew 1:21", "Hebrews 9:28", "Romans 8:33-34"],
      },
      {
        heading: "His prayer and His death belong to the same circle",
        body:
          "The night before He died, Jesus prayed: 'I pray for them. I don't pray for the world, but for those whom you have given me, for they are yours.' The same boundary appears in the prayer as in the death: He gives eternal life 'to all whom you have given him,' and He prays for and keeps the ones He also dies for. The One who died for them is the One who intercedes for them, so His death and His prayers do not point at different people.",
        verses: ["John 17:2", "John 17:9", "Romans 8:34"],
      },
      {
        heading: "Yet the offer and the worth are for the whole world",
        body:
          "None of this narrows the gospel. The call is preached through the whole world, and 'whoever believes in him should not perish, but have eternal life.' John says Jesus 'is the atoning sacrifice for our sins, and not for ours only, but also for the whole world.' Scripture holds both together: the sacrifice is sufficient for all and freely offered to all, while its saving possession belongs to those who believe. That is why Paul can say 'one died for all, therefore all died... that those who live should no longer live to themselves' as the ground of the mission, not the sign of a ledger of names.",
        verses: ["1 John 2:2", "John 3:16", "Mark 16:15", "2 Corinthians 5:14-15", "2 Corinthians 5:19"],
      },
      {
        heading: "Answered by coming, not by speculating",
        body:
          "The question 'Did He die for me?' is never answered by guesswork about a hidden list; it is answered by coming. To believers Paul writes that God who 'didn't spare his own Son, but delivered him up for us all' will 'freely give us all things': the cross is the proof of God's love for His own. To everyone who hears, Jesus says, 'He who comes to me I will in no way throw out,' and the Bible's last chapter adds the open invitation: 'He who is thirsty, let him come.' If you come, you are not outside His death, because the One who died for the sheep is the One who welcomes every comer.",
        verses: ["Romans 8:32", "John 6:37", "John 6:35", "Revelation 22:17"],
      },
    ],
    keyVerses: ["John 10:11", "John 10:28", "Hebrews 9:28", "1 John 2:2", "Romans 8:32"],
    raises: ["how-can-i-be-saved", "can-anyone-resist-gods-grace", "can-i-lose-my-salvation"],
    followsFrom: ["why-did-jesus-have-to-die", "did-god-choose-me"],
    related: ["why-did-jesus-have-to-die", "how-can-i-be-saved", "can-gods-grace-really-cover-my-worst-sins"],
    planned: ["What does it mean that Christ is the atoning sacrifice for the whole world?"],
    order: 58,
  },

  {
    slug: "can-anyone-resist-gods-grace",
    question: "Can anyone resist God's grace?",
    category: "gospel",
    summary:
      "People can and do resist the outward call of the gospel: Jesus wept over Jerusalem because they would not come. But the saving work of God's grace is another matter. The Spirit opens closed hearts, raises the dead, and gives the new heart that loves God. In that deeper sense Scripture speaks of a call that cannot fail, because it is the work of God Himself.",
    passages: [
      {
        book: "John",
        chapter: 6,
        title: "No one can come unless the Father draws",
        lookFor: "Jesus twice states our inability and the Father's drawing: no one can come unless it is given by the Father, and all the Father gives Him will come.",
        focus: "35-65",
      },
      {
        book: "Ephesians",
        chapter: 2,
        title: "Made alive together with Christ",
        lookFor: "Paul's diagnosis and cure: dead in sins, made alive by grace through faith, which is itself the gift of God.",
        focus: "1-10",
      },
      {
        book: "Acts",
        chapter: 16,
        title: "The Lord opened her heart",
        lookFor: "Paul in Philippi: Lydia worships, hears, and the Lord opens her heart to receive the word; the jailer is saved in the same visit.",
        focus: "6-15",
      },
      {
        book: "Ezekiel",
        chapter: 36,
        title: "A new heart and a new spirit",
        lookFor: "God's promise to His people: I will give you a new heart, put My Spirit within you, and cause you to walk in My statutes.",
        focus: "22-32",
      },
      {
        book: "Acts",
        chapter: 7,
        title: "You always resist the Spirit",
        lookFor: "Stephen's hard word to the council: you stiff-necked people always resist the Holy Spirit; the resistance is real, and so is the tragedy.",
        focus: "51-60",
      },
    ],
    points: [
      {
        heading: "No one comes unless the Father draws",
        body:
          "Jesus states our position without softening it: 'No one can come to me unless the Father who sent me draws him, and I will raise him up in the last day.' He repeats it for emphasis: 'no one can come to me, unless it is given to him by my Father.' And yet the same chapter is full of welcome: 'All those whom the Father gives me will come to me. He who comes to me I will in no way throw out.' The drawing is decisive and the coming is certain, and the welcome is completely open.",
        verses: ["John 6:44", "John 6:65", "John 6:37", "John 6:29"],
      },
      {
        heading: "It is resurrection, not persuasion",
        body:
          "Paul describes our condition as death: we were 'dead in transgressions and sins,' and God 'made us alive together with Christ.' A corpse cannot be argued into breathing; only the God who raises the dead can. Jesus says the new birth is the Spirit's own work: it is like the wind that 'blows where it wants to,' for 'so is everyone who is born of the Spirit,' and John adds that we are born 'not of blood, nor of the will of the flesh, nor of the will of man, but of God.' Grace does not wait politely for our cooperation; it creates the heart that cooperates.",
        verses: ["Ephesians 2:1", "Ephesians 2:4-5", "John 3:8", "John 1:13"],
      },
      {
        heading: "The Lord opens the heart",
        body:
          "Luke tells the story of Lydia in one clause: 'whose heart the Lord opened to listen to the things which were spoken by Paul.' The word is preached, and the listening is given. Luke notes the same pattern elsewhere: 'as many as were appointed to eternal life believed,' and 'the Lord added to the assembly day by day those who were being saved.' The church later named this effectual grace: not that God drags anyone, but that He makes the dead heart willing.",
        verses: ["Acts 16:14", "Acts 13:48", "Acts 2:47"],
      },
      {
        heading: "The new heart God gives",
        body:
          "Ezekiel's promise shows the shape of the saving work: 'I will take away the stony heart out of your flesh, and I will give you a heart of flesh. I will put my Spirit within you, and cause you to walk in my statutes.' God does not only invite; He changes what we want. Paul puts our effort and God's enabling in one sentence: 'Work out your own salvation with fear and trembling. For it is God who works in you both to will and to work, for his good pleasure.'",
        verses: ["Ezekiel 36:26-27", "Philippians 2:12-13"],
      },
      {
        heading: "Resistance is real; the saving call prevails",
        body:
          "Scripture never pretends that everyone who hears comes. Stephen says to the council, 'You stiff-necked and uncircumcised in heart and ears, you always resist the Holy Spirit!' and Jesus wept over Jerusalem: 'How often I would have gathered your children together... and you would not!' So the outward call can be refused. What Scripture also shows is a call that creates what it summons, like the voice that said, 'Lazarus, come out!', and the dead man came out. Paul's chain has no missing links: 'Whom he predestined, those he also called. Whom he called, those he also justified. Whom he justified, those he also glorified.' When God calls a dead heart to life, the dead heart lives.",
        verses: ["Acts 7:51", "Matthew 23:37", "John 11:43-44", "Romans 8:30"],
      },
    ],
    keyVerses: ["John 6:44", "John 6:37", "Ephesians 2:8-9", "Acts 16:14", "Romans 8:30"],
    raises: ["what-does-it-mean-to-be-born-again", "how-does-the-spirit-convict-the-world", "can-i-lose-my-salvation"],
    followsFrom: ["what-is-grace", "did-god-choose-me", "how-does-the-spirit-convict-the-world"],
    related: ["what-is-grace", "did-god-choose-me", "what-does-it-mean-to-be-born-again", "how-does-the-spirit-convict-the-world"],
    planned: ["Why does the gospel soften some hearts and harden others?"],
    order: 59,
  },

  {
    slug: "why-endure-if-i-cant-lose-my-salvation",
    question: "Why should I keep enduring, if I can't lose my salvation?",
    category: "our-walk",
    summary:
      "Because God keeps His people through their perseverance, not apart from it. The same Bible that says no one can snatch us from His hand also calls us to endure to the end. The warnings are not the contradiction of the promise; they are how He keeps us. Perseverance is not the price of salvation but the shape of it.",
    passages: [
      {
        book: "John",
        chapter: 15,
        title: "Remain in me",
        lookFor: "Jesus tells the branches to remain in the vine; the fruit, the pruning, and the warning are all addressed to real believers.",
        focus: "1-16",
      },
      {
        book: "Hebrews",
        chapter: 3,
        title: "Take care, brothers",
        lookFor: "The warning against an evil heart of unbelief, and the promise: we are partakers of Christ if we hold firm to the end.",
        focus: "7-19",
      },
      {
        book: "Philippians",
        chapter: 2,
        title: "Work out what God works in",
        lookFor: "Paul joins our effort and God's enabling in one sentence: work out your salvation, for God works in you.",
        focus: "12-18",
      },
      {
        book: "2 Timothy",
        chapter: 4,
        title: "I have kept the faith",
        lookFor: "Paul at the end of the race: fight, finish, keep the faith, receive the crown.",
        focus: "1-8",
      },
      {
        book: "Revelation",
        chapter: 3,
        title: "Hold firmly what you have",
        lookFor: "Sardis is told to wake up and strengthen what remains; Philadelphia is told to hold fast so no one takes its crown.",
        focus: "1-13",
      },
    ],
    points: [
      {
        heading: "God's keeping is the ground under everything",
        body:
          "The security is not our achievement; it is His: 'I give eternal life to them. They will never perish, and no one will snatch them out of my hand,' and no one can snatch them out of the Father's hand either. Paul is certain that 'he who began a good work in you will complete it until the day of Jesus Christ,' and his chain of salvation has no gaps: 'Whom he called, those he also justified. Whom he justified, those he also glorified.' Our endurance rests on His finishing, not on ours.",
        verses: ["John 10:28-29", "Philippians 1:6", "Romans 8:30"],
      },
      {
        heading: "That is exactly why we persevere",
        body:
          "The warnings are not the opposite of the promise; they are the means God uses to keep us: 'Beware, brothers, lest perhaps there be in any one of you an evil heart of unbelief, in falling away from the living God... for we have become partakers of Christ, if we hold fast the beginning of our confidence firm to the end.' Paul warns the one who thinks he stands to take heed, and Jesus makes endurance the mark: 'he who endures to the end, the same will be saved.' The Shepherd keeps the sheep who hear His voice and follow Him; the warnings are His voice calling us to stay close.",
        verses: ["Hebrews 3:12-14", "1 Corinthians 10:12", "Matthew 24:13", "Revelation 3:11"],
      },
      {
        heading: "Perseverance is what real faith looks like",
        body:
          "John describes the difference between belonging and passing through: 'They went out from us, but they didn't belong to us; for if they had belonged to us, they would have continued with us.' Faith that is real continues; faith that evaporates shows itself to have been something else. The seed on the rock springs up and withers, while the good soil holds the word and 'produces fruit with patience.' So endurance does not earn assurance; it is assurance's shape, the visible life of the promise.",
        verses: ["1 John 2:19", "Luke 8:15", "Hebrews 10:39"],
      },
      {
        heading: "Our effort and His working are not rivals",
        body:
          "Paul commands what God performs: 'Work out your own salvation with fear and trembling. For it is God who works in you both to will and to work, for his good pleasure.' The same man who promises that God will complete the work runs as though everything depended on him: 'I press on toward the goal for the prize of the high calling of God in Christ Jesus,' and finishes with 'I have fought the good fight. I have finished the course. I have kept the faith.' God's working does not make our working unnecessary; it is what makes our working real.",
        verses: ["Philippians 2:12-13", "Philippians 3:13-14", "2 Timothy 4:7"],
      },
      {
        heading: "It is running, not gripping",
        body:
          "Perseverance is not anxious white-knuckling; it is following the One who already finished the race: 'Let us run with patience the race that is set before us, looking to Jesus, the author and perfecter of faith, who for the joy that was set before him endured the cross.' And it ends in a crown, not a cliff: 'Be faithful to death, and I will give you the crown of life.' Because He keeps us, we can run; because He is faithful, the finish is certain: 'He who calls you is faithful, who will also do it.'",
        verses: ["Hebrews 12:1-2", "Revelation 2:10", "1 Thessalonians 5:24"],
      },
    ],
    keyVerses: ["John 10:28", "Philippians 1:6", "Hebrews 3:14", "Matthew 24:13", "Philippians 2:13"],
    raises: ["what-is-the-difference-between-assurance-and-presumption", "how-do-trials-make-us-more-like-christ", "how-do-i-fight-sin"],
    followsFrom: ["can-i-lose-my-salvation"],
    related: ["can-i-lose-my-salvation", "what-is-the-difference-between-assurance-and-presumption", "how-do-trials-make-us-more-like-christ", "faith-or-works"],
    planned: ["What should the church do for someone who has stopped following Christ?"],
    order: 60,
  },

  {
    slug: "what-does-the-title-christ-mean",
    question: "What does the title 'Christ' mean?",
    category: "jesus-christ",
    summary:
      "'Christ' is not Jesus' last name: it is His title, the Greek word for Messiah, the Anointed One. Prophets, priests, and kings were anointed for their office; Jesus is the One anointed with the Spirit beyond measure to be Prophet, Priest, and King forever, and the resurrection is God's public declaration of it.",
    passages: [
      {
        book: "Psalms",
        chapter: 2,
        title: "The LORD's Anointed on Zion",
        lookFor: "The nations rage against 'the LORD's Anointed,' yet God installs His King on the holy hill.",
      },
      {
        book: "Luke",
        chapter: 4,
        title: "Today this Scripture has been fulfilled",
        lookFor: "Jesus reads Isaiah's words about the One anointed by the Spirit, then says they are fulfilled in their hearing.",
        focus: "16-30",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "God has made him both Lord and Christ",
        lookFor: "Peter's Pentecost sermon: the resurrection is how God publicly declared Jesus to be the Christ.",
        focus: "22-41",
      },
      {
        book: "John",
        chapter: 20,
        title: "That you may believe he is the Christ",
        lookFor: "John tells you exactly why he wrote: that believing Jesus is the Christ, you may have life in His name.",
        focus: "24-31",
      },
    ],
    points: [
      {
        heading: "Christ is a title, not a surname",
        body:
          "'Christ' (Greek christos) translates the Hebrew word for Messiah: 'anointed one.' In Israel, anointing with oil marked someone out for office: Saul and David were anointed king, Aaron and his sons were anointed priest, Elisha was anointed prophet. To call Jesus the Christ is to say He is the Anointed One, set apart and empowered by God's Spirit for His saving office.",
        verses: ["1 Samuel 16:13", "Exodus 29:7", "1 Kings 19:16"],
      },
      {
        heading: "The Old Testament promised one final Anointed King",
        body:
          "The psalmist pictures the nations raging 'against Yahweh, and against his Anointed,' while God answers: 'Yet I have set my King on my holy hill of Zion.' Daniel was told the Messiah, the Anointed One, would come at an appointed time. By the first century, Israel was waiting expectantly for this promised deliverer.",
        verses: ["Psalm 2:2", "Psalm 2:6", "Daniel 9:25-26", "Luke 3:15"],
      },
      {
        heading: "Jesus claimed the anointing for Himself",
        body:
          "In Nazareth Jesus read Isaiah's prophecy of the Spirit-anointed servant: 'The Spirit of the Lord is on me, because he has anointed me to preach good news to the poor,' and then said, 'Today, this Scripture has been fulfilled in your hearing.' To the Samaritan woman, who spoke of the Messiah to come, He answered plainly: 'I am he, the one who speaks to you.'",
        verses: ["Luke 4:18-21", "Isaiah 61:1", "John 4:25-26"],
      },
      {
        heading: "Anointed as Prophet, Priest, and King",
        body:
          "The three anointed offices of the Old Testament converge on Jesus. As Prophet He reveals God perfectly, greater than Moses. As Priest He offered not an animal but Himself, entering not an earthly sanctuary but heaven itself. As King He reigns now at God's right hand, and 'of the increase of his government and of peace there shall be no end.' He is anointed not with oil but 'with the Holy Spirit and with power.'",
        verses: ["Acts 3:22", "Hebrews 9:11-14", "Hebrews 7:25-26", "Isaiah 9:7", "Acts 10:38"],
      },
      {
        heading: "The resurrection is God's declaration",
        body:
          "At Pentecost Peter preached that God raised Jesus up and exalted Him to His right hand, and concluded: 'Let all the house of Israel therefore know certainly that God has made him both Lord and Christ, this Jesus whom you crucified.' Paul says Jesus was 'declared to be the Son of God with power... by the resurrection from the dead.' The empty tomb is the public coronation announcement.",
        verses: ["Acts 2:36", "Romans 1:4", "Acts 17:31"],
      },
      {
        heading: "Believing He is the Christ brings life",
        body:
          "John wrote his Gospel 'that you may believe that Jesus is the Christ, the Son of God, and that believing you may have life in his name.' Peter confessed it at Caesarea Philippi: 'You are the Christ, the Son of the living God,' and John says everyone who believes that Jesus is the Christ is born of God. The title is not trivia: it is the confession on which life hangs.",
        verses: ["John 20:31", "Matthew 16:16", "1 John 5:1"],
      },
    ],
    keyVerses: ["Psalm 2:2", "Luke 4:18-21", "Acts 2:36", "John 20:31"],
    raises: ["is-jesus-really-god", "will-jesus-return-literally", "what-does-it-mean-that-jesus-is-the-son-of-god"],
    followsFrom: ["who-is-jesus", "why-did-jesus-call-himself-son-of-man"],
    related: ["who-is-jesus", "why-is-jesus-both-son-of-god-and-son-of-man"],
    planned: [],
    order: 61,
  },

  {
    slug: "are-there-other-gods",
    question: "Does the Bible teach there are other gods?",
    category: "jesus-christ",
    summary:
      "No. The Bible is frank that other beings are called elohim (gods) in Scripture, but it never presents any of them as rivals to Yahweh: they are creatures or representatives, never creators, never almighty, and never to be worshipped. Worship belongs to Yahweh alone, because there is no one else.",
    passages: [
      {
        book: "Deuteronomy",
        chapter: 4,
        title: "There is no one else besides him",
        lookFor: "Moses drives the lesson of Sinai home: Yahweh is God in heaven and on earth; there is no other.",
        focus: "32-40",
      },
      {
        book: "Isaiah",
        chapter: 45,
        title: "I am Yahweh, and there is no one else",
        lookFor: "God speaks in the first person about His uniqueness, over and over, leaving no room for rivals.",
        focus: "5-12",
      },
      {
        book: "1 Corinthians",
        chapter: 8,
        title: "Many so-called gods, one God",
        lookFor: "Paul names the 'gods' of the pagan world and still confesses one God and one Lord.",
        focus: "4-13",
      },
      {
        book: "Psalms",
        chapter: 82,
        title: "God judges among the gods",
        lookFor: "A psalm where other 'gods' appear on stage, and God presides over them and sentences them.",
      },
    ],
    points: [
      {
        heading: "God's own claim leaves no room for rivals",
        body:
          "The Bible's strongest statements come from God Himself: 'Yahweh himself is God in heaven above and on the earth beneath. There is no one else.' He says it through Isaiah again and again: 'I am Yahweh, and there is no one else. Besides me, there is no God,' and 'Is there a God besides me? Indeed, there is not. I don't know any other Rock.' Whatever else Scripture may call elohim, it insists none of them is God in this sense.",
        verses: ["Deuteronomy 4:35", "Deuteronomy 4:39", "Isaiah 45:5", "Isaiah 44:6", "Isaiah 44:8"],
      },
      {
        heading: "Elohim is a title of office, not only a name",
        body:
          "The Hebrew word elohim describes power and office as much as identity. God tells Moses, 'I have made you as God to Pharaoh': Moses bears divine authority without being divine. The same word appears for Israel's judges at the gates, who represented God's own judgment when theft cases came before them. Being called elohim means standing in God's seat of authority, not sharing God's nature.",
        verses: ["Exodus 7:1", "Exodus 21:6", "Exodus 22:8"],
      },
      {
        heading: "The 'gods' of Psalm 82 are judged, not worshipped",
        body:
          "'God presides in the great assembly. He judges among the gods.' However we read these figures, human rulers or spiritual powers, the psalm's plot line is decisive: they judge unjustly, God stands up in their midst, and He sentences them: 'you shall die like men.' They are creatures under judgment. No one worships them; no one prays to them; their end is death.",
        verses: ["Psalms 82:1", "Psalms 82:2", "Psalms 82:6-7"],
      },
      {
        heading: "So-called gods are nothing to fear and nothing to worship",
        body:
          "Paul, writing to a city full of cults, says there are 'many \"gods\" and many \"lords\"', and then immediately adds: 'no idol is anything in the world, and that there is no other God but one.' Jesus quotes the Shema's command with approval: worship the Lord your God, and serve Him only. The Bible can name the powers people worshipped precisely in order to strip them of worship.",
        verses: ["1 Corinthians 8:4-6", "Matthew 4:10", "Deuteronomy 10:20"],
      },
      {
        heading: "One Almighty, and His Son shares His nature",
        body:
          "The picture Scripture gives is not a committee of gods with one chairman. It is one Creator, without equal or competitor, who has revealed Himself as Father, Son, and Holy Spirit. That is why the New Testament can heap divine titles on Jesus without ever counting a second god: the Son creates all things and is worshipped by angels, because He is the one God's own Word made flesh.",
        verses: ["Isaiah 46:9", "Hebrews 1:2", "John 1:1", "Colossians 2:9"],
      },
    ],
    keyVerses: ["Deuteronomy 4:35", "Isaiah 45:5", "Psalms 82:1", "1 Corinthians 8:4-6", "Isaiah 44:8"],
    raises: ["who-are-the-gods-of-psalm-82", "what-does-firstborn-mean"],
    followsFrom: ["what-does-it-mean-that-god-is-one"],
    related: ["does-jesus-sharing-gods-nature-mean-two-gods", "who-is-satan"],
    planned: ["Why did Israel keep drifting into idolatry if there are no other gods?"],
    order: 62,
  },

  {
    slug: "who-are-the-gods-of-psalm-82",
    question: "Who are the 'gods' (elohim) of Psalm 82?",
    category: "jesus-christ",
    summary:
      "Psalm 82 shows God presiding over 'gods' who judge unjustly and are sentenced to die like men. Most readers have seen Israel's judges and rulers here, men who bore God's office and title; others see spiritual powers behind them. Either way the psalm's point stands: these elohim are under God's authority, and Jesus used exactly this psalm to prove He is far more than one of them.",
    passages: [
      {
        book: "Psalms",
        chapter: 82,
        title: "God stands up among the gods",
        lookFor: "The whole drama in eight verses: an assembly, an indictment, a sentence, and a prayer that God Himself would judge the earth.",
      },
      {
        book: "John",
        chapter: 10,
        title: "Jesus quotes Psalm 82",
        lookFor: "When accused of blasphemy, Jesus cites 'I said, you are gods,' and turns it into proof of who He is.",
        focus: "22-42",
      },
      {
        book: "Exodus",
        chapter: 22,
        title: "Judges who stand in God's place",
        lookFor: "Cases brought 'to God,' meaning to the judges, who carry His authority in ordinary disputes.",
        focus: "5-15",
      },
      {
        book: "Deuteronomy",
        chapter: 17,
        title: "The court of the priests and the judge",
        lookFor: "Hard cases go to the place Yahweh chooses; the priestly court's ruling carries divine weight.",
        focus: "8-13",
      },
    ],
    points: [
      {
        heading: "The scene: God presides over an assembly",
        body:
          "'God presides in the great assembly. He judges among the gods.' The Hebrew word is elohim both for the presiding God and for those He judges. The psalm does not open with a rival throne but with one throne: Elohim stands, the elohim are arraigned before Him. From the first line, these 'gods' answer to Someone greater.",
        verses: ["Psalms 82:1"],
      },
      {
        heading: "Reading one: the judges and rulers of Israel",
        body:
          "Scripture applies elohim to humans who hold God's office. Moses is 'as God to Pharaoh'; theft cases are brought 'to God', that is, to the judge at the gate; hard cases go up to priests and the judge who act in God's name. On this reading the 'gods' are corrupt judges and rulers, and the sentence fits perfectly: 'you shall die like men.' They claimed godlike authority, yet they were only men.",
        verses: ["Exodus 7:1", "Exodus 22:8", "Deuteronomy 17:8-13", "Psalms 82:7"],
      },
      {
        heading: "Reading two: the powers behind the thrones",
        body:
          "Other passages suggest spiritual rulers stand behind human injustice, and some readers take Psalm 82's assembly to include them. Note that Deuteronomy 32:8 says God fixed the nations' boundaries 'according to the number of the children of Israel,' while some ancient manuscripts read 'according to the number of the sons of God.' Even if unseen powers are in view, nothing changes: they rebel, they fail the poor, and God sentences them to die. They are never objects of worship and never creators.",
        verses: ["Deuteronomy 32:8", "Psalms 82:6-7", "Psalms 82:8"],
      },
      {
        heading: "Jesus' argument: from lesser to greater",
        body:
          "When the leaders accused Jesus of blasphemy for calling Himself God's Son, He answered: 'Isn't it written in your law, I said, you are gods?' If Scripture can give the title gods to those who merely carried God's word, then it cannot be blasphemy for the one 'whom the Father sanctified and sent into the world' to be called God's Son. Notice what Jesus is doing: He accepts the psalm's premise that its gods are small, and steps forward as Someone in a different category entirely.",
        verses: ["John 10:34-36", "John 10:33"],
      },
      {
        heading: "And then Jesus claims what no elohim of Psalm 82 could",
        body:
          "Seconds after quoting Psalm 82, Jesus says, 'I and the Father are one,' and the crowd picks up stones: 'because you, being a man, make yourself God.' Psalm 82 ends with a prayer: 'Arise, God, judge the earth.' In John 10 the answer to that prayer walks into the temple courts. The Father is in the Son and the Son in the Father: this is not one more elohim among the judged, but the one God Himself come to judge.",
        verses: ["John 10:30", "John 10:38", "John 10:33", "Psalms 82:8"],
      },
    ],
    keyVerses: ["Psalms 82:1", "Psalms 82:6-7", "John 10:34-36", "John 10:30"],
    raises: ["is-jesus-really-god", "what-does-firstborn-mean"],
    followsFrom: ["are-there-other-gods"],
    related: ["does-jesus-sharing-gods-nature-mean-two-gods", "why-jesus-calls-the-spirit-another-helper"],
    planned: ["Who are the sons of God in Genesis 6?"],
    order: 63,
  },

  {
    slug: "what-does-firstborn-mean",
    question: "If Jesus is the 'firstborn of all creation,' was He created?",
    category: "jesus-christ",
    summary:
      "No. 'Firstborn' (Greek prototokos) is a title of rank and heirship, not a birth certificate. David was appointed firstborn over his older brothers, Israel and Ephraim are called God's firstborn, and Colossians itself says all things were created through Jesus and for Him. The firstborn of all creation is the One to whom creation belongs, not its earliest creature.",
    passages: [
      {
        book: "Colossians",
        chapter: 1,
        title: "The firstborn of all creation",
        lookFor: "Read the whole hymn carefully: what does Paul say the firstborn does, and what does he say creation's relationship to Him is?",
        focus: "13-23",
      },
      {
        book: "Psalms",
        chapter: 89,
        title: "David appointed firstborn",
        lookFor: "God calls David His firstborn and highest king. Check David's place in his family, and notice what firstborn means here.",
        focus: "19-37",
      },
      {
        book: "Hebrews",
        chapter: 1,
        title: "The Son above every name",
        lookFor: "The Son as heir of all things, the maker of the worlds, the firstborn brought into the world and worshipped by angels.",
        focus: "1-14",
      },
      {
        book: "Genesis",
        chapter: 48,
        title: "Ephraim placed before Manasseh",
        lookFor: "Jacob crosses his hands and gives the younger son the firstborn blessing. Firstborn status moves; it is not a fact of biology.",
        focus: "8-20",
      },
    ],
    points: [
      {
        heading: "Firstborn is about rank and inheritance, not chronology",
        body:
          "In Scripture the firstborn is the heir, the one given preeminence, whatever his actual birth order. God says of David: 'I will also appoint him my firstborn, the highest of the kings of the earth.' But David was Jesse's youngest, left in the field with the sheep. When the Greek Old Testament calls David prototokos here, no one imagines it means he was born first. It means he was raised to the highest rank.",
        verses: ["Psalms 89:27", "1 Samuel 16:11", "1 Chronicles 5:1"],
      },
      {
        heading: "Nations and tribes are called firstborn too",
        body:
          "God tells Pharaoh, 'Israel is my son, my firstborn,' though Israel was hardly the oldest nation on earth. Through Jeremiah He says, 'Ephraim is my firstborn,' though Ephraim was Joseph's younger son. And Jacob deliberately transfers the firstborn blessing from Manasseh to Ephraim. The word simply cannot mean 'the first one born' wherever Scripture uses it, so it need not mean that in Colossians either.",
        verses: ["Exodus 4:22", "Jeremiah 31:9", "Genesis 48:5", "Genesis 48:13-14"],
      },
      {
        heading: "Paul's own context rules out a created Jesus",
        body:
          "Whatever prototokos means, Paul tells us himself in the next verse: 'by him all things were created... all things have been created through him, and for him,' and 'he is before all things, and in him all things are held together.' A creature cannot be the agent, goal, and sustainer of all creation including himself. If Jesus were part of creation, 'all things' would have to exclude Him, which is exactly what Paul refuses to do.",
        verses: ["Colossians 1:16", "Colossians 1:17", "Colossians 1:15"],
      },
      {
        heading: "Firstborn from the dead: the pattern of the title",
        body:
          "Two verses later Paul calls Jesus 'the beginning, the firstborn from the dead, that in all things he might have the preeminence.' There the meaning is unmistakable: not the first person ever to rise, but the One whose resurrection ranks above all others and opens the way for ours. The title consistently marks supremacy: 'firstborn among many brothers,' 'firstborn of the dead,' 'firstborn of all creation.'",
        verses: ["Colossians 1:18", "Romans 8:29", "Revelation 1:5"],
      },
      {
        heading: "God commands worship of the firstborn",
        body:
          "Hebrews applies Psalm 89's firstborn title to Jesus and draws the obvious conclusion: 'When he again brings in the firstborn into the world he says, Let all the angels of God worship him,' and then quotes the Father speaking to the Son: 'Your throne, O God, is forever and ever.' Scripture forbids worshipping any creature, even a glorious one, yet commands worship of the firstborn. Only one conclusion fits: the firstborn of all creation is God the Son, uncreated and eternal.",
        verses: ["Hebrews 1:6", "Hebrews 1:8", "Matthew 4:10", "John 20:28"],
      },
    ],
    keyVerses: ["Colossians 1:15-17", "Psalms 89:27", "Exodus 4:22", "Colossians 1:18", "Hebrews 1:6"],
    raises: ["is-jesus-really-god", "how-can-one-person-be-fully-god-and-fully-man"],
    followsFrom: ["are-there-other-gods", "who-are-the-gods-of-psalm-82"],
    related: ["does-jesus-sharing-gods-nature-mean-two-gods", "why-did-god-become-a-man", "what-is-the-trinity"],
    planned: ["Why does Revelation call Jesus 'the beginning of God's creation'?"],
    order: 64,
  },

  {
    slug: "did-jesus-treat-scripture-as-final",
    question: "Did Jesus treat Scripture as the final authority?",
    category: "word-of-god",
    summary:
      "Yes. At every decisive moment Jesus answered with Scripture: He met temptation three times with 'It is written,' He charged religious leaders with voiding God's word by their traditions, and He settled disputes by appealing to writings that 'can't be broken.' What held final authority for Jesus holds final authority for everyone who follows Him.",
    passages: [
      {
        book: "Matthew",
        chapter: 4,
        title: "It is written",
        lookFor: "Three times the tempter comes, and three times Jesus answers with Scripture alone.",
        focus: "1-11",
      },
      {
        book: "Mark",
        chapter: 7,
        title: "Tradition against the commandment",
        lookFor: "Human tradition set up beside God's word, and Jesus' verdict on which gives way.",
        focus: "1-13",
      },
      {
        book: "John",
        chapter: 10,
        title: "Scripture cannot be broken",
        lookFor: "Jesus defends His claims by quoting Scripture and calling it final and unbreakable.",
        focus: "31-39",
      },
    ],
    points: [
      {
        heading: "Every answer begins with 'It is written'",
        body:
          "In the wilderness Jesus did not answer the tempter from His own authority as God the Son, though He had it. He answered as man, from Scripture: 'Man shall not live by bread alone, but by every word that proceeds out of the mouth of God.' Three times the sword came out, and each time it was the written word of God. If Jesus settled questions that way, His people have their pattern.",
        verses: ["Matthew 4:4", "Matthew 4:7", "Matthew 4:10", "Deuteronomy 8:3"],
      },
      {
        heading: "Tradition never outranks the word of God",
        body:
          "The Pharisees had built a body of tradition alongside Scripture, and Jesus judged it unsparingly: 'You set aside the commandment of God, and hold tightly to the tradition of men,' making the word of God void by the tradition they handed down. Whatever honors it claims, any teaching layered over Scripture must yield to Scripture or be condemned by it.",
        verses: ["Mark 7:8", "Mark 7:9", "Mark 7:13", "Isaiah 29:13"],
      },
      {
        heading: "Scripture cannot be broken",
        body:
          "When His enemies disputed who He was, Jesus ended the argument by quoting a psalm and observing that 'the Scripture can't be broken': what is written stands, down to the smallest stroke. He prayed, 'Sanctify them in your truth. Your word is truth,' and said heaven and earth would sooner pass away than its least letter fail.",
        verses: ["John 10:35", "John 17:17", "Matthew 5:18"],
      },
      {
        heading: "Even apostles are measured by it",
        body:
          "This final authority extends over every teacher, including the apostles themselves. The Berean Jews were called more noble than others precisely because they took Paul's preaching and examined the Scriptures daily to see whether those things were so. Paul himself wished an angel from heaven accursed if he preached another gospel than the one already given.",
        verses: ["Acts 17:11", "Galatians 1:8-9", "1 Thessalonians 5:21"],
      },
    ],
    keyVerses: ["Matthew 4:4", "Mark 7:13", "John 10:35", "Acts 17:11"],
    raises: ["should-i-test-every-teaching-by-scripture", "how-should-i-read-the-bible"],
    followsFrom: ["can-i-trust-the-bible"],
    related: ["can-i-trust-the-bible", "how-should-i-read-the-bible", "how-do-we-know-which-books-belong-in-the-bible"],
    planned: [],
    order: 65,
  },

  {
    slug: "should-i-test-every-teaching-by-scripture",
    question: "Should I test every teaching by Scripture?",
    category: "word-of-god",
    summary:
      "Yes, always. Scripture commends hearers who verify: the Bereans searched the Scriptures daily to check even an apostle's preaching, John commands testing every spirit, and Paul tells the church to test everything and hold fast to the good. No messenger, office, or title exempts anyone from the test.",
    passages: [
      {
        book: "Acts",
        chapter: 17,
        title: "The noble Bereans",
        lookFor: "They received the word eagerly and then examined the Scriptures daily to see if it was so.",
        focus: "10-15",
      },
      {
        book: "1 Thessalonians",
        chapter: 5,
        title: "Test everything",
        lookFor: "Do not despise prophesying, but test all things and hold fast what is good.",
        focus: "19-22",
      },
      {
        book: "1 John",
        chapter: 4,
        title: "Test the spirits",
        lookFor: "Many false prophets have gone out into the world; the test is what they say about Jesus.",
        focus: "1-6",
      },
      {
        book: "2 Timothy",
        chapter: 3,
        title: "Continue in what you learned",
        lookFor: "The God-breathed Scriptures are the standard that equips for every good work.",
        focus: "14-17",
      },
    ],
    points: [
      {
        heading: "Noble hearers verify",
        body:
          "Luke stops to praise the Bereans, and notice why: not eagerness alone, but eagerness joined to examination. They listened to the apostle Paul with readiness and then went to the Scriptures daily to confirm his words. Faith is not credulity; believing the right things includes checking that they are the right things.",
        verses: ["Acts 17:11-12", "John 5:39"],
      },
      {
        heading: "Test everything, hold the good",
        body:
          "Paul commands the church to examine all teaching and cling only to what survives. John sharpens it further: 'don't believe every spirit, but test the spirits, whether they are of God,' because false prophets have gone out into the world. Jesus warns of wolves in sheep's clothing, recognizable by their fruit, which requires looking closely.",
        verses: ["1 Thessalonians 5:20-21", "1 John 4:1", "Matthew 7:15"],
      },
      {
        heading: "The standard is the written Word",
        body:
          "'Turn to the law and to the testimony!' Isaiah's rule stands: if teaching does not speak according to this word, it carries no light from God. The measure of a message is not the messenger's office, sincerity, miracles, or majority, but agreement with the God-breathed Scriptures, the sum of which is truth.",
        verses: ["Isaiah 8:20", "2 Timothy 3:16-17", "Psalm 119:160"],
      },
      {
        heading: "Correction done in love",
        body:
          "Testing is not a taste for quarrels. When Apollos taught accurately the things about Jesus but incompletely, Priscilla and Aquila took him aside and explained the way of God more carefully, and he grew. The Lord's servant corrects opponents gently, contending earnestly for the faith without becoming contentious in spirit.",
        verses: ["Acts 18:26", "2 Timothy 2:24-25", "Jude 1:3"],
      },
    ],
    keyVerses: ["Acts 17:11", "1 Thessalonians 5:21", "1 John 4:1", "Isaiah 8:20"],
    raises: ["can-i-seek-god-on-my-own", "did-jesus-treat-scripture-as-final"],
    followsFrom: ["did-jesus-treat-scripture-as-final", "how-should-i-read-the-bible"],
    related: ["how-should-i-read-the-bible", "how-do-we-know-which-books-belong-in-the-bible"],
    planned: ["What should I do when a teacher I respect contradicts Scripture?"],
    order: 66,
  },

  {
    slug: "do-i-need-a-priest-to-reach-god",
    question: "Do I need a priest to reach God?",
    category: "jesus-christ",
    summary:
      "There is one Mediator between God and men, the Man Christ Jesus, and through His one offering every believer may draw near directly and boldly. The torn veil says access is open; the royal priesthood says God's people minister to Him themselves. Christ is Priest enough for all who come to God through Him.",
    passages: [
      {
        book: "Hebrews",
        chapter: 10,
        title: "One offering, open access",
        lookFor: "Every priest stands daily offering the same sacrifices; Christ offered one sacrifice and sat down, opening a new and living way.",
        focus: "11-22",
      },
      {
        book: "Hebrews",
        chapter: 4,
        title: "Draw near with boldness",
        lookFor: "A sympathetic High Priest, and an invitation to come straight to the throne of grace.",
        focus: "14-16",
      },
      {
        book: "Matthew",
        chapter: 27,
        title: "The veil torn from top to bottom",
        lookFor: "At Jesus' death the curtain barring access to God tore in two, opened from heaven's side.",
        focus: "45-54",
      },
      {
        book: "1 Peter",
        chapter: 2,
        title: "A holy priesthood",
        lookFor: "Believers themselves are living stones built into a priesthood, offering spiritual sacrifices.",
        focus: "4-10",
      },
    ],
    points: [
      {
        heading: "One mediator between God and men",
        body:
          "The gospel narrows the road to one Person: 'There is one God, and one mediator between God and men, the man Christ Jesus.' Through Him 'we both have our access in one Spirit to the Father.' Any additional mediator between the soul and God, however well meant, subtracts from the sufficiency of the Son.",
        verses: ["1 Timothy 2:5-6", "John 14:6", "Ephesians 2:18"],
      },
      {
        heading: "The veil was torn from top to bottom",
        body:
          "When Jesus died, the temple curtain separating sinners from God's presence tore in two, and the direction matters: torn from the top, by God's hand and not man's. Hebrews reads the sign plainly: we have confidence to enter the holy place by 'a new and living way,' through the veil, that is to say, His flesh. Access to the Father is not granted at a priest's discretion; it was purchased at Calvary and thrown open.",
        verses: ["Matthew 27:51", "Hebrews 10:19-20", "Ephesians 3:12"],
      },
      {
        heading: "Every priest stands; Christ sat down",
        body:
          "Under the old covenant priests stood daily, offering many sacrifices that could never take away sin. This Man offered one sacrifice for sins forever and sat down: the posture of a finished work. Because the sacrifice is complete and the Priest is permanent, no further sacrificing priesthood mediates forgiveness; He ever lives to intercede for those who come to God through Him.",
        verses: ["Hebrews 10:11-12", "Hebrews 10:14", "Hebrews 7:25"],
      },
      {
        heading: "We draw near with boldness ourselves",
        body:
          "The invitation is addressed to the weakest believer: 'Let us therefore draw near with boldness to the throne of grace,' a mercy seat approached personally, in full assurance of faith. In Christ every sinner who trusts Him has what Israel's laity never had under the law: unhindered, unmediated approach to God.",
        verses: ["Hebrews 4:16", "Hebrews 10:22"],
      },
      {
        heading: "God's people become the priesthood",
        body:
          "The astonishing reversal of the gospel is that believers are not merely served by a priesthood; they are made one: 'You also, as living stones, are built up as a spiritual house, to be a holy priesthood, to offer up spiritual sacrifices.' A chosen people, a royal priesthood, God's own possession, called out of darkness to proclaim His excellencies.",
        verses: ["1 Peter 2:5", "1 Peter 2:9", "Revelation 1:5-6"],
      },
    ],
    keyVerses: ["1 Timothy 2:5", "Hebrews 10:19-20", "Hebrews 4:16", "1 Peter 2:9"],
    raises: ["who-can-forgive-sins", "where-is-jesus-now"],
    followsFrom: ["why-did-jesus-have-to-die", "where-is-jesus-now"],
    related: ["why-did-jesus-have-to-die", "how-is-the-new-covenant-different-from-the-old-one"],
    planned: [],
    order: 67,
  },

  {
    slug: "who-can-forgive-sins",
    question: "Who can forgive sins?",
    category: "our-walk",
    summary:
      "Only God can forgive sins, and He forgives directly and completely when we confess to Him. Jesus claimed this divine prerogative for Himself, and everyone who confesses finds a faithful and just Forgiver. Believers confess to one another as equals praying for equals, but no one stands between a sinner and God's pardon.",
    passages: [
      {
        book: "Mark",
        chapter: 2,
        title: "Who can forgive sins but God alone?",
        lookFor: "Jesus forgives a paralytic, reads the objectors' hearts, and proves His authority to forgive.",
        focus: "1-12",
      },
      {
        book: "1 John",
        chapter: 1,
        title: "Confess, and He forgives",
        lookFor: "Confession addressed directly to God, met with faithfulness and justice, not reluctance.",
        focus: "5-10",
      },
      {
        book: "Psalm",
        chapter: 32,
        title: "Blessed is the forgiven man",
        lookFor: "David hides nothing, acknowledges his sin to God alone, and finds covering.",
        focus: "1-7",
      },
      {
        book: "Luke",
        chapter: 18,
        title: "The tax collector goes home justified",
        lookFor: "A man with no credentials and no intermediary, asking God for mercy.",
        focus: "9-14",
      },
    ],
    points: [
      {
        heading: "Forgiveness is God's prerogative",
        body:
          "The scribes reasoned correctly when Jesus pronounced forgiveness: 'Who can forgive sins but God alone?' David knew the same arithmetic: against You, and You only, have I sinned, so the cleansing must come from You. Pardon is not a commodity clergy dispense; it is a divine prerogative exercised where God chooses, which is why the gospel is such good news.",
        verses: ["Mark 2:7", "Psalm 51:4", "Psalm 130:3-4", "Isaiah 43:25"],
      },
      {
        heading: "Jesus claimed and exercised that prerogative",
        body:
          "Jesus did not merely talk about forgiveness; He bestowed it on His own authority: 'Son, your sins are forgiven you,' and to prove it to the doubters He healed the paralytic on the spot, saying 'the Son of Man has authority on earth to forgive sins.' To the woman who washed His feet with her tears He said the same: your sins are forgiven; your faith has saved you; go in peace.",
        verses: ["Mark 2:5", "Mark 2:10-11", "Luke 7:48"],
      },
      {
        heading: "Confession goes straight to Him",
        body:
          "'If we confess our sins, he is faithful and righteous to forgive us the sins and to cleanse us from all unrighteousness.' Notice the direction: confessed to Him, forgiven by Him. David traced the anatomy of it: while he kept silent his bones wasted away, until he acknowledged his sin and did not hide his iniquity, and then, immediately, God forgave the iniquity of it.",
        verses: ["1 John 1:9", "Psalm 32:5", "Proverbs 28:13"],
      },
      {
        heading: "Equals confessing among equals",
        body:
          "Scripture does call Christians to confess sins to one another and pray for one another, and that is precious: mutual, horizontal, healing honesty among fellow servants. But the tax collector beat his breast, asked God to be merciful to him, a sinner, and walked home justified with no intermediary but mercy itself. The pardon comes from above; the fellowship is beside us.",
        verses: ["James 5:16", "Luke 18:13-14"],
      },
    ],
    keyVerses: ["Mark 2:10", "1 John 1:9", "Psalm 32:5", "Luke 18:13"],
    raises: ["what-happens-when-i-sin", "what-is-repentance", "do-i-need-a-priest-to-reach-god"],
    followsFrom: ["do-i-need-a-priest-to-reach-god", "what-happens-when-i-sin"],
    related: ["what-happens-when-i-sin", "do-i-need-a-priest-to-reach-god"],
    planned: [],
    order: 68,
  },

  {
    slug: "what-authority-did-jesus-give-his-leaders",
    question: "What kind of authority did Jesus give church leaders?",
    category: "church",
    summary:
      "Servant authority, and nothing else. Jesus forbade His followers the thrones and honorific titles of the world: greatness in His kingdom is service, elders shepherd willingly as examples rather than lording it over the flock, and every leader remains under the authority of the one Teacher, the Christ.",
    passages: [
      {
        book: "Matthew",
        chapter: 20,
        title: "It shall not be so among you",
        lookFor: "The rulers of the Gentiles lord it over people, and Jesus explicitly rules that model out.",
        focus: "20-28",
      },
      {
        book: "Matthew",
        chapter: 23,
        title: "Titles, fathers, and instructors",
        lookFor: "Why Jesus forbids the honorifics: one Father, one Teacher, and all of you are brothers.",
        focus: "1-12",
      },
      {
        book: "John",
        chapter: 13,
        title: "The Lord takes the towel",
        lookFor: "Knowing He was Lord of all, Jesus washed feet and called it the pattern.",
        focus: "1-17",
      },
      {
        book: "1 Peter",
        chapter: 5,
        title: "Shepherds, not lords",
        lookFor: "Peter's charge to elders: shepherd willingly, as examples, not domineering.",
        focus: "1-7",
      },
    ],
    points: [
      {
        heading: "Ruling is ruled out",
        body:
          "Jesus named the worldly model precisely, rulers who 'lord it over them,' and then vetoed it: 'It shall not be so among you.' Greatness in His kingdom runs the opposite direction, and He gave Himself as the measure: the Son of Man came not to be served, but to serve, and to give His life a ransom for many. Church authority exists to wash, feed, and protect, never to dominate.",
        verses: ["Matthew 20:25-28", "Mark 10:42-45", "Luke 22:25-27"],
      },
      {
        heading: "Honorific titles belong elsewhere",
        body:
          "'Call no man on the earth your father, for one is your Father, he who is in heaven,' Jesus said, and 'neither be called masters, for one is your master, the Christ.' The point is not politeness grammar but dependence: reverence and trust route to God, while leaders stay simply brothers, knowing the greatest among them is the servant of all.",
        verses: ["Matthew 23:8-10", "Matthew 23:11-12"],
      },
      {
        heading: "The Lord of all took the towel",
        body:
          "John frames the foot washing with the fullest possible statement of Jesus' dignity: knowing the Father had given all things into His hands, He rose, laid aside His garments, and took a towel. Authority conscious of itself serves most freely. He told them plainly: if your Lord and Teacher washed your feet, you also ought to wash one another's feet.",
        verses: ["John 13:3-5", "John 13:14-15", "Philippians 2:5-7"],
      },
      {
        heading: "Shepherd willingly, be examples",
        body:
          "Peter, who watched all of this happen, passed it on: shepherd the flock of God, not by constraint but willingly, not for dishonest gain but eagerly, 'neither as lording it over those entrusted to you, but making yourselves examples to the flock.' Paul echoes it: overseers care for the church of God, and leaders keep watch as those who will give account. Oversight is stewardship under authority, not ownership of it.",
        verses: ["1 Peter 5:2-3", "Acts 20:28", "Hebrews 13:17"],
      },
    ],
    keyVerses: ["Matthew 20:26-28", "Matthew 23:10-12", "John 13:14-15", "1 Peter 5:2-3"],
    raises: ["what-does-peter-say-about-peter", "what-does-a-church-need-from-its-leaders"],
    followsFrom: ["what-does-a-church-need-from-its-leaders", "what-is-a-healthy-church"],
    related: ["what-is-a-healthy-church", "what-is-church-discipline", "what-is-the-church"],
    planned: [],
    order: 69,
  },

  {
    slug: "what-does-peter-say-about-peter",
    question: "What does Peter say about Peter?",
    category: "church",
    summary:
      "Peter's own letters and history show a man who consistently pointed away from himself. He confessed Jesus as the Christ, needed correction himself, refused worship at Cornelius' house, and wrote as a fellow elder telling shepherds not to domineer. Read him closely and he keeps handing the spotlight back to his Lord.",
    passages: [
      {
        book: "Matthew",
        chapter: 16,
        title: "The confession and the rebuke",
        lookFor: "Peter's great confession that Jesus is the Christ, followed minutes later by Peter needing rebuke himself.",
        focus: "13-23",
      },
      {
        book: "Galatians",
        chapter: 2,
        title: "Opposed to his face",
        lookFor: "Peter, a pillar apostle, carried astray and corrected publicly by Paul.",
        focus: "11-16",
      },
      {
        book: "Acts",
        chapter: 10,
        title: "Stand up; I myself am also a man",
        lookFor: "Cornelius falls at Peter's feet, and Peter refuses the reverence outright.",
        focus: "24-33",
      },
      {
        book: "1 Peter",
        chapter: 5,
        title: "A fellow elder writes to elders",
        lookFor: "How Peter names himself, and what he tells shepherds to be.",
        focus: "1-5",
      },
    ],
    points: [
      {
        heading: "The rock was the confession",
        body:
          "When Peter said, 'You are the Christ, the Son of the living God,' Jesus blessed him and said, 'on this rock I will build my assembly.' The New Testament sings that same note everywhere: no other foundation can anyone lay than Jesus Christ Himself. Peter is the first stone in a building whose cornerstone and foundation is his Lord, and he says so in his own letter: coming to the Living Stone, we are built up as living stones.",
        verses: ["Matthew 16:15-18", "1 Corinthians 3:11", "1 Peter 2:4-5"],
      },
      {
        heading: "A pillar who needed correcting",
        body:
          "Peter was wrong at Antioch, and Paul resisted him to his face because he stood condemned: the leading apostle compromised the truth of the gospel under social pressure. Scripture records it without embarrassment, which tells us something: no apostle, however honored, stood above correction by the truth, and Peter himself received the correction.",
        verses: ["Galatians 2:11-14", "Matthew 16:21-23"],
      },
      {
        heading: "Refusing the worship due to God alone",
        body:
          "Twice Scripture shows Peter declining veneration. When Cornelius fell at his feet, Peter lifted him up, saying, 'Stand up! I myself am also a man.' And after the lame man was healed he asked the marveling crowd, why do you gaze at us, as though by our own power or godliness we made him walk? Men whose eyes were fixed on Jesus could not bear to receive what belongs to Him alone.",
        verses: ["Acts 10:25-26", "Acts 3:12-13", "Matthew 4:10"],
      },
      {
        heading: "Fellow elder, clothed with humility",
        body:
          "Peter's parting instruction to church leadership is drawn from his own resume of failure and grace: 'I exhort the elders among you, as a fellow elder,' shepherd the flock, not lording it over those entrusted to you, and all of you bind on humility toward one another, because God resists the proud. The man some would later crown spent his letters insisting he was a brother among shepherds.",
        verses: ["1 Peter 5:1-4", "1 Peter 5:5", "John 21:15-17"],
      },
    ],
    keyVerses: ["Matthew 16:16-18", "Acts 10:26", "Galatians 2:11", "1 Peter 5:1"],
    raises: ["does-god-use-our-failures", "what-is-the-church"],
    followsFrom: ["what-authority-did-jesus-give-his-leaders", "who-is-jesus"],
    related: ["does-god-use-our-failures", "still-my-father-when-i-fail", "what-is-the-church"],
    planned: [],
    order: 70,
  },

  {
    slug: "what-price-can-buy-forgiveness",
    question: "What price can buy forgiveness?",
    category: "gospel",
    summary:
      "Nothing we can pay, and nothing anyone else can pay on our own merits, ransoms a soul: no man can redeem his brother or give God a ransom for him. The price was paid once, by Another, the precious blood of Christ, and forgiveness is received as a gift through faith, never accumulated through payments, penalties, or purchased merits.",
    passages: [
      {
        book: "Psalm",
        chapter: 49,
        title: "No man can ransom his brother",
        lookFor: "The impossibility of paying for a soul, and the folly of trusting riches at death.",
        focus: "5-15",
      },
      {
        book: "Isaiah",
        chapter: 53,
        title: "The price God Himself provided",
        lookFor: "Where the impossible payment actually happened: pierced for our transgressions.",
        focus: "",
      },
      {
        book: "1 Peter",
        chapter: 1,
        title: "Ransomed, not with silver and gold",
        lookFor: "What redeemed you: perishable currency versus the precious blood of Christ.",
        focus: "13-21",
      },
      {
        book: "Colossians",
        chapter: 2,
        title: "The record of debt, nailed to the cross",
        lookFor: "God cancels the handwritten certificate of debt Himself; completeness is found in Christ.",
        focus: "6-15",
      },
    ],
    points: [
      {
        heading: "No man can redeem his brother",
        body:
          "Psalm 49 states the economics flatly: none of them can by any means redeem his brother, nor give God a ransom for him, for the redemption of their life is costly, no payment is ever enough. Micah felt the same weight when he imagined escalating payments: thousands of rams, ten thousand rivers of oil, even his firstborn for his transgression. The case is beyond every creature's purse, and that is the point: what salvation costs, only God can pay.",
        verses: ["Psalm 49:7-9", "Micah 6:6-7", "Romans 3:23-24"],
      },
      {
        heading: "God paid what no man could",
        body:
          "Into that impossibility walks Isaiah's Servant: 'He was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him.' John announces Him at the Jordan: behold, the Lamb of God who takes away the sin of the world. The ransom for souls is not extracted from men; it was supplied by God, from God.",
        verses: ["Isaiah 53:5-6", "John 1:29", "2 Corinthians 5:21"],
      },
      {
        heading: "Not silver and gold, but blood",
        body:
          "Peter prices it exactly: redeemed 'not with corruptible things, with silver or gold,' but 'with precious blood, as of a faultless and pure lamb, the blood of Christ.' If silver and gold could not purchase deliverance, no treasury of accumulated wealth or merit can either; the currency of redemption is one kind, spent once, at Calvary.",
        verses: ["1 Peter 1:18-19", "Ephesians 1:7", "Hebrews 9:12"],
      },
      {
        heading: "The certificate of debt is cancelled, not installments owed",
        body:
          "Paul describes forgiveness as a legal cancellation God performed Himself: He wiped out 'the handwriting in ordinances which was against us,' took it out of the way, and nailed it to the cross. Who shall bring a charge against God's chosen ones? It is God who justifies. A debt God declares cancelled cannot still be collected, and a record God nailed to the cross cannot be reissued.",
        verses: ["Colossians 2:13-14", "Romans 8:33-34", "Colossians 2:10"],
      },
      {
        heading: "Received by faith, never earned",
        body:
          "Because the payment is complete outside of us, it can only be received, not contributed to: 'by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.' To him who works, the reward is counted as debt; to him who does not work but believes in Him who justifies the ungodly, his faith is counted for righteousness. Salvation excludes boasting precisely because it excludes payment.",
        verses: ["Ephesians 2:8-9", "Romans 4:4-5", "Titus 3:5"],
      },
    ],
    keyVerses: ["Psalm 49:7-8", "1 Peter 1:18-19", "Colossians 2:14", "Ephesians 2:8-9"],
    raises: ["what-will-believers-be-rewarded-for-if-salvation-is-by-grace-alone", "what-is-imputation"],
    followsFrom: ["what-is-imputation", "what-is-justification", "why-did-jesus-have-to-die"],
    related: ["what-is-grace", "faith-or-works", "can-gods-grace-really-cover-my-worst-sins"],
    planned: [],
    order: 71,
  },

  {
    slug: "what-does-scripture-show-us-about-mary",
    question: "What does Scripture show us about Mary?",
    category: "jesus-christ",
    summary:
      "Scripture honors Mary as the blessed virgin who believed God's word and bore the Messiah, and it shows her doing what every believer does: rejoicing in God her Savior, treasuring and pondering, suffering beside her Son, praying with the church. Every scene where she appears turns the spotlight onto Jesus.",
    passages: [
      {
        book: "Luke",
        chapter: 1,
        title: "The annunciation and the Magnificat",
        lookFor: "Mary's faith, her blessing, and the God whom her spirit rejoices in: her Savior.",
        focus: "26-56",
      },
      {
        book: "John",
        chapter: 2,
        title: "Water into wine at Cana",
        lookFor: "Mary brings a need to Jesus and tells the servants exactly where to look.",
        focus: "1-11",
      },
      {
        book: "John",
        chapter: 19,
        title: "At the cross",
        lookFor: "A mother watching her Son die, and the ordinary loving provision Jesus makes for her.",
        focus: "25-27",
      },
      {
        book: "Acts",
        chapter: 1,
        title: "Praying with the brothers",
        lookFor: "After the ascension, where Mary is found: among the disciples, joining in prayer.",
        focus: "12-14",
      },
    ],
    points: [
      {
        heading: "Blessed because she believed",
        body:
          "Gabriel's greeting troubled her, not inflated her. Her greatness, by her cousin's own Spirit-filled explanation, is located in her faith: 'Blessed is she who believed, for there will be a fulfillment of the things which have been spoken to her from the Lord!' Mary's response to staggering news is the model believer's response: behold, the handmaid of the Lord; be it to me according to your word.",
        verses: ["Luke 1:38", "Luke 1:45", "Luke 1:48"],
      },
      {
        heading: "She rejoiced in God her Savior",
        body:
          "Mary's own song settles the question of her standing: 'My soul magnifies the Lord. My spirit has rejoiced in God my Savior.' A Savior is needed by the saved, and she names herself among the lowly upon whom God has looked. She glorifies His holiness, His mercy, and His strength, exactly as every saint does who knows the grace of God.",
        verses: ["Luke 1:46-47", "Luke 1:50"],
      },
      {
        heading: "Whatever he says to you, do it",
        body:
          "At Cana Mary brought the wine problem to Jesus, and when He answered her, she turned to the servants with the finest direction she ever gave: 'Whatever he says to you, do it.' That is Mary's whole ministry in Scripture: pointing needy people away from herself to her Son, whose hour had come and whose glory they beheld.",
        verses: ["John 2:5", "John 2:11"],
      },
      {
        heading: "Treasuring and pondering, pierced and present",
        body:
          "She kept these sayings, pondering them in her heart; Simeon warned her a sword would pierce her own soul too. It did: she stood by the cross while her Son suffered, and there Jesus gave her into John's keeping, a mother cared for in the plainest human terms. Scripture treats her with tenderness, and never with titles her Son did not give.",
        verses: ["Luke 2:19", "Luke 2:35", "John 19:26-27"],
      },
      {
        heading: "Found among the praying church",
        body:
          "After the ascension, Luke tells us exactly where to find her: with 'the women, and Mary the mother of Jesus, and with his brothers,' all devoting themselves to prayer as they waited for the Spirit. That is her last named appearance in Scripture: one believer among many, numbered with the disciples. Jesus had redefined His family around doing the Father's will, and Mary is found inside it.",
        verses: ["Acts 1:14", "Mark 3:34-35"],
      }
    ],
    keyVerses: ["Luke 1:46-47", "Luke 1:38", "John 2:5", "Acts 1:14"],
    raises: ["what-does-it-mean-to-be-a-child-of-god", "made-for-relationship"],
    followsFrom: ["who-is-jesus", "what-does-it-mean-that-jesus-is-the-son-of-god"],
    related: ["what-does-it-mean-to-be-a-child-of-god", "made-for-relationship"],
    planned: ["What happened to Mary after Pentecost?"],
    order: 72,
  },

  {
    slug: "to-whom-do-we-direct-our-prayers",
    question: "To whom do we direct our prayers?",
    category: "prayer",
    summary:
      "Jesus taught us to pray to the Father, in His name, helped by the Spirit: prayer in Scripture runs to God through Christ, never around Him. Our one Mediator always lives to intercede at the Father's right hand, and even the angels in God's presence refuse reverence from men, saying, worship God.",
    passages: [
      {
        book: "Matthew",
        chapter: 6,
        title: "Pray to your Father",
        lookFor: "Whom Jesus addresses: your Father who sees in secret; hallowed be His name.",
        focus: "5-15",
      },
      {
        book: "John",
        chapter: 16,
        title: "Ask the Father in my name",
        lookFor: "The risen Lord routing prayer through Himself to the Father, and the Father's love for direct askers.",
        focus: "16-28",
      },
      {
        book: "Hebrews",
        chapter: 7,
        title: "He always lives to intercede",
        lookFor: "The permanent priesthood of Jesus: the saving, ongoing intercession of the Son of God.",
        focus: "20-28",
      },
      {
        book: "Revelation",
        chapter: 19,
        title: "An angel declines worship",
        lookFor: "John falls at a heavenly messenger's feet and is told: see you do it not; worship God.",
        focus: "9-10",
      },
    ],
    points: [
      {
        heading: "Addressed to your Father",
        body:
          "'Pray to your Father who is in secret,' Jesus said, and taught the pattern: 'Our Father in heaven, may your name be kept holy.' Prayer in the New Testament is family speech directed to the Father, through the Son, in the Spirit. The address itself is theology, and Jesus wrote it for us.",
        verses: ["Matthew 6:6", "Matthew 6:9", "Luke 11:2"],
      },
      {
        heading: "In my name, straight to the Father",
        body:
          "On the night He was betrayed Jesus drew the route plainly: 'whatever you may ask of the Father in my name, he will give it to you.' Ask, and you will receive, that your joy may be made full. He even calls it love: the Father Himself loves you, because you have loved me and believed that I came from God. Asking in Jesus' name is not a formula tacked onto prayers; it is the road prayers travel.",
        verses: ["John 16:23-24", "John 16:27", "John 14:13-14"],
      },
      {
        heading: "Our intercessor already lives",
        body:
          "Christians are never told to recruit additional intercessors, because the decisive One is on duty: 'he is also able to save to the uttermost those who draw near to God through him, seeing that he lives forever to make intercession for them.' Paul asks, who intercedes for us? And answers: Christ Jesus, at the right hand of God. The Spirit helps us pray; the Son presents us; the Father receives us.",
        verses: ["Hebrews 7:25", "Romans 8:34", "Romans 8:26-27"],
      },
      {
        heading: "Even angels decline the honor",
        body:
          "Twice at the climax of Revelation John falls at an angel's feet to worship, and twice the angel refuses: 'Look! Don't do it! I am a fellow bondservant with you,' he says, and then commands him plainly, worship God. If glorious beings in God's immediate presence deflect reverence, how much less may devotion, trust, or prayer be routed through any creature? Scripture reserves the hearing ear for God alone: You who hear prayer, to you all men will come.",
        verses: ["Revelation 19:10", "Revelation 22:8-9", "Psalm 65:2", "Colossians 2:18"],
      },
    ],
    keyVerses: ["Matthew 6:9", "John 16:23", "Hebrews 7:25", "Revelation 22:9"],
    raises: ["what-does-it-mean-to-pray-in-jesus-name", "does-god-hear-my-prayers", "what-does-it-mean-to-pray-in-the-holy-spirit"],
    followsFrom: ["how-do-i-pray", "do-i-need-a-priest-to-reach-god"],
    related: ["does-god-hear-my-prayers", "what-does-it-mean-to-pray-in-jesus-name"],
    planned: [],
    order: 73,
  },

  {
    slug: "is-there-a-second-chance-after-death",
    question: "Is there a second chance after death?",
    category: "our-hope",
    summary:
      "Scripture treats death as a fixed threshold: it is appointed for people to die once, and after that comes judgment. Believers enter Christ's presence at once, the lost face separation already fixed, and the Bible nowhere pictures a stopover where souls are purified or a door reopened afterward. Today is the day of salvation, and it ends at the grave.",
    passages: [
      {
        book: "Luke",
        chapter: 16,
        title: "The rich man and Lazarus",
        lookFor: "Two deaths, two destinations, and a great gulf fixed so none may cross over.",
        focus: "19-31",
      },
      {
        book: "Hebrews",
        chapter: 9,
        title: "Once to die, then judgment",
        lookFor: "Death's appointment, and Christ's appearing to those who eagerly wait for Him.",
        focus: "24-28",
      },
      {
        book: "Luke",
        chapter: 23,
        title: "Today in paradise",
        lookFor: "The thief's same-day entry: no stopover, no delay, paradise with Jesus.",
        focus: "32-43",
      },
      {
        book: "2 Corinthians",
        chapter: 6,
        title: "Today is the day of salvation",
        lookFor: "The urgency of now: help arrives today, and the day is named today on purpose.",
        focus: "",
      },
    ],
    points: [
      {
        heading: "Appointed once to die, and after this, judgment",
        body:
          "Hebrews fixes the sequence without wiggle room: death once, judgment next. There is no third appointment between the two, no interim where the verdict is still in play. This solemnity is exactly why the writer pairs it with Christ's return: to those who eagerly wait for Him He appears a second time for salvation, complete, without reference to anything still owed.",
        verses: ["Hebrews 9:27-28"],
      },
      {
        heading: "A great gulf fixed",
        body:
          "In Jesus' account of the rich man and Lazarus, both die and land where their lives left them. The rich man can see, speak, remember, and regret, and Abraham tells him why nothing changes: 'Between us and you there is a great gulf fixed, that those who want to pass from here to you are not able, and that no one may cross over from there to us.' After death, the crossing runs one direction: none.",
        verses: ["Luke 16:22-23", "Luke 16:26"],
      },
      {
        heading: "Today in paradise",
        body:
          "The thief asked to be remembered when Jesus came in His kingdom and received far more than he asked: 'Assuredly I tell you, today you will be with me in Paradise.' Same day, same company, no intermediate station mentioned or needed. Paul agrees: to be absent from the body is to be at home with the Lord, and to depart and be with Christ is very far better.",
        verses: ["Luke 23:42-43", "2 Corinthians 5:8", "Philippians 1:23"],
      },
      {
        heading: "Nothing left to pay",
        body:
          "Any idea that something is still owed after death collides with Hebrews' closed ledger: by one offering He has perfected forever those who are being sanctified, and 'where remission of these is, there is no more offering for sin.' From the cross the accounting was spoken aloud: it is finished. A finished redemption leaves no purification installment for the departed to serve.",
        verses: ["Hebrews 10:14", "Hebrews 10:18", "John 19:30"],
      },
      {
        heading: "While it is called today",
        body:
          "The urgency of the gospel rests on this threshold: 'Behold, now is the acceptable time. Behold, now is the day of salvation.' The Spirit pleads, do not harden your hearts while it is called today. Every invitation Scripture issues is issued to the living, which is both the warning and the comfort: mercy is open wide right now, to whoever will come.",
        verses: ["2 Corinthians 6:2", "Hebrews 3:15", "John 9:4"],
      },
    ],
    keyVerses: ["Hebrews 9:27", "Luke 16:26", "Luke 23:43", "2 Corinthians 6:2"],
    raises: ["what-is-the-final-judgment-and-who-will-be-there", "what-is-hell", "what-is-heaven-like"],
    followsFrom: ["what-happens-when-i-die"],
    related: ["what-happens-when-i-die", "what-does-the-creed-mean-by-he-descended-into-hell", "what-is-heaven-like"],
    planned: [],
    order: 74,
  },

  {
    slug: "must-gods-servants-stay-unmarried",
    question: "Does God require His servants to stay unmarried?",
    category: "church",
    summary:
      "No. Scripture counts forbidding marriage a mark of departure from the faith, calls marriage honorable in every station, and treats married ministry as normal, with singleness a gift some receive for undivided devotion. Neither state is required, neither ranks above the other, and both are received with thanksgiving.",
    passages: [
      {
        book: "1 Timothy",
        chapter: 4,
        title: "Forbidding marriage foretold",
        lookFor: "The Spirit's explicit warning: teachings that forbid marriage belong to deceiving spirits.",
        focus: "1-5",
      },
      {
        book: "1 Corinthians",
        chapter: 9,
        title: "The right to a wife",
        lookFor: "Paul names the other apostles' marriages as ordinary, with Peter's included.",
        focus: "3-6",
      },
      {
        book: "1 Corinthians",
        chapter: 7,
        title: "Two gifts, side by side",
        lookFor: "Singleness valued for undivided devotion, marriage defended against burning: neither commanded.",
        focus: "32-35",
      },
      {
        book: "1 Timothy",
        chapter: 3,
        title: "Overseers with households",
        lookFor: "Church leadership assessed partly by faithful marriage and household management.",
        focus: "1-5",
      },
    ],
    points: [
      {
        heading: "A rule Scripture calls demonic",
        body:
          "Paul warns that in later times some will fall away, giving heed to deceiving spirits, 'forbidding marriage,' among other ascetic inventions, and he adds God's verdict: everything created is good, and nothing is to be rejected if it is received with thanksgiving. Whatever else celibacy rules are, Scripture labels mandatory abstinence from marriage a doctrine contrary to the faith once delivered.",
        verses: ["1 Timothy 4:1-3", "Genesis 2:18", "Hebrews 13:4"],
      },
      {
        heading: "Married ministry was the norm",
        body:
          "Paul assumes the apostles traveled with their wives, 'the rest of the apostles, and the brothers of the Lord, and Cephas,' and defends his own freedom to do likewise. Peter, the married fisherman whose mother-in-law Jesus healed, led the early church from a household, and an overseer's fitness was measured partly at home: ruling well his own house first.",
        verses: ["1 Corinthians 9:5", "Matthew 8:14-15", "1 Timothy 3:4-5"],
      },
      {
        heading: "Singleness is a gift, not a rank",
        body:
          "Paul honors singleness honestly: each man has his own gift from God, one of this kind and another of that kind. The unmarried person cares for the things of the Lord, how to please the Lord; the married person carries two loves at once, and Scripture calls that good too. Celibacy in the Bible is charism, never credential, a calling some receive, never a class above the rest.",
        verses: ["1 Corinthians 7:7-9", "1 Corinthians 7:32-35", "Matthew 19:11-12"],
      },
      {
        heading: "Both received with thanksgiving",
        body:
          "Marriage is honorable in every respect, the bed undefiled, and Proverbs promises favor from the LORD to the man who finds a wife. So the church holds both callings open before its people: marry if you burn and it is good; remain single if gifted and it is devoted. What Scripture forbids is not singleness but the requirement of it.",
        verses: ["Hebrews 13:4", "Proverbs 18:22", "1 Corinthians 7:36-38"],
      },
    ],
    keyVerses: ["1 Timothy 4:3", "1 Corinthians 9:5", "1 Corinthians 7:35", "Hebrews 13:4"],
    raises: ["does-god-have-one-plan-for-my-marriage", "what-authority-did-jesus-give-his-leaders"],
    followsFrom: ["what-authority-did-jesus-give-his-leaders", "what-does-a-church-need-from-its-leaders"],
    related: ["does-god-have-one-plan-for-my-marriage", "made-for-relationship", "what-is-a-healthy-church"],
    planned: [],
    order: 75,
  },

  {
    slug: "why-did-the-spirit-wait-until-pentecost",
    question: "Why did the Spirit wait until Pentecost?",
    category: "holy-spirit",
    summary:
      "The Spirit came at Pentecost because the gift was tied to Jesus' exaltation: only after He was crucified, risen, and enthroned did the Father pour out the promised Spirit through Him. And Pentecost itself was no accident of timing; it was one of God's appointed feasts, the day Israel celebrated the firstfruits of wheat harvest, now marking the first harvest of a new age.",
    passages: [
      {
        book: "Acts",
        chapter: 1,
        title: "The command to wait",
        lookFor: "Jesus does not tell the disciples to try harder. He tells them to wait for a promise, and links that promise to power for witness.",
        focus: "4-14",
      },
      {
        book: "Acts",
        chapter: 2,
        title: "The day arrives",
        lookFor: "Notice Peter's explanation: what looks like chaos is prophecy fulfilled, and it happened because Jesus was exalted.",
        focus: "1-41",
      },
      {
        book: "Leviticus",
        chapter: 23,
        title: "The feast of weeks",
        lookFor: "Fifty days after Passover came Pentecost, the feast of firstfruits of the wheat harvest, appointed centuries in advance.",
        focus: "15-21",
      },
    ],
    points: [
      {
        heading: "Jesus commanded the wait, so the timing was His",
        body:
          "The disciples were not left to guess. The risen Jesus ordered them not to leave Jerusalem but to 'wait for the promise of the Father,' and Luke records Him saying, 'wait in the city of Jerusalem until you are clothed with power from on high.' The wait was obedience, not absence: the Spirit's coming had a set hour on God's calendar, just as the cross did.",
        verses: ["Acts 1:4", "Luke 24:49"],
      },
      {
        heading: "Pentecost was an appointed feast, not a random date",
        body:
          "'When the day of Pentecost had come' means the day arrived by God's own schedule. Pentecost (the feast of weeks) fell fifty days after Passover, when Israel brought 'a new meal offering' and loaves baked with yeast as 'first fruits to Yahweh.' On exactly that day, God offered something new indeed: His own Spirit poured out on all flesh, and a first harvest of three thousand souls in a single day.",
        verses: ["Acts 2:1", "Leviticus 23:16-17", "Acts 2:41"],
      },
      {
        heading: "The Spirit could not come until Jesus was glorified",
        body:
          "John explains it directly: 'the Holy Spirit was not yet given, because Jesus wasn't yet glorified.' Jesus Himself said, 'if I don't go away, the Counselor won't come to you.' Peter preaches the same order at Pentecost: 'Being therefore exalted by the right hand of God, and having received from the Father the promise of the Holy Spirit, he has poured out this.' The gift waited on the throne; Pentecost is proof the crucified Jesus is now Lord.",
        verses: ["John 7:39", "John 16:7", "Acts 2:33"],
      },
      {
        heading: "The wait trained a people of prayer and unity",
        body:
          "What did they do while waiting? 'All these with one accord continued steadfastly in prayer and supplication.' Ten days of waiting bound a frightened band of Galileans into a praying, unified church before a single sermon was preached. The Spirit came upon a people already gathered in one accord, which is why the church was born in prayer and never outgrew its need for it.",
        verses: ["Acts 1:14", "Acts 2:1"],
      },
      {
        heading: "Pentecost launched the mission, not just an experience",
        body:
          "Jesus framed the promise as power: 'you will receive power when the Holy Spirit has come upon you. You will be witnesses.' Within minutes of receiving the Spirit, the disciples were declaring 'the mighty works of God' in languages they had never learned, Peter was preaching Christ crucified and risen, and three thousand were added. The wait ended when waiting would have become disobedience: the mission needed the Spirit, so the Spirit came.",
        verses: ["Acts 1:8", "Acts 2:4", "Acts 2:11", "Acts 2:36-39"],
      },
    ],
    keyVerses: ["Acts 1:4", "Acts 2:33", "John 7:39", "Acts 1:8", "Leviticus 23:16-17"],
    raises: ["how-do-i-receive-the-holy-spirit", "what-is-the-kingdom-of-god", "does-god-still-speak-today"],
    followsFrom: ["who-is-the-holy-spirit", "where-is-jesus-now"],
    related: ["holy-spirit-in-the-old-testament", "what-does-it-mean-to-be-baptized-with-the-holy-spirit"],
    planned: [],
    order: 76,
  },

  {
    slug: "god-remembers-our-sins-no-more",
    question: "What does it mean that God remembers our sins no more?",
    category: "gospel",
    summary:
      "When God says He will remember our sins no more, He is not forgetting the way we forget: He is promising never to call them to mind again, never to treat us according to them, and never to bring them up in judgment. The new covenant rests on that promise, and the cross is its price.",
    passages: [
      {
        book: "Jeremiah",
        chapter: 31,
        title: "The promise of the new covenant",
        lookFor: "God promises a covenant different from the one broken: sins forgiven and remembered no more.",
        focus: "31-34",
      },
      {
        book: "Hebrews",
        chapter: 10,
        title: "The once-for-all sacrifice",
        lookFor: "See how Hebrews quotes Jeremiah's promise and then argues it means no more offering for sin is needed.",
        focus: "11-25",
      },
      {
        book: "Psalms",
        chapter: 103,
        title: "A father's compassion",
        lookFor: "David piles up pictures of forgiveness: healed diseases, removed transgressions, a father's pity.",
        focus: "1-18",
      },
    ],
    points: [
      {
        heading: "'Not remember' is covenant language, not amnesia",
        body:
          "The all-knowing God cannot forget facts. When He says 'their sin will I remember no more,' He means He will never again hold our sins against us or let them stand between us. To 'remember' sin in Scripture is to act on it in judgment; to not remember is to covenant never to act on it again.",
        verses: ["Jeremiah 31:34", "Isaiah 43:25"],
      },
      {
        heading: "It is God's own oath about His own memory",
        body:
          "Notice who makes this pledge: 'I, even I, am he who blots out your transgressions for my own sake.' The promise does not depend on how well we have repented or how clean our record has run since. It depends on God's character, which is why Micah can picture Him treading our iniquities underfoot and casting them into the depths of the sea.",
        verses: ["Isaiah 43:25", "Micah 7:19"],
      },
      {
        heading: "Hebrews reads it as final settlement",
        body:
          "Hebrews quotes Jeremiah's promise twice and draws the conclusion: 'where remission of these is, there is no more offering for sin.' If God remembers sins no more, the ledger is closed; by one offering 'he has perfected forever those who are being sanctified.' Forgiveness without recall is what the cross purchased.",
        verses: ["Hebrews 8:12", "Hebrews 10:17-18", "Hebrews 10:14"],
      },
      {
        heading: "Removed as far as east from west",
        body:
          "The psalmists reach for images of distance that cannot be crossed back: transgressions removed 'as far as the east is from the west,' sins cast behind God's back. East and west never meet on a traveler's map; that is the point. The debt is not filed away where we might dig it up again; it is gone from the account entirely, so that God charges with sin no more.",
        verses: ["Psalms 103:12", "Isaiah 38:17", "Romans 4:8"],
      },
      {
        heading: "Reconciliation changes the conversation, not just the record",
        body:
          "'God was in Christ reconciling the world to himself, not reckoning to them their trespasses.' Because God does not reckon our trespasses, He deals with us as children rather than defendants: 'Like a father has compassion on his children, so Yahweh has compassion on those who fear him.' Discipline may still come, but prosecution never will.",
        verses: ["2 Corinthians 5:19", "Psalms 103:13"],
      },
    ],
    keyVerses: ["Jeremiah 31:34", "Hebrews 8:12", "Hebrews 10:17-18", "Isaiah 43:25", "Psalms 103:12"],
    raises: ["can-i-lose-my-salvation", "how-do-i-experience-the-love-of-god-day-to-day", "what-is-the-new-heart-that-god-promised"],
    followsFrom: ["what-happens-when-i-sin", "why-did-jesus-have-to-die"],
    related: ["what-is-imputation", "is-it-okay-to-doubt", "still-my-father-when-i-fail"],
    planned: [],
    order: 77,
  },

  {
    slug: "what-does-the-bible-mean-by-holy",
    question: "What does the Bible mean by being 'holy'?",
    category: "our-walk",
    summary:
      "To be holy is to be set apart for God, and to become like the God you are set apart for. Holiness starts not with a rule list but with God's own character: He says, 'You shall be holy; for I, Yahweh your God, am holy,' and then sets His people apart from the world so that their lives look like Him.",
    passages: [
      {
        book: "Leviticus",
        chapter: 19,
        title: "The holiness code",
        lookFor: "Holiness in Leviticus is startlingly practical: honesty, mercy to the poor, fair dealing, love of neighbor.",
        focus: "1-18",
      },
      {
        book: "Isaiah",
        chapter: 6,
        title: "Holy, holy, holy",
        lookFor: "Isaiah sees God's holiness and immediately sees his own uncleanness: holiness exposes and then cleanses.",
        focus: "1-8",
      },
      {
        book: "1 Peter",
        chapter: 1,
        title: "Be holy in all your behavior",
        lookFor: "Peter takes the old command from Leviticus and applies it to Christians: set apart hope, conduct, and reverence.",
        focus: "13-25",
      },
    ],
    points: [
      {
        heading: "Holiness means set apart before it means moral perfection",
        body:
          "The root idea of holiness is separation for a purpose: 'have set you apart from the peoples, that you should be mine.' Israel was holy the way temple vessels were holy: reserved for God's use. That status came first by God's act, and only then demanded a corresponding life.",
        verses: ["Leviticus 20:26", "Exodus 19:6"],
      },
      {
        heading: "God's own character is the standard",
        body:
          "The command comes with its reason attached: 'You shall be holy; for I, Yahweh your God, am holy.' Scripture calls God 'the high and lofty One who inhabits eternity, whose name is Holy' and heaven rings with 'Holy, holy, holy.' Holiness is not one attribute among many; it is the purity and otherness of everything God is.",
        verses: ["Leviticus 19:2", "Isaiah 57:15", "Isaiah 6:3"],
      },
      {
        heading: "In the Old Testament, holiness touched ordinary life",
        body:
          "Leviticus 19 puts 'be holy' next to leaving harvest gleanings for the poor, paying workers on time, just measures, and loving your neighbor as yourself. Being set apart was never mainly ritual; it showed in how God's people treated people. A holy nation looked different because it did justice and mercy in a world that didn't.",
        verses: ["Leviticus 19:2", "Leviticus 19:9-18", "Leviticus 19:35-36", "Exodus 19:6"],
      },
      {
        heading: "Holiness begins with seeing God as He is",
        body:
          "When Isaiah saw the Lord high and lifted up, his first words were about himself: 'Woe is me! For I am undone.' That is how holiness works: God's purity exposes our uncleanness, but it does not leave us there. The burning coal touched Isaiah's mouth, his guilt was taken away, and only then did he hear the call to go.",
        verses: ["Isaiah 6:3", "Isaiah 6:5-8"],
      },
      {
        heading: "For Christians, holiness is calling, choice, and destination",
        body:
          "Peter quotes Leviticus to the church: 'you yourselves also be holy in all of your behavior.' Paul urges believers to present their bodies 'a living sacrifice, holy, acceptable to God.' And we were chosen in Christ 'that we would be holy and without defect before him.' Holiness is pursued now, and completed then; Hebrews calls it the sanctification 'without which no man will see the Lord.'",
        verses: ["1 Peter 1:15-16", "Romans 12:1", "Ephesians 1:4", "Hebrews 12:14"],
      },
    ],
    keyVerses: ["Leviticus 19:2", "Isaiah 6:3", "1 Peter 1:15-16", "Romans 12:1", "Ephesians 1:4"],
    raises: ["what-is-sanctification-and-how-does-it-happen", "how-are-justification-and-sanctification-related", "what-does-it-look-like-to-suffer-well"],
    followsFrom: ["what-is-justification", "what-does-it-mean-to-be-made-in-gods-image"],
    related: ["faith-or-works", "what-is-the-flesh-versus-the-spirit", "how-do-i-fight-sin"],
    planned: [],
    order: 78,
  },

];
