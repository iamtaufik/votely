import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { getServerSession } from 'next-auth';

export const POST = async (req: NextRequest) => {
  const session = await getServerSession();
  if (session === null) return NextResponse.json({ status: 'UNAUTHORIZED', code: 401, message: 'Silahkan login terlebih dahulu' }, { status: 401 });
  const { candidate, code } = await req.json();
  const email = session.user?.email!;
  try {
    const result = await prisma.participant.create({
      data: {
        candidate: candidate,
        email: email,
        code: code as string,
      },
    });
    return NextResponse.json({ status: 'CREATED', code: 201, result }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
