import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-env-mm1',
    label: 'Environment',
    children: [
        {
            id: 'u7-env-mm2',
            label: 'Functions & Crisis',
            children: [
                { id: 'u7-env-mm3', label: 'Biotic/Abiotic & 4 Functions' },
                { id: 'u7-env-mm4', label: 'Carrying vs Absorptive Capacity' },
                { id: 'u7-env-mm4a', label: 'Global Warming & Ozone Depletion' }
            ]
        },
        {
            id: 'u7-env-mm5',
            label: "India's State",
            children: [
                { id: 'u7-env-mm6', label: 'Poverty-Affluence Dichotomy' },
                { id: 'u7-env-mm7', label: 'Land Degradation & CPCB (1974)' }
            ]
        },
        {
            id: 'u7-env-mm8',
            label: 'Sustainable Development',
            children: [
                { id: 'u7-env-mm9', label: 'Brundtland & Barbier Definitions' },
                { id: 'u7-env-mm10', label: '9 Green Strategies (LPG, CNG, Solar)' },
                { id: 'u7-env-mm11', label: '17 SDGs (Goal 2030)' }
            ]
        }

    ]
};
