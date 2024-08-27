export interface Post {
  id: number;
  title: string;
  author: string;
}

interface BibleVersion {
  "alkitab-terjemahan-baru": string;
  "king-james-version": string;
  "new-international-version": string;
}

export interface BibleQuote {
  id: number;
  title: BibleVersion;
  verse: number;
  chapter: number;
  category: string;
  content: BibleVersion;
}
