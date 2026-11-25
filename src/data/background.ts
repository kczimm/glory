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
};

/** Background for one chapter, or `null` when we have not written it yet. */
export function chapterBackground(
  book: string,
  chapter: number,
): ChapterBackground | null {
  return background[`${book} ${chapter}`] ?? null;
}
