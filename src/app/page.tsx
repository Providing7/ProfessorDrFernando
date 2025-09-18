import Image from 'next/image';
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Users,
  CalendarDays,
  Smile,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const professor = {
  name: 'Prof. Dr. Fernando Joaquim de Santana',
  title: 'Especialista em Liderança e Gestão de Pessoas',
  bio: 'Com mais de 20 anos de experiência, Dr. Santana é uma referência em desenvolvimento de lideranças e gestão de equipes de alta performance. Sua missão é transformar o potencial de profissionais em resultados extraordinários, combinando uma abordagem humanizada com estratégias inovadoras. Apaixonado por educação corporativa, dedica-se a criar ambientes de trabalho mais produtivos, colaborativos e inspiradores.',
  location: 'Florianópolis, SC, Brasil',
  email: 'contato@fernandosantana.com',
  phone: '+55 (48) 99999-9999',
  linkedin: 'https://linkedin.com/in/fernandojsantana',
  website: 'https://fernandosantana.com',
};

const stats = [
  { icon: Users, value: '15.000+', label: 'Profissionais capacitados' },
  { icon: CalendarDays, value: '20+', label: 'Anos de experiência' },
  { icon: Smile, value: '98%', label: 'Nível de satisfação' },
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-body text-foreground/90">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
                <span className="font-semibold text-primary">Sobre</span>
                <span className="text-gray-300">|</span>
                <Link href="/certificacoes" className="text-primary hover:underline">
                    Certificados
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/palestras" className="text-primary hover:underline">
                    Palestras
                </Link>
            </div>
        </div>
      </header>
      <main className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-12 md:text-left">
          <div className="relative h-48 w-48 shrink-0 md:h-64 md:w-64">
            <Image
              src="https://picsum.photos/seed/prof/400/400"
              alt={`Foto de perfil do ${professor.name}`}
              fill
              priority
              className="rounded-full object-cover shadow-lg ring-4 ring-accent/50"
              data-ai-hint="professional headshot"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              {professor.name}
            </h1>
            <p className="mt-2 text-lg text-foreground/80 md:text-xl">
              {professor.title}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-muted-foreground md:justify-start">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{professor.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${professor.email}`} className="hover:text-primary hover:underline">
                  {professor.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>{professor.phone}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/5 hover:text-primary">
                <a href={professor.linkedin} target="_blank" rel="noopener noreferrer">
                  <Icons.LinkedIn className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/5 hover:text-primary">
                <a href={professor.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-5 w-5" /> Website
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/50" />

        <section id="sobre">
          <h2 className="font-headline text-3xl font-bold text-primary">Sobre Mim</h2>
          <p className="mt-4 max-w-prose leading-relaxed text-foreground/80">
            {professor.bio}
          </p>
        </section>

        <Separator className="my-12 bg-border/50" />
        
        <section id="destaques">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Card key={index} className="transform border-border/50 bg-card/70 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="font-headline text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="mt-16 border-t border-border/50 bg-card/50 py-6">
        <div className="container mx-auto max-w-5xl text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {professor.name}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
