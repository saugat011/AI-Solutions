import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  PhoneCall, 
  Image, 
  CalendarDays, 
  Lock, 
  Settings, 
  Shield, 
  Database, 
  Mail, 
  Presentation, 
  UserCheck, 
  Bell
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  title: string;
  icon: LucideIcon;
  href: string;
  badge: number | null;
  submenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: 'http://localhost:3000/admin',
    badge: null
  },
  {
    title: 'User Management',
    icon: Users,
    href: '/admin/users',
    badge: null
  },
  {
    title: 'Content Management',
    icon: FileText,
    href: '/admin/content',
    badge: null
  },
  {
    title: 'Contact Management',
    icon: PhoneCall,
    href: '/admin/contact',
    badge: null
  },
  {
    title: 'Multimedia Management',
    icon: Image,
    href: '/admin/multimedia',
    badge: null
  },
  {
    title: ' Event Management',
    icon: CalendarDays,
    href: '/admin/events',
    badge: null
  },
  {
    title: 'Feedback Management',
    icon: CalendarDays,
    href: '/admin/feedback',
    badge: null
  },

  {
    title: 'User Authentication',
    icon: Lock,
    href: '/admin/authentication',
    badge: null,
  }
];

export const settingsItems: MenuItem[] = [
  {
    title: 'System Settings',
    icon: Settings,
    href: '/admin/settings',
    badge: null
  },
  {
    title: 'Security',
    icon: Shield,
    href: '/admin/security',
    badge: null
  }
];
