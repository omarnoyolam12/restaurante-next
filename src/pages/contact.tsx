import { NextPage } from 'next';

import { MainLayout } from '@/layouts';
import { Header } from '@/components/contact';

interface Props { }

const Contact: NextPage<Props> = ({ }) => {
    return (
        <MainLayout
            title='Contact | Next.js'
            description='Contact us'
        >
            <Header />
        </MainLayout>
    )
}

export default Contact