import { NextPage } from 'next';
import { MainLayout } from '@/layouts';

import { Header, ListDishes } from '@/components/menu';

interface Props { }

const Menu: NextPage<Props> = ({ }) => {
    return (
        <MainLayout
            title='Menu | Next.js'
            description='Conoce nuestro menu'
        >
            <Header />
            <ListDishes />
        </MainLayout>
    )
}

export default Menu