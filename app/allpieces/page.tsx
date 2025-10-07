import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

import { getPieces } from "@/actions/getPieces";

import PieceCard from "@/components/pieceCard";

import AudioPreviewButton from "@/components/audiopreviewbutton";
import { HasBandIcon, HasChoirIcon, HasOrchestraIcon } from "@/components/icons";


export default async function AllPiecesPage() {

  const {pieces} = await getPieces()
  console.log(pieces);


  return (
    <div>
      <h1 className={title()}>All Pieces</h1>

      {pieces && pieces.map(singlePiece => <PieceCard key={singlePiece._id} props={singlePiece}></PieceCard>)}

      <div className='flex-auto flex-col m-10'>
        <Card className="m-6 max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">STATIC Title</p>
              <p className="text-small text-default-500">STATIC sub-title</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>STATIC description</p>
          </CardBody>
          <Divider />
          <CardFooter className="justify-between">
              <div className="flex flex-row">
                <HasBandIcon />
                <HasOrchestraIcon />
                <HasChoirIcon />
              </div>
              <div className="flex flex-row">
                <AudioPreviewButton audioSrc="audio/ohtheglory.mp3" ></AudioPreviewButton>
              </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

