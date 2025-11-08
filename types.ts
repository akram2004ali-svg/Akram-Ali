
import type React from 'react';

export interface Contact {
  name: string;
  role: string;
  phone: string;
  avatar?: string;
}

export interface InfoContact {
    title: string;
    description: string;
    phone: string;
    icon: React.ComponentType<{ className?: string }>;
}
