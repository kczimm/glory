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

};

/** Background for one chapter, or `null` when we have not written it yet. */
export function chapterBackground(
  book: string,
  chapter: number,
): ChapterBackground | null {
  return background[`${book} ${chapter}`] ?? null;
}
