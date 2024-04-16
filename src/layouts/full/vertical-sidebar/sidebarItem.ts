import {
  CircleIcon,
  WindmillIcon,
  TypographyIcon,
  ShadowIcon,
  PaletteIcon,
  KeyIcon,
  BugIcon,
  DashboardIcon,
  BrandChromeIcon,
  HelpIcon
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
    title: 'Project',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Project 1',
        icon: CircleIcon,
        to: '/projects',
        children: [
          {
            title: 'Camera 1',
            icon: CircleIcon,
            to: '/project-detail',
          },
        ]
      },
    ]
  },
];

export default sidebarItem;
