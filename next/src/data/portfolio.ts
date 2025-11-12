import type { ComponentType, SVGProps } from 'react';
import Html5 from '@/icons/Html5';
import Css3 from '@/icons/Css3';
import Tailwind from '@/icons/Tailwind';
import JavaScript from '@/icons/JavaScript';
import TypeScript from '@/icons/TypeScript';
import ReactIcon from '@/icons/ReactIcon';
import Redux from '@/icons/Redux';
import NextIcon from '@/icons/Next';
import Node from '@/icons/Node';
import Github from '@/icons/Github';

export type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;
export type SkillItemDef = { itemKey: string; since: string; icon: SkillIcon };

export const skillsPreData: SkillItemDef[] = [
  { itemKey: 'next', icon: NextIcon, since: '2025.08' },
  { itemKey: 'react', icon: ReactIcon, since: '2024.07' },
  { itemKey: 'redux', icon: Redux, since: '2025.08' },
  { itemKey: 'ts', icon: TypeScript, since: '2025.08' },
  { itemKey: 'tailwind', icon: Tailwind, since: '2025.08' },
  { itemKey: 'html', icon: Html5, since: '2020.03' },
  { itemKey: 'css', icon: Css3, since: '2020.04' },
  { itemKey: 'js', icon: JavaScript, since: '2020.08' },
  { itemKey: 'node', icon: Node, since: '2024.07' },
  { itemKey: 'git', icon: Github, since: '2023.12' },
];

export const experiencePreData = [
  { itemKey: 'capstone' },
  { itemKey: 'preCapstone' },
  { itemKey: 'reactPractice' },
  { itemKey: 'playin' },
];

export const projectsPreData = [
  { itemKey: 'sabiShop' },
  { itemKey: 'portfolio' },
  { itemKey: 'foodRunner' },
  { itemKey: 'weatherDiary' },
  { itemKey: 'seremeety' },
  { itemKey: 'sweetii' },
];
