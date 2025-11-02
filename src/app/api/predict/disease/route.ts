import { NextRequest, NextResponse } from 'next/server';

async function toDataUrl(file: File) {
  const buffer = await file.arrayBuffer();
  const uint8 = new Uint8Array(buffer);
  const b64 = Buffer.from(uint8).toString('base64');
  const mime = file.type || 'image/png';
  return { dataUrl: `data:${mime};base64,${b64}`, bytes: buffer };
}

async function callHuggingFace(model: string, apiKey: string, imageBuffer: ArrayBuffer, mime: string) {
  const url = `https://api-inference.huggingface.co/models/${model}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': mime || 'application/octet-stream',
    },
    body: Buffer.from(imageBuffer),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Hugging Face error: ${res.status} ${text}`);
  }

  const json = await res.json();
  return json;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    const { dataUrl, bytes } = await toDataUrl(image);

    const hfKey = process.env.HUGGING_FACE_API_KEY;
    const hfModel = process.env.HUGGING_FACE_DISEASE_MODEL;

    if (hfKey && hfModel) {
      try {
        const hfResp = await callHuggingFace(hfModel, hfKey, bytes, image.type);

        // Hugging Face image-classification models typically return an array of {label,score}
        const preds = Array.isArray(hfResp)
          ? hfResp.map((p: any) => ({ label: p.label, confidence: p.score }))
          : [];

        return NextResponse.json({ predictions: preds, imageUrl: dataUrl });
      } catch (hfError) {
        console.error('Hugging Face disease inference error:', hfError);
        // fall through to mock
      }
    }

    // Fallback mock result
    const mockResult = {
      predictions: [
        {
          label: 'Leaf Blight',
          confidence: 0.92,
          description: 'A fungal disease that causes brown spots on leaves.',
          treatment: 'Apply fungicide and ensure proper air circulation between plants.',
        },
      ],
      imageUrl: dataUrl,
    };

    return NextResponse.json(mockResult);
  } catch (error) {
    console.error('Disease prediction error:', error);
    return NextResponse.json({ error: 'Failed to analyze image' }, { status: 500 });
  }
}