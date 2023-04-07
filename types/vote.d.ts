import { Candidate } from 'candidate';

export interface Vote {
  id: string;
  publisher: string;
  title: string;
  code: string;
  startDateTime: string;
  endDateTime: string;
  candidates: Candidate[];
  createdAt: string;
  totalVotes: number;
}
