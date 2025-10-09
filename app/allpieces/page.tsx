import { title } from "@/components/primitives";
import { getPieces } from "@/actions/getPieces";
import PieceCard from "@/components/pieceCard";


export default async function AllPiecesPage() {

  const {pieces} = await getPieces()
  console.log(pieces);
  
  return (
    <div>
      <h1 className={title()}>All Pieces</h1>

      {pieces && pieces.map(singlePiece => <PieceCard key={singlePiece._id} props={singlePiece}></PieceCard>)}
      
    </div>
  );
}

