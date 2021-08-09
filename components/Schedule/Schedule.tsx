import dynamic from 'next/dynamic'

export const Schedule = dynamic(() => import('./ScheduleComponent'), { ssr: false });
