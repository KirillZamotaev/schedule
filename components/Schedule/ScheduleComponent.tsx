import React, { FC } from 'react';
import { Stage, Layer } from 'react-konva';
import styled from  '@emotion/styled';
import { ScheduleItem } from './ScheduleItem';

const START_X = 10;
const START_Y = 10;

const Schedule:FC<{ data: any, className?: string, timezone: string | null; }> = ({ className, data, timezone }) => (
    <div className={className}>
        <Stage width={500} height={300}>
            <Layer>
                {Array.isArray(data) && timezone && data.map((item: any) => (
                    <ScheduleItem key={item.title} x={START_X} y={START_Y} data={item} timezone={timezone} />
                ))}    
            </Layer>
        </Stage>
    </div>)

export default styled(Schedule)`
    border: 2px solid #c7c7c7;
`;