import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-rural-mm1',
    label: 'Rural Development',
    children: [
        {
            id: 'u7-rural-mm2',
            label: 'Credit',
            children: [
                { id: 'u7-rural-mm3', label: 'NABARD (1982)' },
                { id: 'u7-rural-mm4', label: 'SHGs' }
            ]
        },
        {
            id: 'u7-rural-mm5',
            label: 'Marketing',
            children: [
                { id: 'u7-rural-mm6', label: 'MSP/PDS' },
                { id: 'u7-rural-mm7', label: 'Alternate Channels' }
            ]
        },
        { id: 'u7-rural-mm8', label: 'Organic Farming' }
    ]
};
