import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { generateCode } from '@/libs/generateCode';
import { getServerSession } from 'next-auth';

export const POST = async (req: NextRequest) => {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ status: 'UNAUTHORIZED', code: 401, message: 'Silahkan login terlebih dahulu' }, { status: 401 });
  const { candidates, endDateTime, startDateTime, title } = await req.json();
  const email = session.user?.email!;
  try {
    const result = await prisma.votes.create({
      data: {
        candidates: candidates,
        endDateTime: endDateTime,
        startDateTime: startDateTime,
        title: title,
        publisher: email,
        code: generateCode(7),
        deletedAt: null,
      },
    });

    return NextResponse.json({ status: 'CREATED', code: 201, result }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ status: 'UNAUTHORIZED', code: 401, message: 'Silahkan login terlebih dahulu' }, { status: 401 });
  const email = session?.user?.email!;
  try {
    const result = await prisma.votes.findMany({
      where: {
        publisher: email,
        deletedAt: null,
      },
    });

    return NextResponse.json({ status: 'OK', code: 200, result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
