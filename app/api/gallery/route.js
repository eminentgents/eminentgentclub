import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const imagesDirectory = join(process.cwd(), 'public/images/gallery');
    const imageFiles = await readdir(imagesDirectory);
    
    const images = imageFiles
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/images/gallery/${file}`);
    
    return Response.json({ images });
  } catch (error) {
    return Response.json({ error: 'Unable to read images' }, { status: 500 });
  }
}