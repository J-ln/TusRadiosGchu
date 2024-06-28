// lib/fetchRadios.ts
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { Radio } from '@/lib/data';

const CACHE_TTL = 1000 * 60 * 10; // 10 minutos

export const fetchRadios = async (): Promise<Radio[]> => {
    try {
        const radiosCollection = collection(db, 'radios');
        const radioSnapshot = await getDocs(radiosCollection);
        const radioList = radioSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Radio));
        return radioList;
    } catch (error) {
        console.error("Error fetching radios: ", error);
        return [];
    }
};