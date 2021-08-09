import React, { FC } from 'react';
import { Rect, Text, Group } from 'react-konva';
import { formatText, formatTime } from 'formatters';

export interface ScheduleItemProps {
    x: number;
    y: number; 
    timezone: string | null;
    data: { 
        start: string 
        end: string 
        summary: string
    };
}

export const ScheduleItem:FC<ScheduleItemProps> = ({ x, y, data, timezone }) => {
    return (
        <Group key={data.summary} x={0} y={0} draggable>
            <Rect
                x={x}
                y={y}
                width={120}
                height={39}
                fill="#6be37f"
            />
            <Rect
                x={x + 2}
                y={y}
                width={118}
                height={39}
                fill="#c4f4cc"
            />                             
            <Text 
                x={x + 5} 
                y={y + 9} 
                text={formatText(`${formatTime(data.start, timezone)}-${formatTime(data.end, timezone)}`)} 
                fontSize={10} 
                fontFamily="Inter"
                fontStyle="normal"
                fill="#39ae4c" 
            />
            <Text 
                x={x + 5} 
                y={y + 20} 
                ellipsis
                text={formatText(data.summary)} 
                fontSize={12}
                fontFamily="Inter" 
                fontStyle="bold"
                fill="#39ae4c" 
            />
    </Group>)
}
