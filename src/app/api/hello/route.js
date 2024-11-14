import { NextResponse } from 'next/server';
// src/app/api/hello/route.j

export async function GET() {
    return NextResponse.json({ message: 'Hello from Next.js!' });
  }
  

 
  // type ResponseData = {
  //   message: string
  // }
   
  // export default function handler(
  //   req: NextApiRequest,
  //   res: NextApiResponse<ResponseData>
  // ) {
  //   res.status(200).json({ message: 'Hello from Next.js!' })
  // }