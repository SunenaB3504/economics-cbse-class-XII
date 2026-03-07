import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u6-ch1-mm1',
    label: 'Colonial Period (Eve of Independence)',
    children: [
        {
            id: 'u6-ch1-mm2',
            label: 'Agriculture',
            children: [
                { id: 'u6-ch1-mm3', label: 'Zamindari System (Exploitation)' },
                { id: 'u6-ch1-mm4', label: 'Commercialisation (Cash crops)' },
                { id: 'u6-ch1-mm5', label: 'Low Productivity' }
            ]
        },
        {
            id: 'u6-ch1-mm6',
            label: 'Industry & Trade',
            children: [
                { id: 'u6-ch1-mm7', label: 'De-industrialisation (Handicrafts decay)' },
                { id: 'u6-ch1-mm8', label: 'Drain of Wealth' },
                { id: 'u6-ch1-mm9', label: 'Suez Canal (Colonial grip)' }
            ]
        }
    ]
};
