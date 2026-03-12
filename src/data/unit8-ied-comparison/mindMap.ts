import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u8-mm1',
    label: 'Comparative Development',
    children: [
        {
            id: 'u8-mm2',
            label: 'Foundations',
            children: [
                { id: 'u8-mm3', label: 'Chronology (Plan/Reform)' },
                { id: 'u8-mm4', label: 'China Model (GLF, 26k Communes)' }
            ]
        },
        {
            id: 'u8-mm5',
            label: 'Economic Comparison',
            children: [
                { id: 'u8-mm6', label: 'Demographics (Pak 2.05% Growth)' },
                { id: 'u8-mm7', label: 'Sectoral Bypass (India/Pak Services)' }
            ]
        },
        {
            id: 'u8-mm8',
            label: 'Well-being',
            children: [
                { id: 'u8-mm9', label: 'HDI (IMR: China 7.4 vs Pak 57.2)' },
                { id: 'u8-mm10', label: 'Poverty & Liberty Indicators' }
            ]
        }
    ]
};
