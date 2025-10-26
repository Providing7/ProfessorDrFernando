'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video } from 'lucide-react';
import { HeaderNavigation } from '@/components/header-navigation';

type YouTubeVideo = {
  title: string;
  embedUrl: string;
};

const videos: YouTubeVideo[] = [
  {
    title:
      'ENTREVISTA COM A JORNALISTA E ESCRITORA VANUSA LIMA - Programa a VOZ DO POVO',
    embedUrl: 'https://www.youtube.com/embed/BxhU9dS2cT8',
  },
  {
    title: 'REFLEXÃO -Prof. Fernando Joaquim de Santana',
    embedUrl: 'https://www.youtube.com/embed/0gmH4DahYls',
  },
  {
    title: 'DAVI versos GOLIAS',
    embedUrl: 'https://www.youtube.com/embed/7b-bw-TzZKY',
  },
];

export default function PalestrasPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <HeaderNavigation />
        </div>
      </header>
      <main className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline text-gray-800">
            Vídeos e Mídia
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Compartilhando conhecimento e inspirando através de vídeos e
            entrevistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-headline text-gray-800">
                  <Video className="h-6 w-6 text-primary" />
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-md"
                    style={{ minHeight: '400px' }}
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
