import { AppLocation } from '../types';

export const locationsData: AppLocation[] = [
  // Andhra Pradesh Hierarchy
  {
    id: 'ap',
    state: 'Andhra Pradesh',
    district: '',
    slug: 'andhra-pradesh',
    path: '/andhra-pradesh',
    level: 'state'
  },
  {
    id: 'ap-kurnool',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    slug: 'kurnool',
    path: '/andhra-pradesh/kurnool',
    level: 'district',
    parentId: 'ap'
  },
  {
    id: 'ap-kurnool-adoni',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Adoni',
    slug: 'adoni',
    path: '/andhra-pradesh/kurnool/adoni',
    level: 'mandal',
    parentId: 'ap-kurnool'
  },
  {
    id: 'ap-kurnool-adoni-arekal',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Adoni',
    village: 'Arekal',
    slug: 'arekal',
    path: '/andhra-pradesh/kurnool/adoni/arekal',
    level: 'village',
    parentId: 'ap-kurnool-adoni'
  },

  // Telangana Hierarchy
  {
    id: 'tg',
    state: 'Telangana',
    district: '',
    slug: 'telangana',
    path: '/telangana',
    level: 'state'
  },
  {
    id: 'tg-hyderabad',
    state: 'Telangana',
    district: 'Hyderabad',
    slug: 'hyderabad',
    path: '/telangana/hyderabad',
    level: 'district',
    parentId: 'tg'
  }
];

export const getLocationByPath = (path: string): AppLocation | undefined => {
  const normalizedPath = path.toLowerCase().replace(/\/+$/, '') || '/';
  return locationsData.find(loc => loc.path.toLowerCase() === normalizedPath);
};

export const getChildLocations = (parentId: string): AppLocation[] => {
  return locationsData.filter(loc => loc.parentId === parentId);
};

export const getLocationHierarchy = (loc: AppLocation): AppLocation[] => {
  const hierarchy: AppLocation[] = [];
  let current: AppLocation | undefined = loc;
  while (current) {
    hierarchy.unshift(current);
    current = locationsData.find(l => l.id === current?.parentId);
  }
  return hierarchy;
};
