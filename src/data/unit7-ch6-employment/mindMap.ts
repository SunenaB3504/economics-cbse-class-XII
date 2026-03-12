import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-emp-mm1',
    label: 'Employment',
    children: [
        {
            id: 'u7-emp-mm2',
            label: 'Foundations',
            children: [
                { id: 'u7-emp-mm3', label: 'Workers (545M) & Economic Acts' },
                { id: 'u7-emp-mm4', label: 'WPR (India: 41.1)' }
            ]
        },
        {
            id: 'u7-emp-mm5',
            label: 'Employment Structure',
            children: [
                { id: 'u7-emp-mm6', label: 'Self-Employed (57%) vs Hired' },
                { id: 'u7-emp-mm7', label: 'Primary (46.1%) vs Tertiary' }
            ]
        },
        {
            id: 'u7-emp-mm8',
            label: 'Trends & Issues',
            children: [
                { id: 'u7-emp-mm9', label: 'Jobless Growth & Seasonal Shifts' },
                { id: 'u7-emp-mm10', label: 'Informalisation (94% Unorganised)' },
                { id: 'u7-emp-mm11', label: 'Casualisation Vulnerability' }
            ]
        },
        {
            id: 'u7-emp-mm12',
            label: 'Unemployment & Govt',
            children: [
                { id: 'u7-emp-mm13', label: 'Disguised & Seasonal Types' },
                { id: 'u7-emp-mm14', label: 'MGNREGA (100 Days Guarantee)' }
            ]
        }

    ]
};
