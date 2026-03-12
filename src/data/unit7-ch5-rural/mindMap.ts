import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-rural-mm1',
    label: 'Rural Development',
    children: [
        {
            id: 'u7-rural-mm2',
            label: 'Credit & Inclusion',
            children: [
                { id: 'u7-rural-mm3', label: 'NABARD (1982) & Social Banking' },
                { id: 'u7-rural-mm4', label: 'SHGs & Jan-Dhan Yojana' }
            ]
        },
        {
            id: 'u7-rural-mm5',
            label: 'Marketing Systems',
            children: [
                { id: 'u7-rural-mm6', label: 'Defects & Reforms (MSP/PDS)' },
                { id: 'u7-rural-mm7', label: 'Alternate Channels (Apni Mandi)' }
            ]
        },
        {
            id: 'u7-rural-mm8',
            label: 'Diversification',
            children: [
                { id: 'u7-rural-mm9', label: 'Livestock (Operation Flood)' },
                { id: 'u7-rural-mm10', label: 'Fisheries & Horticulture' },
                { id: 'u7-rural-mm11', label: 'IT & sustainable options' }
            ]
        },
        {
            id: 'u7-rural-mm12',
            label: 'Eco-Agriculture',
            children: [
                { id: 'u7-rural-mm13', label: 'Organic Farming Benefits' },
                { id: 'u7-rural-mm14', label: 'Future Outlook' }
            ]
        }

    ]
};
