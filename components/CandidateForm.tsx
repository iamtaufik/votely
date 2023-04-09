'use client';
import { useEffect, useState } from 'react';
import { Candidate } from '@/types/candidate';
interface Props {
  candidate: Candidate;
  submitCandidate: (candidate: Candidate) => void;
  removeCandidateForm: (key: number) => void;
}
export default function CandidateForm(props: Props) {
  const [candidate, setCandidate] = useState<Candidate>({
    key: 0,
    name: '',
    title: '',
  });

  useEffect(() => {
    setCandidate(props.candidate);
  }, [props.candidate]);

  useEffect(() => {
    props.submitCandidate(candidate);
  }, [candidate]);

  return (
    <div className="flex flex-row w-3/4 gap-2 p-5 border shadow-md lg:w-1/4 border-zinc-100 shadow-zinc-100">
      <div className="self-start order-3">
        <div className="w-6 h-6 cursor-pointer hover:bg-zinc-100 text-zinc-300" onClick={() => props.removeCandidateForm(candidate.key)}>
          X
        </div>
      </div>
      <h1 className="flex items-center self-center justify-center order-1 w-1/2 text-4xl text-center rounded-full bg-zinc-100 aspect-square">{props.candidate.key}</h1>
      <div className="order-2 w-1/2 ">
        <label className="mt-3 mb-1 text-sm">Nama Kandidat</label>
        <input type="text" className="w-full py-1" onChange={(e) => setCandidate({ ...candidate, name: e.target.value })} placeholder="Nama Kandidat" />
      </div>
    </div>
  );
}
