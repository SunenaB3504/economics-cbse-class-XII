import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-hcf-mm1',
    label: 'Human Capital Formation',
    children: [
        {
            id: 'u7-hcf-mm2',
            label: 'Foundations',
            children: [
                { id: 'u7-hcf-mm3', label: 'Definition & Sources (EH-TMI)' },
                { id: 'u7-hcf-mm4', label: 'Physical vs Human Capital' },
                { id: 'u7-hcf-mm5', label: 'HC vs Human Development' }
            ]
        },
        {
            id: 'u7-hcf-mm6',
            label: 'Growth & State',
            children: [
                { id: 'u7-hcf-mm7', label: 'Growth Link (NEP 2020)' },
                { id: 'u7-hcf-mm8', label: 'Government Role & Bodies' }
            ]
        },
        {
            id: 'u7-hcf-mm9',
            label: 'Education Sector',
            children: [
                { id: 'u7-hcf-mm10', label: 'Expenditure & RTE Act' },
                { id: 'u7-hcf-mm11', label: 'Future Prospects & Gaps' }
            ]
        }

    ]
};
