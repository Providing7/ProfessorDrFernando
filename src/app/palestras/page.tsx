import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    Presentation,
  CalendarDays,
  ExternalLink,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Talk = {
  title: string;
  event: string;
  year: number;
  description: string;
  attendees: number;
  detailsLink?: string;
  category: string;
};

const talks: Talk[] = [
    {
        title: 'O Futuro da Liderança no Mundo Digital',
        event: 'Congresso Nacional de Gestão',
        year: 2023,
        description: 'Análise das competências essenciais para líderes na era da transformação digital e inteligência artificial.',
        attendees: 500,
        detailsLink: '#',
        category: 'Liderança',
    },
    {
        title: 'Inteligência Emocional para Equipes de Alta Performance',
        event: 'Semana da Inovação',
        year: 2022,
        description: 'Como desenvolver a inteligência emocional para melhorar a colaboração, comunicação e resultados da equipe.',
        attendees: 300,
        detailsLink: '#',
        category: 'Desenvolvimento Pessoal',
    },
    {
        title: 'Como Construir uma Cultura Organizacional Forte',
        event: 'Webinar Liderança Exponencial',
        year: 2021,
        description: 'Estratégias práticas para criar uma cultura que atrai, engaja e retém talentos, impulsionando o crescimento.',
        attendees: 1200,
        detailsLink: '#',
        category: 'Cultura Organizacional',
    },
    {
        title: 'Gestão de Mudanças em Tempos de Incerteza',
        event: 'Fórum de RH Estratégico',
        year: 2023,
        description: 'Abordagens para liderar equipes através de processos de mudança, minimizando resistências e maximizando a adesão.',
        attendees: 450,
        detailsLink: '#',
        category: 'Gestão de Mudanças',
    },
];

const categoryColors: { [key: string]: string } = {
    'Liderança': 'bg-red-100 text-red-800',
    'Desenvolvimento Pessoal': 'bg-sky-100 text-sky-800',
    'Cultura Organizacional': 'bg-amber-100 text-amber-800',
    'Gestão de Mudanças': 'bg-indigo-100 text-indigo-800',
};


export default function PalestrasPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-primary hover:underline">
                    Sobre
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/certificacoes" className="text-primary hover:underline">
                    Certificados
                </Link>
                <span className="text-gray-300">|</span>
                <span className="font-semibold text-primary">Palestras</span>
            </div>
        </div>
      </header>
      <main className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline text-gray-800">
            Palestras e Workshops
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Compartilhando conhecimento e inspirando equipes em eventos nacionais e internacionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {talks.map((talk, index) => (
            <Card key={index} className="bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col md:flex-row">
              <div className="p-6 flex-shrink-0 md:border-r md:w-48 flex md:flex-col justify-start items-center md:items-center text-center">
                <Presentation className="h-12 w-12 text-primary mb-4 hidden md:block" />
                <div className='text-left md:text-center'>
                    <p className="font-headline text-2xl font-bold text-primary">{talk.year}</p>
                    <Badge className={`${categoryColors[talk.category]} mt-2 border-none`}>
                        {talk.category}
                    </Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-1">
                <h2 className="text-xl font-headline font-bold text-gray-800">{talk.title}</h2>
                <p className="mt-1 text-sm font-semibold text-primary">{talk.event}</p>
                <p className="mt-4 text-sm text-gray-600">{talk.description}</p>
                
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>{talk.attendees}+ participantes</span>
                    </div>
                    <Button variant="link" asChild className="text-primary p-0 h-auto">
                        <Link href={talk.detailsLink || '#'}>
                            Saber mais <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
