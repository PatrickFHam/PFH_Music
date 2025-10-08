import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Divider } from '@heroui/divider';
import { HasBandIcon, HasOrchestraIcon, HasChoirIcon, IsCongregationalIcon } from './icons';
import AudioPreviewButton from "@/components/audiopreviewbutton";



function PieceCard ({props}) {

    return(
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
                <p className="text-md">{props.title}</p>
                <p className="text-small text-default-500">{props.pieceType}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{props.briefDescription}</p>
            </CardBody>
            <Divider />
            <CardFooter className="justify-between">
                <div className="flex flex-row">
                    {props.hasBand === true ? <HasBandIcon /> : null}
                    {props.hasOrchestra === true ? <HasOrchestraIcon /> : null}
                    {props.hasChoir === true ? <HasChoirIcon /> : null}
                    {props.isCongregational === true ? <IsCongregationalIcon /> : null}
                </div>
                <div className="flex flex-row">
                    {props.audioPreviewLink.length > 0 
                        ? <AudioPreviewButton audioSrc={props.audioPreviewLink} />
                        : null
                    }
                </div>
            </CardFooter>
            </Card>
        </div>
    )};

export default PieceCard;

