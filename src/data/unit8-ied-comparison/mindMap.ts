
import { MindMapNode, CheatSheetItem } from '../../types';

export const MIND_MAP: MindMapNode = {
  id: 'u8-mm1',
  label: 'Comparative Dev',
  children: [
    {
      id: 'u8-mm2',
      label: 'China Focus',
      children: [
        { id: 'u8-mm3', label: 'GLF (1958)' },
        { id: 'u8-mm3a', label: 'Communes' },
        { id: 'u8-mm4', label: 'Reforms (1978)' },
        { id: 'u8-mm4a', label: 'Dual Pricing' }
      ]
    },
    {
      id: 'u8-mm5',
      label: 'Indicators',
      children: [
        { id: 'u8-mm6', label: 'Demographic (Growth, One-Child)' },
        { id: 'u8-mm6a', label: 'Sectoral (Agri/Ind/Serv)' },
        { id: 'u8-mm7', label: 'Human Dev (HDI)' },
        { id: 'u8-mml1', label: 'Liberty Indicators' }
      ]
    },
    {
      id: 'u8-mmp1',
      label: 'Pakistan/India',
      children: [
        { id: 'u8-mmp2', label: 'Remittances (Pak)' },
        { id: 'u8-mmi1', label: 'Service Growth (India)' },
        { id: 'u8-mmgr1', label: 'Green Revolution' }
      ]
    }
  ]
};
