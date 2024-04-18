import {
  CircleIcon,
  DashboardIcon,
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Projects' },
  {
    title: 'Drill Site B',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Alwaha',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Drill Site D',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Drill Site C',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Drill Site A',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Jafurah PJT',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Arwiqa',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Roshn Al Janadruah',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'The Avenues',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Camel festival Arena',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Urban Heritage',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'CAB2024',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Spark',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Jeddah Project',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Neom',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'RiyaMarche',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'P6D',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Saudi Catering',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
  {
    title: 'Madain Village',
    icon: DashboardIcon,
    to: '/auth',
    children: [
      {
        title: 'Camera-1',
        icon: CircleIcon,
        to: '/project-detail',
      },
      {
        title: 'Camera-2',
        icon: CircleIcon,
        to: '/project-detail',
      },
    ]
  },
];

export default sidebarItem;
