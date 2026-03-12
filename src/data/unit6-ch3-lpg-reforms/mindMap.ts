import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u6-ch3-mm1',
    label: 'New Economic Policy (1991)',
    children: [
        {
            id: 'u6-ch3-mm2',
            label: 'Crisis & NEP',
            children: [
                { id: 'u6-ch3-mm3', label: '1991 Crisis (BoP & Fiscal)' },
                { id: 'u6-ch3-mm4', label: 'NEP: Stabilisation & Structural' }
            ]
        },
        {
            id: 'u6-ch3-mm5',
            label: 'Liberalisation',
            children: [
                { id: 'u6-ch3-mm6', label: 'Industrial (6 Licenses)' },
                { id: 'u6-ch3-mm7', label: 'Financial (RBI: Facilitator)' },
                { id: 'u6-ch3-mm8', label: 'Tax & Forex (Devaluation)' }
            ]
        },
        {
            id: 'u6-ch3-mm9',
            label: 'Integration',
            children: [
                { id: 'u6-ch3-mm10', label: 'Privatisation (Maharatnas)' },
                { id: 'u6-ch3-mm11', label: 'Globalisation (Outsourcing)' },
                { id: 'u6-ch3-mm12', label: 'WTO (Successor to GATT)' }
            ]
        },
        {
            id: 'u6-ch3-mm13',
            label: 'Critical Appraisal',
            children: [
                { id: 'u6-ch3-mm14', label: 'Success (GDP & Forex)' },
                { id: 'u6-ch3-mm15', label: 'Failures (Agri & Jobs)' }
            ]
        }
    ]
};

