'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export async function submitContact(formData: FormData) {
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string; // Optional

    if (!email || !businessName) {
        return { success: false, message: 'Missing required fields' };
    }

    try {
        const payload = await getPayload({ config });

        await payload.create({
            collection: 'contact-submissions',
            data: {
                businessName,
                email,
                phone,
                service,
                message,
                status: 'new'
            }
        });

        return { success: true, message: 'Submission successful' };
    } catch (error) {
        console.error('Submission error:', error);
        return { success: false, message: 'Internal server error' };
    }
}
