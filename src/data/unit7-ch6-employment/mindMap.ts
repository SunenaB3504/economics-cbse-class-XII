import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-emp-mm1',
    label: 'Employment',
    children: [
        {
            id: 'u7-emp-mm2',
            label: 'Terms',
            children: [
                { id: 'u7-emp-mm3', label: 'WPR' },
                { id: 'u7-emp-mm4', label: 'Labor Force' }
            ]
        },
        {
            id: 'u7-emp-mm5',
            label: 'Sector Trends',
            children: [
                { id: 'u7-emp-mm6', label: 'Informalisation' },
                { id: 'u7-emp-mm7', label: 'Casualisation' }
            ]
        },
        { id: 'u7-emp-mm8', label: 'Unemployment' }
    ]
};
