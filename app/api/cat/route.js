import { NextResponse } from "next/server";

export async function GET() {
  const CatData = {
    message: "저는 귀여운 고양이 입니다.",
    image:
      "https://i.pinimg.com/736x/80/0b/68/800b68ce974655bab8f4bde1eceee087.jpg",
  };
  return NextResponse.json(CatData);
}
