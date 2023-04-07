import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';
import { getServerSession } from 'next-auth';

export const GET = async (req: NextRequest, context: { params: { code: string } }) => {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ status: 'UNAUTHORIZED', code: 401, message: 'Silahkan login terlebih dahulu' }, { status: 401 });
  const { code } = context.params;
  const email = session.user?.email!;
  try {
    const result = await prisma.participant.findFirst({
      where: {
        email: email,
        code: code as string,
      },
    });

    if (result === null) return NextResponse.json({ status: 'NOT FOUND', code: 404 }, { status: 404 });

    return NextResponse.json({ status: 'OK', code: 200, result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
