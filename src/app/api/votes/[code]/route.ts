import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { Candidate } from '@/types/candidate';
import { Vote } from '@/types/vote';
import { getServerSession } from 'next-auth';

export const GET = async (req: NextRequest, context: { params: { code: string } }) => {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ status: 'UNAUTHORIZED', code: 401, message: 'Silahkan login terlebih dahulu' }, { status: 401 });
  const { code } = context.params;
  try {
    const vote = await prisma.votes.findFirst({
      select: {
        id: true,
        publisher: true,
        title: true,
        code: true,
        startDateTime: true,
        endDateTime: true,
        candidates: true,
        createdAt: true,
        deletedAt: false,
      },
      where: {
        code: code as string,
        deletedAt: null,
      },
    });
    if (vote === null) return NextResponse.json({ message: 'Voting tidak ditemukan.' }, { status: 404 });

    const participants = await prisma.participant.findMany({
      select: {
        candidate: true,
        email: true,
        participateAt: true,
      },
      where: {
        code: code as string,
      },
    });

    //Count Vote for each Candidate
    var candidates: Candidate[] = [];
    if (participants) {
      candidates = vote?.candidates.map((candidate) => {
        const votes = participants.filter((participant) => participant.candidate === candidate.name).length || 0;
        return {
          ...candidate,
          votes,
        };
      }) as Candidate[];
    }

    const result = {
      id: vote?.id,
      publisher: vote?.publisher,
      title: vote?.title,
      code: vote?.code,
      candidates: candidates,
      startDateTime: String(vote?.startDateTime),
      endDateTime: String(vote?.endDateTime),
      createdAt: String(vote?.createdAt),
      totalVotes: candidates ? candidates?.reduce((acc, candidate: any) => acc + (candidate.votes ? candidate.votes : 0), 0) : 0,
    } as Vote;

    return NextResponse.json({ status: 'OK', code: 200, result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const PUT = async (req: NextRequest, context: { params: { code: string } }) => {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ status: 'UNAUTHORIZED', code: 401, message: 'Silahkan login terlebih dahulu' }, { status: 401 });
  const { candidates, endDate, startDate, title } = await req.json();
  const { code } = context.params;
  try {
    const result = await prisma.votes.update({
      where: {
        code: code,
      },
      data: {
        candidates: candidates,
        endDateTime: endDate,
        startDateTime: startDate,
        title: title,
      },
    });

    if (result === null) return NextResponse.json({ message: 'Code not found!' }, { status: 404 });

    return NextResponse.json({ status: 'OK', code: 200, result }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, context: { params: { code: string } }) => {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ status: 'UNAUTHORIZED', code: 401, message: 'Silahkan login terlebih dahulu' }, { status: 401 });
  const { code } = context.params;
  try {
    await prisma.votes.update({
      where: {
        code: code as string,
      },
      data: {
        deletedAt: new Date().toString(),
      },
    });
    return NextResponse.json({ status: 'OK', code: 200, message: 'Vote Berhasil dihapus' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
