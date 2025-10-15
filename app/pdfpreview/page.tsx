import { title } from "@/components/primitives";
import PdfViewerWrapper from "@/components/pdfViewerWrapper";


export default function PdfPreviewPage() {

  const remotePdfUrl = 'https://l0ooywyaxp0nribh.public.blob.vercel-storage.com/PDFs/Amazing%20Grace%20%28arr.%20pfH%29%20-%20Full%20score.pdf';

  return (
    <div>
      <h1 className={title()}>PDF Reader Preview</h1>
      <PdfViewerWrapper fileUrl={remotePdfUrl} />
    </div>
  );
};

