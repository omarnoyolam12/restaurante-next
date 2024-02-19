import { NextPage } from 'next';
import { MainLayout } from '@/layouts';

import { Header, GallerySection } from '@/components/gallery';

interface Props { }

const Gallery: NextPage<Props> = ({ }) => {
    return (
        <MainLayout
            title='Gallery | Next.js'
            description='Image Gallery'
        >
            <Header />
            <GallerySection />
        </MainLayout>
    )
}

export default Gallery