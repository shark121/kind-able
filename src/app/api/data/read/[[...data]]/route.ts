import { NextResponse, NextRequest } from "next/server";
import { data } from "../../../../../../data";

export async function GET(req: NextRequest, context: { params: { data: string[] } }) {
  const reqdata = await context.params
    console.log(reqdata);
  return reqdata.data ? NextResponse.json({data: data.fundraisers.find(el => el.id === reqdata.data[0])}) : NextResponse.json({ data: data.fundraisers });
}
