import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u6-ch3-mm1',
    label: 'New Economic Policy (1991)',
    children: [
        {
            id: 'u6-ch3-mm2',
            label: 'Drivers',
            children: [
                { id: 'u6-ch3-mm3', label: 'BoP Crisis (Forex depletion)' },
                { id: 'u6-ch3-mm4', label: 'High Inflation & Fiscal Deficit' }
            ]
        },
        {
            id: 'u6-ch3-mm5',
            label: 'LPG Framework',
            children: [
                { id: 'u6-ch3-mm6', label: 'Liberalization (End of Licensing)' },
                { id: 'u6-ch3-mm7', label: 'Privatization (Disinvestment)' },
                { id: 'u6-ch3-mm8', label: 'Globalization (WTO & Outsourcing)' }
            ]
        }
    ]
};
