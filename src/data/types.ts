/**
 * Glory — core data model.
 *
 * The app is a question-driven journey through Scripture:
 *   Question -> read Scripture (chapters + verses) -> Scripture raises new questions -> continue.
 *
 * Everything is a node in a graph:
 *   - Questions (the learner's journey)
 *   - Passages (whole chapters to read)
 *   - Verses (the grounding)
 * The edges are the pedagogy: `raises` and `followsFrom` connect questions to the
 * questions that Scripture itself provokes.
 */

export interface Category {
  /** stable slug, e.g. "jesus-christ" */
  slug: string;
  title: string;
  tagline: string;
  order: number;
  /** short list of entry questions for this trail (slugs) */
  entry: string[];
}

export interface Passage {
  /** book name as used by the scripture data, e.g. "John" */
  book: string;
  /** chapter number */
  chapter: number;
  /** what to look for while reading */
  title: string;
  /** one-line guidance on what to notice */
  lookFor: string;
  /** optional focus range within the chapter, e.g. "5-15" or "16" */
  focus?: string;
}

export interface StudyPoint {
  heading: string;
  body: string;
  /** verse references that ground this point, e.g. "John 14:16-17" */
  verses: string[];
}

export interface Question {
  slug: string;
  question: string;
  /** category slug */
  category: string;
  /** short answer — shown on cards and as the lead paragraph */
  summary: string;
  /** whole chapters to read as the heart of the study */
  passages: Passage[];
  /** the detailed study, point by point, each grounded in verses */
  points: StudyPoint[];
  /** verses to meditate on / memorize */
  keyVerses: string[];
  /** question slugs this study naturally raises — the journey continues here */
  raises: string[];
  /** question slugs that lead to this one */
  followsFrom: string[];
  /** sibling questions worth visiting */
  related: string[];
  /** future questions this study raises that we haven't written yet */
  planned: string[];
  order: number;
}
