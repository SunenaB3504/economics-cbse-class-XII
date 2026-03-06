import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-env-mm1',
    label: 'Environment',
    children: [
        {
            id: 'u7-env-mm2',
            label: 'Functions',
            children: [
                { id: 'u7-env-mm3', label: 'Resources' },
                { id: 'u7-env-mm4', label: 'Waste' }
            ]
        },
        {
            id: 'u7-env-mm5',
            label: 'Climate Change',
            children: [
                { id: 'u7-env-mm6', label: 'Global Warming' },
                { id: 'u7-env-mm7', label: 'Ozone Depletion' }
            ]
        },
        { id: 'u7-env-mm8', label: 'Sustainable Dev.' }
    ]
};
