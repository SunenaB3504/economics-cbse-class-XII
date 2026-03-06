import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-hcf-mm1',
    label: 'Human Capital Formation',
    children: [
        {
            id: 'u7-hcf-mm2',
            label: 'Sources',
            children: [
                { id: 'u7-hcf-mm3', label: 'Education' },
                { id: 'u7-hcf-mm4', label: 'Health' },
                { id: 'u7-hcf-mm5', label: 'Training' },
                { id: 'u7-hcf-mm6', label: 'Migration' }
            ]
        },
        {
            id: 'u7-hcf-mm7',
            label: 'Regulatory Bodies',
            children: [
                { id: 'u7-hcf-mm8', label: 'NCERT' },
                { id: 'u7-hcf-mm9', label: 'UGC' },
                { id: 'u7-hcf-mm10', label: 'AICTE' }
            ]
        }
    ]
};
