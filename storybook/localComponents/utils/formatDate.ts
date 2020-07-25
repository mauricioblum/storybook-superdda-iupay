import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: Date | undefined): string | null {
  return date ? format(date, 'dd MMM', { locale: ptBR }).toUpperCase() : null;
}
