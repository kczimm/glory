import type { ChapterBackground } from "./types";

/**
 * Chapter background: the reading tools a seminary year would give you,
 * attached to the chapter itself.
 *
 * Keyed `"Book Chapter"`. One entry serves every study that opens that
 * chapter, so the corpus is bounded by the canon (1,189 chapters) rather than
 * by the study count (321 and growing). Rendered collapsed, after the text.
 *
 * Rules this file is held to by `npm run verify:background`:
 *   - every key resolves to a real chapter of the vendored WEB;
 *   - every `terms[].term` occurs in one verse of that chapter, on word
 *     boundaries;
 *   - every `verse N` the notes cite exists in that chapter;
 *   - every entry quotes scripture at least once, and each quoted span occurs
 *     verbatim in the WEB;
 *   - no em dashes, and hard word caps so an entry stays a note, not an essay.
 *
 * Claims about history, language, or reception belong in `sources` too. The
 * verifier cannot judge prose, so this file names what it rests on.
 */
export const background: Record<string, ChapterBackground> = {
  "Acts 2": {
    setting:
      "Pentecost, fifty days after Passover, in Jerusalem. The disciples are together in one place, and the crowd includes Jews from every nation, some living in the city and some visiting for the feast. Luke writes as a careful investigator (Luke 1:1-4), and this chapter is the hinge of his two-volume work: the Spirit descends, Peter preaches, and the church begins.",
    genre:
      "Narrative with an embedded sermon. Luke alternates report and speech, and Peter's address follows the shape of apostolic preaching: Scripture explained, then Jesus announced, then a call to respond. The Joel quotation is poetry; its images are figures, and readers differ on how literally to take the cosmic signs.",
    terms: [
      {
        term: "other languages",
        original: "glōssais",
        gloss: "tongues, languages",
        note: "Luke pairs the gift with the list of nations and says each heard in his own language, so the sign is intelligible speech, not religious noise.",
      },
      {
        term: "baptized",
        original: "baptisthētō",
        gloss: "be immersed",
        note: "A passive command naming the rite the church administers. The same verse promises the gift of the Holy Spirit, so readers differ on how closely the two are tied.",
      },
      {
        term: "call on the name of the Lord",
        original: "epikalesētai to onoma kyriou",
        gloss: "appeal to the Lord by name",
        note: "Joel's promise is quoted in verse 21; Peter ends by announcing that the crucified Jesus is both Lord and Christ, and Acts later calls on His name.",
      },
      {
        term: "Christ",
        original: "Christos",
        gloss: "anointed one",
        note: "A title, not a surname. The sermon ends with it: “God has made him both Lord and Christ, this Jesus whom you crucified.”",
      },
    ],
    reception:
      "The church has called this the birthday of the church and reads it at Pentecost and at baptisms. Two readings of the tongues have long coexisted: real foreign languages, as the list of nations suggests, or ecstatic speech of the kind Paul regulates in 1 Corinthians 14. The sermon's use of Psalm 16 and Psalm 110 shaped the church's earliest argument for the resurrection.",
    sources: [
      "Joel 2:28-32 (WEB)",
      "Psalms 16:8-11 (WEB)",
      "Psalms 110:1 (WEB)",
      "1 Corinthians 14:1-25 (WEB)",
      "Acts 2:41-47 (WEB)",
    ],
  },

  "Romans 8": {
    setting:
      "Paul writes to believers in Rome he has not yet met, probably from Corinth in the late fifties, and chapter 8 closes the argument he opened at 5:1. The Roman church held Jewish and Gentile believers together, which is why the letter keeps returning to what the law could and could not do.",
    genre:
      "Epistle, and inside it a sustained argument rather than a string of sayings. The chapter moves from no condemnation, through life in the Spirit, to suffering, prayer, and finally a courtroom scene that ends in nothing being able to separate. The rhetorical questions near the end are meant to be answered out loud.",
    terms: [
      {
        term: "adoption",
        original: "huiothesia",
        gloss: "placement as a son",
        note: "A legal term for adoption: the adopted child becomes an heir, which is where verses 16 and 17 go. Paul also uses it of Israel in Romans 9:4.",
      },
      {
        term: "Abba",
        original: "abba",
        gloss: "father, in Aramaic",
        note: "An Aramaic word for father, left untranslated in the Greek text, so the Spirit's cry is the one Jesus used.",
      },
      {
        term: "makes intercession",
        original: "hyperentynchanei",
        gloss: "appeals on someone's behalf",
        note: "The Spirit appeals for us when “we don’t know how to pray as we ought”; the simpler verb returns in verses 27 and 34, for the Spirit and for Christ.",
      },
      {
        term: "first fruits",
        original: "aparchē",
        gloss: "the first share of a harvest",
        note: "The Spirit is the opening installment of the life that is coming, which is why the chapter can groan and still hope.",
      },
    ],
    reception:
      "This is the chapter Christians read at funerals and in suffering, and the one the church's assurance debates keep returning to. Verses 29 and 30 have been read as an unconditional decree, and as God's purpose working through those he foreknew. The chapter does not settle the question, and the church has held both readings.",
    sources: [
      "Romans 5:1-11 (WEB)",
      "Psalms 44:22 (WEB)",
      "Romans 9:4 (WEB)",
      "BDAG, s.v. huiothesia, aparchē, hyperentynchanō",
    ],
  },

  "Luke 24": {
    setting:
      "Resurrection morning through evening, in Jerusalem, on the road to Emmaus, and at Bethany, where the Gospel ends. The disciples are grieving, confused, and afraid, and Luke closes his first volume with the ascension while Acts opens with the same departure and the mission that follows.",
    genre:
      "Narrative built around a recognition scene. The Emmaus walk follows a familiar pattern: two travelers, a stranger, Scripture explained, hospitality, and eyes opened. Luke then repeats the pattern in the upper room, where the risen body is seen and touched and eats fish.",
    terms: [
      {
        term: "opened",
        original: "diēnoigen",
        gloss: "opened up thoroughly",
        note: "The same verb opens the eyes of the travelers, the Scriptures on the road, and the minds of the disciples, so understanding is something done to a reader.",
      },
      {
        term: "explained",
        original: "diērmēneuen",
        gloss: "interpreted",
        note: "From the family of words behind our word hermeneutics. Jesus does not add new texts; he interprets Moses and the prophets as being about himself.",
      },
      {
        term: "repentance",
        original: "metanoia",
        gloss: "a change of mind",
        note: "Verse 47 pairs it with “repentance and remission of sins” and sends both to all the nations, which is the mission Luke will narrate in Acts.",
      },
      {
        term: "carried up into heaven",
        original: "anephereto",
        gloss: "was carried up",
        note: "A passive form: the ascension is something done to Jesus, and Luke will describe the same departure again at the start of Acts.",
      },
    ],
    reception:
      "The Emmaus road is read on Easter evening in many churches, and the breaking of the bread has been taken as a eucharistic echo since the earliest centuries. Verse 44, with its law, prophets, and psalms, gave the church a way of naming the shape of the whole canon, and verse 45 has long been cited for reading the Old Testament as Christian Scripture.",
    sources: [
      "Luke 1:1-4 (WEB)",
      "Acts 1:1-11 (WEB)",
      "Psalms 110:1 (WEB)",
      "Luke 24:30-35 (WEB)",
      "BDAG, s.v. dianoigō",
    ],
  },
  "Romans 5": {
    setting:
      "Paul writes from Corinth in the late fifties to a church he has not yet visited. Chapter 5 turns from the argument of chapter 4, that righteousness comes by faith, to what that standing produces: peace, hope, love, and a life death no longer owns. The second half sets Adam and Christ side by side.",
    genre:
      "Epistle, and a deliberate two-part argument. Verses 1 through 11 trace the believer's standing and hope; verses 12 through 21 run a comparison between the one man who brought death and the one man who brought life. The Greek of the second half runs long, so follow the comparison rather than the punctuation.",
    terms: [
      {
        term: "justified",
        original: "dikaiōthentes",
        gloss: "declared righteous",
        note: "A courtroom word: God renders a verdict, and the verdict issues in “we have peace with God”, which is why verse 1 moves straight to peace.",
      },
      {
        term: "reconciled",
        original: "katēllagēmen",
        gloss: "brought back into friendship",
        note: "The word pictures a relationship restored, not merely a sentence lifted, and verse 10 grounds it in the death of God's Son.",
      },
      {
        term: "free gift",
        original: "charisma",
        gloss: "a favour freely given",
        note: "Paul sets gift against trespass at every step of verses 15 and 16, so the argument is not sin and grace balanced but grace outweighing.",
      },
      {
        term: "abounded",
        original: "hypereperisseusen",
        gloss: "overflowed beyond measure",
        note: "The last turn of the argument: where sin increased, grace overflowed beyond measure, so grace and not death gets the final reign.",
      },
    ],
    reception:
      "Verses 12 through 21 became the church's central text for original sin and for the parallel between Adam and Christ. The end of verse 12 has been read two ways, as all sinning in Adam and as all sinning because each one sins, and the difference decides how the inheritance of Adam's sin is explained.",
    sources: [
      "Romans 4:1-25 (WEB)",
      "Romans 5:12-21 (WEB)",
      "Psalms 51 (WEB)",
      "BDAG, s.v. dikaioō, katallassō",
    ],
  },

  "John 14": {
    setting:
      "The night of the Last Supper, in the upper room, hours before the arrest. Jesus has washed the disciples' feet and announced Judas's betrayal and Peter's denial, and now speaks to men who are afraid. This is the first of four chapters of farewell teaching that run through John 17.",
    genre:
      "Farewell discourse: a long speech with the disciples' questions breaking in. The chapter opens with “Don’t let your heart be troubled” and returns to peace at the end. John circles the same ideas rather than arguing in steps, so read the questions as the shape of the chapter.",
    terms: [
      {
        term: "Counselor",
        original: "paraklētos",
        gloss: "advocate called alongside",
        note: "A word for a legal helper as much as a comforter. Jesus promises another one like himself, which is why the Spirit's coming is a coming of Jesus.",
      },
      {
        term: "homes",
        original: "monai",
        gloss: "dwelling places",
        note: "Rooms to stay in, not mansions to visit: the point is a place with the Father, prepared by the one who goes ahead.",
      },
      {
        term: "Believe",
        original: "pisteuete",
        gloss: "trust",
        note: "The chapter opens by telling the disciples not to be troubled and then calls them to trust; the verb can be read as a statement, you believe, or as a command, believe, which is why translations differ.",
      },
      {
        term: "in my name",
        original: "en tō onomati mou",
        gloss: "on the authority of my name",
        note: "Prayer in the name asks what the Son is for, which is why the promise is wide and narrow at once.",
      },
    ],
    reception:
      "The chapter is read at funerals for its many homes and at ordinations for its promise of another Counselor. The church's debates over the Spirit turn on verse 26, where the Counselor is sent in the Son's name and teaches what the Son taught.",
    sources: [
      "John 13:1-38 (WEB)",
      "John 14:26 (WEB)",
      "John 17 (WEB)",
      "BDAG, s.v. paraklētos, monē",
    ],
  },

  "Hebrews 1": {
    setting:
      "No author is named and the first readers are not identified. The book is a sermon more than a letter in the usual sense. It opens by comparing God's older speech through the prophets with his final speech through the Son, then argues from a chain of Old Testament quotations that the Son outranks every angel.",
    genre:
      "Rhetorical sermon built on quotations. The argument moves by comparison, and the quotations answer an unstated objection: that angels mediated the law, and so outrank a crucified man. Watch how each quotation is introduced, because the argument lives in those introductions.",
    terms: [
      {
        term: "radiance",
        original: "apaugasma",
        gloss: "brightness from a source",
        note: "Brightness shining out from a source; many translations render it reflection, and the point has been argued both ways.",
      },
      {
        term: "image",
        original: "charaktēr",
        gloss: "exact impress",
        note: "The exact impress rather than a loose likeness. The phrase “the very image of his substance” translates two Greek words, so read the claim across both.",
      },
      {
        term: "firstborn",
        original: "prōtotokos",
        gloss: "heir with first rights",
        note: "In this argument the word is about rank and inheritance, not about being created, and verse 6 has the angels worship him.",
      },
      {
        term: "serving spirits",
        original: "leitourgika pneumata",
        gloss: "spirits that serve",
        note: "The chapter ends by naming what angels are for: sent service on behalf of those who will inherit salvation.",
      },
    ],
    reception:
      "Verses 8 and 9 apply a psalm's words to the Son and address him as God, which the church cited at Nicaea and Chalcedon. Verses 10 through 12 apply to the Son what the psalm says of the Lord who laid the earth's foundation, and unitarians and trinitarians have argued over that move ever since.",
    sources: [
      "Psalms 2, 45, 102, 110 (WEB)",
      "2 Samuel 7:14 (WEB)",
      "Hebrews 1:1-14 (WEB)",
      "BDAG, s.v. apaugasma, charaktēr",
    ],
  },

  "John 20": {
    setting:
      "Resurrection morning and the week that follows, in Jerusalem. Mary Magdalene arrives before dawn, the tomb is empty, and the chapter moves from a woman weeping in a garden to Thomas confessing in a locked room. John closes his book with the purpose statement in verses 30 and 31.",
    genre:
      "Narrative in three scenes with a conclusion. Each scene turns on seeing and believing, and the chapter is built to bring the reader to the same decision: the signs are written down so that you may believe.",
    terms: [
      {
        term: "Rabboni",
        original: "rabbouni",
        gloss: "my teacher",
        note: "John translates the Aramaic for his readers. Mary's word is the ordinary address of a disciple to the one who taught her.",
      },
      {
        term: "breathed",
        original: "enephysēsen",
        gloss: "breathed into",
        note: "The verb echoes the creation of Adam, where God breathed life into dust, so the Spirit given here is pictured as new creation.",
      },
      {
        term: "believe",
        original: "pisteusēte",
        gloss: "come to trust",
        note: "The purpose statement uses the verb twice: the signs are written so that you may believe and, believing, have life.",
      },
      {
        term: "signs",
        original: "sēmeia",
        gloss: "pointers",
        note: "John's word for miracles, chosen because they point beyond themselves; the resurrection is the sign the others lead to.",
      },
    ],
    reception:
      "Thomas's words in verse 28, “my Lord and my God” became one of the church's earliest and strongest texts for the deity of Christ, and verse 29, blessing those who have not seen, is read as a word to every later reader. Easter evening in many churches reads verses 19 through 23, and the breathing of the Spirit there has been tied to baptism and to ordination.",
    sources: [
      "Genesis 2:7 (WEB)",
      "John 20:1-31 (WEB)",
      "Psalms 16:10 (WEB)",
      "BDAG, s.v. emphysaō, sēmeion",
    ],
  },

  "2 Corinthians 5": {
    setting:
      "Paul writes to a church that has questioned his authority, probably from Macedonia in the mid fifties. The chapter turns from his own suffering to the hope that holds him: a building from God, a judgment seat, and a ministry of reconciliation given to those who have been made new.",
    genre:
      "Epistle with two movements. Verses 1 through 10 argue from the resurrection body to courage and accountability; verses 11 through 21 defend his ministry and end in the great exchange. Follow the pronouns, because he moves from we to you and back.",
    terms: [
      {
        term: "tent",
        original: "skēnos",
        gloss: "temporary dwelling",
        note: "A tent is what you live in while travelling, and Paul uses it for the body that is taken down, in contrast with the building not made with hands.",
      },
      {
        term: "down payment",
        original: "arrabōn",
        gloss: "pledge, first installment",
        note: "A commercial word for a deposit that guarantees the rest of the payment: the Spirit is God's pledge of the resurrection.",
      },
      {
        term: "new creation",
        original: "kainē ktisis",
        gloss: "newly made thing",
        note: "Not a repaired version of the old but a new act of creation, and the next verses say where it shows: in reconciled relationships.",
      },
      {
        term: "reconciling",
        original: "katallassōn",
        gloss: "ending the hostility",
        note: "The word belongs to diplomacy as much as to worship: God takes the initiative while the world is hostile, then hands the message to ambassadors.",
      },
    ],
    reception:
      "Verse 17 has been a favourite text for conversion and for the church's talk about renewal, and verse 21 became the classic statement of the exchange at the heart of the gospel, that the sinless one was “made to be sin on our behalf” so that others might become the righteousness of God. Verse 10, on the judgment seat of Christ, is the church's standard text that even believers give an account.",
    sources: [
      "2 Corinthians 5:1-21 (WEB)",
      "Isaiah 53 (WEB)",
      "Genesis 2:7 (WEB)",
      "BDAG, s.v. arrabōn, katallassō",
    ],
  },

  "Acts 1": {
    setting:
      "Luke's second volume opens where his Gospel ended, near Jerusalem, with the risen Jesus teaching for forty days. The ascension, the promise of the Spirit, and the choice of Matthias stand between the resurrection and Pentecost, and Luke frames them as the bridge the whole book will cross.",
    genre:
      "Narrative history with reported speech and two Old Testament quotations. Luke writes as an investigator who has already told the story once, and this opening tells the reader what the rest of the book is about: witnesses, from Jerusalem to the ends of the earth.",
    terms: [
      {
        term: "witnesses",
        original: "martyres",
        gloss: "those who testify",
        note: "The word is forensic before it is missionary: an apostle is someone who can testify to the resurrection because he saw it. The promise is “witnesses to me”",
      },
      {
        term: "received up",
        original: "anelēmphthē",
        gloss: "taken up",
        note: "The verb Luke uses for the ascension, and verse 11 promises that the departure will be reversed in the same way.",
      },
      {
        term: "lots",
        original: "klērous",
        gloss: "cast lots",
        note: "The eleven use the ordinary method of the day to settle a decision they cannot settle by argument, after praying that the Lord would show his choice.",
      },
      {
        term: "apostleship",
        original: "apostolē",
        gloss: "commission",
        note: "The office Judas left is a commission, not an honour, and verse 22 says what qualifies a man to hold it.",
      },
    ],
    reception:
      "The ascension here and in Luke 24 gave the church its calendar, forty days after Easter, and the upper room prayer meeting has been read as a model for waiting on God together. Verse 8 became the church's map for mission, and the choice of Matthias has been debated wherever churches argue about how leaders are chosen.",
    sources: [
      "Luke 24:44-53 (WEB)",
      "Psalms 69:25; 109:8 (WEB)",
      "Acts 1:1-26 (WEB)",
      "BDAG, s.v. martys, apostolē",
    ],
  },

  "John 15": {
    setting:
      "Still in the upper room, on the night of the arrest, after Judas has left. Jesus has washed the disciples' feet and predicted his death, and now he speaks about the life that will continue after he goes. This is the middle of the farewell discourse, and it keeps returning to three words: remain, love, testify.",
    genre:
      "Farewell discourse built on an image. The vine and branches are an allegory, and the chapter reads the image twice, once as fruit and once as love, before turning to the world's hatred and the Spirit's testimony.",
    terms: [
      {
        term: "Remain",
        original: "meinate",
        gloss: "stay, abide",
        note: "The chapter's key verb, used again and again: not a passing visit but the branch's whole life coming from the vine.",
      },
      {
        term: "prunes",
        original: "kathairei",
        gloss: "cleans up",
        note: "The same verb family as clean in verse 3: pruning is not punishment but the removing that lets fruit come.",
      },
      {
        term: "friends",
        original: "philoi",
        gloss: "those loved",
        note: "A startling upgrade from servants: the difference is that friends are told what the master is doing.",
      },
      {
        term: "testify",
        original: "martyreite",
        gloss: "bear witness",
        note: "The Spirit's work and the disciples' work are the same word, which is why verse 27 can join them with and.",
      },
    ],
    reception:
      "The vine image has been read at communion and at ordination, and remain became the church's word for persevering faith, which is why the chapter sits at the centre of debates about whether believers can lose their place. Verse 13 is the church's standard text for sacrificial love: “lay down his life for his friends.” Verse 26, on the Spirit who proceeds from the Father, became the proof text in the East-West dispute over whether he proceeds from the Father alone or also from the Son.",
    sources: [
      "John 13:31-38 (WEB)",
      "John 15:1-27 (WEB)",
      "Isaiah 5:1-7 (WEB)",
      "BDAG, s.v. menō, philos",
    ],
  },

  "Ephesians 2": {
    setting:
      "Paul writes to a church he knows well, probably from prison in Rome in the early sixties. The chapter moves from what God did for dead sinners to what he did for divided peoples, and it ends with a building growing into a temple. The temple's own barrier between Jew and Gentile sits behind the middle of the chapter.",
    genre:
      "Epistle, and a single argument in three panels: death and rescue, grace and works, then one new humanity. Verses 1 through 7 are one long sentence in Greek, so the rescue does not arrive until verse 4.",
    terms: [
      {
        term: "workmanship",
        original: "poiēma",
        gloss: "what has been made",
        note: "The word behind our word poem: a made thing, and the point is that good works follow the making rather than cause it.",
      },
      {
        term: "far off",
        original: "makran",
        gloss: "at a distance",
        note: "A phrase the prophets used for exile, applied here to Gentiles outside the covenants, and verse 13 answers it with near.",
      },
      {
        term: "middle wall",
        original: "mesotoichon",
        gloss: "dividing wall",
        note: "The word for a partition, and readers have long heard an echo of the temple screen that kept Gentiles out of the inner courts.",
      },
      {
        term: "cornerstone",
        original: "akrogōniaios",
        gloss: "the stone that sets the angle",
        note: "The stone that fixes a building's lines: the apostles and prophets are the foundation, and Christ sets the shape.",
      },
    ],
    reception:
      "Verses 8 and 9 became the church's summary of salvation, “by grace you have been saved through faith,” and the Reformation controversy over works turned on them. Verse 14 has been read as a word about Jew and Gentile in the church and, in some centuries, as a warrant for setting aside the law and the land, a reading others have disputed.",
    sources: [
      "Ephesians 2:1-22 (WEB)",
      "Isaiah 57:19 (WEB)",
      "Psalms 118:22 (WEB)",
      "BDAG, s.v. poiēma, mesotoichon",
    ],
  },

  "1 Corinthians 15": {
    setting:
      "Paul writes from Ephesus in the early fifties to a church he founded and that now doubts the resurrection of the dead. This is his longest single argument, moving from the tradition he received, to the witnesses, to the body of the resurrection, to the final victory.",
    genre:
      "Epistle and a sustained argument with objections quoted back. Paul states the tradition, draws out consequences, answers two objections, and ends in a hymn and an exhortation. The logic runs by reductio: if there is no resurrection, then Christ is not raised either.",
    terms: [
      {
        term: "first fruits",
        original: "aparchē",
        gloss: "the first sheaf of the harvest",
        note: "A sacrificial image: the first sheaf guarantees the rest of the crop, so Christ's resurrection is the pledge of ours.",
      },
      {
        term: "spiritual body",
        original: "sōma pneumatikon",
        gloss: "body animated by the Spirit",
        note: "Spiritual here describes what powers the body, not what it is made of, so the risen body is still a body.",
      },
      {
        term: "changed",
        original: "allagēsometha",
        gloss: "we will be altered",
        note: "The mystery is not escape from the body but its transformation, in a moment, at the last trumpet.",
      },
      {
        term: "vain",
        original: "kenon",
        gloss: "empty",
        note: "Paul's word for a faith with nothing in it: if Christ is not raised, preaching and faith are both empty.",
      },
    ],
    reception:
      "Verses 3 and 4 are among the earliest creeds the church possesses, “Christ died for our sins according to the Scriptures,” and verses 20 through 28 shaped its teaching on the kingdom and the last enemy. The argument over the resurrection body in verses 35 through 49 is the church's classic answer to the claim that the body is a prison to be escaped.",
    sources: [
      "1 Corinthians 15:1-58 (WEB)",
      "Genesis 2:7 (WEB)",
      "Isaiah 25:8 (WEB)",
      "Hosea 13:14 (WEB)",
      "BDAG, s.v. aparchē, pneumatikos",
    ],
  },

  "John 3": {
    setting:
      "A night visit in Jerusalem early in Jesus's ministry. Nicodemus is a Pharisee and a member of the ruling council, and he comes by night, which John's readers have always heard as both caution and symbol. The second half moves from the conversation to John the Baptist's testimony.",
    genre:
      "Dialogue that turns into discourse. The conversation with Nicodemus is full of double meanings, born again or born from above, wind and Spirit, and John does not mark where Jesus stops speaking and the narrator begins.",
    terms: [
      {
        term: "born anew",
        original: "gennēthē anōthen",
        gloss: "born again, or from above",
        note: "The adverb means both again and from above, and Nicodemus takes the first sense while the Gospel means the second.",
      },
      {
        term: "born of the Spirit",
        original: "pneuma",
        gloss: "wind and spirit",
        note: "The same word means wind and Spirit, so verse 8 can play on it: the Spirit is as free and as invisible as wind, and the effect is what you hear.",
      },
      {
        term: "one and only Son",
        original: "monogenēs",
        gloss: "unique, one of a kind",
        note: "Traditionally only-begotten; the word speaks of uniqueness rather than manufacture, and John uses it for the Son's relation to the Father.",
      },
      {
        term: "lifted up",
        original: "hypsoō",
        gloss: "lifted up, exalted",
        note: "The verb covers both the cross and the exaltation, which is why the serpent in the wilderness can be the image for both.",
      },
    ],
    reception:
      "Verse 16, “God so loved the world”, became the most quoted sentence in the Bible, and verse 5 has divided readers over baptism, over the Spirit, and over whether water and spirit are one phrase or two. Verse 36 gave the church its language for belief and disobedience as the same fork in the road.",
    sources: [
      "Numbers 21:4-9 (WEB)",
      "John 3:1-36 (WEB)",
      "BDAG, s.v. anōthen, pneuma, monogenēs",
    ],
  },

  "1 Corinthians 12": {
    setting:
      "Paul writes to a church proud of its gifts and divided by them, in a city full of religious options. The chapter answers a question the Corinthians had asked about spiritual things, and it does so by putting gifts, services, and workings under one Spirit.",
    genre:
      "Epistle, and an argument by analogy. Paul lists gifts, then turns to the body image, then lists ministries, so the chapter has two lists around one picture. The point of the picture is not that everyone matters but that no one can do without anyone.",
    terms: [
      {
        term: "gifts",
        original: "charismata",
        gloss: "gracious gifts",
        note: "From the same root as grace, so the gifts are given, not earned, which is why the argument can begin with the Spirit rather than with ability.",
      },
      {
        term: "manifestation",
        original: "phanerōsis",
        gloss: "visible showing",
        note: "The Spirit is not given for private enjoyment: the showing is for the profit of all, which is the sentence the chapter turns on.",
      },
      {
        term: "members",
        original: "melē",
        gloss: "parts of a body",
        note: "Paul uses the word for body parts, not for club members; the argument depends on parts that cannot replace each other.",
      },
      {
        term: "baptized",
        original: "ebaptisthēmen",
        gloss: "immersed",
        note: "The one baptism here is “baptized into one body”, and it is the ground of unity before it is a subject of dispute.",
      },
    ],
    reception:
      "The chapter is the church's standard text on spiritual gifts and the body, and the list in verses 8 through 10 has been read as exhaustive by some and as illustrative by others. Verse 13 has been central to debates about baptism, and the body image has been used both to defend hierarchy and to argue for mutual dependence.",
    sources: [
      "1 Corinthians 12:1-31 (WEB)",
      "Romans 12:3-8 (WEB)",
      "BDAG, s.v. charisma, melos",
    ],
  },

  "Ephesians 4": {
    setting:
      "Paul writes from prison to a church he knows, and chapter 4 turns from what God has done to how the church should walk. The first half is about unity and gifts, the second about the old life and the new, and the quotation in the middle is from the psalms.",
    genre:
      "Epistle with a hinge. Verses 1 through 16 are one movement about the church's unity and growth; verses 17 through 32 are another about conduct. The command rests on what chapters 1 through 3 already said: walk worthily because you were called.",
    terms: [
      {
        term: "lowliness",
        original: "tapeinophrosynē",
        gloss: "humility",
        note: "A word the Greek world treated as servility and the gospel treats as a virtue, listed first among the things that keep unity.",
      },
      {
        term: "perfecting",
        original: "katartismon",
        gloss: "equipping, restoring",
        note: "The same word used for mending nets and setting a broken bone: the leaders' work is repair and preparation, not performance.",
      },
      {
        term: "old man",
        original: "palaios anthrōpos",
        gloss: "the former self",
        note: "A corporate image as much as a personal one: the old humanity is put off like a garment, and the new is “put on the new man”.",
      },
      {
        term: "sealed",
        original: "esphragisthēte",
        gloss: "stamped with a seal",
        note: "A seal marks ownership and guarantees what is inside; the Spirit is the church's mark that redemption is coming.",
      },
    ],
    reception:
      "The quotation of the psalm has been read as the ascension leading captivity captive and giving gifts, and the list in verse 11 shaped how churches describe their offices. Verses 22 through 24 became the church's language for putting off the old self, and verse 30 is the standard warning against grieving the Spirit.",
    sources: [
      "Psalms 68:18 (WEB)",
      "Ephesians 4:1-32 (WEB)",
      "BDAG, s.v. katartismos, sphragizō",
    ],
  },

  "Matthew 6": {
    setting:
      "The Sermon on the Mount, with Jesus seated on a hillside teaching his disciples in front of the crowd. Chapter 6 continues the righteousness that exceeds the scribes and Pharisees, and it takes three practices everyone knew, almsgiving, prayer, and fasting, and turns them inside out.",
    genre:
      "Sermon, and a series of contrasts. Jesus sets the hypocrites' practice against his disciples' practice three times, then turns to treasure, anxiety, and trust. The Lord's Prayer sits at the centre as a model rather than a script to be recited only.",
    terms: [
      {
        term: "hypocrites",
        original: "hypokritai",
        gloss: "stage actors",
        note: "The word began in the theatre, and Jesus uses it for people performing for an audience, which is why the reward language follows.",
      },
      {
        term: "vain repetitions",
        original: "battalogeō",
        gloss: "babble",
        note: "A rare word, probably onomatopoeic: prayer that piles up words as if volume were persuasion, which verse 8 answers.",
      },
      {
        term: "daily bread",
        original: "epiousios",
        gloss: "for the day, or for the morrow",
        note: "The word occurs nowhere else in ancient Greek before this prayer, and readers have argued whether it means today's need or the coming day's.",
      },
      {
        term: "Mammon",
        original: "mamōnas",
        gloss: "wealth",
        note: "An Aramaic word for property or profit, kept untranslated because it names a rival master rather than a sum of money.",
      },
    ],
    reception:
      "“Our Father in heaven” became the church's common prayer, and the Didache already prescribes it three times a day. The closing doxology after the prayer is absent from the earliest manuscripts and entered the text from the church's liturgy, which the Didache already reflects, and the teaching on anxiety has been read both as counsel against worry and as a call to poverty.",
    sources: [
      "Matthew 6:1-34 (WEB)",
      "Psalms 23 (WEB)",
      "Didache 8 (three times daily)",
      "BDAG, s.v. hypokritēs, epiousios",
    ],
  },

  "1 John 4": {
    setting:
      "A short letter to churches the author knows, written to steady them against teachers who had left and who denied that Christ had come in the flesh. Chapter 4 gives two tests, one doctrinal and one moral, and then defines love by what God did first.",
    genre:
      "Epistle in short movements, closer to a sermon than an argument. The tests repeat: confess Christ come in the flesh, love one another. The style is circular, and the repetition is the method rather than a failure of organization.",
    terms: [
      {
        term: "test the spirits",
        original: "dokimazete ta pneumata",
        gloss: "examine the spirits",
        note: "A metallurgist's word for proving metal: the claim is not rejected out of hand but weighed against the confession of Christ.",
      },
      {
        term: "atoning sacrifice",
        original: "hilasmos",
        gloss: "means of appeasing",
        note: "The word covers both the sacrifice that turns wrath aside and the cleansing that follows, and the next verse grounds love in it.",
      },
      {
        term: "perfected",
        original: "teteleiōmenē",
        gloss: "brought to its goal",
        note: "Not sinless but complete: love reaches its purpose when it is practised, which is why verse 12 says love is perfected among us.",
      },
      {
        term: "boldness",
        original: "parrēsia",
        gloss: "freedom to speak",
        note: "The word for a citizen's right to speak plainly, used here for confidence before God on the day of judgment.",
      },
    ],
    reception:
      "Verse 8, “God is love”, is one of the church's shortest and most abused sentences, and verse 2 became the standard test against docetism. Verse 18 on perfect love casting out fear is read at funerals and in pastoral care, and verse 20 has been the church's rebuke to any love of God that skips the neighbour.",
    sources: [
      "1 John 4:1-21 (WEB)",
      "John 13:34-35 (WEB)",
      "BDAG, s.v. hilasmos, parrēsia",
    ],
  },

  "John 16": {
    setting:
      "The upper room, continuing the farewell discourse. Jesus has told the disciples he is going away, and the chapter is his answer to their grief: it is better that he goes, because the Counselor will come. It ends with plain speech and a promise of peace.",
    genre:
      "Farewell discourse with a question and answer inside it. Jesus speaks in figures, the disciples press him, and he answers more plainly. The chapter moves from sorrow to joy to peace, and the movement is the argument.",
    terms: [
      {
        term: "convict",
        original: "elenxei",
        gloss: "expose, prove guilty",
        note: "A courtroom word that can also mean convince: the Spirit's work is to expose the world's error about sin, righteousness, and judgment.",
      },
      {
        term: "Counselor",
        original: "paraklētos",
        gloss: "advocate called alongside",
        note: "The same word as in chapter 14, and the point here is that his coming depends on Jesus going.",
      },
      {
        term: "guide",
        original: "hodēgēsei",
        gloss: "lead the way",
        note: "The Spirit does not supply new revelation of his own but takes what is Christ's and declares it, which is the test of any claim to the Spirit.",
      },
      {
        term: "peace",
        original: "eirēnē",
        gloss: "wholeness",
        note: "The word translates the Hebrew shalom, and Jesus gives it as a parting gift that the world cannot give or take.",
      },
    ],
    reception:
      "Verse 8 shaped the church's teaching on the Spirit's work of conviction, and verse 13 became the standard text for the Spirit's guidance, sometimes stretched to cover new doctrines the church later rejected. “I have overcome the world” is read at the end of services and in persecution, and the promise of joy in verse 22 is read at funerals.",
    sources: [
      "John 14:15-31 (WEB)",
      "John 16:1-33 (WEB)",
      "BDAG, s.v. elenchō, paraklētos",
    ],
  },

  "Philippians 2": {
    setting:
      "Paul writes from prison to a church that has supported him, in a city proud of its Roman status. Chapter 2 asks the church to be of one mind, and it grounds the request in a poem about Christ that most scholars think Paul is quoting.",
    genre:
      "Epistle with a hymn at its centre. Verses 5 through 11 are usually printed as verse, and they move downward through humiliation and then upward through exaltation. The ethics on either side hang on that shape.",
    terms: [
      {
        term: "form",
        original: "morphē",
        gloss: "outward shape",
        note: "The word describes the shape something takes, and Paul uses it twice, of God and of a servant, so the poem turns on a change of form, not of being.",
      },
      {
        term: "emptied",
        original: "ekenōsen",
        gloss: "emptied",
        note: "The verb behind kenosis: he did not cease to be what he was, but he took what he was not, and the next line says which.",
      },
      {
        term: "highly exalted",
        original: "hyperypsōsen",
        gloss: "raised to the highest place",
        note: "A compound verb, as if the Father's answer outdoes the descent, and the name given is the one at which every knee bows.",
      },
      {
        term: "work out",
        original: "katergazesthe",
        gloss: "carry to completion",
        note: "Not earn but finish, and verse 13 gives the reason it is possible: God is at work in the willing as well as the doing.",
      },
    ],
    reception:
      "Verses 6 through 11 became the church's chief hymn for the two natures of Christ, and Leo's Tome quoted verses 6 and 7 when the incarnation was debated at Chalcedon. Later disputes about the worship of Christ turned on “every knee should bow”, and the kenosis debate of the nineteenth century turned on verse 7.",
    sources: [
      "Isaiah 45:23 (WEB)",
      "Philippians 2:1-30 (WEB)",
      "BDAG, s.v. morphē, kenoō",
    ],
  },

  "Isaiah 53": {
    setting:
      "The fourth servant song, set inside the book's larger argument about a servant who saves. The speaker shifts: the community speaks in the first person, then God speaks, and the servant himself never does. The chapter describes suffering in the past tense, as something already borne.",
    genre:
      "Hebrew poetry, and a song of testimony. The lines are parallel and often compact, and the tenses move between what was suffered and what will come of it, which is why readers have argued over whether the song looks back or forward.",
    terms: [
      {
        term: "pierced",
        original: "mĕḥōlal",
        gloss: "wounded, defiled",
        note: "The verb is rare and its precise sense disputed; the parallelism with crushed supports a violent wounding rather than a mere bruise.",
      },
      {
        term: "borne",
        original: "nāśā",
        gloss: "carried",
        note: "The same verb is used for bearing sin and for bearing a burden, and it returns at the end of the chapter, which is how the song frames substitution.",
      },
      {
        term: "offering for sin",
        original: "āšām",
        gloss: "guilt offering",
        note: "A specific sacrifice from Leviticus, offered when guilt needed reparation, not merely the general word for sacrifice.",
      },
      {
        term: "servant",
        original: "ʿebed",
        gloss: "servant, slave",
        note: "The word carries the weight of the whole book: Israel is the servant, and the song narrows the title to one who suffers for the many.",
      },
    ],
    reception:
      "The New Testament quotes the song more than any other Old Testament passage for the death of Christ, and the Ethiopian official in Acts 8 is reading “as a lamb that is led to the slaughter” when Philip explains the gospel. Jewish readers have heard the servant as Israel or as a righteous remnant, and the difference between those readings is one of the oldest in the interpretation of Scripture.",
    sources: [
      "Isaiah 52:13-53:12 (WEB)",
      "Leviticus 5:14-19 (WEB)",
      "Acts 8:26-40 (WEB)",
      "BDB, s.v. ḥalal, ʾasham",
    ],
  },

  "John 10": {
    setting:
      "Jesus is in Jerusalem around the Feast of Dedication, and the chapter gathers a parable about sheep, a dispute about his identity, and a claim that his works testify for him. The chapter divides its hearers and ends with many believing beyond the Jordan.",
    genre:
      "Discourse built on a parable and its explanation. Jesus tells the figure, is misunderstood, then explains it twice, as door and as shepherd. The disputes that follow are part of the argument rather than an interruption.",
    terms: [
      {
        term: "sheep fold",
        original: "aulē",
        gloss: "walled enclosure",
        note: "A courtyard or pen with one opening, which is why the door image works: no other way in, and one shepherd at the gap.",
      },
      {
        term: "good shepherd",
        original: "poimēn ho kalos",
        gloss: "the noble shepherd",
        note: "Kalos is beautiful or noble, not merely useful, and the phrase is tied to laying down his life rather than to competence.",
      },
      {
        term: "lay down",
        original: "tithēsin",
        gloss: "sets down",
        note: "The verb is used for setting down a garment, and verse 18 makes the point: no one takes his life, he sets it down.",
      },
      {
        term: "are one",
        original: "hen",
        gloss: "one thing",
        note: "The predicate is neuter: one thing, one power, not one person, which is why the hearers reach for stones.",
      },
    ],
    reception:
      "“I am the good shepherd” gave the church its language for pastoral office, and verse 16 its hope for one flock. Verse 28 became a central text for the perseverance of the saints, and verse 30 for the doctrine of the Trinity, while verses 34 through 36 are the church's example of Jesus arguing from a lesser text to a greater claim.",
    sources: [
      "Ezekiel 34 (WEB)",
      "Psalms 23 (WEB)",
      "John 10:1-42 (WEB)",
      "BDAG, s.v. aulē, kalos",
    ],
  },

  "Romans 12": {
    setting:
      "Paul turns from eleven chapters of argument to its consequences. Having shown that God's mercies are free, he now asks for bodies, minds, and ordinary life in response. The Roman church was a mix of Jewish and Gentile believers, and the chapter's ethics are meant to hold them together.",
    genre:
      "Epistle, and a pivot from doctrine to practice. Verses 1 and 2 give the pattern, then the chapter works through humility, gifts, love, and enemies in short independent clauses, more like wisdom sayings than a single argument.",
    terms: [
      {
        term: "living sacrifice",
        original: "thysian zōsan",
        gloss: "a sacrifice that lives",
        note: "An oxymoron: the temple kills what it offers, and Paul asks for a body that stays alive and keeps being offered.",
      },
      {
        term: "conformed",
        original: "syschēmatizesthe",
        gloss: "shaped to a pattern",
        note: "The word is about outward shape, and it is set against transformed, which is about inward change that shows.",
      },
      {
        term: "measure of faith",
        original: "metron pisteōs",
        gloss: "a measured share of trust",
        note: "The point is not that some believe more but that each has been given a portion, so no one has grounds to think too highly.",
      },
      {
        term: "heap coals",
        original: "anthrakas pyros",
        gloss: "coals of fire",
        note: "A proverb Paul quotes without explaining; the church has read it as shame that melts an enemy, and as judgment, and the next verse points to the first.",
      },
    ],
    reception:
      "“present your bodies a living sacrifice” became the church's language for worship as a whole life, and verse 3 its warning against pride. Verses 9 through 21 are among the most quoted ethical lines in the New Testament, and verse 20's coals of fire has been read as either kindness that shames or kindness that judges.",
    sources: [
      "Romans 12:1-21 (WEB)",
      "Proverbs 25:21-22 (WEB)",
      "BDAG, s.v. syschēmatizō, metron",
    ],
  },

  "Colossians 3": {
    setting:
      "Paul writes to a church he did not found, probably from prison, against teachers who wanted its faith completed by rules and visions. Chapter 3 turns from what is above to what is put off, and it ends with a household code.",
    genre:
      "Epistle built on a clothing image. Verses 1 through 4 set the horizon, 5 through 11 take off the old, 12 through 17 put on the new. The household instructions at the end belong to the same argument, not to a separate topic.",
    terms: [
      {
        term: "hidden",
        original: "kekryptai",
        gloss: "concealed",
        note: "The Christian life is not yet visible, and the tense says it is already stored away with Christ, which is why the next verse can speak of appearing.",
      },
      {
        term: "put off",
        original: "apekdysamenoi",
        gloss: "stripped off",
        note: "The verb is used for taking off clothes, and it is in the past tense: the old self has already been stripped, so the command is to live like it.",
      },
      {
        term: "new man",
        original: "neon anthrōpon",
        gloss: "the new humanity",
        note: "Not merely a nicer individual: the old humanity is one person in Adam and the new is one body in Christ, which is why verse 11 follows.",
      },
      {
        term: "rule",
        original: "brabeuetō",
        gloss: "act as umpire",
        note: "An athletic word: let peace be the official who decides disputed calls in your hearts and in the one body.",
      },
    ],
    reception:
      "Verses 9 and 10 gave the church its language for the old and new self, and “Christ is all, and in all” became a text against treating ethnic or social difference as spiritual rank. The household code at the end was read as upholding the order of the ancient household and, in later centuries, as a text to be argued over.",
    sources: [
      "Colossians 3:1-25 (WEB)",
      "Ephesians 4:17-32 (WEB)",
      "BDAG, s.v. apekdyomai, brabeuō",
    ],
  },

  "Luke 15": {
    setting:
      "Jesus is at table with tax collectors and sinners, and the Pharisees are murmuring about it. The chapter answers the murmur with three parables in a row, each ending in a celebration, and the last one ends without resolving.",
    genre:
      "Three parables, and a crescendo. The lost sheep and the lost coin are told briefly and alike; the lost sons are told at length, and the older brother's refusal is left standing, which is the point for the hearers at the table.",
    terms: [
      {
        term: "repents",
        original: "metanoēsas",
        gloss: "changes his mind",
        note: "The word the parables use for the sinner's turn, and the joy in heaven is attached to that turn rather than to the recovery itself.",
      },
      {
        term: "wasted",
        original: "dieskorpisen",
        gloss: "scattered abroad",
        note: "The same verb used for scattering seed and for scattering a flock, so the son's spending is pictured as dispersal of what belonged to his father.",
      },
      {
        term: "came to himself",
        original: "eis heauton elthōn",
        gloss: "returned to himself",
        note: "A phrase unique in the New Testament: the turning point is described as sanity before it is described as repentance.",
      },
      {
        term: "compassion",
        original: "esplanchnisthē",
        gloss: "moved in the gut",
        note: "The strongest word for pity in the Gospels, and it is the father's, before the son finishes his speech or his apology.",
      },
    ],
    reception:
      "The chapter gave the church its word for repentance and its picture of God as a seeking shepherd and a running father, who says of the returning son, “this, my son, was dead, and is alive again”. The older brother has been read as Israel, as the Pharisees, and as any faithful believer who resents grace, and the parable's open ending keeps all three readings alive.",
    sources: [
      "Luke 15:1-32 (WEB)",
      "Ezekiel 34:11-16 (WEB)",
      "BDAG, s.v. metanoeō, splanchnizomai",
    ],
  },

  "1 John 3": {
    setting:
      "The same letter, and the same conflict: teachers who denied the reality of sin and the obligation of love. Chapter 3 argues that birth from God changes practice, and it answers the objection that sin is inevitable with the claim that it is not.",
    genre:
      "Epistle in short cycles. The argument alternates between what believers are and what they do, and between the two marks of the children of God: righteousness and love. The logic is family resemblance rather than legal requirement.",
    terms: [
      {
        term: "lawlessness",
        original: "anomia",
        gloss: "without law",
        note: "John defines sin as lawlessness, which is not rule-keeping but refusal of God's claim, and the next verses measure it by Christ.",
      },
      {
        term: "seed",
        original: "sperma",
        gloss: "offspring, seed",
        note: "The word can mean the offspring or the seed that produces it, and the point is that a birth leaves a lasting family likeness.",
      },
      {
        term: "lay down",
        original: "tithēnai",
        gloss: "set down",
        note: "The same verb Jesus uses for laying down his life, and verse 16 makes it the definition of love rather than a feeling.",
      },
      {
        term: "persuade",
        original: "peisomen",
        gloss: "set at rest",
        note: "A word for convincing someone, used here of persuading your own heart when it condemns you, which verse 20 answers with God's greater knowledge.",
      },
    ],
    reception:
      "Verses 6 and 9 have divided readers: some take them to mean sinless perfection, others to mean that habitual sin is incompatible with new birth. “God is greater than our heart” is the chapter's comfort for the condemned conscience. Verse 16 became the church's model for sacrificial love, and verse 17 its test of charity.",
    sources: [
      "1 John 3:1-24 (WEB)",
      "John 13:34-35 (WEB)",
      "BDAG, s.v. anomia, sperma",
    ],
  },

  "Galatians 4": {
    setting:
      "Paul argues with churches in Galatia that Gentile believers are being persuaded to take up the law. Chapter 4 uses the image of an heir who is a minor, then turns to Hagar and Sarah to argue from the law itself that the free woman's children are the true heirs.",
    genre:
      "Epistle and an argument by allegory. Verses 1 through 11 apply the heir image to the church; verses 12 through 20 are personal appeal; verses 21 through 31 read Genesis as allegory. The three movements press the same claim.",
    terms: [
      {
        term: "adoption",
        original: "huiothesia",
        gloss: "placement as a son",
        note: "The legal act by which an heir is recognized, and verse 5 says it is what the Son's coming secured for those under the law.",
      },
      {
        term: "elemental principles",
        original: "stoicheia",
        gloss: "basic elements",
        note: "The word can mean the alphabet, the physical elements, or the spirits behind the world; Paul uses it for the powers that held Gentiles and Jews alike in line.",
      },
      {
        term: "allegory",
        original: "allēgoroumena",
        gloss: "read figuratively",
        note: "Paul is not denying the story but claiming a second sense, and the argument depends on the two mothers as two covenants.",
      },
      {
        term: "fullness of the time",
        original: "plērōma tou chronou",
        gloss: "the filling of the time",
        note: "Not merely the right date: the time is filled up, as if history had been waiting for this and arrived.",
      },
    ],
    reception:
      "The allegory of Hagar and Sarah shaped the church's reading of the Old Testament for centuries, and verse 4, “born to a woman, born under the law”, gave the church its language for the incarnation. Some readers hear the allegory as displacing the synagogue, since verse 25 ties the present Jerusalem to Hagar; others hear an argument inside Judaism about two covenants. Verse 6 gave the church its language for adoption.",
    sources: [
      "Genesis 21:1-21 (WEB)",
      "Galatians 4:1-31 (WEB)",
      "Isaiah 54:1 (WEB)",
      "BDAG, s.v. huiothesia, stoicheion",
    ],
  },

  "2 Timothy 3": {
    setting:
      "Paul's last letter, written from prison to a young coworker. Chapter 3 warns about the character of the last days, then turns to Paul's own example and to Scripture as the equipment for the work Timothy has been given.",
    genre:
      "Epistle, and a letter of encouragement with a warning inside it. The vice list is followed by a personal appeal, and the chapter ends with a compact statement about Scripture that became the church's standard text on inspiration.",
    terms: [
      {
        term: "God-breathed",
        original: "theopneustos",
        gloss: "breathed out by God",
        note: "A rare compound, probably coined by Paul: Scripture is what God breathes out, and the next clause names what it is useful for.",
      },
      {
        term: "form",
        original: "morphōsis",
        gloss: "outward appearance",
        note: "The word for shape or semblance: a godliness with the look of it and the power denied, which is the chapter's diagnosis.",
      },
      {
        term: "complete",
        original: "artios",
        gloss: "fitted, complete",
        note: "A word for something fully equipped for its purpose, used of the person who has been through the Scripture's training.",
      },
      {
        term: "profitable",
        original: "ōphelimos",
        gloss: "useful",
        note: "Not merely true but useful: the four purposes named are teaching, reproof, correction, and instruction in righteousness.",
      },
    ],
    reception:
      "Verse 16, “Every Scripture is God-breathed”, is the church's central text on the inspiration of Scripture and was quoted in the Reformation debates about its authority. Verse 12, that the godly will suffer persecution, has been read as a comfort in persecution and, at times, as a badge claimed too easily.",
    sources: [
      "2 Timothy 3:1-17 (WEB)",
      "Psalms 119 (WEB)",
      "BDAG, s.v. theopneustos, artios",
    ],
  },

  "Acts 17": {
    setting:
      "Paul's second journey, moving through Thessalonica and Beroea to Athens. The chapter has three scenes, a synagogue argument, a daily market conversation, and a speech before the Areopagus, and it shows the same gospel addressed to three different audiences.",
    genre:
      "Narrative with a speech at the centre. Luke reports the riots and the Beroean examination of Scripture, then gives Paul's Areopagus address, which quotes Greek poets and builds from creation rather than from the law.",
    terms: [
      {
        term: "reasoned",
        original: "dielexato",
        gloss: "argued back and forth",
        note: "The verb is conversational rather than declarative: Paul's method in the synagogue and the market is dialogue, and the Bereans answer it by searching the Scriptures.",
      },
      {
        term: "examining",
        original: "anakrinontes",
        gloss: "investigating",
        note: "A legal word for inquiry, used here of the Bereans testing Paul's claims against the text, which is why Luke calls them noble.",
      },
      {
        term: "Areopagus",
        original: "Areios pagos",
        gloss: "hill of Ares",
        note: "Both a place and a council, and Luke uses it for the setting of a hearing that is not quite a trial.",
      },
      {
        term: "unknown god",
        original: "agnōstō theō",
        gloss: "a god not known",
        note: "An altar to an unnamed deity gives Paul his opening: what they worship in ignorance, he announces as the creator who is near.",
      },
    ],
    reception:
      "The speech became the church's model for apologetics to a pagan audience, and its quotation of Greek poets, “in him we live, and move, and have our being”, was used by early writers as evidence that truth belongs to God wherever it is found. Verse 30, on times of ignorance overlooked, has been read as a word about those who never heard.",
    sources: [
      "Acts 17:1-34 (WEB)",
      "Isaiah 42:5 (WEB)",
      "BDAG, s.v. anakrinō, Areios pagos",
    ],
  },

};

/** Background for one chapter, or `null` when we have not written it yet. */
export function chapterBackground(
  book: string,
  chapter: number,
): ChapterBackground | null {
  return background[`${book} ${chapter}`] ?? null;
}
