import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  Building,
  CalendarDays,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';

type Certification = {
  category: 'Acadêmico' | 'Profissional' | 'Executivo';
  type: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  detailsLink?: string;
};

const certifications: Certification[] = [
  {
    category: 'Acadêmico',
    type: 'Mestrado',
    title: 'Mestrado em Ciências da Educação',
    issuer: 'Instituição de Ensino',
    year: 'Não informado',
    description: 'Diploma e histórico do mestrado em ciências da educação.',
    detailsLink: 'https://drive.google.com/file/d/11OSDCx8X85oXbxMAjpGOOtDGtktirX0r/view?usp=drive_link',
  },
  {
    category: 'Acadêmico',
    type: 'Graduação',
    title: 'Graduação em Pedagogia',
    issuer: 'Instituição de Ensino',
    year: 'Não informado',
    description: 'Diploma de graduação em pedagogia.',
    detailsLink: 'https://drive.google.com/file/d/1JGsSEfUtVWgCPdEh3qNbQMbXo5ssWlq1/view?usp=drive_link',
  },
  {
    category: 'Profissional',
    type: 'Especialização',
    title: 'Psicopedagogia Institucional',
    issuer: 'Instituição de Ensino',
    year: 'Não informado',
    description: 'Diploma e histórico da especialização em psicopedagogia institucional.',
    detailsLink: 'https://drive.google.com/file/d/1jkQwGrO0S8txafrAsjhe4bbdRok2pRYD/view?usp=drive_link',
  },
  {
    category: 'Profissional',
    type: 'Especialização',
    title: 'Educação Especial',
    issuer: 'Instituição de Ensino',
    year: 'Não informado',
    description: 'Diploma e histórico da especialização em educação especial.',
    detailsLink: 'https://drive.google.com/file/d/1HHCepXW46dgCbrFI71pJmt_fKRp8vXLO/view?usp=drive_link',
  },
  {
    category: 'Acadêmico',
    type: 'Doutorado',
    title: 'Doutorado (França)',
    issuer: 'Instituição de Ensino',
    year: 'Não informado',
    description: 'Diploma de doutorado obtido na França.',
    detailsLink: 'https://drive.google.com/file/d/1bW2ylVLmbFtm-x8SQvr24rpTzUahhMsz/view?usp=drive_link',
  },
  {
    category: 'Acadêmico',
    type: 'Documento',
    title: 'Histórico do Mestrado',
    issuer: 'Instituição de Ensino',
    year: 'Não informado',
    description: 'Histórico completo do mestrado em ciências da educação.',
    detailsLink: 'https://drive.google.com/file/d/1eBSLXNmnK7j-Wxtc9_WNu3v8TQN4h8vC/view?usp=drive_link',
  },
];

const categoryColors = {
  Acadêmico: 'bg-blue-100 text-blue-800',
  Profissional: 'bg-green-100 text-green-800',
  Executivo: 'bg-purple-100 text-purple-800',
};

const categoryIcon = {
    Acadêmico: <GraduationCap className="h-6 w-6 text-yellow-500" />,
    Profissional: <Award className="h-6 w-6 text-green-500" />,
    Executivo: <Award className="h-6 w-6 text-purple-500" />,
  };

export default function CertificacoesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-primary hover:underline">
                    Sobre
                </Link>
                <span className="text-gray-300">|</span>
                <span className="font-semibold text-primary">Certificados</span>
                <span className="text-gray-300">|</span>
                <Link href="/palestras" className="text-primary hover:underline">
                    Palestras
                </Link>
            </div>
        </div>
      </header>
      <main className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline text-gray-800">
            Formação e Certificações
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Uma sólida base acadêmica e certificações profissionais reconhecidas
            internacionalmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      {categoryIcon[cert.category]}
                    </div>
                    <Badge className={`${categoryColors[cert.category]} border-none`}>
                      {cert.category}
                    </Badge>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{cert.type}</span>
                </div>

                <h2 className="mt-4 text-xl font-headline font-bold text-gray-800">{cert.title}</h2>
                
                <div className="mt-3 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-gray-400" />
                        <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-gray-400" />
                        <span>{cert.year}</span>
                    </div>
                </div>

                <p className="mt-4 text-sm text-gray-600">{cert.description}</p>
                
                <div className="mt-6 text-right">
                    <Button variant="link" asChild className="text-primary">
                        <Link href={cert.detailsLink || '#'} target="_blank" rel="noopener noreferrer">
                            Ver detalhes <ExternalLink className="ml-2 h-4 w-4" />
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