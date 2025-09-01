export type TFlashcardProps = {
  id?: string;
  question: string;
  answer: string;
  lastViewedAt?: string;
  createdAt?: string;
  answeredDetail?: {
    correctCount: number;
    incorrectCount: number;
    totalCount: number;
  };
  ratePrecision: number;
  onPress?: () => void;
};
